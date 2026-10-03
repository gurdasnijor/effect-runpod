import * as Data from "effect/Data"
import * as Effect from "effect/Effect"
import type { SchemaError } from "effect/Schema"
import * as Schema from "effect/Schema"
import type * as HttpClient from "effect/unstable/http/HttpClient"
import * as HttpClientError from "effect/unstable/http/HttpClientError"
import * as HttpClientRequest from "effect/unstable/http/HttpClientRequest"
import * as HttpClientResponse from "effect/unstable/http/HttpClientResponse"
// non-recursive definitions
export type SavingsPlan = { readonly "costPerHr"?: number, readonly "endTime"?: string, readonly "gpuTypeId"?: string, readonly "id"?: string, readonly "podId"?: string, readonly "startTime"?: string } & { readonly [x: string]: Schema.Json }
export const SavingsPlan = Schema.StructWithRest(Schema.Struct({ "costPerHr": Schema.optionalKey(Schema.Number.annotate({ "examples": [0.21] }).check(Schema.isFinite().annotate({ "expected": "a finite number" }))), "endTime": Schema.optionalKey(Schema.String.annotate({ "examples": ["2024-07-12T19:14:40.144Z"] })), "gpuTypeId": Schema.optionalKey(Schema.String.annotate({ "examples": ["NVIDIA GeForce RTX 4090"] })), "id": Schema.optionalKey(Schema.String.annotate({ "examples": ["clkrb4qci0000mb09c7sualzo"] })), "podId": Schema.optionalKey(Schema.String.annotate({ "examples": ["xedezhzb9la3ye"] })), "startTime": Schema.optionalKey(Schema.String.annotate({ "examples": ["2024-05-12T19:14:40.144Z"] })) }), [Schema.Record(Schema.String, Schema.Json.annotate({ "expected": "JSON value" }))]).annotate({ "identifier": "SavingsPlan" })
export type PodCreateInput = { readonly "allowedCudaVersions"?: ReadonlyArray<"13.0" | "12.9" | "12.8" | "12.7" | "12.6" | "12.5" | "12.4" | "12.3" | "12.2" | "12.1" | "12.0" | "11.8">, readonly "cloudType"?: "SECURE" | "COMMUNITY", readonly "computeType"?: "GPU" | "CPU", readonly "containerDiskInGb"?: number | null, readonly "containerRegistryAuthId"?: string, readonly "countryCodes"?: ReadonlyArray<string>, readonly "cpuFlavorIds"?: ReadonlyArray<"cpu3c" | "cpu3g" | "cpu3m" | "cpu5c" | "cpu5g" | "cpu5m">, readonly "cpuFlavorPriority"?: "availability" | "custom", readonly "dataCenterIds"?: ReadonlyArray<"EU-RO-1" | "CA-MTL-1" | "EU-SE-1" | "US-IL-1" | "EUR-IS-1" | "EU-CZ-1" | "US-TX-3" | "EUR-IS-2" | "US-KS-2" | "US-GA-2" | "US-WA-1" | "US-TX-1" | "CA-MTL-3" | "EU-NL-1" | "US-TX-4" | "US-CA-2" | "US-NC-1" | "OC-AU-1" | "US-DE-1" | "EUR-IS-3" | "CA-MTL-2" | "AP-JP-1" | "EUR-NO-1" | "EU-FR-1" | "US-KS-3" | "US-GA-1" | "AP-IN-1" | "US-MD-1">, readonly "dataCenterPriority"?: "availability" | "custom", readonly "dockerEntrypoint"?: ReadonlyArray<string>, readonly "dockerStartCmd"?: ReadonlyArray<string>, readonly "env"?: { readonly [x: string]: Schema.Json }, readonly "globalNetworking"?: boolean, readonly "gpuCount"?: number, readonly "gpuTypeIds"?: ReadonlyArray<"AMD Instinct MI300X OAM" | "NVIDIA A100 80GB PCIe" | "NVIDIA A100-SXM4-40GB" | "NVIDIA A100-SXM4-80GB" | "NVIDIA A40" | "NVIDIA B200" | "NVIDIA B300 SXM6 AC" | "NVIDIA B300 SXM6 AC MIG 1g.34gb" | "NVIDIA GeForce RTX 3070" | "NVIDIA GeForce RTX 3080" | "NVIDIA GeForce RTX 3080 Ti" | "NVIDIA GeForce RTX 3090" | "NVIDIA GeForce RTX 3090 Ti" | "NVIDIA GeForce RTX 4070 Ti" | "NVIDIA GeForce RTX 4080" | "NVIDIA GeForce RTX 4080 SUPER" | "NVIDIA GeForce RTX 4090" | "NVIDIA GeForce RTX 5080" | "NVIDIA GeForce RTX 5090" | "NVIDIA H100 80GB HBM3" | "NVIDIA H100 NVL" | "NVIDIA H100 PCIe" | "NVIDIA H200" | "NVIDIA H200 NVL" | "NVIDIA L4" | "NVIDIA L40" | "NVIDIA L40S" | "NVIDIA RTX 2000 Ada Generation" | "NVIDIA RTX 4000 Ada Generation" | "NVIDIA RTX 4000 SFF Ada Generation" | "NVIDIA RTX 5000 Ada Generation" | "NVIDIA RTX 6000 Ada Generation" | "NVIDIA RTX A2000" | "NVIDIA RTX A4000" | "NVIDIA RTX A4500" | "NVIDIA RTX A5000" | "NVIDIA RTX A6000" | "NVIDIA RTX PRO 4000 Blackwell" | "NVIDIA RTX PRO 4500 Blackwell" | "NVIDIA RTX PRO 5000 Blackwell" | "NVIDIA RTX PRO 6000 Blackwell Max-Q Workstation Edition" | "NVIDIA RTX PRO 6000 Blackwell Server Edition" | "NVIDIA RTX PRO 6000 Blackwell Workstation Edition" | "Tesla V100-PCIE-16GB" | "Tesla V100-SXM2-16GB">, readonly "gpuTypePriority"?: "availability" | "custom", readonly "imageName"?: string, readonly "interruptible"?: boolean, readonly "locked"?: boolean, readonly "minDiskBandwidthMBps"?: number, readonly "minDownloadMbps"?: number, readonly "minRAMPerGPU"?: number, readonly "minUploadMbps"?: number, readonly "minVCPUPerGPU"?: number, readonly "name"?: string, readonly "networkVolumeId"?: string, readonly "ports"?: ReadonlyArray<string>, readonly "supportPublicIp"?: boolean, readonly "templateId"?: string, readonly "vcpuCount"?: number, readonly "volumeInGb"?: number | null, readonly "volumeMountPath"?: string } & { readonly [x: string]: Schema.Json }
export const PodCreateInput = Schema.StructWithRest(Schema.Struct({ "allowedCudaVersions": Schema.optionalKey(Schema.Array(Schema.Literals(["13.0", "12.9", "12.8", "12.7", "12.6", "12.5", "12.4", "12.3", "12.2", "12.1", "12.0", "11.8"])).annotate({ "description": "If the created Pod is a GPU Pod, a list of acceptable CUDA versions on the [Pod](#/components/schemas/Pod). If not set, any CUDA version is acceptable." })), "cloudType": Schema.optionalKey(Schema.Literals(["SECURE", "COMMUNITY"]).annotate({ "description": "Set to SECURE to create the Pod in Secure Cloud. Set to COMMUNITY to create the Pod in Community Cloud. To determine which one suits your needs, see https://docs.runpod.io/pods/overview#pod-types.", "default": "SECURE" })), "computeType": Schema.optionalKey(Schema.Literals(["GPU", "CPU"]).annotate({ "description": "Set to GPU to create a GPU Pod. Set to CPU to create a CPU Pod. If set to CPU, the Pod will not have a GPU attached and properties related to GPUs such as gpuTypeIds will be ignored. If set to GPU, the Pod will have a GPU attached and properties related to CPUs such as cpuFlavorIds will be ignored.", "default": "GPU" })), "containerDiskInGb": Schema.optionalKey(Schema.Union([Schema.Number.check(Schema.isInt().annotate({ "expected": "an integer" })), Schema.Null]).annotate({ "description": "The amount of disk space, in gigabytes (GB), to allocate on the container disk for the created Pod. The data on the container disk is wiped when the Pod restarts. To persist data across Pod restarts, set volumeInGb to configure the Pod network volume.", "default": 50 })), "containerRegistryAuthId": Schema.optionalKey(Schema.String.annotate({ "description": "Registry credentials ID.", "examples": ["clzdaifot0001l90809257ynb"] })), "countryCodes": Schema.optionalKey(Schema.Array(Schema.String).annotate({ "description": "A list of country codes where the created Pod can be located. If not set, the Pod can be located in any country." })), "cpuFlavorIds": Schema.optionalKey(Schema.Array(Schema.Literals(["cpu3c", "cpu3g", "cpu3m", "cpu5c", "cpu5g", "cpu5m"])).annotate({ "description": "If the created Pod is a CPU Pod, a list of Runpod CPU flavors which can be attached to the Pod. The order of the list determines the order to rent CPU flavors. See cpuFlavorPriority for how the order of the list affects Pod creation." })), "cpuFlavorPriority": Schema.optionalKey(Schema.Literals(["availability", "custom"]).annotate({ "description": "If the created Pod is a CPU Pod, set to availability to respond to current CPU flavor availability. Set to custom to always try to rent CPU flavors in the order specified in cpuFlavorIds.", "default": "availability" })), "dataCenterIds": Schema.optionalKey(Schema.Array(Schema.Literals(["EU-RO-1", "CA-MTL-1", "EU-SE-1", "US-IL-1", "EUR-IS-1", "EU-CZ-1", "US-TX-3", "EUR-IS-2", "US-KS-2", "US-GA-2", "US-WA-1", "US-TX-1", "CA-MTL-3", "EU-NL-1", "US-TX-4", "US-CA-2", "US-NC-1", "OC-AU-1", "US-DE-1", "EUR-IS-3", "CA-MTL-2", "AP-JP-1", "EUR-NO-1", "EU-FR-1", "US-KS-3", "US-GA-1", "AP-IN-1", "US-MD-1"])).annotate({ "description": "A list of Runpod data center IDs where the created Pod can be located. See `dataCenterPriority` for information on how the order of the list affects Pod creation.", "default": ["EU-RO-1", "CA-MTL-1", "EU-SE-1", "US-IL-1", "EUR-IS-1", "EU-CZ-1", "US-TX-3", "EUR-IS-2", "US-KS-2", "US-GA-2", "US-WA-1", "US-TX-1", "CA-MTL-3", "EU-NL-1", "US-TX-4", "US-CA-2", "US-NC-1", "OC-AU-1", "US-DE-1", "EUR-IS-3", "CA-MTL-2", "AP-JP-1", "EUR-NO-1", "EU-FR-1", "US-KS-3", "US-GA-1", "AP-IN-1", "US-MD-1"], "examples": [["EU-RO-1", "CA-MTL-1"]] })), "dataCenterPriority": Schema.optionalKey(Schema.Literals(["availability", "custom"]).annotate({ "description": "Set to availability to respond to current machine availability. Set to custom to always try to rent machines from data centers in the order specified in dataCenterIds.", "default": "availability" })), "dockerEntrypoint": Schema.optionalKey(Schema.Array(Schema.String).annotate({ "description": "If specified, overrides the ENTRYPOINT for the Docker image run on the created Pod. If [], uses the ENTRYPOINT defined in the image.", "default": [] })), "dockerStartCmd": Schema.optionalKey(Schema.Array(Schema.String).annotate({ "description": "If specified, overrides the start CMD for the Docker image run on the created Pod. If [], uses the start CMD defined in the image.", "default": [] })), "env": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json.annotate({ "expected": "JSON value" })).annotate({ "default": {}, "examples": [{ "ENV_VAR": "value" }] })), "globalNetworking": Schema.optionalKey(Schema.Boolean.annotate({ "description": "Set to true to enable global networking for the created Pod. Currently only available for On-Demand GPU Pods on some Secure Cloud data centers.", "default": false, "examples": [true] })), "gpuCount": Schema.optionalKey(Schema.Number.annotate({ "description": "If the created Pod is a GPU Pod, the number of GPUs attached to the created Pod.", "default": 1 }).check(Schema.isInt().annotate({ "expected": "an integer" })).check(Schema.isGreaterThanOrEqualTo(1).annotate({ "expected": "a value greater than or equal to 1" }))), "gpuTypeIds": Schema.optionalKey(Schema.Array(Schema.Literals(["AMD Instinct MI300X OAM", "NVIDIA A100 80GB PCIe", "NVIDIA A100-SXM4-40GB", "NVIDIA A100-SXM4-80GB", "NVIDIA A40", "NVIDIA B200", "NVIDIA B300 SXM6 AC", "NVIDIA B300 SXM6 AC MIG 1g.34gb", "NVIDIA GeForce RTX 3070", "NVIDIA GeForce RTX 3080", "NVIDIA GeForce RTX 3080 Ti", "NVIDIA GeForce RTX 3090", "NVIDIA GeForce RTX 3090 Ti", "NVIDIA GeForce RTX 4070 Ti", "NVIDIA GeForce RTX 4080", "NVIDIA GeForce RTX 4080 SUPER", "NVIDIA GeForce RTX 4090", "NVIDIA GeForce RTX 5080", "NVIDIA GeForce RTX 5090", "NVIDIA H100 80GB HBM3", "NVIDIA H100 NVL", "NVIDIA H100 PCIe", "NVIDIA H200", "NVIDIA H200 NVL", "NVIDIA L4", "NVIDIA L40", "NVIDIA L40S", "NVIDIA RTX 2000 Ada Generation", "NVIDIA RTX 4000 Ada Generation", "NVIDIA RTX 4000 SFF Ada Generation", "NVIDIA RTX 5000 Ada Generation", "NVIDIA RTX 6000 Ada Generation", "NVIDIA RTX A2000", "NVIDIA RTX A4000", "NVIDIA RTX A4500", "NVIDIA RTX A5000", "NVIDIA RTX A6000", "NVIDIA RTX PRO 4000 Blackwell", "NVIDIA RTX PRO 4500 Blackwell", "NVIDIA RTX PRO 5000 Blackwell", "NVIDIA RTX PRO 6000 Blackwell Max-Q Workstation Edition", "NVIDIA RTX PRO 6000 Blackwell Server Edition", "NVIDIA RTX PRO 6000 Blackwell Workstation Edition", "Tesla V100-PCIE-16GB", "Tesla V100-SXM2-16GB"])).annotate({ "description": "If the created Pod is a GPU Pod, a list of Runpod GPU types which can be attached to the created Pod. The order of the list determines the order to rent GPU types. See `gpuTypePriority` for information on how the order of the list affects Pod creation." })), "gpuTypePriority": Schema.optionalKey(Schema.Literals(["availability", "custom"]).annotate({ "description": "If the created Pod is a GPU Pod, set to availability to respond to current GPU type availability. Set to custom to always try to rent GPU types in the order specified in gpuTypeIds.", "default": "availability" })), "imageName": Schema.optionalKey(Schema.String.annotate({ "description": "The image tag for the container run on the created Pod.", "examples": ["runpod/pytorch:2.1.0-py3.10-cuda11.8.0-devel-ubuntu22.04"] })), "interruptible": Schema.optionalKey(Schema.Boolean.annotate({ "description": "Set to true to create an interruptible or spot Pod. An interruptible Pod can be rented at a lower cost but can be stopped at any time to free up resources for another Pod. A reserved Pod is rented at a higher cost but runs until it exits or is manually stopped.", "default": false })), "locked": Schema.optionalKey(Schema.Boolean.annotate({ "description": "Set to true to lock a Pod. Locking a Pod disables stopping or resetting the Pod.", "default": false })), "minDiskBandwidthMBps": Schema.optionalKey(Schema.Number.annotate({ "description": "The minimum disk bandwidth, in megabytes per second (MBps), for the created Pod." }).check(Schema.isFinite().annotate({ "expected": "a finite number" }))), "minDownloadMbps": Schema.optionalKey(Schema.Number.annotate({ "description": "The minimum download speed, in megabits per second (Mbps), for the created Pod." }).check(Schema.isFinite().annotate({ "expected": "a finite number" }))), "minRAMPerGPU": Schema.optionalKey(Schema.Number.annotate({ "description": "If the created Pod is a GPU Pod, the minimum amount of RAM, in gigabytes (GB), allocated to the created Pod for each GPU attached to the Pod.", "default": 8 }).check(Schema.isInt().annotate({ "expected": "an integer" }))), "minUploadMbps": Schema.optionalKey(Schema.Number.annotate({ "description": "The minimum upload speed, in megabits per second (Mbps), for the created Pod." }).check(Schema.isFinite().annotate({ "expected": "a finite number" }))), "minVCPUPerGPU": Schema.optionalKey(Schema.Number.annotate({ "description": "If the created Pod is a GPU Pod, the minimum number of virtual CPUs allocated to the created Pod for each GPU attached to the Pod.", "default": 2 }).check(Schema.isInt().annotate({ "expected": "an integer" }))), "name": Schema.optionalKey(Schema.String.annotate({ "description": "A user-defined name for the created Pod. The name does not need to be unique.", "default": "my pod" }).check(Schema.isMaxLength(191).annotate({ "expected": "a value with a length of at most 191" }))), "networkVolumeId": Schema.optionalKey(Schema.String.annotate({ "description": "The unique string identifying the network volume to attach to the created Pod. If attached, a network volume replaces the Pod network volume." })), "ports": Schema.optionalKey(Schema.Array(Schema.String).annotate({ "description": "A list of ports exposed on the created Pod. Each port is formatted as [port number]/[protocol]. Protocol can be either http or tcp.", "default": ["8888/http", "22/tcp"], "examples": [["8888/http", "22/tcp"]] })), "supportPublicIp": Schema.optionalKey(Schema.Boolean.annotate({ "description": "If the created Pod is on Community Cloud, set to true if you need the Pod to expose a public IP address. If null, the Pod might not have a public IP address. On Secure Cloud, the Pod will always have a public IP address.", "examples": [true] })), "templateId": Schema.optionalKey(Schema.String.annotate({ "description": "If the Pod is created with a template, the unique string identifying that template." })), "vcpuCount": Schema.optionalKey(Schema.Number.annotate({ "description": "If the created Pod is a CPU Pod, the number of vCPUs allocated to the Pod.", "default": 2 }).check(Schema.isInt().annotate({ "expected": "an integer" }))), "volumeInGb": Schema.optionalKey(Schema.Union([Schema.Number.check(Schema.isInt().annotate({ "expected": "an integer" })), Schema.Null]).annotate({ "description": "The amount of disk space, in gigabytes (GB), to allocate on the Pod volume for the created Pod. The data on the Pod volume is persisted across Pod restarts. To persist data so that future Pods can access it, create a network volume and set networkVolumeId to attach it to the Pod.", "default": 20 })), "volumeMountPath": Schema.optionalKey(Schema.String.annotate({ "description": "If either a Pod volume or a network volume is attached to a Pod, the absolute path where the network volume will be mounted in the filesystem.", "default": "/workspace" })) }), [Schema.Record(Schema.String, Schema.Json.annotate({ "expected": "JSON value" }))]).annotate({ "identifier": "PodCreateInput" })
export type PodUpdateInput = { readonly "containerDiskInGb"?: number | null, readonly "containerRegistryAuthId"?: string, readonly "dockerEntrypoint"?: ReadonlyArray<string>, readonly "dockerStartCmd"?: ReadonlyArray<string>, readonly "env"?: { readonly [x: string]: Schema.Json }, readonly "globalNetworking"?: boolean, readonly "imageName"?: string, readonly "locked"?: boolean, readonly "name"?: string, readonly "ports"?: ReadonlyArray<string>, readonly "volumeInGb"?: number | null, readonly "volumeMountPath"?: string } & { readonly [x: string]: Schema.Json }
export const PodUpdateInput = Schema.StructWithRest(Schema.Struct({ "containerDiskInGb": Schema.optionalKey(Schema.Union([Schema.Number.check(Schema.isInt().annotate({ "expected": "an integer" })), Schema.Null]).annotate({ "description": "The amount of disk space, in gigabytes (GB), to allocate on the container disk for the created Pod. The data on the container disk is wiped when the Pod restarts. To persist data across Pod restarts, set volumeInGb to configure the Pod network volume.", "default": 50 })), "containerRegistryAuthId": Schema.optionalKey(Schema.String.annotate({ "description": "Registry credentials ID.", "examples": ["clzdaifot0001l90809257ynb"] })), "dockerEntrypoint": Schema.optionalKey(Schema.Array(Schema.String).annotate({ "description": "If specified, overrides the ENTRYPOINT for the Docker image run on the created Pod. If [], uses the ENTRYPOINT defined in the image.", "default": [] })), "dockerStartCmd": Schema.optionalKey(Schema.Array(Schema.String).annotate({ "description": "If specified, overrides the start CMD for the Docker image run on the created Pod. If [], uses the start CMD defined in the image.", "default": [] })), "env": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json.annotate({ "expected": "JSON value" })).annotate({ "default": {}, "examples": [{ "ENV_VAR": "value" }] })), "globalNetworking": Schema.optionalKey(Schema.Boolean.annotate({ "description": "Set to true to enable global networking for the created Pod. Currently only available for On-Demand GPU Pods on some Secure Cloud data centers.", "default": false, "examples": [true] })), "imageName": Schema.optionalKey(Schema.String.annotate({ "description": "The image tag for the container run on the created Pod.", "examples": ["runpod/pytorch:2.1.0-py3.10-cuda11.8.0-devel-ubuntu22.04"] })), "locked": Schema.optionalKey(Schema.Boolean.annotate({ "description": "Set to true to lock a Pod. Locking a Pod disables stopping or resetting the Pod.", "default": false })), "name": Schema.optionalKey(Schema.String.annotate({ "description": "A user-defined name for the created Pod. The name does not need to be unique.", "default": "my pod" }).check(Schema.isMaxLength(191).annotate({ "expected": "a value with a length of at most 191" }))), "ports": Schema.optionalKey(Schema.Array(Schema.String).annotate({ "description": "A list of ports exposed on the created Pod. Each port is formatted as [port number]/[protocol]. Protocol can be either http or tcp.", "default": ["8888/http", "22/tcp"], "examples": [["8888/http", "22/tcp"]] })), "volumeInGb": Schema.optionalKey(Schema.Union([Schema.Number.check(Schema.isInt().annotate({ "expected": "an integer" })), Schema.Null]).annotate({ "description": "The amount of disk space, in gigabytes (GB), to allocate on the Pod volume for the created Pod. The data on the Pod volume is persisted across Pod restarts. To persist data so that future Pods can access it, create a network volume and set networkVolumeId to attach it to the Pod.", "default": 20 })), "volumeMountPath": Schema.optionalKey(Schema.String.annotate({ "description": "If either a Pod volume or a network volume is attached to a Pod, the absolute path where the network volume will be mounted in the filesystem.", "default": "/workspace" })) }), [Schema.Record(Schema.String, Schema.Json.annotate({ "expected": "JSON value" }))]).annotate({ "description": "Input for updating a Pod which will trigger a reset.", "identifier": "PodUpdateInput" })
export type Template = { readonly "category"?: string, readonly "containerDiskInGb"?: number, readonly "containerRegistryAuthId"?: string, readonly "dockerEntrypoint"?: ReadonlyArray<string>, readonly "dockerStartCmd"?: ReadonlyArray<string>, readonly "earned"?: number, readonly "env"?: { readonly [x: string]: Schema.Json }, readonly "id"?: string, readonly "imageName"?: string, readonly "isPublic"?: boolean, readonly "isRunpod"?: boolean, readonly "isServerless"?: boolean, readonly "name"?: string, readonly "ports"?: ReadonlyArray<string>, readonly "readme"?: string, readonly "runtimeInMin"?: number, readonly "volumeInGb"?: number, readonly "volumeMountPath"?: string } & { readonly [x: string]: Schema.Json }
export const Template = Schema.StructWithRest(Schema.Struct({ "category": Schema.optionalKey(Schema.String.annotate({ "description": "The category of the template. The category can be used to filter templates in the Runpod UI. Current categories are NVIDIA, AMD, and CPU.", "examples": ["NVIDIA"] })), "containerDiskInGb": Schema.optionalKey(Schema.Number.annotate({ "description": "The amount of disk space, in gigabytes (GB), to allocate on the container disk for a Pod or worker. The data on the container disk is wiped when the Pod or worker restarts. To persist data across restarts, set volumeInGb to configure the local network volume.", "examples": [50] }).check(Schema.isInt().annotate({ "expected": "an integer" }))), "containerRegistryAuthId": Schema.optionalKey(Schema.String), "dockerEntrypoint": Schema.optionalKey(Schema.Array(Schema.String).annotate({ "description": "If specified, overrides the ENTRYPOINT for the Docker image run on a Pod or worker. If [], uses the ENTRYPOINT defined in the image.", "examples": [[]] })), "dockerStartCmd": Schema.optionalKey(Schema.Array(Schema.String).annotate({ "description": "If specified, overrides the start CMD for the Docker image run on a Pod or worker. If [], uses the start CMD defined in the image.", "examples": [[]] })), "earned": Schema.optionalKey(Schema.Number.annotate({ "description": "The amount of Runpod credits earned by the creator of a template by all Pods or workers created from the template.", "examples": [100] }).check(Schema.isFinite().annotate({ "expected": "a finite number" }))), "env": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json.annotate({ "expected": "JSON value" })).annotate({ "default": {}, "examples": [{ "ENV_VAR": "value" }] })), "id": Schema.optionalKey(Schema.String.annotate({ "description": "A unique string identifying a template.", "examples": ["30zmvf89kd"] })), "imageName": Schema.optionalKey(Schema.String.annotate({ "description": "The image tag for the container run on Pods or workers created from a template.", "examples": ["runpod/pytorch:2.1.0-py3.10-cuda11.8.0-devel-ubuntu22.04"] })), "isPublic": Schema.optionalKey(Schema.Boolean.annotate({ "description": "Set to true if a template is public and can be used by any Runpod user. Set to false if a template is private and can only be used by the creator.", "examples": [false] })), "isRunpod": Schema.optionalKey(Schema.Boolean.annotate({ "description": "If true, a template is an official template managed by Runpod.", "examples": [true] })), "isServerless": Schema.optionalKey(Schema.Boolean.annotate({ "description": "If true, instances created from a template are Serverless workers. If false, instances created from a template are Pods.", "examples": [true] })), "name": Schema.optionalKey(Schema.String.annotate({ "description": "A user-defined name for a template. The name needs to be unique.", "examples": ["my template"] })), "ports": Schema.optionalKey(Schema.Array(Schema.String).annotate({ "description": "A list of ports exposed on a Pod or worker. Each port is formatted as [port number]/[protocol]. Protocol can be either http or tcp.", "examples": [["8888/http", "22/tcp"]] })), "readme": Schema.optionalKey(Schema.String.annotate({ "description": "A string of markdown-formatted text that describes a template. The readme is displayed in the Runpod UI when a user selects the template." })), "runtimeInMin": Schema.optionalKey(Schema.Number.check(Schema.isInt().annotate({ "expected": "an integer" }))), "volumeInGb": Schema.optionalKey(Schema.Number.annotate({ "description": "The amount of disk space, in gigabytes (GB), to allocate on the local network volume for a Pod or worker. The data on the local network volume is persisted across restarts. To persist data so that future Pods and workers can access it, create a network volume and set networkVolumeId to attach it to the Pod or worker.", "examples": [20] }).check(Schema.isInt().annotate({ "expected": "an integer" }))), "volumeMountPath": Schema.optionalKey(Schema.String.annotate({ "description": "If a local network volume or network volume is attached to a Pod or worker, the absolute path where the network volume is mounted in the filesystem.", "examples": ["/workspace"] })) }), [Schema.Record(Schema.String, Schema.Json.annotate({ "expected": "JSON value" }))]).annotate({ "identifier": "Template" })
export type EndpointCreateInput = { readonly "allowedCudaVersions"?: ReadonlyArray<"13.0" | "12.9" | "12.8" | "12.7" | "12.6" | "12.5" | "12.4" | "12.3" | "12.2" | "12.1" | "12.0" | "11.8">, readonly "computeType"?: "GPU" | "CPU", readonly "cpuFlavorIds"?: ReadonlyArray<"cpu3c" | "cpu3g" | "cpu5c" | "cpu5g">, readonly "dataCenterIds"?: ReadonlyArray<"EU-RO-1" | "CA-MTL-1" | "EU-SE-1" | "US-IL-1" | "EUR-IS-1" | "EU-CZ-1" | "US-TX-3" | "EUR-IS-2" | "US-KS-2" | "US-GA-2" | "US-WA-1" | "US-TX-1" | "CA-MTL-3" | "EU-NL-1" | "US-TX-4" | "US-CA-2" | "US-NC-1" | "OC-AU-1" | "US-DE-1" | "EUR-IS-3" | "CA-MTL-2" | "AP-JP-1" | "EUR-NO-1" | "EU-FR-1" | "US-KS-3" | "US-GA-1" | "AP-IN-1" | "US-MD-1">, readonly "executionTimeoutMs"?: number, readonly "flashboot"?: boolean, readonly "gpuCount"?: number, readonly "gpuTypeIds"?: ReadonlyArray<"AMD Instinct MI300X OAM" | "NVIDIA A100 80GB PCIe" | "NVIDIA A100-SXM4-40GB" | "NVIDIA A100-SXM4-80GB" | "NVIDIA A40" | "NVIDIA B200" | "NVIDIA B300 SXM6 AC" | "NVIDIA B300 SXM6 AC MIG 1g.34gb" | "NVIDIA GeForce RTX 3070" | "NVIDIA GeForce RTX 3080" | "NVIDIA GeForce RTX 3080 Ti" | "NVIDIA GeForce RTX 3090" | "NVIDIA GeForce RTX 3090 Ti" | "NVIDIA GeForce RTX 4070 Ti" | "NVIDIA GeForce RTX 4080" | "NVIDIA GeForce RTX 4080 SUPER" | "NVIDIA GeForce RTX 4090" | "NVIDIA GeForce RTX 5080" | "NVIDIA GeForce RTX 5090" | "NVIDIA H100 80GB HBM3" | "NVIDIA H100 NVL" | "NVIDIA H100 PCIe" | "NVIDIA H200" | "NVIDIA H200 NVL" | "NVIDIA L4" | "NVIDIA L40" | "NVIDIA L40S" | "NVIDIA RTX 2000 Ada Generation" | "NVIDIA RTX 4000 Ada Generation" | "NVIDIA RTX 4000 SFF Ada Generation" | "NVIDIA RTX 5000 Ada Generation" | "NVIDIA RTX 6000 Ada Generation" | "NVIDIA RTX A2000" | "NVIDIA RTX A4000" | "NVIDIA RTX A4500" | "NVIDIA RTX A5000" | "NVIDIA RTX A6000" | "NVIDIA RTX PRO 4000 Blackwell" | "NVIDIA RTX PRO 4500 Blackwell" | "NVIDIA RTX PRO 5000 Blackwell" | "NVIDIA RTX PRO 6000 Blackwell Max-Q Workstation Edition" | "NVIDIA RTX PRO 6000 Blackwell Server Edition" | "NVIDIA RTX PRO 6000 Blackwell Workstation Edition" | "Tesla V100-PCIE-16GB" | "Tesla V100-SXM2-16GB">, readonly "idleTimeout"?: number, readonly "minCudaVersion"?: "13.0" | "12.9" | "12.8" | "12.7" | "12.6" | "12.5" | "12.4" | "12.3" | "12.2" | "12.1" | "12.0" | "11.8", readonly "name"?: string, readonly "networkVolumeId"?: string, readonly "networkVolumeIds"?: ReadonlyArray<string>, readonly "scalerType"?: "QUEUE_DELAY" | "REQUEST_COUNT", readonly "scalerValue"?: number, readonly "templateId": string, readonly "vcpuCount"?: number, readonly "workersMax"?: number, readonly "workersMin"?: number } & { readonly [x: string]: Schema.Json }
export const EndpointCreateInput = Schema.StructWithRest(Schema.Struct({ "allowedCudaVersions": Schema.optionalKey(Schema.Array(Schema.Literals(["13.0", "12.9", "12.8", "12.7", "12.6", "12.5", "12.4", "12.3", "12.2", "12.1", "12.0", "11.8"])).annotate({ "description": "If the created Serverless endpoint is a GPU endpoint, a list of acceptable CUDA versions on the created workers. If not set, any CUDA version is acceptable." })), "computeType": Schema.optionalKey(Schema.Literals(["GPU", "CPU"]).annotate({ "description": "Set to GPU to create a Serverless endpoint with GPU workers. Set to CPU to create a Serverless endpoint with CPU workers. If set to CPU, properties related to GPUs such as gpuTypeIds will be ignored. If set to GPU, properties related to CPUs such as cpuFlavorIds will be ignored.", "default": "GPU" })), "cpuFlavorIds": Schema.optionalKey(Schema.Array(Schema.Literals(["cpu3c", "cpu3g", "cpu5c", "cpu5g"])).annotate({ "description": "If the created Serverless endpoint is a CPU endpoint, a list of Runpod CPU flavors which can be attached to the created workers. The order of the list determines the order to rent CPU flavors." })), "dataCenterIds": Schema.optionalKey(Schema.Array(Schema.Literals(["EU-RO-1", "CA-MTL-1", "EU-SE-1", "US-IL-1", "EUR-IS-1", "EU-CZ-1", "US-TX-3", "EUR-IS-2", "US-KS-2", "US-GA-2", "US-WA-1", "US-TX-1", "CA-MTL-3", "EU-NL-1", "US-TX-4", "US-CA-2", "US-NC-1", "OC-AU-1", "US-DE-1", "EUR-IS-3", "CA-MTL-2", "AP-JP-1", "EUR-NO-1", "EU-FR-1", "US-KS-3", "US-GA-1", "AP-IN-1", "US-MD-1"])).annotate({ "description": "A list of Runpod data center IDs where workers on the created Serverless endpoint can be located.", "default": ["EU-RO-1", "CA-MTL-1", "EU-SE-1", "US-IL-1", "EUR-IS-1", "EU-CZ-1", "US-TX-3", "EUR-IS-2", "US-KS-2", "US-GA-2", "US-WA-1", "US-TX-1", "CA-MTL-3", "EU-NL-1", "US-TX-4", "US-CA-2", "US-NC-1", "OC-AU-1", "US-DE-1", "EUR-IS-3", "CA-MTL-2", "AP-JP-1", "EUR-NO-1", "EU-FR-1", "US-KS-3", "US-GA-1", "AP-IN-1", "US-MD-1"], "examples": [["EU-RO-1", "CA-MTL-1"]] })), "executionTimeoutMs": Schema.optionalKey(Schema.Number.annotate({ "description": "The maximum number of milliseconds an individual request can run on a Serverless endpoint before the worker is stopped and the request is marked as failed.", "examples": [600000] }).check(Schema.isInt().annotate({ "expected": "an integer" }))), "flashboot": Schema.optionalKey(Schema.Boolean.annotate({ "description": "Whether to use flash boot for the created Serverless endpoint.", "examples": [true] })), "gpuCount": Schema.optionalKey(Schema.Number.annotate({ "description": "If the created Serverless endpoint is a GPU endpoint, the number of GPUs attached to each worker on the endpoint.", "default": 1 }).check(Schema.isInt().annotate({ "expected": "an integer" })).check(Schema.isGreaterThanOrEqualTo(1).annotate({ "expected": "a value greater than or equal to 1" }))), "gpuTypeIds": Schema.optionalKey(Schema.Array(Schema.Literals(["AMD Instinct MI300X OAM", "NVIDIA A100 80GB PCIe", "NVIDIA A100-SXM4-40GB", "NVIDIA A100-SXM4-80GB", "NVIDIA A40", "NVIDIA B200", "NVIDIA B300 SXM6 AC", "NVIDIA B300 SXM6 AC MIG 1g.34gb", "NVIDIA GeForce RTX 3070", "NVIDIA GeForce RTX 3080", "NVIDIA GeForce RTX 3080 Ti", "NVIDIA GeForce RTX 3090", "NVIDIA GeForce RTX 3090 Ti", "NVIDIA GeForce RTX 4070 Ti", "NVIDIA GeForce RTX 4080", "NVIDIA GeForce RTX 4080 SUPER", "NVIDIA GeForce RTX 4090", "NVIDIA GeForce RTX 5080", "NVIDIA GeForce RTX 5090", "NVIDIA H100 80GB HBM3", "NVIDIA H100 NVL", "NVIDIA H100 PCIe", "NVIDIA H200", "NVIDIA H200 NVL", "NVIDIA L4", "NVIDIA L40", "NVIDIA L40S", "NVIDIA RTX 2000 Ada Generation", "NVIDIA RTX 4000 Ada Generation", "NVIDIA RTX 4000 SFF Ada Generation", "NVIDIA RTX 5000 Ada Generation", "NVIDIA RTX 6000 Ada Generation", "NVIDIA RTX A2000", "NVIDIA RTX A4000", "NVIDIA RTX A4500", "NVIDIA RTX A5000", "NVIDIA RTX A6000", "NVIDIA RTX PRO 4000 Blackwell", "NVIDIA RTX PRO 4500 Blackwell", "NVIDIA RTX PRO 5000 Blackwell", "NVIDIA RTX PRO 6000 Blackwell Max-Q Workstation Edition", "NVIDIA RTX PRO 6000 Blackwell Server Edition", "NVIDIA RTX PRO 6000 Blackwell Workstation Edition", "Tesla V100-PCIE-16GB", "Tesla V100-SXM2-16GB"])).annotate({ "description": "If the created Serverless endpoint is a GPU endpoint, a list of Runpod GPU types which can be attached to the created workers. The order of the list determines the order to rent GPU types." })), "idleTimeout": Schema.optionalKey(Schema.Number.annotate({ "description": "The number of seconds a worker on the created Serverless endpoint can run without taking a job before the worker is scaled down.", "default": 5 }).check(Schema.isInt().annotate({ "expected": "an integer" })).check(Schema.isGreaterThanOrEqualTo(1).annotate({ "expected": "a value greater than or equal to 1" })).check(Schema.isLessThanOrEqualTo(3600).annotate({ "expected": "a value less than or equal to 3600" }))), "minCudaVersion": Schema.optionalKey(Schema.Literals(["13.0", "12.9", "12.8", "12.7", "12.6", "12.5", "12.4", "12.3", "12.2", "12.1", "12.0", "11.8"]).annotate({ "description": "If the created Serverless endpoint is a GPU endpoint, the minimum acceptable CUDA version on the created workers." })), "name": Schema.optionalKey(Schema.String.annotate({ "description": "A user-defined name for the created Serverless endpoint. The name does not need to be unique." }).check(Schema.isMaxLength(191).annotate({ "expected": "a value with a length of at most 191" }))), "networkVolumeId": Schema.optionalKey(Schema.String.annotate({ "description": "The unique string identifying the network volume to attach to the created Serverless endpoint." })), "networkVolumeIds": Schema.optionalKey(Schema.Array(Schema.String).annotate({ "description": "A list of network volume IDs to attach to the created Serverless endpoint. Allows multiple network volumes to be used with multi-region endpoints." })), "scalerType": Schema.optionalKey(Schema.Literals(["QUEUE_DELAY", "REQUEST_COUNT"]).annotate({ "description": "The method used to scale up workers on the created Serverless endpoint. If QUEUE_DELAY, workers are scaled based on a periodic check to see if any requests have been in queue for too long. If REQUEST_COUNT, the desired number of workers is periodically calculated based on the number of requests in the endpoint's queue. Use QUEUE_DELAY if you need to ensure requests take no longer than a maximum latency, and use REQUEST_COUNT if you need to scale based on the number of requests.", "default": "QUEUE_DELAY" })), "scalerValue": Schema.optionalKey(Schema.Number.annotate({ "description": "If the endpoint scalerType is QUEUE_DELAY, the number of seconds a request can remain in queue before a new worker is scaled up. If the endpoint scalerType is REQUEST_COUNT, the number of workers is increased as needed to meet the number of requests in the endpoint's queue divided by scalerValue.", "default": 4 }).check(Schema.isFinite().annotate({ "expected": "a finite number" })).check(Schema.isGreaterThanOrEqualTo(0.5).annotate({ "expected": "a value greater than or equal to 0.5" }))), "templateId": Schema.String.annotate({ "description": "The unique string identifying the template used to create the Serverless endpoint.", "examples": ["30zmvf89kd"] }), "vcpuCount": Schema.optionalKey(Schema.Number.annotate({ "description": "If the created Serverless endpoint is a CPU endpoint, the number of vCPUs allocated to each created worker.", "default": 2 }).check(Schema.isInt().annotate({ "expected": "an integer" }))), "workersMax": Schema.optionalKey(Schema.Number.annotate({ "description": "The maximum number of workers that can be running at the same time on a Serverless endpoint.", "examples": [3] }).check(Schema.isInt().annotate({ "expected": "an integer" })).check(Schema.isGreaterThanOrEqualTo(0).annotate({ "expected": "a value greater than or equal to 0" }))), "workersMin": Schema.optionalKey(Schema.Number.annotate({ "description": "The minimum number of workers that will run at the same time on a Serverless endpoint. This number of workers will always stay running for the endpoint, and will be charged even if no requests are being processed, but they are charged at a lower rate than running autoscaling workers.", "examples": [0] }).check(Schema.isInt().annotate({ "expected": "an integer" })).check(Schema.isGreaterThanOrEqualTo(0).annotate({ "expected": "a value greater than or equal to 0" }))) }), [Schema.Record(Schema.String, Schema.Json.annotate({ "expected": "JSON value" }))]).annotate({ "identifier": "EndpointCreateInput" })
export type EndpointUpdateInput = { readonly "allowedCudaVersions"?: ReadonlyArray<"13.0" | "12.9" | "12.8" | "12.7" | "12.6" | "12.5" | "12.4" | "12.3" | "12.2" | "12.1" | "12.0" | "11.8">, readonly "cpuFlavorIds"?: ReadonlyArray<"cpu3c" | "cpu3g" | "cpu5c" | "cpu5g">, readonly "dataCenterIds"?: ReadonlyArray<"EU-RO-1" | "CA-MTL-1" | "EU-SE-1" | "US-IL-1" | "EUR-IS-1" | "EU-CZ-1" | "US-TX-3" | "EUR-IS-2" | "US-KS-2" | "US-GA-2" | "US-WA-1" | "US-TX-1" | "CA-MTL-3" | "EU-NL-1" | "US-TX-4" | "US-CA-2" | "US-NC-1" | "OC-AU-1" | "US-DE-1" | "EUR-IS-3" | "CA-MTL-2" | "AP-JP-1" | "EUR-NO-1" | "EU-FR-1" | "US-KS-3" | "US-GA-1" | "AP-IN-1" | "US-MD-1">, readonly "executionTimeoutMs"?: number, readonly "flashboot"?: boolean, readonly "gpuCount"?: number, readonly "gpuTypeIds"?: ReadonlyArray<"AMD Instinct MI300X OAM" | "NVIDIA A100 80GB PCIe" | "NVIDIA A100-SXM4-40GB" | "NVIDIA A100-SXM4-80GB" | "NVIDIA A40" | "NVIDIA B200" | "NVIDIA B300 SXM6 AC" | "NVIDIA B300 SXM6 AC MIG 1g.34gb" | "NVIDIA GeForce RTX 3070" | "NVIDIA GeForce RTX 3080" | "NVIDIA GeForce RTX 3080 Ti" | "NVIDIA GeForce RTX 3090" | "NVIDIA GeForce RTX 3090 Ti" | "NVIDIA GeForce RTX 4070 Ti" | "NVIDIA GeForce RTX 4080" | "NVIDIA GeForce RTX 4080 SUPER" | "NVIDIA GeForce RTX 4090" | "NVIDIA GeForce RTX 5080" | "NVIDIA GeForce RTX 5090" | "NVIDIA H100 80GB HBM3" | "NVIDIA H100 NVL" | "NVIDIA H100 PCIe" | "NVIDIA H200" | "NVIDIA H200 NVL" | "NVIDIA L4" | "NVIDIA L40" | "NVIDIA L40S" | "NVIDIA RTX 2000 Ada Generation" | "NVIDIA RTX 4000 Ada Generation" | "NVIDIA RTX 4000 SFF Ada Generation" | "NVIDIA RTX 5000 Ada Generation" | "NVIDIA RTX 6000 Ada Generation" | "NVIDIA RTX A2000" | "NVIDIA RTX A4000" | "NVIDIA RTX A4500" | "NVIDIA RTX A5000" | "NVIDIA RTX A6000" | "NVIDIA RTX PRO 4000 Blackwell" | "NVIDIA RTX PRO 4500 Blackwell" | "NVIDIA RTX PRO 5000 Blackwell" | "NVIDIA RTX PRO 6000 Blackwell Max-Q Workstation Edition" | "NVIDIA RTX PRO 6000 Blackwell Server Edition" | "NVIDIA RTX PRO 6000 Blackwell Workstation Edition" | "Tesla V100-PCIE-16GB" | "Tesla V100-SXM2-16GB">, readonly "idleTimeout"?: number, readonly "minCudaVersion"?: "13.0" | "12.9" | "12.8" | "12.7" | "12.6" | "12.5" | "12.4" | "12.3" | "12.2" | "12.1" | "12.0" | "11.8", readonly "name"?: string, readonly "networkVolumeId"?: string, readonly "networkVolumeIds"?: ReadonlyArray<string>, readonly "scalerType"?: "QUEUE_DELAY" | "REQUEST_COUNT", readonly "scalerValue"?: number, readonly "templateId"?: string, readonly "vcpuCount"?: number, readonly "workersMax"?: number, readonly "workersMin"?: number } & { readonly [x: string]: Schema.Json }
export const EndpointUpdateInput = Schema.StructWithRest(Schema.Struct({ "allowedCudaVersions": Schema.optionalKey(Schema.Array(Schema.Literals(["13.0", "12.9", "12.8", "12.7", "12.6", "12.5", "12.4", "12.3", "12.2", "12.1", "12.0", "11.8"])).annotate({ "description": "If the created Serverless endpoint is a GPU endpoint, a list of acceptable CUDA versions on the created workers. If not set, any CUDA version is acceptable." })), "cpuFlavorIds": Schema.optionalKey(Schema.Array(Schema.Literals(["cpu3c", "cpu3g", "cpu5c", "cpu5g"])).annotate({ "description": "If the created Serverless endpoint is a CPU endpoint, a list of Runpod CPU flavors which can be attached to the created workers. The order of the list determines the order to rent CPU flavors." })), "dataCenterIds": Schema.optionalKey(Schema.Array(Schema.Literals(["EU-RO-1", "CA-MTL-1", "EU-SE-1", "US-IL-1", "EUR-IS-1", "EU-CZ-1", "US-TX-3", "EUR-IS-2", "US-KS-2", "US-GA-2", "US-WA-1", "US-TX-1", "CA-MTL-3", "EU-NL-1", "US-TX-4", "US-CA-2", "US-NC-1", "OC-AU-1", "US-DE-1", "EUR-IS-3", "CA-MTL-2", "AP-JP-1", "EUR-NO-1", "EU-FR-1", "US-KS-3", "US-GA-1", "AP-IN-1", "US-MD-1"])).annotate({ "description": "A list of Runpod data center IDs where workers on the created Serverless endpoint can be located.", "default": ["EU-RO-1", "CA-MTL-1", "EU-SE-1", "US-IL-1", "EUR-IS-1", "EU-CZ-1", "US-TX-3", "EUR-IS-2", "US-KS-2", "US-GA-2", "US-WA-1", "US-TX-1", "CA-MTL-3", "EU-NL-1", "US-TX-4", "US-CA-2", "US-NC-1", "OC-AU-1", "US-DE-1", "EUR-IS-3", "CA-MTL-2", "AP-JP-1", "EUR-NO-1", "EU-FR-1", "US-KS-3", "US-GA-1", "AP-IN-1", "US-MD-1"], "examples": [["EU-RO-1", "CA-MTL-1"]] })), "executionTimeoutMs": Schema.optionalKey(Schema.Number.annotate({ "description": "The maximum number of milliseconds an individual request can run on a Serverless endpoint before the worker is stopped and the request is marked as failed.", "examples": [600000] }).check(Schema.isInt().annotate({ "expected": "an integer" }))), "flashboot": Schema.optionalKey(Schema.Boolean.annotate({ "description": "Whether to use flash boot for the created Serverless endpoint.", "examples": [true] })), "gpuCount": Schema.optionalKey(Schema.Number.annotate({ "description": "If the created Serverless endpoint is a GPU endpoint, the number of GPUs attached to each worker on the endpoint.", "default": 1 }).check(Schema.isInt().annotate({ "expected": "an integer" })).check(Schema.isGreaterThanOrEqualTo(1).annotate({ "expected": "a value greater than or equal to 1" }))), "gpuTypeIds": Schema.optionalKey(Schema.Array(Schema.Literals(["AMD Instinct MI300X OAM", "NVIDIA A100 80GB PCIe", "NVIDIA A100-SXM4-40GB", "NVIDIA A100-SXM4-80GB", "NVIDIA A40", "NVIDIA B200", "NVIDIA B300 SXM6 AC", "NVIDIA B300 SXM6 AC MIG 1g.34gb", "NVIDIA GeForce RTX 3070", "NVIDIA GeForce RTX 3080", "NVIDIA GeForce RTX 3080 Ti", "NVIDIA GeForce RTX 3090", "NVIDIA GeForce RTX 3090 Ti", "NVIDIA GeForce RTX 4070 Ti", "NVIDIA GeForce RTX 4080", "NVIDIA GeForce RTX 4080 SUPER", "NVIDIA GeForce RTX 4090", "NVIDIA GeForce RTX 5080", "NVIDIA GeForce RTX 5090", "NVIDIA H100 80GB HBM3", "NVIDIA H100 NVL", "NVIDIA H100 PCIe", "NVIDIA H200", "NVIDIA H200 NVL", "NVIDIA L4", "NVIDIA L40", "NVIDIA L40S", "NVIDIA RTX 2000 Ada Generation", "NVIDIA RTX 4000 Ada Generation", "NVIDIA RTX 4000 SFF Ada Generation", "NVIDIA RTX 5000 Ada Generation", "NVIDIA RTX 6000 Ada Generation", "NVIDIA RTX A2000", "NVIDIA RTX A4000", "NVIDIA RTX A4500", "NVIDIA RTX A5000", "NVIDIA RTX A6000", "NVIDIA RTX PRO 4000 Blackwell", "NVIDIA RTX PRO 4500 Blackwell", "NVIDIA RTX PRO 5000 Blackwell", "NVIDIA RTX PRO 6000 Blackwell Max-Q Workstation Edition", "NVIDIA RTX PRO 6000 Blackwell Server Edition", "NVIDIA RTX PRO 6000 Blackwell Workstation Edition", "Tesla V100-PCIE-16GB", "Tesla V100-SXM2-16GB"])).annotate({ "description": "If the created Serverless endpoint is a GPU endpoint, a list of Runpod GPU types which can be attached to the created workers. The order of the list determines the order to rent GPU types." })), "idleTimeout": Schema.optionalKey(Schema.Number.annotate({ "description": "The number of seconds a worker on the created Serverless endpoint can run without taking a job before the worker is scaled down.", "default": 5 }).check(Schema.isInt().annotate({ "expected": "an integer" })).check(Schema.isGreaterThanOrEqualTo(1).annotate({ "expected": "a value greater than or equal to 1" })).check(Schema.isLessThanOrEqualTo(3600).annotate({ "expected": "a value less than or equal to 3600" }))), "minCudaVersion": Schema.optionalKey(Schema.Literals(["13.0", "12.9", "12.8", "12.7", "12.6", "12.5", "12.4", "12.3", "12.2", "12.1", "12.0", "11.8"]).annotate({ "description": "If the created Serverless endpoint is a GPU endpoint, the minimum acceptable CUDA version on the created workers." })), "name": Schema.optionalKey(Schema.String.annotate({ "description": "A user-defined name for the created Serverless endpoint. The name does not need to be unique." }).check(Schema.isMaxLength(191).annotate({ "expected": "a value with a length of at most 191" }))), "networkVolumeId": Schema.optionalKey(Schema.String.annotate({ "description": "The unique string identifying the network volume to attach to the created Serverless endpoint." })), "networkVolumeIds": Schema.optionalKey(Schema.Array(Schema.String).annotate({ "description": "A list of network volume IDs to attach to the created Serverless endpoint. Allows multiple network volumes to be used with multi-region endpoints." })), "scalerType": Schema.optionalKey(Schema.Literals(["QUEUE_DELAY", "REQUEST_COUNT"]).annotate({ "description": "The method used to scale up workers on the created Serverless endpoint. If QUEUE_DELAY, workers are scaled based on a periodic check to see if any requests have been in queue for too long. If REQUEST_COUNT, the desired number of workers is periodically calculated based on the number of requests in the endpoint's queue. Use QUEUE_DELAY if you need to ensure requests take no longer than a maximum latency, and use REQUEST_COUNT if you need to scale based on the number of requests.", "default": "QUEUE_DELAY" })), "scalerValue": Schema.optionalKey(Schema.Number.annotate({ "description": "If the endpoint scalerType is QUEUE_DELAY, the number of seconds a request can remain in queue before a new worker is scaled up. If the endpoint scalerType is REQUEST_COUNT, the number of workers is increased as needed to meet the number of requests in the endpoint's queue divided by scalerValue.", "default": 4 }).check(Schema.isFinite().annotate({ "expected": "a finite number" })).check(Schema.isGreaterThanOrEqualTo(0.5).annotate({ "expected": "a value greater than or equal to 0.5" }))), "templateId": Schema.optionalKey(Schema.String.annotate({ "description": "The unique string identifying the template used to create the Serverless endpoint.", "examples": ["30zmvf89kd"] })), "vcpuCount": Schema.optionalKey(Schema.Number.annotate({ "description": "If the created Serverless endpoint is a CPU endpoint, the number of vCPUs allocated to each created worker.", "default": 2 }).check(Schema.isInt().annotate({ "expected": "an integer" }))), "workersMax": Schema.optionalKey(Schema.Number.annotate({ "description": "The maximum number of workers that can be running at the same time on a Serverless endpoint.", "examples": [3] }).check(Schema.isInt().annotate({ "expected": "an integer" })).check(Schema.isGreaterThanOrEqualTo(0).annotate({ "expected": "a value greater than or equal to 0" }))), "workersMin": Schema.optionalKey(Schema.Number.annotate({ "description": "The minimum number of workers that will run at the same time on a Serverless endpoint. This number of workers will always stay running for the endpoint, and will be charged even if no requests are being processed, but they are charged at a lower rate than running autoscaling workers.", "examples": [0] }).check(Schema.isInt().annotate({ "expected": "an integer" })).check(Schema.isGreaterThanOrEqualTo(0).annotate({ "expected": "a value greater than or equal to 0" }))) }), [Schema.Record(Schema.String, Schema.Json.annotate({ "expected": "JSON value" }))]).annotate({ "description": "Input for updating an endpoint which will trigger a rolling release on the endpoint.", "identifier": "EndpointUpdateInput" })
export type TemplateCreateInput = { readonly "category"?: "NVIDIA" | "AMD" | "CPU", readonly "containerDiskInGb"?: number, readonly "containerRegistryAuthId"?: string, readonly "dockerEntrypoint"?: ReadonlyArray<string>, readonly "dockerStartCmd"?: ReadonlyArray<string>, readonly "env"?: { readonly [x: string]: Schema.Json }, readonly "imageName": string, readonly "isPublic"?: boolean, readonly "isServerless"?: boolean, readonly "name": string, readonly "ports"?: ReadonlyArray<string>, readonly "readme"?: string, readonly "volumeInGb"?: number, readonly "volumeMountPath"?: string } & { readonly [x: string]: Schema.Json }
export const TemplateCreateInput = Schema.StructWithRest(Schema.Struct({ "category": Schema.optionalKey(Schema.Literals(["NVIDIA", "AMD", "CPU"]).annotate({ "description": "The compute category of the resource defined by this template.", "default": "NVIDIA" })), "containerDiskInGb": Schema.optionalKey(Schema.Number.annotate({ "description": "The amount of disk space in GB to allocate for the container.", "default": 50 }).check(Schema.isInt().annotate({ "expected": "an integer" }))), "containerRegistryAuthId": Schema.optionalKey(Schema.String.annotate({ "description": "The unique string representing the container auth object needed for a private image." })), "dockerEntrypoint": Schema.optionalKey(Schema.Array(Schema.String).annotate({ "description": "If specified, overrides the ENTRYPOINT for the Docker image run on the Pods using this template. If [], uses the ENTRYPOINT defined in the DockerFile.", "default": [] })), "dockerStartCmd": Schema.optionalKey(Schema.Array(Schema.String).annotate({ "description": "If specified, overrides the start CMD for the Docker image run on the Pods using this template. If [], uses the start CMD defined in the DockerFile.", "default": [] })), "env": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json.annotate({ "expected": "JSON value" })).annotate({ "default": {}, "examples": [{ "ENV_VAR": "value" }] })), "imageName": Schema.String.annotate({ "description": "Docker image name." }), "isPublic": Schema.optionalKey(Schema.Boolean.annotate({ "description": "If this is a Pod template, specifies whether the template is visible to other Runpod users.", "default": false })), "isServerless": Schema.optionalKey(Schema.Boolean.annotate({ "description": "Whether the template specifies a Serverless worker or a Pod.", "default": false })), "name": Schema.String.annotate({ "description": "Template name." }), "ports": Schema.optionalKey(Schema.Array(Schema.String).annotate({ "description": "A list of ports exposed on the created Pod. Each port is formatted as [port number]/[protocol]. Protocol can be either http or tcp.", "default": ["8888/http", "22/tcp"], "examples": [["8888/http", "22/tcp"]] })), "readme": Schema.optionalKey(Schema.String.annotate({ "description": "README content in markdown format.", "default": "" })), "volumeInGb": Schema.optionalKey(Schema.Number.annotate({ "description": "The amount of disk space, in gigabytes (GB), to allocate on the Pods deployed with this template.", "default": 20 }).check(Schema.isInt().annotate({ "expected": "an integer" }))), "volumeMountPath": Schema.optionalKey(Schema.String.annotate({ "description": "If a volume is attached to a Pod deployed with this template, the absolute path where the volume will be mounted in the filesystem.", "default": "/workspace" })) }), [Schema.Record(Schema.String, Schema.Json.annotate({ "expected": "JSON value" }))]).annotate({ "identifier": "TemplateCreateInput" })
export type TemplateUpdateInput = { readonly "containerDiskInGb"?: number, readonly "containerRegistryAuthId"?: string, readonly "dockerEntrypoint"?: ReadonlyArray<string>, readonly "dockerStartCmd"?: ReadonlyArray<string>, readonly "env"?: { readonly [x: string]: Schema.Json }, readonly "imageName"?: string, readonly "isPublic"?: boolean, readonly "name"?: string, readonly "ports"?: ReadonlyArray<string>, readonly "readme"?: string, readonly "volumeInGb"?: number, readonly "volumeMountPath"?: string } & { readonly [x: string]: Schema.Json }
export const TemplateUpdateInput = Schema.StructWithRest(Schema.Struct({ "containerDiskInGb": Schema.optionalKey(Schema.Number.annotate({ "description": "The amount of disk space in GB to allocate for the container.", "default": 50 }).check(Schema.isInt().annotate({ "expected": "an integer" }))), "containerRegistryAuthId": Schema.optionalKey(Schema.String.annotate({ "description": "The unique string representing the container auth object needed for a private image." })), "dockerEntrypoint": Schema.optionalKey(Schema.Array(Schema.String).annotate({ "description": "If specified, overrides the ENTRYPOINT for the Docker image run on the Pods using this template. If [], uses the ENTRYPOINT defined in the DockerFile.", "default": [] })), "dockerStartCmd": Schema.optionalKey(Schema.Array(Schema.String).annotate({ "description": "If specified, overrides the start CMD for the Docker image run on the Pods using this template. If [], uses the start CMD defined in the DockerFile.", "default": [] })), "env": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json.annotate({ "expected": "JSON value" })).annotate({ "default": {}, "examples": [{ "ENV_VAR": "value" }] })), "imageName": Schema.optionalKey(Schema.String.annotate({ "description": "Docker image name." })), "isPublic": Schema.optionalKey(Schema.Boolean.annotate({ "description": "If this is a Pod template, specifies whether the template is visible to other Runpod users.", "default": false })), "name": Schema.optionalKey(Schema.String.annotate({ "description": "Template name." })), "ports": Schema.optionalKey(Schema.Array(Schema.String).annotate({ "description": "A list of ports exposed on the created Pod. Each port is formatted as [port number]/[protocol]. Protocol can be either http or tcp.", "default": ["8888/http", "22/tcp"], "examples": [["8888/http", "22/tcp"]] })), "readme": Schema.optionalKey(Schema.String.annotate({ "description": "README content in markdown format.", "default": "" })), "volumeInGb": Schema.optionalKey(Schema.Number.annotate({ "description": "The amount of disk space, in gigabytes (GB), to allocate on the Pods deployed with this template.", "default": 20 }).check(Schema.isInt().annotate({ "expected": "an integer" }))), "volumeMountPath": Schema.optionalKey(Schema.String.annotate({ "description": "If a volume is attached to a Pod deployed with this template, the absolute path where the volume will be mounted in the filesystem.", "default": "/workspace" })) }), [Schema.Record(Schema.String, Schema.Json.annotate({ "expected": "JSON value" }))]).annotate({ "description": "Input for updating a Template which will trigger a rolling release for any associated endpoints.", "identifier": "TemplateUpdateInput" })
export type NetworkVolumes = ReadonlyArray<{ readonly "id"?: string, readonly "name"?: string, readonly "size"?: number, readonly "dataCenterId"?: string } & { readonly [x: string]: Schema.Json }>
export const NetworkVolumes = Schema.Array(Schema.StructWithRest(Schema.Struct({ "id": Schema.optionalKey(Schema.String.annotate({ "description": "A unique string identifying a network volume.", "examples": ["agv6w2qcg7"] })), "name": Schema.optionalKey(Schema.String.annotate({ "description": "A user-defined name for a network volume. The name does not need to be unique.", "examples": ["my network volume"] })), "size": Schema.optionalKey(Schema.Number.annotate({ "description": "The amount of disk space, in gigabytes (GB), allocated to a network volume.", "examples": [50] }).check(Schema.isInt().annotate({ "expected": "an integer" }))), "dataCenterId": Schema.optionalKey(Schema.String.annotate({ "description": "The Runpod data center ID where a network volume is located.", "examples": ["EU-RO-1"] })) }), [Schema.Record(Schema.String, Schema.Json.annotate({ "expected": "JSON value" }))])).annotate({ "identifier": "NetworkVolumes" })
export type NetworkVolumeCreateInput = { readonly "dataCenterId": string, readonly "name": string, readonly "size": number } & { readonly [x: string]: Schema.Json }
export const NetworkVolumeCreateInput = Schema.StructWithRest(Schema.Struct({ "dataCenterId": Schema.String.annotate({ "description": "The Runpod data center ID where the created network volume is located.", "examples": ["EU-RO-1"] }), "name": Schema.String.annotate({ "description": "A user-defined name for the created network volume. The name does not need to be unique.", "examples": ["my network volume"] }), "size": Schema.Number.annotate({ "description": "The amount of disk space, in gigabytes (GB), allocated to the created network volume.", "examples": [50] }).check(Schema.isInt().annotate({ "expected": "an integer" })).check(Schema.isGreaterThanOrEqualTo(0).annotate({ "expected": "a value greater than or equal to 0" })).check(Schema.isLessThanOrEqualTo(4000).annotate({ "expected": "a value less than or equal to 4000" })) }), [Schema.Record(Schema.String, Schema.Json.annotate({ "expected": "JSON value" }))]).annotate({ "identifier": "NetworkVolumeCreateInput" })
export type NetworkVolume = { readonly "dataCenterId"?: string, readonly "id"?: string, readonly "name"?: string, readonly "size"?: number } & { readonly [x: string]: Schema.Json }
export const NetworkVolume = Schema.StructWithRest(Schema.Struct({ "dataCenterId": Schema.optionalKey(Schema.String.annotate({ "description": "The Runpod data center ID where a network volume is located.", "examples": ["EU-RO-1"] })), "id": Schema.optionalKey(Schema.String.annotate({ "description": "A unique string identifying a network volume.", "examples": ["agv6w2qcg7"] })), "name": Schema.optionalKey(Schema.String.annotate({ "description": "A user-defined name for a network volume. The name does not need to be unique.", "examples": ["my network volume"] })), "size": Schema.optionalKey(Schema.Number.annotate({ "description": "The amount of disk space, in gigabytes (GB), allocated to a network volume.", "examples": [50] }).check(Schema.isInt().annotate({ "expected": "an integer" }))) }), [Schema.Record(Schema.String, Schema.Json.annotate({ "expected": "JSON value" }))]).annotate({ "identifier": "NetworkVolume" })
export type NetworkVolumeUpdateInput = { readonly "name"?: string, readonly "size"?: number } & { readonly [x: string]: Schema.Json }
export const NetworkVolumeUpdateInput = Schema.StructWithRest(Schema.Struct({ "name": Schema.optionalKey(Schema.String.annotate({ "description": "A user-defined name for the network volume. The name does not need to be unique.", "examples": ["my network volume"] })), "size": Schema.optionalKey(Schema.Number.annotate({ "description": "The amount of disk space, in gigabytes (GB), which will be allocated to the network volume after the update. Must be greater than the current size of the network volume.", "examples": [50] }).check(Schema.isInt().annotate({ "expected": "an integer" })).check(Schema.isGreaterThanOrEqualTo(0).annotate({ "expected": "a value greater than or equal to 0" })).check(Schema.isLessThanOrEqualTo(4000).annotate({ "expected": "a value less than or equal to 4000" }))) }), [Schema.Record(Schema.String, Schema.Json.annotate({ "expected": "JSON value" }))]).annotate({ "identifier": "NetworkVolumeUpdateInput" })
export type ContainerRegistryAuth = { readonly "id"?: string, readonly "name"?: string } & { readonly [x: string]: Schema.Json }
export const ContainerRegistryAuth = Schema.StructWithRest(Schema.Struct({ "id": Schema.optionalKey(Schema.String.annotate({ "description": "A unique string identifying a container registry authentication.", "examples": ["clzdaifot0001l90809257ynb"] })), "name": Schema.optionalKey(Schema.String.annotate({ "description": "A user-defined name for a container registry authentication. The name must be unique.", "examples": ["my creds"] })) }), [Schema.Record(Schema.String, Schema.Json.annotate({ "expected": "JSON value" }))]).annotate({ "identifier": "ContainerRegistryAuth" })
export type ContainerRegistryAuthCreateInput = { readonly "name": string, readonly "password": string, readonly "username": string } & { readonly [x: string]: Schema.Json }
export const ContainerRegistryAuthCreateInput = Schema.StructWithRest(Schema.Struct({ "name": Schema.String.annotate({ "description": "A user-defined name for a container registry authentication. The name must be unique.", "examples": ["my creds"] }), "password": Schema.String.annotate({ "description": "The password for the container registry.", "examples": ["my-password"] }), "username": Schema.String.annotate({ "description": "The username for the container registry.", "examples": ["my-username"] }) }), [Schema.Record(Schema.String, Schema.Json.annotate({ "expected": "JSON value" }))]).annotate({ "identifier": "ContainerRegistryAuthCreateInput" })
export type BillingRecords = ReadonlyArray<{ readonly "amount"?: number, readonly "diskSpaceBilledGb"?: number, readonly "endpointId"?: string, readonly "gpuTypeId"?: string, readonly "podId"?: string, readonly "time"?: string, readonly "timeBilledMs"?: number } & { readonly [x: string]: Schema.Json }>
export const BillingRecords = Schema.Array(Schema.StructWithRest(Schema.Struct({ "amount": Schema.optionalKey(Schema.Number.annotate({ "description": "The amount charged for the group for the billing period, in USD.", "examples": [100.5] }).check(Schema.isFinite().annotate({ "expected": "a finite number" }))), "diskSpaceBilledGb": Schema.optionalKey(Schema.Number.annotate({ "description": "The amount of disk space billed for the billing period, in gigabytes (GB). Does not apply to all resource types.", "examples": [50] }).check(Schema.isInt().annotate({ "expected": "an integer" }))), "endpointId": Schema.optionalKey(Schema.String.annotate({ "description": "If grouping by endpoint ID, the endpoint ID of the group." })), "gpuTypeId": Schema.optionalKey(Schema.String.annotate({ "description": "If grouping by GPU type ID, the GPU type ID of the group." })), "podId": Schema.optionalKey(Schema.String.annotate({ "description": "If grouping by Pod ID, the Pod ID of the group." })), "time": Schema.optionalKey(Schema.String.annotate({ "description": "The start of the period for which the billing record applies.", "examples": ["2023-01-01T00:00:00Z"], "format": "date-time" })), "timeBilledMs": Schema.optionalKey(Schema.Number.annotate({ "description": "The total time billed for the billing period, in milliseconds. Does not apply to all resource types.", "examples": [3600000] }).check(Schema.isInt().annotate({ "expected": "an integer" }))) }), [Schema.Record(Schema.String, Schema.Json.annotate({ "expected": "JSON value" }))])).annotate({ "identifier": "BillingRecords" })
export type NetworkVolumeBillingRecords = ReadonlyArray<{ readonly "amount"?: number, readonly "diskSpaceBilledGb"?: number, readonly "highPerformanceStorageAmount"?: number, readonly "highPerformanceStorageDiskSpaceBilledGb"?: number, readonly "time"?: string } & { readonly [x: string]: Schema.Json }>
export const NetworkVolumeBillingRecords = Schema.Array(Schema.StructWithRest(Schema.Struct({ "amount": Schema.optionalKey(Schema.Number.annotate({ "description": "The amount charged for the group for the billing period, in USD.", "examples": [100.5] }).check(Schema.isFinite().annotate({ "expected": "a finite number" }))), "diskSpaceBilledGb": Schema.optionalKey(Schema.Number.annotate({ "description": "The amount of disk space billed for the billing period, in gigabytes (GB). Does not apply to all resource types.", "examples": [50] }).check(Schema.isInt().annotate({ "expected": "an integer" }))), "highPerformanceStorageAmount": Schema.optionalKey(Schema.Number.annotate({ "description": "The amount charged for high performance storage for the billing period, in USD.", "examples": [100.5] }).check(Schema.isFinite().annotate({ "expected": "a finite number" }))), "highPerformanceStorageDiskSpaceBilledGb": Schema.optionalKey(Schema.Number.annotate({ "description": "The amount of high performance storage disk space billed for the billing period, in gigabytes (GB).", "examples": [50] }).check(Schema.isInt().annotate({ "expected": "an integer" }))), "time": Schema.optionalKey(Schema.String.annotate({ "description": "The start of the period for which the billing record applies.", "examples": ["2023-01-01T00:00:00Z"], "format": "date-time" })) }), [Schema.Record(Schema.String, Schema.Json.annotate({ "expected": "JSON value" }))])).annotate({ "identifier": "NetworkVolumeBillingRecords" })
export type Pod = { readonly "adjustedCostPerHr"?: number, readonly "aiApiId"?: string, readonly "consumerUserId"?: string, readonly "containerDiskInGb"?: number, readonly "containerRegistryAuthId"?: string, readonly "costPerHr"?: number, readonly "cpuFlavorId"?: string, readonly "desiredStatus"?: "RUNNING" | "EXITED" | "TERMINATED", readonly "dockerEntrypoint"?: ReadonlyArray<string>, readonly "dockerStartCmd"?: ReadonlyArray<string>, readonly "endpointId"?: string, readonly "env"?: { readonly [x: string]: Schema.Json }, readonly "gpu"?: { readonly "id"?: string, readonly "count"?: number, readonly "displayName"?: string, readonly "securePrice"?: number, readonly "communityPrice"?: number, readonly "oneMonthPrice"?: number, readonly "threeMonthPrice"?: number, readonly "sixMonthPrice"?: number, readonly "oneWeekPrice"?: number, readonly "communitySpotPrice"?: number, readonly "secureSpotPrice"?: number } & { readonly [x: string]: Schema.Json }, readonly "id"?: string, readonly "image"?: string, readonly "interruptible"?: boolean, readonly "lastStartedAt"?: string, readonly "lastStatusChange"?: string, readonly "locked"?: boolean, readonly "machine"?: { readonly "minPodGpuCount"?: number, readonly "gpuTypeId"?: string, readonly "gpuType"?: { readonly "id"?: string, readonly "count"?: number, readonly "displayName"?: string, readonly "securePrice"?: number, readonly "communityPrice"?: number, readonly "oneMonthPrice"?: number, readonly "threeMonthPrice"?: number, readonly "sixMonthPrice"?: number, readonly "oneWeekPrice"?: number, readonly "communitySpotPrice"?: number, readonly "secureSpotPrice"?: number } & { readonly [x: string]: Schema.Json }, readonly "cpuCount"?: number, readonly "cpuTypeId"?: string, readonly "cpuType"?: { readonly "id"?: string, readonly "displayName"?: string, readonly "cores"?: number, readonly "threadsPerCore"?: number, readonly "groupId"?: string } & { readonly [x: string]: Schema.Json }, readonly "location"?: string, readonly "dataCenterId"?: string, readonly "diskThroughputMBps"?: number, readonly "maxDownloadSpeedMbps"?: number, readonly "maxUploadSpeedMbps"?: number, readonly "supportPublicIp"?: boolean, readonly "secureCloud"?: boolean, readonly "maintenanceStart"?: string, readonly "maintenanceEnd"?: string, readonly "maintenanceNote"?: string, readonly "note"?: string, readonly "costPerHr"?: number, readonly "currentPricePerGpu"?: number, readonly "gpuAvailable"?: number, readonly "gpuDisplayName"?: string } & { readonly [x: string]: Schema.Json }, readonly "machineId"?: string, readonly "memoryInGb"?: number, readonly "name"?: string, readonly "networkVolume"?: { readonly "id"?: string, readonly "name"?: string, readonly "size"?: number, readonly "dataCenterId"?: string } & { readonly [x: string]: Schema.Json }, readonly "portMappings"?: { readonly [x: string]: Schema.Json } | null, readonly "ports"?: ReadonlyArray<string>, readonly "publicIp"?: string | null, readonly "savingsPlans"?: ReadonlyArray<SavingsPlan>, readonly "slsVersion"?: number, readonly "templateId"?: string, readonly "vcpuCount"?: number, readonly "volumeEncrypted"?: boolean, readonly "volumeInGb"?: number, readonly "volumeMountPath"?: string } & { readonly [x: string]: Schema.Json }
export const Pod = Schema.StructWithRest(Schema.Struct({ "adjustedCostPerHr": Schema.optionalKey(Schema.Number.annotate({ "description": "The effective cost in Runpod credits per hour of running a Pod, adjusted by active Savings Plans.", "examples": [0.69] }).check(Schema.isFinite().annotate({ "expected": "a finite number" }))), "aiApiId": Schema.optionalKey(Schema.String.annotate({ "description": "Synonym for endpointId (legacy name)." })), "consumerUserId": Schema.optionalKey(Schema.String.annotate({ "description": "A unique string identifying the Runpod user who rents a Pod.", "examples": ["user_2PyTJrLzeuwfZilRZ7JhCQDuSqo"] })), "containerDiskInGb": Schema.optionalKey(Schema.Number.annotate({ "description": "The amount of disk space, in gigabytes (GB), to allocate on the container disk for a Pod. The data on the container disk is wiped when the Pod restarts. To persist data across Pod restarts, set volumeInGb to configure the Pod network volume.", "examples": [50] }).check(Schema.isInt().annotate({ "expected": "an integer" }))), "containerRegistryAuthId": Schema.optionalKey(Schema.String.annotate({ "description": "If a Pod is created with a container registry auth, the unique string identifying that container registry auth.", "examples": ["clzdaifot0001l90809257ynb"] })), "costPerHr": Schema.optionalKey(Schema.Number.annotate({ "description": "The cost in Runpod credits per hour of running a Pod. Note that the actual cost may be lower if Savings Plans are applied.", "format": "currency" }).check(Schema.isFinite().annotate({ "expected": "a finite number" }))), "cpuFlavorId": Schema.optionalKey(Schema.String.annotate({ "description": "If the Pod is a CPU Pod, the unique string identifying the CPU flavor the Pod is running on.", "examples": ["cpu3c"] })), "desiredStatus": Schema.optionalKey(Schema.Literals(["RUNNING", "EXITED", "TERMINATED"]).annotate({ "description": "The current expected status of a Pod." })), "dockerEntrypoint": Schema.optionalKey(Schema.Array(Schema.String).annotate({ "description": "If specified, overrides the ENTRYPOINT for the Docker image run on the created Pod. If [], uses the ENTRYPOINT defined in the image." })), "dockerStartCmd": Schema.optionalKey(Schema.Array(Schema.String).annotate({ "description": "If specified, overrides the start CMD for the Docker image run on the created Pod. If [], uses the start CMD defined in the image." })), "endpointId": Schema.optionalKey(Schema.String.annotate({ "description": "If the Pod is a Serverless worker, a unique string identifying the associated endpoint." })), "env": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json.annotate({ "expected": "JSON value" })).annotate({ "default": {}, "examples": [{ "ENV_VAR": "value" }] })), "gpu": Schema.optionalKey(Schema.StructWithRest(Schema.Struct({ "id": Schema.optionalKey(Schema.String), "count": Schema.optionalKey(Schema.Number.annotate({ "description": "The number of GPUs attached to a Pod.", "examples": [1] }).check(Schema.isInt().annotate({ "expected": "an integer" }))), "displayName": Schema.optionalKey(Schema.String), "securePrice": Schema.optionalKey(Schema.Number.check(Schema.isFinite().annotate({ "expected": "a finite number" }))), "communityPrice": Schema.optionalKey(Schema.Number.check(Schema.isFinite().annotate({ "expected": "a finite number" }))), "oneMonthPrice": Schema.optionalKey(Schema.Number.check(Schema.isFinite().annotate({ "expected": "a finite number" }))), "threeMonthPrice": Schema.optionalKey(Schema.Number.check(Schema.isFinite().annotate({ "expected": "a finite number" }))), "sixMonthPrice": Schema.optionalKey(Schema.Number.check(Schema.isFinite().annotate({ "expected": "a finite number" }))), "oneWeekPrice": Schema.optionalKey(Schema.Number.check(Schema.isFinite().annotate({ "expected": "a finite number" }))), "communitySpotPrice": Schema.optionalKey(Schema.Number.check(Schema.isFinite().annotate({ "expected": "a finite number" }))), "secureSpotPrice": Schema.optionalKey(Schema.Number.check(Schema.isFinite().annotate({ "expected": "a finite number" }))) }), [Schema.Record(Schema.String, Schema.Json.annotate({ "expected": "JSON value" }))])), "id": Schema.optionalKey(Schema.String.annotate({ "description": "A unique string identifying a [Pod](#/components/schema/Pod).", "examples": ["xedezhzb9la3ye"] })), "image": Schema.optionalKey(Schema.String.annotate({ "description": "The image tag for the container run on a Pod.", "examples": ["runpod/pytorch:2.1.0-py3.10-cuda11.8.0-devel-ubuntu22.04"] })), "interruptible": Schema.optionalKey(Schema.Boolean.annotate({ "description": "Describes how a Pod is rented. An interruptible Pod can be rented at a lower cost but can be stopped at any time to free up resources for another Pod. A reserved Pod is rented at a higher cost but runs until it exits or is manually stopped.", "examples": [false] })), "lastStartedAt": Schema.optionalKey(Schema.String.annotate({ "description": "The UTC timestamp when a Pod was last started.", "examples": ["2024-07-12T19:14:40.144Z"] })), "lastStatusChange": Schema.optionalKey(Schema.String.annotate({ "description": "A string describing the last lifecycle event on a Pod.", "examples": ["Rented by User: Fri Jul 12 2024 15:14:40 GMT-0400 (Eastern Daylight Time)"] })), "locked": Schema.optionalKey(Schema.Boolean.annotate({ "description": "Set to true to lock a Pod. Locking a Pod disables stopping or resetting the Pod.", "examples": [false] })), "machine": Schema.optionalKey(Schema.StructWithRest(Schema.Struct({ "minPodGpuCount": Schema.optionalKey(Schema.Number.check(Schema.isInt().annotate({ "expected": "an integer" }))), "gpuTypeId": Schema.optionalKey(Schema.String), "gpuType": Schema.optionalKey(Schema.StructWithRest(Schema.Struct({ "id": Schema.optionalKey(Schema.String), "count": Schema.optionalKey(Schema.Number.annotate({ "description": "The number of GPUs attached to a Pod.", "examples": [1] }).check(Schema.isInt().annotate({ "expected": "an integer" }))), "displayName": Schema.optionalKey(Schema.String), "securePrice": Schema.optionalKey(Schema.Number.check(Schema.isFinite().annotate({ "expected": "a finite number" }))), "communityPrice": Schema.optionalKey(Schema.Number.check(Schema.isFinite().annotate({ "expected": "a finite number" }))), "oneMonthPrice": Schema.optionalKey(Schema.Number.check(Schema.isFinite().annotate({ "expected": "a finite number" }))), "threeMonthPrice": Schema.optionalKey(Schema.Number.check(Schema.isFinite().annotate({ "expected": "a finite number" }))), "sixMonthPrice": Schema.optionalKey(Schema.Number.check(Schema.isFinite().annotate({ "expected": "a finite number" }))), "oneWeekPrice": Schema.optionalKey(Schema.Number.check(Schema.isFinite().annotate({ "expected": "a finite number" }))), "communitySpotPrice": Schema.optionalKey(Schema.Number.check(Schema.isFinite().annotate({ "expected": "a finite number" }))), "secureSpotPrice": Schema.optionalKey(Schema.Number.check(Schema.isFinite().annotate({ "expected": "a finite number" }))) }), [Schema.Record(Schema.String, Schema.Json.annotate({ "expected": "JSON value" }))])), "cpuCount": Schema.optionalKey(Schema.Number.check(Schema.isInt().annotate({ "expected": "an integer" }))), "cpuTypeId": Schema.optionalKey(Schema.String), "cpuType": Schema.optionalKey(Schema.StructWithRest(Schema.Struct({ "id": Schema.optionalKey(Schema.String), "displayName": Schema.optionalKey(Schema.String), "cores": Schema.optionalKey(Schema.Number.check(Schema.isFinite().annotate({ "expected": "a finite number" }))), "threadsPerCore": Schema.optionalKey(Schema.Number.check(Schema.isFinite().annotate({ "expected": "a finite number" }))), "groupId": Schema.optionalKey(Schema.String) }), [Schema.Record(Schema.String, Schema.Json.annotate({ "expected": "JSON value" }))])), "location": Schema.optionalKey(Schema.String), "dataCenterId": Schema.optionalKey(Schema.String), "diskThroughputMBps": Schema.optionalKey(Schema.Number.check(Schema.isInt().annotate({ "expected": "an integer" }))), "maxDownloadSpeedMbps": Schema.optionalKey(Schema.Number.check(Schema.isInt().annotate({ "expected": "an integer" }))), "maxUploadSpeedMbps": Schema.optionalKey(Schema.Number.check(Schema.isInt().annotate({ "expected": "an integer" }))), "supportPublicIp": Schema.optionalKey(Schema.Boolean), "secureCloud": Schema.optionalKey(Schema.Boolean), "maintenanceStart": Schema.optionalKey(Schema.String), "maintenanceEnd": Schema.optionalKey(Schema.String), "maintenanceNote": Schema.optionalKey(Schema.String), "note": Schema.optionalKey(Schema.String), "costPerHr": Schema.optionalKey(Schema.Number.check(Schema.isFinite().annotate({ "expected": "a finite number" }))), "currentPricePerGpu": Schema.optionalKey(Schema.Number.check(Schema.isFinite().annotate({ "expected": "a finite number" }))), "gpuAvailable": Schema.optionalKey(Schema.Number.check(Schema.isInt().annotate({ "expected": "an integer" }))), "gpuDisplayName": Schema.optionalKey(Schema.String) }), [Schema.Record(Schema.String, Schema.Json.annotate({ "expected": "JSON value" }))]).annotate({ "description": "Information about the machine a Pod is running on (see [Machine](#/components/schemas/Machine))." })), "machineId": Schema.optionalKey(Schema.String.annotate({ "description": "A unique string identifying the host machine a Pod is running on.", "examples": ["s194cr8pls2z"] })), "memoryInGb": Schema.optionalKey(Schema.Number.annotate({ "description": "The amount of RAM, in gigabytes (GB), attached to a Pod.", "examples": [62] }).check(Schema.isFinite().annotate({ "expected": "a finite number" }))), "name": Schema.optionalKey(Schema.String.annotate({ "description": "A user-defined name for the created Pod. The name does not need to be unique." }).check(Schema.isMaxLength(191).annotate({ "expected": "a value with a length of at most 191" }))), "networkVolume": Schema.optionalKey(Schema.StructWithRest(Schema.Struct({ "id": Schema.optionalKey(Schema.String.annotate({ "description": "A unique string identifying a network volume.", "examples": ["agv6w2qcg7"] })), "name": Schema.optionalKey(Schema.String.annotate({ "description": "A user-defined name for a network volume. The name does not need to be unique.", "examples": ["my network volume"] })), "size": Schema.optionalKey(Schema.Number.annotate({ "description": "The amount of disk space, in gigabytes (GB), allocated to a network volume.", "examples": [50] }).check(Schema.isInt().annotate({ "expected": "an integer" }))), "dataCenterId": Schema.optionalKey(Schema.String.annotate({ "description": "The Runpod data center ID where a network volume is located.", "examples": ["EU-RO-1"] })) }), [Schema.Record(Schema.String, Schema.Json.annotate({ "expected": "JSON value" }))]).annotate({ "description": "If a network volume is attached to a Pod, information about the network volume (see [network volume schema](#/components/schemas/NetworkVolume))." })), "portMappings": Schema.optionalKey(Schema.Union([Schema.Record(Schema.String, Schema.Json.annotate({ "expected": "JSON value" })), Schema.Null]).annotate({ "description": "A mapping of internal ports to public ports on a Pod. For example, { \"22\": 10341 } means that port 22 on the Pod is mapped to port 10341 and is publicly accessible at [public ip]:10341. If the Pod is still initializing, this mapping is not yet determined and will be empty.", "examples": [{ "22": 10341 }] })), "ports": Schema.optionalKey(Schema.Array(Schema.String).annotate({ "description": "A list of ports exposed on a Pod. Each port is formatted as [port number]/[protocol]. Protocol can be either http or tcp.", "examples": [["8888/http", "22/tcp"]] })), "publicIp": Schema.optionalKey(Schema.Union([Schema.String, Schema.Null]).annotate({ "description": "The public IP address of a Pod. If the Pod is still initializing, this IP is not yet determined and will be empty.", "examples": ["100.65.0.119"], "format": "ipv4" })), "savingsPlans": Schema.optionalKey(Schema.Array(SavingsPlan).annotate({ "description": "The list of active Savings Plans applied to a Pod (see [Savings Plans](#/components/schemas/SavingsPlan)). If none are applied, the list is empty." })), "slsVersion": Schema.optionalKey(Schema.Number.annotate({ "description": "If the Pod is a Serverless worker, the version of the associated endpoint (see [Endpoint Version](#/components/schemas/Endpoint/version)).", "examples": [0] }).check(Schema.isInt().annotate({ "expected": "an integer" }))), "templateId": Schema.optionalKey(Schema.String.annotate({ "description": "If a Pod is created with a template, the unique string identifying that template." })), "vcpuCount": Schema.optionalKey(Schema.Number.annotate({ "description": "The number of virtual CPUs attached to a Pod.", "examples": [24] }).check(Schema.isFinite().annotate({ "expected": "a finite number" }))), "volumeEncrypted": Schema.optionalKey(Schema.Boolean.annotate({ "description": "Set to true if the local network volume of a Pod is encrypted. Can only be set when creating a Pod.", "examples": [false] })), "volumeInGb": Schema.optionalKey(Schema.Number.annotate({ "description": "The amount of disk space, in gigabytes (GB), to allocate on the Pod volume for a Pod. The data on the Pod volume is persisted across Pod restarts. To persist data so that future Pods can access it, create a network volume and set networkVolumeId to attach it to the Pod.", "examples": [20] }).check(Schema.isInt().annotate({ "expected": "an integer" }))), "volumeMountPath": Schema.optionalKey(Schema.String.annotate({ "description": "If either a Pod volume or a network volume is attached to a Pod, the absolute path where the network volume is mounted in the filesystem.", "examples": ["/workspace"] })) }), [Schema.Record(Schema.String, Schema.Json.annotate({ "expected": "JSON value" }))]).annotate({ "identifier": "Pod" })
export type Templates = ReadonlyArray<Template>
export const Templates = Schema.Array(Template).annotate({ "identifier": "Templates" })
export type ContainerRegistryAuths = ReadonlyArray<ContainerRegistryAuth>
export const ContainerRegistryAuths = Schema.Array(ContainerRegistryAuth).annotate({ "identifier": "ContainerRegistryAuths" })
export type Pods = ReadonlyArray<Pod>
export const Pods = Schema.Array(Pod).annotate({ "identifier": "Pods" })
export type Endpoint = { readonly "allowedCudaVersions"?: ReadonlyArray<"13.0" | "12.9" | "12.8" | "12.7" | "12.6" | "12.5" | "12.4" | "12.3" | "12.2" | "12.1" | "12.0" | "11.8">, readonly "computeType"?: "CPU" | "GPU", readonly "createdAt"?: string, readonly "dataCenterIds"?: ReadonlyArray<"EU-RO-1" | "CA-MTL-1" | "EU-SE-1" | "US-IL-1" | "EUR-IS-1" | "EU-CZ-1" | "US-TX-3" | "EUR-IS-2" | "US-KS-2" | "US-GA-2" | "US-WA-1" | "US-TX-1" | "CA-MTL-3" | "EU-NL-1" | "US-TX-4" | "US-CA-2" | "US-NC-1" | "OC-AU-1" | "US-DE-1" | "EUR-IS-3" | "CA-MTL-2" | "AP-JP-1" | "EUR-NO-1" | "EU-FR-1" | "US-KS-3" | "US-GA-1" | "AP-IN-1" | "US-MD-1">, readonly "env"?: { readonly [x: string]: Schema.Json }, readonly "executionTimeoutMs"?: number, readonly "gpuCount"?: number, readonly "gpuTypeIds"?: ReadonlyArray<"AMD Instinct MI300X OAM" | "NVIDIA A100 80GB PCIe" | "NVIDIA A100-SXM4-40GB" | "NVIDIA A100-SXM4-80GB" | "NVIDIA A40" | "NVIDIA B200" | "NVIDIA B300 SXM6 AC" | "NVIDIA B300 SXM6 AC MIG 1g.34gb" | "NVIDIA GeForce RTX 3070" | "NVIDIA GeForce RTX 3080" | "NVIDIA GeForce RTX 3080 Ti" | "NVIDIA GeForce RTX 3090" | "NVIDIA GeForce RTX 3090 Ti" | "NVIDIA GeForce RTX 4070 Ti" | "NVIDIA GeForce RTX 4080" | "NVIDIA GeForce RTX 4080 SUPER" | "NVIDIA GeForce RTX 4090" | "NVIDIA GeForce RTX 5080" | "NVIDIA GeForce RTX 5090" | "NVIDIA H100 80GB HBM3" | "NVIDIA H100 NVL" | "NVIDIA H100 PCIe" | "NVIDIA H200" | "NVIDIA H200 NVL" | "NVIDIA L4" | "NVIDIA L40" | "NVIDIA L40S" | "NVIDIA RTX 2000 Ada Generation" | "NVIDIA RTX 4000 Ada Generation" | "NVIDIA RTX 4000 SFF Ada Generation" | "NVIDIA RTX 5000 Ada Generation" | "NVIDIA RTX 6000 Ada Generation" | "NVIDIA RTX A2000" | "NVIDIA RTX A4000" | "NVIDIA RTX A4500" | "NVIDIA RTX A5000" | "NVIDIA RTX A6000" | "NVIDIA RTX PRO 4000 Blackwell" | "NVIDIA RTX PRO 4500 Blackwell" | "NVIDIA RTX PRO 5000 Blackwell" | "NVIDIA RTX PRO 6000 Blackwell Max-Q Workstation Edition" | "NVIDIA RTX PRO 6000 Blackwell Server Edition" | "NVIDIA RTX PRO 6000 Blackwell Workstation Edition" | "Tesla V100-PCIE-16GB" | "Tesla V100-SXM2-16GB">, readonly "id"?: string, readonly "idleTimeout"?: number, readonly "instanceIds"?: ReadonlyArray<string>, readonly "minCudaVersion"?: "13.0" | "12.9" | "12.8" | "12.7" | "12.6" | "12.5" | "12.4" | "12.3" | "12.2" | "12.1" | "12.0" | "11.8", readonly "name"?: string, readonly "networkVolumeId"?: string, readonly "networkVolumeIds"?: ReadonlyArray<string>, readonly "scalerType"?: "QUEUE_DELAY" | "REQUEST_COUNT", readonly "scalerValue"?: number, readonly "template"?: Template, readonly "templateId"?: string, readonly "userId"?: string, readonly "version"?: number, readonly "workers"?: ReadonlyArray<Pod>, readonly "workersMax"?: number, readonly "workersMin"?: number } & { readonly [x: string]: Schema.Json }
export const Endpoint = Schema.StructWithRest(Schema.Struct({ "allowedCudaVersions": Schema.optionalKey(Schema.Array(Schema.Literals(["13.0", "12.9", "12.8", "12.7", "12.6", "12.5", "12.4", "12.3", "12.2", "12.1", "12.0", "11.8"])).annotate({ "description": "A list of acceptable CUDA versions for the workers on a Serverless endpoint. If not set, any CUDA version is acceptable." })), "computeType": Schema.optionalKey(Schema.Literals(["CPU", "GPU"]).annotate({ "description": "The type of compute used by workers on a Serverless endpoint.", "examples": ["GPU"] })), "createdAt": Schema.optionalKey(Schema.String.annotate({ "description": "The UTC timestamp when a Serverless endpoint was created.", "examples": ["2024-07-12T19:14:40.144Z"] })), "dataCenterIds": Schema.optionalKey(Schema.Array(Schema.Literals(["EU-RO-1", "CA-MTL-1", "EU-SE-1", "US-IL-1", "EUR-IS-1", "EU-CZ-1", "US-TX-3", "EUR-IS-2", "US-KS-2", "US-GA-2", "US-WA-1", "US-TX-1", "CA-MTL-3", "EU-NL-1", "US-TX-4", "US-CA-2", "US-NC-1", "OC-AU-1", "US-DE-1", "EUR-IS-3", "CA-MTL-2", "AP-JP-1", "EUR-NO-1", "EU-FR-1", "US-KS-3", "US-GA-1", "AP-IN-1", "US-MD-1"])).annotate({ "description": "A list of Runpod data center IDs where workers on a Serverless endpoint can be located.", "default": ["EU-RO-1", "CA-MTL-1", "EU-SE-1", "US-IL-1", "EUR-IS-1", "EU-CZ-1", "US-TX-3", "EUR-IS-2", "US-KS-2", "US-GA-2", "US-WA-1", "US-TX-1", "CA-MTL-3", "EU-NL-1", "US-TX-4", "US-CA-2", "US-NC-1", "OC-AU-1", "US-DE-1", "EUR-IS-3", "CA-MTL-2", "AP-JP-1", "EUR-NO-1", "EU-FR-1", "US-KS-3", "US-GA-1", "AP-IN-1", "US-MD-1"] })), "env": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json.annotate({ "expected": "JSON value" })).annotate({ "default": {}, "examples": [{ "ENV_VAR": "value" }] })), "executionTimeoutMs": Schema.optionalKey(Schema.Number.annotate({ "description": "The maximum number of milliseconds an individual request can run on a Serverless endpoint before the worker is stopped and the request is marked as failed.", "examples": [600000] }).check(Schema.isInt().annotate({ "expected": "an integer" }))), "gpuCount": Schema.optionalKey(Schema.Number.annotate({ "description": "The number of GPUs attached to each worker on a Serverless endpoint.", "examples": [1] }).check(Schema.isInt().annotate({ "expected": "an integer" }))), "gpuTypeIds": Schema.optionalKey(Schema.Array(Schema.Literals(["AMD Instinct MI300X OAM", "NVIDIA A100 80GB PCIe", "NVIDIA A100-SXM4-40GB", "NVIDIA A100-SXM4-80GB", "NVIDIA A40", "NVIDIA B200", "NVIDIA B300 SXM6 AC", "NVIDIA B300 SXM6 AC MIG 1g.34gb", "NVIDIA GeForce RTX 3070", "NVIDIA GeForce RTX 3080", "NVIDIA GeForce RTX 3080 Ti", "NVIDIA GeForce RTX 3090", "NVIDIA GeForce RTX 3090 Ti", "NVIDIA GeForce RTX 4070 Ti", "NVIDIA GeForce RTX 4080", "NVIDIA GeForce RTX 4080 SUPER", "NVIDIA GeForce RTX 4090", "NVIDIA GeForce RTX 5080", "NVIDIA GeForce RTX 5090", "NVIDIA H100 80GB HBM3", "NVIDIA H100 NVL", "NVIDIA H100 PCIe", "NVIDIA H200", "NVIDIA H200 NVL", "NVIDIA L4", "NVIDIA L40", "NVIDIA L40S", "NVIDIA RTX 2000 Ada Generation", "NVIDIA RTX 4000 Ada Generation", "NVIDIA RTX 4000 SFF Ada Generation", "NVIDIA RTX 5000 Ada Generation", "NVIDIA RTX 6000 Ada Generation", "NVIDIA RTX A2000", "NVIDIA RTX A4000", "NVIDIA RTX A4500", "NVIDIA RTX A5000", "NVIDIA RTX A6000", "NVIDIA RTX PRO 4000 Blackwell", "NVIDIA RTX PRO 4500 Blackwell", "NVIDIA RTX PRO 5000 Blackwell", "NVIDIA RTX PRO 6000 Blackwell Max-Q Workstation Edition", "NVIDIA RTX PRO 6000 Blackwell Server Edition", "NVIDIA RTX PRO 6000 Blackwell Workstation Edition", "Tesla V100-PCIE-16GB", "Tesla V100-SXM2-16GB"])).annotate({ "description": "A list of Runpod GPU types which can be attached to a Serverless endpoint." })), "id": Schema.optionalKey(Schema.String.annotate({ "description": "A unique string identifying a Serverless endpoint.", "examples": ["jpnw0v75y3qoql"] })), "idleTimeout": Schema.optionalKey(Schema.Number.annotate({ "description": "The number of seconds a worker on a Serverless endpoint can be running without taking a job before the worker is scaled down.", "examples": [5] }).check(Schema.isInt().annotate({ "expected": "an integer" }))), "instanceIds": Schema.optionalKey(Schema.Array(Schema.String).annotate({ "description": "For CPU Serverless endpoints, a list of instance IDs that can be attached to a Serverless endpoint.", "examples": [["cpu3c-8-16"]] })), "minCudaVersion": Schema.optionalKey(Schema.Literals(["13.0", "12.9", "12.8", "12.7", "12.6", "12.5", "12.4", "12.3", "12.2", "12.1", "12.0", "11.8"]).annotate({ "description": "The minimum acceptable CUDA version for the workers on a Serverless endpoint." })), "name": Schema.optionalKey(Schema.String.annotate({ "description": "A user-defined name for a Serverless endpoint. The name does not need to be unique.", "examples": ["my endpoint"] })), "networkVolumeId": Schema.optionalKey(Schema.String.annotate({ "description": "The unique string identifying the network volume to attach to the Serverless endpoint.", "examples": ["agv6w2qcg7"] })), "networkVolumeIds": Schema.optionalKey(Schema.Array(Schema.String).annotate({ "description": "A list of network volume IDs attached to the Serverless endpoint. Allows multiple network volumes to be used with multi-region endpoints.", "examples": [["agv6w2qcg7", "bxh7w3rch8"]] })), "scalerType": Schema.optionalKey(Schema.Literals(["QUEUE_DELAY", "REQUEST_COUNT"]).annotate({ "description": "The method used to scale up workers on a Serverless endpoint. If QUEUE_DELAY, workers are scaled based on a periodic check to see if any requests have been in queue for too long. If REQUEST_COUNT, the desired number of workers is periodically calculated based on the number of requests in the endpoint's queue. Use QUEUE_DELAY if you need to ensure requests take no longer than a maximum latency, and use REQUEST_COUNT if you need to scale based on the number of requests.", "examples": ["QUEUE_DELAY"] })), "scalerValue": Schema.optionalKey(Schema.Number.annotate({ "description": "If the endpoint scalerType is QUEUE_DELAY, the number of seconds a request can remain in queue before a new worker is scaled up. If the endpoint scalerType is REQUEST_COUNT, the number of workers is increased as needed to meet the number of requests in the endpoint's queue divided by scalerValue.", "examples": [4] }).check(Schema.isInt().annotate({ "expected": "an integer" }))), "template": Schema.optionalKey(Template), "templateId": Schema.optionalKey(Schema.String.annotate({ "description": "The unique string identifying the template used to create a Serverless endpoint.", "examples": ["30zmvf89kd"] })), "userId": Schema.optionalKey(Schema.String.annotate({ "description": "A unique string identifying the Runpod user who created a Serverless endpoint.", "examples": ["user_2PyTJrLzeuwfZilRZ7JhCQDuSqo"] })), "version": Schema.optionalKey(Schema.Number.annotate({ "description": "The latest version of a Serverless endpoint, which is updated whenever the template or environment variables of the endpoint are changed.", "examples": [0] }).check(Schema.isInt().annotate({ "expected": "an integer" }))), "workers": Schema.optionalKey(Schema.Array(Pod).annotate({ "description": "Information about current workers on a Serverless endpoint." })), "workersMax": Schema.optionalKey(Schema.Number.annotate({ "description": "The maximum number of workers that can be running at the same time on a Serverless endpoint.", "examples": [3] }).check(Schema.isInt().annotate({ "expected": "an integer" }))), "workersMin": Schema.optionalKey(Schema.Number.annotate({ "description": "The minimum number of workers that will run at the same time on a Serverless endpoint. This number of workers will always stay running for the endpoint, and will be charged even if no requests are being processed, but they are charged at a lower rate than running autoscaling workers.", "examples": [0] }).check(Schema.isInt().annotate({ "expected": "an integer" }))) }), [Schema.Record(Schema.String, Schema.Json.annotate({ "expected": "JSON value" }))]).annotate({ "identifier": "Endpoint" })
export type Endpoints = ReadonlyArray<Endpoint>
export const Endpoints = Schema.Array(Endpoint).annotate({ "identifier": "Endpoints" })
// schemas
export type GetOpenAPI200 = { readonly [x: string]: Schema.Json }
export const GetOpenAPI200 = Schema.Record(Schema.String, Schema.Json.annotate({ "expected": "JSON value" })).annotate({ "examples": [{}] })
export type ListPodsParams = { readonly "computeType"?: "GPU" | "CPU", readonly "cpuFlavorId"?: ReadonlyArray<string>, readonly "dataCenterId"?: ReadonlyArray<string>, readonly "desiredStatus"?: "RUNNING" | "EXITED" | "TERMINATED", readonly "endpointId"?: string, readonly "gpuTypeId"?: ReadonlyArray<string>, readonly "id"?: string, readonly "imageName"?: string, readonly "includeMachine"?: boolean, readonly "includeNetworkVolume"?: boolean, readonly "includeSavingsPlans"?: boolean, readonly "includeTemplate"?: boolean, readonly "includeWorkers"?: boolean, readonly "name"?: string, readonly "networkVolumeId"?: string, readonly "templateId"?: string }
export const ListPodsParams = Schema.Struct({ "computeType": Schema.optionalKey(Schema.Literals(["GPU", "CPU"]).annotate({ "description": "Filter to only GPU or only CPU Pods.", "examples": ["CPU"] })), "cpuFlavorId": Schema.optionalKey(Schema.Array(Schema.String).annotate({ "description": "Filter to CPU Pods with any of the listed CPU flavors.", "examples": [["cpu3c", "cpu5g"]] })), "dataCenterId": Schema.optionalKey(Schema.Array(Schema.String).annotate({ "description": "Filter to Pods located in any of the provided Runpod data centers.", "examples": [["EU-RO-1"]] })), "desiredStatus": Schema.optionalKey(Schema.Literals(["RUNNING", "EXITED", "TERMINATED"]).annotate({ "description": "Filter to Pods currently in the provided state.", "examples": ["RUNNING"] })), "endpointId": Schema.optionalKey(Schema.String.annotate({ "description": "Filter to workers on the provided Serverless endpoint (note that endpoint workers are not included in the response by default, set includeWorkers to true to include them)." }).check(Schema.isMaxLength(191).annotate({ "expected": "a value with a length of at most 191" }))), "gpuTypeId": Schema.optionalKey(Schema.Array(Schema.String).annotate({ "description": "Filter to Pods with any of the listed GPU types attached.", "examples": [["NVIDIA GeForce RTX 4090", "NVIDIA RTX A5000"]] })), "id": Schema.optionalKey(Schema.String.annotate({ "description": "Filter to a specific Pod.", "examples": ["xedezhzb9la3ye"] })), "imageName": Schema.optionalKey(Schema.String.annotate({ "description": "Filter to Pods created with the provided image.", "examples": ["runpod/pytorch:2.1.0-py3.10-cuda11.8.0-devel-ubuntu22.04"] })), "includeMachine": Schema.optionalKey(Schema.Boolean.annotate({ "description": "Include information about the machine the Pod is running on.", "default": false, "examples": [true] })), "includeNetworkVolume": Schema.optionalKey(Schema.Boolean.annotate({ "description": "Include information about the network volume attached to the returned Pod, if any.", "default": false, "examples": [true] })), "includeSavingsPlans": Schema.optionalKey(Schema.Boolean.annotate({ "description": "Include information about the savings plans applied to the Pod.", "default": false, "examples": [true] })), "includeTemplate": Schema.optionalKey(Schema.Boolean.annotate({ "description": "Include information about the template the Pod uses, if any.", "default": false, "examples": [true] })), "includeWorkers": Schema.optionalKey(Schema.Boolean.annotate({ "description": "Set to true to also list Pods which are Serverless workers.", "default": false, "examples": [true] })), "name": Schema.optionalKey(Schema.String.annotate({ "description": "Filter to Pods with the provided name." }).check(Schema.isMaxLength(191).annotate({ "expected": "a value with a length of at most 191" }))), "networkVolumeId": Schema.optionalKey(Schema.String.annotate({ "description": "Filter to Pods with the provided network volume attached.", "examples": ["agv6w2qcg7"] })), "templateId": Schema.optionalKey(Schema.String.annotate({ "description": "Filter to Pods created from the provided template.", "examples": ["30zmvf89kd"] })) })
export type ListPods200 = Pods
export const ListPods200 = Pods
export type CreatePodRequestJson = PodCreateInput
export const CreatePodRequestJson = PodCreateInput
export type CreatePod201 = Pod
export const CreatePod201 = Pod
export type GetPodParams = { readonly "includeMachine"?: boolean, readonly "includeNetworkVolume"?: boolean, readonly "includeSavingsPlans"?: boolean, readonly "includeTemplate"?: boolean, readonly "includeWorkers"?: boolean }
export const GetPodParams = Schema.Struct({ "includeMachine": Schema.optionalKey(Schema.Boolean.annotate({ "description": "Include information about the machine the Pod is running on.", "default": false, "examples": [true] })), "includeNetworkVolume": Schema.optionalKey(Schema.Boolean.annotate({ "description": "Include information about the network volume attached to the returned Pod, if any.", "default": false, "examples": [true] })), "includeSavingsPlans": Schema.optionalKey(Schema.Boolean.annotate({ "description": "Include information about the savings plans applied to the Pod.", "default": false, "examples": [true] })), "includeTemplate": Schema.optionalKey(Schema.Boolean.annotate({ "description": "Include information about the template the Pod uses, if any.", "default": false, "examples": [true] })), "includeWorkers": Schema.optionalKey(Schema.Boolean.annotate({ "description": "Set to true to also list Pods which are Serverless workers.", "default": false, "examples": [true] })) })
export type GetPod200 = Pod
export const GetPod200 = Pod
export type UpdatePodRequestJson = PodUpdateInput
export const UpdatePodRequestJson = PodUpdateInput
export type UpdatePod200 = Pod
export const UpdatePod200 = Pod
export type UpdatePodPostRequestJson = PodUpdateInput
export const UpdatePodPostRequestJson = PodUpdateInput
export type UpdatePodPost200 = Pod
export const UpdatePodPost200 = Pod
export type ListEndpointsParams = { readonly "includeTemplate"?: boolean, readonly "includeWorkers"?: boolean }
export const ListEndpointsParams = Schema.Struct({ "includeTemplate": Schema.optionalKey(Schema.Boolean.annotate({ "description": "Include information about the template used to create the endpoint.", "default": false, "examples": [true] })), "includeWorkers": Schema.optionalKey(Schema.Boolean.annotate({ "description": "Include information about the workers running on the endpoint.", "default": false, "examples": [true] })) })
export type ListEndpoints200 = Endpoints
export const ListEndpoints200 = Endpoints
export type CreateEndpointRequestJson = EndpointCreateInput
export const CreateEndpointRequestJson = EndpointCreateInput
export type CreateEndpoint200 = Endpoint
export const CreateEndpoint200 = Endpoint
export type GetEndpointParams = { readonly "includeTemplate"?: boolean, readonly "includeWorkers"?: boolean }
export const GetEndpointParams = Schema.Struct({ "includeTemplate": Schema.optionalKey(Schema.Boolean.annotate({ "description": "Include information about the template used to create the endpoint.", "default": false, "examples": [true] })), "includeWorkers": Schema.optionalKey(Schema.Boolean.annotate({ "description": "Include information about the workers running on the endpoint.", "default": false, "examples": [true] })) })
export type GetEndpoint200 = Endpoint
export const GetEndpoint200 = Endpoint
export type UpdateEndpointRequestJson = EndpointUpdateInput
export const UpdateEndpointRequestJson = EndpointUpdateInput
export type UpdateEndpoint200 = Endpoint
export const UpdateEndpoint200 = Endpoint
export type UpdateEndpointPostRequestJson = EndpointUpdateInput
export const UpdateEndpointPostRequestJson = EndpointUpdateInput
export type UpdateEndpointPost200 = Endpoint
export const UpdateEndpointPost200 = Endpoint
export type ListTemplatesParams = { readonly "includeEndpointBoundTemplates"?: boolean, readonly "includePublicTemplates"?: boolean, readonly "includeRunpodTemplates"?: boolean }
export const ListTemplatesParams = Schema.Struct({ "includeEndpointBoundTemplates": Schema.optionalKey(Schema.Boolean.annotate({ "description": "Include templates bound to Serverless endpoints in the response.", "default": false, "examples": [true] })), "includePublicTemplates": Schema.optionalKey(Schema.Boolean.annotate({ "description": "Include community-made public templates in the response.", "default": false, "examples": [true] })), "includeRunpodTemplates": Schema.optionalKey(Schema.Boolean.annotate({ "description": "Include official Runpod templates in the response.", "default": false, "examples": [true] })) })
export type ListTemplates200 = Templates
export const ListTemplates200 = Templates
export type CreateTemplateRequestJson = TemplateCreateInput
export const CreateTemplateRequestJson = TemplateCreateInput
export type CreateTemplate200 = Template
export const CreateTemplate200 = Template
export type GetTemplateParams = { readonly "includeEndpointBoundTemplates"?: boolean, readonly "includePublicTemplates"?: boolean, readonly "includeRunpodTemplates"?: boolean }
export const GetTemplateParams = Schema.Struct({ "includeEndpointBoundTemplates": Schema.optionalKey(Schema.Boolean.annotate({ "description": "Include templates bound to Serverless endpoints in the response.", "default": false, "examples": [true] })), "includePublicTemplates": Schema.optionalKey(Schema.Boolean.annotate({ "description": "Include community-made public templates in the response.", "default": false, "examples": [true] })), "includeRunpodTemplates": Schema.optionalKey(Schema.Boolean.annotate({ "description": "Include official Runpod templates in the response.", "default": false, "examples": [true] })) })
export type GetTemplate200 = Template
export const GetTemplate200 = Template
export type UpdateTemplateRequestJson = TemplateUpdateInput
export const UpdateTemplateRequestJson = TemplateUpdateInput
export type UpdateTemplate200 = Template
export const UpdateTemplate200 = Template
export type UpdateTemplatePostRequestJson = TemplateUpdateInput
export const UpdateTemplatePostRequestJson = TemplateUpdateInput
export type UpdateTemplatePost200 = Template
export const UpdateTemplatePost200 = Template
export type ListNetworkVolumes200 = NetworkVolumes
export const ListNetworkVolumes200 = NetworkVolumes
export type CreateNetworkVolumeRequestJson = NetworkVolumeCreateInput
export const CreateNetworkVolumeRequestJson = NetworkVolumeCreateInput
export type CreateNetworkVolume200 = NetworkVolume
export const CreateNetworkVolume200 = NetworkVolume
export type GetNetworkVolume200 = NetworkVolume
export const GetNetworkVolume200 = NetworkVolume
export type UpdateNetworkVolumeRequestJson = NetworkVolumeUpdateInput
export const UpdateNetworkVolumeRequestJson = NetworkVolumeUpdateInput
export type UpdateNetworkVolume200 = NetworkVolume
export const UpdateNetworkVolume200 = NetworkVolume
export type UpdateNetworkVolumePostRequestJson = NetworkVolumeUpdateInput
export const UpdateNetworkVolumePostRequestJson = NetworkVolumeUpdateInput
export type UpdateNetworkVolumePost200 = NetworkVolume
export const UpdateNetworkVolumePost200 = NetworkVolume
export type ListContainerRegistryAuths200 = ContainerRegistryAuths
export const ListContainerRegistryAuths200 = ContainerRegistryAuths
export type CreateContainerRegistryAuthRequestJson = ContainerRegistryAuthCreateInput
export const CreateContainerRegistryAuthRequestJson = ContainerRegistryAuthCreateInput
export type CreateContainerRegistryAuth200 = ContainerRegistryAuth
export const CreateContainerRegistryAuth200 = ContainerRegistryAuth
export type GetContainerRegistryAuth200 = ContainerRegistryAuth
export const GetContainerRegistryAuth200 = ContainerRegistryAuth
export type PodBillingParams = { readonly "bucketSize"?: "hour" | "day" | "week" | "month" | "year", readonly "endTime"?: string, readonly "gpuTypeId"?: "AMD Instinct MI300X OAM" | "NVIDIA A100 80GB PCIe" | "NVIDIA A100-SXM4-40GB" | "NVIDIA A100-SXM4-80GB" | "NVIDIA A40" | "NVIDIA B200" | "NVIDIA B300 SXM6 AC" | "NVIDIA B300 SXM6 AC MIG 1g.34gb" | "NVIDIA GeForce RTX 3070" | "NVIDIA GeForce RTX 3080" | "NVIDIA GeForce RTX 3080 Ti" | "NVIDIA GeForce RTX 3090" | "NVIDIA GeForce RTX 3090 Ti" | "NVIDIA GeForce RTX 4070 Ti" | "NVIDIA GeForce RTX 4080" | "NVIDIA GeForce RTX 4080 SUPER" | "NVIDIA GeForce RTX 4090" | "NVIDIA GeForce RTX 5080" | "NVIDIA GeForce RTX 5090" | "NVIDIA H100 80GB HBM3" | "NVIDIA H100 NVL" | "NVIDIA H100 PCIe" | "NVIDIA H200" | "NVIDIA H200 NVL" | "NVIDIA L4" | "NVIDIA L40" | "NVIDIA L40S" | "NVIDIA RTX 2000 Ada Generation" | "NVIDIA RTX 4000 Ada Generation" | "NVIDIA RTX 4000 SFF Ada Generation" | "NVIDIA RTX 5000 Ada Generation" | "NVIDIA RTX 6000 Ada Generation" | "NVIDIA RTX A2000" | "NVIDIA RTX A4000" | "NVIDIA RTX A4500" | "NVIDIA RTX A5000" | "NVIDIA RTX A6000" | "NVIDIA RTX PRO 4000 Blackwell" | "NVIDIA RTX PRO 4500 Blackwell" | "NVIDIA RTX PRO 5000 Blackwell" | "NVIDIA RTX PRO 6000 Blackwell Max-Q Workstation Edition" | "NVIDIA RTX PRO 6000 Blackwell Server Edition" | "NVIDIA RTX PRO 6000 Blackwell Workstation Edition" | "Tesla V100-PCIE-16GB" | "Tesla V100-SXM2-16GB", readonly "grouping"?: "podId" | "gpuTypeId", readonly "podId"?: string, readonly "startTime"?: string }
export const PodBillingParams = Schema.Struct({ "bucketSize": Schema.optionalKey(Schema.Literals(["hour", "day", "week", "month", "year"]).annotate({ "description": "The length of each billing time bucket. The billing time bucket is the time range over which each billing record is aggregated.", "default": "day" })), "endTime": Schema.optionalKey(Schema.String.annotate({ "description": "The end date of the billing period to retrieve.", "examples": ["2023-01-31T23:59:59Z"], "format": "date-time" })), "gpuTypeId": Schema.optionalKey(Schema.Literals(["AMD Instinct MI300X OAM", "NVIDIA A100 80GB PCIe", "NVIDIA A100-SXM4-40GB", "NVIDIA A100-SXM4-80GB", "NVIDIA A40", "NVIDIA B200", "NVIDIA B300 SXM6 AC", "NVIDIA B300 SXM6 AC MIG 1g.34gb", "NVIDIA GeForce RTX 3070", "NVIDIA GeForce RTX 3080", "NVIDIA GeForce RTX 3080 Ti", "NVIDIA GeForce RTX 3090", "NVIDIA GeForce RTX 3090 Ti", "NVIDIA GeForce RTX 4070 Ti", "NVIDIA GeForce RTX 4080", "NVIDIA GeForce RTX 4080 SUPER", "NVIDIA GeForce RTX 4090", "NVIDIA GeForce RTX 5080", "NVIDIA GeForce RTX 5090", "NVIDIA H100 80GB HBM3", "NVIDIA H100 NVL", "NVIDIA H100 PCIe", "NVIDIA H200", "NVIDIA H200 NVL", "NVIDIA L4", "NVIDIA L40", "NVIDIA L40S", "NVIDIA RTX 2000 Ada Generation", "NVIDIA RTX 4000 Ada Generation", "NVIDIA RTX 4000 SFF Ada Generation", "NVIDIA RTX 5000 Ada Generation", "NVIDIA RTX 6000 Ada Generation", "NVIDIA RTX A2000", "NVIDIA RTX A4000", "NVIDIA RTX A4500", "NVIDIA RTX A5000", "NVIDIA RTX A6000", "NVIDIA RTX PRO 4000 Blackwell", "NVIDIA RTX PRO 4500 Blackwell", "NVIDIA RTX PRO 5000 Blackwell", "NVIDIA RTX PRO 6000 Blackwell Max-Q Workstation Edition", "NVIDIA RTX PRO 6000 Blackwell Server Edition", "NVIDIA RTX PRO 6000 Blackwell Workstation Edition", "Tesla V100-PCIE-16GB", "Tesla V100-SXM2-16GB"]).annotate({ "description": "Filter to Pods with the provided GPU type attached.", "examples": ["NVIDIA GeForce RTX 4090"] })), "grouping": Schema.optionalKey(Schema.Literals(["podId", "gpuTypeId"]).annotate({ "description": "Group the billing records by the provided field.", "default": "gpuTypeId" })), "podId": Schema.optionalKey(Schema.String.annotate({ "description": "Filter to a specific Pod.", "examples": ["xedezhzb9la3ye"] })), "startTime": Schema.optionalKey(Schema.String.annotate({ "description": "The start date of the billing period to retrieve.", "examples": ["2023-01-01T00:00:00Z"], "format": "date-time" })) })
export type PodBilling200 = BillingRecords
export const PodBilling200 = BillingRecords
export type EndpointBillingParams = { readonly "bucketSize"?: "hour" | "day" | "week" | "month" | "year", readonly "dataCenterId"?: ReadonlyArray<"EU-RO-1" | "CA-MTL-1" | "EU-SE-1" | "US-IL-1" | "EUR-IS-1" | "EU-CZ-1" | "US-TX-3" | "EUR-IS-2" | "US-KS-2" | "US-GA-2" | "US-WA-1" | "US-TX-1" | "CA-MTL-3" | "EU-NL-1" | "US-TX-4" | "US-CA-2" | "US-NC-1" | "OC-AU-1" | "US-DE-1" | "EUR-IS-3" | "CA-MTL-2" | "AP-JP-1" | "EUR-NO-1" | "EU-FR-1" | "US-KS-3" | "US-GA-1" | "AP-IN-1" | "US-MD-1">, readonly "endpointId"?: string, readonly "endTime"?: string, readonly "gpuTypeId"?: ReadonlyArray<"AMD Instinct MI300X OAM" | "NVIDIA A100 80GB PCIe" | "NVIDIA A100-SXM4-40GB" | "NVIDIA A100-SXM4-80GB" | "NVIDIA A40" | "NVIDIA B200" | "NVIDIA B300 SXM6 AC" | "NVIDIA B300 SXM6 AC MIG 1g.34gb" | "NVIDIA GeForce RTX 3070" | "NVIDIA GeForce RTX 3080" | "NVIDIA GeForce RTX 3080 Ti" | "NVIDIA GeForce RTX 3090" | "NVIDIA GeForce RTX 3090 Ti" | "NVIDIA GeForce RTX 4070 Ti" | "NVIDIA GeForce RTX 4080" | "NVIDIA GeForce RTX 4080 SUPER" | "NVIDIA GeForce RTX 4090" | "NVIDIA GeForce RTX 5080" | "NVIDIA GeForce RTX 5090" | "NVIDIA H100 80GB HBM3" | "NVIDIA H100 NVL" | "NVIDIA H100 PCIe" | "NVIDIA H200" | "NVIDIA H200 NVL" | "NVIDIA L4" | "NVIDIA L40" | "NVIDIA L40S" | "NVIDIA RTX 2000 Ada Generation" | "NVIDIA RTX 4000 Ada Generation" | "NVIDIA RTX 4000 SFF Ada Generation" | "NVIDIA RTX 5000 Ada Generation" | "NVIDIA RTX 6000 Ada Generation" | "NVIDIA RTX A2000" | "NVIDIA RTX A4000" | "NVIDIA RTX A4500" | "NVIDIA RTX A5000" | "NVIDIA RTX A6000" | "NVIDIA RTX PRO 4000 Blackwell" | "NVIDIA RTX PRO 4500 Blackwell" | "NVIDIA RTX PRO 5000 Blackwell" | "NVIDIA RTX PRO 6000 Blackwell Max-Q Workstation Edition" | "NVIDIA RTX PRO 6000 Blackwell Server Edition" | "NVIDIA RTX PRO 6000 Blackwell Workstation Edition" | "Tesla V100-PCIE-16GB" | "Tesla V100-SXM2-16GB">, readonly "grouping"?: "endpointId" | "podId" | "gpuTypeId", readonly "imageName"?: string, readonly "startTime"?: string, readonly "templateId"?: string }
export const EndpointBillingParams = Schema.Struct({ "bucketSize": Schema.optionalKey(Schema.Literals(["hour", "day", "week", "month", "year"]).annotate({ "description": "The length of each billing time bucket. The billing time bucket is the time range over which each billing record is aggregated.", "default": "day" })), "dataCenterId": Schema.optionalKey(Schema.Array(Schema.Literals(["EU-RO-1", "CA-MTL-1", "EU-SE-1", "US-IL-1", "EUR-IS-1", "EU-CZ-1", "US-TX-3", "EUR-IS-2", "US-KS-2", "US-GA-2", "US-WA-1", "US-TX-1", "CA-MTL-3", "EU-NL-1", "US-TX-4", "US-CA-2", "US-NC-1", "OC-AU-1", "US-DE-1", "EUR-IS-3", "CA-MTL-2", "AP-JP-1", "EUR-NO-1", "EU-FR-1", "US-KS-3", "US-GA-1", "AP-IN-1", "US-MD-1"])).annotate({ "description": "Filter to endpoints located in any of the provided Runpod data centers. The data center IDs are listed in the response of the /pods endpoint.", "default": ["EU-RO-1", "CA-MTL-1", "EU-SE-1", "US-IL-1", "EUR-IS-1", "EU-CZ-1", "US-TX-3", "EUR-IS-2", "US-KS-2", "US-GA-2", "US-WA-1", "US-TX-1", "CA-MTL-3", "EU-NL-1", "US-TX-4", "US-CA-2", "US-NC-1", "OC-AU-1", "US-DE-1", "EUR-IS-3", "CA-MTL-2", "AP-JP-1", "EUR-NO-1", "EU-FR-1", "US-KS-3", "US-GA-1", "AP-IN-1", "US-MD-1"], "examples": [["EU-RO-1", "CA-MTL-1"]] })), "endpointId": Schema.optionalKey(Schema.String.annotate({ "description": "Filter to a specific endpoint.", "examples": ["jpnw0v75y3qoql"] })), "endTime": Schema.optionalKey(Schema.String.annotate({ "description": "The end date of the billing period to retrieve.", "examples": ["2023-01-31T23:59:59Z"], "format": "date-time" })), "gpuTypeId": Schema.optionalKey(Schema.Array(Schema.Literals(["AMD Instinct MI300X OAM", "NVIDIA A100 80GB PCIe", "NVIDIA A100-SXM4-40GB", "NVIDIA A100-SXM4-80GB", "NVIDIA A40", "NVIDIA B200", "NVIDIA B300 SXM6 AC", "NVIDIA B300 SXM6 AC MIG 1g.34gb", "NVIDIA GeForce RTX 3070", "NVIDIA GeForce RTX 3080", "NVIDIA GeForce RTX 3080 Ti", "NVIDIA GeForce RTX 3090", "NVIDIA GeForce RTX 3090 Ti", "NVIDIA GeForce RTX 4070 Ti", "NVIDIA GeForce RTX 4080", "NVIDIA GeForce RTX 4080 SUPER", "NVIDIA GeForce RTX 4090", "NVIDIA GeForce RTX 5080", "NVIDIA GeForce RTX 5090", "NVIDIA H100 80GB HBM3", "NVIDIA H100 NVL", "NVIDIA H100 PCIe", "NVIDIA H200", "NVIDIA H200 NVL", "NVIDIA L4", "NVIDIA L40", "NVIDIA L40S", "NVIDIA RTX 2000 Ada Generation", "NVIDIA RTX 4000 Ada Generation", "NVIDIA RTX 4000 SFF Ada Generation", "NVIDIA RTX 5000 Ada Generation", "NVIDIA RTX 6000 Ada Generation", "NVIDIA RTX A2000", "NVIDIA RTX A4000", "NVIDIA RTX A4500", "NVIDIA RTX A5000", "NVIDIA RTX A6000", "NVIDIA RTX PRO 4000 Blackwell", "NVIDIA RTX PRO 4500 Blackwell", "NVIDIA RTX PRO 5000 Blackwell", "NVIDIA RTX PRO 6000 Blackwell Max-Q Workstation Edition", "NVIDIA RTX PRO 6000 Blackwell Server Edition", "NVIDIA RTX PRO 6000 Blackwell Workstation Edition", "Tesla V100-PCIE-16GB", "Tesla V100-SXM2-16GB"])).annotate({ "description": "Filter to endpoints with the provided GPU type attached." })), "grouping": Schema.optionalKey(Schema.Literals(["endpointId", "podId", "gpuTypeId"]).annotate({ "description": "Group the billing records by the provided field.", "default": "endpointId" })), "imageName": Schema.optionalKey(Schema.String.annotate({ "description": "Filter to endpoints created with the provided image.", "examples": ["runpod/pytorch:2.1.0-py3.10-cuda11.8.0-devel-ubuntu22.04"] })), "startTime": Schema.optionalKey(Schema.String.annotate({ "description": "The start date of the billing period to retrieve.", "examples": ["2023-01-01T00:00:00Z"], "format": "date-time" })), "templateId": Schema.optionalKey(Schema.String.annotate({ "description": "Filter to endpoints created from the provided template.", "examples": ["30zmvf89kd"] })) })
export type EndpointBilling200 = BillingRecords
export const EndpointBilling200 = BillingRecords
export type NetworkVolumeBillingParams = { readonly "bucketSize"?: "hour" | "day" | "week" | "month" | "year", readonly "endTime"?: string, readonly "startTime"?: string }
export const NetworkVolumeBillingParams = Schema.Struct({ "bucketSize": Schema.optionalKey(Schema.Literals(["hour", "day", "week", "month", "year"]).annotate({ "description": "The length of each billing time bucket. The billing time bucket is the time range over which each billing record is aggregated.", "default": "day" })), "endTime": Schema.optionalKey(Schema.String.annotate({ "description": "The end date of the billing period to retrieve.", "examples": ["2023-01-31T23:59:59Z"], "format": "date-time" })), "startTime": Schema.optionalKey(Schema.String.annotate({ "description": "The start date of the billing period to retrieve.", "examples": ["2023-01-01T00:00:00Z"], "format": "date-time" })) })
export type NetworkVolumeBilling200 = NetworkVolumeBillingRecords
export const NetworkVolumeBilling200 = NetworkVolumeBillingRecords

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
  readonly includeResponse?: boolean | undefined
}

/**
 * A utility type which optionally includes the response in the return result
 * of an operation based upon the value of the `includeResponse` configuration
 * option.
 */
export type WithOptionalResponse<A, Config extends OperationConfig> = Config extends {
  readonly includeResponse: true
} ? [A, HttpClientResponse.HttpClientResponse] : A

export const make = (
  httpClient: HttpClient.HttpClient,
  options: {
    readonly transformClient?: ((client: HttpClient.HttpClient) => Effect.Effect<HttpClient.HttpClient>) | undefined
  } = {}
): Runpod => {
  const unexpectedStatus = (response: HttpClientResponse.HttpClientResponse) =>
    Effect.flatMap(
      Effect.orElseSucceed(response.json, () => "Unexpected status code"),
      (description) =>
        Effect.fail(
          new HttpClientError.HttpClientError({
            reason: new HttpClientError.StatusCodeError({
              request: response.request,
              response,
              description: typeof description === "string" ? description : JSON.stringify(description),
            }),
          }),
        ),
    )
  const withResponse = <Config extends OperationConfig>(config: Config | undefined) => (
    f: (response: HttpClientResponse.HttpClientResponse) => Effect.Effect<any, any>,
  ): (request: HttpClientRequest.HttpClientRequest) => Effect.Effect<any, any> => {
    const withOptionalResponse = (
      config?.includeResponse
        ? (response: HttpClientResponse.HttpClientResponse) => Effect.map(f(response), (a) => [a, response])
        : (response: HttpClientResponse.HttpClientResponse) => f(response)
    ) as any
    return options?.transformClient
      ? (request) =>
          Effect.flatMap(
            Effect.flatMap(options.transformClient!(httpClient), (client) => client.execute(request)),
            withOptionalResponse
          )
      : (request) => Effect.flatMap(httpClient.execute(request), withOptionalResponse)
  }
  const __encodePathParam = encodeURIComponent
  const __makePathRequest = (
    method: (url: string) => HttpClientRequest.HttpClientRequest,
    parameters: ReadonlyArray<string>,
    getPath: () => string,
  ) => Effect.suspend(() => {
    const fail = (description: string, cause?: unknown) => Effect.fail(
      new HttpClientError.HttpClientError({
        reason: new HttpClientError.InvalidUrlError({
          request: method(""),
          cause,
          description,
        }),
      }),
    )
    if (parameters.some((value) => value === "" || /^(?:\.|%2e){1,2}$/i.test(value))) {
      return fail("Path parameters must be non-empty and cannot be dot segments")
    }
    let path: string
    try {
      path = getPath()
    } catch (cause) {
      return fail("Failed to encode path parameter", cause)
    }
    if (path.split("/").some((segment) => /^(?:\.|%2e){1,2}$/i.test(segment))) {
      return fail("Request paths cannot contain dot segments")
    }
    return Effect.succeed(method(path))
  })
  const decodeVoidError = <const Tag extends string>(tag: Tag) =>
    (response: HttpClientResponse.HttpClientResponse) =>
      Effect.fail(RunpodError(tag, undefined, response))
  const decodeSuccess =
    <Schema extends Schema.Constraint>(schema: Schema) =>
    (response: HttpClientResponse.HttpClientResponse) =>
      HttpClientResponse.schemaBodyJson(schema)(response)
  const decodeError =
    <const Tag extends string, Schema extends Schema.Constraint>(tag: Tag, schema: Schema) =>
    (response: HttpClientResponse.HttpClientResponse) =>
      Effect.flatMap(
        HttpClientResponse.schemaBodyJson(schema)(response),
        (cause) => Effect.fail(RunpodError(tag, cause, response)),
      )
  return {
    httpClient,
    "GetOpenAPI": (options) => HttpClientRequest.get("/openapi.json").pipe(
      withResponse(options?.config)(HttpClientResponse.matchStatus({
      "2xx": decodeSuccess(GetOpenAPI200),
      orElse: unexpectedStatus
    }))
    ),
    "GetDocs": (options) => HttpClientRequest.get("/docs").pipe(
      withResponse(options?.config)(HttpClientResponse.matchStatus({
      "400": decodeVoidError("400"),
      orElse: unexpectedStatus
    }))
    ),
    "ListPods": (options) => HttpClientRequest.get("/pods").pipe(
      HttpClientRequest.setUrlParams({ "computeType": options?.params?.["computeType"] as any, "cpuFlavorId": options?.params?.["cpuFlavorId"] as any, "dataCenterId": options?.params?.["dataCenterId"] as any, "desiredStatus": options?.params?.["desiredStatus"] as any, "endpointId": options?.params?.["endpointId"] as any, "gpuTypeId": options?.params?.["gpuTypeId"] as any, "id": options?.params?.["id"] as any, "imageName": options?.params?.["imageName"] as any, "includeMachine": options?.params?.["includeMachine"] as any, "includeNetworkVolume": options?.params?.["includeNetworkVolume"] as any, "includeSavingsPlans": options?.params?.["includeSavingsPlans"] as any, "includeTemplate": options?.params?.["includeTemplate"] as any, "includeWorkers": options?.params?.["includeWorkers"] as any, "name": options?.params?.["name"] as any, "networkVolumeId": options?.params?.["networkVolumeId"] as any, "templateId": options?.params?.["templateId"] as any }),
      withResponse(options?.config)(HttpClientResponse.matchStatus({
      "2xx": decodeSuccess(ListPods200),
      "400": decodeVoidError("400"),
      "404": decodeVoidError("404"),
      orElse: unexpectedStatus
    }))
    ),
    "CreatePod": (options) => HttpClientRequest.post("/pods").pipe(
      HttpClientRequest.bodyJsonUnsafe(options.payload),
      withResponse(options.config)(HttpClientResponse.matchStatus({
      "2xx": decodeSuccess(CreatePod201),
      "400": decodeVoidError("400"),
      orElse: unexpectedStatus
    }))
    ),
    "GetPod": (podId, options) => __makePathRequest(HttpClientRequest.get, [podId], () => "/pods/" + __encodePathParam(podId) + "").pipe(
    Effect.flatMap((request) => request.pipe(
      HttpClientRequest.setUrlParams({ "includeMachine": options?.params?.["includeMachine"] as any, "includeNetworkVolume": options?.params?.["includeNetworkVolume"] as any, "includeSavingsPlans": options?.params?.["includeSavingsPlans"] as any, "includeTemplate": options?.params?.["includeTemplate"] as any, "includeWorkers": options?.params?.["includeWorkers"] as any }),
      withResponse(options?.config)(HttpClientResponse.matchStatus({
      "2xx": decodeSuccess(GetPod200),
      "400": decodeVoidError("400"),
      "404": decodeVoidError("404"),
      orElse: unexpectedStatus
    }))
    ))
  ),
    "DeletePod": (podId, options) => __makePathRequest(HttpClientRequest.delete, [podId], () => "/pods/" + __encodePathParam(podId) + "").pipe(
    Effect.flatMap((request) => request.pipe(
      withResponse(options?.config)(HttpClientResponse.matchStatus({
      "204": () => Effect.void,
      "400": decodeVoidError("400"),
      "401": decodeVoidError("401"),
      orElse: unexpectedStatus
    }))
    ))
  ),
    "UpdatePod": (podId, options) => __makePathRequest(HttpClientRequest.patch, [podId], () => "/pods/" + __encodePathParam(podId) + "").pipe(
    Effect.flatMap((request) => request.pipe(
      HttpClientRequest.bodyJsonUnsafe(options.payload),
      withResponse(options.config)(HttpClientResponse.matchStatus({
      "2xx": decodeSuccess(UpdatePod200),
      "400": decodeVoidError("400"),
      orElse: unexpectedStatus
    }))
    ))
  ),
    "UpdatePodPost": (podId, options) => __makePathRequest(HttpClientRequest.post, [podId], () => "/pods/" + __encodePathParam(podId) + "/update").pipe(
    Effect.flatMap((request) => request.pipe(
      HttpClientRequest.bodyJsonUnsafe(options.payload),
      withResponse(options.config)(HttpClientResponse.matchStatus({
      "2xx": decodeSuccess(UpdatePodPost200),
      "400": decodeVoidError("400"),
      orElse: unexpectedStatus
    }))
    ))
  ),
    "StartPod": (podId, options) => __makePathRequest(HttpClientRequest.post, [podId], () => "/pods/" + __encodePathParam(podId) + "/start").pipe(
    Effect.flatMap((request) => request.pipe(
      withResponse(options?.config)(HttpClientResponse.matchStatus({
      "200": () => Effect.void,
      "400": decodeVoidError("400"),
      "401": decodeVoidError("401"),
      orElse: unexpectedStatus
    }))
    ))
  ),
    "StopPod": (podId, options) => __makePathRequest(HttpClientRequest.post, [podId], () => "/pods/" + __encodePathParam(podId) + "/stop").pipe(
    Effect.flatMap((request) => request.pipe(
      withResponse(options?.config)(HttpClientResponse.matchStatus({
      "200": () => Effect.void,
      "400": decodeVoidError("400"),
      "401": decodeVoidError("401"),
      orElse: unexpectedStatus
    }))
    ))
  ),
    "ResetPod": (podId, options) => __makePathRequest(HttpClientRequest.post, [podId], () => "/pods/" + __encodePathParam(podId) + "/reset").pipe(
    Effect.flatMap((request) => request.pipe(
      withResponse(options?.config)(HttpClientResponse.matchStatus({
      "200": () => Effect.void,
      "400": decodeVoidError("400"),
      "401": decodeVoidError("401"),
      orElse: unexpectedStatus
    }))
    ))
  ),
    "RestartPod": (podId, options) => __makePathRequest(HttpClientRequest.post, [podId], () => "/pods/" + __encodePathParam(podId) + "/restart").pipe(
    Effect.flatMap((request) => request.pipe(
      withResponse(options?.config)(HttpClientResponse.matchStatus({
      "400": decodeVoidError("400"),
      "401": decodeVoidError("401"),
      orElse: unexpectedStatus
    }))
    ))
  ),
    "ListEndpoints": (options) => HttpClientRequest.get("/endpoints").pipe(
      HttpClientRequest.setUrlParams({ "includeTemplate": options?.params?.["includeTemplate"] as any, "includeWorkers": options?.params?.["includeWorkers"] as any }),
      withResponse(options?.config)(HttpClientResponse.matchStatus({
      "2xx": decodeSuccess(ListEndpoints200),
      "400": decodeVoidError("400"),
      "404": decodeVoidError("404"),
      orElse: unexpectedStatus
    }))
    ),
    "CreateEndpoint": (options) => HttpClientRequest.post("/endpoints").pipe(
      HttpClientRequest.bodyJsonUnsafe(options.payload),
      withResponse(options.config)(HttpClientResponse.matchStatus({
      "2xx": decodeSuccess(CreateEndpoint200),
      "400": decodeVoidError("400"),
      orElse: unexpectedStatus
    }))
    ),
    "GetEndpoint": (endpointId, options) => __makePathRequest(HttpClientRequest.get, [endpointId], () => "/endpoints/" + __encodePathParam(endpointId) + "").pipe(
    Effect.flatMap((request) => request.pipe(
      HttpClientRequest.setUrlParams({ "includeTemplate": options?.params?.["includeTemplate"] as any, "includeWorkers": options?.params?.["includeWorkers"] as any }),
      withResponse(options?.config)(HttpClientResponse.matchStatus({
      "2xx": decodeSuccess(GetEndpoint200),
      "400": decodeVoidError("400"),
      "404": decodeVoidError("404"),
      orElse: unexpectedStatus
    }))
    ))
  ),
    "DeleteEndpoint": (endpointId, options) => __makePathRequest(HttpClientRequest.delete, [endpointId], () => "/endpoints/" + __encodePathParam(endpointId) + "").pipe(
    Effect.flatMap((request) => request.pipe(
      withResponse(options?.config)(HttpClientResponse.matchStatus({
      "204": () => Effect.void,
      "400": decodeVoidError("400"),
      "401": decodeVoidError("401"),
      orElse: unexpectedStatus
    }))
    ))
  ),
    "UpdateEndpoint": (endpointId, options) => __makePathRequest(HttpClientRequest.patch, [endpointId], () => "/endpoints/" + __encodePathParam(endpointId) + "").pipe(
    Effect.flatMap((request) => request.pipe(
      HttpClientRequest.bodyJsonUnsafe(options.payload),
      withResponse(options.config)(HttpClientResponse.matchStatus({
      "2xx": decodeSuccess(UpdateEndpoint200),
      "400": decodeVoidError("400"),
      orElse: unexpectedStatus
    }))
    ))
  ),
    "UpdateEndpointPost": (endpointId, options) => __makePathRequest(HttpClientRequest.post, [endpointId], () => "/endpoints/" + __encodePathParam(endpointId) + "/update").pipe(
    Effect.flatMap((request) => request.pipe(
      HttpClientRequest.bodyJsonUnsafe(options.payload),
      withResponse(options.config)(HttpClientResponse.matchStatus({
      "2xx": decodeSuccess(UpdateEndpointPost200),
      "400": decodeVoidError("400"),
      orElse: unexpectedStatus
    }))
    ))
  ),
    "ListTemplates": (options) => HttpClientRequest.get("/templates").pipe(
      HttpClientRequest.setUrlParams({ "includeEndpointBoundTemplates": options?.params?.["includeEndpointBoundTemplates"] as any, "includePublicTemplates": options?.params?.["includePublicTemplates"] as any, "includeRunpodTemplates": options?.params?.["includeRunpodTemplates"] as any }),
      withResponse(options?.config)(HttpClientResponse.matchStatus({
      "2xx": decodeSuccess(ListTemplates200),
      "400": decodeVoidError("400"),
      "404": decodeVoidError("404"),
      orElse: unexpectedStatus
    }))
    ),
    "CreateTemplate": (options) => HttpClientRequest.post("/templates").pipe(
      HttpClientRequest.bodyJsonUnsafe(options.payload),
      withResponse(options.config)(HttpClientResponse.matchStatus({
      "2xx": decodeSuccess(CreateTemplate200),
      "400": decodeVoidError("400"),
      orElse: unexpectedStatus
    }))
    ),
    "GetTemplate": (templateId, options) => __makePathRequest(HttpClientRequest.get, [templateId], () => "/templates/" + __encodePathParam(templateId) + "").pipe(
    Effect.flatMap((request) => request.pipe(
      HttpClientRequest.setUrlParams({ "includeEndpointBoundTemplates": options?.params?.["includeEndpointBoundTemplates"] as any, "includePublicTemplates": options?.params?.["includePublicTemplates"] as any, "includeRunpodTemplates": options?.params?.["includeRunpodTemplates"] as any }),
      withResponse(options?.config)(HttpClientResponse.matchStatus({
      "2xx": decodeSuccess(GetTemplate200),
      "400": decodeVoidError("400"),
      "404": decodeVoidError("404"),
      orElse: unexpectedStatus
    }))
    ))
  ),
    "DeleteTemplate": (templateId, options) => __makePathRequest(HttpClientRequest.delete, [templateId], () => "/templates/" + __encodePathParam(templateId) + "").pipe(
    Effect.flatMap((request) => request.pipe(
      withResponse(options?.config)(HttpClientResponse.matchStatus({
      "204": () => Effect.void,
      "400": decodeVoidError("400"),
      "401": decodeVoidError("401"),
      orElse: unexpectedStatus
    }))
    ))
  ),
    "UpdateTemplate": (templateId, options) => __makePathRequest(HttpClientRequest.patch, [templateId], () => "/templates/" + __encodePathParam(templateId) + "").pipe(
    Effect.flatMap((request) => request.pipe(
      HttpClientRequest.bodyJsonUnsafe(options.payload),
      withResponse(options.config)(HttpClientResponse.matchStatus({
      "2xx": decodeSuccess(UpdateTemplate200),
      "400": decodeVoidError("400"),
      orElse: unexpectedStatus
    }))
    ))
  ),
    "UpdateTemplatePost": (templateId, options) => __makePathRequest(HttpClientRequest.post, [templateId], () => "/templates/" + __encodePathParam(templateId) + "/update").pipe(
    Effect.flatMap((request) => request.pipe(
      HttpClientRequest.bodyJsonUnsafe(options.payload),
      withResponse(options.config)(HttpClientResponse.matchStatus({
      "2xx": decodeSuccess(UpdateTemplatePost200),
      "400": decodeVoidError("400"),
      orElse: unexpectedStatus
    }))
    ))
  ),
    "ListNetworkVolumes": (options) => HttpClientRequest.get("/networkvolumes").pipe(
      withResponse(options?.config)(HttpClientResponse.matchStatus({
      "2xx": decodeSuccess(ListNetworkVolumes200),
      "400": decodeVoidError("400"),
      "404": decodeVoidError("404"),
      orElse: unexpectedStatus
    }))
    ),
    "CreateNetworkVolume": (options) => HttpClientRequest.post("/networkvolumes").pipe(
      HttpClientRequest.bodyJsonUnsafe(options.payload),
      withResponse(options.config)(HttpClientResponse.matchStatus({
      "2xx": decodeSuccess(CreateNetworkVolume200),
      "400": decodeVoidError("400"),
      orElse: unexpectedStatus
    }))
    ),
    "GetNetworkVolume": (networkVolumeId, options) => __makePathRequest(HttpClientRequest.get, [networkVolumeId], () => "/networkvolumes/" + __encodePathParam(networkVolumeId) + "").pipe(
    Effect.flatMap((request) => request.pipe(
      withResponse(options?.config)(HttpClientResponse.matchStatus({
      "2xx": decodeSuccess(GetNetworkVolume200),
      "400": decodeVoidError("400"),
      "404": decodeVoidError("404"),
      orElse: unexpectedStatus
    }))
    ))
  ),
    "DeleteNetworkVolume": (networkVolumeId, options) => __makePathRequest(HttpClientRequest.delete, [networkVolumeId], () => "/networkvolumes/" + __encodePathParam(networkVolumeId) + "").pipe(
    Effect.flatMap((request) => request.pipe(
      withResponse(options?.config)(HttpClientResponse.matchStatus({
      "204": () => Effect.void,
      "400": decodeVoidError("400"),
      "401": decodeVoidError("401"),
      orElse: unexpectedStatus
    }))
    ))
  ),
    "UpdateNetworkVolume": (networkVolumeId, options) => __makePathRequest(HttpClientRequest.patch, [networkVolumeId], () => "/networkvolumes/" + __encodePathParam(networkVolumeId) + "").pipe(
    Effect.flatMap((request) => request.pipe(
      HttpClientRequest.bodyJsonUnsafe(options.payload),
      withResponse(options.config)(HttpClientResponse.matchStatus({
      "2xx": decodeSuccess(UpdateNetworkVolume200),
      "400": decodeVoidError("400"),
      orElse: unexpectedStatus
    }))
    ))
  ),
    "UpdateNetworkVolumePost": (networkVolumeId, options) => __makePathRequest(HttpClientRequest.post, [networkVolumeId], () => "/networkvolumes/" + __encodePathParam(networkVolumeId) + "/update").pipe(
    Effect.flatMap((request) => request.pipe(
      HttpClientRequest.bodyJsonUnsafe(options.payload),
      withResponse(options.config)(HttpClientResponse.matchStatus({
      "2xx": decodeSuccess(UpdateNetworkVolumePost200),
      "400": decodeVoidError("400"),
      orElse: unexpectedStatus
    }))
    ))
  ),
    "ListContainerRegistryAuths": (options) => HttpClientRequest.get("/containerregistryauth").pipe(
      withResponse(options?.config)(HttpClientResponse.matchStatus({
      "2xx": decodeSuccess(ListContainerRegistryAuths200),
      "400": decodeVoidError("400"),
      "404": decodeVoidError("404"),
      orElse: unexpectedStatus
    }))
    ),
    "CreateContainerRegistryAuth": (options) => HttpClientRequest.post("/containerregistryauth").pipe(
      HttpClientRequest.bodyJsonUnsafe(options.payload),
      withResponse(options.config)(HttpClientResponse.matchStatus({
      "2xx": decodeSuccess(CreateContainerRegistryAuth200),
      "400": decodeVoidError("400"),
      orElse: unexpectedStatus
    }))
    ),
    "GetContainerRegistryAuth": (containerRegistryAuthId, options) => __makePathRequest(HttpClientRequest.get, [containerRegistryAuthId], () => "/containerregistryauth/" + __encodePathParam(containerRegistryAuthId) + "").pipe(
    Effect.flatMap((request) => request.pipe(
      withResponse(options?.config)(HttpClientResponse.matchStatus({
      "2xx": decodeSuccess(GetContainerRegistryAuth200),
      "400": decodeVoidError("400"),
      "404": decodeVoidError("404"),
      orElse: unexpectedStatus
    }))
    ))
  ),
    "DeleteContainerRegistryAuth": (containerRegistryAuthId, options) => __makePathRequest(HttpClientRequest.delete, [containerRegistryAuthId], () => "/containerregistryauth/" + __encodePathParam(containerRegistryAuthId) + "").pipe(
    Effect.flatMap((request) => request.pipe(
      withResponse(options?.config)(HttpClientResponse.matchStatus({
      "204": () => Effect.void,
      "400": decodeVoidError("400"),
      "401": decodeVoidError("401"),
      orElse: unexpectedStatus
    }))
    ))
  ),
    "PodBilling": (options) => HttpClientRequest.get("/billing/pods").pipe(
      HttpClientRequest.setUrlParams({ "bucketSize": options?.params?.["bucketSize"] as any, "endTime": options?.params?.["endTime"] as any, "gpuTypeId": options?.params?.["gpuTypeId"] as any, "grouping": options?.params?.["grouping"] as any, "podId": options?.params?.["podId"] as any, "startTime": options?.params?.["startTime"] as any }),
      withResponse(options?.config)(HttpClientResponse.matchStatus({
      "2xx": decodeSuccess(PodBilling200),
      orElse: unexpectedStatus
    }))
    ),
    "EndpointBilling": (options) => HttpClientRequest.get("/billing/endpoints").pipe(
      HttpClientRequest.setUrlParams({ "bucketSize": options?.params?.["bucketSize"] as any, "dataCenterId": options?.params?.["dataCenterId"] as any, "endpointId": options?.params?.["endpointId"] as any, "endTime": options?.params?.["endTime"] as any, "gpuTypeId": options?.params?.["gpuTypeId"] as any, "grouping": options?.params?.["grouping"] as any, "imageName": options?.params?.["imageName"] as any, "startTime": options?.params?.["startTime"] as any, "templateId": options?.params?.["templateId"] as any }),
      withResponse(options?.config)(HttpClientResponse.matchStatus({
      "2xx": decodeSuccess(EndpointBilling200),
      orElse: unexpectedStatus
    }))
    ),
    "NetworkVolumeBilling": (options) => HttpClientRequest.get("/billing/networkvolumes").pipe(
      HttpClientRequest.setUrlParams({ "bucketSize": options?.params?.["bucketSize"] as any, "endTime": options?.params?.["endTime"] as any, "startTime": options?.params?.["startTime"] as any }),
      withResponse(options?.config)(HttpClientResponse.matchStatus({
      "2xx": decodeSuccess(NetworkVolumeBilling200),
      orElse: unexpectedStatus
    }))
    )
  }
}

export interface Runpod {
  readonly httpClient: HttpClient.HttpClient
  /**
* The OpenAPI 3.0 schema.
*/
readonly "GetOpenAPI": <Config extends OperationConfig>(options: { readonly config?: Config | undefined } | undefined) => Effect.Effect<WithOptionalResponse<typeof GetOpenAPI200.Type, Config>, HttpClientError.HttpClientError | SchemaError>
  /**
* Interactive API documentation.
*/
readonly "GetDocs": <Config extends OperationConfig>(options: { readonly config?: Config | undefined } | undefined) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined>>
  /**
* Returns a list of Pods.
*/
readonly "ListPods": <Config extends OperationConfig>(options: { readonly params?: typeof ListPodsParams.Encoded | undefined; readonly config?: Config | undefined } | undefined) => Effect.Effect<WithOptionalResponse<typeof ListPods200.Type, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined> | RunpodError<"404", undefined>>
  /**
* Creates a new [Pod](#/components/schemas/Pod) and optionally deploys it.
*/
readonly "CreatePod": <Config extends OperationConfig>(options: { readonly payload: typeof CreatePodRequestJson.Encoded; readonly config?: Config | undefined }) => Effect.Effect<WithOptionalResponse<typeof CreatePod201.Type, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined>>
  /**
* Returns a single Pod.
*/
readonly "GetPod": <Config extends OperationConfig>(podId: string, options: { readonly params?: typeof GetPodParams.Encoded | undefined; readonly config?: Config | undefined } | undefined) => Effect.Effect<WithOptionalResponse<typeof GetPod200.Type, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined> | RunpodError<"404", undefined>>
  /**
* Delete a Pod.
*/
readonly "DeletePod": <Config extends OperationConfig>(podId: string, options: { readonly config?: Config | undefined } | undefined) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined> | RunpodError<"401", undefined>>
  /**
* Update a Pod, potentially triggering a reset.
*/
readonly "UpdatePod": <Config extends OperationConfig>(podId: string, options: { readonly payload: typeof UpdatePodRequestJson.Encoded; readonly config?: Config | undefined }) => Effect.Effect<WithOptionalResponse<typeof UpdatePod200.Type, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined>>
  /**
* Update a Pod - synonym for PATCH /pods/{podId}.
*/
readonly "UpdatePodPost": <Config extends OperationConfig>(podId: string, options: { readonly payload: typeof UpdatePodPostRequestJson.Encoded; readonly config?: Config | undefined }) => Effect.Effect<WithOptionalResponse<typeof UpdatePodPost200.Type, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined>>
  /**
* Start or resume a Pod.
*/
readonly "StartPod": <Config extends OperationConfig>(podId: string, options: { readonly config?: Config | undefined } | undefined) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined> | RunpodError<"401", undefined>>
  /**
* Stop a Pod.
*/
readonly "StopPod": <Config extends OperationConfig>(podId: string, options: { readonly config?: Config | undefined } | undefined) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined> | RunpodError<"401", undefined>>
  /**
* Reset a Pod.
*/
readonly "ResetPod": <Config extends OperationConfig>(podId: string, options: { readonly config?: Config | undefined } | undefined) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined> | RunpodError<"401", undefined>>
  /**
* Restart a Pod.
*/
readonly "RestartPod": <Config extends OperationConfig>(podId: string, options: { readonly config?: Config | undefined } | undefined) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined> | RunpodError<"401", undefined>>
  /**
* Returns a list of endpoints.
*/
readonly "ListEndpoints": <Config extends OperationConfig>(options: { readonly params?: typeof ListEndpointsParams.Encoded | undefined; readonly config?: Config | undefined } | undefined) => Effect.Effect<WithOptionalResponse<typeof ListEndpoints200.Type, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined> | RunpodError<"404", undefined>>
  /**
* Create a new endpoint.
*/
readonly "CreateEndpoint": <Config extends OperationConfig>(options: { readonly payload: typeof CreateEndpointRequestJson.Encoded; readonly config?: Config | undefined }) => Effect.Effect<WithOptionalResponse<typeof CreateEndpoint200.Type, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined>>
  /**
* Returns a single endpoint.
*/
readonly "GetEndpoint": <Config extends OperationConfig>(endpointId: string, options: { readonly params?: typeof GetEndpointParams.Encoded | undefined; readonly config?: Config | undefined } | undefined) => Effect.Effect<WithOptionalResponse<typeof GetEndpoint200.Type, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined> | RunpodError<"404", undefined>>
  /**
* Delete an endpoint.
*/
readonly "DeleteEndpoint": <Config extends OperationConfig>(endpointId: string, options: { readonly config?: Config | undefined } | undefined) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined> | RunpodError<"401", undefined>>
  /**
* Update an endpoint.
*/
readonly "UpdateEndpoint": <Config extends OperationConfig>(endpointId: string, options: { readonly payload: typeof UpdateEndpointRequestJson.Encoded; readonly config?: Config | undefined }) => Effect.Effect<WithOptionalResponse<typeof UpdateEndpoint200.Type, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined>>
  /**
* Update an endpoint - synonym for PATCH /endpoints/{endpointId}.
*/
readonly "UpdateEndpointPost": <Config extends OperationConfig>(endpointId: string, options: { readonly payload: typeof UpdateEndpointPostRequestJson.Encoded; readonly config?: Config | undefined }) => Effect.Effect<WithOptionalResponse<typeof UpdateEndpointPost200.Type, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined>>
  /**
* Returns a list of templates.
*/
readonly "ListTemplates": <Config extends OperationConfig>(options: { readonly params?: typeof ListTemplatesParams.Encoded | undefined; readonly config?: Config | undefined } | undefined) => Effect.Effect<WithOptionalResponse<typeof ListTemplates200.Type, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined> | RunpodError<"404", undefined>>
  /**
* Create a new template.
*/
readonly "CreateTemplate": <Config extends OperationConfig>(options: { readonly payload: typeof CreateTemplateRequestJson.Encoded; readonly config?: Config | undefined }) => Effect.Effect<WithOptionalResponse<typeof CreateTemplate200.Type, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined>>
  /**
* Returns a single template.
*/
readonly "GetTemplate": <Config extends OperationConfig>(templateId: string, options: { readonly params?: typeof GetTemplateParams.Encoded | undefined; readonly config?: Config | undefined } | undefined) => Effect.Effect<WithOptionalResponse<typeof GetTemplate200.Type, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined> | RunpodError<"404", undefined>>
  /**
* Delete a template.
*/
readonly "DeleteTemplate": <Config extends OperationConfig>(templateId: string, options: { readonly config?: Config | undefined } | undefined) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined> | RunpodError<"401", undefined>>
  /**
* Update a template.
*/
readonly "UpdateTemplate": <Config extends OperationConfig>(templateId: string, options: { readonly payload: typeof UpdateTemplateRequestJson.Encoded; readonly config?: Config | undefined }) => Effect.Effect<WithOptionalResponse<typeof UpdateTemplate200.Type, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined>>
  /**
* Update a template - synonym for PATCH /templates/{templateId}.
*/
readonly "UpdateTemplatePost": <Config extends OperationConfig>(templateId: string, options: { readonly payload: typeof UpdateTemplatePostRequestJson.Encoded; readonly config?: Config | undefined }) => Effect.Effect<WithOptionalResponse<typeof UpdateTemplatePost200.Type, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined>>
  /**
* Returns a list of network volumes.
*/
readonly "ListNetworkVolumes": <Config extends OperationConfig>(options: { readonly config?: Config | undefined } | undefined) => Effect.Effect<WithOptionalResponse<typeof ListNetworkVolumes200.Type, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined> | RunpodError<"404", undefined>>
  /**
* Create a new network volume.
*/
readonly "CreateNetworkVolume": <Config extends OperationConfig>(options: { readonly payload: typeof CreateNetworkVolumeRequestJson.Encoded; readonly config?: Config | undefined }) => Effect.Effect<WithOptionalResponse<typeof CreateNetworkVolume200.Type, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined>>
  /**
* Returns a single network volume.
*/
readonly "GetNetworkVolume": <Config extends OperationConfig>(networkVolumeId: string, options: { readonly config?: Config | undefined } | undefined) => Effect.Effect<WithOptionalResponse<typeof GetNetworkVolume200.Type, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined> | RunpodError<"404", undefined>>
  /**
* Delete a network volume.
*/
readonly "DeleteNetworkVolume": <Config extends OperationConfig>(networkVolumeId: string, options: { readonly config?: Config | undefined } | undefined) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined> | RunpodError<"401", undefined>>
  /**
* Update a network volume.
*/
readonly "UpdateNetworkVolume": <Config extends OperationConfig>(networkVolumeId: string, options: { readonly payload: typeof UpdateNetworkVolumeRequestJson.Encoded; readonly config?: Config | undefined }) => Effect.Effect<WithOptionalResponse<typeof UpdateNetworkVolume200.Type, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined>>
  /**
* Update a network volume - synonym for PATCH /networkvolumes/{networkVolumeId}.
*/
readonly "UpdateNetworkVolumePost": <Config extends OperationConfig>(networkVolumeId: string, options: { readonly payload: typeof UpdateNetworkVolumePostRequestJson.Encoded; readonly config?: Config | undefined }) => Effect.Effect<WithOptionalResponse<typeof UpdateNetworkVolumePost200.Type, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined>>
  /**
* Returns a list of container registry auths.
*/
readonly "ListContainerRegistryAuths": <Config extends OperationConfig>(options: { readonly config?: Config | undefined } | undefined) => Effect.Effect<WithOptionalResponse<typeof ListContainerRegistryAuths200.Type, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined> | RunpodError<"404", undefined>>
  /**
* Create a new container registry auth.
*/
readonly "CreateContainerRegistryAuth": <Config extends OperationConfig>(options: { readonly payload: typeof CreateContainerRegistryAuthRequestJson.Encoded; readonly config?: Config | undefined }) => Effect.Effect<WithOptionalResponse<typeof CreateContainerRegistryAuth200.Type, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined>>
  /**
* Returns a single container registry auth.
*/
readonly "GetContainerRegistryAuth": <Config extends OperationConfig>(containerRegistryAuthId: string, options: { readonly config?: Config | undefined } | undefined) => Effect.Effect<WithOptionalResponse<typeof GetContainerRegistryAuth200.Type, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined> | RunpodError<"404", undefined>>
  /**
* Delete a container registry auth.
*/
readonly "DeleteContainerRegistryAuth": <Config extends OperationConfig>(containerRegistryAuthId: string, options: { readonly config?: Config | undefined } | undefined) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError | RunpodError<"400", undefined> | RunpodError<"401", undefined>>
  /**
* Retrieve billing information about your Pods.
*/
readonly "PodBilling": <Config extends OperationConfig>(options: { readonly params?: typeof PodBillingParams.Encoded | undefined; readonly config?: Config | undefined } | undefined) => Effect.Effect<WithOptionalResponse<typeof PodBilling200.Type, Config>, HttpClientError.HttpClientError | SchemaError>
  /**
* Retrieve billing information about your Serverless endpoints.
*/
readonly "EndpointBilling": <Config extends OperationConfig>(options: { readonly params?: typeof EndpointBillingParams.Encoded | undefined; readonly config?: Config | undefined } | undefined) => Effect.Effect<WithOptionalResponse<typeof EndpointBilling200.Type, Config>, HttpClientError.HttpClientError | SchemaError>
  /**
* Retrieve billing information about your network volumes.
*/
readonly "NetworkVolumeBilling": <Config extends OperationConfig>(options: { readonly params?: typeof NetworkVolumeBillingParams.Encoded | undefined; readonly config?: Config | undefined } | undefined) => Effect.Effect<WithOptionalResponse<typeof NetworkVolumeBilling200.Type, Config>, HttpClientError.HttpClientError | SchemaError>
}

export interface RunpodError<Tag extends string, E> {
  readonly _tag: Tag
  readonly request: HttpClientRequest.HttpClientRequest
  readonly response: HttpClientResponse.HttpClientResponse
  readonly cause: E
}

class RunpodErrorImpl extends Data.Error<{
  _tag: string
  cause: any
  request: HttpClientRequest.HttpClientRequest
  response: HttpClientResponse.HttpClientResponse
}> {}

export const RunpodError = <Tag extends string, E>(
  tag: Tag,
  cause: E,
  response: HttpClientResponse.HttpClientResponse,
): RunpodError<Tag, E> =>
  new RunpodErrorImpl({
    _tag: tag,
    cause,
    response,
    request: response.request,
  }) as any
