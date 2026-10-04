import * as Schema from "effect/Schema";
export class RunpodError extends Schema.TaggedError()("RunpodError", {
    operation: Schema.String,
}) {
}
export { API_ERRORS } from "@distilled.cloud/core/errors";
