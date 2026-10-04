import assert from "node:assert/strict";
import { test } from "node:test";
import * as Effect from "effect/Effect";
import * as Redacted from "effect/Redacted";
import * as Stream from "effect/Stream";
import * as HttpClient from "effect/http/HttpClient";
import * as HttpClientResponse from "effect/http/HttpClientResponse";
import * as Validation from "@distilled.cloud/core/response-validation";
import * as Runpod from "../dist/index.js";

const endpoint = (id = "ep-1") => ({
  id, name: "flux", image: "ghcr.io/test/flux@sha256:123", env: { HF_TOKEN: "secret" },
  type: "QUEUE", gpu: { pools: ["ADA_80_PRO"], count: 1, allowedCudaVersions: [], minCudaVersion: null },
  workers: { min: 0, max: 1 }, scaling: { type: "REQUEST_COUNT", requestCount: 1 },
  dataCenterIds: [], networkVolumes: [], timeout: 1800000, flashboot: "FLASHBOOT",
  createdAt: "2026-10-03T00:00:00Z", registry: null,
});
function fixture(handle) {
  const calls = [];
  let token = "first";
  const http = HttpClient.make((request, url) => Effect.sync(() => {
    const body = request.body._tag === "Uint8Array" ? JSON.parse(new TextDecoder().decode(request.body.body)) : undefined;
    calls.push({ method: request.method, url, body, auth: request.headers.authorization });
    const response = handle(calls.at(-1));
    return HttpClientResponse.fromWeb(request, response instanceof Response ? response : Response.json(response));
  }));
  const run = (effect) => Effect.runPromise(effect.pipe(
    Effect.provideService(Runpod.Credentials, Effect.sync(() => ({ apiKey: Redacted.make(token), apiBaseUrl: "https://api.test" }))),
    Effect.provideService(HttpClient.HttpClient, http), Effect.provide(Validation.strict),
  ));
  return { run, calls, rotate: () => { token = "second"; } };
}

test("v2 calls encode IDs and resolve credentials on every request", async () => {
  const f = fixture(() => endpoint());
  await f.run(Runpod.getEndpoint({ id: "ep/1" }));
  f.rotate();
  await f.run(Runpod.updateEndpoint({ id: "ep/1", image: "new-image" }));
  assert.deepEqual(f.calls.map(c => [c.method, c.url.pathname, c.auth]), [
    ["GET", "/v2/serverless/ep%2F1", "Bearer first"],
    ["PATCH", "/v2/serverless/ep%2F1", "Bearer second"],
  ]);
  assert.deepEqual(f.calls[1].body, { image: "new-image" });
});

test("generated pagination follows nextCursor and accepts null on the final page", async () => {
  const f = fixture(({ url }) => ({ endpoints: [endpoint(url.searchParams.get("cursor") ?? "first")], pagination: { nextCursor: url.searchParams.has("cursor") ? null : "second", hasNextPage: !url.searchParams.has("cursor") } }));
  const all = await f.run(Stream.runCollect(Runpod.listEndpoints.items({})));
  assert.deepEqual(Array.from(all).map(x => x.id), ["first", "second"]);
  assert.equal(f.calls.length, 2);
});

test("generated create uses inline container settings, nullable registry and scaling union", async () => {
  const f = fixture(() => new Response(JSON.stringify(endpoint()), { status: 201, headers: { "content-type": "application/json" } }));
  await f.run(Runpod.createEndpoint({ name: "flux", type: "QUEUE", image: "image", registry: null, gpu: { pools: ["ADA_80_PRO"] }, scaling: { type: "REQUEST_COUNT", requestCount: 1 } }));
  assert.equal(f.calls[0].body.scaling.type, "REQUEST_COUNT");
  assert.equal(f.calls[0].body.registry, null);
});

test("404 is tagged and 204 deletion has no JSON body", async () => {
  const f = fixture(({ method }) => method === "DELETE" ? new Response(null, { status: 204 }) : Response.json({ title: "Not Found", status: 404, detail: "secret" }, { status: 404 }));
  const found = await f.run(Runpod.getEndpoint({ id: "gone" }).pipe(Effect.catchTag("NotFound", () => Effect.succeed(undefined))));
  assert.equal(found, undefined);
  await f.run(Runpod.deleteEndpoint({ id: "ep-1" }));
});

test("strict decoding rejects malformed success responses without exposing their body", async () => {
  const f = fixture(() => ({ secret: "do-not-log" }));
  await assert.rejects(f.run(Runpod.getEndpoint({ id: "ep-1" })), error => !String(error).includes("do-not-log"));
});

const cachedConfig = () => ({
  id: "ep-1", name: "flux", templateId: "v2-bound-template", gpuIds: "ADA_80_PRO,-NVIDIA H100 PCIe",
  gpuCount: 1, workersMin: 0, workersMax: 1, scalerType: "REQUEST_COUNT", scalerValue: 1,
  idleTimeout: 60, executionTimeoutMs: 1800000, flashBootType: "FLASHBOOT", minCudaVersion: "13.0",
  allowedCudaVersions: null, locations: "", networkVolumeId: null, networkVolumeIds: [],
  modelReferences: [], template: { env: [{ key: "HF_TOKEN", value: "secret-token" }] },
});
test("cached-model overlay preserves the v2 bound template, GPU exclusions, scaling and gated model credentials", async () => {
  const live = cachedConfig();
  const models = ["https://huggingface.co/org/model:revision"];
  const f = fixture(({ body }) => body.query.startsWith("mutation") ? { data: { saveEndpoint: { id: "ep-1", modelReferences: body.variables.input.modelReferences } } } : { data: { myself: { endpoint: live } } });
  await f.run(Runpod.setCachedModels({ id: "ep-1", models }));
  const { template, ...config } = live;
  assert.deepEqual(f.calls[1].body.variables.input, { ...config, env: template.env, modelReferences: models });
  assert.ok(f.calls.every(c => c.url.pathname === "/graphql"));
});

test("cache read and unchanged cache updates never write", async () => {
  const live = cachedConfig();
  const f = fixture(() => ({ data: { myself: { endpoint: live } } }));
  assert.deepEqual(await f.run(Runpod.getCachedModels({ id: "ep-1" })), []);
  await f.run(Runpod.setCachedModels({ id: "ep-1", models: [] }));
  assert.equal(f.calls.filter(c => c.body.query.startsWith("mutation")).length, 0);
});

test("GraphQL errors even with partial data fail without echoing secrets", async () => {
  const f = fixture(() => ({ data: { myself: { endpoint: cachedConfig() } }, errors: [{ message: "secret-token" }] }));
  await assert.rejects(f.run(Runpod.setCachedModels({ id: "ep-1", models: ["model"] })), error => !String(error).includes("secret-token"));
  assert.equal(f.calls.length, 1);
});

test("incomplete GraphQL configuration fails before replacement", async () => {
  const f = fixture(() => ({ data: { myself: { endpoint: { id: "ep-1", modelReferences: [] } } } }));
  await assert.rejects(f.run(Runpod.setCachedModels({ id: "ep-1", models: ["model"] })));
  assert.equal(f.calls.length, 1);
});


test("cached-model writes return server-resolved revisions", async () => {
  const resolved = ["https://huggingface.co/org/model:" + "a".repeat(40)];
  const f = fixture(({ body }) => body.query.startsWith("mutation")
    ? { data: { saveEndpoint: { id: "ep-1", modelReferences: resolved } } }
    : { data: { myself: { endpoint: cachedConfig() } } });
  assert.deepEqual(await f.run(Runpod.setCachedModels({ id: "ep-1", models: ["https://huggingface.co/org/model:main"] })), resolved);
});
