import assert from "node:assert/strict";
import { test } from "node:test";
import * as Effect from "effect/Effect";
import * as HttpClient from "effect/unstable/http/HttpClient";
import * as HttpClientResponse from "effect/unstable/http/HttpClientResponse";
import { makeAuthenticated } from "../dist/index.js";

test("adds the API base URL and bearer key to generated requests", async () => {
  const requests = [];
  const httpClient = HttpClient.make((request, url) => Effect.sync(() => {
    requests.push({
      method: request.method,
      path: url.pathname,
      authorization: request.headers.authorization,
    });
    return HttpClientResponse.fromWeb(request, Response.json([{ id: "pod-1" }]));
  }));
  const client = makeAuthenticated(httpClient, {
    apiKey: "test-key",
    baseUrl: "https://api.test/v1/",
  });

  assert.deepEqual(await Effect.runPromise(client.ListPods()), [{ id: "pod-1" }]);
  assert.deepEqual(requests, [{
    method: "GET",
    path: "/v1/pods",
    authorization: "Bearer test-key",
  }]);
});

test("keeps both update variants and encodes path parameters", async () => {
  const requests = [];
  const httpClient = HttpClient.make((request, url) => Effect.sync(() => {
    requests.push({ method: request.method, path: url.pathname });
    return HttpClientResponse.fromWeb(request, Response.json({ id: "pod-1" }));
  }));
  const client = makeAuthenticated(httpClient, { apiKey: "test-key" });

  await Effect.runPromise(client.UpdatePod("pod/1", { payload: {} }));
  await Effect.runPromise(client.UpdatePodPost("pod/1", { payload: {} }));
  assert.deepEqual(requests, [
    { method: "PATCH", path: "/v1/pods/pod%2F1" },
    { method: "POST", path: "/v1/pods/pod%2F1/update" },
  ]);
});
