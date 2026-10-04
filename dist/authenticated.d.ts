import * as HttpClient from "effect/http/HttpClient";
export type Credentials = {
    readonly apiKey: string;
    /** API base URL, including /v1. */
    readonly baseUrl?: string;
};
/** Make a generated client with RunPod bearer authentication. */
export declare const makeAuthenticated: (httpClient: HttpClient.HttpClient, credentials: Credentials) => import("./generated.js").Runpod;
