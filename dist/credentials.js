import * as Context from "effect/Context";
/** Resolved on every request, allowing token rotation without rebuilding layers. */
export class Credentials extends Context.Service()("RunpodCredentials") {
}
