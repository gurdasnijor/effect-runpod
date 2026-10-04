import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Redacted from "effect/Redacted";

export interface Config {
  readonly apiKey: Redacted.Redacted<string>;
  /** Origin only; generated routes include /v2. */
  readonly apiBaseUrl?: string;
}
/** Resolved on every request, allowing token rotation without rebuilding layers. */
export class Credentials extends Context.Service<Credentials, Effect.Effect<Config>>()(
  "RunpodCredentials",
) {}
