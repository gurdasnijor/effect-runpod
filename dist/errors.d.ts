import * as Schema from "effect/Schema";
declare const RunpodError_base: Schema.Class<RunpodError, Schema.TaggedStruct<"RunpodError", {
    readonly operation: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class RunpodError extends RunpodError_base {
}
export { API_ERRORS } from "@distilled.cloud/core/errors";
