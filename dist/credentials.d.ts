import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Redacted from "effect/Redacted";
export interface Config {
    readonly apiKey: Redacted.Redacted<string>;
    /** Origin only; generated routes include /v2. */
    readonly apiBaseUrl?: string;
}
declare const Credentials_base: Context.ServiceClass<Credentials, "RunpodCredentials", Effect.Effect<Config, never, never>>;
/** Resolved on every request, allowing token rotation without rebuilding layers. */
export declare class Credentials extends Credentials_base {
}
export {};
