// The snapshot is the source of truth; overlays describe pagination omitted by OpenAPI.
import { readFileSync, writeFileSync } from "node:fs";
import { convertOpenApiToSmithy } from "@distilled.cloud/core/codegen/openapi";
import { generateService } from "@distilled.cloud/core/codegen/generator";

const spec = JSON.parse(readFileSync(new URL("../spec/runpod.openapi.json", import.meta.url), "utf8"));
// SSE log streaming is a separate protocol, outside this JSON management SDK.
for (const path of Object.keys(spec.paths)) if (path.endsWith("/logs")) delete spec.paths[path];
const model = convertOpenApiToSmithy(spec, { namespace: "com.runpod.api", serviceName: "Runpod" });
for (const shape of Object.values(model.shapes) as any[]) {
  if (shape.type !== "operation") continue;
  const input = model.shapes[shape.input?.target] as any;
  const output = model.shapes[shape.output?.target] as any;
  if (!input?.members?.cursor || !output?.members?.pagination) continue;
  const items = Object.keys(output.members).find((key) => key !== "pagination" &&
    (model.shapes[output.members[key].target] as any)?.type === "list");
  if (items) shape.traits["smithy.api#paginated"] = {
    mode: "cursor", inputToken: "cursor", outputToken: "pagination.nextCursor", items,
  };
}
const result = generateService(model, {
  schemaType: "Codec",
  nullableTrait: "com.distilled.openapi#nullable",
  errorMatchersTrait: "com.distilled.openapi#errorMatchers",
  unionStyle: "untagged",
  extraBindings: [{ trait: "com.distilled.openapi#rawResponse", binding: "rawResponse", pipe: "T.RawResponse()", rootPipe: "T.RawResponseRoot()" }],
  paginationProfiles: { cursor: { strategy: "paginateCursor" } },
  operationDecl: { contextType: "RunpodOpContext", commonErrorType: "RunpodOpError", commonErrorClasses: [], protocol: "RunpodProtocol" },
  sourceNote: "spec/runpod.openapi.json via Distilled 1.0.0-rc.13",
  postProcess: (code) => code.replaceAll(/(from ["']\.\.?\/[^"']+)\.ts(["'])/g, "$1.js$2"),
});
writeFileSync(new URL("../src/services/runpod.ts", import.meta.url), result.code);
console.log(`Generated ${result.operations} REST v2 operations`);
