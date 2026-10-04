import * as HttpClient from "effect/http/HttpClient";
import * as HttpClientRequest from "effect/http/HttpClientRequest";
import { make } from "./generated.js";
/** Make a generated client with RunPod bearer authentication. */
export const makeAuthenticated = (httpClient, credentials) => make(httpClient.pipe(HttpClient.mapRequest(HttpClientRequest.prependUrl((credentials.baseUrl ?? "https://rest.runpod.io/v1").replace(/\/+$/, ""))), HttpClient.mapRequest(HttpClientRequest.setHeader("authorization", `Bearer ${credentials.apiKey}`))));
