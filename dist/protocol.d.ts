import type * as HttpClient from "effect/http/HttpClient";
import type * as HttpClientError from "effect/http/HttpClientError";
import type { API_ERRORS } from "@distilled.cloud/core/errors";
import { Credentials } from "./credentials.js";
import { RunpodError } from "./errors.js";
export type RunpodOpError = InstanceType<(typeof API_ERRORS)[number]> | RunpodError | HttpClientError.HttpClientError;
export type RunpodOpContext = Credentials | HttpClient.HttpClient;
export declare const RunpodProtocol: import("effect/Layer").Layer<import("@distilled.cloud/core/api").Protocol, never, never>;
