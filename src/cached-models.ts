import * as Effect from "effect/Effect";
import * as Redacted from "effect/Redacted";
import * as Schema from "effect/Schema";
import * as HttpBody from "effect/http/HttpBody";
import * as HttpClient from "effect/http/HttpClient";
import { Credentials } from "./credentials.js";
import { RunpodError } from "./errors.js";
import { NotFound } from "./services/runpod.js";

const references = Schema.NullOr(Schema.Array(Schema.String));
const identity = { id: Schema.String, modelReferences: references };
const environment = Schema.Array(Schema.Struct({ key: Schema.String, value: Schema.String }));
const config = Schema.Struct({
  ...identity,
  name: Schema.String,
  templateId: Schema.String,
  gpuIds: Schema.String,
  gpuCount: Schema.Number,
  workersMin: Schema.Number,
  workersMax: Schema.Number,
  scalerType: Schema.String,
  scalerValue: Schema.Number,
  idleTimeout: Schema.Number,
  executionTimeoutMs: Schema.Number,
  flashBootType: Schema.String,
  minCudaVersion: Schema.NullOr(Schema.String),
  allowedCudaVersions: Schema.NullOr(Schema.String),
  locations: Schema.NullOr(Schema.String),
  networkVolumeId: Schema.NullOr(Schema.String),
  networkVolumeIds: Schema.NullOr(Schema.Array(Schema.Struct({ networkVolumeId: Schema.String }))),
  template: Schema.Struct({ env: Schema.NullOr(environment) }),
});
const fields = `id name templateId gpuIds gpuCount workersMin workersMax scalerType
  scalerValue idleTimeout executionTimeoutMs flashBootType minCudaVersion allowedCudaVersions
  locations networkVolumeId networkVolumeIds { networkVolumeId } modelReferences
  template { env { key value } }`;

const graphql = <A>(query: string, variables: Record<string, unknown>, data: Schema.Codec<A>) =>
  Effect.gen(function* () {
    const credentials = yield* yield* Credentials;
    const http = yield* HttpClient.HttpClient;
    const response = yield* http.post(`${credentials.apiBaseUrl ?? "https://api.runpod.io"}/graphql`, {
      headers: { authorization: `Bearer ${Redacted.value(credentials.apiKey)}` },
      body: HttpBody.jsonUnsafe({ query, variables }),
    });
    if (response.status !== 200) return yield* Effect.fail(new RunpodError({ operation: "cached models HTTP" }));
    const decoded = yield* Schema.decodeUnknownEffect(Schema.Struct({
      data: Schema.optional(Schema.NullOr(data)),
      errors: Schema.optional(Schema.Array(Schema.Unknown)),
    }))(yield* response.json);
    if (decoded.errors?.length || !decoded.data) return yield* Effect.fail(new RunpodError({ operation: "cached models GraphQL" }));
    return decoded.data;
  }).pipe(Effect.mapError(() => new RunpodError({ operation: "cached models request" })));

export const getCachedModels = Effect.fn(function* ({ id }: { id: string }) {
  const { myself } = yield* graphql(
    "query CachedModels($id: String!) { myself { endpoint(id: $id) { id modelReferences } } }",
    { id }, Schema.Struct({ myself: Schema.Struct({ endpoint: Schema.NullOr(Schema.Struct(identity)) }) }),
  );
  if (!myself.endpoint) return yield* Effect.fail(new NotFound({ message: "RunPod endpoint not found" }));
  return myself.endpoint.modelReferences ?? [];
});

/**
 * REST v2 doesn't expose model caching. GraphQL saveEndpoint is a full replacement,
 * so preserve the just-observed settings (including v2's bound template) here.
 * https://github.com/runpod/runpodctl/blob/4351fca9ec454b1bdc8572aaad5d3e5a61ead0fa/internal/api/endpoints.go#L305
 */
export const setCachedModels = Effect.fn(function* ({ id, models }: { id: string; models: readonly string[] }) {
  const { myself } = yield* graphql(
    `query CachedModelConfig($id: String!) { myself { endpoint(id: $id) { ${fields} } } }`,
    { id }, Schema.Struct({ myself: Schema.Struct({ endpoint: Schema.NullOr(config) }) }),
  );
  if (!myself.endpoint) return yield* Effect.fail(new NotFound({ message: "RunPod endpoint not found" }));
  const { template, ...live } = myself.endpoint;
  if (live.id !== id) return yield* Effect.fail(new RunpodError({ operation: "cached models identity" }));
  if (JSON.stringify(live.modelReferences ?? []) === JSON.stringify(models)) return live.modelReferences ?? [];
  const { saveEndpoint } = yield* graphql(
    "mutation CachedModels($input: EndpointInput!) { saveEndpoint(input: $input) { id modelReferences } }",
    { input: { ...live, env: template.env ?? [], modelReferences: [...models], locations: live.locations ?? "", networkVolumeIds: live.networkVolumeIds ?? [] } },
    Schema.Struct({ saveEndpoint: Schema.Struct(identity) }),
  );
  if (saveEndpoint.id !== id) {
    return yield* Effect.fail(new RunpodError({ operation: "cached models confirmation" }));
  }
  // RunPod resolves branch/tag references to immutable commits.
  return saveEndpoint.modelReferences ?? [];
});
