import * as Effect from "effect/Effect";
import * as Redacted from "effect/Redacted";
import { makeRestProtocol } from "@distilled.cloud/core/protocol-rest";
import { Credentials } from "./credentials.js";
import { RunpodError } from "./errors.js";
export const RunpodProtocol = makeRestProtocol({
    credentials: Effect.gen(function* () { return yield* yield* Credentials; }),
    baseUrl: (config) => config.apiBaseUrl ?? "https://api.runpod.io",
    headers: (config) => ({ Authorization: `Bearer ${Redacted.value(config.apiKey)}` }),
    // API failures can echo container environment secrets. Never retain their bodies.
    errorEnvelope: () => ({ message: "RunPod request failed" }),
    unknownError: () => new RunpodError({ operation: "REST request" }),
    parseError: () => new RunpodError({ operation: "REST response validation" }),
});
