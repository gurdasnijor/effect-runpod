import * as HttpClient from "effect/unstable/http/HttpClient";
import * as HttpClientRequest from "effect/unstable/http/HttpClientRequest";
import { make } from "./generated.js";

export type Credentials = {
  readonly apiKey: string;
  /** API base URL, including /v1. */
  readonly baseUrl?: string;
};

/** Make a generated client with RunPod bearer authentication. */
export const makeAuthenticated = (
  httpClient: HttpClient.HttpClient,
  credentials: Credentials,
) => make(httpClient.pipe(
  HttpClient.mapRequest(HttpClientRequest.prependUrl(
    (credentials.baseUrl ?? "https://rest.runpod.io/v1").replace(/\/+$/, ""),
  )),
  HttpClient.mapRequest(HttpClientRequest.setHeader(
    "authorization",
    `Bearer ${credentials.apiKey}`,
  )),
));
