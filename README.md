# Effect RunPod client

Generated Effect HTTP client and schemas for the [RunPod REST v1 API](https://docs.runpod.io/api-reference/docs/GET/openapi-json). It covers the operations in RunPod's published OpenAPI document: Pods, Serverless endpoint configuration, templates, network volumes, container registry authentication, and billing. The document does not describe Serverless job inference routes, so those are outside this generated client.

Install from GitHub with Effect 4 and an HTTP client implementation:

```sh
pnpm add github:gurdasnijor/effect-runpod effect@4.0.0 @effect/platform-node@4.0.0
```

```ts
import { NodeHttpClient } from "@effect/platform-node";
import { Effect } from "effect";
import { HttpClient } from "effect/http";
import { makeAuthenticated } from "@gurdasnijor/effect-runpod";

const program = Effect.gen(function* () {
  const httpClient = yield* HttpClient.HttpClient;
  const runpod = makeAuthenticated(httpClient, {
    apiKey: process.env.RUNPOD_API_KEY!,
  });
  return yield* runpod.ListPods();
}).pipe(Effect.provide(NodeHttpClient.layerUndici));

const pods = await Effect.runPromise(program);
```

`makeAuthenticated` also accepts `baseUrl` for an alternate REST v1 endpoint. The package exports the generated `make(httpClient)` constructor, operation methods, and schemas directly for consumers who prefer to configure the HTTP client themselves.

## Regenerate

The source OpenAPI snapshot is in `spec/runpod.openapi.json`. `spec/patch.json` gives distinct names to four PATCH/POST update operation pairs and changes four `ports` defaults from strings to arrays to match their schemas. Refresh the snapshot from `https://rest.runpod.io/v1/openapi.json`, then run:

```sh
pnpm install --frozen-lockfile
pnpm generate
pnpm check
```

Generated source and `dist/` are committed so Git dependencies work without a build step.
