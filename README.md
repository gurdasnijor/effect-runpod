# Effect RunPod SDK

RunPod REST **v2**, generated with the same [Distilled](https://github.com/alchemy-run/distilled)
OpenAPI → Smithy → Effect pipeline used by Alchemy's SDKs. Requires Effect 4.0.0.
The checked-in OpenAPI snapshot comes from https://api.runpod.io/v2/openapi.json.
The JSON management API is covered; SSE logs and inference jobs are separate protocols.

```ts
import * as Runpod from "@gurdasnijor/effect-runpod";
import * as Config from "effect/Config";
import * as Effect from "effect/Effect";
import * as Stream from "effect/Stream";
import * as NodeHttpClient from "@effect/platform-node/NodeHttpClient";

const program = Stream.runCollect(Runpod.listEndpoints.items({})).pipe(
  Effect.provideService(Runpod.Credentials,
    Effect.map(Config.Redacted("RUNPOD_API_KEY"), apiKey => ({ apiKey }))),
  Effect.provide(NodeHttpClient.layerUndici),
  Effect.provide(Runpod.validateResponses),
);
```

Operations are named `createEndpoint`, `getEndpoint`, `updateEndpoint`,
`deleteEndpoint`, etc. Inputs use the v2 wire shapes: container settings can be
provided directly on endpoints, GPU pools live under `gpu`, and scaling under
`scaling`. List operations expose `.pages()` and `.items()` with cursor pagination.
Errors include tagged `NotFound`, `BadRequest`, etc. Credentials are a lazy Effect
resolved per request; `apiBaseUrl` overrides the origin (not the `/v2` prefix).

## Cached-model extension

V2's published schema has no model-caching setting. `getCachedModels({ id })` and
`setCachedModels({ id, models })` use the existing GraphQL API for that feature only.
References have the form `https://huggingface.co/org/model:revision`; `[]` clears them.
The extension currently targets GPU endpoints. RunPod's `saveEndpoint` mutation
replaces configuration, so the adapter reads current configuration, including the
endpoint's bound template and gated-model environment, before changing references.
It validates responses and does not expose GraphQL error bodies containing secrets.
See [RunPod's corresponding CLI implementation](https://github.com/runpod/runpodctl/blob/4351fca9ec454b1bdc8572aaad5d3e5a61ead0fa/internal/api/endpoints.go#L305).

Call this after REST reconciliation and serialize changes to the same endpoint:
GraphQL offers no conditional write for this read/modify/write operation. This
extension is removable once v2 supports model caching. It manages no Alchemy state,
resource ownership, worker draining, or deployment policy.

REST HTTP/transport errors can contain request information. Applications must
sanitize failures at their logging boundary; typed errors can be handled first.
`validateResponses` enables Distilled's strict response checking.

## Regenerate and validate

Use Node 24 and pnpm. No cloud credentials are needed:

```sh
pnpm install --frozen-lockfile
pnpm generate
pnpm check
```

The snapshot, generator, generated source and compiled `dist/` are committed so a
pinned Git dependency works without install scripts. The generator adds explicit
cursor pagination metadata and excludes SSE routes. Do not edit generated files.
Tests use mocked HTTP and check v2 encoding, pagination/nullability, typed errors,
strict decoding and cached-model round trips. They do not certify live v2/GraphQL
interoperability or provision GPU workers.

This version replaces the old REST v1 `makeAuthenticated` interface.
