import * as Effect from "effect/Effect";
import type { SchemaError } from "effect/Schema";
import * as Schema from "effect/Schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as HttpClientError from "effect/unstable/http/HttpClientError";
import * as HttpClientRequest from "effect/unstable/http/HttpClientRequest";
import * as HttpClientResponse from "effect/unstable/http/HttpClientResponse";
export type SavingsPlan = {
    readonly "costPerHr"?: number;
    readonly "endTime"?: string;
    readonly "gpuTypeId"?: string;
    readonly "id"?: string;
    readonly "podId"?: string;
    readonly "startTime"?: string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const SavingsPlan: Schema.StructWithRest<Schema.Struct<{
    readonly costPerHr: Schema.optionalKey<Schema.Number>;
    readonly endTime: Schema.optionalKey<Schema.String>;
    readonly gpuTypeId: Schema.optionalKey<Schema.String>;
    readonly id: Schema.optionalKey<Schema.String>;
    readonly podId: Schema.optionalKey<Schema.String>;
    readonly startTime: Schema.optionalKey<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type PodCreateInput = {
    readonly "allowedCudaVersions"?: ReadonlyArray<"13.0" | "12.9" | "12.8" | "12.7" | "12.6" | "12.5" | "12.4" | "12.3" | "12.2" | "12.1" | "12.0" | "11.8">;
    readonly "cloudType"?: "SECURE" | "COMMUNITY";
    readonly "computeType"?: "GPU" | "CPU";
    readonly "containerDiskInGb"?: number | null;
    readonly "containerRegistryAuthId"?: string;
    readonly "countryCodes"?: ReadonlyArray<string>;
    readonly "cpuFlavorIds"?: ReadonlyArray<"cpu3c" | "cpu3g" | "cpu3m" | "cpu5c" | "cpu5g" | "cpu5m">;
    readonly "cpuFlavorPriority"?: "availability" | "custom";
    readonly "dataCenterIds"?: ReadonlyArray<"EU-RO-1" | "CA-MTL-1" | "EU-SE-1" | "US-IL-1" | "EUR-IS-1" | "EU-CZ-1" | "US-TX-3" | "EUR-IS-2" | "US-KS-2" | "US-GA-2" | "US-WA-1" | "US-TX-1" | "CA-MTL-3" | "EU-NL-1" | "US-TX-4" | "US-CA-2" | "US-NC-1" | "OC-AU-1" | "US-DE-1" | "EUR-IS-3" | "CA-MTL-2" | "AP-JP-1" | "EUR-NO-1" | "EU-FR-1" | "US-KS-3" | "US-GA-1" | "AP-IN-1" | "US-MD-1">;
    readonly "dataCenterPriority"?: "availability" | "custom";
    readonly "dockerEntrypoint"?: ReadonlyArray<string>;
    readonly "dockerStartCmd"?: ReadonlyArray<string>;
    readonly "env"?: {
        readonly [x: string]: Schema.Json;
    };
    readonly "globalNetworking"?: boolean;
    readonly "gpuCount"?: number;
    readonly "gpuTypeIds"?: ReadonlyArray<"AMD Instinct MI300X OAM" | "NVIDIA A100 80GB PCIe" | "NVIDIA A100-SXM4-40GB" | "NVIDIA A100-SXM4-80GB" | "NVIDIA A40" | "NVIDIA B200" | "NVIDIA B300 SXM6 AC" | "NVIDIA B300 SXM6 AC MIG 1g.34gb" | "NVIDIA GeForce RTX 3070" | "NVIDIA GeForce RTX 3080" | "NVIDIA GeForce RTX 3080 Ti" | "NVIDIA GeForce RTX 3090" | "NVIDIA GeForce RTX 3090 Ti" | "NVIDIA GeForce RTX 4070 Ti" | "NVIDIA GeForce RTX 4080" | "NVIDIA GeForce RTX 4080 SUPER" | "NVIDIA GeForce RTX 4090" | "NVIDIA GeForce RTX 5080" | "NVIDIA GeForce RTX 5090" | "NVIDIA H100 80GB HBM3" | "NVIDIA H100 NVL" | "NVIDIA H100 PCIe" | "NVIDIA H200" | "NVIDIA H200 NVL" | "NVIDIA L4" | "NVIDIA L40" | "NVIDIA L40S" | "NVIDIA RTX 2000 Ada Generation" | "NVIDIA RTX 4000 Ada Generation" | "NVIDIA RTX 4000 SFF Ada Generation" | "NVIDIA RTX 5000 Ada Generation" | "NVIDIA RTX 6000 Ada Generation" | "NVIDIA RTX A2000" | "NVIDIA RTX A4000" | "NVIDIA RTX A4500" | "NVIDIA RTX A5000" | "NVIDIA RTX A6000" | "NVIDIA RTX PRO 4000 Blackwell" | "NVIDIA RTX PRO 4500 Blackwell" | "NVIDIA RTX PRO 5000 Blackwell" | "NVIDIA RTX PRO 6000 Blackwell Max-Q Workstation Edition" | "NVIDIA RTX PRO 6000 Blackwell Server Edition" | "NVIDIA RTX PRO 6000 Blackwell Workstation Edition" | "Tesla V100-PCIE-16GB" | "Tesla V100-SXM2-16GB">;
    readonly "gpuTypePriority"?: "availability" | "custom";
    readonly "imageName"?: string;
    readonly "interruptible"?: boolean;
    readonly "locked"?: boolean;
    readonly "minDiskBandwidthMBps"?: number;
    readonly "minDownloadMbps"?: number;
    readonly "minRAMPerGPU"?: number;
    readonly "minUploadMbps"?: number;
    readonly "minVCPUPerGPU"?: number;
    readonly "name"?: string;
    readonly "networkVolumeId"?: string;
    readonly "ports"?: ReadonlyArray<string>;
    readonly "supportPublicIp"?: boolean;
    readonly "templateId"?: string;
    readonly "vcpuCount"?: number;
    readonly "volumeInGb"?: number | null;
    readonly "volumeMountPath"?: string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const PodCreateInput: Schema.StructWithRest<Schema.Struct<{
    readonly allowedCudaVersions: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["13.0", "12.9", "12.8", "12.7", "12.6", "12.5", "12.4", "12.3", "12.2", "12.1", "12.0", "11.8"]>>>;
    readonly cloudType: Schema.optionalKey<Schema.Literals<readonly ["SECURE", "COMMUNITY"]>>;
    readonly computeType: Schema.optionalKey<Schema.Literals<readonly ["GPU", "CPU"]>>;
    readonly containerDiskInGb: Schema.optionalKey<Schema.Union<readonly [Schema.Number, Schema.Null]>>;
    readonly containerRegistryAuthId: Schema.optionalKey<Schema.String>;
    readonly countryCodes: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly cpuFlavorIds: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["cpu3c", "cpu3g", "cpu3m", "cpu5c", "cpu5g", "cpu5m"]>>>;
    readonly cpuFlavorPriority: Schema.optionalKey<Schema.Literals<readonly ["availability", "custom"]>>;
    readonly dataCenterIds: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["EU-RO-1", "CA-MTL-1", "EU-SE-1", "US-IL-1", "EUR-IS-1", "EU-CZ-1", "US-TX-3", "EUR-IS-2", "US-KS-2", "US-GA-2", "US-WA-1", "US-TX-1", "CA-MTL-3", "EU-NL-1", "US-TX-4", "US-CA-2", "US-NC-1", "OC-AU-1", "US-DE-1", "EUR-IS-3", "CA-MTL-2", "AP-JP-1", "EUR-NO-1", "EU-FR-1", "US-KS-3", "US-GA-1", "AP-IN-1", "US-MD-1"]>>>;
    readonly dataCenterPriority: Schema.optionalKey<Schema.Literals<readonly ["availability", "custom"]>>;
    readonly dockerEntrypoint: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly dockerStartCmd: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly env: Schema.optionalKey<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>;
    readonly globalNetworking: Schema.optionalKey<Schema.Boolean>;
    readonly gpuCount: Schema.optionalKey<Schema.Number>;
    readonly gpuTypeIds: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["AMD Instinct MI300X OAM", "NVIDIA A100 80GB PCIe", "NVIDIA A100-SXM4-40GB", "NVIDIA A100-SXM4-80GB", "NVIDIA A40", "NVIDIA B200", "NVIDIA B300 SXM6 AC", "NVIDIA B300 SXM6 AC MIG 1g.34gb", "NVIDIA GeForce RTX 3070", "NVIDIA GeForce RTX 3080", "NVIDIA GeForce RTX 3080 Ti", "NVIDIA GeForce RTX 3090", "NVIDIA GeForce RTX 3090 Ti", "NVIDIA GeForce RTX 4070 Ti", "NVIDIA GeForce RTX 4080", "NVIDIA GeForce RTX 4080 SUPER", "NVIDIA GeForce RTX 4090", "NVIDIA GeForce RTX 5080", "NVIDIA GeForce RTX 5090", "NVIDIA H100 80GB HBM3", "NVIDIA H100 NVL", "NVIDIA H100 PCIe", "NVIDIA H200", "NVIDIA H200 NVL", "NVIDIA L4", "NVIDIA L40", "NVIDIA L40S", "NVIDIA RTX 2000 Ada Generation", "NVIDIA RTX 4000 Ada Generation", "NVIDIA RTX 4000 SFF Ada Generation", "NVIDIA RTX 5000 Ada Generation", "NVIDIA RTX 6000 Ada Generation", "NVIDIA RTX A2000", "NVIDIA RTX A4000", "NVIDIA RTX A4500", "NVIDIA RTX A5000", "NVIDIA RTX A6000", "NVIDIA RTX PRO 4000 Blackwell", "NVIDIA RTX PRO 4500 Blackwell", "NVIDIA RTX PRO 5000 Blackwell", "NVIDIA RTX PRO 6000 Blackwell Max-Q Workstation Edition", "NVIDIA RTX PRO 6000 Blackwell Server Edition", "NVIDIA RTX PRO 6000 Blackwell Workstation Edition", "Tesla V100-PCIE-16GB", "Tesla V100-SXM2-16GB"]>>>;
    readonly gpuTypePriority: Schema.optionalKey<Schema.Literals<readonly ["availability", "custom"]>>;
    readonly imageName: Schema.optionalKey<Schema.String>;
    readonly interruptible: Schema.optionalKey<Schema.Boolean>;
    readonly locked: Schema.optionalKey<Schema.Boolean>;
    readonly minDiskBandwidthMBps: Schema.optionalKey<Schema.Number>;
    readonly minDownloadMbps: Schema.optionalKey<Schema.Number>;
    readonly minRAMPerGPU: Schema.optionalKey<Schema.Number>;
    readonly minUploadMbps: Schema.optionalKey<Schema.Number>;
    readonly minVCPUPerGPU: Schema.optionalKey<Schema.Number>;
    readonly name: Schema.optionalKey<Schema.String>;
    readonly networkVolumeId: Schema.optionalKey<Schema.String>;
    readonly ports: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly supportPublicIp: Schema.optionalKey<Schema.Boolean>;
    readonly templateId: Schema.optionalKey<Schema.String>;
    readonly vcpuCount: Schema.optionalKey<Schema.Number>;
    readonly volumeInGb: Schema.optionalKey<Schema.Union<readonly [Schema.Number, Schema.Null]>>;
    readonly volumeMountPath: Schema.optionalKey<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type PodUpdateInput = {
    readonly "containerDiskInGb"?: number | null;
    readonly "containerRegistryAuthId"?: string;
    readonly "dockerEntrypoint"?: ReadonlyArray<string>;
    readonly "dockerStartCmd"?: ReadonlyArray<string>;
    readonly "env"?: {
        readonly [x: string]: Schema.Json;
    };
    readonly "globalNetworking"?: boolean;
    readonly "imageName"?: string;
    readonly "locked"?: boolean;
    readonly "name"?: string;
    readonly "ports"?: ReadonlyArray<string>;
    readonly "volumeInGb"?: number | null;
    readonly "volumeMountPath"?: string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const PodUpdateInput: Schema.StructWithRest<Schema.Struct<{
    readonly containerDiskInGb: Schema.optionalKey<Schema.Union<readonly [Schema.Number, Schema.Null]>>;
    readonly containerRegistryAuthId: Schema.optionalKey<Schema.String>;
    readonly dockerEntrypoint: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly dockerStartCmd: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly env: Schema.optionalKey<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>;
    readonly globalNetworking: Schema.optionalKey<Schema.Boolean>;
    readonly imageName: Schema.optionalKey<Schema.String>;
    readonly locked: Schema.optionalKey<Schema.Boolean>;
    readonly name: Schema.optionalKey<Schema.String>;
    readonly ports: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly volumeInGb: Schema.optionalKey<Schema.Union<readonly [Schema.Number, Schema.Null]>>;
    readonly volumeMountPath: Schema.optionalKey<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type Template = {
    readonly "category"?: string;
    readonly "containerDiskInGb"?: number;
    readonly "containerRegistryAuthId"?: string;
    readonly "dockerEntrypoint"?: ReadonlyArray<string>;
    readonly "dockerStartCmd"?: ReadonlyArray<string>;
    readonly "earned"?: number;
    readonly "env"?: {
        readonly [x: string]: Schema.Json;
    };
    readonly "id"?: string;
    readonly "imageName"?: string;
    readonly "isPublic"?: boolean;
    readonly "isRunpod"?: boolean;
    readonly "isServerless"?: boolean;
    readonly "name"?: string;
    readonly "ports"?: ReadonlyArray<string>;
    readonly "readme"?: string;
    readonly "runtimeInMin"?: number;
    readonly "volumeInGb"?: number;
    readonly "volumeMountPath"?: string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const Template: Schema.StructWithRest<Schema.Struct<{
    readonly category: Schema.optionalKey<Schema.String>;
    readonly containerDiskInGb: Schema.optionalKey<Schema.Number>;
    readonly containerRegistryAuthId: Schema.optionalKey<Schema.String>;
    readonly dockerEntrypoint: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly dockerStartCmd: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly earned: Schema.optionalKey<Schema.Number>;
    readonly env: Schema.optionalKey<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>;
    readonly id: Schema.optionalKey<Schema.String>;
    readonly imageName: Schema.optionalKey<Schema.String>;
    readonly isPublic: Schema.optionalKey<Schema.Boolean>;
    readonly isRunpod: Schema.optionalKey<Schema.Boolean>;
    readonly isServerless: Schema.optionalKey<Schema.Boolean>;
    readonly name: Schema.optionalKey<Schema.String>;
    readonly ports: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly readme: Schema.optionalKey<Schema.String>;
    readonly runtimeInMin: Schema.optionalKey<Schema.Number>;
    readonly volumeInGb: Schema.optionalKey<Schema.Number>;
    readonly volumeMountPath: Schema.optionalKey<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type EndpointCreateInput = {
    readonly "allowedCudaVersions"?: ReadonlyArray<"13.0" | "12.9" | "12.8" | "12.7" | "12.6" | "12.5" | "12.4" | "12.3" | "12.2" | "12.1" | "12.0" | "11.8">;
    readonly "computeType"?: "GPU" | "CPU";
    readonly "cpuFlavorIds"?: ReadonlyArray<"cpu3c" | "cpu3g" | "cpu5c" | "cpu5g">;
    readonly "dataCenterIds"?: ReadonlyArray<"EU-RO-1" | "CA-MTL-1" | "EU-SE-1" | "US-IL-1" | "EUR-IS-1" | "EU-CZ-1" | "US-TX-3" | "EUR-IS-2" | "US-KS-2" | "US-GA-2" | "US-WA-1" | "US-TX-1" | "CA-MTL-3" | "EU-NL-1" | "US-TX-4" | "US-CA-2" | "US-NC-1" | "OC-AU-1" | "US-DE-1" | "EUR-IS-3" | "CA-MTL-2" | "AP-JP-1" | "EUR-NO-1" | "EU-FR-1" | "US-KS-3" | "US-GA-1" | "AP-IN-1" | "US-MD-1">;
    readonly "executionTimeoutMs"?: number;
    readonly "flashboot"?: boolean;
    readonly "gpuCount"?: number;
    readonly "gpuTypeIds"?: ReadonlyArray<"AMD Instinct MI300X OAM" | "NVIDIA A100 80GB PCIe" | "NVIDIA A100-SXM4-40GB" | "NVIDIA A100-SXM4-80GB" | "NVIDIA A40" | "NVIDIA B200" | "NVIDIA B300 SXM6 AC" | "NVIDIA B300 SXM6 AC MIG 1g.34gb" | "NVIDIA GeForce RTX 3070" | "NVIDIA GeForce RTX 3080" | "NVIDIA GeForce RTX 3080 Ti" | "NVIDIA GeForce RTX 3090" | "NVIDIA GeForce RTX 3090 Ti" | "NVIDIA GeForce RTX 4070 Ti" | "NVIDIA GeForce RTX 4080" | "NVIDIA GeForce RTX 4080 SUPER" | "NVIDIA GeForce RTX 4090" | "NVIDIA GeForce RTX 5080" | "NVIDIA GeForce RTX 5090" | "NVIDIA H100 80GB HBM3" | "NVIDIA H100 NVL" | "NVIDIA H100 PCIe" | "NVIDIA H200" | "NVIDIA H200 NVL" | "NVIDIA L4" | "NVIDIA L40" | "NVIDIA L40S" | "NVIDIA RTX 2000 Ada Generation" | "NVIDIA RTX 4000 Ada Generation" | "NVIDIA RTX 4000 SFF Ada Generation" | "NVIDIA RTX 5000 Ada Generation" | "NVIDIA RTX 6000 Ada Generation" | "NVIDIA RTX A2000" | "NVIDIA RTX A4000" | "NVIDIA RTX A4500" | "NVIDIA RTX A5000" | "NVIDIA RTX A6000" | "NVIDIA RTX PRO 4000 Blackwell" | "NVIDIA RTX PRO 4500 Blackwell" | "NVIDIA RTX PRO 5000 Blackwell" | "NVIDIA RTX PRO 6000 Blackwell Max-Q Workstation Edition" | "NVIDIA RTX PRO 6000 Blackwell Server Edition" | "NVIDIA RTX PRO 6000 Blackwell Workstation Edition" | "Tesla V100-PCIE-16GB" | "Tesla V100-SXM2-16GB">;
    readonly "idleTimeout"?: number;
    readonly "minCudaVersion"?: "13.0" | "12.9" | "12.8" | "12.7" | "12.6" | "12.5" | "12.4" | "12.3" | "12.2" | "12.1" | "12.0" | "11.8";
    readonly "name"?: string;
    readonly "networkVolumeId"?: string;
    readonly "networkVolumeIds"?: ReadonlyArray<string>;
    readonly "scalerType"?: "QUEUE_DELAY" | "REQUEST_COUNT";
    readonly "scalerValue"?: number;
    readonly "templateId": string;
    readonly "vcpuCount"?: number;
    readonly "workersMax"?: number;
    readonly "workersMin"?: number;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const EndpointCreateInput: Schema.StructWithRest<Schema.Struct<{
    readonly allowedCudaVersions: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["13.0", "12.9", "12.8", "12.7", "12.6", "12.5", "12.4", "12.3", "12.2", "12.1", "12.0", "11.8"]>>>;
    readonly computeType: Schema.optionalKey<Schema.Literals<readonly ["GPU", "CPU"]>>;
    readonly cpuFlavorIds: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["cpu3c", "cpu3g", "cpu5c", "cpu5g"]>>>;
    readonly dataCenterIds: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["EU-RO-1", "CA-MTL-1", "EU-SE-1", "US-IL-1", "EUR-IS-1", "EU-CZ-1", "US-TX-3", "EUR-IS-2", "US-KS-2", "US-GA-2", "US-WA-1", "US-TX-1", "CA-MTL-3", "EU-NL-1", "US-TX-4", "US-CA-2", "US-NC-1", "OC-AU-1", "US-DE-1", "EUR-IS-3", "CA-MTL-2", "AP-JP-1", "EUR-NO-1", "EU-FR-1", "US-KS-3", "US-GA-1", "AP-IN-1", "US-MD-1"]>>>;
    readonly executionTimeoutMs: Schema.optionalKey<Schema.Number>;
    readonly flashboot: Schema.optionalKey<Schema.Boolean>;
    readonly gpuCount: Schema.optionalKey<Schema.Number>;
    readonly gpuTypeIds: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["AMD Instinct MI300X OAM", "NVIDIA A100 80GB PCIe", "NVIDIA A100-SXM4-40GB", "NVIDIA A100-SXM4-80GB", "NVIDIA A40", "NVIDIA B200", "NVIDIA B300 SXM6 AC", "NVIDIA B300 SXM6 AC MIG 1g.34gb", "NVIDIA GeForce RTX 3070", "NVIDIA GeForce RTX 3080", "NVIDIA GeForce RTX 3080 Ti", "NVIDIA GeForce RTX 3090", "NVIDIA GeForce RTX 3090 Ti", "NVIDIA GeForce RTX 4070 Ti", "NVIDIA GeForce RTX 4080", "NVIDIA GeForce RTX 4080 SUPER", "NVIDIA GeForce RTX 4090", "NVIDIA GeForce RTX 5080", "NVIDIA GeForce RTX 5090", "NVIDIA H100 80GB HBM3", "NVIDIA H100 NVL", "NVIDIA H100 PCIe", "NVIDIA H200", "NVIDIA H200 NVL", "NVIDIA L4", "NVIDIA L40", "NVIDIA L40S", "NVIDIA RTX 2000 Ada Generation", "NVIDIA RTX 4000 Ada Generation", "NVIDIA RTX 4000 SFF Ada Generation", "NVIDIA RTX 5000 Ada Generation", "NVIDIA RTX 6000 Ada Generation", "NVIDIA RTX A2000", "NVIDIA RTX A4000", "NVIDIA RTX A4500", "NVIDIA RTX A5000", "NVIDIA RTX A6000", "NVIDIA RTX PRO 4000 Blackwell", "NVIDIA RTX PRO 4500 Blackwell", "NVIDIA RTX PRO 5000 Blackwell", "NVIDIA RTX PRO 6000 Blackwell Max-Q Workstation Edition", "NVIDIA RTX PRO 6000 Blackwell Server Edition", "NVIDIA RTX PRO 6000 Blackwell Workstation Edition", "Tesla V100-PCIE-16GB", "Tesla V100-SXM2-16GB"]>>>;
    readonly idleTimeout: Schema.optionalKey<Schema.Number>;
    readonly minCudaVersion: Schema.optionalKey<Schema.Literals<readonly ["13.0", "12.9", "12.8", "12.7", "12.6", "12.5", "12.4", "12.3", "12.2", "12.1", "12.0", "11.8"]>>;
    readonly name: Schema.optionalKey<Schema.String>;
    readonly networkVolumeId: Schema.optionalKey<Schema.String>;
    readonly networkVolumeIds: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly scalerType: Schema.optionalKey<Schema.Literals<readonly ["QUEUE_DELAY", "REQUEST_COUNT"]>>;
    readonly scalerValue: Schema.optionalKey<Schema.Number>;
    readonly templateId: Schema.String;
    readonly vcpuCount: Schema.optionalKey<Schema.Number>;
    readonly workersMax: Schema.optionalKey<Schema.Number>;
    readonly workersMin: Schema.optionalKey<Schema.Number>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type EndpointUpdateInput = {
    readonly "allowedCudaVersions"?: ReadonlyArray<"13.0" | "12.9" | "12.8" | "12.7" | "12.6" | "12.5" | "12.4" | "12.3" | "12.2" | "12.1" | "12.0" | "11.8">;
    readonly "cpuFlavorIds"?: ReadonlyArray<"cpu3c" | "cpu3g" | "cpu5c" | "cpu5g">;
    readonly "dataCenterIds"?: ReadonlyArray<"EU-RO-1" | "CA-MTL-1" | "EU-SE-1" | "US-IL-1" | "EUR-IS-1" | "EU-CZ-1" | "US-TX-3" | "EUR-IS-2" | "US-KS-2" | "US-GA-2" | "US-WA-1" | "US-TX-1" | "CA-MTL-3" | "EU-NL-1" | "US-TX-4" | "US-CA-2" | "US-NC-1" | "OC-AU-1" | "US-DE-1" | "EUR-IS-3" | "CA-MTL-2" | "AP-JP-1" | "EUR-NO-1" | "EU-FR-1" | "US-KS-3" | "US-GA-1" | "AP-IN-1" | "US-MD-1">;
    readonly "executionTimeoutMs"?: number;
    readonly "flashboot"?: boolean;
    readonly "gpuCount"?: number;
    readonly "gpuTypeIds"?: ReadonlyArray<"AMD Instinct MI300X OAM" | "NVIDIA A100 80GB PCIe" | "NVIDIA A100-SXM4-40GB" | "NVIDIA A100-SXM4-80GB" | "NVIDIA A40" | "NVIDIA B200" | "NVIDIA B300 SXM6 AC" | "NVIDIA B300 SXM6 AC MIG 1g.34gb" | "NVIDIA GeForce RTX 3070" | "NVIDIA GeForce RTX 3080" | "NVIDIA GeForce RTX 3080 Ti" | "NVIDIA GeForce RTX 3090" | "NVIDIA GeForce RTX 3090 Ti" | "NVIDIA GeForce RTX 4070 Ti" | "NVIDIA GeForce RTX 4080" | "NVIDIA GeForce RTX 4080 SUPER" | "NVIDIA GeForce RTX 4090" | "NVIDIA GeForce RTX 5080" | "NVIDIA GeForce RTX 5090" | "NVIDIA H100 80GB HBM3" | "NVIDIA H100 NVL" | "NVIDIA H100 PCIe" | "NVIDIA H200" | "NVIDIA H200 NVL" | "NVIDIA L4" | "NVIDIA L40" | "NVIDIA L40S" | "NVIDIA RTX 2000 Ada Generation" | "NVIDIA RTX 4000 Ada Generation" | "NVIDIA RTX 4000 SFF Ada Generation" | "NVIDIA RTX 5000 Ada Generation" | "NVIDIA RTX 6000 Ada Generation" | "NVIDIA RTX A2000" | "NVIDIA RTX A4000" | "NVIDIA RTX A4500" | "NVIDIA RTX A5000" | "NVIDIA RTX A6000" | "NVIDIA RTX PRO 4000 Blackwell" | "NVIDIA RTX PRO 4500 Blackwell" | "NVIDIA RTX PRO 5000 Blackwell" | "NVIDIA RTX PRO 6000 Blackwell Max-Q Workstation Edition" | "NVIDIA RTX PRO 6000 Blackwell Server Edition" | "NVIDIA RTX PRO 6000 Blackwell Workstation Edition" | "Tesla V100-PCIE-16GB" | "Tesla V100-SXM2-16GB">;
    readonly "idleTimeout"?: number;
    readonly "minCudaVersion"?: "13.0" | "12.9" | "12.8" | "12.7" | "12.6" | "12.5" | "12.4" | "12.3" | "12.2" | "12.1" | "12.0" | "11.8";
    readonly "name"?: string;
    readonly "networkVolumeId"?: string;
    readonly "networkVolumeIds"?: ReadonlyArray<string>;
    readonly "scalerType"?: "QUEUE_DELAY" | "REQUEST_COUNT";
    readonly "scalerValue"?: number;
    readonly "templateId"?: string;
    readonly "vcpuCount"?: number;
    readonly "workersMax"?: number;
    readonly "workersMin"?: number;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const EndpointUpdateInput: Schema.StructWithRest<Schema.Struct<{
    readonly allowedCudaVersions: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["13.0", "12.9", "12.8", "12.7", "12.6", "12.5", "12.4", "12.3", "12.2", "12.1", "12.0", "11.8"]>>>;
    readonly cpuFlavorIds: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["cpu3c", "cpu3g", "cpu5c", "cpu5g"]>>>;
    readonly dataCenterIds: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["EU-RO-1", "CA-MTL-1", "EU-SE-1", "US-IL-1", "EUR-IS-1", "EU-CZ-1", "US-TX-3", "EUR-IS-2", "US-KS-2", "US-GA-2", "US-WA-1", "US-TX-1", "CA-MTL-3", "EU-NL-1", "US-TX-4", "US-CA-2", "US-NC-1", "OC-AU-1", "US-DE-1", "EUR-IS-3", "CA-MTL-2", "AP-JP-1", "EUR-NO-1", "EU-FR-1", "US-KS-3", "US-GA-1", "AP-IN-1", "US-MD-1"]>>>;
    readonly executionTimeoutMs: Schema.optionalKey<Schema.Number>;
    readonly flashboot: Schema.optionalKey<Schema.Boolean>;
    readonly gpuCount: Schema.optionalKey<Schema.Number>;
    readonly gpuTypeIds: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["AMD Instinct MI300X OAM", "NVIDIA A100 80GB PCIe", "NVIDIA A100-SXM4-40GB", "NVIDIA A100-SXM4-80GB", "NVIDIA A40", "NVIDIA B200", "NVIDIA B300 SXM6 AC", "NVIDIA B300 SXM6 AC MIG 1g.34gb", "NVIDIA GeForce RTX 3070", "NVIDIA GeForce RTX 3080", "NVIDIA GeForce RTX 3080 Ti", "NVIDIA GeForce RTX 3090", "NVIDIA GeForce RTX 3090 Ti", "NVIDIA GeForce RTX 4070 Ti", "NVIDIA GeForce RTX 4080", "NVIDIA GeForce RTX 4080 SUPER", "NVIDIA GeForce RTX 4090", "NVIDIA GeForce RTX 5080", "NVIDIA GeForce RTX 5090", "NVIDIA H100 80GB HBM3", "NVIDIA H100 NVL", "NVIDIA H100 PCIe", "NVIDIA H200", "NVIDIA H200 NVL", "NVIDIA L4", "NVIDIA L40", "NVIDIA L40S", "NVIDIA RTX 2000 Ada Generation", "NVIDIA RTX 4000 Ada Generation", "NVIDIA RTX 4000 SFF Ada Generation", "NVIDIA RTX 5000 Ada Generation", "NVIDIA RTX 6000 Ada Generation", "NVIDIA RTX A2000", "NVIDIA RTX A4000", "NVIDIA RTX A4500", "NVIDIA RTX A5000", "NVIDIA RTX A6000", "NVIDIA RTX PRO 4000 Blackwell", "NVIDIA RTX PRO 4500 Blackwell", "NVIDIA RTX PRO 5000 Blackwell", "NVIDIA RTX PRO 6000 Blackwell Max-Q Workstation Edition", "NVIDIA RTX PRO 6000 Blackwell Server Edition", "NVIDIA RTX PRO 6000 Blackwell Workstation Edition", "Tesla V100-PCIE-16GB", "Tesla V100-SXM2-16GB"]>>>;
    readonly idleTimeout: Schema.optionalKey<Schema.Number>;
    readonly minCudaVersion: Schema.optionalKey<Schema.Literals<readonly ["13.0", "12.9", "12.8", "12.7", "12.6", "12.5", "12.4", "12.3", "12.2", "12.1", "12.0", "11.8"]>>;
    readonly name: Schema.optionalKey<Schema.String>;
    readonly networkVolumeId: Schema.optionalKey<Schema.String>;
    readonly networkVolumeIds: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly scalerType: Schema.optionalKey<Schema.Literals<readonly ["QUEUE_DELAY", "REQUEST_COUNT"]>>;
    readonly scalerValue: Schema.optionalKey<Schema.Number>;
    readonly templateId: Schema.optionalKey<Schema.String>;
    readonly vcpuCount: Schema.optionalKey<Schema.Number>;
    readonly workersMax: Schema.optionalKey<Schema.Number>;
    readonly workersMin: Schema.optionalKey<Schema.Number>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type TemplateCreateInput = {
    readonly "category"?: "NVIDIA" | "AMD" | "CPU";
    readonly "containerDiskInGb"?: number;
    readonly "containerRegistryAuthId"?: string;
    readonly "dockerEntrypoint"?: ReadonlyArray<string>;
    readonly "dockerStartCmd"?: ReadonlyArray<string>;
    readonly "env"?: {
        readonly [x: string]: Schema.Json;
    };
    readonly "imageName": string;
    readonly "isPublic"?: boolean;
    readonly "isServerless"?: boolean;
    readonly "name": string;
    readonly "ports"?: ReadonlyArray<string>;
    readonly "readme"?: string;
    readonly "volumeInGb"?: number;
    readonly "volumeMountPath"?: string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const TemplateCreateInput: Schema.StructWithRest<Schema.Struct<{
    readonly category: Schema.optionalKey<Schema.Literals<readonly ["NVIDIA", "AMD", "CPU"]>>;
    readonly containerDiskInGb: Schema.optionalKey<Schema.Number>;
    readonly containerRegistryAuthId: Schema.optionalKey<Schema.String>;
    readonly dockerEntrypoint: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly dockerStartCmd: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly env: Schema.optionalKey<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>;
    readonly imageName: Schema.String;
    readonly isPublic: Schema.optionalKey<Schema.Boolean>;
    readonly isServerless: Schema.optionalKey<Schema.Boolean>;
    readonly name: Schema.String;
    readonly ports: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly readme: Schema.optionalKey<Schema.String>;
    readonly volumeInGb: Schema.optionalKey<Schema.Number>;
    readonly volumeMountPath: Schema.optionalKey<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type TemplateUpdateInput = {
    readonly "containerDiskInGb"?: number;
    readonly "containerRegistryAuthId"?: string;
    readonly "dockerEntrypoint"?: ReadonlyArray<string>;
    readonly "dockerStartCmd"?: ReadonlyArray<string>;
    readonly "env"?: {
        readonly [x: string]: Schema.Json;
    };
    readonly "imageName"?: string;
    readonly "isPublic"?: boolean;
    readonly "name"?: string;
    readonly "ports"?: ReadonlyArray<string>;
    readonly "readme"?: string;
    readonly "volumeInGb"?: number;
    readonly "volumeMountPath"?: string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const TemplateUpdateInput: Schema.StructWithRest<Schema.Struct<{
    readonly containerDiskInGb: Schema.optionalKey<Schema.Number>;
    readonly containerRegistryAuthId: Schema.optionalKey<Schema.String>;
    readonly dockerEntrypoint: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly dockerStartCmd: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly env: Schema.optionalKey<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>;
    readonly imageName: Schema.optionalKey<Schema.String>;
    readonly isPublic: Schema.optionalKey<Schema.Boolean>;
    readonly name: Schema.optionalKey<Schema.String>;
    readonly ports: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly readme: Schema.optionalKey<Schema.String>;
    readonly volumeInGb: Schema.optionalKey<Schema.Number>;
    readonly volumeMountPath: Schema.optionalKey<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type NetworkVolumes = ReadonlyArray<{
    readonly "id"?: string;
    readonly "name"?: string;
    readonly "size"?: number;
    readonly "dataCenterId"?: string;
} & {
    readonly [x: string]: Schema.Json;
}>;
export declare const NetworkVolumes: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.optionalKey<Schema.String>;
    readonly name: Schema.optionalKey<Schema.String>;
    readonly size: Schema.optionalKey<Schema.Number>;
    readonly dataCenterId: Schema.optionalKey<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export type NetworkVolumeCreateInput = {
    readonly "dataCenterId": string;
    readonly "name": string;
    readonly "size": number;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const NetworkVolumeCreateInput: Schema.StructWithRest<Schema.Struct<{
    readonly dataCenterId: Schema.String;
    readonly name: Schema.String;
    readonly size: Schema.Number;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type NetworkVolume = {
    readonly "dataCenterId"?: string;
    readonly "id"?: string;
    readonly "name"?: string;
    readonly "size"?: number;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const NetworkVolume: Schema.StructWithRest<Schema.Struct<{
    readonly dataCenterId: Schema.optionalKey<Schema.String>;
    readonly id: Schema.optionalKey<Schema.String>;
    readonly name: Schema.optionalKey<Schema.String>;
    readonly size: Schema.optionalKey<Schema.Number>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type NetworkVolumeUpdateInput = {
    readonly "name"?: string;
    readonly "size"?: number;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const NetworkVolumeUpdateInput: Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.optionalKey<Schema.String>;
    readonly size: Schema.optionalKey<Schema.Number>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ContainerRegistryAuth = {
    readonly "id"?: string;
    readonly "name"?: string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const ContainerRegistryAuth: Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.optionalKey<Schema.String>;
    readonly name: Schema.optionalKey<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ContainerRegistryAuthCreateInput = {
    readonly "name": string;
    readonly "password": string;
    readonly "username": string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const ContainerRegistryAuthCreateInput: Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.String;
    readonly password: Schema.String;
    readonly username: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type BillingRecords = ReadonlyArray<{
    readonly "amount"?: number;
    readonly "diskSpaceBilledGb"?: number;
    readonly "endpointId"?: string;
    readonly "gpuTypeId"?: string;
    readonly "podId"?: string;
    readonly "time"?: string;
    readonly "timeBilledMs"?: number;
} & {
    readonly [x: string]: Schema.Json;
}>;
export declare const BillingRecords: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly amount: Schema.optionalKey<Schema.Number>;
    readonly diskSpaceBilledGb: Schema.optionalKey<Schema.Number>;
    readonly endpointId: Schema.optionalKey<Schema.String>;
    readonly gpuTypeId: Schema.optionalKey<Schema.String>;
    readonly podId: Schema.optionalKey<Schema.String>;
    readonly time: Schema.optionalKey<Schema.String>;
    readonly timeBilledMs: Schema.optionalKey<Schema.Number>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export type NetworkVolumeBillingRecords = ReadonlyArray<{
    readonly "amount"?: number;
    readonly "diskSpaceBilledGb"?: number;
    readonly "highPerformanceStorageAmount"?: number;
    readonly "highPerformanceStorageDiskSpaceBilledGb"?: number;
    readonly "time"?: string;
} & {
    readonly [x: string]: Schema.Json;
}>;
export declare const NetworkVolumeBillingRecords: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly amount: Schema.optionalKey<Schema.Number>;
    readonly diskSpaceBilledGb: Schema.optionalKey<Schema.Number>;
    readonly highPerformanceStorageAmount: Schema.optionalKey<Schema.Number>;
    readonly highPerformanceStorageDiskSpaceBilledGb: Schema.optionalKey<Schema.Number>;
    readonly time: Schema.optionalKey<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export type Pod = {
    readonly "adjustedCostPerHr"?: number;
    readonly "aiApiId"?: string;
    readonly "consumerUserId"?: string;
    readonly "containerDiskInGb"?: number;
    readonly "containerRegistryAuthId"?: string;
    readonly "costPerHr"?: number;
    readonly "cpuFlavorId"?: string;
    readonly "desiredStatus"?: "RUNNING" | "EXITED" | "TERMINATED";
    readonly "dockerEntrypoint"?: ReadonlyArray<string>;
    readonly "dockerStartCmd"?: ReadonlyArray<string>;
    readonly "endpointId"?: string;
    readonly "env"?: {
        readonly [x: string]: Schema.Json;
    };
    readonly "gpu"?: {
        readonly "id"?: string;
        readonly "count"?: number;
        readonly "displayName"?: string;
        readonly "securePrice"?: number;
        readonly "communityPrice"?: number;
        readonly "oneMonthPrice"?: number;
        readonly "threeMonthPrice"?: number;
        readonly "sixMonthPrice"?: number;
        readonly "oneWeekPrice"?: number;
        readonly "communitySpotPrice"?: number;
        readonly "secureSpotPrice"?: number;
    } & {
        readonly [x: string]: Schema.Json;
    };
    readonly "id"?: string;
    readonly "image"?: string;
    readonly "interruptible"?: boolean;
    readonly "lastStartedAt"?: string;
    readonly "lastStatusChange"?: string;
    readonly "locked"?: boolean;
    readonly "machine"?: {
        readonly "minPodGpuCount"?: number;
        readonly "gpuTypeId"?: string;
        readonly "gpuType"?: {
            readonly "id"?: string;
            readonly "count"?: number;
            readonly "displayName"?: string;
            readonly "securePrice"?: number;
            readonly "communityPrice"?: number;
            readonly "oneMonthPrice"?: number;
            readonly "threeMonthPrice"?: number;
            readonly "sixMonthPrice"?: number;
            readonly "oneWeekPrice"?: number;
            readonly "communitySpotPrice"?: number;
            readonly "secureSpotPrice"?: number;
        } & {
            readonly [x: string]: Schema.Json;
        };
        readonly "cpuCount"?: number;
        readonly "cpuTypeId"?: string;
        readonly "cpuType"?: {
            readonly "id"?: string;
            readonly "displayName"?: string;
            readonly "cores"?: number;
            readonly "threadsPerCore"?: number;
            readonly "groupId"?: string;
        } & {
            readonly [x: string]: Schema.Json;
        };
        readonly "location"?: string;
        readonly "dataCenterId"?: string;
        readonly "diskThroughputMBps"?: number;
        readonly "maxDownloadSpeedMbps"?: number;
        readonly "maxUploadSpeedMbps"?: number;
        readonly "supportPublicIp"?: boolean;
        readonly "secureCloud"?: boolean;
        readonly "maintenanceStart"?: string;
        readonly "maintenanceEnd"?: string;
        readonly "maintenanceNote"?: string;
        readonly "note"?: string;
        readonly "costPerHr"?: number;
        readonly "currentPricePerGpu"?: number;
        readonly "gpuAvailable"?: number;
        readonly "gpuDisplayName"?: string;
    } & {
        readonly [x: string]: Schema.Json;
    };
    readonly "machineId"?: string;
    readonly "memoryInGb"?: number;
    readonly "name"?: string;
    readonly "networkVolume"?: {
        readonly "id"?: string;
        readonly "name"?: string;
        readonly "size"?: number;
        readonly "dataCenterId"?: string;
    } & {
        readonly [x: string]: Schema.Json;
    };
    readonly "portMappings"?: {
        readonly [x: string]: Schema.Json;
    } | null;
    readonly "ports"?: ReadonlyArray<string>;
    readonly "publicIp"?: string | null;
    readonly "savingsPlans"?: ReadonlyArray<SavingsPlan>;
    readonly "slsVersion"?: number;
    readonly "templateId"?: string;
    readonly "vcpuCount"?: number;
    readonly "volumeEncrypted"?: boolean;
    readonly "volumeInGb"?: number;
    readonly "volumeMountPath"?: string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const Pod: Schema.StructWithRest<Schema.Struct<{
    readonly adjustedCostPerHr: Schema.optionalKey<Schema.Number>;
    readonly aiApiId: Schema.optionalKey<Schema.String>;
    readonly consumerUserId: Schema.optionalKey<Schema.String>;
    readonly containerDiskInGb: Schema.optionalKey<Schema.Number>;
    readonly containerRegistryAuthId: Schema.optionalKey<Schema.String>;
    readonly costPerHr: Schema.optionalKey<Schema.Number>;
    readonly cpuFlavorId: Schema.optionalKey<Schema.String>;
    readonly desiredStatus: Schema.optionalKey<Schema.Literals<readonly ["RUNNING", "EXITED", "TERMINATED"]>>;
    readonly dockerEntrypoint: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly dockerStartCmd: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly endpointId: Schema.optionalKey<Schema.String>;
    readonly env: Schema.optionalKey<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>;
    readonly gpu: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
        readonly id: Schema.optionalKey<Schema.String>;
        readonly count: Schema.optionalKey<Schema.Number>;
        readonly displayName: Schema.optionalKey<Schema.String>;
        readonly securePrice: Schema.optionalKey<Schema.Number>;
        readonly communityPrice: Schema.optionalKey<Schema.Number>;
        readonly oneMonthPrice: Schema.optionalKey<Schema.Number>;
        readonly threeMonthPrice: Schema.optionalKey<Schema.Number>;
        readonly sixMonthPrice: Schema.optionalKey<Schema.Number>;
        readonly oneWeekPrice: Schema.optionalKey<Schema.Number>;
        readonly communitySpotPrice: Schema.optionalKey<Schema.Number>;
        readonly secureSpotPrice: Schema.optionalKey<Schema.Number>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly id: Schema.optionalKey<Schema.String>;
    readonly image: Schema.optionalKey<Schema.String>;
    readonly interruptible: Schema.optionalKey<Schema.Boolean>;
    readonly lastStartedAt: Schema.optionalKey<Schema.String>;
    readonly lastStatusChange: Schema.optionalKey<Schema.String>;
    readonly locked: Schema.optionalKey<Schema.Boolean>;
    readonly machine: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
        readonly minPodGpuCount: Schema.optionalKey<Schema.Number>;
        readonly gpuTypeId: Schema.optionalKey<Schema.String>;
        readonly gpuType: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
            readonly id: Schema.optionalKey<Schema.String>;
            readonly count: Schema.optionalKey<Schema.Number>;
            readonly displayName: Schema.optionalKey<Schema.String>;
            readonly securePrice: Schema.optionalKey<Schema.Number>;
            readonly communityPrice: Schema.optionalKey<Schema.Number>;
            readonly oneMonthPrice: Schema.optionalKey<Schema.Number>;
            readonly threeMonthPrice: Schema.optionalKey<Schema.Number>;
            readonly sixMonthPrice: Schema.optionalKey<Schema.Number>;
            readonly oneWeekPrice: Schema.optionalKey<Schema.Number>;
            readonly communitySpotPrice: Schema.optionalKey<Schema.Number>;
            readonly secureSpotPrice: Schema.optionalKey<Schema.Number>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
        readonly cpuCount: Schema.optionalKey<Schema.Number>;
        readonly cpuTypeId: Schema.optionalKey<Schema.String>;
        readonly cpuType: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
            readonly id: Schema.optionalKey<Schema.String>;
            readonly displayName: Schema.optionalKey<Schema.String>;
            readonly cores: Schema.optionalKey<Schema.Number>;
            readonly threadsPerCore: Schema.optionalKey<Schema.Number>;
            readonly groupId: Schema.optionalKey<Schema.String>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
        readonly location: Schema.optionalKey<Schema.String>;
        readonly dataCenterId: Schema.optionalKey<Schema.String>;
        readonly diskThroughputMBps: Schema.optionalKey<Schema.Number>;
        readonly maxDownloadSpeedMbps: Schema.optionalKey<Schema.Number>;
        readonly maxUploadSpeedMbps: Schema.optionalKey<Schema.Number>;
        readonly supportPublicIp: Schema.optionalKey<Schema.Boolean>;
        readonly secureCloud: Schema.optionalKey<Schema.Boolean>;
        readonly maintenanceStart: Schema.optionalKey<Schema.String>;
        readonly maintenanceEnd: Schema.optionalKey<Schema.String>;
        readonly maintenanceNote: Schema.optionalKey<Schema.String>;
        readonly note: Schema.optionalKey<Schema.String>;
        readonly costPerHr: Schema.optionalKey<Schema.Number>;
        readonly currentPricePerGpu: Schema.optionalKey<Schema.Number>;
        readonly gpuAvailable: Schema.optionalKey<Schema.Number>;
        readonly gpuDisplayName: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly machineId: Schema.optionalKey<Schema.String>;
    readonly memoryInGb: Schema.optionalKey<Schema.Number>;
    readonly name: Schema.optionalKey<Schema.String>;
    readonly networkVolume: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
        readonly id: Schema.optionalKey<Schema.String>;
        readonly name: Schema.optionalKey<Schema.String>;
        readonly size: Schema.optionalKey<Schema.Number>;
        readonly dataCenterId: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly portMappings: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    readonly ports: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly publicIp: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
    readonly savingsPlans: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly costPerHr: Schema.optionalKey<Schema.Number>;
        readonly endTime: Schema.optionalKey<Schema.String>;
        readonly gpuTypeId: Schema.optionalKey<Schema.String>;
        readonly id: Schema.optionalKey<Schema.String>;
        readonly podId: Schema.optionalKey<Schema.String>;
        readonly startTime: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
    readonly slsVersion: Schema.optionalKey<Schema.Number>;
    readonly templateId: Schema.optionalKey<Schema.String>;
    readonly vcpuCount: Schema.optionalKey<Schema.Number>;
    readonly volumeEncrypted: Schema.optionalKey<Schema.Boolean>;
    readonly volumeInGb: Schema.optionalKey<Schema.Number>;
    readonly volumeMountPath: Schema.optionalKey<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type Templates = ReadonlyArray<Template>;
export declare const Templates: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly category: Schema.optionalKey<Schema.String>;
    readonly containerDiskInGb: Schema.optionalKey<Schema.Number>;
    readonly containerRegistryAuthId: Schema.optionalKey<Schema.String>;
    readonly dockerEntrypoint: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly dockerStartCmd: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly earned: Schema.optionalKey<Schema.Number>;
    readonly env: Schema.optionalKey<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>;
    readonly id: Schema.optionalKey<Schema.String>;
    readonly imageName: Schema.optionalKey<Schema.String>;
    readonly isPublic: Schema.optionalKey<Schema.Boolean>;
    readonly isRunpod: Schema.optionalKey<Schema.Boolean>;
    readonly isServerless: Schema.optionalKey<Schema.Boolean>;
    readonly name: Schema.optionalKey<Schema.String>;
    readonly ports: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly readme: Schema.optionalKey<Schema.String>;
    readonly runtimeInMin: Schema.optionalKey<Schema.Number>;
    readonly volumeInGb: Schema.optionalKey<Schema.Number>;
    readonly volumeMountPath: Schema.optionalKey<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export type ContainerRegistryAuths = ReadonlyArray<ContainerRegistryAuth>;
export declare const ContainerRegistryAuths: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.optionalKey<Schema.String>;
    readonly name: Schema.optionalKey<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export type Pods = ReadonlyArray<Pod>;
export declare const Pods: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly adjustedCostPerHr: Schema.optionalKey<Schema.Number>;
    readonly aiApiId: Schema.optionalKey<Schema.String>;
    readonly consumerUserId: Schema.optionalKey<Schema.String>;
    readonly containerDiskInGb: Schema.optionalKey<Schema.Number>;
    readonly containerRegistryAuthId: Schema.optionalKey<Schema.String>;
    readonly costPerHr: Schema.optionalKey<Schema.Number>;
    readonly cpuFlavorId: Schema.optionalKey<Schema.String>;
    readonly desiredStatus: Schema.optionalKey<Schema.Literals<readonly ["RUNNING", "EXITED", "TERMINATED"]>>;
    readonly dockerEntrypoint: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly dockerStartCmd: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly endpointId: Schema.optionalKey<Schema.String>;
    readonly env: Schema.optionalKey<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>;
    readonly gpu: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
        readonly id: Schema.optionalKey<Schema.String>;
        readonly count: Schema.optionalKey<Schema.Number>;
        readonly displayName: Schema.optionalKey<Schema.String>;
        readonly securePrice: Schema.optionalKey<Schema.Number>;
        readonly communityPrice: Schema.optionalKey<Schema.Number>;
        readonly oneMonthPrice: Schema.optionalKey<Schema.Number>;
        readonly threeMonthPrice: Schema.optionalKey<Schema.Number>;
        readonly sixMonthPrice: Schema.optionalKey<Schema.Number>;
        readonly oneWeekPrice: Schema.optionalKey<Schema.Number>;
        readonly communitySpotPrice: Schema.optionalKey<Schema.Number>;
        readonly secureSpotPrice: Schema.optionalKey<Schema.Number>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly id: Schema.optionalKey<Schema.String>;
    readonly image: Schema.optionalKey<Schema.String>;
    readonly interruptible: Schema.optionalKey<Schema.Boolean>;
    readonly lastStartedAt: Schema.optionalKey<Schema.String>;
    readonly lastStatusChange: Schema.optionalKey<Schema.String>;
    readonly locked: Schema.optionalKey<Schema.Boolean>;
    readonly machine: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
        readonly minPodGpuCount: Schema.optionalKey<Schema.Number>;
        readonly gpuTypeId: Schema.optionalKey<Schema.String>;
        readonly gpuType: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
            readonly id: Schema.optionalKey<Schema.String>;
            readonly count: Schema.optionalKey<Schema.Number>;
            readonly displayName: Schema.optionalKey<Schema.String>;
            readonly securePrice: Schema.optionalKey<Schema.Number>;
            readonly communityPrice: Schema.optionalKey<Schema.Number>;
            readonly oneMonthPrice: Schema.optionalKey<Schema.Number>;
            readonly threeMonthPrice: Schema.optionalKey<Schema.Number>;
            readonly sixMonthPrice: Schema.optionalKey<Schema.Number>;
            readonly oneWeekPrice: Schema.optionalKey<Schema.Number>;
            readonly communitySpotPrice: Schema.optionalKey<Schema.Number>;
            readonly secureSpotPrice: Schema.optionalKey<Schema.Number>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
        readonly cpuCount: Schema.optionalKey<Schema.Number>;
        readonly cpuTypeId: Schema.optionalKey<Schema.String>;
        readonly cpuType: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
            readonly id: Schema.optionalKey<Schema.String>;
            readonly displayName: Schema.optionalKey<Schema.String>;
            readonly cores: Schema.optionalKey<Schema.Number>;
            readonly threadsPerCore: Schema.optionalKey<Schema.Number>;
            readonly groupId: Schema.optionalKey<Schema.String>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
        readonly location: Schema.optionalKey<Schema.String>;
        readonly dataCenterId: Schema.optionalKey<Schema.String>;
        readonly diskThroughputMBps: Schema.optionalKey<Schema.Number>;
        readonly maxDownloadSpeedMbps: Schema.optionalKey<Schema.Number>;
        readonly maxUploadSpeedMbps: Schema.optionalKey<Schema.Number>;
        readonly supportPublicIp: Schema.optionalKey<Schema.Boolean>;
        readonly secureCloud: Schema.optionalKey<Schema.Boolean>;
        readonly maintenanceStart: Schema.optionalKey<Schema.String>;
        readonly maintenanceEnd: Schema.optionalKey<Schema.String>;
        readonly maintenanceNote: Schema.optionalKey<Schema.String>;
        readonly note: Schema.optionalKey<Schema.String>;
        readonly costPerHr: Schema.optionalKey<Schema.Number>;
        readonly currentPricePerGpu: Schema.optionalKey<Schema.Number>;
        readonly gpuAvailable: Schema.optionalKey<Schema.Number>;
        readonly gpuDisplayName: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly machineId: Schema.optionalKey<Schema.String>;
    readonly memoryInGb: Schema.optionalKey<Schema.Number>;
    readonly name: Schema.optionalKey<Schema.String>;
    readonly networkVolume: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
        readonly id: Schema.optionalKey<Schema.String>;
        readonly name: Schema.optionalKey<Schema.String>;
        readonly size: Schema.optionalKey<Schema.Number>;
        readonly dataCenterId: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly portMappings: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    readonly ports: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly publicIp: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
    readonly savingsPlans: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly costPerHr: Schema.optionalKey<Schema.Number>;
        readonly endTime: Schema.optionalKey<Schema.String>;
        readonly gpuTypeId: Schema.optionalKey<Schema.String>;
        readonly id: Schema.optionalKey<Schema.String>;
        readonly podId: Schema.optionalKey<Schema.String>;
        readonly startTime: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
    readonly slsVersion: Schema.optionalKey<Schema.Number>;
    readonly templateId: Schema.optionalKey<Schema.String>;
    readonly vcpuCount: Schema.optionalKey<Schema.Number>;
    readonly volumeEncrypted: Schema.optionalKey<Schema.Boolean>;
    readonly volumeInGb: Schema.optionalKey<Schema.Number>;
    readonly volumeMountPath: Schema.optionalKey<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export type Endpoint = {
    readonly "allowedCudaVersions"?: ReadonlyArray<"13.0" | "12.9" | "12.8" | "12.7" | "12.6" | "12.5" | "12.4" | "12.3" | "12.2" | "12.1" | "12.0" | "11.8">;
    readonly "computeType"?: "CPU" | "GPU";
    readonly "createdAt"?: string;
    readonly "dataCenterIds"?: ReadonlyArray<"EU-RO-1" | "CA-MTL-1" | "EU-SE-1" | "US-IL-1" | "EUR-IS-1" | "EU-CZ-1" | "US-TX-3" | "EUR-IS-2" | "US-KS-2" | "US-GA-2" | "US-WA-1" | "US-TX-1" | "CA-MTL-3" | "EU-NL-1" | "US-TX-4" | "US-CA-2" | "US-NC-1" | "OC-AU-1" | "US-DE-1" | "EUR-IS-3" | "CA-MTL-2" | "AP-JP-1" | "EUR-NO-1" | "EU-FR-1" | "US-KS-3" | "US-GA-1" | "AP-IN-1" | "US-MD-1">;
    readonly "env"?: {
        readonly [x: string]: Schema.Json;
    };
    readonly "executionTimeoutMs"?: number;
    readonly "gpuCount"?: number;
    readonly "gpuTypeIds"?: ReadonlyArray<"AMD Instinct MI300X OAM" | "NVIDIA A100 80GB PCIe" | "NVIDIA A100-SXM4-40GB" | "NVIDIA A100-SXM4-80GB" | "NVIDIA A40" | "NVIDIA B200" | "NVIDIA B300 SXM6 AC" | "NVIDIA B300 SXM6 AC MIG 1g.34gb" | "NVIDIA GeForce RTX 3070" | "NVIDIA GeForce RTX 3080" | "NVIDIA GeForce RTX 3080 Ti" | "NVIDIA GeForce RTX 3090" | "NVIDIA GeForce RTX 3090 Ti" | "NVIDIA GeForce RTX 4070 Ti" | "NVIDIA GeForce RTX 4080" | "NVIDIA GeForce RTX 4080 SUPER" | "NVIDIA GeForce RTX 4090" | "NVIDIA GeForce RTX 5080" | "NVIDIA GeForce RTX 5090" | "NVIDIA H100 80GB HBM3" | "NVIDIA H100 NVL" | "NVIDIA H100 PCIe" | "NVIDIA H200" | "NVIDIA H200 NVL" | "NVIDIA L4" | "NVIDIA L40" | "NVIDIA L40S" | "NVIDIA RTX 2000 Ada Generation" | "NVIDIA RTX 4000 Ada Generation" | "NVIDIA RTX 4000 SFF Ada Generation" | "NVIDIA RTX 5000 Ada Generation" | "NVIDIA RTX 6000 Ada Generation" | "NVIDIA RTX A2000" | "NVIDIA RTX A4000" | "NVIDIA RTX A4500" | "NVIDIA RTX A5000" | "NVIDIA RTX A6000" | "NVIDIA RTX PRO 4000 Blackwell" | "NVIDIA RTX PRO 4500 Blackwell" | "NVIDIA RTX PRO 5000 Blackwell" | "NVIDIA RTX PRO 6000 Blackwell Max-Q Workstation Edition" | "NVIDIA RTX PRO 6000 Blackwell Server Edition" | "NVIDIA RTX PRO 6000 Blackwell Workstation Edition" | "Tesla V100-PCIE-16GB" | "Tesla V100-SXM2-16GB">;
    readonly "id"?: string;
    readonly "idleTimeout"?: number;
    readonly "instanceIds"?: ReadonlyArray<string>;
    readonly "minCudaVersion"?: "13.0" | "12.9" | "12.8" | "12.7" | "12.6" | "12.5" | "12.4" | "12.3" | "12.2" | "12.1" | "12.0" | "11.8";
    readonly "name"?: string;
    readonly "networkVolumeId"?: string;
    readonly "networkVolumeIds"?: ReadonlyArray<string>;
    readonly "scalerType"?: "QUEUE_DELAY" | "REQUEST_COUNT";
    readonly "scalerValue"?: number;
    readonly "template"?: Template;
    readonly "templateId"?: string;
    readonly "userId"?: string;
    readonly "version"?: number;
    readonly "workers"?: ReadonlyArray<Pod>;
    readonly "workersMax"?: number;
    readonly "workersMin"?: number;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const Endpoint: Schema.StructWithRest<Schema.Struct<{
    readonly allowedCudaVersions: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["13.0", "12.9", "12.8", "12.7", "12.6", "12.5", "12.4", "12.3", "12.2", "12.1", "12.0", "11.8"]>>>;
    readonly computeType: Schema.optionalKey<Schema.Literals<readonly ["CPU", "GPU"]>>;
    readonly createdAt: Schema.optionalKey<Schema.String>;
    readonly dataCenterIds: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["EU-RO-1", "CA-MTL-1", "EU-SE-1", "US-IL-1", "EUR-IS-1", "EU-CZ-1", "US-TX-3", "EUR-IS-2", "US-KS-2", "US-GA-2", "US-WA-1", "US-TX-1", "CA-MTL-3", "EU-NL-1", "US-TX-4", "US-CA-2", "US-NC-1", "OC-AU-1", "US-DE-1", "EUR-IS-3", "CA-MTL-2", "AP-JP-1", "EUR-NO-1", "EU-FR-1", "US-KS-3", "US-GA-1", "AP-IN-1", "US-MD-1"]>>>;
    readonly env: Schema.optionalKey<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>;
    readonly executionTimeoutMs: Schema.optionalKey<Schema.Number>;
    readonly gpuCount: Schema.optionalKey<Schema.Number>;
    readonly gpuTypeIds: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["AMD Instinct MI300X OAM", "NVIDIA A100 80GB PCIe", "NVIDIA A100-SXM4-40GB", "NVIDIA A100-SXM4-80GB", "NVIDIA A40", "NVIDIA B200", "NVIDIA B300 SXM6 AC", "NVIDIA B300 SXM6 AC MIG 1g.34gb", "NVIDIA GeForce RTX 3070", "NVIDIA GeForce RTX 3080", "NVIDIA GeForce RTX 3080 Ti", "NVIDIA GeForce RTX 3090", "NVIDIA GeForce RTX 3090 Ti", "NVIDIA GeForce RTX 4070 Ti", "NVIDIA GeForce RTX 4080", "NVIDIA GeForce RTX 4080 SUPER", "NVIDIA GeForce RTX 4090", "NVIDIA GeForce RTX 5080", "NVIDIA GeForce RTX 5090", "NVIDIA H100 80GB HBM3", "NVIDIA H100 NVL", "NVIDIA H100 PCIe", "NVIDIA H200", "NVIDIA H200 NVL", "NVIDIA L4", "NVIDIA L40", "NVIDIA L40S", "NVIDIA RTX 2000 Ada Generation", "NVIDIA RTX 4000 Ada Generation", "NVIDIA RTX 4000 SFF Ada Generation", "NVIDIA RTX 5000 Ada Generation", "NVIDIA RTX 6000 Ada Generation", "NVIDIA RTX A2000", "NVIDIA RTX A4000", "NVIDIA RTX A4500", "NVIDIA RTX A5000", "NVIDIA RTX A6000", "NVIDIA RTX PRO 4000 Blackwell", "NVIDIA RTX PRO 4500 Blackwell", "NVIDIA RTX PRO 5000 Blackwell", "NVIDIA RTX PRO 6000 Blackwell Max-Q Workstation Edition", "NVIDIA RTX PRO 6000 Blackwell Server Edition", "NVIDIA RTX PRO 6000 Blackwell Workstation Edition", "Tesla V100-PCIE-16GB", "Tesla V100-SXM2-16GB"]>>>;
    readonly id: Schema.optionalKey<Schema.String>;
    readonly idleTimeout: Schema.optionalKey<Schema.Number>;
    readonly instanceIds: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly minCudaVersion: Schema.optionalKey<Schema.Literals<readonly ["13.0", "12.9", "12.8", "12.7", "12.6", "12.5", "12.4", "12.3", "12.2", "12.1", "12.0", "11.8"]>>;
    readonly name: Schema.optionalKey<Schema.String>;
    readonly networkVolumeId: Schema.optionalKey<Schema.String>;
    readonly networkVolumeIds: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly scalerType: Schema.optionalKey<Schema.Literals<readonly ["QUEUE_DELAY", "REQUEST_COUNT"]>>;
    readonly scalerValue: Schema.optionalKey<Schema.Number>;
    readonly template: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
        readonly category: Schema.optionalKey<Schema.String>;
        readonly containerDiskInGb: Schema.optionalKey<Schema.Number>;
        readonly containerRegistryAuthId: Schema.optionalKey<Schema.String>;
        readonly dockerEntrypoint: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly dockerStartCmd: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly earned: Schema.optionalKey<Schema.Number>;
        readonly env: Schema.optionalKey<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>;
        readonly id: Schema.optionalKey<Schema.String>;
        readonly imageName: Schema.optionalKey<Schema.String>;
        readonly isPublic: Schema.optionalKey<Schema.Boolean>;
        readonly isRunpod: Schema.optionalKey<Schema.Boolean>;
        readonly isServerless: Schema.optionalKey<Schema.Boolean>;
        readonly name: Schema.optionalKey<Schema.String>;
        readonly ports: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly readme: Schema.optionalKey<Schema.String>;
        readonly runtimeInMin: Schema.optionalKey<Schema.Number>;
        readonly volumeInGb: Schema.optionalKey<Schema.Number>;
        readonly volumeMountPath: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly templateId: Schema.optionalKey<Schema.String>;
    readonly userId: Schema.optionalKey<Schema.String>;
    readonly version: Schema.optionalKey<Schema.Number>;
    readonly workers: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly adjustedCostPerHr: Schema.optionalKey<Schema.Number>;
        readonly aiApiId: Schema.optionalKey<Schema.String>;
        readonly consumerUserId: Schema.optionalKey<Schema.String>;
        readonly containerDiskInGb: Schema.optionalKey<Schema.Number>;
        readonly containerRegistryAuthId: Schema.optionalKey<Schema.String>;
        readonly costPerHr: Schema.optionalKey<Schema.Number>;
        readonly cpuFlavorId: Schema.optionalKey<Schema.String>;
        readonly desiredStatus: Schema.optionalKey<Schema.Literals<readonly ["RUNNING", "EXITED", "TERMINATED"]>>;
        readonly dockerEntrypoint: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly dockerStartCmd: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly endpointId: Schema.optionalKey<Schema.String>;
        readonly env: Schema.optionalKey<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>;
        readonly gpu: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
            readonly id: Schema.optionalKey<Schema.String>;
            readonly count: Schema.optionalKey<Schema.Number>;
            readonly displayName: Schema.optionalKey<Schema.String>;
            readonly securePrice: Schema.optionalKey<Schema.Number>;
            readonly communityPrice: Schema.optionalKey<Schema.Number>;
            readonly oneMonthPrice: Schema.optionalKey<Schema.Number>;
            readonly threeMonthPrice: Schema.optionalKey<Schema.Number>;
            readonly sixMonthPrice: Schema.optionalKey<Schema.Number>;
            readonly oneWeekPrice: Schema.optionalKey<Schema.Number>;
            readonly communitySpotPrice: Schema.optionalKey<Schema.Number>;
            readonly secureSpotPrice: Schema.optionalKey<Schema.Number>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
        readonly id: Schema.optionalKey<Schema.String>;
        readonly image: Schema.optionalKey<Schema.String>;
        readonly interruptible: Schema.optionalKey<Schema.Boolean>;
        readonly lastStartedAt: Schema.optionalKey<Schema.String>;
        readonly lastStatusChange: Schema.optionalKey<Schema.String>;
        readonly locked: Schema.optionalKey<Schema.Boolean>;
        readonly machine: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
            readonly minPodGpuCount: Schema.optionalKey<Schema.Number>;
            readonly gpuTypeId: Schema.optionalKey<Schema.String>;
            readonly gpuType: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
                readonly id: Schema.optionalKey<Schema.String>;
                readonly count: Schema.optionalKey<Schema.Number>;
                readonly displayName: Schema.optionalKey<Schema.String>;
                readonly securePrice: Schema.optionalKey<Schema.Number>;
                readonly communityPrice: Schema.optionalKey<Schema.Number>;
                readonly oneMonthPrice: Schema.optionalKey<Schema.Number>;
                readonly threeMonthPrice: Schema.optionalKey<Schema.Number>;
                readonly sixMonthPrice: Schema.optionalKey<Schema.Number>;
                readonly oneWeekPrice: Schema.optionalKey<Schema.Number>;
                readonly communitySpotPrice: Schema.optionalKey<Schema.Number>;
                readonly secureSpotPrice: Schema.optionalKey<Schema.Number>;
            }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
            readonly cpuCount: Schema.optionalKey<Schema.Number>;
            readonly cpuTypeId: Schema.optionalKey<Schema.String>;
            readonly cpuType: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
                readonly id: Schema.optionalKey<Schema.String>;
                readonly displayName: Schema.optionalKey<Schema.String>;
                readonly cores: Schema.optionalKey<Schema.Number>;
                readonly threadsPerCore: Schema.optionalKey<Schema.Number>;
                readonly groupId: Schema.optionalKey<Schema.String>;
            }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
            readonly location: Schema.optionalKey<Schema.String>;
            readonly dataCenterId: Schema.optionalKey<Schema.String>;
            readonly diskThroughputMBps: Schema.optionalKey<Schema.Number>;
            readonly maxDownloadSpeedMbps: Schema.optionalKey<Schema.Number>;
            readonly maxUploadSpeedMbps: Schema.optionalKey<Schema.Number>;
            readonly supportPublicIp: Schema.optionalKey<Schema.Boolean>;
            readonly secureCloud: Schema.optionalKey<Schema.Boolean>;
            readonly maintenanceStart: Schema.optionalKey<Schema.String>;
            readonly maintenanceEnd: Schema.optionalKey<Schema.String>;
            readonly maintenanceNote: Schema.optionalKey<Schema.String>;
            readonly note: Schema.optionalKey<Schema.String>;
            readonly costPerHr: Schema.optionalKey<Schema.Number>;
            readonly currentPricePerGpu: Schema.optionalKey<Schema.Number>;
            readonly gpuAvailable: Schema.optionalKey<Schema.Number>;
            readonly gpuDisplayName: Schema.optionalKey<Schema.String>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
        readonly machineId: Schema.optionalKey<Schema.String>;
        readonly memoryInGb: Schema.optionalKey<Schema.Number>;
        readonly name: Schema.optionalKey<Schema.String>;
        readonly networkVolume: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
            readonly id: Schema.optionalKey<Schema.String>;
            readonly name: Schema.optionalKey<Schema.String>;
            readonly size: Schema.optionalKey<Schema.Number>;
            readonly dataCenterId: Schema.optionalKey<Schema.String>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
        readonly portMappings: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        readonly ports: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly publicIp: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly savingsPlans: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
            readonly costPerHr: Schema.optionalKey<Schema.Number>;
            readonly endTime: Schema.optionalKey<Schema.String>;
            readonly gpuTypeId: Schema.optionalKey<Schema.String>;
            readonly id: Schema.optionalKey<Schema.String>;
            readonly podId: Schema.optionalKey<Schema.String>;
            readonly startTime: Schema.optionalKey<Schema.String>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
        readonly slsVersion: Schema.optionalKey<Schema.Number>;
        readonly templateId: Schema.optionalKey<Schema.String>;
        readonly vcpuCount: Schema.optionalKey<Schema.Number>;
        readonly volumeEncrypted: Schema.optionalKey<Schema.Boolean>;
        readonly volumeInGb: Schema.optionalKey<Schema.Number>;
        readonly volumeMountPath: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
    readonly workersMax: Schema.optionalKey<Schema.Number>;
    readonly workersMin: Schema.optionalKey<Schema.Number>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type Endpoints = ReadonlyArray<Endpoint>;
export declare const Endpoints: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly allowedCudaVersions: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["13.0", "12.9", "12.8", "12.7", "12.6", "12.5", "12.4", "12.3", "12.2", "12.1", "12.0", "11.8"]>>>;
    readonly computeType: Schema.optionalKey<Schema.Literals<readonly ["CPU", "GPU"]>>;
    readonly createdAt: Schema.optionalKey<Schema.String>;
    readonly dataCenterIds: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["EU-RO-1", "CA-MTL-1", "EU-SE-1", "US-IL-1", "EUR-IS-1", "EU-CZ-1", "US-TX-3", "EUR-IS-2", "US-KS-2", "US-GA-2", "US-WA-1", "US-TX-1", "CA-MTL-3", "EU-NL-1", "US-TX-4", "US-CA-2", "US-NC-1", "OC-AU-1", "US-DE-1", "EUR-IS-3", "CA-MTL-2", "AP-JP-1", "EUR-NO-1", "EU-FR-1", "US-KS-3", "US-GA-1", "AP-IN-1", "US-MD-1"]>>>;
    readonly env: Schema.optionalKey<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>;
    readonly executionTimeoutMs: Schema.optionalKey<Schema.Number>;
    readonly gpuCount: Schema.optionalKey<Schema.Number>;
    readonly gpuTypeIds: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["AMD Instinct MI300X OAM", "NVIDIA A100 80GB PCIe", "NVIDIA A100-SXM4-40GB", "NVIDIA A100-SXM4-80GB", "NVIDIA A40", "NVIDIA B200", "NVIDIA B300 SXM6 AC", "NVIDIA B300 SXM6 AC MIG 1g.34gb", "NVIDIA GeForce RTX 3070", "NVIDIA GeForce RTX 3080", "NVIDIA GeForce RTX 3080 Ti", "NVIDIA GeForce RTX 3090", "NVIDIA GeForce RTX 3090 Ti", "NVIDIA GeForce RTX 4070 Ti", "NVIDIA GeForce RTX 4080", "NVIDIA GeForce RTX 4080 SUPER", "NVIDIA GeForce RTX 4090", "NVIDIA GeForce RTX 5080", "NVIDIA GeForce RTX 5090", "NVIDIA H100 80GB HBM3", "NVIDIA H100 NVL", "NVIDIA H100 PCIe", "NVIDIA H200", "NVIDIA H200 NVL", "NVIDIA L4", "NVIDIA L40", "NVIDIA L40S", "NVIDIA RTX 2000 Ada Generation", "NVIDIA RTX 4000 Ada Generation", "NVIDIA RTX 4000 SFF Ada Generation", "NVIDIA RTX 5000 Ada Generation", "NVIDIA RTX 6000 Ada Generation", "NVIDIA RTX A2000", "NVIDIA RTX A4000", "NVIDIA RTX A4500", "NVIDIA RTX A5000", "NVIDIA RTX A6000", "NVIDIA RTX PRO 4000 Blackwell", "NVIDIA RTX PRO 4500 Blackwell", "NVIDIA RTX PRO 5000 Blackwell", "NVIDIA RTX PRO 6000 Blackwell Max-Q Workstation Edition", "NVIDIA RTX PRO 6000 Blackwell Server Edition", "NVIDIA RTX PRO 6000 Blackwell Workstation Edition", "Tesla V100-PCIE-16GB", "Tesla V100-SXM2-16GB"]>>>;
    readonly id: Schema.optionalKey<Schema.String>;
    readonly idleTimeout: Schema.optionalKey<Schema.Number>;
    readonly instanceIds: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly minCudaVersion: Schema.optionalKey<Schema.Literals<readonly ["13.0", "12.9", "12.8", "12.7", "12.6", "12.5", "12.4", "12.3", "12.2", "12.1", "12.0", "11.8"]>>;
    readonly name: Schema.optionalKey<Schema.String>;
    readonly networkVolumeId: Schema.optionalKey<Schema.String>;
    readonly networkVolumeIds: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly scalerType: Schema.optionalKey<Schema.Literals<readonly ["QUEUE_DELAY", "REQUEST_COUNT"]>>;
    readonly scalerValue: Schema.optionalKey<Schema.Number>;
    readonly template: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
        readonly category: Schema.optionalKey<Schema.String>;
        readonly containerDiskInGb: Schema.optionalKey<Schema.Number>;
        readonly containerRegistryAuthId: Schema.optionalKey<Schema.String>;
        readonly dockerEntrypoint: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly dockerStartCmd: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly earned: Schema.optionalKey<Schema.Number>;
        readonly env: Schema.optionalKey<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>;
        readonly id: Schema.optionalKey<Schema.String>;
        readonly imageName: Schema.optionalKey<Schema.String>;
        readonly isPublic: Schema.optionalKey<Schema.Boolean>;
        readonly isRunpod: Schema.optionalKey<Schema.Boolean>;
        readonly isServerless: Schema.optionalKey<Schema.Boolean>;
        readonly name: Schema.optionalKey<Schema.String>;
        readonly ports: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly readme: Schema.optionalKey<Schema.String>;
        readonly runtimeInMin: Schema.optionalKey<Schema.Number>;
        readonly volumeInGb: Schema.optionalKey<Schema.Number>;
        readonly volumeMountPath: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly templateId: Schema.optionalKey<Schema.String>;
    readonly userId: Schema.optionalKey<Schema.String>;
    readonly version: Schema.optionalKey<Schema.Number>;
    readonly workers: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly adjustedCostPerHr: Schema.optionalKey<Schema.Number>;
        readonly aiApiId: Schema.optionalKey<Schema.String>;
        readonly consumerUserId: Schema.optionalKey<Schema.String>;
        readonly containerDiskInGb: Schema.optionalKey<Schema.Number>;
        readonly containerRegistryAuthId: Schema.optionalKey<Schema.String>;
        readonly costPerHr: Schema.optionalKey<Schema.Number>;
        readonly cpuFlavorId: Schema.optionalKey<Schema.String>;
        readonly desiredStatus: Schema.optionalKey<Schema.Literals<readonly ["RUNNING", "EXITED", "TERMINATED"]>>;
        readonly dockerEntrypoint: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly dockerStartCmd: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly endpointId: Schema.optionalKey<Schema.String>;
        readonly env: Schema.optionalKey<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>;
        readonly gpu: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
            readonly id: Schema.optionalKey<Schema.String>;
            readonly count: Schema.optionalKey<Schema.Number>;
            readonly displayName: Schema.optionalKey<Schema.String>;
            readonly securePrice: Schema.optionalKey<Schema.Number>;
            readonly communityPrice: Schema.optionalKey<Schema.Number>;
            readonly oneMonthPrice: Schema.optionalKey<Schema.Number>;
            readonly threeMonthPrice: Schema.optionalKey<Schema.Number>;
            readonly sixMonthPrice: Schema.optionalKey<Schema.Number>;
            readonly oneWeekPrice: Schema.optionalKey<Schema.Number>;
            readonly communitySpotPrice: Schema.optionalKey<Schema.Number>;
            readonly secureSpotPrice: Schema.optionalKey<Schema.Number>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
        readonly id: Schema.optionalKey<Schema.String>;
        readonly image: Schema.optionalKey<Schema.String>;
        readonly interruptible: Schema.optionalKey<Schema.Boolean>;
        readonly lastStartedAt: Schema.optionalKey<Schema.String>;
        readonly lastStatusChange: Schema.optionalKey<Schema.String>;
        readonly locked: Schema.optionalKey<Schema.Boolean>;
        readonly machine: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
            readonly minPodGpuCount: Schema.optionalKey<Schema.Number>;
            readonly gpuTypeId: Schema.optionalKey<Schema.String>;
            readonly gpuType: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
                readonly id: Schema.optionalKey<Schema.String>;
                readonly count: Schema.optionalKey<Schema.Number>;
                readonly displayName: Schema.optionalKey<Schema.String>;
                readonly securePrice: Schema.optionalKey<Schema.Number>;
                readonly communityPrice: Schema.optionalKey<Schema.Number>;
                readonly oneMonthPrice: Schema.optionalKey<Schema.Number>;
                readonly threeMonthPrice: Schema.optionalKey<Schema.Number>;
                readonly sixMonthPrice: Schema.optionalKey<Schema.Number>;
                readonly oneWeekPrice: Schema.optionalKey<Schema.Number>;
                readonly communitySpotPrice: Schema.optionalKey<Schema.Number>;
                readonly secureSpotPrice: Schema.optionalKey<Schema.Number>;
            }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
            readonly cpuCount: Schema.optionalKey<Schema.Number>;
            readonly cpuTypeId: Schema.optionalKey<Schema.String>;
            readonly cpuType: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
                readonly id: Schema.optionalKey<Schema.String>;
                readonly displayName: Schema.optionalKey<Schema.String>;
                readonly cores: Schema.optionalKey<Schema.Number>;
                readonly threadsPerCore: Schema.optionalKey<Schema.Number>;
                readonly groupId: Schema.optionalKey<Schema.String>;
            }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
            readonly location: Schema.optionalKey<Schema.String>;
            readonly dataCenterId: Schema.optionalKey<Schema.String>;
            readonly diskThroughputMBps: Schema.optionalKey<Schema.Number>;
            readonly maxDownloadSpeedMbps: Schema.optionalKey<Schema.Number>;
            readonly maxUploadSpeedMbps: Schema.optionalKey<Schema.Number>;
            readonly supportPublicIp: Schema.optionalKey<Schema.Boolean>;
            readonly secureCloud: Schema.optionalKey<Schema.Boolean>;
            readonly maintenanceStart: Schema.optionalKey<Schema.String>;
            readonly maintenanceEnd: Schema.optionalKey<Schema.String>;
            readonly maintenanceNote: Schema.optionalKey<Schema.String>;
            readonly note: Schema.optionalKey<Schema.String>;
            readonly costPerHr: Schema.optionalKey<Schema.Number>;
            readonly currentPricePerGpu: Schema.optionalKey<Schema.Number>;
            readonly gpuAvailable: Schema.optionalKey<Schema.Number>;
            readonly gpuDisplayName: Schema.optionalKey<Schema.String>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
        readonly machineId: Schema.optionalKey<Schema.String>;
        readonly memoryInGb: Schema.optionalKey<Schema.Number>;
        readonly name: Schema.optionalKey<Schema.String>;
        readonly networkVolume: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
            readonly id: Schema.optionalKey<Schema.String>;
            readonly name: Schema.optionalKey<Schema.String>;
            readonly size: Schema.optionalKey<Schema.Number>;
            readonly dataCenterId: Schema.optionalKey<Schema.String>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
        readonly portMappings: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        readonly ports: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly publicIp: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly savingsPlans: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
            readonly costPerHr: Schema.optionalKey<Schema.Number>;
            readonly endTime: Schema.optionalKey<Schema.String>;
            readonly gpuTypeId: Schema.optionalKey<Schema.String>;
            readonly id: Schema.optionalKey<Schema.String>;
            readonly podId: Schema.optionalKey<Schema.String>;
            readonly startTime: Schema.optionalKey<Schema.String>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
        readonly slsVersion: Schema.optionalKey<Schema.Number>;
        readonly templateId: Schema.optionalKey<Schema.String>;
        readonly vcpuCount: Schema.optionalKey<Schema.Number>;
        readonly volumeEncrypted: Schema.optionalKey<Schema.Boolean>;
        readonly volumeInGb: Schema.optionalKey<Schema.Number>;
        readonly volumeMountPath: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
    readonly workersMax: Schema.optionalKey<Schema.Number>;
    readonly workersMin: Schema.optionalKey<Schema.Number>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export type GetOpenAPI200 = {
    readonly [x: string]: Schema.Json;
};
export declare const GetOpenAPI200: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
export type ListPodsParams = {
    readonly "computeType"?: "GPU" | "CPU";
    readonly "cpuFlavorId"?: ReadonlyArray<string>;
    readonly "dataCenterId"?: ReadonlyArray<string>;
    readonly "desiredStatus"?: "RUNNING" | "EXITED" | "TERMINATED";
    readonly "endpointId"?: string;
    readonly "gpuTypeId"?: ReadonlyArray<string>;
    readonly "id"?: string;
    readonly "imageName"?: string;
    readonly "includeMachine"?: boolean;
    readonly "includeNetworkVolume"?: boolean;
    readonly "includeSavingsPlans"?: boolean;
    readonly "includeTemplate"?: boolean;
    readonly "includeWorkers"?: boolean;
    readonly "name"?: string;
    readonly "networkVolumeId"?: string;
    readonly "templateId"?: string;
};
export declare const ListPodsParams: Schema.Struct<{
    readonly computeType: Schema.optionalKey<Schema.Literals<readonly ["GPU", "CPU"]>>;
    readonly cpuFlavorId: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly dataCenterId: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly desiredStatus: Schema.optionalKey<Schema.Literals<readonly ["RUNNING", "EXITED", "TERMINATED"]>>;
    readonly endpointId: Schema.optionalKey<Schema.String>;
    readonly gpuTypeId: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly id: Schema.optionalKey<Schema.String>;
    readonly imageName: Schema.optionalKey<Schema.String>;
    readonly includeMachine: Schema.optionalKey<Schema.Boolean>;
    readonly includeNetworkVolume: Schema.optionalKey<Schema.Boolean>;
    readonly includeSavingsPlans: Schema.optionalKey<Schema.Boolean>;
    readonly includeTemplate: Schema.optionalKey<Schema.Boolean>;
    readonly includeWorkers: Schema.optionalKey<Schema.Boolean>;
    readonly name: Schema.optionalKey<Schema.String>;
    readonly networkVolumeId: Schema.optionalKey<Schema.String>;
    readonly templateId: Schema.optionalKey<Schema.String>;
}>;
export type ListPods200 = Pods;
export declare const ListPods200: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly adjustedCostPerHr: Schema.optionalKey<Schema.Number>;
    readonly aiApiId: Schema.optionalKey<Schema.String>;
    readonly consumerUserId: Schema.optionalKey<Schema.String>;
    readonly containerDiskInGb: Schema.optionalKey<Schema.Number>;
    readonly containerRegistryAuthId: Schema.optionalKey<Schema.String>;
    readonly costPerHr: Schema.optionalKey<Schema.Number>;
    readonly cpuFlavorId: Schema.optionalKey<Schema.String>;
    readonly desiredStatus: Schema.optionalKey<Schema.Literals<readonly ["RUNNING", "EXITED", "TERMINATED"]>>;
    readonly dockerEntrypoint: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly dockerStartCmd: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly endpointId: Schema.optionalKey<Schema.String>;
    readonly env: Schema.optionalKey<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>;
    readonly gpu: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
        readonly id: Schema.optionalKey<Schema.String>;
        readonly count: Schema.optionalKey<Schema.Number>;
        readonly displayName: Schema.optionalKey<Schema.String>;
        readonly securePrice: Schema.optionalKey<Schema.Number>;
        readonly communityPrice: Schema.optionalKey<Schema.Number>;
        readonly oneMonthPrice: Schema.optionalKey<Schema.Number>;
        readonly threeMonthPrice: Schema.optionalKey<Schema.Number>;
        readonly sixMonthPrice: Schema.optionalKey<Schema.Number>;
        readonly oneWeekPrice: Schema.optionalKey<Schema.Number>;
        readonly communitySpotPrice: Schema.optionalKey<Schema.Number>;
        readonly secureSpotPrice: Schema.optionalKey<Schema.Number>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly id: Schema.optionalKey<Schema.String>;
    readonly image: Schema.optionalKey<Schema.String>;
    readonly interruptible: Schema.optionalKey<Schema.Boolean>;
    readonly lastStartedAt: Schema.optionalKey<Schema.String>;
    readonly lastStatusChange: Schema.optionalKey<Schema.String>;
    readonly locked: Schema.optionalKey<Schema.Boolean>;
    readonly machine: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
        readonly minPodGpuCount: Schema.optionalKey<Schema.Number>;
        readonly gpuTypeId: Schema.optionalKey<Schema.String>;
        readonly gpuType: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
            readonly id: Schema.optionalKey<Schema.String>;
            readonly count: Schema.optionalKey<Schema.Number>;
            readonly displayName: Schema.optionalKey<Schema.String>;
            readonly securePrice: Schema.optionalKey<Schema.Number>;
            readonly communityPrice: Schema.optionalKey<Schema.Number>;
            readonly oneMonthPrice: Schema.optionalKey<Schema.Number>;
            readonly threeMonthPrice: Schema.optionalKey<Schema.Number>;
            readonly sixMonthPrice: Schema.optionalKey<Schema.Number>;
            readonly oneWeekPrice: Schema.optionalKey<Schema.Number>;
            readonly communitySpotPrice: Schema.optionalKey<Schema.Number>;
            readonly secureSpotPrice: Schema.optionalKey<Schema.Number>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
        readonly cpuCount: Schema.optionalKey<Schema.Number>;
        readonly cpuTypeId: Schema.optionalKey<Schema.String>;
        readonly cpuType: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
            readonly id: Schema.optionalKey<Schema.String>;
            readonly displayName: Schema.optionalKey<Schema.String>;
            readonly cores: Schema.optionalKey<Schema.Number>;
            readonly threadsPerCore: Schema.optionalKey<Schema.Number>;
            readonly groupId: Schema.optionalKey<Schema.String>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
        readonly location: Schema.optionalKey<Schema.String>;
        readonly dataCenterId: Schema.optionalKey<Schema.String>;
        readonly diskThroughputMBps: Schema.optionalKey<Schema.Number>;
        readonly maxDownloadSpeedMbps: Schema.optionalKey<Schema.Number>;
        readonly maxUploadSpeedMbps: Schema.optionalKey<Schema.Number>;
        readonly supportPublicIp: Schema.optionalKey<Schema.Boolean>;
        readonly secureCloud: Schema.optionalKey<Schema.Boolean>;
        readonly maintenanceStart: Schema.optionalKey<Schema.String>;
        readonly maintenanceEnd: Schema.optionalKey<Schema.String>;
        readonly maintenanceNote: Schema.optionalKey<Schema.String>;
        readonly note: Schema.optionalKey<Schema.String>;
        readonly costPerHr: Schema.optionalKey<Schema.Number>;
        readonly currentPricePerGpu: Schema.optionalKey<Schema.Number>;
        readonly gpuAvailable: Schema.optionalKey<Schema.Number>;
        readonly gpuDisplayName: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly machineId: Schema.optionalKey<Schema.String>;
    readonly memoryInGb: Schema.optionalKey<Schema.Number>;
    readonly name: Schema.optionalKey<Schema.String>;
    readonly networkVolume: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
        readonly id: Schema.optionalKey<Schema.String>;
        readonly name: Schema.optionalKey<Schema.String>;
        readonly size: Schema.optionalKey<Schema.Number>;
        readonly dataCenterId: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly portMappings: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    readonly ports: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly publicIp: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
    readonly savingsPlans: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly costPerHr: Schema.optionalKey<Schema.Number>;
        readonly endTime: Schema.optionalKey<Schema.String>;
        readonly gpuTypeId: Schema.optionalKey<Schema.String>;
        readonly id: Schema.optionalKey<Schema.String>;
        readonly podId: Schema.optionalKey<Schema.String>;
        readonly startTime: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
    readonly slsVersion: Schema.optionalKey<Schema.Number>;
    readonly templateId: Schema.optionalKey<Schema.String>;
    readonly vcpuCount: Schema.optionalKey<Schema.Number>;
    readonly volumeEncrypted: Schema.optionalKey<Schema.Boolean>;
    readonly volumeInGb: Schema.optionalKey<Schema.Number>;
    readonly volumeMountPath: Schema.optionalKey<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export type CreatePodRequestJson = PodCreateInput;
export declare const CreatePodRequestJson: Schema.StructWithRest<Schema.Struct<{
    readonly allowedCudaVersions: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["13.0", "12.9", "12.8", "12.7", "12.6", "12.5", "12.4", "12.3", "12.2", "12.1", "12.0", "11.8"]>>>;
    readonly cloudType: Schema.optionalKey<Schema.Literals<readonly ["SECURE", "COMMUNITY"]>>;
    readonly computeType: Schema.optionalKey<Schema.Literals<readonly ["GPU", "CPU"]>>;
    readonly containerDiskInGb: Schema.optionalKey<Schema.Union<readonly [Schema.Number, Schema.Null]>>;
    readonly containerRegistryAuthId: Schema.optionalKey<Schema.String>;
    readonly countryCodes: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly cpuFlavorIds: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["cpu3c", "cpu3g", "cpu3m", "cpu5c", "cpu5g", "cpu5m"]>>>;
    readonly cpuFlavorPriority: Schema.optionalKey<Schema.Literals<readonly ["availability", "custom"]>>;
    readonly dataCenterIds: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["EU-RO-1", "CA-MTL-1", "EU-SE-1", "US-IL-1", "EUR-IS-1", "EU-CZ-1", "US-TX-3", "EUR-IS-2", "US-KS-2", "US-GA-2", "US-WA-1", "US-TX-1", "CA-MTL-3", "EU-NL-1", "US-TX-4", "US-CA-2", "US-NC-1", "OC-AU-1", "US-DE-1", "EUR-IS-3", "CA-MTL-2", "AP-JP-1", "EUR-NO-1", "EU-FR-1", "US-KS-3", "US-GA-1", "AP-IN-1", "US-MD-1"]>>>;
    readonly dataCenterPriority: Schema.optionalKey<Schema.Literals<readonly ["availability", "custom"]>>;
    readonly dockerEntrypoint: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly dockerStartCmd: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly env: Schema.optionalKey<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>;
    readonly globalNetworking: Schema.optionalKey<Schema.Boolean>;
    readonly gpuCount: Schema.optionalKey<Schema.Number>;
    readonly gpuTypeIds: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["AMD Instinct MI300X OAM", "NVIDIA A100 80GB PCIe", "NVIDIA A100-SXM4-40GB", "NVIDIA A100-SXM4-80GB", "NVIDIA A40", "NVIDIA B200", "NVIDIA B300 SXM6 AC", "NVIDIA B300 SXM6 AC MIG 1g.34gb", "NVIDIA GeForce RTX 3070", "NVIDIA GeForce RTX 3080", "NVIDIA GeForce RTX 3080 Ti", "NVIDIA GeForce RTX 3090", "NVIDIA GeForce RTX 3090 Ti", "NVIDIA GeForce RTX 4070 Ti", "NVIDIA GeForce RTX 4080", "NVIDIA GeForce RTX 4080 SUPER", "NVIDIA GeForce RTX 4090", "NVIDIA GeForce RTX 5080", "NVIDIA GeForce RTX 5090", "NVIDIA H100 80GB HBM3", "NVIDIA H100 NVL", "NVIDIA H100 PCIe", "NVIDIA H200", "NVIDIA H200 NVL", "NVIDIA L4", "NVIDIA L40", "NVIDIA L40S", "NVIDIA RTX 2000 Ada Generation", "NVIDIA RTX 4000 Ada Generation", "NVIDIA RTX 4000 SFF Ada Generation", "NVIDIA RTX 5000 Ada Generation", "NVIDIA RTX 6000 Ada Generation", "NVIDIA RTX A2000", "NVIDIA RTX A4000", "NVIDIA RTX A4500", "NVIDIA RTX A5000", "NVIDIA RTX A6000", "NVIDIA RTX PRO 4000 Blackwell", "NVIDIA RTX PRO 4500 Blackwell", "NVIDIA RTX PRO 5000 Blackwell", "NVIDIA RTX PRO 6000 Blackwell Max-Q Workstation Edition", "NVIDIA RTX PRO 6000 Blackwell Server Edition", "NVIDIA RTX PRO 6000 Blackwell Workstation Edition", "Tesla V100-PCIE-16GB", "Tesla V100-SXM2-16GB"]>>>;
    readonly gpuTypePriority: Schema.optionalKey<Schema.Literals<readonly ["availability", "custom"]>>;
    readonly imageName: Schema.optionalKey<Schema.String>;
    readonly interruptible: Schema.optionalKey<Schema.Boolean>;
    readonly locked: Schema.optionalKey<Schema.Boolean>;
    readonly minDiskBandwidthMBps: Schema.optionalKey<Schema.Number>;
    readonly minDownloadMbps: Schema.optionalKey<Schema.Number>;
    readonly minRAMPerGPU: Schema.optionalKey<Schema.Number>;
    readonly minUploadMbps: Schema.optionalKey<Schema.Number>;
    readonly minVCPUPerGPU: Schema.optionalKey<Schema.Number>;
    readonly name: Schema.optionalKey<Schema.String>;
    readonly networkVolumeId: Schema.optionalKey<Schema.String>;
    readonly ports: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly supportPublicIp: Schema.optionalKey<Schema.Boolean>;
    readonly templateId: Schema.optionalKey<Schema.String>;
    readonly vcpuCount: Schema.optionalKey<Schema.Number>;
    readonly volumeInGb: Schema.optionalKey<Schema.Union<readonly [Schema.Number, Schema.Null]>>;
    readonly volumeMountPath: Schema.optionalKey<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type CreatePod201 = Pod;
export declare const CreatePod201: Schema.StructWithRest<Schema.Struct<{
    readonly adjustedCostPerHr: Schema.optionalKey<Schema.Number>;
    readonly aiApiId: Schema.optionalKey<Schema.String>;
    readonly consumerUserId: Schema.optionalKey<Schema.String>;
    readonly containerDiskInGb: Schema.optionalKey<Schema.Number>;
    readonly containerRegistryAuthId: Schema.optionalKey<Schema.String>;
    readonly costPerHr: Schema.optionalKey<Schema.Number>;
    readonly cpuFlavorId: Schema.optionalKey<Schema.String>;
    readonly desiredStatus: Schema.optionalKey<Schema.Literals<readonly ["RUNNING", "EXITED", "TERMINATED"]>>;
    readonly dockerEntrypoint: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly dockerStartCmd: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly endpointId: Schema.optionalKey<Schema.String>;
    readonly env: Schema.optionalKey<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>;
    readonly gpu: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
        readonly id: Schema.optionalKey<Schema.String>;
        readonly count: Schema.optionalKey<Schema.Number>;
        readonly displayName: Schema.optionalKey<Schema.String>;
        readonly securePrice: Schema.optionalKey<Schema.Number>;
        readonly communityPrice: Schema.optionalKey<Schema.Number>;
        readonly oneMonthPrice: Schema.optionalKey<Schema.Number>;
        readonly threeMonthPrice: Schema.optionalKey<Schema.Number>;
        readonly sixMonthPrice: Schema.optionalKey<Schema.Number>;
        readonly oneWeekPrice: Schema.optionalKey<Schema.Number>;
        readonly communitySpotPrice: Schema.optionalKey<Schema.Number>;
        readonly secureSpotPrice: Schema.optionalKey<Schema.Number>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly id: Schema.optionalKey<Schema.String>;
    readonly image: Schema.optionalKey<Schema.String>;
    readonly interruptible: Schema.optionalKey<Schema.Boolean>;
    readonly lastStartedAt: Schema.optionalKey<Schema.String>;
    readonly lastStatusChange: Schema.optionalKey<Schema.String>;
    readonly locked: Schema.optionalKey<Schema.Boolean>;
    readonly machine: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
        readonly minPodGpuCount: Schema.optionalKey<Schema.Number>;
        readonly gpuTypeId: Schema.optionalKey<Schema.String>;
        readonly gpuType: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
            readonly id: Schema.optionalKey<Schema.String>;
            readonly count: Schema.optionalKey<Schema.Number>;
            readonly displayName: Schema.optionalKey<Schema.String>;
            readonly securePrice: Schema.optionalKey<Schema.Number>;
            readonly communityPrice: Schema.optionalKey<Schema.Number>;
            readonly oneMonthPrice: Schema.optionalKey<Schema.Number>;
            readonly threeMonthPrice: Schema.optionalKey<Schema.Number>;
            readonly sixMonthPrice: Schema.optionalKey<Schema.Number>;
            readonly oneWeekPrice: Schema.optionalKey<Schema.Number>;
            readonly communitySpotPrice: Schema.optionalKey<Schema.Number>;
            readonly secureSpotPrice: Schema.optionalKey<Schema.Number>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
        readonly cpuCount: Schema.optionalKey<Schema.Number>;
        readonly cpuTypeId: Schema.optionalKey<Schema.String>;
        readonly cpuType: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
            readonly id: Schema.optionalKey<Schema.String>;
            readonly displayName: Schema.optionalKey<Schema.String>;
            readonly cores: Schema.optionalKey<Schema.Number>;
            readonly threadsPerCore: Schema.optionalKey<Schema.Number>;
            readonly groupId: Schema.optionalKey<Schema.String>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
        readonly location: Schema.optionalKey<Schema.String>;
        readonly dataCenterId: Schema.optionalKey<Schema.String>;
        readonly diskThroughputMBps: Schema.optionalKey<Schema.Number>;
        readonly maxDownloadSpeedMbps: Schema.optionalKey<Schema.Number>;
        readonly maxUploadSpeedMbps: Schema.optionalKey<Schema.Number>;
        readonly supportPublicIp: Schema.optionalKey<Schema.Boolean>;
        readonly secureCloud: Schema.optionalKey<Schema.Boolean>;
        readonly maintenanceStart: Schema.optionalKey<Schema.String>;
        readonly maintenanceEnd: Schema.optionalKey<Schema.String>;
        readonly maintenanceNote: Schema.optionalKey<Schema.String>;
        readonly note: Schema.optionalKey<Schema.String>;
        readonly costPerHr: Schema.optionalKey<Schema.Number>;
        readonly currentPricePerGpu: Schema.optionalKey<Schema.Number>;
        readonly gpuAvailable: Schema.optionalKey<Schema.Number>;
        readonly gpuDisplayName: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly machineId: Schema.optionalKey<Schema.String>;
    readonly memoryInGb: Schema.optionalKey<Schema.Number>;
    readonly name: Schema.optionalKey<Schema.String>;
    readonly networkVolume: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
        readonly id: Schema.optionalKey<Schema.String>;
        readonly name: Schema.optionalKey<Schema.String>;
        readonly size: Schema.optionalKey<Schema.Number>;
        readonly dataCenterId: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly portMappings: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    readonly ports: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly publicIp: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
    readonly savingsPlans: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly costPerHr: Schema.optionalKey<Schema.Number>;
        readonly endTime: Schema.optionalKey<Schema.String>;
        readonly gpuTypeId: Schema.optionalKey<Schema.String>;
        readonly id: Schema.optionalKey<Schema.String>;
        readonly podId: Schema.optionalKey<Schema.String>;
        readonly startTime: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
    readonly slsVersion: Schema.optionalKey<Schema.Number>;
    readonly templateId: Schema.optionalKey<Schema.String>;
    readonly vcpuCount: Schema.optionalKey<Schema.Number>;
    readonly volumeEncrypted: Schema.optionalKey<Schema.Boolean>;
    readonly volumeInGb: Schema.optionalKey<Schema.Number>;
    readonly volumeMountPath: Schema.optionalKey<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type GetPodParams = {
    readonly "includeMachine"?: boolean;
    readonly "includeNetworkVolume"?: boolean;
    readonly "includeSavingsPlans"?: boolean;
    readonly "includeTemplate"?: boolean;
    readonly "includeWorkers"?: boolean;
};
export declare const GetPodParams: Schema.Struct<{
    readonly includeMachine: Schema.optionalKey<Schema.Boolean>;
    readonly includeNetworkVolume: Schema.optionalKey<Schema.Boolean>;
    readonly includeSavingsPlans: Schema.optionalKey<Schema.Boolean>;
    readonly includeTemplate: Schema.optionalKey<Schema.Boolean>;
    readonly includeWorkers: Schema.optionalKey<Schema.Boolean>;
}>;
export type GetPod200 = Pod;
export declare const GetPod200: Schema.StructWithRest<Schema.Struct<{
    readonly adjustedCostPerHr: Schema.optionalKey<Schema.Number>;
    readonly aiApiId: Schema.optionalKey<Schema.String>;
    readonly consumerUserId: Schema.optionalKey<Schema.String>;
    readonly containerDiskInGb: Schema.optionalKey<Schema.Number>;
    readonly containerRegistryAuthId: Schema.optionalKey<Schema.String>;
    readonly costPerHr: Schema.optionalKey<Schema.Number>;
    readonly cpuFlavorId: Schema.optionalKey<Schema.String>;
    readonly desiredStatus: Schema.optionalKey<Schema.Literals<readonly ["RUNNING", "EXITED", "TERMINATED"]>>;
    readonly dockerEntrypoint: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly dockerStartCmd: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly endpointId: Schema.optionalKey<Schema.String>;
    readonly env: Schema.optionalKey<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>;
    readonly gpu: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
        readonly id: Schema.optionalKey<Schema.String>;
        readonly count: Schema.optionalKey<Schema.Number>;
        readonly displayName: Schema.optionalKey<Schema.String>;
        readonly securePrice: Schema.optionalKey<Schema.Number>;
        readonly communityPrice: Schema.optionalKey<Schema.Number>;
        readonly oneMonthPrice: Schema.optionalKey<Schema.Number>;
        readonly threeMonthPrice: Schema.optionalKey<Schema.Number>;
        readonly sixMonthPrice: Schema.optionalKey<Schema.Number>;
        readonly oneWeekPrice: Schema.optionalKey<Schema.Number>;
        readonly communitySpotPrice: Schema.optionalKey<Schema.Number>;
        readonly secureSpotPrice: Schema.optionalKey<Schema.Number>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly id: Schema.optionalKey<Schema.String>;
    readonly image: Schema.optionalKey<Schema.String>;
    readonly interruptible: Schema.optionalKey<Schema.Boolean>;
    readonly lastStartedAt: Schema.optionalKey<Schema.String>;
    readonly lastStatusChange: Schema.optionalKey<Schema.String>;
    readonly locked: Schema.optionalKey<Schema.Boolean>;
    readonly machine: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
        readonly minPodGpuCount: Schema.optionalKey<Schema.Number>;
        readonly gpuTypeId: Schema.optionalKey<Schema.String>;
        readonly gpuType: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
            readonly id: Schema.optionalKey<Schema.String>;
            readonly count: Schema.optionalKey<Schema.Number>;
            readonly displayName: Schema.optionalKey<Schema.String>;
            readonly securePrice: Schema.optionalKey<Schema.Number>;
            readonly communityPrice: Schema.optionalKey<Schema.Number>;
            readonly oneMonthPrice: Schema.optionalKey<Schema.Number>;
            readonly threeMonthPrice: Schema.optionalKey<Schema.Number>;
            readonly sixMonthPrice: Schema.optionalKey<Schema.Number>;
            readonly oneWeekPrice: Schema.optionalKey<Schema.Number>;
            readonly communitySpotPrice: Schema.optionalKey<Schema.Number>;
            readonly secureSpotPrice: Schema.optionalKey<Schema.Number>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
        readonly cpuCount: Schema.optionalKey<Schema.Number>;
        readonly cpuTypeId: Schema.optionalKey<Schema.String>;
        readonly cpuType: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
            readonly id: Schema.optionalKey<Schema.String>;
            readonly displayName: Schema.optionalKey<Schema.String>;
            readonly cores: Schema.optionalKey<Schema.Number>;
            readonly threadsPerCore: Schema.optionalKey<Schema.Number>;
            readonly groupId: Schema.optionalKey<Schema.String>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
        readonly location: Schema.optionalKey<Schema.String>;
        readonly dataCenterId: Schema.optionalKey<Schema.String>;
        readonly diskThroughputMBps: Schema.optionalKey<Schema.Number>;
        readonly maxDownloadSpeedMbps: Schema.optionalKey<Schema.Number>;
        readonly maxUploadSpeedMbps: Schema.optionalKey<Schema.Number>;
        readonly supportPublicIp: Schema.optionalKey<Schema.Boolean>;
        readonly secureCloud: Schema.optionalKey<Schema.Boolean>;
        readonly maintenanceStart: Schema.optionalKey<Schema.String>;
        readonly maintenanceEnd: Schema.optionalKey<Schema.String>;
        readonly maintenanceNote: Schema.optionalKey<Schema.String>;
        readonly note: Schema.optionalKey<Schema.String>;
        readonly costPerHr: Schema.optionalKey<Schema.Number>;
        readonly currentPricePerGpu: Schema.optionalKey<Schema.Number>;
        readonly gpuAvailable: Schema.optionalKey<Schema.Number>;
        readonly gpuDisplayName: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly machineId: Schema.optionalKey<Schema.String>;
    readonly memoryInGb: Schema.optionalKey<Schema.Number>;
    readonly name: Schema.optionalKey<Schema.String>;
    readonly networkVolume: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
        readonly id: Schema.optionalKey<Schema.String>;
        readonly name: Schema.optionalKey<Schema.String>;
        readonly size: Schema.optionalKey<Schema.Number>;
        readonly dataCenterId: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly portMappings: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    readonly ports: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly publicIp: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
    readonly savingsPlans: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly costPerHr: Schema.optionalKey<Schema.Number>;
        readonly endTime: Schema.optionalKey<Schema.String>;
        readonly gpuTypeId: Schema.optionalKey<Schema.String>;
        readonly id: Schema.optionalKey<Schema.String>;
        readonly podId: Schema.optionalKey<Schema.String>;
        readonly startTime: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
    readonly slsVersion: Schema.optionalKey<Schema.Number>;
    readonly templateId: Schema.optionalKey<Schema.String>;
    readonly vcpuCount: Schema.optionalKey<Schema.Number>;
    readonly volumeEncrypted: Schema.optionalKey<Schema.Boolean>;
    readonly volumeInGb: Schema.optionalKey<Schema.Number>;
    readonly volumeMountPath: Schema.optionalKey<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type UpdatePodRequestJson = PodUpdateInput;
export declare const UpdatePodRequestJson: Schema.StructWithRest<Schema.Struct<{
    readonly containerDiskInGb: Schema.optionalKey<Schema.Union<readonly [Schema.Number, Schema.Null]>>;
    readonly containerRegistryAuthId: Schema.optionalKey<Schema.String>;
    readonly dockerEntrypoint: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly dockerStartCmd: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly env: Schema.optionalKey<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>;
    readonly globalNetworking: Schema.optionalKey<Schema.Boolean>;
    readonly imageName: Schema.optionalKey<Schema.String>;
    readonly locked: Schema.optionalKey<Schema.Boolean>;
    readonly name: Schema.optionalKey<Schema.String>;
    readonly ports: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly volumeInGb: Schema.optionalKey<Schema.Union<readonly [Schema.Number, Schema.Null]>>;
    readonly volumeMountPath: Schema.optionalKey<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type UpdatePod200 = Pod;
export declare const UpdatePod200: Schema.StructWithRest<Schema.Struct<{
    readonly adjustedCostPerHr: Schema.optionalKey<Schema.Number>;
    readonly aiApiId: Schema.optionalKey<Schema.String>;
    readonly consumerUserId: Schema.optionalKey<Schema.String>;
    readonly containerDiskInGb: Schema.optionalKey<Schema.Number>;
    readonly containerRegistryAuthId: Schema.optionalKey<Schema.String>;
    readonly costPerHr: Schema.optionalKey<Schema.Number>;
    readonly cpuFlavorId: Schema.optionalKey<Schema.String>;
    readonly desiredStatus: Schema.optionalKey<Schema.Literals<readonly ["RUNNING", "EXITED", "TERMINATED"]>>;
    readonly dockerEntrypoint: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly dockerStartCmd: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly endpointId: Schema.optionalKey<Schema.String>;
    readonly env: Schema.optionalKey<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>;
    readonly gpu: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
        readonly id: Schema.optionalKey<Schema.String>;
        readonly count: Schema.optionalKey<Schema.Number>;
        readonly displayName: Schema.optionalKey<Schema.String>;
        readonly securePrice: Schema.optionalKey<Schema.Number>;
        readonly communityPrice: Schema.optionalKey<Schema.Number>;
        readonly oneMonthPrice: Schema.optionalKey<Schema.Number>;
        readonly threeMonthPrice: Schema.optionalKey<Schema.Number>;
        readonly sixMonthPrice: Schema.optionalKey<Schema.Number>;
        readonly oneWeekPrice: Schema.optionalKey<Schema.Number>;
        readonly communitySpotPrice: Schema.optionalKey<Schema.Number>;
        readonly secureSpotPrice: Schema.optionalKey<Schema.Number>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly id: Schema.optionalKey<Schema.String>;
    readonly image: Schema.optionalKey<Schema.String>;
    readonly interruptible: Schema.optionalKey<Schema.Boolean>;
    readonly lastStartedAt: Schema.optionalKey<Schema.String>;
    readonly lastStatusChange: Schema.optionalKey<Schema.String>;
    readonly locked: Schema.optionalKey<Schema.Boolean>;
    readonly machine: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
        readonly minPodGpuCount: Schema.optionalKey<Schema.Number>;
        readonly gpuTypeId: Schema.optionalKey<Schema.String>;
        readonly gpuType: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
            readonly id: Schema.optionalKey<Schema.String>;
            readonly count: Schema.optionalKey<Schema.Number>;
            readonly displayName: Schema.optionalKey<Schema.String>;
            readonly securePrice: Schema.optionalKey<Schema.Number>;
            readonly communityPrice: Schema.optionalKey<Schema.Number>;
            readonly oneMonthPrice: Schema.optionalKey<Schema.Number>;
            readonly threeMonthPrice: Schema.optionalKey<Schema.Number>;
            readonly sixMonthPrice: Schema.optionalKey<Schema.Number>;
            readonly oneWeekPrice: Schema.optionalKey<Schema.Number>;
            readonly communitySpotPrice: Schema.optionalKey<Schema.Number>;
            readonly secureSpotPrice: Schema.optionalKey<Schema.Number>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
        readonly cpuCount: Schema.optionalKey<Schema.Number>;
        readonly cpuTypeId: Schema.optionalKey<Schema.String>;
        readonly cpuType: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
            readonly id: Schema.optionalKey<Schema.String>;
            readonly displayName: Schema.optionalKey<Schema.String>;
            readonly cores: Schema.optionalKey<Schema.Number>;
            readonly threadsPerCore: Schema.optionalKey<Schema.Number>;
            readonly groupId: Schema.optionalKey<Schema.String>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
        readonly location: Schema.optionalKey<Schema.String>;
        readonly dataCenterId: Schema.optionalKey<Schema.String>;
        readonly diskThroughputMBps: Schema.optionalKey<Schema.Number>;
        readonly maxDownloadSpeedMbps: Schema.optionalKey<Schema.Number>;
        readonly maxUploadSpeedMbps: Schema.optionalKey<Schema.Number>;
        readonly supportPublicIp: Schema.optionalKey<Schema.Boolean>;
        readonly secureCloud: Schema.optionalKey<Schema.Boolean>;
        readonly maintenanceStart: Schema.optionalKey<Schema.String>;
        readonly maintenanceEnd: Schema.optionalKey<Schema.String>;
        readonly maintenanceNote: Schema.optionalKey<Schema.String>;
        readonly note: Schema.optionalKey<Schema.String>;
        readonly costPerHr: Schema.optionalKey<Schema.Number>;
        readonly currentPricePerGpu: Schema.optionalKey<Schema.Number>;
        readonly gpuAvailable: Schema.optionalKey<Schema.Number>;
        readonly gpuDisplayName: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly machineId: Schema.optionalKey<Schema.String>;
    readonly memoryInGb: Schema.optionalKey<Schema.Number>;
    readonly name: Schema.optionalKey<Schema.String>;
    readonly networkVolume: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
        readonly id: Schema.optionalKey<Schema.String>;
        readonly name: Schema.optionalKey<Schema.String>;
        readonly size: Schema.optionalKey<Schema.Number>;
        readonly dataCenterId: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly portMappings: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    readonly ports: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly publicIp: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
    readonly savingsPlans: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly costPerHr: Schema.optionalKey<Schema.Number>;
        readonly endTime: Schema.optionalKey<Schema.String>;
        readonly gpuTypeId: Schema.optionalKey<Schema.String>;
        readonly id: Schema.optionalKey<Schema.String>;
        readonly podId: Schema.optionalKey<Schema.String>;
        readonly startTime: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
    readonly slsVersion: Schema.optionalKey<Schema.Number>;
    readonly templateId: Schema.optionalKey<Schema.String>;
    readonly vcpuCount: Schema.optionalKey<Schema.Number>;
    readonly volumeEncrypted: Schema.optionalKey<Schema.Boolean>;
    readonly volumeInGb: Schema.optionalKey<Schema.Number>;
    readonly volumeMountPath: Schema.optionalKey<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type UpdatePodPostRequestJson = PodUpdateInput;
export declare const UpdatePodPostRequestJson: Schema.StructWithRest<Schema.Struct<{
    readonly containerDiskInGb: Schema.optionalKey<Schema.Union<readonly [Schema.Number, Schema.Null]>>;
    readonly containerRegistryAuthId: Schema.optionalKey<Schema.String>;
    readonly dockerEntrypoint: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly dockerStartCmd: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly env: Schema.optionalKey<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>;
    readonly globalNetworking: Schema.optionalKey<Schema.Boolean>;
    readonly imageName: Schema.optionalKey<Schema.String>;
    readonly locked: Schema.optionalKey<Schema.Boolean>;
    readonly name: Schema.optionalKey<Schema.String>;
    readonly ports: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly volumeInGb: Schema.optionalKey<Schema.Union<readonly [Schema.Number, Schema.Null]>>;
    readonly volumeMountPath: Schema.optionalKey<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type UpdatePodPost200 = Pod;
export declare const UpdatePodPost200: Schema.StructWithRest<Schema.Struct<{
    readonly adjustedCostPerHr: Schema.optionalKey<Schema.Number>;
    readonly aiApiId: Schema.optionalKey<Schema.String>;
    readonly consumerUserId: Schema.optionalKey<Schema.String>;
    readonly containerDiskInGb: Schema.optionalKey<Schema.Number>;
    readonly containerRegistryAuthId: Schema.optionalKey<Schema.String>;
    readonly costPerHr: Schema.optionalKey<Schema.Number>;
    readonly cpuFlavorId: Schema.optionalKey<Schema.String>;
    readonly desiredStatus: Schema.optionalKey<Schema.Literals<readonly ["RUNNING", "EXITED", "TERMINATED"]>>;
    readonly dockerEntrypoint: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly dockerStartCmd: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly endpointId: Schema.optionalKey<Schema.String>;
    readonly env: Schema.optionalKey<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>;
    readonly gpu: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
        readonly id: Schema.optionalKey<Schema.String>;
        readonly count: Schema.optionalKey<Schema.Number>;
        readonly displayName: Schema.optionalKey<Schema.String>;
        readonly securePrice: Schema.optionalKey<Schema.Number>;
        readonly communityPrice: Schema.optionalKey<Schema.Number>;
        readonly oneMonthPrice: Schema.optionalKey<Schema.Number>;
        readonly threeMonthPrice: Schema.optionalKey<Schema.Number>;
        readonly sixMonthPrice: Schema.optionalKey<Schema.Number>;
        readonly oneWeekPrice: Schema.optionalKey<Schema.Number>;
        readonly communitySpotPrice: Schema.optionalKey<Schema.Number>;
        readonly secureSpotPrice: Schema.optionalKey<Schema.Number>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly id: Schema.optionalKey<Schema.String>;
    readonly image: Schema.optionalKey<Schema.String>;
    readonly interruptible: Schema.optionalKey<Schema.Boolean>;
    readonly lastStartedAt: Schema.optionalKey<Schema.String>;
    readonly lastStatusChange: Schema.optionalKey<Schema.String>;
    readonly locked: Schema.optionalKey<Schema.Boolean>;
    readonly machine: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
        readonly minPodGpuCount: Schema.optionalKey<Schema.Number>;
        readonly gpuTypeId: Schema.optionalKey<Schema.String>;
        readonly gpuType: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
            readonly id: Schema.optionalKey<Schema.String>;
            readonly count: Schema.optionalKey<Schema.Number>;
            readonly displayName: Schema.optionalKey<Schema.String>;
            readonly securePrice: Schema.optionalKey<Schema.Number>;
            readonly communityPrice: Schema.optionalKey<Schema.Number>;
            readonly oneMonthPrice: Schema.optionalKey<Schema.Number>;
            readonly threeMonthPrice: Schema.optionalKey<Schema.Number>;
            readonly sixMonthPrice: Schema.optionalKey<Schema.Number>;
            readonly oneWeekPrice: Schema.optionalKey<Schema.Number>;
            readonly communitySpotPrice: Schema.optionalKey<Schema.Number>;
            readonly secureSpotPrice: Schema.optionalKey<Schema.Number>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
        readonly cpuCount: Schema.optionalKey<Schema.Number>;
        readonly cpuTypeId: Schema.optionalKey<Schema.String>;
        readonly cpuType: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
            readonly id: Schema.optionalKey<Schema.String>;
            readonly displayName: Schema.optionalKey<Schema.String>;
            readonly cores: Schema.optionalKey<Schema.Number>;
            readonly threadsPerCore: Schema.optionalKey<Schema.Number>;
            readonly groupId: Schema.optionalKey<Schema.String>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
        readonly location: Schema.optionalKey<Schema.String>;
        readonly dataCenterId: Schema.optionalKey<Schema.String>;
        readonly diskThroughputMBps: Schema.optionalKey<Schema.Number>;
        readonly maxDownloadSpeedMbps: Schema.optionalKey<Schema.Number>;
        readonly maxUploadSpeedMbps: Schema.optionalKey<Schema.Number>;
        readonly supportPublicIp: Schema.optionalKey<Schema.Boolean>;
        readonly secureCloud: Schema.optionalKey<Schema.Boolean>;
        readonly maintenanceStart: Schema.optionalKey<Schema.String>;
        readonly maintenanceEnd: Schema.optionalKey<Schema.String>;
        readonly maintenanceNote: Schema.optionalKey<Schema.String>;
        readonly note: Schema.optionalKey<Schema.String>;
        readonly costPerHr: Schema.optionalKey<Schema.Number>;
        readonly currentPricePerGpu: Schema.optionalKey<Schema.Number>;
        readonly gpuAvailable: Schema.optionalKey<Schema.Number>;
        readonly gpuDisplayName: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly machineId: Schema.optionalKey<Schema.String>;
    readonly memoryInGb: Schema.optionalKey<Schema.Number>;
    readonly name: Schema.optionalKey<Schema.String>;
    readonly networkVolume: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
        readonly id: Schema.optionalKey<Schema.String>;
        readonly name: Schema.optionalKey<Schema.String>;
        readonly size: Schema.optionalKey<Schema.Number>;
        readonly dataCenterId: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly portMappings: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    readonly ports: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly publicIp: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
    readonly savingsPlans: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly costPerHr: Schema.optionalKey<Schema.Number>;
        readonly endTime: Schema.optionalKey<Schema.String>;
        readonly gpuTypeId: Schema.optionalKey<Schema.String>;
        readonly id: Schema.optionalKey<Schema.String>;
        readonly podId: Schema.optionalKey<Schema.String>;
        readonly startTime: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
    readonly slsVersion: Schema.optionalKey<Schema.Number>;
    readonly templateId: Schema.optionalKey<Schema.String>;
    readonly vcpuCount: Schema.optionalKey<Schema.Number>;
    readonly volumeEncrypted: Schema.optionalKey<Schema.Boolean>;
    readonly volumeInGb: Schema.optionalKey<Schema.Number>;
    readonly volumeMountPath: Schema.optionalKey<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ListEndpointsParams = {
    readonly "includeTemplate"?: boolean;
    readonly "includeWorkers"?: boolean;
};
export declare const ListEndpointsParams: Schema.Struct<{
    readonly includeTemplate: Schema.optionalKey<Schema.Boolean>;
    readonly includeWorkers: Schema.optionalKey<Schema.Boolean>;
}>;
export type ListEndpoints200 = Endpoints;
export declare const ListEndpoints200: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly allowedCudaVersions: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["13.0", "12.9", "12.8", "12.7", "12.6", "12.5", "12.4", "12.3", "12.2", "12.1", "12.0", "11.8"]>>>;
    readonly computeType: Schema.optionalKey<Schema.Literals<readonly ["CPU", "GPU"]>>;
    readonly createdAt: Schema.optionalKey<Schema.String>;
    readonly dataCenterIds: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["EU-RO-1", "CA-MTL-1", "EU-SE-1", "US-IL-1", "EUR-IS-1", "EU-CZ-1", "US-TX-3", "EUR-IS-2", "US-KS-2", "US-GA-2", "US-WA-1", "US-TX-1", "CA-MTL-3", "EU-NL-1", "US-TX-4", "US-CA-2", "US-NC-1", "OC-AU-1", "US-DE-1", "EUR-IS-3", "CA-MTL-2", "AP-JP-1", "EUR-NO-1", "EU-FR-1", "US-KS-3", "US-GA-1", "AP-IN-1", "US-MD-1"]>>>;
    readonly env: Schema.optionalKey<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>;
    readonly executionTimeoutMs: Schema.optionalKey<Schema.Number>;
    readonly gpuCount: Schema.optionalKey<Schema.Number>;
    readonly gpuTypeIds: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["AMD Instinct MI300X OAM", "NVIDIA A100 80GB PCIe", "NVIDIA A100-SXM4-40GB", "NVIDIA A100-SXM4-80GB", "NVIDIA A40", "NVIDIA B200", "NVIDIA B300 SXM6 AC", "NVIDIA B300 SXM6 AC MIG 1g.34gb", "NVIDIA GeForce RTX 3070", "NVIDIA GeForce RTX 3080", "NVIDIA GeForce RTX 3080 Ti", "NVIDIA GeForce RTX 3090", "NVIDIA GeForce RTX 3090 Ti", "NVIDIA GeForce RTX 4070 Ti", "NVIDIA GeForce RTX 4080", "NVIDIA GeForce RTX 4080 SUPER", "NVIDIA GeForce RTX 4090", "NVIDIA GeForce RTX 5080", "NVIDIA GeForce RTX 5090", "NVIDIA H100 80GB HBM3", "NVIDIA H100 NVL", "NVIDIA H100 PCIe", "NVIDIA H200", "NVIDIA H200 NVL", "NVIDIA L4", "NVIDIA L40", "NVIDIA L40S", "NVIDIA RTX 2000 Ada Generation", "NVIDIA RTX 4000 Ada Generation", "NVIDIA RTX 4000 SFF Ada Generation", "NVIDIA RTX 5000 Ada Generation", "NVIDIA RTX 6000 Ada Generation", "NVIDIA RTX A2000", "NVIDIA RTX A4000", "NVIDIA RTX A4500", "NVIDIA RTX A5000", "NVIDIA RTX A6000", "NVIDIA RTX PRO 4000 Blackwell", "NVIDIA RTX PRO 4500 Blackwell", "NVIDIA RTX PRO 5000 Blackwell", "NVIDIA RTX PRO 6000 Blackwell Max-Q Workstation Edition", "NVIDIA RTX PRO 6000 Blackwell Server Edition", "NVIDIA RTX PRO 6000 Blackwell Workstation Edition", "Tesla V100-PCIE-16GB", "Tesla V100-SXM2-16GB"]>>>;
    readonly id: Schema.optionalKey<Schema.String>;
    readonly idleTimeout: Schema.optionalKey<Schema.Number>;
    readonly instanceIds: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly minCudaVersion: Schema.optionalKey<Schema.Literals<readonly ["13.0", "12.9", "12.8", "12.7", "12.6", "12.5", "12.4", "12.3", "12.2", "12.1", "12.0", "11.8"]>>;
    readonly name: Schema.optionalKey<Schema.String>;
    readonly networkVolumeId: Schema.optionalKey<Schema.String>;
    readonly networkVolumeIds: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly scalerType: Schema.optionalKey<Schema.Literals<readonly ["QUEUE_DELAY", "REQUEST_COUNT"]>>;
    readonly scalerValue: Schema.optionalKey<Schema.Number>;
    readonly template: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
        readonly category: Schema.optionalKey<Schema.String>;
        readonly containerDiskInGb: Schema.optionalKey<Schema.Number>;
        readonly containerRegistryAuthId: Schema.optionalKey<Schema.String>;
        readonly dockerEntrypoint: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly dockerStartCmd: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly earned: Schema.optionalKey<Schema.Number>;
        readonly env: Schema.optionalKey<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>;
        readonly id: Schema.optionalKey<Schema.String>;
        readonly imageName: Schema.optionalKey<Schema.String>;
        readonly isPublic: Schema.optionalKey<Schema.Boolean>;
        readonly isRunpod: Schema.optionalKey<Schema.Boolean>;
        readonly isServerless: Schema.optionalKey<Schema.Boolean>;
        readonly name: Schema.optionalKey<Schema.String>;
        readonly ports: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly readme: Schema.optionalKey<Schema.String>;
        readonly runtimeInMin: Schema.optionalKey<Schema.Number>;
        readonly volumeInGb: Schema.optionalKey<Schema.Number>;
        readonly volumeMountPath: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly templateId: Schema.optionalKey<Schema.String>;
    readonly userId: Schema.optionalKey<Schema.String>;
    readonly version: Schema.optionalKey<Schema.Number>;
    readonly workers: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly adjustedCostPerHr: Schema.optionalKey<Schema.Number>;
        readonly aiApiId: Schema.optionalKey<Schema.String>;
        readonly consumerUserId: Schema.optionalKey<Schema.String>;
        readonly containerDiskInGb: Schema.optionalKey<Schema.Number>;
        readonly containerRegistryAuthId: Schema.optionalKey<Schema.String>;
        readonly costPerHr: Schema.optionalKey<Schema.Number>;
        readonly cpuFlavorId: Schema.optionalKey<Schema.String>;
        readonly desiredStatus: Schema.optionalKey<Schema.Literals<readonly ["RUNNING", "EXITED", "TERMINATED"]>>;
        readonly dockerEntrypoint: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly dockerStartCmd: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly endpointId: Schema.optionalKey<Schema.String>;
        readonly env: Schema.optionalKey<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>;
        readonly gpu: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
            readonly id: Schema.optionalKey<Schema.String>;
            readonly count: Schema.optionalKey<Schema.Number>;
            readonly displayName: Schema.optionalKey<Schema.String>;
            readonly securePrice: Schema.optionalKey<Schema.Number>;
            readonly communityPrice: Schema.optionalKey<Schema.Number>;
            readonly oneMonthPrice: Schema.optionalKey<Schema.Number>;
            readonly threeMonthPrice: Schema.optionalKey<Schema.Number>;
            readonly sixMonthPrice: Schema.optionalKey<Schema.Number>;
            readonly oneWeekPrice: Schema.optionalKey<Schema.Number>;
            readonly communitySpotPrice: Schema.optionalKey<Schema.Number>;
            readonly secureSpotPrice: Schema.optionalKey<Schema.Number>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
        readonly id: Schema.optionalKey<Schema.String>;
        readonly image: Schema.optionalKey<Schema.String>;
        readonly interruptible: Schema.optionalKey<Schema.Boolean>;
        readonly lastStartedAt: Schema.optionalKey<Schema.String>;
        readonly lastStatusChange: Schema.optionalKey<Schema.String>;
        readonly locked: Schema.optionalKey<Schema.Boolean>;
        readonly machine: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
            readonly minPodGpuCount: Schema.optionalKey<Schema.Number>;
            readonly gpuTypeId: Schema.optionalKey<Schema.String>;
            readonly gpuType: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
                readonly id: Schema.optionalKey<Schema.String>;
                readonly count: Schema.optionalKey<Schema.Number>;
                readonly displayName: Schema.optionalKey<Schema.String>;
                readonly securePrice: Schema.optionalKey<Schema.Number>;
                readonly communityPrice: Schema.optionalKey<Schema.Number>;
                readonly oneMonthPrice: Schema.optionalKey<Schema.Number>;
                readonly threeMonthPrice: Schema.optionalKey<Schema.Number>;
                readonly sixMonthPrice: Schema.optionalKey<Schema.Number>;
                readonly oneWeekPrice: Schema.optionalKey<Schema.Number>;
                readonly communitySpotPrice: Schema.optionalKey<Schema.Number>;
                readonly secureSpotPrice: Schema.optionalKey<Schema.Number>;
            }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
            readonly cpuCount: Schema.optionalKey<Schema.Number>;
            readonly cpuTypeId: Schema.optionalKey<Schema.String>;
            readonly cpuType: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
                readonly id: Schema.optionalKey<Schema.String>;
                readonly displayName: Schema.optionalKey<Schema.String>;
                readonly cores: Schema.optionalKey<Schema.Number>;
                readonly threadsPerCore: Schema.optionalKey<Schema.Number>;
                readonly groupId: Schema.optionalKey<Schema.String>;
            }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
            readonly location: Schema.optionalKey<Schema.String>;
            readonly dataCenterId: Schema.optionalKey<Schema.String>;
            readonly diskThroughputMBps: Schema.optionalKey<Schema.Number>;
            readonly maxDownloadSpeedMbps: Schema.optionalKey<Schema.Number>;
            readonly maxUploadSpeedMbps: Schema.optionalKey<Schema.Number>;
            readonly supportPublicIp: Schema.optionalKey<Schema.Boolean>;
            readonly secureCloud: Schema.optionalKey<Schema.Boolean>;
            readonly maintenanceStart: Schema.optionalKey<Schema.String>;
            readonly maintenanceEnd: Schema.optionalKey<Schema.String>;
            readonly maintenanceNote: Schema.optionalKey<Schema.String>;
            readonly note: Schema.optionalKey<Schema.String>;
            readonly costPerHr: Schema.optionalKey<Schema.Number>;
            readonly currentPricePerGpu: Schema.optionalKey<Schema.Number>;
            readonly gpuAvailable: Schema.optionalKey<Schema.Number>;
            readonly gpuDisplayName: Schema.optionalKey<Schema.String>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
        readonly machineId: Schema.optionalKey<Schema.String>;
        readonly memoryInGb: Schema.optionalKey<Schema.Number>;
        readonly name: Schema.optionalKey<Schema.String>;
        readonly networkVolume: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
            readonly id: Schema.optionalKey<Schema.String>;
            readonly name: Schema.optionalKey<Schema.String>;
            readonly size: Schema.optionalKey<Schema.Number>;
            readonly dataCenterId: Schema.optionalKey<Schema.String>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
        readonly portMappings: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        readonly ports: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly publicIp: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly savingsPlans: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
            readonly costPerHr: Schema.optionalKey<Schema.Number>;
            readonly endTime: Schema.optionalKey<Schema.String>;
            readonly gpuTypeId: Schema.optionalKey<Schema.String>;
            readonly id: Schema.optionalKey<Schema.String>;
            readonly podId: Schema.optionalKey<Schema.String>;
            readonly startTime: Schema.optionalKey<Schema.String>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
        readonly slsVersion: Schema.optionalKey<Schema.Number>;
        readonly templateId: Schema.optionalKey<Schema.String>;
        readonly vcpuCount: Schema.optionalKey<Schema.Number>;
        readonly volumeEncrypted: Schema.optionalKey<Schema.Boolean>;
        readonly volumeInGb: Schema.optionalKey<Schema.Number>;
        readonly volumeMountPath: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
    readonly workersMax: Schema.optionalKey<Schema.Number>;
    readonly workersMin: Schema.optionalKey<Schema.Number>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export type CreateEndpointRequestJson = EndpointCreateInput;
export declare const CreateEndpointRequestJson: Schema.StructWithRest<Schema.Struct<{
    readonly allowedCudaVersions: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["13.0", "12.9", "12.8", "12.7", "12.6", "12.5", "12.4", "12.3", "12.2", "12.1", "12.0", "11.8"]>>>;
    readonly computeType: Schema.optionalKey<Schema.Literals<readonly ["GPU", "CPU"]>>;
    readonly cpuFlavorIds: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["cpu3c", "cpu3g", "cpu5c", "cpu5g"]>>>;
    readonly dataCenterIds: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["EU-RO-1", "CA-MTL-1", "EU-SE-1", "US-IL-1", "EUR-IS-1", "EU-CZ-1", "US-TX-3", "EUR-IS-2", "US-KS-2", "US-GA-2", "US-WA-1", "US-TX-1", "CA-MTL-3", "EU-NL-1", "US-TX-4", "US-CA-2", "US-NC-1", "OC-AU-1", "US-DE-1", "EUR-IS-3", "CA-MTL-2", "AP-JP-1", "EUR-NO-1", "EU-FR-1", "US-KS-3", "US-GA-1", "AP-IN-1", "US-MD-1"]>>>;
    readonly executionTimeoutMs: Schema.optionalKey<Schema.Number>;
    readonly flashboot: Schema.optionalKey<Schema.Boolean>;
    readonly gpuCount: Schema.optionalKey<Schema.Number>;
    readonly gpuTypeIds: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["AMD Instinct MI300X OAM", "NVIDIA A100 80GB PCIe", "NVIDIA A100-SXM4-40GB", "NVIDIA A100-SXM4-80GB", "NVIDIA A40", "NVIDIA B200", "NVIDIA B300 SXM6 AC", "NVIDIA B300 SXM6 AC MIG 1g.34gb", "NVIDIA GeForce RTX 3070", "NVIDIA GeForce RTX 3080", "NVIDIA GeForce RTX 3080 Ti", "NVIDIA GeForce RTX 3090", "NVIDIA GeForce RTX 3090 Ti", "NVIDIA GeForce RTX 4070 Ti", "NVIDIA GeForce RTX 4080", "NVIDIA GeForce RTX 4080 SUPER", "NVIDIA GeForce RTX 4090", "NVIDIA GeForce RTX 5080", "NVIDIA GeForce RTX 5090", "NVIDIA H100 80GB HBM3", "NVIDIA H100 NVL", "NVIDIA H100 PCIe", "NVIDIA H200", "NVIDIA H200 NVL", "NVIDIA L4", "NVIDIA L40", "NVIDIA L40S", "NVIDIA RTX 2000 Ada Generation", "NVIDIA RTX 4000 Ada Generation", "NVIDIA RTX 4000 SFF Ada Generation", "NVIDIA RTX 5000 Ada Generation", "NVIDIA RTX 6000 Ada Generation", "NVIDIA RTX A2000", "NVIDIA RTX A4000", "NVIDIA RTX A4500", "NVIDIA RTX A5000", "NVIDIA RTX A6000", "NVIDIA RTX PRO 4000 Blackwell", "NVIDIA RTX PRO 4500 Blackwell", "NVIDIA RTX PRO 5000 Blackwell", "NVIDIA RTX PRO 6000 Blackwell Max-Q Workstation Edition", "NVIDIA RTX PRO 6000 Blackwell Server Edition", "NVIDIA RTX PRO 6000 Blackwell Workstation Edition", "Tesla V100-PCIE-16GB", "Tesla V100-SXM2-16GB"]>>>;
    readonly idleTimeout: Schema.optionalKey<Schema.Number>;
    readonly minCudaVersion: Schema.optionalKey<Schema.Literals<readonly ["13.0", "12.9", "12.8", "12.7", "12.6", "12.5", "12.4", "12.3", "12.2", "12.1", "12.0", "11.8"]>>;
    readonly name: Schema.optionalKey<Schema.String>;
    readonly networkVolumeId: Schema.optionalKey<Schema.String>;
    readonly networkVolumeIds: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly scalerType: Schema.optionalKey<Schema.Literals<readonly ["QUEUE_DELAY", "REQUEST_COUNT"]>>;
    readonly scalerValue: Schema.optionalKey<Schema.Number>;
    readonly templateId: Schema.String;
    readonly vcpuCount: Schema.optionalKey<Schema.Number>;
    readonly workersMax: Schema.optionalKey<Schema.Number>;
    readonly workersMin: Schema.optionalKey<Schema.Number>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type CreateEndpoint200 = Endpoint;
export declare const CreateEndpoint200: Schema.StructWithRest<Schema.Struct<{
    readonly allowedCudaVersions: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["13.0", "12.9", "12.8", "12.7", "12.6", "12.5", "12.4", "12.3", "12.2", "12.1", "12.0", "11.8"]>>>;
    readonly computeType: Schema.optionalKey<Schema.Literals<readonly ["CPU", "GPU"]>>;
    readonly createdAt: Schema.optionalKey<Schema.String>;
    readonly dataCenterIds: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["EU-RO-1", "CA-MTL-1", "EU-SE-1", "US-IL-1", "EUR-IS-1", "EU-CZ-1", "US-TX-3", "EUR-IS-2", "US-KS-2", "US-GA-2", "US-WA-1", "US-TX-1", "CA-MTL-3", "EU-NL-1", "US-TX-4", "US-CA-2", "US-NC-1", "OC-AU-1", "US-DE-1", "EUR-IS-3", "CA-MTL-2", "AP-JP-1", "EUR-NO-1", "EU-FR-1", "US-KS-3", "US-GA-1", "AP-IN-1", "US-MD-1"]>>>;
    readonly env: Schema.optionalKey<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>;
    readonly executionTimeoutMs: Schema.optionalKey<Schema.Number>;
    readonly gpuCount: Schema.optionalKey<Schema.Number>;
    readonly gpuTypeIds: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["AMD Instinct MI300X OAM", "NVIDIA A100 80GB PCIe", "NVIDIA A100-SXM4-40GB", "NVIDIA A100-SXM4-80GB", "NVIDIA A40", "NVIDIA B200", "NVIDIA B300 SXM6 AC", "NVIDIA B300 SXM6 AC MIG 1g.34gb", "NVIDIA GeForce RTX 3070", "NVIDIA GeForce RTX 3080", "NVIDIA GeForce RTX 3080 Ti", "NVIDIA GeForce RTX 3090", "NVIDIA GeForce RTX 3090 Ti", "NVIDIA GeForce RTX 4070 Ti", "NVIDIA GeForce RTX 4080", "NVIDIA GeForce RTX 4080 SUPER", "NVIDIA GeForce RTX 4090", "NVIDIA GeForce RTX 5080", "NVIDIA GeForce RTX 5090", "NVIDIA H100 80GB HBM3", "NVIDIA H100 NVL", "NVIDIA H100 PCIe", "NVIDIA H200", "NVIDIA H200 NVL", "NVIDIA L4", "NVIDIA L40", "NVIDIA L40S", "NVIDIA RTX 2000 Ada Generation", "NVIDIA RTX 4000 Ada Generation", "NVIDIA RTX 4000 SFF Ada Generation", "NVIDIA RTX 5000 Ada Generation", "NVIDIA RTX 6000 Ada Generation", "NVIDIA RTX A2000", "NVIDIA RTX A4000", "NVIDIA RTX A4500", "NVIDIA RTX A5000", "NVIDIA RTX A6000", "NVIDIA RTX PRO 4000 Blackwell", "NVIDIA RTX PRO 4500 Blackwell", "NVIDIA RTX PRO 5000 Blackwell", "NVIDIA RTX PRO 6000 Blackwell Max-Q Workstation Edition", "NVIDIA RTX PRO 6000 Blackwell Server Edition", "NVIDIA RTX PRO 6000 Blackwell Workstation Edition", "Tesla V100-PCIE-16GB", "Tesla V100-SXM2-16GB"]>>>;
    readonly id: Schema.optionalKey<Schema.String>;
    readonly idleTimeout: Schema.optionalKey<Schema.Number>;
    readonly instanceIds: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly minCudaVersion: Schema.optionalKey<Schema.Literals<readonly ["13.0", "12.9", "12.8", "12.7", "12.6", "12.5", "12.4", "12.3", "12.2", "12.1", "12.0", "11.8"]>>;
    readonly name: Schema.optionalKey<Schema.String>;
    readonly networkVolumeId: Schema.optionalKey<Schema.String>;
    readonly networkVolumeIds: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly scalerType: Schema.optionalKey<Schema.Literals<readonly ["QUEUE_DELAY", "REQUEST_COUNT"]>>;
    readonly scalerValue: Schema.optionalKey<Schema.Number>;
    readonly template: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
        readonly category: Schema.optionalKey<Schema.String>;
        readonly containerDiskInGb: Schema.optionalKey<Schema.Number>;
        readonly containerRegistryAuthId: Schema.optionalKey<Schema.String>;
        readonly dockerEntrypoint: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly dockerStartCmd: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly earned: Schema.optionalKey<Schema.Number>;
        readonly env: Schema.optionalKey<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>;
        readonly id: Schema.optionalKey<Schema.String>;
        readonly imageName: Schema.optionalKey<Schema.String>;
        readonly isPublic: Schema.optionalKey<Schema.Boolean>;
        readonly isRunpod: Schema.optionalKey<Schema.Boolean>;
        readonly isServerless: Schema.optionalKey<Schema.Boolean>;
        readonly name: Schema.optionalKey<Schema.String>;
        readonly ports: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly readme: Schema.optionalKey<Schema.String>;
        readonly runtimeInMin: Schema.optionalKey<Schema.Number>;
        readonly volumeInGb: Schema.optionalKey<Schema.Number>;
        readonly volumeMountPath: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly templateId: Schema.optionalKey<Schema.String>;
    readonly userId: Schema.optionalKey<Schema.String>;
    readonly version: Schema.optionalKey<Schema.Number>;
    readonly workers: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly adjustedCostPerHr: Schema.optionalKey<Schema.Number>;
        readonly aiApiId: Schema.optionalKey<Schema.String>;
        readonly consumerUserId: Schema.optionalKey<Schema.String>;
        readonly containerDiskInGb: Schema.optionalKey<Schema.Number>;
        readonly containerRegistryAuthId: Schema.optionalKey<Schema.String>;
        readonly costPerHr: Schema.optionalKey<Schema.Number>;
        readonly cpuFlavorId: Schema.optionalKey<Schema.String>;
        readonly desiredStatus: Schema.optionalKey<Schema.Literals<readonly ["RUNNING", "EXITED", "TERMINATED"]>>;
        readonly dockerEntrypoint: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly dockerStartCmd: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly endpointId: Schema.optionalKey<Schema.String>;
        readonly env: Schema.optionalKey<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>;
        readonly gpu: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
            readonly id: Schema.optionalKey<Schema.String>;
            readonly count: Schema.optionalKey<Schema.Number>;
            readonly displayName: Schema.optionalKey<Schema.String>;
            readonly securePrice: Schema.optionalKey<Schema.Number>;
            readonly communityPrice: Schema.optionalKey<Schema.Number>;
            readonly oneMonthPrice: Schema.optionalKey<Schema.Number>;
            readonly threeMonthPrice: Schema.optionalKey<Schema.Number>;
            readonly sixMonthPrice: Schema.optionalKey<Schema.Number>;
            readonly oneWeekPrice: Schema.optionalKey<Schema.Number>;
            readonly communitySpotPrice: Schema.optionalKey<Schema.Number>;
            readonly secureSpotPrice: Schema.optionalKey<Schema.Number>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
        readonly id: Schema.optionalKey<Schema.String>;
        readonly image: Schema.optionalKey<Schema.String>;
        readonly interruptible: Schema.optionalKey<Schema.Boolean>;
        readonly lastStartedAt: Schema.optionalKey<Schema.String>;
        readonly lastStatusChange: Schema.optionalKey<Schema.String>;
        readonly locked: Schema.optionalKey<Schema.Boolean>;
        readonly machine: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
            readonly minPodGpuCount: Schema.optionalKey<Schema.Number>;
            readonly gpuTypeId: Schema.optionalKey<Schema.String>;
            readonly gpuType: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
                readonly id: Schema.optionalKey<Schema.String>;
                readonly count: Schema.optionalKey<Schema.Number>;
                readonly displayName: Schema.optionalKey<Schema.String>;
                readonly securePrice: Schema.optionalKey<Schema.Number>;
                readonly communityPrice: Schema.optionalKey<Schema.Number>;
                readonly oneMonthPrice: Schema.optionalKey<Schema.Number>;
                readonly threeMonthPrice: Schema.optionalKey<Schema.Number>;
                readonly sixMonthPrice: Schema.optionalKey<Schema.Number>;
                readonly oneWeekPrice: Schema.optionalKey<Schema.Number>;
                readonly communitySpotPrice: Schema.optionalKey<Schema.Number>;
                readonly secureSpotPrice: Schema.optionalKey<Schema.Number>;
            }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
            readonly cpuCount: Schema.optionalKey<Schema.Number>;
            readonly cpuTypeId: Schema.optionalKey<Schema.String>;
            readonly cpuType: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
                readonly id: Schema.optionalKey<Schema.String>;
                readonly displayName: Schema.optionalKey<Schema.String>;
                readonly cores: Schema.optionalKey<Schema.Number>;
                readonly threadsPerCore: Schema.optionalKey<Schema.Number>;
                readonly groupId: Schema.optionalKey<Schema.String>;
            }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
            readonly location: Schema.optionalKey<Schema.String>;
            readonly dataCenterId: Schema.optionalKey<Schema.String>;
            readonly diskThroughputMBps: Schema.optionalKey<Schema.Number>;
            readonly maxDownloadSpeedMbps: Schema.optionalKey<Schema.Number>;
            readonly maxUploadSpeedMbps: Schema.optionalKey<Schema.Number>;
            readonly supportPublicIp: Schema.optionalKey<Schema.Boolean>;
            readonly secureCloud: Schema.optionalKey<Schema.Boolean>;
            readonly maintenanceStart: Schema.optionalKey<Schema.String>;
            readonly maintenanceEnd: Schema.optionalKey<Schema.String>;
            readonly maintenanceNote: Schema.optionalKey<Schema.String>;
            readonly note: Schema.optionalKey<Schema.String>;
            readonly costPerHr: Schema.optionalKey<Schema.Number>;
            readonly currentPricePerGpu: Schema.optionalKey<Schema.Number>;
            readonly gpuAvailable: Schema.optionalKey<Schema.Number>;
            readonly gpuDisplayName: Schema.optionalKey<Schema.String>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
        readonly machineId: Schema.optionalKey<Schema.String>;
        readonly memoryInGb: Schema.optionalKey<Schema.Number>;
        readonly name: Schema.optionalKey<Schema.String>;
        readonly networkVolume: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
            readonly id: Schema.optionalKey<Schema.String>;
            readonly name: Schema.optionalKey<Schema.String>;
            readonly size: Schema.optionalKey<Schema.Number>;
            readonly dataCenterId: Schema.optionalKey<Schema.String>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
        readonly portMappings: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        readonly ports: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly publicIp: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly savingsPlans: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
            readonly costPerHr: Schema.optionalKey<Schema.Number>;
            readonly endTime: Schema.optionalKey<Schema.String>;
            readonly gpuTypeId: Schema.optionalKey<Schema.String>;
            readonly id: Schema.optionalKey<Schema.String>;
            readonly podId: Schema.optionalKey<Schema.String>;
            readonly startTime: Schema.optionalKey<Schema.String>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
        readonly slsVersion: Schema.optionalKey<Schema.Number>;
        readonly templateId: Schema.optionalKey<Schema.String>;
        readonly vcpuCount: Schema.optionalKey<Schema.Number>;
        readonly volumeEncrypted: Schema.optionalKey<Schema.Boolean>;
        readonly volumeInGb: Schema.optionalKey<Schema.Number>;
        readonly volumeMountPath: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
    readonly workersMax: Schema.optionalKey<Schema.Number>;
    readonly workersMin: Schema.optionalKey<Schema.Number>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type GetEndpointParams = {
    readonly "includeTemplate"?: boolean;
    readonly "includeWorkers"?: boolean;
};
export declare const GetEndpointParams: Schema.Struct<{
    readonly includeTemplate: Schema.optionalKey<Schema.Boolean>;
    readonly includeWorkers: Schema.optionalKey<Schema.Boolean>;
}>;
export type GetEndpoint200 = Endpoint;
export declare const GetEndpoint200: Schema.StructWithRest<Schema.Struct<{
    readonly allowedCudaVersions: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["13.0", "12.9", "12.8", "12.7", "12.6", "12.5", "12.4", "12.3", "12.2", "12.1", "12.0", "11.8"]>>>;
    readonly computeType: Schema.optionalKey<Schema.Literals<readonly ["CPU", "GPU"]>>;
    readonly createdAt: Schema.optionalKey<Schema.String>;
    readonly dataCenterIds: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["EU-RO-1", "CA-MTL-1", "EU-SE-1", "US-IL-1", "EUR-IS-1", "EU-CZ-1", "US-TX-3", "EUR-IS-2", "US-KS-2", "US-GA-2", "US-WA-1", "US-TX-1", "CA-MTL-3", "EU-NL-1", "US-TX-4", "US-CA-2", "US-NC-1", "OC-AU-1", "US-DE-1", "EUR-IS-3", "CA-MTL-2", "AP-JP-1", "EUR-NO-1", "EU-FR-1", "US-KS-3", "US-GA-1", "AP-IN-1", "US-MD-1"]>>>;
    readonly env: Schema.optionalKey<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>;
    readonly executionTimeoutMs: Schema.optionalKey<Schema.Number>;
    readonly gpuCount: Schema.optionalKey<Schema.Number>;
    readonly gpuTypeIds: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["AMD Instinct MI300X OAM", "NVIDIA A100 80GB PCIe", "NVIDIA A100-SXM4-40GB", "NVIDIA A100-SXM4-80GB", "NVIDIA A40", "NVIDIA B200", "NVIDIA B300 SXM6 AC", "NVIDIA B300 SXM6 AC MIG 1g.34gb", "NVIDIA GeForce RTX 3070", "NVIDIA GeForce RTX 3080", "NVIDIA GeForce RTX 3080 Ti", "NVIDIA GeForce RTX 3090", "NVIDIA GeForce RTX 3090 Ti", "NVIDIA GeForce RTX 4070 Ti", "NVIDIA GeForce RTX 4080", "NVIDIA GeForce RTX 4080 SUPER", "NVIDIA GeForce RTX 4090", "NVIDIA GeForce RTX 5080", "NVIDIA GeForce RTX 5090", "NVIDIA H100 80GB HBM3", "NVIDIA H100 NVL", "NVIDIA H100 PCIe", "NVIDIA H200", "NVIDIA H200 NVL", "NVIDIA L4", "NVIDIA L40", "NVIDIA L40S", "NVIDIA RTX 2000 Ada Generation", "NVIDIA RTX 4000 Ada Generation", "NVIDIA RTX 4000 SFF Ada Generation", "NVIDIA RTX 5000 Ada Generation", "NVIDIA RTX 6000 Ada Generation", "NVIDIA RTX A2000", "NVIDIA RTX A4000", "NVIDIA RTX A4500", "NVIDIA RTX A5000", "NVIDIA RTX A6000", "NVIDIA RTX PRO 4000 Blackwell", "NVIDIA RTX PRO 4500 Blackwell", "NVIDIA RTX PRO 5000 Blackwell", "NVIDIA RTX PRO 6000 Blackwell Max-Q Workstation Edition", "NVIDIA RTX PRO 6000 Blackwell Server Edition", "NVIDIA RTX PRO 6000 Blackwell Workstation Edition", "Tesla V100-PCIE-16GB", "Tesla V100-SXM2-16GB"]>>>;
    readonly id: Schema.optionalKey<Schema.String>;
    readonly idleTimeout: Schema.optionalKey<Schema.Number>;
    readonly instanceIds: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly minCudaVersion: Schema.optionalKey<Schema.Literals<readonly ["13.0", "12.9", "12.8", "12.7", "12.6", "12.5", "12.4", "12.3", "12.2", "12.1", "12.0", "11.8"]>>;
    readonly name: Schema.optionalKey<Schema.String>;
    readonly networkVolumeId: Schema.optionalKey<Schema.String>;
    readonly networkVolumeIds: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly scalerType: Schema.optionalKey<Schema.Literals<readonly ["QUEUE_DELAY", "REQUEST_COUNT"]>>;
    readonly scalerValue: Schema.optionalKey<Schema.Number>;
    readonly template: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
        readonly category: Schema.optionalKey<Schema.String>;
        readonly containerDiskInGb: Schema.optionalKey<Schema.Number>;
        readonly containerRegistryAuthId: Schema.optionalKey<Schema.String>;
        readonly dockerEntrypoint: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly dockerStartCmd: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly earned: Schema.optionalKey<Schema.Number>;
        readonly env: Schema.optionalKey<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>;
        readonly id: Schema.optionalKey<Schema.String>;
        readonly imageName: Schema.optionalKey<Schema.String>;
        readonly isPublic: Schema.optionalKey<Schema.Boolean>;
        readonly isRunpod: Schema.optionalKey<Schema.Boolean>;
        readonly isServerless: Schema.optionalKey<Schema.Boolean>;
        readonly name: Schema.optionalKey<Schema.String>;
        readonly ports: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly readme: Schema.optionalKey<Schema.String>;
        readonly runtimeInMin: Schema.optionalKey<Schema.Number>;
        readonly volumeInGb: Schema.optionalKey<Schema.Number>;
        readonly volumeMountPath: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly templateId: Schema.optionalKey<Schema.String>;
    readonly userId: Schema.optionalKey<Schema.String>;
    readonly version: Schema.optionalKey<Schema.Number>;
    readonly workers: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly adjustedCostPerHr: Schema.optionalKey<Schema.Number>;
        readonly aiApiId: Schema.optionalKey<Schema.String>;
        readonly consumerUserId: Schema.optionalKey<Schema.String>;
        readonly containerDiskInGb: Schema.optionalKey<Schema.Number>;
        readonly containerRegistryAuthId: Schema.optionalKey<Schema.String>;
        readonly costPerHr: Schema.optionalKey<Schema.Number>;
        readonly cpuFlavorId: Schema.optionalKey<Schema.String>;
        readonly desiredStatus: Schema.optionalKey<Schema.Literals<readonly ["RUNNING", "EXITED", "TERMINATED"]>>;
        readonly dockerEntrypoint: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly dockerStartCmd: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly endpointId: Schema.optionalKey<Schema.String>;
        readonly env: Schema.optionalKey<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>;
        readonly gpu: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
            readonly id: Schema.optionalKey<Schema.String>;
            readonly count: Schema.optionalKey<Schema.Number>;
            readonly displayName: Schema.optionalKey<Schema.String>;
            readonly securePrice: Schema.optionalKey<Schema.Number>;
            readonly communityPrice: Schema.optionalKey<Schema.Number>;
            readonly oneMonthPrice: Schema.optionalKey<Schema.Number>;
            readonly threeMonthPrice: Schema.optionalKey<Schema.Number>;
            readonly sixMonthPrice: Schema.optionalKey<Schema.Number>;
            readonly oneWeekPrice: Schema.optionalKey<Schema.Number>;
            readonly communitySpotPrice: Schema.optionalKey<Schema.Number>;
            readonly secureSpotPrice: Schema.optionalKey<Schema.Number>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
        readonly id: Schema.optionalKey<Schema.String>;
        readonly image: Schema.optionalKey<Schema.String>;
        readonly interruptible: Schema.optionalKey<Schema.Boolean>;
        readonly lastStartedAt: Schema.optionalKey<Schema.String>;
        readonly lastStatusChange: Schema.optionalKey<Schema.String>;
        readonly locked: Schema.optionalKey<Schema.Boolean>;
        readonly machine: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
            readonly minPodGpuCount: Schema.optionalKey<Schema.Number>;
            readonly gpuTypeId: Schema.optionalKey<Schema.String>;
            readonly gpuType: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
                readonly id: Schema.optionalKey<Schema.String>;
                readonly count: Schema.optionalKey<Schema.Number>;
                readonly displayName: Schema.optionalKey<Schema.String>;
                readonly securePrice: Schema.optionalKey<Schema.Number>;
                readonly communityPrice: Schema.optionalKey<Schema.Number>;
                readonly oneMonthPrice: Schema.optionalKey<Schema.Number>;
                readonly threeMonthPrice: Schema.optionalKey<Schema.Number>;
                readonly sixMonthPrice: Schema.optionalKey<Schema.Number>;
                readonly oneWeekPrice: Schema.optionalKey<Schema.Number>;
                readonly communitySpotPrice: Schema.optionalKey<Schema.Number>;
                readonly secureSpotPrice: Schema.optionalKey<Schema.Number>;
            }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
            readonly cpuCount: Schema.optionalKey<Schema.Number>;
            readonly cpuTypeId: Schema.optionalKey<Schema.String>;
            readonly cpuType: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
                readonly id: Schema.optionalKey<Schema.String>;
                readonly displayName: Schema.optionalKey<Schema.String>;
                readonly cores: Schema.optionalKey<Schema.Number>;
                readonly threadsPerCore: Schema.optionalKey<Schema.Number>;
                readonly groupId: Schema.optionalKey<Schema.String>;
            }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
            readonly location: Schema.optionalKey<Schema.String>;
            readonly dataCenterId: Schema.optionalKey<Schema.String>;
            readonly diskThroughputMBps: Schema.optionalKey<Schema.Number>;
            readonly maxDownloadSpeedMbps: Schema.optionalKey<Schema.Number>;
            readonly maxUploadSpeedMbps: Schema.optionalKey<Schema.Number>;
            readonly supportPublicIp: Schema.optionalKey<Schema.Boolean>;
            readonly secureCloud: Schema.optionalKey<Schema.Boolean>;
            readonly maintenanceStart: Schema.optionalKey<Schema.String>;
            readonly maintenanceEnd: Schema.optionalKey<Schema.String>;
            readonly maintenanceNote: Schema.optionalKey<Schema.String>;
            readonly note: Schema.optionalKey<Schema.String>;
            readonly costPerHr: Schema.optionalKey<Schema.Number>;
            readonly currentPricePerGpu: Schema.optionalKey<Schema.Number>;
            readonly gpuAvailable: Schema.optionalKey<Schema.Number>;
            readonly gpuDisplayName: Schema.optionalKey<Schema.String>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
        readonly machineId: Schema.optionalKey<Schema.String>;
        readonly memoryInGb: Schema.optionalKey<Schema.Number>;
        readonly name: Schema.optionalKey<Schema.String>;
        readonly networkVolume: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
            readonly id: Schema.optionalKey<Schema.String>;
            readonly name: Schema.optionalKey<Schema.String>;
            readonly size: Schema.optionalKey<Schema.Number>;
            readonly dataCenterId: Schema.optionalKey<Schema.String>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
        readonly portMappings: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        readonly ports: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly publicIp: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly savingsPlans: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
            readonly costPerHr: Schema.optionalKey<Schema.Number>;
            readonly endTime: Schema.optionalKey<Schema.String>;
            readonly gpuTypeId: Schema.optionalKey<Schema.String>;
            readonly id: Schema.optionalKey<Schema.String>;
            readonly podId: Schema.optionalKey<Schema.String>;
            readonly startTime: Schema.optionalKey<Schema.String>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
        readonly slsVersion: Schema.optionalKey<Schema.Number>;
        readonly templateId: Schema.optionalKey<Schema.String>;
        readonly vcpuCount: Schema.optionalKey<Schema.Number>;
        readonly volumeEncrypted: Schema.optionalKey<Schema.Boolean>;
        readonly volumeInGb: Schema.optionalKey<Schema.Number>;
        readonly volumeMountPath: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
    readonly workersMax: Schema.optionalKey<Schema.Number>;
    readonly workersMin: Schema.optionalKey<Schema.Number>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type UpdateEndpointRequestJson = EndpointUpdateInput;
export declare const UpdateEndpointRequestJson: Schema.StructWithRest<Schema.Struct<{
    readonly allowedCudaVersions: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["13.0", "12.9", "12.8", "12.7", "12.6", "12.5", "12.4", "12.3", "12.2", "12.1", "12.0", "11.8"]>>>;
    readonly cpuFlavorIds: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["cpu3c", "cpu3g", "cpu5c", "cpu5g"]>>>;
    readonly dataCenterIds: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["EU-RO-1", "CA-MTL-1", "EU-SE-1", "US-IL-1", "EUR-IS-1", "EU-CZ-1", "US-TX-3", "EUR-IS-2", "US-KS-2", "US-GA-2", "US-WA-1", "US-TX-1", "CA-MTL-3", "EU-NL-1", "US-TX-4", "US-CA-2", "US-NC-1", "OC-AU-1", "US-DE-1", "EUR-IS-3", "CA-MTL-2", "AP-JP-1", "EUR-NO-1", "EU-FR-1", "US-KS-3", "US-GA-1", "AP-IN-1", "US-MD-1"]>>>;
    readonly executionTimeoutMs: Schema.optionalKey<Schema.Number>;
    readonly flashboot: Schema.optionalKey<Schema.Boolean>;
    readonly gpuCount: Schema.optionalKey<Schema.Number>;
    readonly gpuTypeIds: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["AMD Instinct MI300X OAM", "NVIDIA A100 80GB PCIe", "NVIDIA A100-SXM4-40GB", "NVIDIA A100-SXM4-80GB", "NVIDIA A40", "NVIDIA B200", "NVIDIA B300 SXM6 AC", "NVIDIA B300 SXM6 AC MIG 1g.34gb", "NVIDIA GeForce RTX 3070", "NVIDIA GeForce RTX 3080", "NVIDIA GeForce RTX 3080 Ti", "NVIDIA GeForce RTX 3090", "NVIDIA GeForce RTX 3090 Ti", "NVIDIA GeForce RTX 4070 Ti", "NVIDIA GeForce RTX 4080", "NVIDIA GeForce RTX 4080 SUPER", "NVIDIA GeForce RTX 4090", "NVIDIA GeForce RTX 5080", "NVIDIA GeForce RTX 5090", "NVIDIA H100 80GB HBM3", "NVIDIA H100 NVL", "NVIDIA H100 PCIe", "NVIDIA H200", "NVIDIA H200 NVL", "NVIDIA L4", "NVIDIA L40", "NVIDIA L40S", "NVIDIA RTX 2000 Ada Generation", "NVIDIA RTX 4000 Ada Generation", "NVIDIA RTX 4000 SFF Ada Generation", "NVIDIA RTX 5000 Ada Generation", "NVIDIA RTX 6000 Ada Generation", "NVIDIA RTX A2000", "NVIDIA RTX A4000", "NVIDIA RTX A4500", "NVIDIA RTX A5000", "NVIDIA RTX A6000", "NVIDIA RTX PRO 4000 Blackwell", "NVIDIA RTX PRO 4500 Blackwell", "NVIDIA RTX PRO 5000 Blackwell", "NVIDIA RTX PRO 6000 Blackwell Max-Q Workstation Edition", "NVIDIA RTX PRO 6000 Blackwell Server Edition", "NVIDIA RTX PRO 6000 Blackwell Workstation Edition", "Tesla V100-PCIE-16GB", "Tesla V100-SXM2-16GB"]>>>;
    readonly idleTimeout: Schema.optionalKey<Schema.Number>;
    readonly minCudaVersion: Schema.optionalKey<Schema.Literals<readonly ["13.0", "12.9", "12.8", "12.7", "12.6", "12.5", "12.4", "12.3", "12.2", "12.1", "12.0", "11.8"]>>;
    readonly name: Schema.optionalKey<Schema.String>;
    readonly networkVolumeId: Schema.optionalKey<Schema.String>;
    readonly networkVolumeIds: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly scalerType: Schema.optionalKey<Schema.Literals<readonly ["QUEUE_DELAY", "REQUEST_COUNT"]>>;
    readonly scalerValue: Schema.optionalKey<Schema.Number>;
    readonly templateId: Schema.optionalKey<Schema.String>;
    readonly vcpuCount: Schema.optionalKey<Schema.Number>;
    readonly workersMax: Schema.optionalKey<Schema.Number>;
    readonly workersMin: Schema.optionalKey<Schema.Number>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type UpdateEndpoint200 = Endpoint;
export declare const UpdateEndpoint200: Schema.StructWithRest<Schema.Struct<{
    readonly allowedCudaVersions: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["13.0", "12.9", "12.8", "12.7", "12.6", "12.5", "12.4", "12.3", "12.2", "12.1", "12.0", "11.8"]>>>;
    readonly computeType: Schema.optionalKey<Schema.Literals<readonly ["CPU", "GPU"]>>;
    readonly createdAt: Schema.optionalKey<Schema.String>;
    readonly dataCenterIds: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["EU-RO-1", "CA-MTL-1", "EU-SE-1", "US-IL-1", "EUR-IS-1", "EU-CZ-1", "US-TX-3", "EUR-IS-2", "US-KS-2", "US-GA-2", "US-WA-1", "US-TX-1", "CA-MTL-3", "EU-NL-1", "US-TX-4", "US-CA-2", "US-NC-1", "OC-AU-1", "US-DE-1", "EUR-IS-3", "CA-MTL-2", "AP-JP-1", "EUR-NO-1", "EU-FR-1", "US-KS-3", "US-GA-1", "AP-IN-1", "US-MD-1"]>>>;
    readonly env: Schema.optionalKey<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>;
    readonly executionTimeoutMs: Schema.optionalKey<Schema.Number>;
    readonly gpuCount: Schema.optionalKey<Schema.Number>;
    readonly gpuTypeIds: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["AMD Instinct MI300X OAM", "NVIDIA A100 80GB PCIe", "NVIDIA A100-SXM4-40GB", "NVIDIA A100-SXM4-80GB", "NVIDIA A40", "NVIDIA B200", "NVIDIA B300 SXM6 AC", "NVIDIA B300 SXM6 AC MIG 1g.34gb", "NVIDIA GeForce RTX 3070", "NVIDIA GeForce RTX 3080", "NVIDIA GeForce RTX 3080 Ti", "NVIDIA GeForce RTX 3090", "NVIDIA GeForce RTX 3090 Ti", "NVIDIA GeForce RTX 4070 Ti", "NVIDIA GeForce RTX 4080", "NVIDIA GeForce RTX 4080 SUPER", "NVIDIA GeForce RTX 4090", "NVIDIA GeForce RTX 5080", "NVIDIA GeForce RTX 5090", "NVIDIA H100 80GB HBM3", "NVIDIA H100 NVL", "NVIDIA H100 PCIe", "NVIDIA H200", "NVIDIA H200 NVL", "NVIDIA L4", "NVIDIA L40", "NVIDIA L40S", "NVIDIA RTX 2000 Ada Generation", "NVIDIA RTX 4000 Ada Generation", "NVIDIA RTX 4000 SFF Ada Generation", "NVIDIA RTX 5000 Ada Generation", "NVIDIA RTX 6000 Ada Generation", "NVIDIA RTX A2000", "NVIDIA RTX A4000", "NVIDIA RTX A4500", "NVIDIA RTX A5000", "NVIDIA RTX A6000", "NVIDIA RTX PRO 4000 Blackwell", "NVIDIA RTX PRO 4500 Blackwell", "NVIDIA RTX PRO 5000 Blackwell", "NVIDIA RTX PRO 6000 Blackwell Max-Q Workstation Edition", "NVIDIA RTX PRO 6000 Blackwell Server Edition", "NVIDIA RTX PRO 6000 Blackwell Workstation Edition", "Tesla V100-PCIE-16GB", "Tesla V100-SXM2-16GB"]>>>;
    readonly id: Schema.optionalKey<Schema.String>;
    readonly idleTimeout: Schema.optionalKey<Schema.Number>;
    readonly instanceIds: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly minCudaVersion: Schema.optionalKey<Schema.Literals<readonly ["13.0", "12.9", "12.8", "12.7", "12.6", "12.5", "12.4", "12.3", "12.2", "12.1", "12.0", "11.8"]>>;
    readonly name: Schema.optionalKey<Schema.String>;
    readonly networkVolumeId: Schema.optionalKey<Schema.String>;
    readonly networkVolumeIds: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly scalerType: Schema.optionalKey<Schema.Literals<readonly ["QUEUE_DELAY", "REQUEST_COUNT"]>>;
    readonly scalerValue: Schema.optionalKey<Schema.Number>;
    readonly template: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
        readonly category: Schema.optionalKey<Schema.String>;
        readonly containerDiskInGb: Schema.optionalKey<Schema.Number>;
        readonly containerRegistryAuthId: Schema.optionalKey<Schema.String>;
        readonly dockerEntrypoint: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly dockerStartCmd: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly earned: Schema.optionalKey<Schema.Number>;
        readonly env: Schema.optionalKey<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>;
        readonly id: Schema.optionalKey<Schema.String>;
        readonly imageName: Schema.optionalKey<Schema.String>;
        readonly isPublic: Schema.optionalKey<Schema.Boolean>;
        readonly isRunpod: Schema.optionalKey<Schema.Boolean>;
        readonly isServerless: Schema.optionalKey<Schema.Boolean>;
        readonly name: Schema.optionalKey<Schema.String>;
        readonly ports: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly readme: Schema.optionalKey<Schema.String>;
        readonly runtimeInMin: Schema.optionalKey<Schema.Number>;
        readonly volumeInGb: Schema.optionalKey<Schema.Number>;
        readonly volumeMountPath: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly templateId: Schema.optionalKey<Schema.String>;
    readonly userId: Schema.optionalKey<Schema.String>;
    readonly version: Schema.optionalKey<Schema.Number>;
    readonly workers: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly adjustedCostPerHr: Schema.optionalKey<Schema.Number>;
        readonly aiApiId: Schema.optionalKey<Schema.String>;
        readonly consumerUserId: Schema.optionalKey<Schema.String>;
        readonly containerDiskInGb: Schema.optionalKey<Schema.Number>;
        readonly containerRegistryAuthId: Schema.optionalKey<Schema.String>;
        readonly costPerHr: Schema.optionalKey<Schema.Number>;
        readonly cpuFlavorId: Schema.optionalKey<Schema.String>;
        readonly desiredStatus: Schema.optionalKey<Schema.Literals<readonly ["RUNNING", "EXITED", "TERMINATED"]>>;
        readonly dockerEntrypoint: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly dockerStartCmd: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly endpointId: Schema.optionalKey<Schema.String>;
        readonly env: Schema.optionalKey<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>;
        readonly gpu: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
            readonly id: Schema.optionalKey<Schema.String>;
            readonly count: Schema.optionalKey<Schema.Number>;
            readonly displayName: Schema.optionalKey<Schema.String>;
            readonly securePrice: Schema.optionalKey<Schema.Number>;
            readonly communityPrice: Schema.optionalKey<Schema.Number>;
            readonly oneMonthPrice: Schema.optionalKey<Schema.Number>;
            readonly threeMonthPrice: Schema.optionalKey<Schema.Number>;
            readonly sixMonthPrice: Schema.optionalKey<Schema.Number>;
            readonly oneWeekPrice: Schema.optionalKey<Schema.Number>;
            readonly communitySpotPrice: Schema.optionalKey<Schema.Number>;
            readonly secureSpotPrice: Schema.optionalKey<Schema.Number>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
        readonly id: Schema.optionalKey<Schema.String>;
        readonly image: Schema.optionalKey<Schema.String>;
        readonly interruptible: Schema.optionalKey<Schema.Boolean>;
        readonly lastStartedAt: Schema.optionalKey<Schema.String>;
        readonly lastStatusChange: Schema.optionalKey<Schema.String>;
        readonly locked: Schema.optionalKey<Schema.Boolean>;
        readonly machine: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
            readonly minPodGpuCount: Schema.optionalKey<Schema.Number>;
            readonly gpuTypeId: Schema.optionalKey<Schema.String>;
            readonly gpuType: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
                readonly id: Schema.optionalKey<Schema.String>;
                readonly count: Schema.optionalKey<Schema.Number>;
                readonly displayName: Schema.optionalKey<Schema.String>;
                readonly securePrice: Schema.optionalKey<Schema.Number>;
                readonly communityPrice: Schema.optionalKey<Schema.Number>;
                readonly oneMonthPrice: Schema.optionalKey<Schema.Number>;
                readonly threeMonthPrice: Schema.optionalKey<Schema.Number>;
                readonly sixMonthPrice: Schema.optionalKey<Schema.Number>;
                readonly oneWeekPrice: Schema.optionalKey<Schema.Number>;
                readonly communitySpotPrice: Schema.optionalKey<Schema.Number>;
                readonly secureSpotPrice: Schema.optionalKey<Schema.Number>;
            }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
            readonly cpuCount: Schema.optionalKey<Schema.Number>;
            readonly cpuTypeId: Schema.optionalKey<Schema.String>;
            readonly cpuType: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
                readonly id: Schema.optionalKey<Schema.String>;
                readonly displayName: Schema.optionalKey<Schema.String>;
                readonly cores: Schema.optionalKey<Schema.Number>;
                readonly threadsPerCore: Schema.optionalKey<Schema.Number>;
                readonly groupId: Schema.optionalKey<Schema.String>;
            }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
            readonly location: Schema.optionalKey<Schema.String>;
            readonly dataCenterId: Schema.optionalKey<Schema.String>;
            readonly diskThroughputMBps: Schema.optionalKey<Schema.Number>;
            readonly maxDownloadSpeedMbps: Schema.optionalKey<Schema.Number>;
            readonly maxUploadSpeedMbps: Schema.optionalKey<Schema.Number>;
            readonly supportPublicIp: Schema.optionalKey<Schema.Boolean>;
            readonly secureCloud: Schema.optionalKey<Schema.Boolean>;
            readonly maintenanceStart: Schema.optionalKey<Schema.String>;
            readonly maintenanceEnd: Schema.optionalKey<Schema.String>;
            readonly maintenanceNote: Schema.optionalKey<Schema.String>;
            readonly note: Schema.optionalKey<Schema.String>;
            readonly costPerHr: Schema.optionalKey<Schema.Number>;
            readonly currentPricePerGpu: Schema.optionalKey<Schema.Number>;
            readonly gpuAvailable: Schema.optionalKey<Schema.Number>;
            readonly gpuDisplayName: Schema.optionalKey<Schema.String>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
        readonly machineId: Schema.optionalKey<Schema.String>;
        readonly memoryInGb: Schema.optionalKey<Schema.Number>;
        readonly name: Schema.optionalKey<Schema.String>;
        readonly networkVolume: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
            readonly id: Schema.optionalKey<Schema.String>;
            readonly name: Schema.optionalKey<Schema.String>;
            readonly size: Schema.optionalKey<Schema.Number>;
            readonly dataCenterId: Schema.optionalKey<Schema.String>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
        readonly portMappings: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        readonly ports: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly publicIp: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly savingsPlans: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
            readonly costPerHr: Schema.optionalKey<Schema.Number>;
            readonly endTime: Schema.optionalKey<Schema.String>;
            readonly gpuTypeId: Schema.optionalKey<Schema.String>;
            readonly id: Schema.optionalKey<Schema.String>;
            readonly podId: Schema.optionalKey<Schema.String>;
            readonly startTime: Schema.optionalKey<Schema.String>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
        readonly slsVersion: Schema.optionalKey<Schema.Number>;
        readonly templateId: Schema.optionalKey<Schema.String>;
        readonly vcpuCount: Schema.optionalKey<Schema.Number>;
        readonly volumeEncrypted: Schema.optionalKey<Schema.Boolean>;
        readonly volumeInGb: Schema.optionalKey<Schema.Number>;
        readonly volumeMountPath: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
    readonly workersMax: Schema.optionalKey<Schema.Number>;
    readonly workersMin: Schema.optionalKey<Schema.Number>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type UpdateEndpointPostRequestJson = EndpointUpdateInput;
export declare const UpdateEndpointPostRequestJson: Schema.StructWithRest<Schema.Struct<{
    readonly allowedCudaVersions: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["13.0", "12.9", "12.8", "12.7", "12.6", "12.5", "12.4", "12.3", "12.2", "12.1", "12.0", "11.8"]>>>;
    readonly cpuFlavorIds: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["cpu3c", "cpu3g", "cpu5c", "cpu5g"]>>>;
    readonly dataCenterIds: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["EU-RO-1", "CA-MTL-1", "EU-SE-1", "US-IL-1", "EUR-IS-1", "EU-CZ-1", "US-TX-3", "EUR-IS-2", "US-KS-2", "US-GA-2", "US-WA-1", "US-TX-1", "CA-MTL-3", "EU-NL-1", "US-TX-4", "US-CA-2", "US-NC-1", "OC-AU-1", "US-DE-1", "EUR-IS-3", "CA-MTL-2", "AP-JP-1", "EUR-NO-1", "EU-FR-1", "US-KS-3", "US-GA-1", "AP-IN-1", "US-MD-1"]>>>;
    readonly executionTimeoutMs: Schema.optionalKey<Schema.Number>;
    readonly flashboot: Schema.optionalKey<Schema.Boolean>;
    readonly gpuCount: Schema.optionalKey<Schema.Number>;
    readonly gpuTypeIds: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["AMD Instinct MI300X OAM", "NVIDIA A100 80GB PCIe", "NVIDIA A100-SXM4-40GB", "NVIDIA A100-SXM4-80GB", "NVIDIA A40", "NVIDIA B200", "NVIDIA B300 SXM6 AC", "NVIDIA B300 SXM6 AC MIG 1g.34gb", "NVIDIA GeForce RTX 3070", "NVIDIA GeForce RTX 3080", "NVIDIA GeForce RTX 3080 Ti", "NVIDIA GeForce RTX 3090", "NVIDIA GeForce RTX 3090 Ti", "NVIDIA GeForce RTX 4070 Ti", "NVIDIA GeForce RTX 4080", "NVIDIA GeForce RTX 4080 SUPER", "NVIDIA GeForce RTX 4090", "NVIDIA GeForce RTX 5080", "NVIDIA GeForce RTX 5090", "NVIDIA H100 80GB HBM3", "NVIDIA H100 NVL", "NVIDIA H100 PCIe", "NVIDIA H200", "NVIDIA H200 NVL", "NVIDIA L4", "NVIDIA L40", "NVIDIA L40S", "NVIDIA RTX 2000 Ada Generation", "NVIDIA RTX 4000 Ada Generation", "NVIDIA RTX 4000 SFF Ada Generation", "NVIDIA RTX 5000 Ada Generation", "NVIDIA RTX 6000 Ada Generation", "NVIDIA RTX A2000", "NVIDIA RTX A4000", "NVIDIA RTX A4500", "NVIDIA RTX A5000", "NVIDIA RTX A6000", "NVIDIA RTX PRO 4000 Blackwell", "NVIDIA RTX PRO 4500 Blackwell", "NVIDIA RTX PRO 5000 Blackwell", "NVIDIA RTX PRO 6000 Blackwell Max-Q Workstation Edition", "NVIDIA RTX PRO 6000 Blackwell Server Edition", "NVIDIA RTX PRO 6000 Blackwell Workstation Edition", "Tesla V100-PCIE-16GB", "Tesla V100-SXM2-16GB"]>>>;
    readonly idleTimeout: Schema.optionalKey<Schema.Number>;
    readonly minCudaVersion: Schema.optionalKey<Schema.Literals<readonly ["13.0", "12.9", "12.8", "12.7", "12.6", "12.5", "12.4", "12.3", "12.2", "12.1", "12.0", "11.8"]>>;
    readonly name: Schema.optionalKey<Schema.String>;
    readonly networkVolumeId: Schema.optionalKey<Schema.String>;
    readonly networkVolumeIds: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly scalerType: Schema.optionalKey<Schema.Literals<readonly ["QUEUE_DELAY", "REQUEST_COUNT"]>>;
    readonly scalerValue: Schema.optionalKey<Schema.Number>;
    readonly templateId: Schema.optionalKey<Schema.String>;
    readonly vcpuCount: Schema.optionalKey<Schema.Number>;
    readonly workersMax: Schema.optionalKey<Schema.Number>;
    readonly workersMin: Schema.optionalKey<Schema.Number>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type UpdateEndpointPost200 = Endpoint;
export declare const UpdateEndpointPost200: Schema.StructWithRest<Schema.Struct<{
    readonly allowedCudaVersions: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["13.0", "12.9", "12.8", "12.7", "12.6", "12.5", "12.4", "12.3", "12.2", "12.1", "12.0", "11.8"]>>>;
    readonly computeType: Schema.optionalKey<Schema.Literals<readonly ["CPU", "GPU"]>>;
    readonly createdAt: Schema.optionalKey<Schema.String>;
    readonly dataCenterIds: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["EU-RO-1", "CA-MTL-1", "EU-SE-1", "US-IL-1", "EUR-IS-1", "EU-CZ-1", "US-TX-3", "EUR-IS-2", "US-KS-2", "US-GA-2", "US-WA-1", "US-TX-1", "CA-MTL-3", "EU-NL-1", "US-TX-4", "US-CA-2", "US-NC-1", "OC-AU-1", "US-DE-1", "EUR-IS-3", "CA-MTL-2", "AP-JP-1", "EUR-NO-1", "EU-FR-1", "US-KS-3", "US-GA-1", "AP-IN-1", "US-MD-1"]>>>;
    readonly env: Schema.optionalKey<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>;
    readonly executionTimeoutMs: Schema.optionalKey<Schema.Number>;
    readonly gpuCount: Schema.optionalKey<Schema.Number>;
    readonly gpuTypeIds: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["AMD Instinct MI300X OAM", "NVIDIA A100 80GB PCIe", "NVIDIA A100-SXM4-40GB", "NVIDIA A100-SXM4-80GB", "NVIDIA A40", "NVIDIA B200", "NVIDIA B300 SXM6 AC", "NVIDIA B300 SXM6 AC MIG 1g.34gb", "NVIDIA GeForce RTX 3070", "NVIDIA GeForce RTX 3080", "NVIDIA GeForce RTX 3080 Ti", "NVIDIA GeForce RTX 3090", "NVIDIA GeForce RTX 3090 Ti", "NVIDIA GeForce RTX 4070 Ti", "NVIDIA GeForce RTX 4080", "NVIDIA GeForce RTX 4080 SUPER", "NVIDIA GeForce RTX 4090", "NVIDIA GeForce RTX 5080", "NVIDIA GeForce RTX 5090", "NVIDIA H100 80GB HBM3", "NVIDIA H100 NVL", "NVIDIA H100 PCIe", "NVIDIA H200", "NVIDIA H200 NVL", "NVIDIA L4", "NVIDIA L40", "NVIDIA L40S", "NVIDIA RTX 2000 Ada Generation", "NVIDIA RTX 4000 Ada Generation", "NVIDIA RTX 4000 SFF Ada Generation", "NVIDIA RTX 5000 Ada Generation", "NVIDIA RTX 6000 Ada Generation", "NVIDIA RTX A2000", "NVIDIA RTX A4000", "NVIDIA RTX A4500", "NVIDIA RTX A5000", "NVIDIA RTX A6000", "NVIDIA RTX PRO 4000 Blackwell", "NVIDIA RTX PRO 4500 Blackwell", "NVIDIA RTX PRO 5000 Blackwell", "NVIDIA RTX PRO 6000 Blackwell Max-Q Workstation Edition", "NVIDIA RTX PRO 6000 Blackwell Server Edition", "NVIDIA RTX PRO 6000 Blackwell Workstation Edition", "Tesla V100-PCIE-16GB", "Tesla V100-SXM2-16GB"]>>>;
    readonly id: Schema.optionalKey<Schema.String>;
    readonly idleTimeout: Schema.optionalKey<Schema.Number>;
    readonly instanceIds: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly minCudaVersion: Schema.optionalKey<Schema.Literals<readonly ["13.0", "12.9", "12.8", "12.7", "12.6", "12.5", "12.4", "12.3", "12.2", "12.1", "12.0", "11.8"]>>;
    readonly name: Schema.optionalKey<Schema.String>;
    readonly networkVolumeId: Schema.optionalKey<Schema.String>;
    readonly networkVolumeIds: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly scalerType: Schema.optionalKey<Schema.Literals<readonly ["QUEUE_DELAY", "REQUEST_COUNT"]>>;
    readonly scalerValue: Schema.optionalKey<Schema.Number>;
    readonly template: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
        readonly category: Schema.optionalKey<Schema.String>;
        readonly containerDiskInGb: Schema.optionalKey<Schema.Number>;
        readonly containerRegistryAuthId: Schema.optionalKey<Schema.String>;
        readonly dockerEntrypoint: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly dockerStartCmd: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly earned: Schema.optionalKey<Schema.Number>;
        readonly env: Schema.optionalKey<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>;
        readonly id: Schema.optionalKey<Schema.String>;
        readonly imageName: Schema.optionalKey<Schema.String>;
        readonly isPublic: Schema.optionalKey<Schema.Boolean>;
        readonly isRunpod: Schema.optionalKey<Schema.Boolean>;
        readonly isServerless: Schema.optionalKey<Schema.Boolean>;
        readonly name: Schema.optionalKey<Schema.String>;
        readonly ports: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly readme: Schema.optionalKey<Schema.String>;
        readonly runtimeInMin: Schema.optionalKey<Schema.Number>;
        readonly volumeInGb: Schema.optionalKey<Schema.Number>;
        readonly volumeMountPath: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly templateId: Schema.optionalKey<Schema.String>;
    readonly userId: Schema.optionalKey<Schema.String>;
    readonly version: Schema.optionalKey<Schema.Number>;
    readonly workers: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly adjustedCostPerHr: Schema.optionalKey<Schema.Number>;
        readonly aiApiId: Schema.optionalKey<Schema.String>;
        readonly consumerUserId: Schema.optionalKey<Schema.String>;
        readonly containerDiskInGb: Schema.optionalKey<Schema.Number>;
        readonly containerRegistryAuthId: Schema.optionalKey<Schema.String>;
        readonly costPerHr: Schema.optionalKey<Schema.Number>;
        readonly cpuFlavorId: Schema.optionalKey<Schema.String>;
        readonly desiredStatus: Schema.optionalKey<Schema.Literals<readonly ["RUNNING", "EXITED", "TERMINATED"]>>;
        readonly dockerEntrypoint: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly dockerStartCmd: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly endpointId: Schema.optionalKey<Schema.String>;
        readonly env: Schema.optionalKey<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>;
        readonly gpu: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
            readonly id: Schema.optionalKey<Schema.String>;
            readonly count: Schema.optionalKey<Schema.Number>;
            readonly displayName: Schema.optionalKey<Schema.String>;
            readonly securePrice: Schema.optionalKey<Schema.Number>;
            readonly communityPrice: Schema.optionalKey<Schema.Number>;
            readonly oneMonthPrice: Schema.optionalKey<Schema.Number>;
            readonly threeMonthPrice: Schema.optionalKey<Schema.Number>;
            readonly sixMonthPrice: Schema.optionalKey<Schema.Number>;
            readonly oneWeekPrice: Schema.optionalKey<Schema.Number>;
            readonly communitySpotPrice: Schema.optionalKey<Schema.Number>;
            readonly secureSpotPrice: Schema.optionalKey<Schema.Number>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
        readonly id: Schema.optionalKey<Schema.String>;
        readonly image: Schema.optionalKey<Schema.String>;
        readonly interruptible: Schema.optionalKey<Schema.Boolean>;
        readonly lastStartedAt: Schema.optionalKey<Schema.String>;
        readonly lastStatusChange: Schema.optionalKey<Schema.String>;
        readonly locked: Schema.optionalKey<Schema.Boolean>;
        readonly machine: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
            readonly minPodGpuCount: Schema.optionalKey<Schema.Number>;
            readonly gpuTypeId: Schema.optionalKey<Schema.String>;
            readonly gpuType: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
                readonly id: Schema.optionalKey<Schema.String>;
                readonly count: Schema.optionalKey<Schema.Number>;
                readonly displayName: Schema.optionalKey<Schema.String>;
                readonly securePrice: Schema.optionalKey<Schema.Number>;
                readonly communityPrice: Schema.optionalKey<Schema.Number>;
                readonly oneMonthPrice: Schema.optionalKey<Schema.Number>;
                readonly threeMonthPrice: Schema.optionalKey<Schema.Number>;
                readonly sixMonthPrice: Schema.optionalKey<Schema.Number>;
                readonly oneWeekPrice: Schema.optionalKey<Schema.Number>;
                readonly communitySpotPrice: Schema.optionalKey<Schema.Number>;
                readonly secureSpotPrice: Schema.optionalKey<Schema.Number>;
            }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
            readonly cpuCount: Schema.optionalKey<Schema.Number>;
            readonly cpuTypeId: Schema.optionalKey<Schema.String>;
            readonly cpuType: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
                readonly id: Schema.optionalKey<Schema.String>;
                readonly displayName: Schema.optionalKey<Schema.String>;
                readonly cores: Schema.optionalKey<Schema.Number>;
                readonly threadsPerCore: Schema.optionalKey<Schema.Number>;
                readonly groupId: Schema.optionalKey<Schema.String>;
            }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
            readonly location: Schema.optionalKey<Schema.String>;
            readonly dataCenterId: Schema.optionalKey<Schema.String>;
            readonly diskThroughputMBps: Schema.optionalKey<Schema.Number>;
            readonly maxDownloadSpeedMbps: Schema.optionalKey<Schema.Number>;
            readonly maxUploadSpeedMbps: Schema.optionalKey<Schema.Number>;
            readonly supportPublicIp: Schema.optionalKey<Schema.Boolean>;
            readonly secureCloud: Schema.optionalKey<Schema.Boolean>;
            readonly maintenanceStart: Schema.optionalKey<Schema.String>;
            readonly maintenanceEnd: Schema.optionalKey<Schema.String>;
            readonly maintenanceNote: Schema.optionalKey<Schema.String>;
            readonly note: Schema.optionalKey<Schema.String>;
            readonly costPerHr: Schema.optionalKey<Schema.Number>;
            readonly currentPricePerGpu: Schema.optionalKey<Schema.Number>;
            readonly gpuAvailable: Schema.optionalKey<Schema.Number>;
            readonly gpuDisplayName: Schema.optionalKey<Schema.String>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
        readonly machineId: Schema.optionalKey<Schema.String>;
        readonly memoryInGb: Schema.optionalKey<Schema.Number>;
        readonly name: Schema.optionalKey<Schema.String>;
        readonly networkVolume: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
            readonly id: Schema.optionalKey<Schema.String>;
            readonly name: Schema.optionalKey<Schema.String>;
            readonly size: Schema.optionalKey<Schema.Number>;
            readonly dataCenterId: Schema.optionalKey<Schema.String>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
        readonly portMappings: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        readonly ports: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly publicIp: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly savingsPlans: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
            readonly costPerHr: Schema.optionalKey<Schema.Number>;
            readonly endTime: Schema.optionalKey<Schema.String>;
            readonly gpuTypeId: Schema.optionalKey<Schema.String>;
            readonly id: Schema.optionalKey<Schema.String>;
            readonly podId: Schema.optionalKey<Schema.String>;
            readonly startTime: Schema.optionalKey<Schema.String>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
        readonly slsVersion: Schema.optionalKey<Schema.Number>;
        readonly templateId: Schema.optionalKey<Schema.String>;
        readonly vcpuCount: Schema.optionalKey<Schema.Number>;
        readonly volumeEncrypted: Schema.optionalKey<Schema.Boolean>;
        readonly volumeInGb: Schema.optionalKey<Schema.Number>;
        readonly volumeMountPath: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
    readonly workersMax: Schema.optionalKey<Schema.Number>;
    readonly workersMin: Schema.optionalKey<Schema.Number>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ListTemplatesParams = {
    readonly "includeEndpointBoundTemplates"?: boolean;
    readonly "includePublicTemplates"?: boolean;
    readonly "includeRunpodTemplates"?: boolean;
};
export declare const ListTemplatesParams: Schema.Struct<{
    readonly includeEndpointBoundTemplates: Schema.optionalKey<Schema.Boolean>;
    readonly includePublicTemplates: Schema.optionalKey<Schema.Boolean>;
    readonly includeRunpodTemplates: Schema.optionalKey<Schema.Boolean>;
}>;
export type ListTemplates200 = Templates;
export declare const ListTemplates200: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly category: Schema.optionalKey<Schema.String>;
    readonly containerDiskInGb: Schema.optionalKey<Schema.Number>;
    readonly containerRegistryAuthId: Schema.optionalKey<Schema.String>;
    readonly dockerEntrypoint: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly dockerStartCmd: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly earned: Schema.optionalKey<Schema.Number>;
    readonly env: Schema.optionalKey<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>;
    readonly id: Schema.optionalKey<Schema.String>;
    readonly imageName: Schema.optionalKey<Schema.String>;
    readonly isPublic: Schema.optionalKey<Schema.Boolean>;
    readonly isRunpod: Schema.optionalKey<Schema.Boolean>;
    readonly isServerless: Schema.optionalKey<Schema.Boolean>;
    readonly name: Schema.optionalKey<Schema.String>;
    readonly ports: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly readme: Schema.optionalKey<Schema.String>;
    readonly runtimeInMin: Schema.optionalKey<Schema.Number>;
    readonly volumeInGb: Schema.optionalKey<Schema.Number>;
    readonly volumeMountPath: Schema.optionalKey<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export type CreateTemplateRequestJson = TemplateCreateInput;
export declare const CreateTemplateRequestJson: Schema.StructWithRest<Schema.Struct<{
    readonly category: Schema.optionalKey<Schema.Literals<readonly ["NVIDIA", "AMD", "CPU"]>>;
    readonly containerDiskInGb: Schema.optionalKey<Schema.Number>;
    readonly containerRegistryAuthId: Schema.optionalKey<Schema.String>;
    readonly dockerEntrypoint: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly dockerStartCmd: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly env: Schema.optionalKey<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>;
    readonly imageName: Schema.String;
    readonly isPublic: Schema.optionalKey<Schema.Boolean>;
    readonly isServerless: Schema.optionalKey<Schema.Boolean>;
    readonly name: Schema.String;
    readonly ports: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly readme: Schema.optionalKey<Schema.String>;
    readonly volumeInGb: Schema.optionalKey<Schema.Number>;
    readonly volumeMountPath: Schema.optionalKey<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type CreateTemplate200 = Template;
export declare const CreateTemplate200: Schema.StructWithRest<Schema.Struct<{
    readonly category: Schema.optionalKey<Schema.String>;
    readonly containerDiskInGb: Schema.optionalKey<Schema.Number>;
    readonly containerRegistryAuthId: Schema.optionalKey<Schema.String>;
    readonly dockerEntrypoint: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly dockerStartCmd: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly earned: Schema.optionalKey<Schema.Number>;
    readonly env: Schema.optionalKey<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>;
    readonly id: Schema.optionalKey<Schema.String>;
    readonly imageName: Schema.optionalKey<Schema.String>;
    readonly isPublic: Schema.optionalKey<Schema.Boolean>;
    readonly isRunpod: Schema.optionalKey<Schema.Boolean>;
    readonly isServerless: Schema.optionalKey<Schema.Boolean>;
    readonly name: Schema.optionalKey<Schema.String>;
    readonly ports: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly readme: Schema.optionalKey<Schema.String>;
    readonly runtimeInMin: Schema.optionalKey<Schema.Number>;
    readonly volumeInGb: Schema.optionalKey<Schema.Number>;
    readonly volumeMountPath: Schema.optionalKey<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type GetTemplateParams = {
    readonly "includeEndpointBoundTemplates"?: boolean;
    readonly "includePublicTemplates"?: boolean;
    readonly "includeRunpodTemplates"?: boolean;
};
export declare const GetTemplateParams: Schema.Struct<{
    readonly includeEndpointBoundTemplates: Schema.optionalKey<Schema.Boolean>;
    readonly includePublicTemplates: Schema.optionalKey<Schema.Boolean>;
    readonly includeRunpodTemplates: Schema.optionalKey<Schema.Boolean>;
}>;
export type GetTemplate200 = Template;
export declare const GetTemplate200: Schema.StructWithRest<Schema.Struct<{
    readonly category: Schema.optionalKey<Schema.String>;
    readonly containerDiskInGb: Schema.optionalKey<Schema.Number>;
    readonly containerRegistryAuthId: Schema.optionalKey<Schema.String>;
    readonly dockerEntrypoint: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly dockerStartCmd: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly earned: Schema.optionalKey<Schema.Number>;
    readonly env: Schema.optionalKey<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>;
    readonly id: Schema.optionalKey<Schema.String>;
    readonly imageName: Schema.optionalKey<Schema.String>;
    readonly isPublic: Schema.optionalKey<Schema.Boolean>;
    readonly isRunpod: Schema.optionalKey<Schema.Boolean>;
    readonly isServerless: Schema.optionalKey<Schema.Boolean>;
    readonly name: Schema.optionalKey<Schema.String>;
    readonly ports: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly readme: Schema.optionalKey<Schema.String>;
    readonly runtimeInMin: Schema.optionalKey<Schema.Number>;
    readonly volumeInGb: Schema.optionalKey<Schema.Number>;
    readonly volumeMountPath: Schema.optionalKey<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type UpdateTemplateRequestJson = TemplateUpdateInput;
export declare const UpdateTemplateRequestJson: Schema.StructWithRest<Schema.Struct<{
    readonly containerDiskInGb: Schema.optionalKey<Schema.Number>;
    readonly containerRegistryAuthId: Schema.optionalKey<Schema.String>;
    readonly dockerEntrypoint: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly dockerStartCmd: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly env: Schema.optionalKey<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>;
    readonly imageName: Schema.optionalKey<Schema.String>;
    readonly isPublic: Schema.optionalKey<Schema.Boolean>;
    readonly name: Schema.optionalKey<Schema.String>;
    readonly ports: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly readme: Schema.optionalKey<Schema.String>;
    readonly volumeInGb: Schema.optionalKey<Schema.Number>;
    readonly volumeMountPath: Schema.optionalKey<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type UpdateTemplate200 = Template;
export declare const UpdateTemplate200: Schema.StructWithRest<Schema.Struct<{
    readonly category: Schema.optionalKey<Schema.String>;
    readonly containerDiskInGb: Schema.optionalKey<Schema.Number>;
    readonly containerRegistryAuthId: Schema.optionalKey<Schema.String>;
    readonly dockerEntrypoint: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly dockerStartCmd: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly earned: Schema.optionalKey<Schema.Number>;
    readonly env: Schema.optionalKey<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>;
    readonly id: Schema.optionalKey<Schema.String>;
    readonly imageName: Schema.optionalKey<Schema.String>;
    readonly isPublic: Schema.optionalKey<Schema.Boolean>;
    readonly isRunpod: Schema.optionalKey<Schema.Boolean>;
    readonly isServerless: Schema.optionalKey<Schema.Boolean>;
    readonly name: Schema.optionalKey<Schema.String>;
    readonly ports: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly readme: Schema.optionalKey<Schema.String>;
    readonly runtimeInMin: Schema.optionalKey<Schema.Number>;
    readonly volumeInGb: Schema.optionalKey<Schema.Number>;
    readonly volumeMountPath: Schema.optionalKey<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type UpdateTemplatePostRequestJson = TemplateUpdateInput;
export declare const UpdateTemplatePostRequestJson: Schema.StructWithRest<Schema.Struct<{
    readonly containerDiskInGb: Schema.optionalKey<Schema.Number>;
    readonly containerRegistryAuthId: Schema.optionalKey<Schema.String>;
    readonly dockerEntrypoint: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly dockerStartCmd: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly env: Schema.optionalKey<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>;
    readonly imageName: Schema.optionalKey<Schema.String>;
    readonly isPublic: Schema.optionalKey<Schema.Boolean>;
    readonly name: Schema.optionalKey<Schema.String>;
    readonly ports: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly readme: Schema.optionalKey<Schema.String>;
    readonly volumeInGb: Schema.optionalKey<Schema.Number>;
    readonly volumeMountPath: Schema.optionalKey<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type UpdateTemplatePost200 = Template;
export declare const UpdateTemplatePost200: Schema.StructWithRest<Schema.Struct<{
    readonly category: Schema.optionalKey<Schema.String>;
    readonly containerDiskInGb: Schema.optionalKey<Schema.Number>;
    readonly containerRegistryAuthId: Schema.optionalKey<Schema.String>;
    readonly dockerEntrypoint: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly dockerStartCmd: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly earned: Schema.optionalKey<Schema.Number>;
    readonly env: Schema.optionalKey<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>;
    readonly id: Schema.optionalKey<Schema.String>;
    readonly imageName: Schema.optionalKey<Schema.String>;
    readonly isPublic: Schema.optionalKey<Schema.Boolean>;
    readonly isRunpod: Schema.optionalKey<Schema.Boolean>;
    readonly isServerless: Schema.optionalKey<Schema.Boolean>;
    readonly name: Schema.optionalKey<Schema.String>;
    readonly ports: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly readme: Schema.optionalKey<Schema.String>;
    readonly runtimeInMin: Schema.optionalKey<Schema.Number>;
    readonly volumeInGb: Schema.optionalKey<Schema.Number>;
    readonly volumeMountPath: Schema.optionalKey<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ListNetworkVolumes200 = NetworkVolumes;
export declare const ListNetworkVolumes200: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.optionalKey<Schema.String>;
    readonly name: Schema.optionalKey<Schema.String>;
    readonly size: Schema.optionalKey<Schema.Number>;
    readonly dataCenterId: Schema.optionalKey<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export type CreateNetworkVolumeRequestJson = NetworkVolumeCreateInput;
export declare const CreateNetworkVolumeRequestJson: Schema.StructWithRest<Schema.Struct<{
    readonly dataCenterId: Schema.String;
    readonly name: Schema.String;
    readonly size: Schema.Number;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type CreateNetworkVolume200 = NetworkVolume;
export declare const CreateNetworkVolume200: Schema.StructWithRest<Schema.Struct<{
    readonly dataCenterId: Schema.optionalKey<Schema.String>;
    readonly id: Schema.optionalKey<Schema.String>;
    readonly name: Schema.optionalKey<Schema.String>;
    readonly size: Schema.optionalKey<Schema.Number>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type GetNetworkVolume200 = NetworkVolume;
export declare const GetNetworkVolume200: Schema.StructWithRest<Schema.Struct<{
    readonly dataCenterId: Schema.optionalKey<Schema.String>;
    readonly id: Schema.optionalKey<Schema.String>;
    readonly name: Schema.optionalKey<Schema.String>;
    readonly size: Schema.optionalKey<Schema.Number>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type UpdateNetworkVolumeRequestJson = NetworkVolumeUpdateInput;
export declare const UpdateNetworkVolumeRequestJson: Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.optionalKey<Schema.String>;
    readonly size: Schema.optionalKey<Schema.Number>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type UpdateNetworkVolume200 = NetworkVolume;
export declare const UpdateNetworkVolume200: Schema.StructWithRest<Schema.Struct<{
    readonly dataCenterId: Schema.optionalKey<Schema.String>;
    readonly id: Schema.optionalKey<Schema.String>;
    readonly name: Schema.optionalKey<Schema.String>;
    readonly size: Schema.optionalKey<Schema.Number>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type UpdateNetworkVolumePostRequestJson = NetworkVolumeUpdateInput;
export declare const UpdateNetworkVolumePostRequestJson: Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.optionalKey<Schema.String>;
    readonly size: Schema.optionalKey<Schema.Number>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type UpdateNetworkVolumePost200 = NetworkVolume;
export declare const UpdateNetworkVolumePost200: Schema.StructWithRest<Schema.Struct<{
    readonly dataCenterId: Schema.optionalKey<Schema.String>;
    readonly id: Schema.optionalKey<Schema.String>;
    readonly name: Schema.optionalKey<Schema.String>;
    readonly size: Schema.optionalKey<Schema.Number>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ListContainerRegistryAuths200 = ContainerRegistryAuths;
export declare const ListContainerRegistryAuths200: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.optionalKey<Schema.String>;
    readonly name: Schema.optionalKey<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export type CreateContainerRegistryAuthRequestJson = ContainerRegistryAuthCreateInput;
export declare const CreateContainerRegistryAuthRequestJson: Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.String;
    readonly password: Schema.String;
    readonly username: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type CreateContainerRegistryAuth200 = ContainerRegistryAuth;
export declare const CreateContainerRegistryAuth200: Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.optionalKey<Schema.String>;
    readonly name: Schema.optionalKey<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type GetContainerRegistryAuth200 = ContainerRegistryAuth;
export declare const GetContainerRegistryAuth200: Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.optionalKey<Schema.String>;
    readonly name: Schema.optionalKey<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type PodBillingParams = {
    readonly "bucketSize"?: "hour" | "day" | "week" | "month" | "year";
    readonly "endTime"?: string;
    readonly "gpuTypeId"?: "AMD Instinct MI300X OAM" | "NVIDIA A100 80GB PCIe" | "NVIDIA A100-SXM4-40GB" | "NVIDIA A100-SXM4-80GB" | "NVIDIA A40" | "NVIDIA B200" | "NVIDIA B300 SXM6 AC" | "NVIDIA B300 SXM6 AC MIG 1g.34gb" | "NVIDIA GeForce RTX 3070" | "NVIDIA GeForce RTX 3080" | "NVIDIA GeForce RTX 3080 Ti" | "NVIDIA GeForce RTX 3090" | "NVIDIA GeForce RTX 3090 Ti" | "NVIDIA GeForce RTX 4070 Ti" | "NVIDIA GeForce RTX 4080" | "NVIDIA GeForce RTX 4080 SUPER" | "NVIDIA GeForce RTX 4090" | "NVIDIA GeForce RTX 5080" | "NVIDIA GeForce RTX 5090" | "NVIDIA H100 80GB HBM3" | "NVIDIA H100 NVL" | "NVIDIA H100 PCIe" | "NVIDIA H200" | "NVIDIA H200 NVL" | "NVIDIA L4" | "NVIDIA L40" | "NVIDIA L40S" | "NVIDIA RTX 2000 Ada Generation" | "NVIDIA RTX 4000 Ada Generation" | "NVIDIA RTX 4000 SFF Ada Generation" | "NVIDIA RTX 5000 Ada Generation" | "NVIDIA RTX 6000 Ada Generation" | "NVIDIA RTX A2000" | "NVIDIA RTX A4000" | "NVIDIA RTX A4500" | "NVIDIA RTX A5000" | "NVIDIA RTX A6000" | "NVIDIA RTX PRO 4000 Blackwell" | "NVIDIA RTX PRO 4500 Blackwell" | "NVIDIA RTX PRO 5000 Blackwell" | "NVIDIA RTX PRO 6000 Blackwell Max-Q Workstation Edition" | "NVIDIA RTX PRO 6000 Blackwell Server Edition" | "NVIDIA RTX PRO 6000 Blackwell Workstation Edition" | "Tesla V100-PCIE-16GB" | "Tesla V100-SXM2-16GB";
    readonly "grouping"?: "podId" | "gpuTypeId";
    readonly "podId"?: string;
    readonly "startTime"?: string;
};
export declare const PodBillingParams: Schema.Struct<{
    readonly bucketSize: Schema.optionalKey<Schema.Literals<readonly ["hour", "day", "week", "month", "year"]>>;
    readonly endTime: Schema.optionalKey<Schema.String>;
    readonly gpuTypeId: Schema.optionalKey<Schema.Literals<readonly ["AMD Instinct MI300X OAM", "NVIDIA A100 80GB PCIe", "NVIDIA A100-SXM4-40GB", "NVIDIA A100-SXM4-80GB", "NVIDIA A40", "NVIDIA B200", "NVIDIA B300 SXM6 AC", "NVIDIA B300 SXM6 AC MIG 1g.34gb", "NVIDIA GeForce RTX 3070", "NVIDIA GeForce RTX 3080", "NVIDIA GeForce RTX 3080 Ti", "NVIDIA GeForce RTX 3090", "NVIDIA GeForce RTX 3090 Ti", "NVIDIA GeForce RTX 4070 Ti", "NVIDIA GeForce RTX 4080", "NVIDIA GeForce RTX 4080 SUPER", "NVIDIA GeForce RTX 4090", "NVIDIA GeForce RTX 5080", "NVIDIA GeForce RTX 5090", "NVIDIA H100 80GB HBM3", "NVIDIA H100 NVL", "NVIDIA H100 PCIe", "NVIDIA H200", "NVIDIA H200 NVL", "NVIDIA L4", "NVIDIA L40", "NVIDIA L40S", "NVIDIA RTX 2000 Ada Generation", "NVIDIA RTX 4000 Ada Generation", "NVIDIA RTX 4000 SFF Ada Generation", "NVIDIA RTX 5000 Ada Generation", "NVIDIA RTX 6000 Ada Generation", "NVIDIA RTX A2000", "NVIDIA RTX A4000", "NVIDIA RTX A4500", "NVIDIA RTX A5000", "NVIDIA RTX A6000", "NVIDIA RTX PRO 4000 Blackwell", "NVIDIA RTX PRO 4500 Blackwell", "NVIDIA RTX PRO 5000 Blackwell", "NVIDIA RTX PRO 6000 Blackwell Max-Q Workstation Edition", "NVIDIA RTX PRO 6000 Blackwell Server Edition", "NVIDIA RTX PRO 6000 Blackwell Workstation Edition", "Tesla V100-PCIE-16GB", "Tesla V100-SXM2-16GB"]>>;
    readonly grouping: Schema.optionalKey<Schema.Literals<readonly ["podId", "gpuTypeId"]>>;
    readonly podId: Schema.optionalKey<Schema.String>;
    readonly startTime: Schema.optionalKey<Schema.String>;
}>;
export type PodBilling200 = BillingRecords;
export declare const PodBilling200: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly amount: Schema.optionalKey<Schema.Number>;
    readonly diskSpaceBilledGb: Schema.optionalKey<Schema.Number>;
    readonly endpointId: Schema.optionalKey<Schema.String>;
    readonly gpuTypeId: Schema.optionalKey<Schema.String>;
    readonly podId: Schema.optionalKey<Schema.String>;
    readonly time: Schema.optionalKey<Schema.String>;
    readonly timeBilledMs: Schema.optionalKey<Schema.Number>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export type EndpointBillingParams = {
    readonly "bucketSize"?: "hour" | "day" | "week" | "month" | "year";
    readonly "dataCenterId"?: ReadonlyArray<"EU-RO-1" | "CA-MTL-1" | "EU-SE-1" | "US-IL-1" | "EUR-IS-1" | "EU-CZ-1" | "US-TX-3" | "EUR-IS-2" | "US-KS-2" | "US-GA-2" | "US-WA-1" | "US-TX-1" | "CA-MTL-3" | "EU-NL-1" | "US-TX-4" | "US-CA-2" | "US-NC-1" | "OC-AU-1" | "US-DE-1" | "EUR-IS-3" | "CA-MTL-2" | "AP-JP-1" | "EUR-NO-1" | "EU-FR-1" | "US-KS-3" | "US-GA-1" | "AP-IN-1" | "US-MD-1">;
    readonly "endpointId"?: string;
    readonly "endTime"?: string;
    readonly "gpuTypeId"?: ReadonlyArray<"AMD Instinct MI300X OAM" | "NVIDIA A100 80GB PCIe" | "NVIDIA A100-SXM4-40GB" | "NVIDIA A100-SXM4-80GB" | "NVIDIA A40" | "NVIDIA B200" | "NVIDIA B300 SXM6 AC" | "NVIDIA B300 SXM6 AC MIG 1g.34gb" | "NVIDIA GeForce RTX 3070" | "NVIDIA GeForce RTX 3080" | "NVIDIA GeForce RTX 3080 Ti" | "NVIDIA GeForce RTX 3090" | "NVIDIA GeForce RTX 3090 Ti" | "NVIDIA GeForce RTX 4070 Ti" | "NVIDIA GeForce RTX 4080" | "NVIDIA GeForce RTX 4080 SUPER" | "NVIDIA GeForce RTX 4090" | "NVIDIA GeForce RTX 5080" | "NVIDIA GeForce RTX 5090" | "NVIDIA H100 80GB HBM3" | "NVIDIA H100 NVL" | "NVIDIA H100 PCIe" | "NVIDIA H200" | "NVIDIA H200 NVL" | "NVIDIA L4" | "NVIDIA L40" | "NVIDIA L40S" | "NVIDIA RTX 2000 Ada Generation" | "NVIDIA RTX 4000 Ada Generation" | "NVIDIA RTX 4000 SFF Ada Generation" | "NVIDIA RTX 5000 Ada Generation" | "NVIDIA RTX 6000 Ada Generation" | "NVIDIA RTX A2000" | "NVIDIA RTX A4000" | "NVIDIA RTX A4500" | "NVIDIA RTX A5000" | "NVIDIA RTX A6000" | "NVIDIA RTX PRO 4000 Blackwell" | "NVIDIA RTX PRO 4500 Blackwell" | "NVIDIA RTX PRO 5000 Blackwell" | "NVIDIA RTX PRO 6000 Blackwell Max-Q Workstation Edition" | "NVIDIA RTX PRO 6000 Blackwell Server Edition" | "NVIDIA RTX PRO 6000 Blackwell Workstation Edition" | "Tesla V100-PCIE-16GB" | "Tesla V100-SXM2-16GB">;
    readonly "grouping"?: "endpointId" | "podId" | "gpuTypeId";
    readonly "imageName"?: string;
    readonly "startTime"?: string;
    readonly "templateId"?: string;
};
export declare const EndpointBillingParams: Schema.Struct<{
    readonly bucketSize: Schema.optionalKey<Schema.Literals<readonly ["hour", "day", "week", "month", "year"]>>;
    readonly dataCenterId: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["EU-RO-1", "CA-MTL-1", "EU-SE-1", "US-IL-1", "EUR-IS-1", "EU-CZ-1", "US-TX-3", "EUR-IS-2", "US-KS-2", "US-GA-2", "US-WA-1", "US-TX-1", "CA-MTL-3", "EU-NL-1", "US-TX-4", "US-CA-2", "US-NC-1", "OC-AU-1", "US-DE-1", "EUR-IS-3", "CA-MTL-2", "AP-JP-1", "EUR-NO-1", "EU-FR-1", "US-KS-3", "US-GA-1", "AP-IN-1", "US-MD-1"]>>>;
    readonly endpointId: Schema.optionalKey<Schema.String>;
    readonly endTime: Schema.optionalKey<Schema.String>;
    readonly gpuTypeId: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["AMD Instinct MI300X OAM", "NVIDIA A100 80GB PCIe", "NVIDIA A100-SXM4-40GB", "NVIDIA A100-SXM4-80GB", "NVIDIA A40", "NVIDIA B200", "NVIDIA B300 SXM6 AC", "NVIDIA B300 SXM6 AC MIG 1g.34gb", "NVIDIA GeForce RTX 3070", "NVIDIA GeForce RTX 3080", "NVIDIA GeForce RTX 3080 Ti", "NVIDIA GeForce RTX 3090", "NVIDIA GeForce RTX 3090 Ti", "NVIDIA GeForce RTX 4070 Ti", "NVIDIA GeForce RTX 4080", "NVIDIA GeForce RTX 4080 SUPER", "NVIDIA GeForce RTX 4090", "NVIDIA GeForce RTX 5080", "NVIDIA GeForce RTX 5090", "NVIDIA H100 80GB HBM3", "NVIDIA H100 NVL", "NVIDIA H100 PCIe", "NVIDIA H200", "NVIDIA H200 NVL", "NVIDIA L4", "NVIDIA L40", "NVIDIA L40S", "NVIDIA RTX 2000 Ada Generation", "NVIDIA RTX 4000 Ada Generation", "NVIDIA RTX 4000 SFF Ada Generation", "NVIDIA RTX 5000 Ada Generation", "NVIDIA RTX 6000 Ada Generation", "NVIDIA RTX A2000", "NVIDIA RTX A4000", "NVIDIA RTX A4500", "NVIDIA RTX A5000", "NVIDIA RTX A6000", "NVIDIA RTX PRO 4000 Blackwell", "NVIDIA RTX PRO 4500 Blackwell", "NVIDIA RTX PRO 5000 Blackwell", "NVIDIA RTX PRO 6000 Blackwell Max-Q Workstation Edition", "NVIDIA RTX PRO 6000 Blackwell Server Edition", "NVIDIA RTX PRO 6000 Blackwell Workstation Edition", "Tesla V100-PCIE-16GB", "Tesla V100-SXM2-16GB"]>>>;
    readonly grouping: Schema.optionalKey<Schema.Literals<readonly ["endpointId", "podId", "gpuTypeId"]>>;
    readonly imageName: Schema.optionalKey<Schema.String>;
    readonly startTime: Schema.optionalKey<Schema.String>;
    readonly templateId: Schema.optionalKey<Schema.String>;
}>;
export type EndpointBilling200 = BillingRecords;
export declare const EndpointBilling200: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly amount: Schema.optionalKey<Schema.Number>;
    readonly diskSpaceBilledGb: Schema.optionalKey<Schema.Number>;
    readonly endpointId: Schema.optionalKey<Schema.String>;
    readonly gpuTypeId: Schema.optionalKey<Schema.String>;
    readonly podId: Schema.optionalKey<Schema.String>;
    readonly time: Schema.optionalKey<Schema.String>;
    readonly timeBilledMs: Schema.optionalKey<Schema.Number>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export type NetworkVolumeBillingParams = {
    readonly "bucketSize"?: "hour" | "day" | "week" | "month" | "year";
    readonly "endTime"?: string;
    readonly "startTime"?: string;
};
export declare const NetworkVolumeBillingParams: Schema.Struct<{
    readonly bucketSize: Schema.optionalKey<Schema.Literals<readonly ["hour", "day", "week", "month", "year"]>>;
    readonly endTime: Schema.optionalKey<Schema.String>;
    readonly startTime: Schema.optionalKey<Schema.String>;
}>;
export type NetworkVolumeBilling200 = NetworkVolumeBillingRecords;
export declare const NetworkVolumeBilling200: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly amount: Schema.optionalKey<Schema.Number>;
    readonly diskSpaceBilledGb: Schema.optionalKey<Schema.Number>;
    readonly highPerformanceStorageAmount: Schema.optionalKey<Schema.Number>;
    readonly highPerformanceStorageDiskSpaceBilledGb: Schema.optionalKey<Schema.Number>;
    readonly time: Schema.optionalKey<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export interface OperationConfig {
    /**
     * Whether or not the response should be included in the value returned from
     * an operation.
     *
     * If set to `true`, a tuple of `[A, HttpClientResponse]` will be returned,
     * where `A` is the success type of the operation.
     *
     * If set to `false`, only the success type of the operation will be returned.
     */
    readonly includeResponse?: boolean | undefined;
}
/**
 * A utility type which optionally includes the response in the return result
 * of an operation based upon the value of the `includeResponse` configuration
 * option.
 */
export type WithOptionalResponse<A, Config extends OperationConfig> = Config extends {
    readonly includeResponse: true;
} ? [A, HttpClientResponse.HttpClientResponse] : A;
export declare const make: (httpClient: HttpClient.HttpClient, options?: {
    readonly transformClient?: ((client: HttpClient.HttpClient) => Effect.Effect<HttpClient.HttpClient>) | undefined;
}) => Runpod;
export interface Runpod {
    readonly httpClient: HttpClient.HttpClient;
    /**
  * The OpenAPI 3.0 schema.
  */
    readonly "GetOpenAPI": <Config extends OperationConfig>(options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof GetOpenAPI200.Type, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Interactive API documentation.
  */
    readonly "GetDocs": <Config extends OperationConfig>(options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined>>;
    /**
  * Returns a list of Pods.
  */
    readonly "ListPods": <Config extends OperationConfig>(options: {
        readonly params?: typeof ListPodsParams.Encoded | undefined;
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof ListPods200.Type, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined> | RunpodError<"404", undefined>>;
    /**
  * Creates a new [Pod](#/components/schemas/Pod) and optionally deploys it.
  */
    readonly "CreatePod": <Config extends OperationConfig>(options: {
        readonly payload: typeof CreatePodRequestJson.Encoded;
        readonly config?: Config | undefined;
    }) => Effect.Effect<WithOptionalResponse<typeof CreatePod201.Type, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined>>;
    /**
  * Returns a single Pod.
  */
    readonly "GetPod": <Config extends OperationConfig>(podId: string, options: {
        readonly params?: typeof GetPodParams.Encoded | undefined;
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof GetPod200.Type, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined> | RunpodError<"404", undefined>>;
    /**
  * Delete a Pod.
  */
    readonly "DeletePod": <Config extends OperationConfig>(podId: string, options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined> | RunpodError<"401", undefined>>;
    /**
  * Update a Pod, potentially triggering a reset.
  */
    readonly "UpdatePod": <Config extends OperationConfig>(podId: string, options: {
        readonly payload: typeof UpdatePodRequestJson.Encoded;
        readonly config?: Config | undefined;
    }) => Effect.Effect<WithOptionalResponse<typeof UpdatePod200.Type, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined>>;
    /**
  * Update a Pod - synonym for PATCH /pods/{podId}.
  */
    readonly "UpdatePodPost": <Config extends OperationConfig>(podId: string, options: {
        readonly payload: typeof UpdatePodPostRequestJson.Encoded;
        readonly config?: Config | undefined;
    }) => Effect.Effect<WithOptionalResponse<typeof UpdatePodPost200.Type, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined>>;
    /**
  * Start or resume a Pod.
  */
    readonly "StartPod": <Config extends OperationConfig>(podId: string, options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined> | RunpodError<"401", undefined>>;
    /**
  * Stop a Pod.
  */
    readonly "StopPod": <Config extends OperationConfig>(podId: string, options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined> | RunpodError<"401", undefined>>;
    /**
  * Reset a Pod.
  */
    readonly "ResetPod": <Config extends OperationConfig>(podId: string, options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined> | RunpodError<"401", undefined>>;
    /**
  * Restart a Pod.
  */
    readonly "RestartPod": <Config extends OperationConfig>(podId: string, options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined> | RunpodError<"401", undefined>>;
    /**
  * Returns a list of endpoints.
  */
    readonly "ListEndpoints": <Config extends OperationConfig>(options: {
        readonly params?: typeof ListEndpointsParams.Encoded | undefined;
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof ListEndpoints200.Type, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined> | RunpodError<"404", undefined>>;
    /**
  * Create a new endpoint.
  */
    readonly "CreateEndpoint": <Config extends OperationConfig>(options: {
        readonly payload: typeof CreateEndpointRequestJson.Encoded;
        readonly config?: Config | undefined;
    }) => Effect.Effect<WithOptionalResponse<typeof CreateEndpoint200.Type, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined>>;
    /**
  * Returns a single endpoint.
  */
    readonly "GetEndpoint": <Config extends OperationConfig>(endpointId: string, options: {
        readonly params?: typeof GetEndpointParams.Encoded | undefined;
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof GetEndpoint200.Type, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined> | RunpodError<"404", undefined>>;
    /**
  * Delete an endpoint.
  */
    readonly "DeleteEndpoint": <Config extends OperationConfig>(endpointId: string, options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined> | RunpodError<"401", undefined>>;
    /**
  * Update an endpoint.
  */
    readonly "UpdateEndpoint": <Config extends OperationConfig>(endpointId: string, options: {
        readonly payload: typeof UpdateEndpointRequestJson.Encoded;
        readonly config?: Config | undefined;
    }) => Effect.Effect<WithOptionalResponse<typeof UpdateEndpoint200.Type, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined>>;
    /**
  * Update an endpoint - synonym for PATCH /endpoints/{endpointId}.
  */
    readonly "UpdateEndpointPost": <Config extends OperationConfig>(endpointId: string, options: {
        readonly payload: typeof UpdateEndpointPostRequestJson.Encoded;
        readonly config?: Config | undefined;
    }) => Effect.Effect<WithOptionalResponse<typeof UpdateEndpointPost200.Type, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined>>;
    /**
  * Returns a list of templates.
  */
    readonly "ListTemplates": <Config extends OperationConfig>(options: {
        readonly params?: typeof ListTemplatesParams.Encoded | undefined;
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof ListTemplates200.Type, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined> | RunpodError<"404", undefined>>;
    /**
  * Create a new template.
  */
    readonly "CreateTemplate": <Config extends OperationConfig>(options: {
        readonly payload: typeof CreateTemplateRequestJson.Encoded;
        readonly config?: Config | undefined;
    }) => Effect.Effect<WithOptionalResponse<typeof CreateTemplate200.Type, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined>>;
    /**
  * Returns a single template.
  */
    readonly "GetTemplate": <Config extends OperationConfig>(templateId: string, options: {
        readonly params?: typeof GetTemplateParams.Encoded | undefined;
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof GetTemplate200.Type, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined> | RunpodError<"404", undefined>>;
    /**
  * Delete a template.
  */
    readonly "DeleteTemplate": <Config extends OperationConfig>(templateId: string, options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined> | RunpodError<"401", undefined>>;
    /**
  * Update a template.
  */
    readonly "UpdateTemplate": <Config extends OperationConfig>(templateId: string, options: {
        readonly payload: typeof UpdateTemplateRequestJson.Encoded;
        readonly config?: Config | undefined;
    }) => Effect.Effect<WithOptionalResponse<typeof UpdateTemplate200.Type, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined>>;
    /**
  * Update a template - synonym for PATCH /templates/{templateId}.
  */
    readonly "UpdateTemplatePost": <Config extends OperationConfig>(templateId: string, options: {
        readonly payload: typeof UpdateTemplatePostRequestJson.Encoded;
        readonly config?: Config | undefined;
    }) => Effect.Effect<WithOptionalResponse<typeof UpdateTemplatePost200.Type, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined>>;
    /**
  * Returns a list of network volumes.
  */
    readonly "ListNetworkVolumes": <Config extends OperationConfig>(options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof ListNetworkVolumes200.Type, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined> | RunpodError<"404", undefined>>;
    /**
  * Create a new network volume.
  */
    readonly "CreateNetworkVolume": <Config extends OperationConfig>(options: {
        readonly payload: typeof CreateNetworkVolumeRequestJson.Encoded;
        readonly config?: Config | undefined;
    }) => Effect.Effect<WithOptionalResponse<typeof CreateNetworkVolume200.Type, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined>>;
    /**
  * Returns a single network volume.
  */
    readonly "GetNetworkVolume": <Config extends OperationConfig>(networkVolumeId: string, options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof GetNetworkVolume200.Type, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined> | RunpodError<"404", undefined>>;
    /**
  * Delete a network volume.
  */
    readonly "DeleteNetworkVolume": <Config extends OperationConfig>(networkVolumeId: string, options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined> | RunpodError<"401", undefined>>;
    /**
  * Update a network volume.
  */
    readonly "UpdateNetworkVolume": <Config extends OperationConfig>(networkVolumeId: string, options: {
        readonly payload: typeof UpdateNetworkVolumeRequestJson.Encoded;
        readonly config?: Config | undefined;
    }) => Effect.Effect<WithOptionalResponse<typeof UpdateNetworkVolume200.Type, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined>>;
    /**
  * Update a network volume - synonym for PATCH /networkvolumes/{networkVolumeId}.
  */
    readonly "UpdateNetworkVolumePost": <Config extends OperationConfig>(networkVolumeId: string, options: {
        readonly payload: typeof UpdateNetworkVolumePostRequestJson.Encoded;
        readonly config?: Config | undefined;
    }) => Effect.Effect<WithOptionalResponse<typeof UpdateNetworkVolumePost200.Type, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined>>;
    /**
  * Returns a list of container registry auths.
  */
    readonly "ListContainerRegistryAuths": <Config extends OperationConfig>(options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof ListContainerRegistryAuths200.Type, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined> | RunpodError<"404", undefined>>;
    /**
  * Create a new container registry auth.
  */
    readonly "CreateContainerRegistryAuth": <Config extends OperationConfig>(options: {
        readonly payload: typeof CreateContainerRegistryAuthRequestJson.Encoded;
        readonly config?: Config | undefined;
    }) => Effect.Effect<WithOptionalResponse<typeof CreateContainerRegistryAuth200.Type, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined>>;
    /**
  * Returns a single container registry auth.
  */
    readonly "GetContainerRegistryAuth": <Config extends OperationConfig>(containerRegistryAuthId: string, options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof GetContainerRegistryAuth200.Type, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined> | RunpodError<"404", undefined>>;
    /**
  * Delete a container registry auth.
  */
    readonly "DeleteContainerRegistryAuth": <Config extends OperationConfig>(containerRegistryAuthId: string, options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined> | RunpodError<"401", undefined>>;
    /**
  * Retrieve billing information about your Pods.
  */
    readonly "PodBilling": <Config extends OperationConfig>(options: {
        readonly params?: typeof PodBillingParams.Encoded | undefined;
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof PodBilling200.Type, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Retrieve billing information about your Serverless endpoints.
  */
    readonly "EndpointBilling": <Config extends OperationConfig>(options: {
        readonly params?: typeof EndpointBillingParams.Encoded | undefined;
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof EndpointBilling200.Type, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Retrieve billing information about your network volumes.
  */
    readonly "NetworkVolumeBilling": <Config extends OperationConfig>(options: {
        readonly params?: typeof NetworkVolumeBillingParams.Encoded | undefined;
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof NetworkVolumeBilling200.Type, Config>, HttpClientError.HttpClientError | SchemaError>;
}
export interface RunpodError<Tag extends string, E> {
    readonly _tag: Tag;
    readonly request: HttpClientRequest.HttpClientRequest;
    readonly response: HttpClientResponse.HttpClientResponse;
    readonly cause: E;
}
export declare const RunpodError: <Tag extends string, E>(tag: Tag, cause: E, response: HttpClientResponse.HttpClientResponse) => RunpodError<Tag, E>;
