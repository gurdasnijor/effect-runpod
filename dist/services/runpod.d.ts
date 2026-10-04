import * as S from "@distilled.cloud/core/schema";
import * as API from "@distilled.cloud/core/api";
import { type RunpodOpError, type RunpodOpContext } from "../protocol.js";
export type { RunpodOpError, RunpodOpContext };
declare const BadRequest_base: S.Class<BadRequest, S.TaggedStruct<"BadRequest", {
    readonly code: any;
    readonly message: any;
}>, import("effect/Cause").YieldableError> & (new (...args: any[]) => {
    "@distilled.cloud/error/categories": {
        BadRequestError: true;
    };
});
export declare class BadRequest extends /*@__PURE__*/ BadRequest_base {
}
declare const Conflict_base: S.Class<Conflict, S.TaggedStruct<"Conflict", {
    readonly code: any;
    readonly message: any;
}>, import("effect/Cause").YieldableError> & (new (...args: any[]) => {
    "@distilled.cloud/error/categories": {
        ConflictError: true;
    };
});
export declare class Conflict extends /*@__PURE__*/ Conflict_base {
}
declare const Forbidden_base: S.Class<Forbidden, S.TaggedStruct<"Forbidden", {
    readonly code: any;
    readonly message: any;
}>, import("effect/Cause").YieldableError> & (new (...args: any[]) => {
    "@distilled.cloud/error/categories": {
        AuthError: true;
    };
});
export declare class Forbidden extends /*@__PURE__*/ Forbidden_base {
}
declare const NotFound_base: S.Class<NotFound, S.TaggedStruct<"NotFound", {
    readonly code: any;
    readonly message: any;
}>, import("effect/Cause").YieldableError> & (new (...args: any[]) => {
    "@distilled.cloud/error/categories": {
        BadRequestError: true;
    };
});
export declare class NotFound extends /*@__PURE__*/ NotFound_base {
}
declare const UnprocessableEntity_base: S.Class<UnprocessableEntity, S.TaggedStruct<"UnprocessableEntity", {
    readonly code: any;
    readonly message: any;
}>, import("effect/Cause").YieldableError> & (new (...args: any[]) => {
    "@distilled.cloud/error/categories": {
        BadRequestError: true;
    };
});
export declare class UnprocessableEntity extends /*@__PURE__*/ UnprocessableEntity_base {
}
/** Container CMD in exec form. When the image defines an ENTRYPOINT, this is the argument list passed to it. Encoded into the `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
export type CreateClusterRequestCmdList = Array<string>;
export declare const CreateClusterRequestCmdList: S.Codec<CreateClusterRequestCmdList>;
/** Container ENTRYPOINT in exec form, overriding the image's own. Encoded into `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
export type CreateClusterRequestEntrypointList = Array<string>;
export declare const CreateClusterRequestEntrypointList: S.Codec<CreateClusterRequestEntrypointList>;
/** Environment variables as key-value pairs */
export type CreateClusterRequestEnvMap = {
    [key: string]: string | undefined;
};
export declare const CreateClusterRequestEnvMap: S.Codec<CreateClusterRequestEnvMap>;
/** Exposed ports, formatted as port/protocol */
export type CreateClusterRequestPortsList = Array<string>;
export declare const CreateClusterRequestPortsList: S.Codec<CreateClusterRequestPortsList>;
/** The homogeneous compute shape of a cluster. Every pod in the cluster is identical: `podCount` pods, each with `gpuCountPerPod` GPUs of type `gpuTypeId`. Total GPUs = `podCount` * `gpuCountPerPod`. */
export interface ClusterCompute {
    /** GPU type for every pod in the cluster, as returned by GET /v2/catalog/gpus. */
    gpuTypeId: string;
    /** Number of GPUs on each pod. Bounded above by the GPU type's per-cloud maximum (GpuType.maxCount); the upstream rejects values beyond it. */
    gpuCountPerPod: number;
    /** Number of pods (nodes) in the cluster. */
    podCount: number;
}
export declare const ClusterCompute: S.Codec<ClusterCompute>;
/** Cluster type. TRAINING is the generic distributed-training cluster; SLURM provisions a managed Slurm controller/compute topology; RAY provisions a managed Ray head/worker topology; APPLICATION is a general multi-node application cluster. */
export type ClusterType = "APPLICATION" | "TRAINING" | "SLURM" | "RAY";
export declare const ClusterType: any;
/** Preferred data centers for placement. Omit or pass an empty array to let the scheduler choose. A cluster is always placed within a single data center. */
export type CreateClusterRequestDataCenterIdsList = Array<string>;
export declare const CreateClusterRequestDataCenterIdsList: S.Codec<CreateClusterRequestDataCenterIdsList>;
/** Host-local persistent storage. Pinned to the pod's host machine — data does not survive a host failure. Disallowed on CPU pods. Mutually exclusive with NetworkMount. Deprecated: prefer NetworkMount for any data you cannot recreate. */
export interface PersistentMount {
    /** Host-local persistent storage in GB. Upstream enforces a 10 GB floor. */
    size: number;
    /** Mount path inside the container. May be changed via PATCH. */
    path: string;
}
export declare const PersistentMount: S.Codec<PersistentMount>;
/** Reference to a NetworkVolume. Custom paths are honored at runtime on both GPU and CPU pods. The underlying `volumeId` is immutable post-create; the mount `path` may be changed via PATCH. */
export interface NetworkMount {
    /** ID of an existing NetworkVolume in the same data center as the pod. */
    volumeId: string;
    /** Mount path inside the container. No default — must be specified explicitly. */
    path: string;
}
export declare const NetworkMount: S.Codec<NetworkMount>;
export type MountsNetworkList = Array<NetworkMount>;
export declare const MountsNetworkList: S.Codec<MountsNetworkList>;
/** Storage mounts attached to a pod. At-most-one of `persistent` or `network` may be set today (mutually exclusive, enforced at the handler with 400 if both are present). The `network` field is an array for forward compatibility with eventual multi-network-volume support, but `maxItems` is 1 today. PATCH semantics: - Omitting `mounts` or sending `{}` leaves the existing mount unchanged. - An explicit `network: []` is rejected with 400 (clearing mounts is not supported). - Mount kind is fixed at create — a PATCH that introduces a kind not present at create (persistent on a network pod, network on a persistent pod, or any mount on a previously-mountless pod) is rejected with 400. - The `volumeId` of a network mount is immutable; a PATCH that names a different `volumeId` is rejected with 400. - Partial mounts are not supported — every mount entry must include the full schema (`size` + `path` for persistent, `volumeId` + `path` for network). Missing required fields → 422. */
export interface Mounts {
    persistent?: PersistentMount;
    network?: MountsNetworkList;
}
export declare const Mounts: S.Codec<Mounts>;
export interface CreateClusterRequest {
    /** The container's command, as a single raw string. This is the field `entrypoint` and `cmd` encode into, exposed in its stored form. Two shapes are accepted. A bare shell string is treated as CMD and split into arguments, which is what the console's "Container start command" field writes. A JSON object of the form `{"entrypoint":[...],"cmd":[...]}` sets either or both explicitly. Responses always return both representations: `args` exactly as stored, plus the deconstructed `entrypoint` and `cmd`. Supplying `args` together with `entrypoint` or `cmd` is allowed only when they describe the same command, so a read-modify-write client can send back everything it received. Send `""` to clear, omit to leave unchanged. */
    args?: string;
    /** Container CMD in exec form. When the image defines an ENTRYPOINT, this is the argument list passed to it. Encoded into the `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
    cmd?: CreateClusterRequestCmdList;
    /** Container ENTRYPOINT in exec form, overriding the image's own. Encoded into `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
    entrypoint?: CreateClusterRequestEntrypointList;
    /** Container disk in GB (ephemeral, wiped on restart) */
    disk?: number;
    /** Environment variables as key-value pairs */
    env?: CreateClusterRequestEnvMap;
    /** Docker image reference */
    image?: string;
    /** Exposed ports, formatted as port/protocol */
    ports?: CreateClusterRequestPortsList;
    compute: ClusterCompute;
    name: string;
    type: ClusterType | (string & {});
    /** ID of a pod template to provision every member pod from. The template supplies the container settings (image, args, disk, env, ports) and the container registry credential for private images — the only private-image path for clusters. Mutually exclusive with `image`, `args`, `entrypoint`, `cmd`, `disk`, `env`, `ports`, and `mounts` (rejected with 400). The cluster retains the link: the `template` response field is set. Must be a non-serverless pod template accessible to the caller. */
    templateId?: string;
    /** Preferred data centers for placement. Omit or pass an empty array to let the scheduler choose. A cluster is always placed within a single data center. */
    dataCenterIds?: CreateClusterRequestDataCenterIdsList;
    mounts?: Mounts;
    /** Start Jupyter on every member pod, as on pod create. */
    startJupyter?: boolean;
    /** Provision SSH access on every member pod: injects a PUBLIC_KEY environment variable carrying your account's registered SSH public key. Same semantics as the pod create flag. */
    startSsh?: boolean;
}
export declare const CreateClusterRequest: S.Codec<CreateClusterRequest>;
/** Member pod counts keyed by pod status (the same values as `Pod.status`, e.g. RUNNING, PROVISIONING). Statuses with no pods are omitted. */
export type ClusterPodsSummaryByStatusMap = {
    [key: string]: number | undefined;
};
export declare const ClusterPodsSummaryByStatusMap: S.Codec<ClusterPodsSummaryByStatusMap>;
/** A lightweight summary of a cluster's member pods. Use `GET /v2/clusters/{id}/pods` to retrieve the full pod objects. */
export interface ClusterPodsSummary {
    /** Number of member pods currently provisioned for the cluster. */
    total: number;
    /** Member pod counts keyed by pod status (the same values as `Pod.status`, e.g. RUNNING, PROVISIONING). Statuses with no pods are omitted. */
    byStatus: ClusterPodsSummaryByStatusMap;
}
export declare const ClusterPodsSummary: S.Codec<ClusterPodsSummary>;
/** The cluster's private VXLAN overlay network (shared by all member pods). */
export interface ClusterNetwork {
    /** The overlay network's CIDR block. */
    cidr: string;
    /** VXLAN network identifier; omitted until assigned. */
    vxlanId?: number;
    /** UDP port carrying the VXLAN traffic; omitted until assigned. */
    vxlanPort?: number;
}
export declare const ClusterNetwork: S.Codec<ClusterNetwork>;
/** Lifecycle status of a pod. - `PROVISIONING` — pod is being allocated - `STARTING` — container is starting - `RUNNING` — container is healthy - `EXITED` — container exited (stopped) - `ERROR` — container is in an unrecoverable error state - `TERMINATED` — pod has been permanently deleted */
export type PodStatus = "PROVISIONING" | "STARTING" | "RUNNING" | "EXITED" | "ERROR" | "TERMINATED";
export declare const PodStatus: any;
/** The cluster's primary (master) node, through which the cluster is typically driven. Omitted until a primary pod has been placed. */
export interface ClusterPrimary {
    /** ID of the primary member pod. */
    podId: string;
    status: PodStatus;
    /** Public SSH endpoint (`host:port`) for the primary node; omitted when the primary is not yet RUNNING or does not expose SSH (22/tcp). */
    sshEndpoint?: string;
}
export declare const ClusterPrimary: S.Codec<ClusterPrimary>;
/** A cluster. Cluster-level fields describe the identity and homogeneous shape; `pods` is a lightweight summary of the members. Fetch the full member pods — with their container config, mounts, and runtime state — from `GET /v2/clusters/{id}/pods`. */
export interface Cluster {
    id: string;
    name: string;
    type: ClusterType;
    compute: ClusterCompute;
    /** ID of the template this cluster's pods were created from; omitted when they were not created from one. */
    template?: string;
    /** Data center the cluster is placed in (a cluster is always within a single data center). Derived from the member pods; omitted until at least one pod is placed. */
    dataCenterId?: string;
    pods: ClusterPodsSummary;
    /** The cluster's overlay network; omitted until the network is provisioned. */
    network?: ClusterNetwork;
    /** The primary (master) node; omitted until a primary pod is placed. Its `sshEndpoint` is omitted until that pod is RUNNING with SSH exposed. */
    primary?: ClusterPrimary;
    createdAt: string;
}
export declare const Cluster: S.Codec<Cluster>;
export interface CreateDelegationRequest {
    /** ECR resource ARN */
    resource: string;
    /** Optional name for the delegation */
    name?: string | null;
}
export declare const CreateDelegationRequest: S.Codec<CreateDelegationRequest>;
export interface EcrDelegation {
    /** Delegation identifier */
    id: string;
    /** Optional name for the delegation */
    name?: string | null;
    /** User ID that created the delegation */
    delegatorUserId: string;
    /** AWS user/role being delegated */
    awsUser: string;
    /** ECR repository name */
    repository: string;
    /** ECR image tag */
    tag: string;
    /** AWS region */
    awsRegion: string;
    /** Formatted ECR registry URI for Docker login */
    dockerRegistryUri?: string;
    /** When the delegation was created */
    createdAt: string;
}
export declare const EcrDelegation: S.Codec<EcrDelegation>;
/** Container CMD in exec form. When the image defines an ENTRYPOINT, this is the argument list passed to it. Encoded into the `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
export type CreateEndpointRequestCmdList = Array<string>;
export declare const CreateEndpointRequestCmdList: S.Codec<CreateEndpointRequestCmdList>;
/** Container ENTRYPOINT in exec form, overriding the image's own. Encoded into `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
export type CreateEndpointRequestEntrypointList = Array<string>;
export declare const CreateEndpointRequestEntrypointList: S.Codec<CreateEndpointRequestEntrypointList>;
/** Environment variables as key-value pairs */
export type CreateEndpointRequestEnvMap = {
    [key: string]: string | undefined;
};
export declare const CreateEndpointRequestEnvMap: S.Codec<CreateEndpointRequestEnvMap>;
/** Exposed ports, formatted as port/protocol */
export type CreateEndpointRequestPortsList = Array<string>;
export declare const CreateEndpointRequestPortsList: S.Codec<CreateEndpointRequestPortsList>;
/** Serverless GPU pool IDs (as returned by `GET /v2/catalog/gpus` in `pool`). Workers are placed on whichever listed pool has capacity. Narrow a pool down to specific cards with `excludedTypes`. On `PATCH`, `pools` and `excludedTypes` are one selection and are replaced together, so sending `pools` by itself **clears the exclusions**. Two cases: - **Changing pools, keeping exclusions** — send both fields in one request: `{"gpu": {"pools": ["ADA_24"], "excludedTypes": ["NVIDIA L40"]}}`. `GET` the endpoint first to read the current `excludedTypes` and resend the ones that still apply to the new pools; an exclusion naming a type outside `pools` is a 400. - **Changing only `count` or a CUDA constraint** — omit `pools`: `{"gpu": {"minCudaVersion": "12.4"}}`. The pool list and the exclusions are both left exactly as they are. `excludedTypes` documents the full rule. */
export type CreateEndpointGpuConfigPoolsList = Array<string>;
export declare const CreateEndpointGpuConfigPoolsList: S.Codec<CreateEndpointGpuConfigPoolsList>;
/** GPU **type** IDs to subtract from the selected pools — the `id` field of `GET /v2/catalog/gpus`, the same identifiers pods take in `gpu.id`. Workers run on every type in `pools` except these. Omit to use the whole pool. Pools stay the unit of selection; types are the unit of subtraction. There is no inclusive allowlist: a card later added to one of your pools becomes eligible, which is the honest reading of "this pool, minus these". Tied to `pools`, because the two together are one selection: supplying `pools` replaces that selection wholesale, so a `PATCH` sending `pools` **without `excludedTypes`** **clears** them — restate them to keep them. A `PATCH` that omits `pools` leaves both the pools and the exclusions untouched, so changing only a CUDA constraint cannot widen a pinned endpoint. Rejected with 400 if a value is not a GPU type in one of `pools`; upstream accepts unrecognized exclusions silently, so a typo would otherwise produce a filter that does nothing. Surrounding whitespace is trimmed, so `" NVIDIA L40"` and `"NVIDIA L40"` mean the same card. */
export type CreateEndpointGpuConfigExcludedTypesList = Array<string>;
export declare const CreateEndpointGpuConfigExcludedTypesList: S.Codec<CreateEndpointGpuConfigExcludedTypesList>;
/** Acceptable CUDA versions for worker placement, as `major.minor`. Omit to accept any version (or inherit the template's constraint when creating from `templateId`). Matching is exact — discover valid values per GPU type via `GET /v2/catalog/gpus?include=AVAILABILITY&product=SERVERLESS` (`cudaVersions`). A non-empty set is mutually exclusive with minCudaVersion (400 if both are sent). An explicit `[]` states no constraint, so it may accompany a floor. */
export type CreateEndpointGpuConfigAllowedCudaVersionsList = Array<string>;
export declare const CreateEndpointGpuConfigAllowedCudaVersionsList: S.Codec<CreateEndpointGpuConfigAllowedCudaVersionsList>;
/** GPU request for an endpoint create. Carries the CUDA constraints, which live here rather than at the body's top level so they are unrepresentable on a CPU endpoint. */
export interface CreateEndpointGpuConfig {
    /** Serverless GPU pool IDs (as returned by `GET /v2/catalog/gpus` in `pool`). Workers are placed on whichever listed pool has capacity. Narrow a pool down to specific cards with `excludedTypes`. On `PATCH`, `pools` and `excludedTypes` are one selection and are replaced together, so sending `pools` by itself **clears the exclusions**. Two cases: - **Changing pools, keeping exclusions** — send both fields in one request: `{"gpu": {"pools": ["ADA_24"], "excludedTypes": ["NVIDIA L40"]}}`. `GET` the endpoint first to read the current `excludedTypes` and resend the ones that still apply to the new pools; an exclusion naming a type outside `pools` is a 400. - **Changing only `count` or a CUDA constraint** — omit `pools`: `{"gpu": {"minCudaVersion": "12.4"}}`. The pool list and the exclusions are both left exactly as they are. `excludedTypes` documents the full rule. */
    pools: CreateEndpointGpuConfigPoolsList;
    /** GPU **type** IDs to subtract from the selected pools — the `id` field of `GET /v2/catalog/gpus`, the same identifiers pods take in `gpu.id`. Workers run on every type in `pools` except these. Omit to use the whole pool. Pools stay the unit of selection; types are the unit of subtraction. There is no inclusive allowlist: a card later added to one of your pools becomes eligible, which is the honest reading of "this pool, minus these". Tied to `pools`, because the two together are one selection: supplying `pools` replaces that selection wholesale, so a `PATCH` sending `pools` **without `excludedTypes`** **clears** them — restate them to keep them. A `PATCH` that omits `pools` leaves both the pools and the exclusions untouched, so changing only a CUDA constraint cannot widen a pinned endpoint. Rejected with 400 if a value is not a GPU type in one of `pools`; upstream accepts unrecognized exclusions silently, so a typo would otherwise produce a filter that does nothing. Surrounding whitespace is trimmed, so `" NVIDIA L40"` and `"NVIDIA L40"` mean the same card. */
    excludedTypes?: CreateEndpointGpuConfigExcludedTypesList;
    /** GPUs per worker */
    count?: number;
    /** Acceptable CUDA versions for worker placement, as `major.minor`. Omit to accept any version (or inherit the template's constraint when creating from `templateId`). Matching is exact — discover valid values per GPU type via `GET /v2/catalog/gpus?include=AVAILABILITY&product=SERVERLESS` (`cudaVersions`). A non-empty set is mutually exclusive with minCudaVersion (400 if both are sent). An explicit `[]` states no constraint, so it may accompany a floor. */
    allowedCudaVersions?: CreateEndpointGpuConfigAllowedCudaVersionsList;
    /** Lowest acceptable CUDA version for worker placement, as `major.minor`, compared numerically rather than as a decimal — so 12.11 is above 12.2. Use this for an open-ended floor and allowedCudaVersions for an exact set. Mutually exclusive with a non-empty allowedCudaVersions (400 if both are sent); an explicit `[]` there states no constraint and may accompany this floor. */
    minCudaVersion?: string;
}
export declare const CreateEndpointGpuConfig: S.Codec<CreateEndpointGpuConfig>;
/** Scaler discriminator. Always `QUEUE_DELAY` for this variant. */
export type QueueDelayScalingType = "QUEUE_DELAY";
export declare const QueueDelayScalingType: any;
/** Scale on queue wait time. Queue-based endpoints only. */
export interface QueueDelayScaling {
    /** Scaler discriminator. Always `QUEUE_DELAY` for this variant. */
    type: QueueDelayScalingType;
    /** Adjusts the number of workers based on how long requests wait in the queue. */
    queueDelay: number;
}
export declare const QueueDelayScaling: S.Codec<QueueDelayScaling>;
/** Scaler discriminator. Always `REQUEST_COUNT` for this variant. */
export type RequestCountScalingType = "REQUEST_COUNT";
export declare const RequestCountScalingType: any;
/** Scale on concurrent in-flight requests per worker. Required for load-balancing endpoints; also selectable for queue-based. */
export interface RequestCountScaling {
    /** Scaler discriminator. Always `REQUEST_COUNT` for this variant. */
    type: RequestCountScalingType;
    /** Adjusts the number of workers based on active in-flight requests. */
    requestCount: number;
}
export declare const RequestCountScaling: S.Codec<RequestCountScaling>;
/** Autoscaling signal — a discriminated union on `type`: `QUEUE_DELAY` (queue-based endpoints only) or `REQUEST_COUNT`. The scaler is chosen independently of the endpoint's routing `type` and can be switched on update. */
export type EndpointScaling = QueueDelayScaling | RequestCountScaling;
export declare const EndpointScaling: S.Codec<EndpointScaling>;
/** Request-routing semantics for a modern serverless endpoint. - `QUEUE` — submit asynchronous or synchronous jobs through the managed queue. - `LOAD_BALANCER` — send requests directly to worker-defined HTTP paths. Configure via `env`: `PORT` (server port, default 80), `PORT_HEALTH` (health-check port, default 80), and `HEALTH_CHECK_PATH` (path the load balancer polls for worker health, default `/ping`). */
export type EndpointType = "QUEUE" | "LOAD_BALANCER";
export declare const EndpointType: any;
export interface BaseCpuConfig {
    /** CPU flavor identifier, as returned by GET /v2/catalog/cpus. */
    id: string;
    /** Number of vCPUs. Must be valid for the selected CPU flavor and must be a power of two. */
    vcpuCount: number;
}
export declare const BaseCpuConfig: S.Codec<BaseCpuConfig>;
/** Eligible CPU configurations for each worker. Memory is derived from the selected flavor's catalog RAM multiplier. Exact duplicate configurations are rejected; the same flavor may be listed at different vCPU counts. */
export type CreateEndpointRequestCpuList = Array<BaseCpuConfig>;
export declare const CreateEndpointRequestCpuList: S.Codec<CreateEndpointRequestCpuList>;
/** Preferred data centers for placement. Omit or pass an empty array to let the scheduler choose. */
export type CreateEndpointRequestDataCenterIdsList = Array<string>;
export declare const CreateEndpointRequestDataCenterIdsList: S.Codec<CreateEndpointRequestDataCenterIdsList>;
/** FlashBoot cold-start acceleration mode. - `OFF` — disabled - `FLASHBOOT` — enabled - `PRIORITY_FLASHBOOT` — enabled with priority capacity */
export type FlashBoot = "OFF" | "FLASHBOOT" | "PRIORITY_FLASHBOOT";
export declare const FlashBoot: any;
export type CreateEndpointRequestNetworkVolumesList = Array<string>;
export declare const CreateEndpointRequestNetworkVolumesList: S.Codec<CreateEndpointRequestNetworkVolumesList>;
export interface CreateEndpointRequestWorkers {
    /** Minimum number of workers. */
    min?: number;
    /** Maximum number of workers. */
    max?: number;
    /** Seconds before idle workers scale down. Not applicable to queue-based endpoints scaling on `requestCount` — rejected on create/update and omitted from responses for that combination. */
    idleTimeout?: number;
}
export declare const CreateEndpointRequestWorkers: S.Codec<CreateEndpointRequestWorkers>;
export interface CreateEndpointRequest {
    /** The container's command, as a single raw string. This is the field `entrypoint` and `cmd` encode into, exposed in its stored form. Two shapes are accepted. A bare shell string is treated as CMD and split into arguments, which is what the console's "Container start command" field writes. A JSON object of the form `{"entrypoint":[...],"cmd":[...]}` sets either or both explicitly. Responses always return both representations: `args` exactly as stored, plus the deconstructed `entrypoint` and `cmd`. Supplying `args` together with `entrypoint` or `cmd` is allowed only when they describe the same command, so a read-modify-write client can send back everything it received. Send `""` to clear, omit to leave unchanged. */
    args?: string;
    /** Container CMD in exec form. When the image defines an ENTRYPOINT, this is the argument list passed to it. Encoded into the `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
    cmd?: CreateEndpointRequestCmdList;
    /** Container ENTRYPOINT in exec form, overriding the image's own. Encoded into `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
    entrypoint?: CreateEndpointRequestEntrypointList;
    /** Container disk in GB (ephemeral, wiped on restart) */
    disk?: number;
    /** Environment variables as key-value pairs */
    env?: CreateEndpointRequestEnvMap;
    /** Docker image reference */
    image?: string;
    /** Exposed ports, formatted as port/protocol */
    ports?: CreateEndpointRequestPortsList;
    /** Container registry credential ID (for private images) */
    registry?: string | null;
    gpu?: CreateEndpointGpuConfig;
    name: string;
    scaling: EndpointScaling;
    /** Request-routing model. Required — it determines the valid scaler and request URLs, so it must be chosen explicitly on every create. */
    type: EndpointType | (string & {});
    /** Eligible CPU configurations for each worker. Memory is derived from the selected flavor's catalog RAM multiplier. Exact duplicate configurations are rejected; the same flavor may be listed at different vCPU counts. */
    cpu?: CreateEndpointRequestCpuList;
    /** Preferred data centers for placement. Omit or pass an empty array to let the scheduler choose. */
    dataCenterIds?: CreateEndpointRequestDataCenterIdsList;
    flashboot?: FlashBoot | (string & {});
    networkVolumes?: CreateEndpointRequestNetworkVolumesList;
    /** ID of a serverless template to base this endpoint on. The template is resolved at create time into the same container settings you could otherwise spread into this body (image, args, disk, ports, env, registry); explicit body fields override the template's, except `env`, which is merged per key with body values winning. The template's allowedCudaVersions seeds `gpu.allowedCudaVersions` when the body omits it — but only for a GPU create, since a CPU endpoint has no gpu block to seed into, and not when the body sets `gpu.minCudaVersion`, since seeding a set beside a floor would manufacture the mutual-exclusion 400 from a valid request. Its pod-specific startSsh/startJupyter flags are ignored. Later template edits do not affect the endpoint. The template may be one of your own or a public catalog template — see `GET /v2/catalog/templates` (unknown or inaccessible ID → 404) — and must be a serverless template (→ 422). */
    templateId?: string;
    timeout?: number;
    workers?: CreateEndpointRequestWorkers;
}
export declare const CreateEndpointRequest: S.Codec<CreateEndpointRequest>;
/** Container CMD in exec form. When the image defines an ENTRYPOINT, this is the argument list passed to it. Encoded into the `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
export type CreateEndpointResponseCmdList = Array<string>;
export declare const CreateEndpointResponseCmdList: S.Codec<CreateEndpointResponseCmdList>;
/** Container ENTRYPOINT in exec form, overriding the image's own. Encoded into `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
export type CreateEndpointResponseEntrypointList = Array<string>;
export declare const CreateEndpointResponseEntrypointList: S.Codec<CreateEndpointResponseEntrypointList>;
/** Environment variables as key-value pairs */
export type CreateEndpointResponseEnvMap = {
    [key: string]: string | undefined;
};
export declare const CreateEndpointResponseEnvMap: S.Codec<CreateEndpointResponseEnvMap>;
/** Exposed ports, formatted as port/protocol */
export type CreateEndpointResponsePortsList = Array<string>;
export declare const CreateEndpointResponsePortsList: S.Codec<CreateEndpointResponsePortsList>;
export interface QueueBasedRequestUrls {
    /** URL for asynchronously submitting a queued job. See the [/run operation reference](https://docs.runpod.io/serverless/endpoints/operation-reference#/run) for request and response bodies. */
    run: string;
    /** URL for synchronously submitting a queued job. Accepts an optional `?wait=x` query parameter to control how long the request waits for job completion, defaulting to 90 seconds. See the [/runsync operation reference](https://docs.runpod.io/serverless/endpoints/operation-reference#/runsync) for request and response bodies. */
    runSync: string;
    /** Check the current state, execution statistics, and results of a previously submitted job. See the [/status operation reference](https://docs.runpod.io/serverless/endpoints/operation-reference#/status) for request and response bodies. */
    status: string;
    /** Receive incremental results as they become available from a job that generates output progressively. See the [/stream operation reference](https://docs.runpod.io/serverless/endpoints/operation-reference#/stream) for request and response bodies. */
    stream: string;
    /** Stop an in-progress job or remove a queued job before it starts. See the [/cancel operation reference](https://docs.runpod.io/serverless/endpoints/operation-reference#/cancel) for request and response bodies. */
    cancel: string;
    /** Requeue a failed or timed-out job without submitting a new request. See the [/retry operation reference](https://docs.runpod.io/serverless/endpoints/operation-reference#/retry) for request and response bodies. */
    retry: string;
    /** Remove all pending jobs from the queue. Does not affect in-progress jobs. See the [/purge-queue operation reference](https://docs.runpod.io/serverless/endpoints/operation-reference#/purge-queue) for request and response bodies. */
    purgeQueue: string;
    /** Overview of an endpoint's operational status. See the [/health operation reference](https://docs.runpod.io/serverless/endpoints/operation-reference#/health) for request and response bodies. */
    health: string;
}
export declare const QueueBasedRequestUrls: S.Codec<QueueBasedRequestUrls>;
export interface LoadBalancingRequestUrls {
    /** Base URL for worker-defined HTTP and WebSocket paths. See [Load balancing endpoints](https://docs.runpod.io/serverless/load-balancing/overview). */
    base: string;
    /** Health check endpoint the load balancer will periodically ping to decide if the worker is healthy enough to receive traffic. Configurable by setting the `HEALTH_CHECK_PATH` environment variable. Defaults to `/ping` if the variable is not set. See [Health checks](https://docs.runpod.io/serverless/load-balancing/overview#health-checks) for the response codes it interprets. */
    health: string;
}
export declare const LoadBalancingRequestUrls: S.Codec<LoadBalancingRequestUrls>;
/** Request URLs appropriate to the endpoint's top-level `type`. Queue-based endpoints provide job submission and management URLs; load-balancing endpoints provide `base` and `health` because their remaining paths are worker-defined. Request and response bodies for the queue-based URLs are documented in the [serverless operation reference](https://docs.runpod.io/serverless/endpoints/operation-reference). Load-balancing endpoints are documented in [Load balancing endpoints](https://docs.runpod.io/serverless/load-balancing/overview). */
export type EndpointRequestUrls = QueueBasedRequestUrls | LoadBalancingRequestUrls;
export declare const EndpointRequestUrls: S.Codec<EndpointRequestUrls>;
/** Serverless GPU pool IDs (as returned by `GET /v2/catalog/gpus` in `pool`). Workers are placed on whichever listed pool has capacity. Narrow a pool down to specific cards with `excludedTypes`. On `PATCH`, `pools` and `excludedTypes` are one selection and are replaced together, so sending `pools` by itself **clears the exclusions**. Two cases: - **Changing pools, keeping exclusions** — send both fields in one request: `{"gpu": {"pools": ["ADA_24"], "excludedTypes": ["NVIDIA L40"]}}`. `GET` the endpoint first to read the current `excludedTypes` and resend the ones that still apply to the new pools; an exclusion naming a type outside `pools` is a 400. - **Changing only `count` or a CUDA constraint** — omit `pools`: `{"gpu": {"minCudaVersion": "12.4"}}`. The pool list and the exclusions are both left exactly as they are. `excludedTypes` documents the full rule. */
export type EndpointGpuConfigPoolsList = Array<string>;
export declare const EndpointGpuConfigPoolsList: S.Codec<EndpointGpuConfigPoolsList>;
/** GPU **type** IDs to subtract from the selected pools — the `id` field of `GET /v2/catalog/gpus`, the same identifiers pods take in `gpu.id`. Workers run on every type in `pools` except these. Omit to use the whole pool. Pools stay the unit of selection; types are the unit of subtraction. There is no inclusive allowlist: a card later added to one of your pools becomes eligible, which is the honest reading of "this pool, minus these". Tied to `pools`, because the two together are one selection: supplying `pools` replaces that selection wholesale, so a `PATCH` sending `pools` **without `excludedTypes`** **clears** them — restate them to keep them. A `PATCH` that omits `pools` leaves both the pools and the exclusions untouched, so changing only a CUDA constraint cannot widen a pinned endpoint. Rejected with 400 if a value is not a GPU type in one of `pools`; upstream accepts unrecognized exclusions silently, so a typo would otherwise produce a filter that does nothing. Surrounding whitespace is trimmed, so `" NVIDIA L40"` and `"NVIDIA L40"` mean the same card. */
export type EndpointGpuConfigExcludedTypesList = Array<string>;
export declare const EndpointGpuConfigExcludedTypesList: S.Codec<EndpointGpuConfigExcludedTypesList>;
/** Acceptable CUDA versions for worker placement, as `major.minor`. Empty means any version. */
export type EndpointGpuConfigAllowedCudaVersionsList = Array<string>;
export declare const EndpointGpuConfigAllowedCudaVersionsList: S.Codec<EndpointGpuConfigAllowedCudaVersionsList>;
export interface EndpointGpuConfig {
    /** Serverless GPU pool IDs (as returned by `GET /v2/catalog/gpus` in `pool`). Workers are placed on whichever listed pool has capacity. Narrow a pool down to specific cards with `excludedTypes`. On `PATCH`, `pools` and `excludedTypes` are one selection and are replaced together, so sending `pools` by itself **clears the exclusions**. Two cases: - **Changing pools, keeping exclusions** — send both fields in one request: `{"gpu": {"pools": ["ADA_24"], "excludedTypes": ["NVIDIA L40"]}}`. `GET` the endpoint first to read the current `excludedTypes` and resend the ones that still apply to the new pools; an exclusion naming a type outside `pools` is a 400. - **Changing only `count` or a CUDA constraint** — omit `pools`: `{"gpu": {"minCudaVersion": "12.4"}}`. The pool list and the exclusions are both left exactly as they are. `excludedTypes` documents the full rule. */
    pools: EndpointGpuConfigPoolsList;
    /** GPU **type** IDs to subtract from the selected pools — the `id` field of `GET /v2/catalog/gpus`, the same identifiers pods take in `gpu.id`. Workers run on every type in `pools` except these. Omit to use the whole pool. Pools stay the unit of selection; types are the unit of subtraction. There is no inclusive allowlist: a card later added to one of your pools becomes eligible, which is the honest reading of "this pool, minus these". Tied to `pools`, because the two together are one selection: supplying `pools` replaces that selection wholesale, so a `PATCH` sending `pools` **without `excludedTypes`** **clears** them — restate them to keep them. A `PATCH` that omits `pools` leaves both the pools and the exclusions untouched, so changing only a CUDA constraint cannot widen a pinned endpoint. Rejected with 400 if a value is not a GPU type in one of `pools`; upstream accepts unrecognized exclusions silently, so a typo would otherwise produce a filter that does nothing. Surrounding whitespace is trimmed, so `" NVIDIA L40"` and `"NVIDIA L40"` mean the same card. */
    excludedTypes?: EndpointGpuConfigExcludedTypesList;
    /** GPUs per worker */
    count?: number;
    /** Acceptable CUDA versions for worker placement, as `major.minor`. Empty means any version. */
    allowedCudaVersions: EndpointGpuConfigAllowedCudaVersionsList;
    /** Lowest acceptable CUDA version for worker placement, as `major.minor`. Null means no floor. */
    minCudaVersion: string | null;
}
export declare const EndpointGpuConfig: S.Codec<EndpointGpuConfig>;
export interface CpuConfig {
    /** CPU flavor identifier, as returned by GET /v2/catalog/cpus. */
    id: string;
    /** Number of vCPUs. Must be valid for the selected CPU flavor and must be a power of two. */
    vcpuCount: number;
    /** Memory allocated to the pod in GB. */
    memory: number;
}
export declare const CpuConfig: S.Codec<CpuConfig>;
/** Eligible CPU configurations for each worker, in the order they were submitted. Present for CPU endpoints and omitted for GPU endpoints. Memory is derived from the selected flavor's catalog RAM multiplier. */
export type CreateEndpointResponseCpuList = Array<CpuConfig>;
export declare const CreateEndpointResponseCpuList: S.Codec<CreateEndpointResponseCpuList>;
export type EndpointWorkers = CreateEndpointRequestWorkers;
export declare const EndpointWorkers: S.Codec<CreateEndpointRequestWorkers, CreateEndpointRequestWorkers, never, never>;
export type CreateEndpointResponseDataCenterIdsList = Array<string>;
export declare const CreateEndpointResponseDataCenterIdsList: S.Codec<CreateEndpointResponseDataCenterIdsList>;
export type CreateEndpointResponseNetworkVolumesList = Array<string>;
export declare const CreateEndpointResponseNetworkVolumesList: S.Codec<CreateEndpointResponseNetworkVolumesList>;
export interface CreateEndpointResponse {
    /** The container's command, as a single raw string. This is the field `entrypoint` and `cmd` encode into, exposed in its stored form. Two shapes are accepted. A bare shell string is treated as CMD and split into arguments, which is what the console's "Container start command" field writes. A JSON object of the form `{"entrypoint":[...],"cmd":[...]}` sets either or both explicitly. Responses always return both representations: `args` exactly as stored, plus the deconstructed `entrypoint` and `cmd`. Supplying `args` together with `entrypoint` or `cmd` is allowed only when they describe the same command, so a read-modify-write client can send back everything it received. Send `""` to clear, omit to leave unchanged. */
    args?: string;
    /** Container CMD in exec form. When the image defines an ENTRYPOINT, this is the argument list passed to it. Encoded into the `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
    cmd?: CreateEndpointResponseCmdList;
    /** Container ENTRYPOINT in exec form, overriding the image's own. Encoded into `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
    entrypoint?: CreateEndpointResponseEntrypointList;
    /** Container disk in GB (ephemeral, wiped on restart) */
    disk?: number;
    /** Environment variables as key-value pairs */
    env?: CreateEndpointResponseEnvMap;
    /** Docker image reference */
    image?: string;
    /** Exposed ports, formatted as port/protocol */
    ports?: CreateEndpointResponsePortsList;
    /** Container registry credential ID (for private images) */
    registry?: string | null;
    id: string;
    name: string;
    type?: EndpointType;
    requestUrls?: EndpointRequestUrls;
    gpu?: EndpointGpuConfig | null;
    /** Eligible CPU configurations for each worker, in the order they were submitted. Present for CPU endpoints and omitted for GPU endpoints. Memory is derived from the selected flavor's catalog RAM multiplier. */
    cpu?: CreateEndpointResponseCpuList;
    workers: CreateEndpointRequestWorkers;
    scaling: EndpointScaling;
    dataCenterIds: CreateEndpointResponseDataCenterIdsList;
    networkVolumes: CreateEndpointResponseNetworkVolumesList;
    /** Per-request execution timeout in milliseconds */
    timeout: number;
    flashboot: FlashBoot;
    createdAt: string;
}
export declare const CreateEndpointResponse: S.Codec<CreateEndpointResponse>;
/** Data center network volume storage type. */
export type VolumeType = "STANDARD" | "HIGH_PERFORMANCE";
export declare const VolumeType: any;
export interface CreateNetworkVolumeRequest {
    /** Data center in which to create the volume */
    dataCenter: string;
    /** Human-readable name */
    name: string;
    /** Storage to allocate in GB */
    size: number;
    /** Storage tier for the volume. Optional. When omitted, the volume is provisioned using the requested data center's default (primary) storage tier. HIGH_PERFORMANCE provisions a high-performance (HPS) volume; STANDARD provisions a standard volume. A volume's tier is immutable after creation. */
    type?: VolumeType | (string & {});
}
export declare const CreateNetworkVolumeRequest: S.Codec<CreateNetworkVolumeRequest>;
export interface NetworkVolume {
    /** Unique network volume identifier */
    id: string;
    /** Human-readable name (not required to be unique) */
    name: string;
    /** Allocated storage in GB */
    size: number;
    /** Data center location; immutable after creation */
    dataCenter: string;
    /** Storage tier of this volume. Set at creation and immutable. */
    type: VolumeType;
}
export declare const NetworkVolume: S.Codec<NetworkVolume>;
/** Container CMD in exec form. When the image defines an ENTRYPOINT, this is the argument list passed to it. Encoded into the `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
export type CreatePodRequestCmdList = Array<string>;
export declare const CreatePodRequestCmdList: S.Codec<CreatePodRequestCmdList>;
/** Container ENTRYPOINT in exec form, overriding the image's own. Encoded into `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
export type CreatePodRequestEntrypointList = Array<string>;
export declare const CreatePodRequestEntrypointList: S.Codec<CreatePodRequestEntrypointList>;
/** Environment variables as key-value pairs */
export type CreatePodRequestEnvMap = {
    [key: string]: string | undefined;
};
export declare const CreatePodRequestEnvMap: S.Codec<CreatePodRequestEnvMap>;
/** Exposed ports, formatted as port/protocol */
export type CreatePodRequestPortsList = Array<string>;
export declare const CreatePodRequestPortsList: S.Codec<CreatePodRequestPortsList>;
/** Cloud tier. - `SECURE` — Runpod-owned datacenter hardware - `COMMUNITY` — community-hosted hardware */
export type Cloud = "SECURE" | "COMMUNITY";
export declare const Cloud: any;
/** Preferred data centers for placement. Omit or pass an empty array to let the scheduler choose. */
export type CreatePodRequestDataCenterIdsList = Array<string>;
export declare const CreatePodRequestDataCenterIdsList: S.Codec<CreatePodRequestDataCenterIdsList>;
/** Acceptable CUDA versions for the host machine, as `major.minor`. Omit to accept any version. Matching is exact, so a version no machine reports yields a capacity error rather than a fallback — discover valid values per GPU type via `GET /v2/catalog/gpus?include=AVAILABILITY&product=POD` (`cudaVersions`). A non-empty set is mutually exclusive with minCudaVersion (400 if both are sent). An explicit `[]` states no constraint, so it may accompany a floor. */
export type CreateGpuConfigAllowedCudaVersionsList = Array<string>;
export declare const CreateGpuConfigAllowedCudaVersionsList: S.Codec<CreateGpuConfigAllowedCudaVersionsList>;
/** GPU request for a pod create. Carries the CUDA host constraints, which live here rather than at the body's top level so they are unrepresentable on a CPU pod. */
export interface CreateGpuConfig {
    /** GPU type identifier */
    id: string;
    /** Number of GPUs */
    count?: number;
    /** Acceptable CUDA versions for the host machine, as `major.minor`. Omit to accept any version. Matching is exact, so a version no machine reports yields a capacity error rather than a fallback — discover valid values per GPU type via `GET /v2/catalog/gpus?include=AVAILABILITY&product=POD` (`cudaVersions`). A non-empty set is mutually exclusive with minCudaVersion (400 if both are sent). An explicit `[]` states no constraint, so it may accompany a floor. */
    allowedCudaVersions?: CreateGpuConfigAllowedCudaVersionsList;
    /** Lowest acceptable CUDA version for the host machine, as `major.minor`, compared numerically rather than as a decimal — so 12.11 is above 12.2. Use this for an open-ended floor and allowedCudaVersions for an exact set. Mutually exclusive with a non-empty allowedCudaVersions (400 if both are sent); an explicit `[]` there states no constraint and may accompany this floor. */
    minCudaVersion?: string;
    /** Minimum host system RAM in GB per requested GPU. This is a placement filter, not a resource request. The actual total allocated system RAM may be higher and is returned in gpu.memory. */
    minRamPerGpu?: number;
    /** Minimum host vCPU count per requested GPU. This is a placement filter, not a resource request. The actual total allocated vCPU count may be higher and is returned in gpu.vcpuCount. */
    minVcpuCountPerGpu?: number;
}
export declare const CreateGpuConfig: S.Codec<CreateGpuConfig>;
export interface CreatePodRequest {
    /** The container's command, as a single raw string. This is the field `entrypoint` and `cmd` encode into, exposed in its stored form. Two shapes are accepted. A bare shell string is treated as CMD and split into arguments, which is what the console's "Container start command" field writes. A JSON object of the form `{"entrypoint":[...],"cmd":[...]}` sets either or both explicitly. Responses always return both representations: `args` exactly as stored, plus the deconstructed `entrypoint` and `cmd`. Supplying `args` together with `entrypoint` or `cmd` is allowed only when they describe the same command, so a read-modify-write client can send back everything it received. Send `""` to clear, omit to leave unchanged. */
    args?: string;
    /** Container CMD in exec form. When the image defines an ENTRYPOINT, this is the argument list passed to it. Encoded into the `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
    cmd?: CreatePodRequestCmdList;
    /** Container ENTRYPOINT in exec form, overriding the image's own. Encoded into `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
    entrypoint?: CreatePodRequestEntrypointList;
    /** Container disk in GB (ephemeral, wiped on restart) */
    disk?: number;
    /** Environment variables as key-value pairs */
    env?: CreatePodRequestEnvMap;
    /** Docker image reference */
    image?: string;
    /** Exposed ports, formatted as port/protocol */
    ports?: CreatePodRequestPortsList;
    /** Container registry credential ID (for private images) */
    registry?: string | null;
    name: string;
    /** Cloud tier. Defaults to `SECURE` when omitted. */
    cloud?: Cloud | (string & {});
    cpu?: BaseCpuConfig;
    /** Preferred data centers for placement. Omit or pass an empty array to let the scheduler choose. */
    dataCenterIds?: CreatePodRequestDataCenterIdsList;
    /** Enable global networking, giving the pod a private IP reachable across data centers. Requires an NVIDIA GPU and a global-networking-enabled data center (both enforced upstream). See `GET /v2/catalog/datacenters` (`globalNetwork`) for eligible data centers. */
    globalNetworking?: boolean;
    gpu?: CreateGpuConfig;
    mounts?: Mounts;
    /** Create-time flag telling the provisioner to start JupyterLab: injects a generated `JUPYTER_PASSWORD` environment variable, unless the request already sets one. Only images that honor the convention start Jupyter from it (Runpod official images do); expose `8888/http` in `ports` to reach it. Not part of the pod's readable config — never returned by GET and not changeable by PATCH. */
    startJupyter?: boolean;
    /** Create-time flag telling the provisioner to set up SSH access: injects a `PUBLIC_KEY` environment variable carrying your account's registered SSH public keys, unless the request already sets one. **Requires registered keys** (`PUT /v2/account/ssh-keys`) — with none registered the flag does nothing and the pod has no SSH access. Only images that honor the convention start sshd from it (all Runpod official images do). Connect using the pod's `ssh` block; the `ssh.direct` variant additionally needs a `22/tcp` entry in `ports`. Not part of the pod's readable config — never returned by GET and not changeable by PATCH. */
    startSsh?: boolean;
    /** ID of a pod template to base this pod on. The template is resolved at create time into the same container settings you could otherwise spread into this body (image, args, disk, ports, env, registry, persistent mount, startSsh, startJupyter, allowedCudaVersions); explicit body fields override the template's, except `env`, which is merged per key with body values winning. Sending either CUDA field (`gpu.allowedCudaVersions` or `gpu.minCudaVersion`) replaces the template's CUDA constraint entirely, and CPU pods ignore it (like the persistent mount). The template is a one-time source of settings: later template edits do not affect the pod, and the created pod does not retain a link to the template (`template` stays null). The template may be one of your own or a public catalog template — see `GET /v2/catalog/templates` (unknown or inaccessible ID → 404) — and must not be a serverless template (→ 422). CPU pods do not inherit a template's persistent mount. */
    templateId?: string;
}
export declare const CreatePodRequest: S.Codec<CreatePodRequest>;
/** Container CMD in exec form. When the image defines an ENTRYPOINT, this is the argument list passed to it. Encoded into the `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
export type CreatePodResponseCmdList = Array<string>;
export declare const CreatePodResponseCmdList: S.Codec<CreatePodResponseCmdList>;
/** Container ENTRYPOINT in exec form, overriding the image's own. Encoded into `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
export type CreatePodResponseEntrypointList = Array<string>;
export declare const CreatePodResponseEntrypointList: S.Codec<CreatePodResponseEntrypointList>;
/** Environment variables as key-value pairs */
export type CreatePodResponseEnvMap = {
    [key: string]: string | undefined;
};
export declare const CreatePodResponseEnvMap: S.Codec<CreatePodResponseEnvMap>;
/** Exposed ports, formatted as port/protocol */
export type CreatePodResponsePortsList = Array<string>;
export declare const CreatePodResponsePortsList: S.Codec<CreatePodResponsePortsList>;
/** State transition to trigger on a pod. */
export type PodAction = "start" | "stop" | "restart" | "terminate";
export declare const PodAction: any;
/** Valid state transitions for the current status. */
export type CreatePodResponseActionsList = Array<PodAction>;
export declare const CreatePodResponseActionsList: S.Codec<CreatePodResponseActionsList>;
export interface GpuConfig {
    /** GPU type identifier */
    id: string;
    /** Number of GPUs */
    count?: number;
    /** Total vCPU count allocated to the pod across all requested GPUs. */
    vcpuCount: number;
    /** Total system RAM in GB allocated to the pod across all requested GPUs. */
    memory: number;
}
export declare const GpuConfig: S.Codec<GpuConfig>;
/** One way to reach the pod over SSH, as both its parts and a ready-to-run invocation. */
export interface PodSshEndpoint {
    /** Hostname or IP to connect to. */
    host: string;
    /** TCP port to connect to. */
    port: number;
    /** SSH username. For the proxy this is an opaque routing token, not a user account on the pod. */
    username: string;
    /** The equivalent `ssh` invocation, ready to run. Add `-i <path>` if the matching private key is not one of your default identities, and `-o StrictHostKeyChecking=no` to skip the host-key prompt on short-lived pods. */
    command: string;
}
export declare const PodSshEndpoint: S.Codec<PodSshEndpoint>;
/** How to connect to this pod over SSH. Both variants authenticate with the account's registered SSH public keys (`PUT /v2/account/ssh-keys`), which reach the pod only if it was created with `startSsh` — a pod created without it has no SSH access regardless of what this block reports. */
export interface PodSsh {
    /** Connection through Runpod's SSH proxy. Works without exposing a port and without a public IP, but carries an interactive shell only — SCP, SFTP, rsync, and port forwarding need `direct`. Null until the pod has a machine assignment. */
    proxy: PodSshEndpoint | null;
    /** Connection straight to the pod's sshd over its published `22/tcp` mapping. Supports the full SSH feature set. Null unless `22/tcp` is in `ports` and the running pod has been assigned a public port for it — so it is absent while the pod is provisioning or stopped. */
    direct: PodSshEndpoint | null;
}
export declare const PodSsh: S.Codec<PodSsh>;
/** A cluster member's role. Assigned for SLURM and RAY clusters; omitted for TRAINING/APPLICATION members. */
export type PodClusterRole = "SLURM_CONTROLLER" | "SLURM_COMPUTE" | "RAY_HEAD" | "RAY_WORKER";
export declare const PodClusterRole: any;
/** A pod's membership in a cluster. */
export interface PodCluster {
    /** ID of the cluster this pod belongs to. */
    id: string;
    /** The pod's node rank within the cluster (NODE_RANK), or null until the index is assigned during provisioning. Rank 0 is the cluster's entry node (`Cluster.primary`); for SLURM it is the controller. */
    rank: number | null;
    /** SLURM or RAY role; omitted for TRAINING/APPLICATION clusters, which do not assign roles. */
    role?: PodClusterRole;
    /** The pod's address on the cluster's private overlay network; omitted until the address is assigned. */
    ip?: string;
}
export declare const PodCluster: S.Codec<PodCluster>;
export interface PodGlobalNetworking {
    /** Whether global networking is enabled, giving the pod a private IP reachable across data centers. Derived from whether the pod has an assigned global-network address. */
    enabled: boolean;
    /** The pod's assigned global-networking IP. Present only when enabled. */
    ip?: string;
    /** Internal DNS name (`<podId>.runpod.internal`), reachable from other globally-networked pods in the same account. Present only when enabled. */
    internalDns?: string;
}
export declare const PodGlobalNetworking: S.Codec<PodGlobalNetworking>;
/** Per-GPU utilization metrics. */
export interface PodGpuUtilization {
    util?: number;
    memoryUtil?: number;
}
export declare const PodGpuUtilization: S.Codec<PodGpuUtilization>;
export type PodRuntimeGpusList = Array<PodGpuUtilization>;
export declare const PodRuntimeGpusList: S.Codec<PodRuntimeGpusList>;
/** Single-value utilization percentage (0–100). Shared by `cpu` and `memory`. */
export interface Utilization {
    util?: number;
}
export declare const Utilization: S.Codec<Utilization>;
/** Live port mapping for a running pod. */
export interface PodRuntimePort {
    private?: number;
    public?: number | null;
    type?: string;
    ip?: string | null;
}
export declare const PodRuntimePort: S.Codec<PodRuntimePort>;
export type PodRuntimePortsList = Array<PodRuntimePort>;
export declare const PodRuntimePortsList: S.Codec<PodRuntimePortsList>;
/** Live utilization metrics for a running pod. */
export interface PodRuntime {
    /** Seconds since the container started */
    uptime?: number;
    gpus?: PodRuntimeGpusList;
    cpu?: Utilization;
    memory?: Utilization;
    ports?: PodRuntimePortsList;
}
export declare const PodRuntime: S.Codec<PodRuntime>;
export interface CreatePodResponse {
    /** The container's command, as a single raw string. This is the field `entrypoint` and `cmd` encode into, exposed in its stored form. Two shapes are accepted. A bare shell string is treated as CMD and split into arguments, which is what the console's "Container start command" field writes. A JSON object of the form `{"entrypoint":[...],"cmd":[...]}` sets either or both explicitly. Responses always return both representations: `args` exactly as stored, plus the deconstructed `entrypoint` and `cmd`. Supplying `args` together with `entrypoint` or `cmd` is allowed only when they describe the same command, so a read-modify-write client can send back everything it received. Send `""` to clear, omit to leave unchanged. */
    args: string;
    /** Container CMD in exec form. When the image defines an ENTRYPOINT, this is the argument list passed to it. Encoded into the `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
    cmd?: CreatePodResponseCmdList;
    /** Container ENTRYPOINT in exec form, overriding the image's own. Encoded into `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
    entrypoint?: CreatePodResponseEntrypointList;
    /** Container disk in GB (ephemeral, wiped on restart) */
    disk: number;
    /** Environment variables as key-value pairs */
    env: CreatePodResponseEnvMap;
    /** Docker image reference */
    image: string;
    /** Exposed ports, formatted as port/protocol */
    ports: CreatePodResponsePortsList;
    /** Container registry credential ID (for private images) */
    registry: string | null;
    id: string;
    name: string;
    status: PodStatus;
    /** Valid state transitions for the current status. */
    actions: CreatePodResponseActionsList;
    mounts: Mounts;
    /** Present for GPU pods; omitted from CPU pods. */
    gpu?: GpuConfig;
    /** Present for CPU pods; omitted from GPU pods. */
    cpu?: CpuConfig;
    cloud: Cloud;
    /** Data center where the pod is running (assigned by scheduler) */
    dataCenterId: string | null;
    /** CUDA version reported by the host machine. Retained while the pod is stopped — a stopped pod keeps its machine assignment and resumes onto the same host. Null means unknown or not applicable (CPU pods, or a host that has not reported one), not that CUDA is absent. */
    cudaVersion: string | null;
    /** SSH connection details, via the Runpod proxy or directly to the pod's published `22/tcp` port. */
    ssh: PodSsh;
    /** Cluster membership; omitted from a standalone pod. Member pods are managed through `/v2/clusters/{id}` — they are excluded from `GET /v2/pods` by default (pass `includeClusterPods=true` to include them) and cannot be modified or deleted via the pod endpoints. */
    cluster?: PodCluster;
    /** ID of the template this pod was created from */
    template: string | null;
    /** Current cost in USD per hour (0.0 when EXITED or TERMINATED) */
    cost: number;
    /** Whether the pod is locked (prevents stopping or resetting) */
    locked: boolean;
    globalNetworking: PodGlobalNetworking;
    /** Live utilization metrics. Null when the pod is not RUNNING. */
    runtime: PodRuntime | null;
    createdAt: string;
    startedAt: string | null;
}
export declare const CreatePodResponse: S.Codec<CreatePodResponse>;
export interface CreateRegistryRequest {
    name: string;
    /** Registry password (write-only, not returned in responses) */
    password: string;
    /** Registry username (write-only, not returned in responses) */
    username: string;
}
export declare const CreateRegistryRequest: S.Codec<CreateRegistryRequest>;
export interface Registry {
    id: string;
    name: string;
}
export declare const Registry: S.Codec<Registry>;
export interface CreateSecretRequest {
    /** Unique name for the secret — referenced from environment variables as `{{ RUNPOD_SECRET_<name> }}`; immutable after creation. Maximum 191 characters, must start with a letter or underscore, and may contain letters, digits, and `_.-/`. Names beginning with the reserved prefix `RUNPOD` are rejected (case-insensitive). */
    name: string;
    /** The secret value. Write-only — never returned by the API. Must be smaller than 16 MiB of UTF-8 text (strictly under 16,777,216 bytes). */
    value: string;
    /** Optional human-readable description, at most 65,535 bytes of UTF-8 text. */
    description?: string;
}
export declare const CreateSecretRequest: S.Codec<CreateSecretRequest>;
/** An account-scoped secret: an encrypted string stored by Runpod, referenced from pod, serverless, and template environment variables with the `{{ RUNPOD_SECRET_<name> }}` placeholder, substituted with the secret's value when the pod or worker boots. The value is write-only and never returned by the API. */
export interface Secret {
    /** Unique secret identifier */
    id: string;
    /** Unique, human-readable name — the `<name>` referenced by the `RUNPOD_SECRET_<name>` placeholder. Immutable after creation. */
    name: string;
    /** Human-readable description */
    description?: string | null;
    /** When the secret was created */
    createdAt: string;
    /** When the secret's value was last set (creation or rotation) */
    valueLastUpdatedAt?: string | null;
}
export declare const Secret: S.Codec<Secret>;
/** Container CMD in exec form. When the image defines an ENTRYPOINT, this is the argument list passed to it. Encoded into the `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
export type CreateTemplateRequestCmdList = Array<string>;
export declare const CreateTemplateRequestCmdList: S.Codec<CreateTemplateRequestCmdList>;
/** Container ENTRYPOINT in exec form, overriding the image's own. Encoded into `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
export type CreateTemplateRequestEntrypointList = Array<string>;
export declare const CreateTemplateRequestEntrypointList: S.Codec<CreateTemplateRequestEntrypointList>;
/** Environment variables as key-value pairs */
export type CreateTemplateRequestEnvMap = {
    [key: string]: string | undefined;
};
export declare const CreateTemplateRequestEnvMap: S.Codec<CreateTemplateRequestEnvMap>;
/** Exposed ports, formatted as port/protocol */
export type CreateTemplateRequestPortsList = Array<string>;
export declare const CreateTemplateRequestPortsList: S.Codec<CreateTemplateRequestPortsList>;
/** Acceptable CUDA versions for containers created from this template, as `major.minor`. Omit to accept any version — see the same field on `createPod` for matching semantics. Expanded into GPU pod and serverless endpoint creates; CPU pods ignore it. */
export type CreateTemplateRequestAllowedCudaVersionsList = Array<string>;
export declare const CreateTemplateRequestAllowedCudaVersionsList: S.Codec<CreateTemplateRequestAllowedCudaVersionsList>;
/** Controls how the template is grouped and filtered in the Runpod console. It does not affect hardware selection, scheduling, or billing. - `CPU` — CPU-only workloads - `NVIDIA` — NVIDIA GPU workloads - `AMD` — AMD GPU workloads */
export type TemplateCategory = "CPU" | "NVIDIA" | "AMD";
export declare const TemplateCategory: any;
/** Storage mounts attached to a template. Templates support only a single persistent mount today; any `network` property is rejected with 422 by the schema validator. PATCH semantics: omitting `mounts` or sending `{}` leaves the existing mount unchanged. */
export interface TemplateMounts {
    persistent?: PersistentMount;
}
export declare const TemplateMounts: S.Codec<TemplateMounts>;
export interface CreateTemplateRequest {
    /** The container's command, as a single raw string. This is the field `entrypoint` and `cmd` encode into, exposed in its stored form. Two shapes are accepted. A bare shell string is treated as CMD and split into arguments, which is what the console's "Container start command" field writes. A JSON object of the form `{"entrypoint":[...],"cmd":[...]}` sets either or both explicitly. Responses always return both representations: `args` exactly as stored, plus the deconstructed `entrypoint` and `cmd`. Supplying `args` together with `entrypoint` or `cmd` is allowed only when they describe the same command, so a read-modify-write client can send back everything it received. Send `""` to clear, omit to leave unchanged. */
    args?: string;
    /** Container CMD in exec form. When the image defines an ENTRYPOINT, this is the argument list passed to it. Encoded into the `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
    cmd?: CreateTemplateRequestCmdList;
    /** Container ENTRYPOINT in exec form, overriding the image's own. Encoded into `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
    entrypoint?: CreateTemplateRequestEntrypointList;
    /** Container disk in GB (ephemeral, wiped on restart) */
    disk?: number;
    /** Environment variables as key-value pairs */
    env?: CreateTemplateRequestEnvMap;
    /** Docker image reference */
    image: string;
    /** Exposed ports, formatted as port/protocol */
    ports?: CreateTemplateRequestPortsList;
    /** Container registry credential ID (for private images) */
    registry?: string | null;
    name: string;
    /** Acceptable CUDA versions for containers created from this template, as `major.minor`. Omit to accept any version — see the same field on `createPod` for matching semantics. Expanded into GPU pod and serverless endpoint creates; CPU pods ignore it. */
    allowedCudaVersions?: CreateTemplateRequestAllowedCudaVersionsList;
    /** Optional. Defaults to `NVIDIA` when omitted. */
    category?: TemplateCategory | (string & {});
    mounts?: TemplateMounts;
    public?: boolean;
    serverless?: boolean;
    /** Start JupyterLab in containers created from this template: injects a generated `JUPYTER_PASSWORD` environment variable, unless `env` already sets one. Only images that honor the convention start Jupyter from it (Runpod official images do); expose `8888/http` in `ports` to reach it. Defaults to `true` when omitted, matching console-created templates. */
    startJupyter?: boolean;
    /** Provision SSH access in containers created from this template: injects a `PUBLIC_KEY` environment variable carrying the deployer's registered SSH public keys (`PUT /v2/account/ssh-keys` — with none registered the flag does nothing), unless `env` already sets one. Only images that honor the convention start sshd from it (all Runpod official images do); direct SSH also needs a `22/tcp` entry in `ports`. Defaults to `true` when omitted, matching console-created templates. */
    startSsh?: boolean;
}
export declare const CreateTemplateRequest: S.Codec<CreateTemplateRequest>;
/** Container CMD in exec form. When the image defines an ENTRYPOINT, this is the argument list passed to it. Encoded into the `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
export type CreateTemplateResponseCmdList = Array<string>;
export declare const CreateTemplateResponseCmdList: S.Codec<CreateTemplateResponseCmdList>;
/** Container ENTRYPOINT in exec form, overriding the image's own. Encoded into `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
export type CreateTemplateResponseEntrypointList = Array<string>;
export declare const CreateTemplateResponseEntrypointList: S.Codec<CreateTemplateResponseEntrypointList>;
/** Environment variables as key-value pairs */
export type CreateTemplateResponseEnvMap = {
    [key: string]: string | undefined;
};
export declare const CreateTemplateResponseEnvMap: S.Codec<CreateTemplateResponseEnvMap>;
/** Exposed ports, formatted as port/protocol */
export type CreateTemplateResponsePortsList = Array<string>;
export declare const CreateTemplateResponsePortsList: S.Codec<CreateTemplateResponsePortsList>;
/** Acceptable CUDA versions for containers created from this template, as `major.minor`. Empty means any version. Expanded into GPU pod and serverless endpoint creates; CPU pods ignore it. */
export type CreateTemplateResponseAllowedCudaVersionsList = Array<string>;
export declare const CreateTemplateResponseAllowedCudaVersionsList: S.Codec<CreateTemplateResponseAllowedCudaVersionsList>;
export interface CreateTemplateResponse {
    /** The container's command, as a single raw string. This is the field `entrypoint` and `cmd` encode into, exposed in its stored form. Two shapes are accepted. A bare shell string is treated as CMD and split into arguments, which is what the console's "Container start command" field writes. A JSON object of the form `{"entrypoint":[...],"cmd":[...]}` sets either or both explicitly. Responses always return both representations: `args` exactly as stored, plus the deconstructed `entrypoint` and `cmd`. Supplying `args` together with `entrypoint` or `cmd` is allowed only when they describe the same command, so a read-modify-write client can send back everything it received. Send `""` to clear, omit to leave unchanged. */
    args: string;
    /** Container CMD in exec form. When the image defines an ENTRYPOINT, this is the argument list passed to it. Encoded into the `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
    cmd?: CreateTemplateResponseCmdList;
    /** Container ENTRYPOINT in exec form, overriding the image's own. Encoded into `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
    entrypoint?: CreateTemplateResponseEntrypointList;
    /** Container disk in GB (ephemeral, wiped on restart) */
    disk: number;
    /** Environment variables as key-value pairs */
    env: CreateTemplateResponseEnvMap;
    /** Docker image reference */
    image: string;
    /** Exposed ports, formatted as port/protocol */
    ports: CreateTemplateResponsePortsList;
    /** Container registry credential ID (for private images) */
    registry: string | null;
    id: string;
    name: string;
    mounts: TemplateMounts;
    /** Whether this template is for serverless workers (true) or pods (false) */
    serverless: boolean;
    /** Whether this template is visible to other Runpod users */
    public: boolean;
    category: TemplateCategory;
    /** Whether containers created from this template get SSH access provisioned at startup (`PUBLIC_KEY` env injection). */
    startSsh: boolean;
    /** Whether containers created from this template start JupyterLab at startup (`JUPYTER_PASSWORD` env injection). */
    startJupyter: boolean;
    /** Acceptable CUDA versions for containers created from this template, as `major.minor`. Empty means any version. Expanded into GPU pod and serverless endpoint creates; CPU pods ignore it. */
    allowedCudaVersions: CreateTemplateResponseAllowedCudaVersionsList;
}
export declare const CreateTemplateResponse: S.Codec<CreateTemplateResponse>;
export interface DeleteClusterRequest {
    /** Cluster identifier */
    id: string;
}
export declare const DeleteClusterRequest: S.Codec<DeleteClusterRequest>;
export interface DeleteClusterResponse {
}
export declare const DeleteClusterResponse: S.Codec<DeleteClusterResponse>;
export interface DeleteEndpointRequest {
    /** Serverless endpoint identifier */
    id: string;
}
export declare const DeleteEndpointRequest: S.Codec<DeleteEndpointRequest>;
export interface DeleteEndpointResponse {
}
export declare const DeleteEndpointResponse: S.Codec<DeleteEndpointResponse>;
export interface DeleteNetworkVolumeRequest {
    /** Network volume identifier */
    id: string;
}
export declare const DeleteNetworkVolumeRequest: S.Codec<DeleteNetworkVolumeRequest>;
export interface DeleteNetworkVolumeResponse {
}
export declare const DeleteNetworkVolumeResponse: S.Codec<DeleteNetworkVolumeResponse>;
export interface DeletePodRequest {
    /** Pod identifier */
    id: string;
}
export declare const DeletePodRequest: S.Codec<DeletePodRequest>;
export interface DeletePodResponse {
}
export declare const DeletePodResponse: S.Codec<DeletePodResponse>;
export interface DeleteRegistryRequest {
    id: string;
}
export declare const DeleteRegistryRequest: S.Codec<DeleteRegistryRequest>;
export interface DeleteRegistryResponse {
}
export declare const DeleteRegistryResponse: S.Codec<DeleteRegistryResponse>;
export interface DeleteSecretRequest {
    /** Secret identifier */
    id: string;
}
export declare const DeleteSecretRequest: S.Codec<DeleteSecretRequest>;
export interface DeleteSecretResponse {
}
export declare const DeleteSecretResponse: S.Codec<DeleteSecretResponse>;
export interface DeleteTemplateRequest {
    id: string;
}
export declare const DeleteTemplateRequest: S.Codec<DeleteTemplateRequest>;
export interface DeleteTemplateResponse {
}
export declare const DeleteTemplateResponse: S.Codec<DeleteTemplateResponse>;
export interface GetClusterRequest {
    /** Cluster identifier */
    id: string;
}
export declare const GetClusterRequest: S.Codec<GetClusterRequest>;
/** Catalog include expansion. Only AVAILABILITY is supported today; additional include values may be added in the future. */
export type CatalogInclude = "AVAILABILITY";
export declare const CatalogInclude: any;
export type GetCpuTypeRequestIncludeList = Array<CatalogInclude | (string & {})>;
export declare const GetCpuTypeRequestIncludeList: S.Codec<GetCpuTypeRequestIncludeList>;
/** CPU catalog product availability context. Availability is product-specific, so this is required whenever availability is requested. */
export type CpuProduct = "POD" | "SERVERLESS";
export declare const CpuProduct: any;
export type GetCpuTypeRequestProductList = Array<CpuProduct | (string & {})>;
export declare const GetCpuTypeRequestProductList: S.Codec<GetCpuTypeRequestProductList>;
export interface GetCpuTypeRequest {
    id: string;
    /** Comma-separated optional expansions. Supported value today: AVAILABILITY. This may expand with more include values in the future. */
    include?: GetCpuTypeRequestIncludeList;
    /** Comma-separated availability product contexts. Supported values for CPUs: POD, SERVERLESS. Required with include=AVAILABILITY, and valid only with it (400 either way). There is no default: availability differs by product. */
    product?: GetCpuTypeRequestProductList;
    /** Availability vCPU count. Valid only with include=AVAILABILITY. Must be a power of two. */
    vcpuCount?: number;
}
export declare const GetCpuTypeRequest: S.Codec<GetCpuTypeRequest>;
export interface CpuTypeVcpu {
    min: number;
    max: number;
}
export declare const CpuTypeVcpu: S.Codec<CpuTypeVcpu>;
export interface CpuTypePrice {
    /** Price for secure pods per vCPU. Multiply by the chosen vCPU count (within `vcpu.min`..`vcpu.max`) to get the total price. */
    securePerVcpu: number;
    /** Price for serverless per vCPU. Multiply by the chosen vCPU count (within `vcpu.min`..`vcpu.max`) to get the total price. */
    serverlessPerVcpu: number;
}
export declare const CpuTypePrice: S.Codec<CpuTypePrice>;
/** Catalog stock availability level. */
export type AvailabilityLevel = "NONE" | "LOW" | "MEDIUM" | "HIGH";
export declare const AvailabilityLevel: any;
export interface DataCenterAvailability {
    /** Data center identifier. */
    id: string;
    /** Human-readable data center name. */
    name: string;
    availability: AvailabilityLevel;
}
export declare const DataCenterAvailability: S.Codec<DataCenterAvailability>;
/** Per-datacenter CPU availability for the requested `product` contexts, listing only the datacenters that offer this CPU flavor. Present only when requested with include=AVAILABILITY, which also requires `product`, and omitted entirely when the flavor is unavailable everywhere. */
export type CpuTypeDataCentersList = Array<DataCenterAvailability>;
export declare const CpuTypeDataCentersList: S.Codec<CpuTypeDataCentersList>;
export interface CpuType {
    /** CPU flavor identifier (use in cpu.id for pod creation) */
    id: string;
    /** Human-readable flavor name */
    name: string;
    /** CPU generation group */
    group: string;
    vcpu: CpuTypeVcpu;
    /** GB of RAM allocated per vCPU. Multiply by the chosen vCPU count (within `vcpu.min`..`vcpu.max`) to get the total RAM for an instance of this flavor. May be fractional. */
    ramGbPerVcpu: number;
    price: CpuTypePrice;
    /** Overall CPU availability for the requested `product` contexts. Present only when requested with include=AVAILABILITY, which also requires `product`. */
    availability?: AvailabilityLevel;
    /** Per-datacenter CPU availability for the requested `product` contexts, listing only the datacenters that offer this CPU flavor. Present only when requested with include=AVAILABILITY, which also requires `product`, and omitted entirely when the flavor is unavailable everywhere. */
    dataCenters?: CpuTypeDataCentersList;
}
export declare const CpuType: S.Codec<CpuType>;
/** Data center catalog availability expansion. */
export type DataCenterInclude = "GPU_AVAILABILITY" | "CPU_AVAILABILITY";
export declare const DataCenterInclude: any;
export type GetDataCenterRequestIncludeList = Array<DataCenterInclude | (string & {})>;
export declare const GetDataCenterRequestIncludeList: S.Codec<GetDataCenterRequestIncludeList>;
export interface GetDataCenterRequest {
    id: string;
    /** Comma-separated optional expansions. Supported value: GPU_AVAILABILITY, CPU_AVAILABILITY. */
    include?: GetDataCenterRequestIncludeList;
}
export declare const GetDataCenterRequest: S.Codec<GetDataCenterRequest>;
/** Continental region containing the data center. */
export type DataCenterRegion = "NORTH_AMERICA" | "SOUTH_AMERICA" | "EUROPE" | "ASIA" | "MIDDLE_EAST" | "AFRICA" | "OCEANIA" | "ANTARCTICA" | "UNKNOWN";
export declare const DataCenterRegion: any;
/** Network volume tiers this DC supports. Empty = none. */
export type DataCenterNetworkVolumeTypesList = Array<VolumeType>;
export declare const DataCenterNetworkVolumeTypesList: S.Codec<DataCenterNetworkVolumeTypesList>;
/** Compliance certifications. */
export type Compliance = "GDPR" | "ISO_IEC_27001" | "ISO_14001" | "PCI_DSS" | "HITRUST" | "SOC_1_TYPE_2" | "SOC_2_TYPE_2" | "SOC_3_TYPE_2" | "ITAR" | "FISMA_HIGH" | "HIPAA" | "RENEWABLE";
export declare const Compliance: any;
/** Compliance certifications held by this data center */
export type DataCenterComplianceList = Array<Compliance>;
export declare const DataCenterComplianceList: S.Codec<DataCenterComplianceList>;
export interface CatalogResourceAvailability {
    /** Catalog resource identifier. */
    id: string;
    /** Human-readable catalog resource name. */
    name: string;
    availability: AvailabilityLevel;
}
export declare const CatalogResourceAvailability: S.Codec<CatalogResourceAvailability>;
/** Availability of each GPU this data center offers. Present only when requested with include=GPU_AVAILABILITY, and omitted entirely when the data center offers no GPUs. */
export type DataCenterGpuAvailabilityList = Array<CatalogResourceAvailability>;
export declare const DataCenterGpuAvailabilityList: S.Codec<DataCenterGpuAvailabilityList>;
/** Availability of each CPU flavor this data center offers. Present only when requested with include=CPU_AVAILABILITY, and omitted entirely when the data center offers no CPU flavors. */
export type DataCenterCpuAvailabilityList = Array<CatalogResourceAvailability>;
export declare const DataCenterCpuAvailabilityList: S.Codec<DataCenterCpuAvailabilityList>;
export interface DataCenter {
    id: string;
    name: string;
    region: DataCenterRegion;
    /** Whether this data center supports global networking (private cross-datacenter pod-to-pod network). */
    globalNetwork: boolean;
    /** Network volume tiers this DC supports. Empty = none. */
    networkVolumeTypes: DataCenterNetworkVolumeTypesList;
    /** Compliance certifications held by this data center */
    compliance: DataCenterComplianceList;
    /** Availability of each GPU this data center offers. Present only when requested with include=GPU_AVAILABILITY, and omitted entirely when the data center offers no GPUs. */
    gpuAvailability?: DataCenterGpuAvailabilityList;
    /** Availability of each CPU flavor this data center offers. Present only when requested with include=CPU_AVAILABILITY, and omitted entirely when the data center offers no CPU flavors. */
    cpuAvailability?: DataCenterCpuAvailabilityList;
}
export declare const DataCenter: S.Codec<DataCenter>;
export interface GetEndpointRequest {
    /** Serverless endpoint identifier */
    id: string;
}
export declare const GetEndpointRequest: S.Codec<GetEndpointRequest>;
/** Container CMD in exec form. When the image defines an ENTRYPOINT, this is the argument list passed to it. Encoded into the `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
export type GetEndpointResponseCmdList = Array<string>;
export declare const GetEndpointResponseCmdList: S.Codec<GetEndpointResponseCmdList>;
/** Container ENTRYPOINT in exec form, overriding the image's own. Encoded into `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
export type GetEndpointResponseEntrypointList = Array<string>;
export declare const GetEndpointResponseEntrypointList: S.Codec<GetEndpointResponseEntrypointList>;
/** Environment variables as key-value pairs */
export type GetEndpointResponseEnvMap = {
    [key: string]: string | undefined;
};
export declare const GetEndpointResponseEnvMap: S.Codec<GetEndpointResponseEnvMap>;
/** Exposed ports, formatted as port/protocol */
export type GetEndpointResponsePortsList = Array<string>;
export declare const GetEndpointResponsePortsList: S.Codec<GetEndpointResponsePortsList>;
/** Eligible CPU configurations for each worker, in the order they were submitted. Present for CPU endpoints and omitted for GPU endpoints. Memory is derived from the selected flavor's catalog RAM multiplier. */
export type GetEndpointResponseCpuList = Array<CpuConfig>;
export declare const GetEndpointResponseCpuList: S.Codec<GetEndpointResponseCpuList>;
export type GetEndpointResponseDataCenterIdsList = Array<string>;
export declare const GetEndpointResponseDataCenterIdsList: S.Codec<GetEndpointResponseDataCenterIdsList>;
export type GetEndpointResponseNetworkVolumesList = Array<string>;
export declare const GetEndpointResponseNetworkVolumesList: S.Codec<GetEndpointResponseNetworkVolumesList>;
export interface GetEndpointResponse {
    /** The container's command, as a single raw string. This is the field `entrypoint` and `cmd` encode into, exposed in its stored form. Two shapes are accepted. A bare shell string is treated as CMD and split into arguments, which is what the console's "Container start command" field writes. A JSON object of the form `{"entrypoint":[...],"cmd":[...]}` sets either or both explicitly. Responses always return both representations: `args` exactly as stored, plus the deconstructed `entrypoint` and `cmd`. Supplying `args` together with `entrypoint` or `cmd` is allowed only when they describe the same command, so a read-modify-write client can send back everything it received. Send `""` to clear, omit to leave unchanged. */
    args?: string;
    /** Container CMD in exec form. When the image defines an ENTRYPOINT, this is the argument list passed to it. Encoded into the `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
    cmd?: GetEndpointResponseCmdList;
    /** Container ENTRYPOINT in exec form, overriding the image's own. Encoded into `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
    entrypoint?: GetEndpointResponseEntrypointList;
    /** Container disk in GB (ephemeral, wiped on restart) */
    disk?: number;
    /** Environment variables as key-value pairs */
    env?: GetEndpointResponseEnvMap;
    /** Docker image reference */
    image?: string;
    /** Exposed ports, formatted as port/protocol */
    ports?: GetEndpointResponsePortsList;
    /** Container registry credential ID (for private images) */
    registry?: string | null;
    id: string;
    name: string;
    type?: EndpointType;
    requestUrls?: EndpointRequestUrls;
    gpu?: EndpointGpuConfig | null;
    /** Eligible CPU configurations for each worker, in the order they were submitted. Present for CPU endpoints and omitted for GPU endpoints. Memory is derived from the selected flavor's catalog RAM multiplier. */
    cpu?: GetEndpointResponseCpuList;
    workers: CreateEndpointRequestWorkers;
    scaling: EndpointScaling;
    dataCenterIds: GetEndpointResponseDataCenterIdsList;
    networkVolumes: GetEndpointResponseNetworkVolumesList;
    /** Per-request execution timeout in milliseconds */
    timeout: number;
    flashboot: FlashBoot;
    createdAt: string;
}
export declare const GetEndpointResponse: S.Codec<GetEndpointResponse>;
export interface GetEndpointBuildRequest {
    /** Serverless endpoint identifier */
    id: string;
    /** GitHub build identifier (from GET /v2/serverless/{id}/builds or a release's `buildId`) */
    buildId: string;
}
export declare const GetEndpointBuildRequest: S.Codec<GetEndpointBuildRequest>;
/** GitHub build lifecycle state. `COMPLETED`, `FAILED`, `CANCELLED`, and `TEST_FAILED` are terminal; `PENDING`, `BUILDING`, `UPLOADING`, and `TESTING` are live. */
export type BuildState = "PENDING" | "BUILDING" | "UPLOADING" | "TESTING" | "COMPLETED" | "FAILED" | "CANCELLED" | "TEST_FAILED";
export declare const BuildState: any;
export interface Build {
    id: string;
    status: BuildState;
    /** Short hash of the commit that triggered the build. */
    commitHash?: string | null;
    commitMessage?: string | null;
    /** Git branch the commit was pushed to. */
    branch?: string | null;
    /** When the triggering commit was authored. */
    commitDate?: string | null;
    /** Fully qualified image the build produced (or will produce). */
    imageName?: string | null;
    /** When the build started. Null while the build is still pending. */
    startedAt?: string | null;
    /** When the build reached a terminal state. Null while the build is live. */
    completedAt?: string | null;
    /** Failure detail for `FAILED` / `TEST_FAILED` builds; null otherwise. */
    error?: string | null;
}
export declare const Build: S.Codec<Build>;
export type GetGpuTypeRequestIncludeList = Array<CatalogInclude | (string & {})>;
export declare const GetGpuTypeRequestIncludeList: S.Codec<GetGpuTypeRequestIncludeList>;
/** Catalog product availability context. Availability is product-specific, so this is required whenever availability is requested. */
export type Product = "POD" | "CLUSTER" | "SERVERLESS";
export declare const Product: any;
export type GetGpuTypeRequestProductList = Array<Product | (string & {})>;
export declare const GetGpuTypeRequestProductList: S.Codec<GetGpuTypeRequestProductList>;
/** GPU availability cloud filter. */
export type GpuCloudFilter = "SECURE" | "COMMUNITY";
export declare const GpuCloudFilter: any;
export type GetGpuTypeRequestCountryCodesList = Array<string>;
export declare const GetGpuTypeRequestCountryCodesList: S.Codec<GetGpuTypeRequestCountryCodesList>;
export type GetGpuTypeRequestCudaVersionsList = Array<string>;
export declare const GetGpuTypeRequestCudaVersionsList: S.Codec<GetGpuTypeRequestCudaVersionsList>;
export interface GetGpuTypeRequest {
    id: string;
    /** Comma-separated optional expansions. Supported value today: AVAILABILITY. This may expand with more include values in the future. */
    include?: GetGpuTypeRequestIncludeList;
    /** Comma-separated availability product contexts. Supported values: POD, CLUSTER, SERVERLESS. Required with include=AVAILABILITY, and valid only with it (400 either way). There is no default: the same GPU type can be scarce for pods and plentiful for serverless, so the context has to be stated rather than assumed. */
    product?: GetGpuTypeRequestProductList;
    /** GPU count for availability and lowest-price calculations. Valid only with include=AVAILABILITY. Defaults to 1. */
    count?: number;
    /** Cloud type for availability and lowest-price calculations. Valid only with include=AVAILABILITY. Supported values: SECURE, COMMUNITY. Upstream default when omitted: SECURE. */
    cloud?: GpuCloudFilter | (string & {});
    /** Comma-separated ISO 3166-1 alpha-2 country codes, uppercase, to constrain availability to — e.g. FR or FR,DE. Values within this filter use OR semantics. Valid only with include=AVAILABILITY (400 otherwise); a malformed entry is a 422. Scopes availability, lowest-price calculations and the dataCenters array to those countries, so a listed data center outside them is omitted rather than returned with availability NONE. On the list endpoint a GPU type with no data center in those countries drops out entirely; the single-GPU endpoint still returns the requested type, with availability NONE and dataCenters omitted, so a 404 keeps meaning the GPU type does not exist. Read the NONE on availability rather than the absence of dataCenters, which is also absent when availability was not requested. */
    countryCodes?: GetGpuTypeRequestCountryCodesList;
    /** Comma-separated CUDA versions to scope availability and lowest-price calculations to, matched exactly. Format: major.minor, e.g. 12.8 — a bare major is rejected here because it identifies no version. Valid only with include=AVAILABILITY (400 otherwise) and mutually exclusive with minCudaVersion (400 if both are sent); a malformed entry is a 422. Also narrows the returned cudaVersions array; omit it to enumerate every version offered. */
    cudaVersions?: GetGpuTypeRequestCudaVersionsList;
    /** Lowest acceptable CUDA version to scope availability and lowest-price calculations to, compared numerically. Format: integer major or major.minor, e.g. 12 or 12.1 — unlike the `gpu.minCudaVersion` body field on pod and endpoint create, a bare major is accepted here and means any release of that major, because this filter only widens a read. Valid only with include=AVAILABILITY (400 otherwise) and mutually exclusive with cudaVersions (400 if both are sent); a malformed value is a 422. Use this for an open-ended floor and cudaVersions for an exact set. */
    minCudaVersion?: string;
}
export declare const GetGpuTypeRequest: S.Codec<GetGpuTypeRequest>;
/** Canonical GPU hardware manufacturer. */
export type GpuManufacturer = "NVIDIA" | "AMD" | "UNKNOWN";
export declare const GpuManufacturer: any;
/** List price in USD per hour for a **single** GPU of this type. Pod rates are quoted separately per cloud (`secure`, `community`); `serverless` is the rate for this GPU's pool. In every case the rate for a unit is the figure times `gpu.count`; the rate actually billed for a pod is reported as `cost` on the pod itself. */
export interface GpuTypePrice {
    secure: number;
    community: number;
    /** Serverless list price per GPU per hour, from the `pool` this GPU belongs to. Multiply by `gpu.count` for the per-worker rate. Absent when the GPU is not in a serverless pool available to the caller. Negotiated account discounts are not reflected. */
    serverless?: number;
}
export declare const GpuTypePrice: S.Codec<GpuTypePrice>;
/** The largest number of GPUs you can request on a single pod of this type, quoted separately per cloud. A pod runs on one machine, so this is the GPU count of the largest machine of this type Runpod operates in that cloud. This is a ceiling, not a stock level — it does not mean that many GPUs are free right now. For current availability, request `include=AVAILABILITY&product=POD` and read `availability` (overall) or `dataCenters` (per data center). */
export interface GpuTypeMaxCount {
    secure: number;
    community: number;
}
export declare const GpuTypeMaxCount: S.Codec<GpuTypeMaxCount>;
/** Per-datacenter GPU availability for the requested `product` contexts, listing only the datacenters that offer this GPU in the requested configuration. Present only when requested with include=AVAILABILITY, which also requires `product`, and omitted entirely when the configuration is unavailable everywhere. */
export type GpuTypeDataCentersList = Array<DataCenterAvailability>;
export declare const GpuTypeDataCentersList: S.Codec<GpuTypeDataCentersList>;
export interface CudaVersionAvailability {
    /** CUDA version as `major.minor`, suitable for `gpu.allowedCudaVersions` on pod create. */
    version: string;
    /** True when at least one machine on this CUDA version has free capacity now. False means the version is offered for this GPU type but is currently full, so a pod constrained to it will fail on capacity. */
    available: boolean;
}
export declare const CudaVersionAvailability: S.Codec<CudaVersionAvailability>;
/** CUDA versions offered by machines with this GPU type, each tagged with current capacity. Present only when requested with include=AVAILABILITY, and scoped by the same filters as `availability` (`count`, `cloud`, `product`, and whichever of `cudaVersions` / `minCudaVersion` was supplied). Machines that report no CUDA version are skipped, so this property is absent entirely for a GPU type with none — AMD, for instance. Treat a missing `cudaVersions` the same as an empty one. A version absent from a populated list is not offered for this GPU type. */
export type GpuTypeCudaVersionsList = Array<CudaVersionAvailability>;
export declare const GpuTypeCudaVersionsList: S.Codec<GpuTypeCudaVersionsList>;
export interface GpuType {
    /** Individual GPU type identifier (use for pod creation) */
    id: string;
    name: string;
    /** Serverless GPU pool ID (use for serverless endpoint creation). Null if GPU is not in a serverless pool. */
    pool: string | null;
    manufacturer: GpuManufacturer;
    /** VRAM in GB */
    memory: number;
    /** Available on secure cloud */
    secure: boolean;
    /** Available on community cloud */
    community: boolean;
    /** List price in USD per hour for a **single** GPU of this type. Pod rates are quoted separately per cloud (`secure`, `community`); `serverless` is the rate for this GPU's pool. In every case the rate for a unit is the figure times `gpu.count`; the rate actually billed for a pod is reported as `cost` on the pod itself. */
    price: GpuTypePrice;
    /** The largest number of GPUs you can request on a single pod of this type, quoted separately per cloud. A pod runs on one machine, so this is the GPU count of the largest machine of this type Runpod operates in that cloud. This is a ceiling, not a stock level — it does not mean that many GPUs are free right now. For current availability, request `include=AVAILABILITY&product=POD` and read `availability` (overall) or `dataCenters` (per data center). */
    maxCount: GpuTypeMaxCount;
    /** Overall GPU availability for the requested `product` contexts. Present only when requested with include=AVAILABILITY, which also requires `product`. */
    availability?: AvailabilityLevel;
    /** Per-datacenter GPU availability for the requested `product` contexts, listing only the datacenters that offer this GPU in the requested configuration. Present only when requested with include=AVAILABILITY, which also requires `product`, and omitted entirely when the configuration is unavailable everywhere. */
    dataCenters?: GpuTypeDataCentersList;
    /** CUDA versions offered by machines with this GPU type, each tagged with current capacity. Present only when requested with include=AVAILABILITY, and scoped by the same filters as `availability` (`count`, `cloud`, `product`, and whichever of `cudaVersions` / `minCudaVersion` was supplied). Machines that report no CUDA version are skipped, so this property is absent entirely for a GPU type with none — AMD, for instance. Treat a missing `cudaVersions` the same as an empty one. A version absent from a populated list is not offered for this GPU type. */
    cudaVersions?: GpuTypeCudaVersionsList;
}
export declare const GpuType: S.Codec<GpuType>;
export interface GetNetworkVolumeRequest {
    /** Network volume identifier */
    id: string;
}
export declare const GetNetworkVolumeRequest: S.Codec<GetNetworkVolumeRequest>;
export interface GetPodRequest {
    /** Pod identifier */
    id: string;
}
export declare const GetPodRequest: S.Codec<GetPodRequest>;
/** Container CMD in exec form. When the image defines an ENTRYPOINT, this is the argument list passed to it. Encoded into the `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
export type GetPodResponseCmdList = Array<string>;
export declare const GetPodResponseCmdList: S.Codec<GetPodResponseCmdList>;
/** Container ENTRYPOINT in exec form, overriding the image's own. Encoded into `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
export type GetPodResponseEntrypointList = Array<string>;
export declare const GetPodResponseEntrypointList: S.Codec<GetPodResponseEntrypointList>;
/** Environment variables as key-value pairs */
export type GetPodResponseEnvMap = {
    [key: string]: string | undefined;
};
export declare const GetPodResponseEnvMap: S.Codec<GetPodResponseEnvMap>;
/** Exposed ports, formatted as port/protocol */
export type GetPodResponsePortsList = Array<string>;
export declare const GetPodResponsePortsList: S.Codec<GetPodResponsePortsList>;
/** Valid state transitions for the current status. */
export type GetPodResponseActionsList = Array<PodAction>;
export declare const GetPodResponseActionsList: S.Codec<GetPodResponseActionsList>;
export interface GetPodResponse {
    /** The container's command, as a single raw string. This is the field `entrypoint` and `cmd` encode into, exposed in its stored form. Two shapes are accepted. A bare shell string is treated as CMD and split into arguments, which is what the console's "Container start command" field writes. A JSON object of the form `{"entrypoint":[...],"cmd":[...]}` sets either or both explicitly. Responses always return both representations: `args` exactly as stored, plus the deconstructed `entrypoint` and `cmd`. Supplying `args` together with `entrypoint` or `cmd` is allowed only when they describe the same command, so a read-modify-write client can send back everything it received. Send `""` to clear, omit to leave unchanged. */
    args: string;
    /** Container CMD in exec form. When the image defines an ENTRYPOINT, this is the argument list passed to it. Encoded into the `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
    cmd?: GetPodResponseCmdList;
    /** Container ENTRYPOINT in exec form, overriding the image's own. Encoded into `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
    entrypoint?: GetPodResponseEntrypointList;
    /** Container disk in GB (ephemeral, wiped on restart) */
    disk: number;
    /** Environment variables as key-value pairs */
    env: GetPodResponseEnvMap;
    /** Docker image reference */
    image: string;
    /** Exposed ports, formatted as port/protocol */
    ports: GetPodResponsePortsList;
    /** Container registry credential ID (for private images) */
    registry: string | null;
    id: string;
    name: string;
    status: PodStatus;
    /** Valid state transitions for the current status. */
    actions: GetPodResponseActionsList;
    mounts: Mounts;
    /** Present for GPU pods; omitted from CPU pods. */
    gpu?: GpuConfig;
    /** Present for CPU pods; omitted from GPU pods. */
    cpu?: CpuConfig;
    cloud: Cloud;
    /** Data center where the pod is running (assigned by scheduler) */
    dataCenterId: string | null;
    /** CUDA version reported by the host machine. Retained while the pod is stopped — a stopped pod keeps its machine assignment and resumes onto the same host. Null means unknown or not applicable (CPU pods, or a host that has not reported one), not that CUDA is absent. */
    cudaVersion: string | null;
    /** SSH connection details, via the Runpod proxy or directly to the pod's published `22/tcp` port. */
    ssh: PodSsh;
    /** Cluster membership; omitted from a standalone pod. Member pods are managed through `/v2/clusters/{id}` — they are excluded from `GET /v2/pods` by default (pass `includeClusterPods=true` to include them) and cannot be modified or deleted via the pod endpoints. */
    cluster?: PodCluster;
    /** ID of the template this pod was created from */
    template: string | null;
    /** Current cost in USD per hour (0.0 when EXITED or TERMINATED) */
    cost: number;
    /** Whether the pod is locked (prevents stopping or resetting) */
    locked: boolean;
    globalNetworking: PodGlobalNetworking;
    /** Live utilization metrics. Null when the pod is not RUNNING. */
    runtime: PodRuntime | null;
    createdAt: string;
    startedAt: string | null;
}
export declare const GetPodResponse: S.Codec<GetPodResponse>;
export interface GetRegistryRequest {
    id: string;
}
export declare const GetRegistryRequest: S.Codec<GetRegistryRequest>;
export interface GetSecretRequest {
    /** Secret identifier */
    id: string;
}
export declare const GetSecretRequest: S.Codec<GetSecretRequest>;
export interface GetSshKeysRequest {
}
export declare const GetSshKeysRequest: S.Codec<GetSshKeysRequest>;
/** The account's registered SSH public keys, one authorized_keys-style entry per element (`<type> <base64-key> [comment]`). */
export type SshKeysKeysList = Array<string>;
export declare const SshKeysKeysList: S.Codec<SshKeysKeysList>;
export interface SshKeys {
    /** The account's registered SSH public keys, one authorized_keys-style entry per element (`<type> <base64-key> [comment]`). */
    keys: SshKeysKeysList;
}
export declare const SshKeys: S.Codec<SshKeys>;
export interface GetTemplateRequest {
    id: string;
}
export declare const GetTemplateRequest: S.Codec<GetTemplateRequest>;
/** Container CMD in exec form. When the image defines an ENTRYPOINT, this is the argument list passed to it. Encoded into the `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
export type GetTemplateResponseCmdList = Array<string>;
export declare const GetTemplateResponseCmdList: S.Codec<GetTemplateResponseCmdList>;
/** Container ENTRYPOINT in exec form, overriding the image's own. Encoded into `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
export type GetTemplateResponseEntrypointList = Array<string>;
export declare const GetTemplateResponseEntrypointList: S.Codec<GetTemplateResponseEntrypointList>;
/** Environment variables as key-value pairs */
export type GetTemplateResponseEnvMap = {
    [key: string]: string | undefined;
};
export declare const GetTemplateResponseEnvMap: S.Codec<GetTemplateResponseEnvMap>;
/** Exposed ports, formatted as port/protocol */
export type GetTemplateResponsePortsList = Array<string>;
export declare const GetTemplateResponsePortsList: S.Codec<GetTemplateResponsePortsList>;
/** Acceptable CUDA versions for containers created from this template, as `major.minor`. Empty means any version. Expanded into GPU pod and serverless endpoint creates; CPU pods ignore it. */
export type GetTemplateResponseAllowedCudaVersionsList = Array<string>;
export declare const GetTemplateResponseAllowedCudaVersionsList: S.Codec<GetTemplateResponseAllowedCudaVersionsList>;
export interface GetTemplateResponse {
    /** The container's command, as a single raw string. This is the field `entrypoint` and `cmd` encode into, exposed in its stored form. Two shapes are accepted. A bare shell string is treated as CMD and split into arguments, which is what the console's "Container start command" field writes. A JSON object of the form `{"entrypoint":[...],"cmd":[...]}` sets either or both explicitly. Responses always return both representations: `args` exactly as stored, plus the deconstructed `entrypoint` and `cmd`. Supplying `args` together with `entrypoint` or `cmd` is allowed only when they describe the same command, so a read-modify-write client can send back everything it received. Send `""` to clear, omit to leave unchanged. */
    args: string;
    /** Container CMD in exec form. When the image defines an ENTRYPOINT, this is the argument list passed to it. Encoded into the `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
    cmd?: GetTemplateResponseCmdList;
    /** Container ENTRYPOINT in exec form, overriding the image's own. Encoded into `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
    entrypoint?: GetTemplateResponseEntrypointList;
    /** Container disk in GB (ephemeral, wiped on restart) */
    disk: number;
    /** Environment variables as key-value pairs */
    env: GetTemplateResponseEnvMap;
    /** Docker image reference */
    image: string;
    /** Exposed ports, formatted as port/protocol */
    ports: GetTemplateResponsePortsList;
    /** Container registry credential ID (for private images) */
    registry: string | null;
    id: string;
    name: string;
    mounts: TemplateMounts;
    /** Whether this template is for serverless workers (true) or pods (false) */
    serverless: boolean;
    /** Whether this template is visible to other Runpod users */
    public: boolean;
    category: TemplateCategory;
    /** Whether containers created from this template get SSH access provisioned at startup (`PUBLIC_KEY` env injection). */
    startSsh: boolean;
    /** Whether containers created from this template start JupyterLab at startup (`JUPYTER_PASSWORD` env injection). */
    startJupyter: boolean;
    /** Acceptable CUDA versions for containers created from this template, as `major.minor`. Empty means any version. Expanded into GPU pod and serverless endpoint creates; CPU pods ignore it. */
    allowedCudaVersions: GetTemplateResponseAllowedCudaVersionsList;
}
export declare const GetTemplateResponse: S.Codec<GetTemplateResponse>;
/** Length of each billing time bucket. */
export type BillingBucketSize = "hour" | "day" | "week" | "month" | "year";
export declare const BillingBucketSize: any;
export interface ListBillingRequest {
    /** Start of the billing period (RFC 3339). Defaults to 30 days ago. Snapped down to the start of its bucketSize bucket so the window aligns with the returned records; provide a boundary-aligned value (e.g. midnight for bucketSize=day) to avoid widening. */
    startTime?: string;
    /** End of the billing period (RFC 3339), exclusive. Defaults to now. Snapped up to the end of the bucketSize bucket it lands in (unless already on a boundary) so the window aligns with the returned records. */
    endTime?: string;
    /** Length of each billing time bucket. Defaults to day. */
    bucketSize?: BillingBucketSize | (string & {});
    /** Return the last N buckets of bucketSize, ending with the current (in-progress) bucket — e.g. lastN=100 with bucketSize=day is "last 100 days". The resolved window is aligned to bucket boundaries: startTime is the start of the earliest bucket (e.g. midnight of the earliest day) and endTime is the end of the current bucket. Mutually exclusive with startTime/endTime; provide one or the other, not both. */
    lastN?: number;
}
export declare const ListBillingRequest: S.Codec<ListBillingRequest>;
/** A single time-bucketed record of total spend across all billable Runpod resources, with each cost component broken out. Returned by GET /v2/billing. */
export interface BillingRecord {
    /** Start of the range, inclusive (RFC 3339). */
    startTime: string;
    /** End of the range, exclusive (RFC 3339). */
    endTime: string;
    /** Total cost in USD for the bucket across all resources. */
    totalAmount: number;
    /** GPU pod compute cost in USD for the bucket. */
    podGpuAmount: number;
    /** CPU pod compute cost in USD for the bucket. */
    podCpuAmount: number;
    /** Pod disk cost in USD for the bucket. */
    podDiskAmount: number;
    /** Serverless GPU compute cost in USD for the bucket. */
    serverlessGpuAmount: number;
    /** Serverless CPU compute cost in USD for the bucket. */
    serverlessCpuAmount: number;
    /** Serverless disk cost in USD for the bucket. */
    serverlessDiskAmount: number;
    /** Unused and always 0. Platform charges are included in the serverless compute amounts. */
    serverlessFeeAmount: number;
    /** Standard network volume storage cost in USD for the bucket. */
    storageStandardAmount: number;
    /** High-performance network volume storage cost in USD for the bucket. */
    storageHighPerformanceAmount: number;
    /** Runpod public endpoint cost in USD for the bucket. */
    endpointAmount: number;
    /** Cluster GPU compute cost in USD for the bucket. */
    clusterGpuAmount: number;
    /** Cluster disk cost in USD for the bucket. */
    clusterDiskAmount: number;
    /** Cluster inter-node networking cost in USD for the bucket. */
    clusterNetworkingAmount: number;
}
export declare const BillingRecord: S.Codec<BillingRecord>;
export type ListBillingResponseRecordsList = Array<BillingRecord>;
export declare const ListBillingResponseRecordsList: S.Codec<ListBillingResponseRecordsList>;
/** Resolved query window and granularity (routes without a filter). */
export interface BillingQuery {
    /** Start of the range, inclusive (RFC 3339). */
    startTime: string;
    /** End of the range, exclusive (RFC 3339). */
    endTime: string;
    bucketSize: BillingBucketSize;
}
export declare const BillingQuery: S.Codec<BillingQuery>;
/** Total spend across all billable Runpod resources with each cost component broken out, fully prefixed by resource. Backs the aggregate record's amounts and the metadata totals. Serverless amounts are inclusive of platform charges. */
export interface BillingAmounts {
    /** Total cost in USD for the bucket across all resources. */
    totalAmount: number;
    /** GPU pod compute cost in USD for the bucket. */
    podGpuAmount: number;
    /** CPU pod compute cost in USD for the bucket. */
    podCpuAmount: number;
    /** Pod disk cost in USD for the bucket. */
    podDiskAmount: number;
    /** Serverless GPU compute cost in USD for the bucket. */
    serverlessGpuAmount: number;
    /** Serverless CPU compute cost in USD for the bucket. */
    serverlessCpuAmount: number;
    /** Serverless disk cost in USD for the bucket. */
    serverlessDiskAmount: number;
    /** Unused and always 0. Platform charges are included in the serverless compute amounts. */
    serverlessFeeAmount: number;
    /** Standard network volume storage cost in USD for the bucket. */
    storageStandardAmount: number;
    /** High-performance network volume storage cost in USD for the bucket. */
    storageHighPerformanceAmount: number;
    /** Runpod public endpoint cost in USD for the bucket. */
    endpointAmount: number;
    /** Cluster GPU compute cost in USD for the bucket. */
    clusterGpuAmount: number;
    /** Cluster disk cost in USD for the bucket. */
    clusterDiskAmount: number;
    /** Cluster inter-node networking cost in USD for the bucket. */
    clusterNetworkingAmount: number;
}
export declare const BillingAmounts: S.Codec<BillingAmounts>;
export interface BillingMetadata {
    query: BillingQuery;
    /** Number of records returned. */
    recordCount: number;
    totals: BillingAmounts;
}
export declare const BillingMetadata: S.Codec<BillingMetadata>;
/** Aggregated billing records across all Runpod resources. */
export interface ListBillingResponse {
    records: ListBillingResponseRecordsList;
    metadata: BillingMetadata;
}
export declare const ListBillingResponse: S.Codec<ListBillingResponse>;
export interface ListClusterBillingRequest {
    /** Start of the billing period (RFC 3339). Defaults to 30 days ago. Snapped down to the start of its bucketSize bucket so the window aligns with the returned records; provide a boundary-aligned value (e.g. midnight for bucketSize=day) to avoid widening. */
    startTime?: string;
    /** End of the billing period (RFC 3339), exclusive. Defaults to now. Snapped up to the end of the bucketSize bucket it lands in (unless already on a boundary) so the window aligns with the returned records. */
    endTime?: string;
    /** Length of each billing time bucket. Defaults to day. */
    bucketSize?: BillingBucketSize | (string & {});
    /** Return the last N buckets of bucketSize, ending with the current (in-progress) bucket — e.g. lastN=100 with bucketSize=day is "last 100 days". The resolved window is aligned to bucket boundaries: startTime is the start of the earliest bucket (e.g. midnight of the earliest day) and endTime is the end of the current bucket. Mutually exclusive with startTime/endTime; provide one or the other, not both. */
    lastN?: number;
    /** Filter to a specific cluster. */
    clusterId?: string;
}
export declare const ListClusterBillingRequest: S.Codec<ListClusterBillingRequest>;
/** A single time-bucketed cluster billing record; clusters are GPU-only (no CPU component). Returned by GET /v2/billing/clusters. */
export interface ClusterBillingRecord {
    /** Start of the range, inclusive (RFC 3339). */
    startTime: string;
    /** End of the range, exclusive (RFC 3339). */
    endTime: string;
    /** Total Instant Cluster cost in USD for the bucket. */
    totalAmount: number;
    /** Cluster GPU compute cost in USD for the bucket. */
    gpuAmount: number;
    /** Cluster disk cost in USD for the bucket. */
    diskAmount: number;
    /** Cluster inter-node networking cost in USD for the bucket. */
    networkingAmount: number;
    /** The cluster this record bills. When the clusterId filter is set every record carries that id; otherwise one record is emitted per cluster per bucket. */
    clusterId: string;
}
export declare const ClusterBillingRecord: S.Codec<ClusterBillingRecord>;
export type ListClusterBillingResponseRecordsList = Array<ClusterBillingRecord>;
export declare const ListClusterBillingResponseRecordsList: S.Codec<ListClusterBillingResponseRecordsList>;
export interface ClusterBillingQuery {
    /** Start of the range, inclusive (RFC 3339). */
    startTime: string;
    /** End of the range, exclusive (RFC 3339). */
    endTime: string;
    bucketSize: BillingBucketSize;
    /** The clusterId filter applied, if any. */
    clusterId?: string | null;
}
export declare const ClusterBillingQuery: S.Codec<ClusterBillingQuery>;
/** Cluster cost components (GPU-only, no CPU). Backs a record's amounts and the metadata totals. */
export interface ClusterBillingAmounts {
    /** Total Instant Cluster cost in USD for the bucket. */
    totalAmount: number;
    /** Cluster GPU compute cost in USD for the bucket. */
    gpuAmount: number;
    /** Cluster disk cost in USD for the bucket. */
    diskAmount: number;
    /** Cluster inter-node networking cost in USD for the bucket. */
    networkingAmount: number;
}
export declare const ClusterBillingAmounts: S.Codec<ClusterBillingAmounts>;
export interface ClusterBillingMetadata {
    query: ClusterBillingQuery;
    /** Number of records returned (buckets times distinct clusters). */
    recordCount: number;
    /** Number of distinct clusters the records span. */
    uniqueClusterCount: number;
    totals: ClusterBillingAmounts;
}
export declare const ClusterBillingMetadata: S.Codec<ClusterBillingMetadata>;
/** Time-bucketed Cluster billing records plus metadata for the resolved query, record count, distinct cluster count, and compute totals. */
export interface ListClusterBillingResponse {
    records: ListClusterBillingResponseRecordsList;
    metadata: ClusterBillingMetadata;
}
export declare const ListClusterBillingResponse: S.Codec<ListClusterBillingResponse>;
export interface ListClusterPodsRequest {
    /** Cluster identifier */
    id: string;
}
export declare const ListClusterPodsRequest: S.Codec<ListClusterPodsRequest>;
/** Container CMD in exec form. When the image defines an ENTRYPOINT, this is the argument list passed to it. Encoded into the `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
export type PodCmdList = Array<string>;
export declare const PodCmdList: S.Codec<PodCmdList>;
/** Container ENTRYPOINT in exec form, overriding the image's own. Encoded into `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
export type PodEntrypointList = Array<string>;
export declare const PodEntrypointList: S.Codec<PodEntrypointList>;
/** Environment variables as key-value pairs */
export type PodEnvMap = {
    [key: string]: string | undefined;
};
export declare const PodEnvMap: S.Codec<PodEnvMap>;
/** Exposed ports, formatted as port/protocol */
export type PodPortsList = Array<string>;
export declare const PodPortsList: S.Codec<PodPortsList>;
/** Valid state transitions for the current status. */
export type PodActionsList = Array<PodAction>;
export declare const PodActionsList: S.Codec<PodActionsList>;
export interface Pod {
    /** The container's command, as a single raw string. This is the field `entrypoint` and `cmd` encode into, exposed in its stored form. Two shapes are accepted. A bare shell string is treated as CMD and split into arguments, which is what the console's "Container start command" field writes. A JSON object of the form `{"entrypoint":[...],"cmd":[...]}` sets either or both explicitly. Responses always return both representations: `args` exactly as stored, plus the deconstructed `entrypoint` and `cmd`. Supplying `args` together with `entrypoint` or `cmd` is allowed only when they describe the same command, so a read-modify-write client can send back everything it received. Send `""` to clear, omit to leave unchanged. */
    args: string;
    /** Container CMD in exec form. When the image defines an ENTRYPOINT, this is the argument list passed to it. Encoded into the `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
    cmd?: PodCmdList;
    /** Container ENTRYPOINT in exec form, overriding the image's own. Encoded into `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
    entrypoint?: PodEntrypointList;
    /** Container disk in GB (ephemeral, wiped on restart) */
    disk: number;
    /** Environment variables as key-value pairs */
    env: PodEnvMap;
    /** Docker image reference */
    image: string;
    /** Exposed ports, formatted as port/protocol */
    ports: PodPortsList;
    /** Container registry credential ID (for private images) */
    registry: string | null;
    id: string;
    name: string;
    status: PodStatus;
    /** Valid state transitions for the current status. */
    actions: PodActionsList;
    mounts: Mounts;
    /** Present for GPU pods; omitted from CPU pods. */
    gpu?: GpuConfig;
    /** Present for CPU pods; omitted from GPU pods. */
    cpu?: CpuConfig;
    cloud: Cloud;
    /** Data center where the pod is running (assigned by scheduler) */
    dataCenterId: string | null;
    /** CUDA version reported by the host machine. Retained while the pod is stopped — a stopped pod keeps its machine assignment and resumes onto the same host. Null means unknown or not applicable (CPU pods, or a host that has not reported one), not that CUDA is absent. */
    cudaVersion: string | null;
    /** SSH connection details, via the Runpod proxy or directly to the pod's published `22/tcp` port. */
    ssh: PodSsh;
    /** Cluster membership; omitted from a standalone pod. Member pods are managed through `/v2/clusters/{id}` — they are excluded from `GET /v2/pods` by default (pass `includeClusterPods=true` to include them) and cannot be modified or deleted via the pod endpoints. */
    cluster?: PodCluster;
    /** ID of the template this pod was created from */
    template: string | null;
    /** Current cost in USD per hour (0.0 when EXITED or TERMINATED) */
    cost: number;
    /** Whether the pod is locked (prevents stopping or resetting) */
    locked: boolean;
    globalNetworking: PodGlobalNetworking;
    /** Live utilization metrics. Null when the pod is not RUNNING. */
    runtime: PodRuntime | null;
    createdAt: string;
    startedAt: string | null;
}
export declare const Pod: S.Codec<Pod>;
export type PodListPodsList = Array<Pod>;
export declare const PodListPodsList: S.Codec<PodListPodsList>;
/** A bare list of pods. `GET /v2/clusters/{id}/pods` returns it as-is (a cluster's members are a small, complete set); `GET /v2/pods` composes it with the pagination block via ListPodsResponse. */
export interface PodList {
    pods: PodListPodsList;
}
export declare const PodList: S.Codec<PodList>;
export interface ListClustersRequest {
}
export declare const ListClustersRequest: S.Codec<ListClustersRequest>;
export type ListClustersResponseClustersList = Array<Cluster>;
export declare const ListClustersResponseClustersList: S.Codec<ListClustersResponseClustersList>;
export interface ListClustersResponse {
    clusters: ListClustersResponseClustersList;
}
export declare const ListClustersResponse: S.Codec<ListClustersResponse>;
export type ListCpuTypesRequestIncludeList = Array<CatalogInclude | (string & {})>;
export declare const ListCpuTypesRequestIncludeList: S.Codec<ListCpuTypesRequestIncludeList>;
export type ListCpuTypesRequestProductList = Array<CpuProduct | (string & {})>;
export declare const ListCpuTypesRequestProductList: S.Codec<ListCpuTypesRequestProductList>;
export interface ListCpuTypesRequest {
    /** Comma-separated optional expansions. Supported value today: AVAILABILITY. This may expand with more include values in the future. */
    include?: ListCpuTypesRequestIncludeList;
    /** Comma-separated availability product contexts. Supported values for CPUs: POD, SERVERLESS. Required with include=AVAILABILITY, and valid only with it (400 either way). There is no default: availability differs by product. */
    product?: ListCpuTypesRequestProductList;
    /** Availability vCPU count. Valid only with include=AVAILABILITY. Must be a power of two. */
    vcpuCount?: number;
}
export declare const ListCpuTypesRequest: S.Codec<ListCpuTypesRequest>;
export type ListCpuTypesResponseCpusList = Array<CpuType>;
export declare const ListCpuTypesResponseCpusList: S.Codec<ListCpuTypesResponseCpusList>;
export interface ListCpuTypesResponse {
    cpus: ListCpuTypesResponseCpusList;
}
export declare const ListCpuTypesResponse: S.Codec<ListCpuTypesResponse>;
export type ListDataCentersRequestIncludeList = Array<DataCenterInclude | (string & {})>;
export declare const ListDataCentersRequestIncludeList: S.Codec<ListDataCentersRequestIncludeList>;
export type ListDataCentersRequestRegionsList = Array<DataCenterRegion | (string & {})>;
export declare const ListDataCentersRequestRegionsList: S.Codec<ListDataCentersRequestRegionsList>;
export type ListDataCentersRequestNetworkVolumeTypesList = Array<VolumeType | (string & {})>;
export declare const ListDataCentersRequestNetworkVolumeTypesList: S.Codec<ListDataCentersRequestNetworkVolumeTypesList>;
export type ListDataCentersRequestComplianceList = Array<Compliance | (string & {})>;
export declare const ListDataCentersRequestComplianceList: S.Codec<ListDataCentersRequestComplianceList>;
export interface ListDataCentersRequest {
    /** Comma-separated optional expansions. Supported value: GPU_AVAILABILITY, CPU_AVAILABILITY. */
    include?: ListDataCentersRequestIncludeList;
    /** Comma-separated DataCenterRegion enum values. Values within this filter use OR semantics. Different filter families combine with AND. */
    regions?: ListDataCentersRequestRegionsList;
    /** Comma-separated volume types. Supported values: STANDARD, HIGH_PERFORMANCE. Values within this filter use AND semantics; volumes=STANDARD,HIGH_PERFORMANCE requires both storage types. Different filter families combine with AND. */
    networkVolumeTypes?: ListDataCentersRequestNetworkVolumeTypesList;
    /** Comma-separated Compliance enum values. Values within this filter use AND semantics; compliance=GDPR,SOC_2_TYPE_2 requires both certifications. Different filter families combine with AND. */
    compliance?: ListDataCentersRequestComplianceList;
    /** Filter by global networking support. true returns only data centers that support global networking; false only those that do not. Different filter families combine with AND. */
    globalNetwork?: boolean;
}
export declare const ListDataCentersRequest: S.Codec<ListDataCentersRequest>;
export type ListDataCentersResponseDataCentersList = Array<DataCenter>;
export declare const ListDataCentersResponseDataCentersList: S.Codec<ListDataCentersResponseDataCentersList>;
export interface ListDataCentersResponse {
    dataCenters: ListDataCentersResponseDataCentersList;
}
export declare const ListDataCentersResponse: S.Codec<ListDataCentersResponse>;
export interface ListDelegationsRequest {
}
export declare const ListDelegationsRequest: S.Codec<ListDelegationsRequest>;
export type ListDelegationsResponseDelegationsList = Array<EcrDelegation>;
export declare const ListDelegationsResponseDelegationsList: S.Codec<ListDelegationsResponseDelegationsList>;
export interface ListDelegationsResponse {
    delegations: ListDelegationsResponseDelegationsList;
}
export declare const ListDelegationsResponse: S.Codec<ListDelegationsResponse>;
export interface ListEndpointBillingRequest {
    /** Start of the billing period (RFC 3339). Defaults to 30 days ago. Snapped down to the start of its bucketSize bucket so the window aligns with the returned records; provide a boundary-aligned value (e.g. midnight for bucketSize=day) to avoid widening. */
    startTime?: string;
    /** End of the billing period (RFC 3339), exclusive. Defaults to now. Snapped up to the end of the bucketSize bucket it lands in (unless already on a boundary) so the window aligns with the returned records. */
    endTime?: string;
    /** Length of each billing time bucket. Defaults to day. */
    bucketSize?: BillingBucketSize | (string & {});
    /** Return the last N buckets of bucketSize, ending with the current (in-progress) bucket — e.g. lastN=100 with bucketSize=day is "last 100 days". The resolved window is aligned to bucket boundaries: startTime is the start of the earliest bucket (e.g. midnight of the earliest day) and endTime is the end of the current bucket. Mutually exclusive with startTime/endTime; provide one or the other, not both. */
    lastN?: number;
}
export declare const ListEndpointBillingRequest: S.Codec<ListEndpointBillingRequest>;
/** A single time-bucketed Runpod public endpoint billing record. Returned by GET /v2/billing/endpoints. */
export interface EndpointBillingRecord {
    /** Start of the range, inclusive (RFC 3339). */
    startTime: string;
    /** End of the range, exclusive (RFC 3339). */
    endTime: string;
    /** Total public endpoint cost in USD for the bucket. */
    totalAmount: number;
}
export declare const EndpointBillingRecord: S.Codec<EndpointBillingRecord>;
export type ListEndpointBillingResponseRecordsList = Array<EndpointBillingRecord>;
export declare const ListEndpointBillingResponseRecordsList: S.Codec<ListEndpointBillingResponseRecordsList>;
/** Runpod public endpoint cost. Backs a record's amounts and the metadata totals. */
export interface EndpointBillingAmounts {
    /** Total public endpoint cost in USD for the bucket. */
    totalAmount: number;
}
export declare const EndpointBillingAmounts: S.Codec<EndpointBillingAmounts>;
export interface EndpointBillingMetadata {
    query: BillingQuery;
    recordCount: number;
    totals: EndpointBillingAmounts;
}
export declare const EndpointBillingMetadata: S.Codec<EndpointBillingMetadata>;
/** Time-bucketed Runpod public endpoint billing records plus metadata for the resolved query, record count, and total endpoint amount. */
export interface ListEndpointBillingResponse {
    records: ListEndpointBillingResponseRecordsList;
    metadata: EndpointBillingMetadata;
}
export declare const ListEndpointBillingResponse: S.Codec<ListEndpointBillingResponse>;
export interface ListEndpointBuildsRequest {
    /** Serverless endpoint identifier */
    id: string;
    /** Opaque resume cursor — pass the previous response's `pagination.nextCursor` through verbatim; omit for the first page. A cursor is only valid for the operation and parameters that issued it; a malformed or foreign cursor is rejected with 422. */
    cursor?: string;
    /** Page size, 1–100. Defaults to 100 when omitted. */
    limit?: number;
}
export declare const ListEndpointBuildsRequest: S.Codec<ListEndpointBuildsRequest>;
/** Build history, newest first, cursor-paginated (an omitted `limit` defaults to 100). Page with `cursor`/`limit` to walk the full history, or fetch any build by id via `GET /v2/serverless/{id}/builds/{buildId}`. */
export type ListEndpointBuildsResponseBuildsList = Array<Build>;
export declare const ListEndpointBuildsResponseBuildsList: S.Codec<ListEndpointBuildsResponseBuildsList>;
/** Cursor-pagination metadata, uniform across list endpoints. Every response carries it: follow `nextCursor` while `hasNextPage` is true to walk the full result set. */
export interface Pagination {
    /** Pass as the `cursor` query parameter to fetch the next page. Null on the last page. */
    nextCursor: string | null;
    /** Whether more items exist after this page. */
    hasNextPage: boolean;
}
export declare const Pagination: S.Codec<Pagination>;
export interface ListEndpointBuildsResponse {
    /** Build history, newest first, cursor-paginated (an omitted `limit` defaults to 100). Page with `cursor`/`limit` to walk the full history, or fetch any build by id via `GET /v2/serverless/{id}/builds/{buildId}`. */
    builds: ListEndpointBuildsResponseBuildsList;
    pagination: Pagination;
}
export declare const ListEndpointBuildsResponse: S.Codec<ListEndpointBuildsResponse>;
export interface ListEndpointReleasesRequest {
    /** Serverless endpoint identifier */
    id: string;
    /** Opaque resume cursor — pass the previous response's `pagination.nextCursor` through verbatim; omit for the first page. A cursor is only valid for the operation and parameters that issued it; a malformed or foreign cursor is rejected with 422. */
    cursor?: string;
    /** Page size, 1–1000. Defaults to 1000 when omitted. */
    limit?: number;
}
export declare const ListEndpointReleasesRequest: S.Codec<ListEndpointReleasesRequest>;
export interface RolloutSummary {
    /** True while any worker is still running an older version. */
    inProgress: boolean;
    /** Workers running the endpoint's current version. */
    workersOnLatest: number;
    /** All workers currently allocated to the endpoint. */
    workersTotal: number;
    /** Percentage of workers on the current version (0 when there are no workers). */
    percentOnLatest: number;
}
export declare const RolloutSummary: S.Codec<RolloutSummary>;
/** What produced the release. - `GIT_BUILD` — a completed GitHub build (see `buildId`) - `MANUAL` — a manual configuration change */
export type ReleaseSource = "GIT_BUILD" | "MANUAL";
export declare const ReleaseSource: any;
export interface ReleaseDiffEntry {
    /** The changed configuration field. Top-level (e.g. `gpuCount`, `locations`) or template-scoped (e.g. `template.imageName`, `template.env`). */
    field: string;
    /** Previous value, as raw JSON. Null when the field was added. */
    old: unknown;
    /** New value, as raw JSON. Null when the field was removed. */
    new: unknown;
}
export declare const ReleaseDiffEntry: S.Codec<ReleaseDiffEntry>;
/** Configuration fields that changed in this release. */
export type ReleaseDiffList = Array<ReleaseDiffEntry>;
export declare const ReleaseDiffList: S.Codec<ReleaseDiffList>;
export interface Release {
    id: string;
    /** The endpoint configuration version this release produced. */
    version?: number | null;
    source: ReleaseSource;
    /** The GitHub build that produced this release. Set when `source` is `GIT_BUILD`; null for `MANUAL` releases. Fetch build detail/logs via `/v2/serverless/{id}/builds/{buildId}`. */
    buildId?: string | null;
    /** ID of the user who created the release. */
    createdByUserId?: string | null;
    /** Workers currently running this release's version. */
    workerCount: number;
    createdAt: string;
    /** Configuration fields that changed in this release. */
    diff: ReleaseDiffList;
}
export declare const Release: S.Codec<Release>;
/** Release history, newest first. */
export type ListEndpointReleasesResponseReleasesList = Array<Release>;
export declare const ListEndpointReleasesResponseReleasesList: S.Codec<ListEndpointReleasesResponseReleasesList>;
export interface ListEndpointReleasesResponse {
    /** The endpoint's current configuration version. Null if unknown. */
    endpointVersion?: number | null;
    rollout: RolloutSummary;
    /** Release history, newest first. */
    releases: ListEndpointReleasesResponseReleasesList;
    pagination: Pagination;
}
export declare const ListEndpointReleasesResponse: S.Codec<ListEndpointReleasesResponse>;
export interface ListEndpointsRequest {
    /** Opaque resume cursor — pass the previous response's `pagination.nextCursor` through verbatim; omit for the first page. A cursor is only valid for the operation and parameters that issued it; a malformed or foreign cursor is rejected with 422. */
    cursor?: string;
    /** Page size, 1–1000. Defaults to 1000 when omitted. */
    limit?: number;
}
export declare const ListEndpointsRequest: S.Codec<ListEndpointsRequest>;
/** Container CMD in exec form. When the image defines an ENTRYPOINT, this is the argument list passed to it. Encoded into the `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
export type EndpointCmdList = Array<string>;
export declare const EndpointCmdList: S.Codec<EndpointCmdList>;
/** Container ENTRYPOINT in exec form, overriding the image's own. Encoded into `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
export type EndpointEntrypointList = Array<string>;
export declare const EndpointEntrypointList: S.Codec<EndpointEntrypointList>;
/** Environment variables as key-value pairs */
export type EndpointEnvMap = {
    [key: string]: string | undefined;
};
export declare const EndpointEnvMap: S.Codec<EndpointEnvMap>;
/** Exposed ports, formatted as port/protocol */
export type EndpointPortsList = Array<string>;
export declare const EndpointPortsList: S.Codec<EndpointPortsList>;
/** Eligible CPU configurations for each worker, in the order they were submitted. Present for CPU endpoints and omitted for GPU endpoints. Memory is derived from the selected flavor's catalog RAM multiplier. */
export type EndpointCpuList = Array<CpuConfig>;
export declare const EndpointCpuList: S.Codec<EndpointCpuList>;
export type EndpointDataCenterIdsList = Array<string>;
export declare const EndpointDataCenterIdsList: S.Codec<EndpointDataCenterIdsList>;
export type EndpointNetworkVolumesList = Array<string>;
export declare const EndpointNetworkVolumesList: S.Codec<EndpointNetworkVolumesList>;
export interface Endpoint {
    /** The container's command, as a single raw string. This is the field `entrypoint` and `cmd` encode into, exposed in its stored form. Two shapes are accepted. A bare shell string is treated as CMD and split into arguments, which is what the console's "Container start command" field writes. A JSON object of the form `{"entrypoint":[...],"cmd":[...]}` sets either or both explicitly. Responses always return both representations: `args` exactly as stored, plus the deconstructed `entrypoint` and `cmd`. Supplying `args` together with `entrypoint` or `cmd` is allowed only when they describe the same command, so a read-modify-write client can send back everything it received. Send `""` to clear, omit to leave unchanged. */
    args?: string;
    /** Container CMD in exec form. When the image defines an ENTRYPOINT, this is the argument list passed to it. Encoded into the `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
    cmd?: EndpointCmdList;
    /** Container ENTRYPOINT in exec form, overriding the image's own. Encoded into `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
    entrypoint?: EndpointEntrypointList;
    /** Container disk in GB (ephemeral, wiped on restart) */
    disk?: number;
    /** Environment variables as key-value pairs */
    env?: EndpointEnvMap;
    /** Docker image reference */
    image?: string;
    /** Exposed ports, formatted as port/protocol */
    ports?: EndpointPortsList;
    /** Container registry credential ID (for private images) */
    registry?: string | null;
    id: string;
    name: string;
    type?: EndpointType;
    requestUrls?: EndpointRequestUrls;
    gpu?: EndpointGpuConfig | null;
    /** Eligible CPU configurations for each worker, in the order they were submitted. Present for CPU endpoints and omitted for GPU endpoints. Memory is derived from the selected flavor's catalog RAM multiplier. */
    cpu?: EndpointCpuList;
    workers: CreateEndpointRequestWorkers;
    scaling: EndpointScaling;
    dataCenterIds: EndpointDataCenterIdsList;
    networkVolumes: EndpointNetworkVolumesList;
    /** Per-request execution timeout in milliseconds */
    timeout: number;
    flashboot: FlashBoot;
    createdAt: string;
}
export declare const Endpoint: S.Codec<Endpoint>;
export type ListEndpointsResponseEndpointsList = Array<Endpoint>;
export declare const ListEndpointsResponseEndpointsList: S.Codec<ListEndpointsResponseEndpointsList>;
export interface ListEndpointsResponse {
    endpoints: ListEndpointsResponseEndpointsList;
    pagination: Pagination;
}
export declare const ListEndpointsResponse: S.Codec<ListEndpointsResponse>;
export interface ListEndpointWorkersRequest {
    /** Serverless endpoint identifier */
    id: string;
}
export declare const ListEndpointWorkersRequest: S.Codec<ListEndpointWorkersRequest>;
/** Derived worker state, reconciled from the worker pod's lifecycle status and the live job-queue view. - `RUNNING` — actively processing a job - `IDLE` — ready and polling for jobs - `INITIALIZING` — starting up, not yet ready - `THROTTLED` — waiting on compute capacity - `UNHEALTHY` — failing health checks */
export type WorkerStatus = "RUNNING" | "IDLE" | "INITIALIZING" | "THROTTLED" | "UNHEALTHY";
export declare const WorkerStatus: any;
export interface Worker {
    id: string;
    status: WorkerStatus;
    /** True when the worker is running an older endpoint configuration than the current one (e.g. mid rolling-update). This is the authoritative flag: it is derived from `version` vs the response's `endpointVersion`, except on legacy endpoints (`endpointVersion` 1) where it falls back to a container-image comparison. */
    isStale: boolean;
    /** Endpoint configuration version this worker is running. Compare with the response's `endpointVersion`. Null if unknown. */
    version?: number | null;
    /** GPUs allocated to the worker. */
    gpuCount: number;
    /** Container image the worker is running. */
    image?: string | null;
    /** Seconds the worker has been running. Null until the worker is placed and running. */
    uptimeSeconds?: number | null;
    /** GPU type the worker is placed on. Null until the worker is placed. */
    gpuTypeId?: string | null;
    /** Data center the worker is placed in. Null until the worker is placed. */
    dataCenterId?: string | null;
    /** When the worker last started. Null if it has not started. */
    startedAt?: string | null;
}
export declare const Worker: S.Codec<Worker>;
export type ListEndpointWorkersResponseWorkersList = Array<Worker>;
export declare const ListEndpointWorkersResponseWorkersList: S.Codec<ListEndpointWorkersResponseWorkersList>;
/** Histogram of the returned workers by status. The per-status counts are a roll-up of the `workers` array, so `running + idle + initializing + throttled + unhealthy == total == len(workers)`. */
export interface WorkerSummary {
    /** Workers actively processing a job. */
    running: number;
    /** Ready workers polling for jobs. */
    idle: number;
    /** Workers starting up, not yet ready. */
    initializing: number;
    /** Workers waiting on compute capacity. */
    throttled: number;
    /** Workers failing health checks. */
    unhealthy: number;
    /** All workers currently allocated to the endpoint. */
    total: number;
}
export declare const WorkerSummary: S.Codec<WorkerSummary>;
export interface ListEndpointWorkersResponse {
    workers: ListEndpointWorkersResponseWorkersList;
    summary: WorkerSummary;
    /** The endpoint's current configuration version. A worker whose `version` differs is running stale config (see `worker.isStale`). Null if unknown. */
    endpointVersion?: number | null;
}
export declare const ListEndpointWorkersResponse: S.Codec<ListEndpointWorkersResponse>;
export type ListGpuTypesRequestIncludeList = Array<CatalogInclude | (string & {})>;
export declare const ListGpuTypesRequestIncludeList: S.Codec<ListGpuTypesRequestIncludeList>;
export type ListGpuTypesRequestProductList = Array<Product | (string & {})>;
export declare const ListGpuTypesRequestProductList: S.Codec<ListGpuTypesRequestProductList>;
export type ListGpuTypesRequestCountryCodesList = Array<string>;
export declare const ListGpuTypesRequestCountryCodesList: S.Codec<ListGpuTypesRequestCountryCodesList>;
export type ListGpuTypesRequestCudaVersionsList = Array<string>;
export declare const ListGpuTypesRequestCudaVersionsList: S.Codec<ListGpuTypesRequestCudaVersionsList>;
export interface ListGpuTypesRequest {
    /** Comma-separated optional expansions. Supported value today: AVAILABILITY. This may expand with more include values in the future. */
    include?: ListGpuTypesRequestIncludeList;
    /** Comma-separated availability product contexts. Supported values: POD, CLUSTER, SERVERLESS. Required with include=AVAILABILITY, and valid only with it (400 either way). There is no default: the same GPU type can be scarce for pods and plentiful for serverless, so the context has to be stated rather than assumed. */
    product?: ListGpuTypesRequestProductList;
    /** GPU count for availability and lowest-price calculations. Valid only with include=AVAILABILITY. Defaults to 1. */
    count?: number;
    /** Cloud type for availability and lowest-price calculations. Valid only with include=AVAILABILITY. Supported values: SECURE, COMMUNITY. Upstream default when omitted: SECURE. */
    cloud?: GpuCloudFilter | (string & {});
    /** Comma-separated ISO 3166-1 alpha-2 country codes, uppercase, to constrain availability to — e.g. FR or FR,DE. Values within this filter use OR semantics. Valid only with include=AVAILABILITY (400 otherwise); a malformed entry is a 422. Scopes availability, lowest-price calculations and the dataCenters array to those countries, so a listed data center outside them is omitted rather than returned with availability NONE. On the list endpoint a GPU type with no data center in those countries drops out entirely; the single-GPU endpoint still returns the requested type, with availability NONE and dataCenters omitted, so a 404 keeps meaning the GPU type does not exist. Read the NONE on availability rather than the absence of dataCenters, which is also absent when availability was not requested. */
    countryCodes?: ListGpuTypesRequestCountryCodesList;
    /** Comma-separated CUDA versions to scope availability and lowest-price calculations to, matched exactly. Format: major.minor, e.g. 12.8 — a bare major is rejected here because it identifies no version. Valid only with include=AVAILABILITY (400 otherwise) and mutually exclusive with minCudaVersion (400 if both are sent); a malformed entry is a 422. Also narrows the returned cudaVersions array; omit it to enumerate every version offered. */
    cudaVersions?: ListGpuTypesRequestCudaVersionsList;
    /** Lowest acceptable CUDA version to scope availability and lowest-price calculations to, compared numerically. Format: integer major or major.minor, e.g. 12 or 12.1 — unlike the `gpu.minCudaVersion` body field on pod and endpoint create, a bare major is accepted here and means any release of that major, because this filter only widens a read. Valid only with include=AVAILABILITY (400 otherwise) and mutually exclusive with cudaVersions (400 if both are sent); a malformed value is a 422. Use this for an open-ended floor and cudaVersions for an exact set. */
    minCudaVersion?: string;
}
export declare const ListGpuTypesRequest: S.Codec<ListGpuTypesRequest>;
export type ListGpuTypesResponseGpusList = Array<GpuType>;
export declare const ListGpuTypesResponseGpusList: S.Codec<ListGpuTypesResponseGpusList>;
export interface ListGpuTypesResponse {
    gpus: ListGpuTypesResponseGpusList;
}
export declare const ListGpuTypesResponse: S.Codec<ListGpuTypesResponse>;
export interface ListNetworkVolumeBillingRequest {
    /** Start of the billing period (RFC 3339). Defaults to 30 days ago. Snapped down to the start of its bucketSize bucket so the window aligns with the returned records; provide a boundary-aligned value (e.g. midnight for bucketSize=day) to avoid widening. */
    startTime?: string;
    /** End of the billing period (RFC 3339), exclusive. Defaults to now. Snapped up to the end of the bucketSize bucket it lands in (unless already on a boundary) so the window aligns with the returned records. */
    endTime?: string;
    /** Length of each billing time bucket. Defaults to day. */
    bucketSize?: BillingBucketSize | (string & {});
    /** Return the last N buckets of bucketSize, ending with the current (in-progress) bucket — e.g. lastN=100 with bucketSize=day is "last 100 days". The resolved window is aligned to bucket boundaries: startTime is the start of the earliest bucket (e.g. midnight of the earliest day) and endTime is the end of the current bucket. Mutually exclusive with startTime/endTime; provide one or the other, not both. */
    lastN?: number;
    /** Filter to a specific network volume. */
    networkVolumeId?: string;
}
export declare const ListNetworkVolumeBillingRequest: S.Codec<ListNetworkVolumeBillingRequest>;
/** A single time-bucketed network volume billing record, split into standard and high-performance storage. Returned by GET /v2/billing/network-volumes. */
export interface NetworkVolumeBillingRecord {
    /** Start of the range, inclusive (RFC 3339). */
    startTime: string;
    /** End of the range, exclusive (RFC 3339). */
    endTime: string;
    /** Total network volume cost in USD for the bucket, across standard and high-performance storage. */
    totalAmount: number;
    /** Standard storage cost in USD for the bucket. */
    standardAmount: number;
    /** High-performance storage cost in USD for the bucket. */
    highPerformanceAmount: number;
    /** The network volume this record bills. When the networkVolumeId filter is set every record carries that id; otherwise one record is emitted per network volume per bucket. */
    networkVolumeId: string;
}
export declare const NetworkVolumeBillingRecord: S.Codec<NetworkVolumeBillingRecord>;
export type ListNetworkVolumeBillingResponseRecordsList = Array<NetworkVolumeBillingRecord>;
export declare const ListNetworkVolumeBillingResponseRecordsList: S.Codec<ListNetworkVolumeBillingResponseRecordsList>;
export interface NetworkVolumeBillingQuery {
    /** Start of the range, inclusive (RFC 3339). */
    startTime: string;
    /** End of the range, exclusive (RFC 3339). */
    endTime: string;
    bucketSize: BillingBucketSize;
    /** The networkVolumeId filter applied, if any. */
    networkVolumeId?: string | null;
}
export declare const NetworkVolumeBillingQuery: S.Codec<NetworkVolumeBillingQuery>;
/** Network volume storage cost, split into standard and high-performance. Backs a record's amounts and the metadata totals. */
export interface NetworkVolumeBillingAmounts {
    /** Total network volume cost in USD for the bucket, across standard and high-performance storage. */
    totalAmount: number;
    /** Standard storage cost in USD for the bucket. */
    standardAmount: number;
    /** High-performance storage cost in USD for the bucket. */
    highPerformanceAmount: number;
}
export declare const NetworkVolumeBillingAmounts: S.Codec<NetworkVolumeBillingAmounts>;
export interface NetworkVolumeBillingMetadata {
    query: NetworkVolumeBillingQuery;
    /** Number of records returned (buckets times distinct volumes). */
    recordCount: number;
    /** Number of distinct network volumes the records span. */
    uniqueNetworkVolumeCount: number;
    totals: NetworkVolumeBillingAmounts;
}
export declare const NetworkVolumeBillingMetadata: S.Codec<NetworkVolumeBillingMetadata>;
/** Time-bucketed network volume billing records plus metadata for the resolved query, record count, distinct volume count, and storage totals. */
export interface ListNetworkVolumeBillingResponse {
    records: ListNetworkVolumeBillingResponseRecordsList;
    metadata: NetworkVolumeBillingMetadata;
}
export declare const ListNetworkVolumeBillingResponse: S.Codec<ListNetworkVolumeBillingResponse>;
export interface ListNetworkVolumesRequest {
}
export declare const ListNetworkVolumesRequest: S.Codec<ListNetworkVolumesRequest>;
export type ListNetworkVolumesResponseNetworkVolumesList = Array<NetworkVolume>;
export declare const ListNetworkVolumesResponseNetworkVolumesList: S.Codec<ListNetworkVolumesResponseNetworkVolumesList>;
export interface ListNetworkVolumesResponse {
    networkVolumes: ListNetworkVolumesResponseNetworkVolumesList;
}
export declare const ListNetworkVolumesResponse: S.Codec<ListNetworkVolumesResponse>;
export interface ListPodBillingRequest {
    /** Start of the billing period (RFC 3339). Defaults to 30 days ago. Snapped down to the start of its bucketSize bucket so the window aligns with the returned records; provide a boundary-aligned value (e.g. midnight for bucketSize=day) to avoid widening. */
    startTime?: string;
    /** End of the billing period (RFC 3339), exclusive. Defaults to now. Snapped up to the end of the bucketSize bucket it lands in (unless already on a boundary) so the window aligns with the returned records. */
    endTime?: string;
    /** Length of each billing time bucket. Defaults to day. */
    bucketSize?: BillingBucketSize | (string & {});
    /** Return the last N buckets of bucketSize, ending with the current (in-progress) bucket — e.g. lastN=100 with bucketSize=day is "last 100 days". The resolved window is aligned to bucket boundaries: startTime is the start of the earliest bucket (e.g. midnight of the earliest day) and endTime is the end of the current bucket. Mutually exclusive with startTime/endTime; provide one or the other, not both. */
    lastN?: number;
    /** Filter to a specific pod (GPU or CPU). */
    podId?: string;
}
export declare const ListPodBillingRequest: S.Codec<ListPodBillingRequest>;
/** A single time-bucketed pod billing record, covering both GPU and CPU pods. Returned by GET /v2/billing/pods. */
export interface PodBillingRecord {
    /** Start of the range, inclusive (RFC 3339). */
    startTime: string;
    /** End of the range, exclusive (RFC 3339). */
    endTime: string;
    /** Total pod cost in USD for the bucket. */
    totalAmount: number;
    /** GPU pod compute cost in USD for the bucket. */
    gpuAmount: number;
    /** CPU pod compute cost in USD for the bucket. */
    cpuAmount: number;
    /** Pod disk cost in USD for the bucket. */
    diskAmount: number;
    /** The pod this record bills. When the podId filter is set every record carries that id; otherwise one record is emitted per pod per bucket. */
    podId: string;
}
export declare const PodBillingRecord: S.Codec<PodBillingRecord>;
export type ListPodBillingResponseRecordsList = Array<PodBillingRecord>;
export declare const ListPodBillingResponseRecordsList: S.Codec<ListPodBillingResponseRecordsList>;
export interface PodBillingQuery {
    /** Start of the range, inclusive (RFC 3339). */
    startTime: string;
    /** End of the range, exclusive (RFC 3339). */
    endTime: string;
    bucketSize: BillingBucketSize;
    /** The podId filter applied, if any. */
    podId?: string | null;
}
export declare const PodBillingQuery: S.Codec<PodBillingQuery>;
/** Pod cost components covering both GPU and CPU pods. Backs a record's amounts and the metadata totals. */
export interface PodBillingAmounts {
    /** Total pod cost in USD for the bucket. */
    totalAmount: number;
    /** GPU pod compute cost in USD for the bucket. */
    gpuAmount: number;
    /** CPU pod compute cost in USD for the bucket. */
    cpuAmount: number;
    /** Pod disk cost in USD for the bucket. */
    diskAmount: number;
}
export declare const PodBillingAmounts: S.Codec<PodBillingAmounts>;
export interface PodBillingMetadata {
    query: PodBillingQuery;
    /** Number of records returned (buckets times distinct pods). */
    recordCount: number;
    /** Number of distinct pods the records span. */
    uniquePodCount: number;
    totals: PodBillingAmounts;
}
export declare const PodBillingMetadata: S.Codec<PodBillingMetadata>;
/** Billing records for pods. */
export interface ListPodBillingResponse {
    records: ListPodBillingResponseRecordsList;
    metadata: PodBillingMetadata;
}
export declare const ListPodBillingResponse: S.Codec<ListPodBillingResponse>;
export interface ListPodsRequest {
    /** Include cluster member pods in the result. Defaults to false. */
    includeClusterPods?: boolean;
    /** Opaque resume cursor — pass the previous response's `pagination.nextCursor` through verbatim; omit for the first page. A cursor is only valid for the operation and parameters that issued it; a malformed or foreign cursor is rejected with 422. */
    cursor?: string;
    /** Page size, 1–1000. Defaults to 1000 when omitted. */
    limit?: number;
}
export declare const ListPodsRequest: S.Codec<ListPodsRequest>;
export type ListPodsResponsePodsList = Array<Pod>;
export declare const ListPodsResponsePodsList: S.Codec<ListPodsResponsePodsList>;
export interface ListPodsResponse {
    pods: ListPodsResponsePodsList;
    pagination: Pagination;
}
export declare const ListPodsResponse: S.Codec<ListPodsResponse>;
export type ListPublicTemplatesRequestSource = "official" | "verified" | "community";
export declare const ListPublicTemplatesRequestSource: any;
export interface ListPublicTemplatesRequest {
    /** Which slice of the catalog to return: `official` for Runpod-curated templates (default), `verified` for Runpod-verified community templates, or `community` for all other publicly shared templates. */
    source?: ListPublicTemplatesRequestSource | (string & {});
}
export declare const ListPublicTemplatesRequest: S.Codec<ListPublicTemplatesRequest>;
/** Container CMD in exec form. When the image defines an ENTRYPOINT, this is the argument list passed to it. Encoded into the `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
export type TemplateCmdList = Array<string>;
export declare const TemplateCmdList: S.Codec<TemplateCmdList>;
/** Container ENTRYPOINT in exec form, overriding the image's own. Encoded into `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
export type TemplateEntrypointList = Array<string>;
export declare const TemplateEntrypointList: S.Codec<TemplateEntrypointList>;
/** Environment variables as key-value pairs */
export type TemplateEnvMap = {
    [key: string]: string | undefined;
};
export declare const TemplateEnvMap: S.Codec<TemplateEnvMap>;
/** Exposed ports, formatted as port/protocol */
export type TemplatePortsList = Array<string>;
export declare const TemplatePortsList: S.Codec<TemplatePortsList>;
/** Acceptable CUDA versions for containers created from this template, as `major.minor`. Empty means any version. Expanded into GPU pod and serverless endpoint creates; CPU pods ignore it. */
export type TemplateAllowedCudaVersionsList = Array<string>;
export declare const TemplateAllowedCudaVersionsList: S.Codec<TemplateAllowedCudaVersionsList>;
export interface Template {
    /** The container's command, as a single raw string. This is the field `entrypoint` and `cmd` encode into, exposed in its stored form. Two shapes are accepted. A bare shell string is treated as CMD and split into arguments, which is what the console's "Container start command" field writes. A JSON object of the form `{"entrypoint":[...],"cmd":[...]}` sets either or both explicitly. Responses always return both representations: `args` exactly as stored, plus the deconstructed `entrypoint` and `cmd`. Supplying `args` together with `entrypoint` or `cmd` is allowed only when they describe the same command, so a read-modify-write client can send back everything it received. Send `""` to clear, omit to leave unchanged. */
    args: string;
    /** Container CMD in exec form. When the image defines an ENTRYPOINT, this is the argument list passed to it. Encoded into the `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
    cmd?: TemplateCmdList;
    /** Container ENTRYPOINT in exec form, overriding the image's own. Encoded into `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
    entrypoint?: TemplateEntrypointList;
    /** Container disk in GB (ephemeral, wiped on restart) */
    disk: number;
    /** Environment variables as key-value pairs */
    env: TemplateEnvMap;
    /** Docker image reference */
    image: string;
    /** Exposed ports, formatted as port/protocol */
    ports: TemplatePortsList;
    /** Container registry credential ID (for private images) */
    registry: string | null;
    id: string;
    name: string;
    mounts: TemplateMounts;
    /** Whether this template is for serverless workers (true) or pods (false) */
    serverless: boolean;
    /** Whether this template is visible to other Runpod users */
    public: boolean;
    category: TemplateCategory;
    /** Whether containers created from this template get SSH access provisioned at startup (`PUBLIC_KEY` env injection). */
    startSsh: boolean;
    /** Whether containers created from this template start JupyterLab at startup (`JUPYTER_PASSWORD` env injection). */
    startJupyter: boolean;
    /** Acceptable CUDA versions for containers created from this template, as `major.minor`. Empty means any version. Expanded into GPU pod and serverless endpoint creates; CPU pods ignore it. */
    allowedCudaVersions: TemplateAllowedCudaVersionsList;
}
export declare const Template: S.Codec<Template>;
export type TemplateListTemplatesList = Array<Template>;
export declare const TemplateListTemplatesList: S.Codec<TemplateListTemplatesList>;
/** A bare list of templates. `GET /v2/catalog/templates` returns it as-is (the catalog is a capped, curated set); `GET /v2/templates` composes it with the pagination block via ListTemplatesResponse. */
export interface TemplateList {
    templates: TemplateListTemplatesList;
}
export declare const TemplateList: S.Codec<TemplateList>;
export interface ListRegistriesRequest {
}
export declare const ListRegistriesRequest: S.Codec<ListRegistriesRequest>;
export type ListRegistriesResponseRegistriesList = Array<Registry>;
export declare const ListRegistriesResponseRegistriesList: S.Codec<ListRegistriesResponseRegistriesList>;
export interface ListRegistriesResponse {
    registries: ListRegistriesResponseRegistriesList;
}
export declare const ListRegistriesResponse: S.Codec<ListRegistriesResponse>;
export interface ListSecretsRequest {
    /** When provided, returns only the secret with this name (case-insensitive). */
    name?: string;
}
export declare const ListSecretsRequest: S.Codec<ListSecretsRequest>;
export type ListSecretsResponseSecretsList = Array<Secret>;
export declare const ListSecretsResponseSecretsList: S.Codec<ListSecretsResponseSecretsList>;
export interface ListSecretsResponse {
    secrets: ListSecretsResponseSecretsList;
}
export declare const ListSecretsResponse: S.Codec<ListSecretsResponse>;
export interface ListServerlessBillingRequest {
    /** Start of the billing period (RFC 3339). Defaults to 30 days ago. Snapped down to the start of its bucketSize bucket so the window aligns with the returned records; provide a boundary-aligned value (e.g. midnight for bucketSize=day) to avoid widening. */
    startTime?: string;
    /** End of the billing period (RFC 3339), exclusive. Defaults to now. Snapped up to the end of the bucketSize bucket it lands in (unless already on a boundary) so the window aligns with the returned records. */
    endTime?: string;
    /** Length of each billing time bucket. Defaults to day. */
    bucketSize?: BillingBucketSize | (string & {});
    /** Return the last N buckets of bucketSize, ending with the current (in-progress) bucket — e.g. lastN=100 with bucketSize=day is "last 100 days". The resolved window is aligned to bucket boundaries: startTime is the start of the earliest bucket (e.g. midnight of the earliest day) and endTime is the end of the current bucket. Mutually exclusive with startTime/endTime; provide one or the other, not both. */
    lastN?: number;
    /** Filter to a specific serverless endpoint. */
    serverlessId?: string;
}
export declare const ListServerlessBillingRequest: S.Codec<ListServerlessBillingRequest>;
/** A single time-bucketed serverless billing record. Returned by GET /v2/billing/serverless. */
export interface ServerlessBillingRecord {
    /** Start of the range, inclusive (RFC 3339). */
    startTime: string;
    /** End of the range, exclusive (RFC 3339). */
    endTime: string;
    /** Total serverless cost in USD for the bucket. */
    totalAmount: number;
    /** Serverless GPU compute cost in USD for the bucket. */
    gpuAmount: number;
    /** Serverless CPU compute cost in USD for the bucket. */
    cpuAmount: number;
    /** Serverless disk cost in USD for the bucket. */
    diskAmount: number;
    /** Unused and always 0. Platform charges are included in the GPU and CPU amounts. */
    feeAmount: number;
    /** The serverless endpoint this record bills. When the serverlessId filter is set every record carries that id; otherwise one record is emitted per serverless endpoint per bucket. */
    serverlessId: string;
}
export declare const ServerlessBillingRecord: S.Codec<ServerlessBillingRecord>;
export type ListServerlessBillingResponseRecordsList = Array<ServerlessBillingRecord>;
export declare const ListServerlessBillingResponseRecordsList: S.Codec<ListServerlessBillingResponseRecordsList>;
export interface ServerlessBillingQuery {
    /** Start of the range, inclusive (RFC 3339). */
    startTime: string;
    /** End of the range, exclusive (RFC 3339). */
    endTime: string;
    bucketSize: BillingBucketSize;
    /** The serverlessId filter applied, if any. */
    serverlessId?: string | null;
}
export declare const ServerlessBillingQuery: S.Codec<ServerlessBillingQuery>;
/** Serverless cost components, inclusive of platform charges. Backs a record's amounts and the metadata totals. */
export interface ServerlessBillingAmounts {
    /** Total serverless cost in USD for the bucket. */
    totalAmount: number;
    /** Serverless GPU compute cost in USD for the bucket. */
    gpuAmount: number;
    /** Serverless CPU compute cost in USD for the bucket. */
    cpuAmount: number;
    /** Serverless disk cost in USD for the bucket. */
    diskAmount: number;
    /** Unused and always 0. Platform charges are included in the GPU and CPU amounts. */
    feeAmount: number;
}
export declare const ServerlessBillingAmounts: S.Codec<ServerlessBillingAmounts>;
export interface ServerlessBillingMetadata {
    query: ServerlessBillingQuery;
    /** Number of records returned (buckets times distinct endpoints). */
    recordCount: number;
    /** Number of distinct serverless endpoints the records span. */
    uniqueServerlessCount: number;
    totals: ServerlessBillingAmounts;
}
export declare const ServerlessBillingMetadata: S.Codec<ServerlessBillingMetadata>;
/** Billing records for serverless. */
export interface ListServerlessBillingResponse {
    records: ListServerlessBillingResponseRecordsList;
    metadata: ServerlessBillingMetadata;
}
export declare const ListServerlessBillingResponse: S.Codec<ListServerlessBillingResponse>;
export interface ListTemplatesRequest {
    /** Opaque resume cursor — pass the previous response's `pagination.nextCursor` through verbatim; omit for the first page. A cursor is only valid for the operation and parameters that issued it; a malformed or foreign cursor is rejected with 422. */
    cursor?: string;
    /** Page size, 1–1000. Defaults to 1000 when omitted. */
    limit?: number;
}
export declare const ListTemplatesRequest: S.Codec<ListTemplatesRequest>;
export type ListTemplatesResponseTemplatesList = Array<Template>;
export declare const ListTemplatesResponseTemplatesList: S.Codec<ListTemplatesResponseTemplatesList>;
export interface ListTemplatesResponse {
    templates: ListTemplatesResponseTemplatesList;
    pagination: Pagination;
}
export declare const ListTemplatesResponse: S.Codec<ListTemplatesResponse>;
export interface PodActionRequest {
    id: string;
    action: PodAction | (string & {});
}
export declare const PodActionRequest: S.Codec<PodActionRequest>;
/** Container CMD in exec form. When the image defines an ENTRYPOINT, this is the argument list passed to it. Encoded into the `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
export type PodActionResponseCmdList = Array<string>;
export declare const PodActionResponseCmdList: S.Codec<PodActionResponseCmdList>;
/** Container ENTRYPOINT in exec form, overriding the image's own. Encoded into `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
export type PodActionResponseEntrypointList = Array<string>;
export declare const PodActionResponseEntrypointList: S.Codec<PodActionResponseEntrypointList>;
/** Environment variables as key-value pairs */
export type PodActionResponseEnvMap = {
    [key: string]: string | undefined;
};
export declare const PodActionResponseEnvMap: S.Codec<PodActionResponseEnvMap>;
/** Exposed ports, formatted as port/protocol */
export type PodActionResponsePortsList = Array<string>;
export declare const PodActionResponsePortsList: S.Codec<PodActionResponsePortsList>;
/** Valid state transitions for the current status. */
export type PodActionResponseActionsList = Array<PodAction>;
export declare const PodActionResponseActionsList: S.Codec<PodActionResponseActionsList>;
export interface PodActionResponse {
    /** The container's command, as a single raw string. This is the field `entrypoint` and `cmd` encode into, exposed in its stored form. Two shapes are accepted. A bare shell string is treated as CMD and split into arguments, which is what the console's "Container start command" field writes. A JSON object of the form `{"entrypoint":[...],"cmd":[...]}` sets either or both explicitly. Responses always return both representations: `args` exactly as stored, plus the deconstructed `entrypoint` and `cmd`. Supplying `args` together with `entrypoint` or `cmd` is allowed only when they describe the same command, so a read-modify-write client can send back everything it received. Send `""` to clear, omit to leave unchanged. */
    args: string;
    /** Container CMD in exec form. When the image defines an ENTRYPOINT, this is the argument list passed to it. Encoded into the `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
    cmd?: PodActionResponseCmdList;
    /** Container ENTRYPOINT in exec form, overriding the image's own. Encoded into `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
    entrypoint?: PodActionResponseEntrypointList;
    /** Container disk in GB (ephemeral, wiped on restart) */
    disk: number;
    /** Environment variables as key-value pairs */
    env: PodActionResponseEnvMap;
    /** Docker image reference */
    image: string;
    /** Exposed ports, formatted as port/protocol */
    ports: PodActionResponsePortsList;
    /** Container registry credential ID (for private images) */
    registry: string | null;
    id: string;
    name: string;
    status: PodStatus;
    /** Valid state transitions for the current status. */
    actions: PodActionResponseActionsList;
    mounts: Mounts;
    /** Present for GPU pods; omitted from CPU pods. */
    gpu?: GpuConfig;
    /** Present for CPU pods; omitted from GPU pods. */
    cpu?: CpuConfig;
    cloud: Cloud;
    /** Data center where the pod is running (assigned by scheduler) */
    dataCenterId: string | null;
    /** CUDA version reported by the host machine. Retained while the pod is stopped — a stopped pod keeps its machine assignment and resumes onto the same host. Null means unknown or not applicable (CPU pods, or a host that has not reported one), not that CUDA is absent. */
    cudaVersion: string | null;
    /** SSH connection details, via the Runpod proxy or directly to the pod's published `22/tcp` port. */
    ssh: PodSsh;
    /** Cluster membership; omitted from a standalone pod. Member pods are managed through `/v2/clusters/{id}` — they are excluded from `GET /v2/pods` by default (pass `includeClusterPods=true` to include them) and cannot be modified or deleted via the pod endpoints. */
    cluster?: PodCluster;
    /** ID of the template this pod was created from */
    template: string | null;
    /** Current cost in USD per hour (0.0 when EXITED or TERMINATED) */
    cost: number;
    /** Whether the pod is locked (prevents stopping or resetting) */
    locked: boolean;
    globalNetworking: PodGlobalNetworking;
    /** Live utilization metrics. Null when the pod is not RUNNING. */
    runtime: PodRuntime | null;
    createdAt: string;
    startedAt: string | null;
}
export declare const PodActionResponse: S.Codec<PodActionResponse>;
export interface RevokeDelegationRequest {
    id: string;
}
export declare const RevokeDelegationRequest: S.Codec<RevokeDelegationRequest>;
export interface RevokeDelegationResponse {
}
export declare const RevokeDelegationResponse: S.Codec<RevokeDelegationResponse>;
export interface UpdateClusterRequest {
    /** Cluster identifier */
    id: string;
    name?: string;
}
export declare const UpdateClusterRequest: S.Codec<UpdateClusterRequest>;
/** Container CMD in exec form. When the image defines an ENTRYPOINT, this is the argument list passed to it. Encoded into the `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
export type UpdateEndpointRequestCmdList = Array<string>;
export declare const UpdateEndpointRequestCmdList: S.Codec<UpdateEndpointRequestCmdList>;
/** Container ENTRYPOINT in exec form, overriding the image's own. Encoded into `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
export type UpdateEndpointRequestEntrypointList = Array<string>;
export declare const UpdateEndpointRequestEntrypointList: S.Codec<UpdateEndpointRequestEntrypointList>;
/** Environment variables as key-value pairs */
export type UpdateEndpointRequestEnvMap = {
    [key: string]: string | undefined;
};
export declare const UpdateEndpointRequestEnvMap: S.Codec<UpdateEndpointRequestEnvMap>;
/** Exposed ports, formatted as port/protocol */
export type UpdateEndpointRequestPortsList = Array<string>;
export declare const UpdateEndpointRequestPortsList: S.Codec<UpdateEndpointRequestPortsList>;
/** Complete replacement CPU selection. Valid only for an existing CPU endpoint; endpoint compute family cannot be changed. */
export type UpdateEndpointRequestCpuList = Array<BaseCpuConfig>;
export declare const UpdateEndpointRequestCpuList: S.Codec<UpdateEndpointRequestCpuList>;
/** Preferred data centers for placement. Omit or pass an empty array to let the scheduler choose. */
export type UpdateEndpointRequestDataCenterIdsList = Array<string>;
export declare const UpdateEndpointRequestDataCenterIdsList: S.Codec<UpdateEndpointRequestDataCenterIdsList>;
/** Serverless GPU pool IDs (as returned by `GET /v2/catalog/gpus` in `pool`). Workers are placed on whichever listed pool has capacity. Narrow a pool down to specific cards with `excludedTypes`. On `PATCH`, `pools` and `excludedTypes` are one selection and are replaced together, so sending `pools` by itself **clears the exclusions**. Two cases: - **Changing pools, keeping exclusions** — send both fields in one request: `{"gpu": {"pools": ["ADA_24"], "excludedTypes": ["NVIDIA L40"]}}`. `GET` the endpoint first to read the current `excludedTypes` and resend the ones that still apply to the new pools; an exclusion naming a type outside `pools` is a 400. - **Changing only `count` or a CUDA constraint** — omit `pools`: `{"gpu": {"minCudaVersion": "12.4"}}`. The pool list and the exclusions are both left exactly as they are. `excludedTypes` documents the full rule. */
export type UpdateEndpointGpuConfigPoolsList = Array<string>;
export declare const UpdateEndpointGpuConfigPoolsList: S.Codec<UpdateEndpointGpuConfigPoolsList>;
/** GPU **type** IDs to subtract from the selected pools — the `id` field of `GET /v2/catalog/gpus`, the same identifiers pods take in `gpu.id`. Workers run on every type in `pools` except these. Omit to use the whole pool. Pools stay the unit of selection; types are the unit of subtraction. There is no inclusive allowlist: a card later added to one of your pools becomes eligible, which is the honest reading of "this pool, minus these". Tied to `pools`, because the two together are one selection: supplying `pools` replaces that selection wholesale, so a `PATCH` sending `pools` **without `excludedTypes`** **clears** them — restate them to keep them. A `PATCH` that omits `pools` leaves both the pools and the exclusions untouched, so changing only a CUDA constraint cannot widen a pinned endpoint. Rejected with 400 if a value is not a GPU type in one of `pools`; upstream accepts unrecognized exclusions silently, so a typo would otherwise produce a filter that does nothing. Surrounding whitespace is trimmed, so `" NVIDIA L40"` and `"NVIDIA L40"` mean the same card. */
export type UpdateEndpointGpuConfigExcludedTypesList = Array<string>;
export declare const UpdateEndpointGpuConfigExcludedTypesList: S.Codec<UpdateEndpointGpuConfigExcludedTypesList>;
/** Acceptable CUDA versions for worker placement, as `major.minor`. An explicit `[]` clears the constraint; omitting the field leaves it unchanged. Takes effect as workers are replaced. A non-empty set is mutually exclusive with minCudaVersion (400 if both are sent). An explicit `[]` states no constraint, so it may accompany a floor. Setting one does not clear the other — clear it explicitly in the same patch if the endpoint already carries it. */
export type UpdateEndpointGpuConfigAllowedCudaVersionsList = Array<string>;
export declare const UpdateEndpointGpuConfigAllowedCudaVersionsList: S.Codec<UpdateEndpointGpuConfigAllowedCudaVersionsList>;
/** Partial GPU update — every field is optional and an omitted one is left unchanged. Unlike create, `pools` is optional, so changing only a CUDA constraint does not require resending the pool list. `excludedTypes` requires `pools`, because the two are one selection and only a supplied `pools` replaces it — an exclusion on its own would otherwise be silently dropped. */
export interface UpdateEndpointGpuConfig {
    /** Serverless GPU pool IDs (as returned by `GET /v2/catalog/gpus` in `pool`). Workers are placed on whichever listed pool has capacity. Narrow a pool down to specific cards with `excludedTypes`. On `PATCH`, `pools` and `excludedTypes` are one selection and are replaced together, so sending `pools` by itself **clears the exclusions**. Two cases: - **Changing pools, keeping exclusions** — send both fields in one request: `{"gpu": {"pools": ["ADA_24"], "excludedTypes": ["NVIDIA L40"]}}`. `GET` the endpoint first to read the current `excludedTypes` and resend the ones that still apply to the new pools; an exclusion naming a type outside `pools` is a 400. - **Changing only `count` or a CUDA constraint** — omit `pools`: `{"gpu": {"minCudaVersion": "12.4"}}`. The pool list and the exclusions are both left exactly as they are. `excludedTypes` documents the full rule. */
    pools?: UpdateEndpointGpuConfigPoolsList;
    /** GPU **type** IDs to subtract from the selected pools — the `id` field of `GET /v2/catalog/gpus`, the same identifiers pods take in `gpu.id`. Workers run on every type in `pools` except these. Omit to use the whole pool. Pools stay the unit of selection; types are the unit of subtraction. There is no inclusive allowlist: a card later added to one of your pools becomes eligible, which is the honest reading of "this pool, minus these". Tied to `pools`, because the two together are one selection: supplying `pools` replaces that selection wholesale, so a `PATCH` sending `pools` **without `excludedTypes`** **clears** them — restate them to keep them. A `PATCH` that omits `pools` leaves both the pools and the exclusions untouched, so changing only a CUDA constraint cannot widen a pinned endpoint. Rejected with 400 if a value is not a GPU type in one of `pools`; upstream accepts unrecognized exclusions silently, so a typo would otherwise produce a filter that does nothing. Surrounding whitespace is trimmed, so `" NVIDIA L40"` and `"NVIDIA L40"` mean the same card. */
    excludedTypes?: UpdateEndpointGpuConfigExcludedTypesList;
    /** GPUs per worker */
    count?: number;
    /** Acceptable CUDA versions for worker placement, as `major.minor`. An explicit `[]` clears the constraint; omitting the field leaves it unchanged. Takes effect as workers are replaced. A non-empty set is mutually exclusive with minCudaVersion (400 if both are sent). An explicit `[]` states no constraint, so it may accompany a floor. Setting one does not clear the other — clear it explicitly in the same patch if the endpoint already carries it. */
    allowedCudaVersions?: UpdateEndpointGpuConfigAllowedCudaVersionsList;
    /** Lowest acceptable CUDA version for worker placement, as `major.minor`. An explicit `""` clears the floor; omitting the field leaves it unchanged. Takes effect as workers are replaced. Mutually exclusive with a non-empty allowedCudaVersions (400 if both are sent); an explicit `[]` there states no constraint and may accompany this floor. */
    minCudaVersion?: string;
}
export declare const UpdateEndpointGpuConfig: S.Codec<UpdateEndpointGpuConfig>;
export type UpdateEndpointRequestNetworkVolumesList = Array<string>;
export declare const UpdateEndpointRequestNetworkVolumesList: S.Codec<UpdateEndpointRequestNetworkVolumesList>;
export interface UpdateEndpointRequest {
    /** Serverless endpoint identifier */
    id: string;
    /** The container's command, as a single raw string. This is the field `entrypoint` and `cmd` encode into, exposed in its stored form. Two shapes are accepted. A bare shell string is treated as CMD and split into arguments, which is what the console's "Container start command" field writes. A JSON object of the form `{"entrypoint":[...],"cmd":[...]}` sets either or both explicitly. Responses always return both representations: `args` exactly as stored, plus the deconstructed `entrypoint` and `cmd`. Supplying `args` together with `entrypoint` or `cmd` is allowed only when they describe the same command, so a read-modify-write client can send back everything it received. Send `""` to clear, omit to leave unchanged. */
    args?: string;
    /** Container CMD in exec form. When the image defines an ENTRYPOINT, this is the argument list passed to it. Encoded into the `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
    cmd?: UpdateEndpointRequestCmdList;
    /** Container ENTRYPOINT in exec form, overriding the image's own. Encoded into `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
    entrypoint?: UpdateEndpointRequestEntrypointList;
    /** Container disk in GB (ephemeral, wiped on restart) */
    disk?: number;
    /** Environment variables as key-value pairs */
    env?: UpdateEndpointRequestEnvMap;
    /** Docker image reference */
    image?: string;
    /** Exposed ports, formatted as port/protocol */
    ports?: UpdateEndpointRequestPortsList;
    /** Container registry credential ID (for private images) */
    registry?: string | null;
    /** Complete replacement CPU selection. Valid only for an existing CPU endpoint; endpoint compute family cannot be changed. */
    cpu?: UpdateEndpointRequestCpuList;
    /** Preferred data centers for placement. Omit or pass an empty array to let the scheduler choose. */
    dataCenterIds?: UpdateEndpointRequestDataCenterIdsList;
    flashboot?: FlashBoot | (string & {});
    gpu?: UpdateEndpointGpuConfig;
    name?: string;
    networkVolumes?: UpdateEndpointRequestNetworkVolumesList;
    scaling?: EndpointScaling;
    /** ID of a serverless template whose container settings are applied as if they were provided in this PATCH body (image, args, disk, ports, env, registry). Explicit body fields override the template's; `env` merges template and body per key (body wins) and, per PATCH semantics, replaces the endpoint's env. One-time application — no link to the template is retained. Must be one of your templates or a public template (unknown or inaccessible ID → 404); must be a serverless template (→ 422). */
    templateId?: string;
    timeout?: number;
    workers?: CreateEndpointRequestWorkers;
}
export declare const UpdateEndpointRequest: S.Codec<UpdateEndpointRequest>;
/** Container CMD in exec form. When the image defines an ENTRYPOINT, this is the argument list passed to it. Encoded into the `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
export type UpdateEndpointResponseCmdList = Array<string>;
export declare const UpdateEndpointResponseCmdList: S.Codec<UpdateEndpointResponseCmdList>;
/** Container ENTRYPOINT in exec form, overriding the image's own. Encoded into `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
export type UpdateEndpointResponseEntrypointList = Array<string>;
export declare const UpdateEndpointResponseEntrypointList: S.Codec<UpdateEndpointResponseEntrypointList>;
/** Environment variables as key-value pairs */
export type UpdateEndpointResponseEnvMap = {
    [key: string]: string | undefined;
};
export declare const UpdateEndpointResponseEnvMap: S.Codec<UpdateEndpointResponseEnvMap>;
/** Exposed ports, formatted as port/protocol */
export type UpdateEndpointResponsePortsList = Array<string>;
export declare const UpdateEndpointResponsePortsList: S.Codec<UpdateEndpointResponsePortsList>;
/** Eligible CPU configurations for each worker, in the order they were submitted. Present for CPU endpoints and omitted for GPU endpoints. Memory is derived from the selected flavor's catalog RAM multiplier. */
export type UpdateEndpointResponseCpuList = Array<CpuConfig>;
export declare const UpdateEndpointResponseCpuList: S.Codec<UpdateEndpointResponseCpuList>;
export type UpdateEndpointResponseDataCenterIdsList = Array<string>;
export declare const UpdateEndpointResponseDataCenterIdsList: S.Codec<UpdateEndpointResponseDataCenterIdsList>;
export type UpdateEndpointResponseNetworkVolumesList = Array<string>;
export declare const UpdateEndpointResponseNetworkVolumesList: S.Codec<UpdateEndpointResponseNetworkVolumesList>;
export interface UpdateEndpointResponse {
    /** The container's command, as a single raw string. This is the field `entrypoint` and `cmd` encode into, exposed in its stored form. Two shapes are accepted. A bare shell string is treated as CMD and split into arguments, which is what the console's "Container start command" field writes. A JSON object of the form `{"entrypoint":[...],"cmd":[...]}` sets either or both explicitly. Responses always return both representations: `args` exactly as stored, plus the deconstructed `entrypoint` and `cmd`. Supplying `args` together with `entrypoint` or `cmd` is allowed only when they describe the same command, so a read-modify-write client can send back everything it received. Send `""` to clear, omit to leave unchanged. */
    args?: string;
    /** Container CMD in exec form. When the image defines an ENTRYPOINT, this is the argument list passed to it. Encoded into the `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
    cmd?: UpdateEndpointResponseCmdList;
    /** Container ENTRYPOINT in exec form, overriding the image's own. Encoded into `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
    entrypoint?: UpdateEndpointResponseEntrypointList;
    /** Container disk in GB (ephemeral, wiped on restart) */
    disk?: number;
    /** Environment variables as key-value pairs */
    env?: UpdateEndpointResponseEnvMap;
    /** Docker image reference */
    image?: string;
    /** Exposed ports, formatted as port/protocol */
    ports?: UpdateEndpointResponsePortsList;
    /** Container registry credential ID (for private images) */
    registry?: string | null;
    id: string;
    name: string;
    type?: EndpointType;
    requestUrls?: EndpointRequestUrls;
    gpu?: EndpointGpuConfig | null;
    /** Eligible CPU configurations for each worker, in the order they were submitted. Present for CPU endpoints and omitted for GPU endpoints. Memory is derived from the selected flavor's catalog RAM multiplier. */
    cpu?: UpdateEndpointResponseCpuList;
    workers: CreateEndpointRequestWorkers;
    scaling: EndpointScaling;
    dataCenterIds: UpdateEndpointResponseDataCenterIdsList;
    networkVolumes: UpdateEndpointResponseNetworkVolumesList;
    /** Per-request execution timeout in milliseconds */
    timeout: number;
    flashboot: FlashBoot;
    createdAt: string;
}
export declare const UpdateEndpointResponse: S.Codec<UpdateEndpointResponse>;
export interface UpdateNetworkVolumeRequest {
    /** Network volume identifier */
    id: string;
    /** New human-readable name */
    name?: string;
    /** New size in GB. Must be greater than or equal to the current size — network volume storage cannot be reduced. */
    size?: number;
}
export declare const UpdateNetworkVolumeRequest: S.Codec<UpdateNetworkVolumeRequest>;
/** Container CMD in exec form. When the image defines an ENTRYPOINT, this is the argument list passed to it. Encoded into the `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
export type UpdatePodRequestCmdList = Array<string>;
export declare const UpdatePodRequestCmdList: S.Codec<UpdatePodRequestCmdList>;
/** Container ENTRYPOINT in exec form, overriding the image's own. Encoded into `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
export type UpdatePodRequestEntrypointList = Array<string>;
export declare const UpdatePodRequestEntrypointList: S.Codec<UpdatePodRequestEntrypointList>;
/** Environment variables as key-value pairs */
export type UpdatePodRequestEnvMap = {
    [key: string]: string | undefined;
};
export declare const UpdatePodRequestEnvMap: S.Codec<UpdatePodRequestEnvMap>;
/** Exposed ports, formatted as port/protocol */
export type UpdatePodRequestPortsList = Array<string>;
export declare const UpdatePodRequestPortsList: S.Codec<UpdatePodRequestPortsList>;
export interface UpdatePodRequest {
    /** Pod identifier */
    id: string;
    /** The container's command, as a single raw string. This is the field `entrypoint` and `cmd` encode into, exposed in its stored form. Two shapes are accepted. A bare shell string is treated as CMD and split into arguments, which is what the console's "Container start command" field writes. A JSON object of the form `{"entrypoint":[...],"cmd":[...]}` sets either or both explicitly. Responses always return both representations: `args` exactly as stored, plus the deconstructed `entrypoint` and `cmd`. Supplying `args` together with `entrypoint` or `cmd` is allowed only when they describe the same command, so a read-modify-write client can send back everything it received. Send `""` to clear, omit to leave unchanged. */
    args?: string;
    /** Container CMD in exec form. When the image defines an ENTRYPOINT, this is the argument list passed to it. Encoded into the `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
    cmd?: UpdatePodRequestCmdList;
    /** Container ENTRYPOINT in exec form, overriding the image's own. Encoded into `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
    entrypoint?: UpdatePodRequestEntrypointList;
    /** Container disk in GB (ephemeral, wiped on restart) */
    disk?: number;
    /** Environment variables as key-value pairs */
    env?: UpdatePodRequestEnvMap;
    /** Docker image reference */
    image?: string;
    /** Exposed ports, formatted as port/protocol */
    ports?: UpdatePodRequestPortsList;
    /** Container registry credential ID (for private images) */
    registry?: string | null;
    /** Enable (true) or disable (false) global networking. Takes effect on the next pod start/restart, not live. Requires an NVIDIA GPU and a global-networking-enabled data center (both enforced upstream). See `GET /v2/catalog/datacenters` (`globalNetwork`) for eligible data centers. */
    globalNetworking?: boolean;
    /** Lock the pod (true) or unlock it (false). Locked pods cannot be stopped or reset. */
    locked?: boolean;
    mounts?: Mounts;
    name?: string;
    /** ID of a pod template whose container settings are applied as if they were provided in this PATCH body (image, args, disk, ports, env, registry — mounts are not applied on update). Explicit body fields override the template's; `env` merges template and body per key (body wins) and, per PATCH semantics, replaces the pod's env. One-time application — no link to the template is retained. Must be one of your templates or a public template (unknown or inaccessible ID → 404); must not be a serverless template (→ 422). */
    templateId?: string;
}
export declare const UpdatePodRequest: S.Codec<UpdatePodRequest>;
/** Container CMD in exec form. When the image defines an ENTRYPOINT, this is the argument list passed to it. Encoded into the `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
export type UpdatePodResponseCmdList = Array<string>;
export declare const UpdatePodResponseCmdList: S.Codec<UpdatePodResponseCmdList>;
/** Container ENTRYPOINT in exec form, overriding the image's own. Encoded into `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
export type UpdatePodResponseEntrypointList = Array<string>;
export declare const UpdatePodResponseEntrypointList: S.Codec<UpdatePodResponseEntrypointList>;
/** Environment variables as key-value pairs */
export type UpdatePodResponseEnvMap = {
    [key: string]: string | undefined;
};
export declare const UpdatePodResponseEnvMap: S.Codec<UpdatePodResponseEnvMap>;
/** Exposed ports, formatted as port/protocol */
export type UpdatePodResponsePortsList = Array<string>;
export declare const UpdatePodResponsePortsList: S.Codec<UpdatePodResponsePortsList>;
/** Valid state transitions for the current status. */
export type UpdatePodResponseActionsList = Array<PodAction>;
export declare const UpdatePodResponseActionsList: S.Codec<UpdatePodResponseActionsList>;
export interface UpdatePodResponse {
    /** The container's command, as a single raw string. This is the field `entrypoint` and `cmd` encode into, exposed in its stored form. Two shapes are accepted. A bare shell string is treated as CMD and split into arguments, which is what the console's "Container start command" field writes. A JSON object of the form `{"entrypoint":[...],"cmd":[...]}` sets either or both explicitly. Responses always return both representations: `args` exactly as stored, plus the deconstructed `entrypoint` and `cmd`. Supplying `args` together with `entrypoint` or `cmd` is allowed only when they describe the same command, so a read-modify-write client can send back everything it received. Send `""` to clear, omit to leave unchanged. */
    args: string;
    /** Container CMD in exec form. When the image defines an ENTRYPOINT, this is the argument list passed to it. Encoded into the `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
    cmd?: UpdatePodResponseCmdList;
    /** Container ENTRYPOINT in exec form, overriding the image's own. Encoded into `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
    entrypoint?: UpdatePodResponseEntrypointList;
    /** Container disk in GB (ephemeral, wiped on restart) */
    disk: number;
    /** Environment variables as key-value pairs */
    env: UpdatePodResponseEnvMap;
    /** Docker image reference */
    image: string;
    /** Exposed ports, formatted as port/protocol */
    ports: UpdatePodResponsePortsList;
    /** Container registry credential ID (for private images) */
    registry: string | null;
    id: string;
    name: string;
    status: PodStatus;
    /** Valid state transitions for the current status. */
    actions: UpdatePodResponseActionsList;
    mounts: Mounts;
    /** Present for GPU pods; omitted from CPU pods. */
    gpu?: GpuConfig;
    /** Present for CPU pods; omitted from GPU pods. */
    cpu?: CpuConfig;
    cloud: Cloud;
    /** Data center where the pod is running (assigned by scheduler) */
    dataCenterId: string | null;
    /** CUDA version reported by the host machine. Retained while the pod is stopped — a stopped pod keeps its machine assignment and resumes onto the same host. Null means unknown or not applicable (CPU pods, or a host that has not reported one), not that CUDA is absent. */
    cudaVersion: string | null;
    /** SSH connection details, via the Runpod proxy or directly to the pod's published `22/tcp` port. */
    ssh: PodSsh;
    /** Cluster membership; omitted from a standalone pod. Member pods are managed through `/v2/clusters/{id}` — they are excluded from `GET /v2/pods` by default (pass `includeClusterPods=true` to include them) and cannot be modified or deleted via the pod endpoints. */
    cluster?: PodCluster;
    /** ID of the template this pod was created from */
    template: string | null;
    /** Current cost in USD per hour (0.0 when EXITED or TERMINATED) */
    cost: number;
    /** Whether the pod is locked (prevents stopping or resetting) */
    locked: boolean;
    globalNetworking: PodGlobalNetworking;
    /** Live utilization metrics. Null when the pod is not RUNNING. */
    runtime: PodRuntime | null;
    createdAt: string;
    startedAt: string | null;
}
export declare const UpdatePodResponse: S.Codec<UpdatePodResponse>;
export interface UpdateSecretRequest {
    /** Secret identifier */
    id: string;
    /** New secret value, replacing the current one. Write-only. Must be smaller than 16 MiB of UTF-8 text (strictly under 16,777,216 bytes). */
    value?: string;
    /** New human-readable description, at most 65,535 bytes of UTF-8 text. Send `""` to clear. */
    description?: string;
}
export declare const UpdateSecretRequest: S.Codec<UpdateSecretRequest>;
/** The full set of SSH public keys to register — this is a complete replacement, not a merge. Each entry is an authorized_keys-style line: `<type> <base64-key> [comment]`, e.g. from `~/.ssh/id_ed25519.pub`. Send `[]` to remove all keys. These keys are provisioned into pods created with `startSsh` and authenticate both SSH paths reported in the pod's `ssh` block. */
export type UpdateSshKeysRequestKeysList = Array<string>;
export declare const UpdateSshKeysRequestKeysList: S.Codec<UpdateSshKeysRequestKeysList>;
export interface UpdateSshKeysRequest {
    /** The full set of SSH public keys to register — this is a complete replacement, not a merge. Each entry is an authorized_keys-style line: `<type> <base64-key> [comment]`, e.g. from `~/.ssh/id_ed25519.pub`. Send `[]` to remove all keys. These keys are provisioned into pods created with `startSsh` and authenticate both SSH paths reported in the pod's `ssh` block. */
    keys: UpdateSshKeysRequestKeysList;
}
export declare const UpdateSshKeysRequest: S.Codec<UpdateSshKeysRequest>;
/** Container CMD in exec form. When the image defines an ENTRYPOINT, this is the argument list passed to it. Encoded into the `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
export type UpdateTemplateRequestCmdList = Array<string>;
export declare const UpdateTemplateRequestCmdList: S.Codec<UpdateTemplateRequestCmdList>;
/** Container ENTRYPOINT in exec form, overriding the image's own. Encoded into `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
export type UpdateTemplateRequestEntrypointList = Array<string>;
export declare const UpdateTemplateRequestEntrypointList: S.Codec<UpdateTemplateRequestEntrypointList>;
/** Environment variables as key-value pairs */
export type UpdateTemplateRequestEnvMap = {
    [key: string]: string | undefined;
};
export declare const UpdateTemplateRequestEnvMap: S.Codec<UpdateTemplateRequestEnvMap>;
/** Exposed ports, formatted as port/protocol */
export type UpdateTemplateRequestPortsList = Array<string>;
export declare const UpdateTemplateRequestPortsList: S.Codec<UpdateTemplateRequestPortsList>;
/** Acceptable CUDA versions for pods created from this template. An explicit `[]` clears the constraint; omitting the field leaves it unchanged. */
export type UpdateTemplateRequestAllowedCudaVersionsList = Array<string>;
export declare const UpdateTemplateRequestAllowedCudaVersionsList: S.Codec<UpdateTemplateRequestAllowedCudaVersionsList>;
export interface UpdateTemplateRequest {
    id: string;
    /** The container's command, as a single raw string. This is the field `entrypoint` and `cmd` encode into, exposed in its stored form. Two shapes are accepted. A bare shell string is treated as CMD and split into arguments, which is what the console's "Container start command" field writes. A JSON object of the form `{"entrypoint":[...],"cmd":[...]}` sets either or both explicitly. Responses always return both representations: `args` exactly as stored, plus the deconstructed `entrypoint` and `cmd`. Supplying `args` together with `entrypoint` or `cmd` is allowed only when they describe the same command, so a read-modify-write client can send back everything it received. Send `""` to clear, omit to leave unchanged. */
    args?: string;
    /** Container CMD in exec form. When the image defines an ENTRYPOINT, this is the argument list passed to it. Encoded into the `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
    cmd?: UpdateTemplateRequestCmdList;
    /** Container ENTRYPOINT in exec form, overriding the image's own. Encoded into `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
    entrypoint?: UpdateTemplateRequestEntrypointList;
    /** Container disk in GB (ephemeral, wiped on restart) */
    disk?: number;
    /** Environment variables as key-value pairs */
    env?: UpdateTemplateRequestEnvMap;
    /** Docker image reference */
    image?: string;
    /** Exposed ports, formatted as port/protocol */
    ports?: UpdateTemplateRequestPortsList;
    /** Container registry credential ID (for private images) */
    registry?: string | null;
    /** Acceptable CUDA versions for pods created from this template. An explicit `[]` clears the constraint; omitting the field leaves it unchanged. */
    allowedCudaVersions?: UpdateTemplateRequestAllowedCudaVersionsList;
    category?: TemplateCategory | (string & {});
    mounts?: TemplateMounts;
    name?: string;
    public?: boolean;
    serverless?: boolean;
    /** Start JupyterLab at container startup (`JUPYTER_PASSWORD` env injection). See the create-time field for details. */
    startJupyter?: boolean;
    /** Provision SSH access at container startup (`PUBLIC_KEY` env injection). See the create-time field for details. */
    startSsh?: boolean;
}
export declare const UpdateTemplateRequest: S.Codec<UpdateTemplateRequest>;
/** Container CMD in exec form. When the image defines an ENTRYPOINT, this is the argument list passed to it. Encoded into the `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
export type UpdateTemplateResponseCmdList = Array<string>;
export declare const UpdateTemplateResponseCmdList: S.Codec<UpdateTemplateResponseCmdList>;
/** Container ENTRYPOINT in exec form, overriding the image's own. Encoded into `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
export type UpdateTemplateResponseEntrypointList = Array<string>;
export declare const UpdateTemplateResponseEntrypointList: S.Codec<UpdateTemplateResponseEntrypointList>;
/** Environment variables as key-value pairs */
export type UpdateTemplateResponseEnvMap = {
    [key: string]: string | undefined;
};
export declare const UpdateTemplateResponseEnvMap: S.Codec<UpdateTemplateResponseEnvMap>;
/** Exposed ports, formatted as port/protocol */
export type UpdateTemplateResponsePortsList = Array<string>;
export declare const UpdateTemplateResponsePortsList: S.Codec<UpdateTemplateResponsePortsList>;
/** Acceptable CUDA versions for containers created from this template, as `major.minor`. Empty means any version. Expanded into GPU pod and serverless endpoint creates; CPU pods ignore it. */
export type UpdateTemplateResponseAllowedCudaVersionsList = Array<string>;
export declare const UpdateTemplateResponseAllowedCudaVersionsList: S.Codec<UpdateTemplateResponseAllowedCudaVersionsList>;
export interface UpdateTemplateResponse {
    /** The container's command, as a single raw string. This is the field `entrypoint` and `cmd` encode into, exposed in its stored form. Two shapes are accepted. A bare shell string is treated as CMD and split into arguments, which is what the console's "Container start command" field writes. A JSON object of the form `{"entrypoint":[...],"cmd":[...]}` sets either or both explicitly. Responses always return both representations: `args` exactly as stored, plus the deconstructed `entrypoint` and `cmd`. Supplying `args` together with `entrypoint` or `cmd` is allowed only when they describe the same command, so a read-modify-write client can send back everything it received. Send `""` to clear, omit to leave unchanged. */
    args: string;
    /** Container CMD in exec form. When the image defines an ENTRYPOINT, this is the argument list passed to it. Encoded into the `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
    cmd?: UpdateTemplateResponseCmdList;
    /** Container ENTRYPOINT in exec form, overriding the image's own. Encoded into `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged. */
    entrypoint?: UpdateTemplateResponseEntrypointList;
    /** Container disk in GB (ephemeral, wiped on restart) */
    disk: number;
    /** Environment variables as key-value pairs */
    env: UpdateTemplateResponseEnvMap;
    /** Docker image reference */
    image: string;
    /** Exposed ports, formatted as port/protocol */
    ports: UpdateTemplateResponsePortsList;
    /** Container registry credential ID (for private images) */
    registry: string | null;
    id: string;
    name: string;
    mounts: TemplateMounts;
    /** Whether this template is for serverless workers (true) or pods (false) */
    serverless: boolean;
    /** Whether this template is visible to other Runpod users */
    public: boolean;
    category: TemplateCategory;
    /** Whether containers created from this template get SSH access provisioned at startup (`PUBLIC_KEY` env injection). */
    startSsh: boolean;
    /** Whether containers created from this template start JupyterLab at startup (`JUPYTER_PASSWORD` env injection). */
    startJupyter: boolean;
    /** Acceptable CUDA versions for containers created from this template, as `major.minor`. Empty means any version. Expanded into GPU pod and serverless endpoint creates; CPU pods ignore it. */
    allowedCudaVersions: UpdateTemplateResponseAllowedCudaVersionsList;
}
export declare const UpdateTemplateResponse: S.Codec<UpdateTemplateResponse>;
export type CreateClusterError = BadRequest | Forbidden | UnprocessableEntity | RunpodOpError;
/** Create a cluster Creates a multi-node cluster. `compute` sets the homogeneous pod shape; the container configuration applies to every pod and can be spread from a template response. */
export declare const createCluster: API.OperationMethod<CreateClusterRequest, Cluster, CreateClusterError, RunpodOpContext>;
export type CreateDelegationError = Forbidden | RunpodOpError;
/** Register an ECR delegation */
export declare const createDelegation: API.OperationMethod<CreateDelegationRequest, EcrDelegation, CreateDelegationError, RunpodOpContext>;
export type CreateEndpointError = BadRequest | Forbidden | NotFound | UnprocessableEntity | RunpodOpError;
/** Create a serverless endpoint Creates a serverless endpoint. Callers specify exactly one of `gpu` or `cpu`; neither or both returns 400. Container settings come from the body, from a serverless template referenced by `templateId` (body fields override the template's), or both; `image` is required unless `templateId` is set. See `CreateEndpointRequest` for the full body. The CUDA constraints live on `gpu` — `gpu.allowedCudaVersions` and `gpu.minCudaVersion` — so a CPU create cannot express them and the schema rejects the attempt with a 422. A non-empty set and a floor are mutually exclusive (400 if both are sent); an explicit empty set states no constraint and may accompany a floor. Returns `201` with the created endpoint. The endpoint can accept jobs immediately, but starts with no active workers unless `workers.min` is greater than 0. Workers are provisioned on demand and autoscaled between `workers.min` and `workers.max` according to the `scaling` policy, so the first request to an idle endpoint may incur cold-start latency while a worker pulls its image and boots. ## Checking what you can deploy `gpu.pools` takes serverless GPU **pool** IDs, not the GPU type IDs used for pods. `gpu.excludedTypes` takes the type IDs — it subtracts specific cards from the pools you picked. Read both from the catalog before you create: - [List GPU types](https://docs.runpod.io/api-reference-v2/catalog/list-gpu-types) — the `pool` field carries the pool ID for each GPU type (`null` means that type is not in a serverless pool). Add `include=AVAILABILITY&product=SERVERLESS` for current serverless stock. - [List data centers](https://docs.runpod.io/api-reference-v2/catalog/list-data-centers) — locations to constrain with `dataCenterIds`, with `include=GPU_AVAILABILITY` for stock per data center. Unlike pod creation, you do not need to retry across GPUs yourself: list every pool you are willing to run on and workers are placed on whichever one has capacity. Listing more pools — and leaving `dataCenterIds` unset — gives the scheduler more room and reduces the chance of workers failing to start when a single pool is exhausted. If your workload needs a specific card, pick the pool that holds it and exclude the rest of that pool with `gpu.excludedTypes`. Keep at least one type in the selection — upstream rejects a selection that leaves none. */
export declare const createEndpoint: API.OperationMethod<CreateEndpointRequest, CreateEndpointResponse, CreateEndpointError, RunpodOpContext>;
export type CreateNetworkVolumeError = BadRequest | Forbidden | UnprocessableEntity | RunpodOpError;
/** Create a network volume Provisions a new network volume — persistent, network-attached storage that can be mounted into pods and serverless workers. Required inputs are `name`, `size` (in GB), and `dataCenter`; an optional `type` selects the storage tier and is immutable after creation. See `CreateNetworkVolumeRequest` for the size bounds and tier options. This creates a billable persistent resource that keeps incurring storage charges until it is deleted. Returns `201` with the created network volume, including its assigned `id`. */
export declare const createNetworkVolume: API.OperationMethod<CreateNetworkVolumeRequest, NetworkVolume, CreateNetworkVolumeError, RunpodOpContext>;
export type CreatePodError = BadRequest | Forbidden | NotFound | UnprocessableEntity | RunpodOpError;
/** Create a pod Creates a new pod. `name` is always required; supply exactly one of `gpu` or `cpu` to select compute (a GPU or a CPU pod). Container settings come from the body, from a template referenced by `templateId` (body fields override the template's), or both; `image` is required unless `templateId` is set. See `CreatePodRequest` for the full body. Returns `201` with the created pod. Provisioning is asynchronous: the pod starts in `PROVISIONING`, transitions through `STARTING`, and reaches `RUNNING` once its container is healthy. Poll `getPod` (or watch the pod's `status`) to observe readiness rather than assuming the pod is running when this call returns. ## Checking what you can deploy This endpoint places one specific GPU type. It does not search for capacity, and it does not fall back to a different GPU. To find out what is deployable before you call it, read the catalog: - [List GPU types](https://docs.runpod.io/api-reference-v2/catalog/list-gpu-types) — GPU types with pricing, per-cloud ceilings, and, with `include=AVAILABILITY&product=POD`, current pod stock. - [List data centers](https://docs.runpod.io/api-reference-v2/catalog/list-data-centers) — locations, with `include=GPU_AVAILABILITY` for stock per data center. Both accept filters that combine, so you can narrow by location and by compute in one request — for example `GET /v2/catalog/datacenters?regions=EUROPE&include=GPU_AVAILABILITY` returns only European data centers, each carrying the GPU types currently available there. ## Deploying under region and GPU constraints If you need a particular GPU in a particular geography, the working pattern is read-then-create: narrow the catalog to an acceptable (data center, GPU) set, then call this endpoint once per candidate in your order of preference until one returns `201`. The runnable sample alongside this operation does exactly that. Availability can change between the catalog read and the create call, so treat the catalog as a way to order your candidates, not as a reservation — a create can still fail for capacity on a GPU the catalog just reported as available. Which failures are worth retrying: Requests larger than 102400 bytes receive `413` before authentication or processing. Reduce the serialized JSON request body and retry. This limit also applies to the deployment request built from your input and any referenced template. A small request can therefore receive `413` if inherited template settings make the combined request too large. Reduce environment variables or command values in your request or template and retry. `400` covers both "your request breaks a rule" and "no capacity", because capacity exhaustion currently carries no machine-readable code of its own — only a human-readable `detail`. A rule violation is deterministic, so it fails identically on every candidate: if *every* candidate returns `400`, read the last `detail` as a problem with the request rather than as absent capacity. */
export declare const createPod: API.OperationMethod<CreatePodRequest, CreatePodResponse, CreatePodError, RunpodOpContext>;
export type CreateRegistryError = BadRequest | Forbidden | UnprocessableEntity | RunpodOpError;
/** Create a container registry credential Stores credentials for a private container registry. Credentials are write-only. */
export declare const createRegistry: API.OperationMethod<CreateRegistryRequest, Registry, CreateRegistryError, RunpodOpContext>;
export type CreateSecretError = BadRequest | Forbidden | Conflict | UnprocessableEntity | RunpodOpError;
/** Create a secret Stores a new account-scoped encrypted string. `name` must be unique across the account's secrets and is immutable; `value` is write-only and can never be read back through the API. Use the secret from pods, serverless endpoints, and templates by setting an environment variable's value to `{{ RUNPOD_SECRET_<name> }}` — Runpod substitutes the stored value when the pod or worker boots. Returns `201` with the created secret's metadata, or `409` when the name is already taken. */
export declare const createSecret: API.OperationMethod<CreateSecretRequest, Secret, CreateSecretError, RunpodOpContext>;
export type CreateTemplateError = BadRequest | Forbidden | UnprocessableEntity | RunpodOpError;
/** Create a template Creates a reusable container-configuration preset — image, disk, ports, env, registry, and mount settings — for pods and serverless endpoints. Pass its ID as `templateId` to `createPod` or `createEndpoint`, or spread its fields into the request body directly. Returns the created template. */
export declare const createTemplate: API.OperationMethod<CreateTemplateRequest, CreateTemplateResponse, CreateTemplateError, RunpodOpContext>;
export type DeleteClusterError = Forbidden | NotFound | RunpodOpError;
/** Delete a cluster Permanently deletes a cluster and terminates all of its member pods. */
export declare const deleteCluster: API.OperationMethod<DeleteClusterRequest, DeleteClusterResponse, DeleteClusterError, RunpodOpContext>;
export type DeleteEndpointError = Forbidden | NotFound | RunpodOpError;
/** Delete a serverless endpoint Permanently deletes a serverless endpoint and its bound template. This is irreversible: all workers are terminated and any queued or in-progress jobs are cancelled. */
export declare const deleteEndpoint: API.OperationMethod<DeleteEndpointRequest, DeleteEndpointResponse, DeleteEndpointError, RunpodOpContext>;
export type DeleteNetworkVolumeError = Forbidden | NotFound | RunpodOpError;
/** Delete a network volume Permanently deletes a network volume and releases its storage. */
export declare const deleteNetworkVolume: API.OperationMethod<DeleteNetworkVolumeRequest, DeleteNetworkVolumeResponse, DeleteNetworkVolumeError, RunpodOpContext>;
export type DeletePodError = Forbidden | NotFound | Conflict | RunpodOpError;
/** Terminate a pod Permanently terminates and deletes a pod. This is irreversible: compute is released, any `mounts.persistent` host-local storage is destroyed with it (a `mounts.network` volume is only detached — the volume itself is not deleted), and the pod no longer appears in `listPods`. Pods that belong to a Cluster cannot be terminated here — delete the cluster via `DELETE /v2/clusters/{id}`. */
export declare const deletePod: API.OperationMethod<DeletePodRequest, DeletePodResponse, DeletePodError, RunpodOpContext>;
export type DeleteRegistryError = BadRequest | Forbidden | NotFound | RunpodOpError;
/** Delete a container registry credential Permanently deletes a container registry credential by ID. Rejected if any pod currently uses this credential to pull its image. Templates that reference it are not part of that check — they silently lose the reference (`registry` becomes null) instead of blocking the delete. */
export declare const deleteRegistry: API.OperationMethod<DeleteRegistryRequest, DeleteRegistryResponse, DeleteRegistryError, RunpodOpContext>;
export type DeleteSecretError = Forbidden | NotFound | RunpodOpError;
/** Delete a secret Permanently deletes a secret. Environment variables referencing the deleted secret's name will no longer resolve to a value. */
export declare const deleteSecret: API.OperationMethod<DeleteSecretRequest, DeleteSecretResponse, DeleteSecretError, RunpodOpContext>;
export type DeleteTemplateError = BadRequest | Forbidden | NotFound | RunpodOpError;
/** Delete a template Permanently deletes a template by ID. Only the template's owner can delete it — public catalog templates return `404` here. Rejected if the template is currently referenced by a pod (see that pod's `template` field) or bound to a serverless endpoint. */
export declare const deleteTemplate: API.OperationMethod<DeleteTemplateRequest, DeleteTemplateResponse, DeleteTemplateError, RunpodOpContext>;
export type GetClusterError = Forbidden | NotFound | RunpodOpError;
/** Get a cluster Returns a single cluster by ID. The pods field is an aggregate summary (total + count by status); fetch the member pods themselves from /v2/clusters/{id}/pods. */
export declare const getCluster: API.OperationMethod<GetClusterRequest, Cluster, GetClusterError, RunpodOpContext>;
export type GetCpuTypeError = Forbidden | NotFound | RunpodOpError;
/** Get a CPU type Returns a single CPU type with pricing. Availability details are included only when requested with include=AVAILABILITY, which requires `product` — stock differs by product context. */
export declare const getCpuType: API.OperationMethod<GetCpuTypeRequest, CpuType, GetCpuTypeError, RunpodOpContext>;
export type GetDataCenterError = Forbidden | NotFound | RunpodOpError;
/** Get a data center Returns a single data center. Availability is included only when requested with include=GPU_AVAILABILITY or include=CPU_AVAILABILITY. */
export declare const getDataCenter: API.OperationMethod<GetDataCenterRequest, DataCenter, GetDataCenterError, RunpodOpContext>;
export type GetEndpointError = Forbidden | NotFound | RunpodOpError;
/** Get a serverless endpoint Returns a single serverless endpoint by ID. */
export declare const getEndpoint: API.OperationMethod<GetEndpointRequest, GetEndpointResponse, GetEndpointError, RunpodOpContext>;
export type GetEndpointBuildError = Forbidden | NotFound | RunpodOpError;
/** Get a serverless endpoint build Returns one of the endpoint's GitHub builds by id, regardless of age — no need to page through `GET /v2/serverless/{id}/builds` to reach it. */
export declare const getEndpointBuild: API.OperationMethod<GetEndpointBuildRequest, Build, GetEndpointBuildError, RunpodOpContext>;
export type GetGpuTypeError = Forbidden | NotFound | RunpodOpError;
/** Get a GPU type Returns a single GPU type with pricing. Availability details are included only when requested with include=AVAILABILITY, which requires `product` — stock differs by product context. */
export declare const getGpuType: API.OperationMethod<GetGpuTypeRequest, GpuType, GetGpuTypeError, RunpodOpContext>;
export type GetNetworkVolumeError = Forbidden | NotFound | RunpodOpError;
/** Get a network volume Returns a single network volume by ID. */
export declare const getNetworkVolume: API.OperationMethod<GetNetworkVolumeRequest, NetworkVolume, GetNetworkVolumeError, RunpodOpContext>;
export type GetPodError = Forbidden | NotFound | RunpodOpError;
/** Get a pod Returns a single pod by ID. */
export declare const getPod: API.OperationMethod<GetPodRequest, GetPodResponse, GetPodError, RunpodOpContext>;
export type GetRegistryError = Forbidden | NotFound | RunpodOpError;
/** Get a container registry credential Returns a single container registry credential by ID. `username` and `password` are never included in the response — credentials are write-only, matching `createRegistry`. */
export declare const getRegistry: API.OperationMethod<GetRegistryRequest, Registry, GetRegistryError, RunpodOpContext>;
export type GetSecretError = Forbidden | NotFound | RunpodOpError;
/** Get a secret Returns a single secret's metadata by ID. The value is write-only and never returned. */
export declare const getSecret: API.OperationMethod<GetSecretRequest, Secret, GetSecretError, RunpodOpContext>;
export type GetSshKeysError = Forbidden | RunpodOpError;
/** List registered SSH public keys Returns the account's registered SSH public keys — the keys provisioned into pods created with `startSsh` and used to authenticate the SSH connections reported in a pod's `ssh` block. */
export declare const getSshKeys: API.OperationMethod<GetSshKeysRequest, SshKeys, GetSshKeysError, RunpodOpContext>;
export type GetTemplateError = Forbidden | NotFound | RunpodOpError;
/** Get a template Returns the full configuration of a single template by ID. Serves both templates you own and public catalog templates — everything you can read. Updates and deletes remain restricted to templates you own. */
export declare const getTemplate: API.OperationMethod<GetTemplateRequest, GetTemplateResponse, GetTemplateError, RunpodOpContext>;
export type ListBillingError = Forbidden | RunpodOpError;
/** Get aggregated billing history Returns time-bucketed total spend across all billable Runpod resources for the authenticated user. Use startTime/endTime with bucketSize for an explicit range, or lastN with bucketSize for the most recent buckets. Each record reports one bucket's total plus pod, serverless, storage, public endpoint, and Instant Cluster cost components. The metadata block echoes the resolved query window, record count, and totals across all returned buckets. */
export declare const listBilling: API.OperationMethod<ListBillingRequest, ListBillingResponse, ListBillingError, RunpodOpContext>;
export type ListClusterBillingError = Forbidden | RunpodOpError;
/** Get cluster billing history Returns Cluster billing history for the authenticated user, split into time buckets by startTime/endTime with bucketSize or by lastN recent buckets. Use clusterId to filter to one cluster; without it, records are emitted per cluster per bucket. Each record includes GPU compute, disk, inter-node networking, and total amounts. Clusters are GPU-only, so no CPU cost component is returned. */
export declare const listClusterBilling: API.OperationMethod<ListClusterBillingRequest, ListClusterBillingResponse, ListClusterBillingError, RunpodOpContext>;
export type ListClusterPodsError = Forbidden | NotFound | RunpodOpError;
/** List a cluster's pods Returns the full member pods of a cluster. The cluster summary (`GET /v2/clusters/{id}`) carries only aggregate pod counts; this endpoint returns each member as a complete Pod object. */
export declare const listClusterPods: API.OperationMethod<ListClusterPodsRequest, PodList, ListClusterPodsError, RunpodOpContext>;
export type ListClustersError = Forbidden | RunpodOpError;
/** List clusters Returns all clusters owned by the authenticated user. */
export declare const listClusters: API.OperationMethod<ListClustersRequest, ListClustersResponse, ListClustersError, RunpodOpContext>;
export type ListCpuTypesError = Forbidden | RunpodOpError;
/** List CPU types Returns available CPU flavors. Availability is included only when requested with include=AVAILABILITY, which requires `product` — stock differs by product context. */
export declare const listCpuTypes: API.OperationMethod<ListCpuTypesRequest, ListCpuTypesResponse, ListCpuTypesError, RunpodOpContext>;
export type ListDataCentersError = Forbidden | RunpodOpError;
/** List data centers Returns available data center locations with region, compliance, supported network volume tiers, and global networking support. Use include=GPU_AVAILABILITY or include=CPU_AVAILABILITY to add per-resource availability arrays to each data center. The regions, networkVolumeTypes, compliance, and globalNetwork query parameters filter the list before it is returned. */
export declare const listDataCenters: API.OperationMethod<ListDataCentersRequest, ListDataCentersResponse, ListDataCentersError, RunpodOpContext>;
export type ListDelegationsError = Forbidden | RunpodOpError;
/** List all ECR delegations */
export declare const listDelegations: API.OperationMethod<ListDelegationsRequest, ListDelegationsResponse, ListDelegationsError, RunpodOpContext>;
export type ListEndpointBillingError = Forbidden | RunpodOpError;
/** Get public endpoint billing history Returns Runpod public endpoint billing history for the authenticated user, split into time buckets by startTime/endTime with bucketSize or by lastN recent buckets. Each record reports the endpoint total for one bucket, and metadata echoes the resolved query window, record count, and total endpoint amount across all returned records. */
export declare const listEndpointBilling: API.OperationMethod<ListEndpointBillingRequest, ListEndpointBillingResponse, ListEndpointBillingError, RunpodOpContext>;
export type ListEndpointBuildsError = Forbidden | NotFound | RunpodOpError;
/** List serverless endpoint builds Returns the endpoint's GitHub build history, newest first (Runpod GitHub-build integration), cursor-paginated; an omitted `limit` defaults to 100, so a bare request returns at most the 100 most recent builds. Any build can also be fetched by id via `GET /v2/serverless/{id}/builds/{buildId}`. Stream a build's logs via `/v2/serverless/{id}/builds/{buildId}/logs`. */
export declare const listEndpointBuilds: API.PaginatedOperationMethod<ListEndpointBuildsRequest, ListEndpointBuildsResponse, ListEndpointBuildsError, RunpodOpContext, Build>;
export type ListEndpointReleasesError = Forbidden | NotFound | RunpodOpError;
/** List serverless endpoint releases Returns the endpoint's release history (newest first) plus a rollout summary of how many workers are running the current version. Each release is a versioned configuration snapshot with a `diff` of what changed; build-driven releases carry a `buildId` (fetch build detail via the builds sub-routes). Releases are cursor-paginated newest-first; an omitted `limit` defaults to 1000. The rollout summary always describes the endpoint's current state, independent of the page requested. */
export declare const listEndpointReleases: API.PaginatedOperationMethod<ListEndpointReleasesRequest, ListEndpointReleasesResponse, ListEndpointReleasesError, RunpodOpContext, Release>;
export type ListEndpointsError = Forbidden | RunpodOpError;
/** List serverless endpoints Returns serverless endpoints owned by the authenticated user, cursor-paginated newest-first; an omitted `limit` defaults to 1000. Follow `pagination.nextCursor` until `hasNextPage` is false. */
export declare const listEndpoints: API.PaginatedOperationMethod<ListEndpointsRequest, ListEndpointsResponse, ListEndpointsError, RunpodOpContext, Endpoint>;
export type ListEndpointWorkersError = Forbidden | NotFound | RunpodOpError;
/** List serverless endpoint workers Lists the active workers for a serverless endpoint. **Returns.** A `200` with a `ListEndpointWorkersResponse`: a `workers` array (one entry per active worker, each carrying its `id`, `status`, and runtime details) plus a `summary` of worker counts grouped by status. Only currently active workers are included; scaled-down workers are not returned. **How `status` is determined.** Each worker's `status` is derived by reconciling the worker pod's lifecycle status with the endpoint's live job-queue view (which workers are actively serving requests). When the job-queue view is unavailable, the response degrades gracefully: the shape is unchanged, but each `status` and the summary counts fall back to pod lifecycle alone. */
export declare const listEndpointWorkers: API.OperationMethod<ListEndpointWorkersRequest, ListEndpointWorkersResponse, ListEndpointWorkersError, RunpodOpContext>;
export type ListGpuTypesError = Forbidden | RunpodOpError;
/** List GPU types Returns available GPU types with pricing. Availability is included only when requested with include=AVAILABILITY, which requires `product` — stock differs by product context. With countryCodes, the list is narrowed to GPU types deployable in those countries, so "this geography + this chip" resolves in one read. */
export declare const listGpuTypes: API.OperationMethod<ListGpuTypesRequest, ListGpuTypesResponse, ListGpuTypesError, RunpodOpContext>;
export type ListNetworkVolumeBillingError = Forbidden | RunpodOpError;
/** Get network volume billing history Returns network volume billing history for the authenticated user, split into time buckets by startTime/endTime with bucketSize or by lastN recent buckets. Use networkVolumeId to filter to one volume; without it, records are emitted per volume per bucket. Each record includes standard storage, high-performance storage, and total amounts, while metadata reports the resolved query, distinct volume count, and totals across the returned records. */
export declare const listNetworkVolumeBilling: API.OperationMethod<ListNetworkVolumeBillingRequest, ListNetworkVolumeBillingResponse, ListNetworkVolumeBillingError, RunpodOpContext>;
export type ListNetworkVolumesError = Forbidden | RunpodOpError;
/** List network volumes Returns all network volumes owned by the authenticated user. */
export declare const listNetworkVolumes: API.OperationMethod<ListNetworkVolumesRequest, ListNetworkVolumesResponse, ListNetworkVolumesError, RunpodOpContext>;
export type ListPodBillingError = Forbidden | RunpodOpError;
/** Get pod billing history Returns pod-only billing detail for the authenticated user, split into time buckets by startTime/endTime with bucketSize or by lastN recent buckets. Use podId to narrow the response to one GPU or CPU pod; without it, records are emitted per pod per bucket. Each record includes podId, GPU, CPU, disk, and total amounts, while metadata echoes the resolved query and totals across the pod records. Use listBilling when you need aggregate spend across every billable resource family. */
export declare const listPodBilling: API.OperationMethod<ListPodBillingRequest, ListPodBillingResponse, ListPodBillingError, RunpodOpContext>;
export type ListPodsError = Forbidden | RunpodOpError;
/** List pods Returns pods owned by the authenticated user. Cluster member pods are excluded by default; set `includeClusterPods=true` to include them (each carries a non-null `cluster` membership block). Results are cursor-paginated newest-first; an omitted `limit` defaults to 1000. When cluster member pods are excluded, the exclusion applies to each page after it is cut, so a page may hold fewer than `limit` pods — follow `pagination.nextCursor` until `hasNextPage` is false rather than counting items. */
export declare const listPods: API.PaginatedOperationMethod<ListPodsRequest, ListPodsResponse, ListPodsError, RunpodOpContext, Pod>;
export type ListPublicTemplatesError = Forbidden | RunpodOpError;
/** List public templates Returns the public template catalog. `source` selects which slice: `official` (the default) is Runpod-curated templates, `verified` is community templates Runpod has verified, and `community` is everything else other users have shared publicly. Both pod and serverless templates appear — use each entry's `serverless` flag to tell them apart. `registry` is always null for templates you don't own. Your own templates (public or private) are managed under `/v2/templates`; fetch any individual template — catalog or owned — via `/v2/templates/{id}`. At most 100 templates are returned. Cursor pagination is not yet supported here; `pagination` is always the exhausted marker (`nextCursor: null`, `hasNextPage: false`). */
export declare const listPublicTemplates: API.OperationMethod<ListPublicTemplatesRequest, TemplateList, ListPublicTemplatesError, RunpodOpContext>;
export type ListRegistriesError = Forbidden | RunpodOpError;
/** List container registries Returns all container registry credentials owned by the authenticated user. */
export declare const listRegistries: API.OperationMethod<ListRegistriesRequest, ListRegistriesResponse, ListRegistriesError, RunpodOpContext>;
export type ListSecretsError = Forbidden | RunpodOpError;
/** List secrets Returns the account's secrets — encrypted strings referenced from pod, serverless, and template environment variables with the `{{ RUNPOD_SECRET_<name> }}` placeholder syntax, substituted with the secret's value when the pod or worker boots. Secret values are write-only and are never returned. */
export declare const listSecrets: API.OperationMethod<ListSecretsRequest, ListSecretsResponse, ListSecretsError, RunpodOpContext>;
export type ListServerlessBillingError = Forbidden | RunpodOpError;
/** Get serverless billing history Returns serverless endpoint billing detail for the authenticated user, split into time buckets by startTime/endTime with bucketSize or by lastN recent buckets. Use serverlessId to filter to one endpoint; without it, records are emitted per serverless endpoint per bucket. Each record reports endpoint-level GPU, CPU, disk, and total amounts. This is distinct from pod billing, which covers standalone GPU and CPU pod costs rather than serverless endpoint workloads. */
export declare const listServerlessBilling: API.OperationMethod<ListServerlessBillingRequest, ListServerlessBillingResponse, ListServerlessBillingError, RunpodOpContext>;
export type ListTemplatesError = Forbidden | RunpodOpError;
/** List templates Returns templates owned by the authenticated user (including team/organization-scoped ones), cursor-paginated; an omitted `limit` defaults to 1000. Follow `pagination.nextCursor` until `hasNextPage` is false. */
export declare const listTemplates: API.PaginatedOperationMethod<ListTemplatesRequest, ListTemplatesResponse, ListTemplatesError, RunpodOpContext, Template>;
export type PodAction2Error = BadRequest | Forbidden | NotFound | Conflict | UnprocessableEntity | RunpodOpError;
/** Trigger a pod state transition Triggers a state transition on a pod. Send a JSON body with a single `action` field, e.g. `{ "action": "stop" }`. Valid actions: - `start` — boot a stopped pod (`EXITED` or `ERROR`) back toward `RUNNING`. - `stop` — stop a running or provisioning pod, releasing GPU/CPU compute while keeping its disk. The pod moves to `EXITED`. - `restart` — restart a `RUNNING` pod's container in place. - `terminate` — permanently delete the pod and release its resources (equivalent to `deletePod`). Which actions are valid depends on the pod's current status, and the currently permitted set is published in the pod's `actions` field: `RUNNING` allows `stop`/`restart`/`terminate`; `EXITED` and `ERROR` allow `start`/`terminate`; `PROVISIONING` and `STARTING` allow `stop`/`terminate`. `start`, `stop`, and `restart` return `200` with the updated pod. `terminate` returns `204` with no body. Requesting an action that is not valid for the pod's current status returns `409`. */
export declare const podAction2: API.OperationMethod<PodActionRequest, PodActionResponse, PodAction2Error, RunpodOpContext>;
export type RevokeDelegationError = Forbidden | NotFound | RunpodOpError;
/** Revoke an ECR delegation */
export declare const revokeDelegation: API.OperationMethod<RevokeDelegationRequest, RevokeDelegationResponse, RevokeDelegationError, RunpodOpContext>;
export type UpdateClusterError = BadRequest | Forbidden | NotFound | UnprocessableEntity | RunpodOpError;
/** Rename a cluster Renames a cluster. This endpoint only changes the cluster name — compute shape, type, and container configuration are fixed at creation and cannot be updated. */
export declare const updateCluster: API.OperationMethod<UpdateClusterRequest, Cluster, UpdateClusterError, RunpodOpContext>;
export type UpdateEndpointError = BadRequest | Forbidden | NotFound | UnprocessableEntity | RunpodOpError;
/** Update a serverless endpoint Partially updates a serverless endpoint. This is a PATCH: only the fields present in the body are changed; omitted fields are left untouched. See `UpdateEndpointRequest` for the full body. Mutable fields: `name`, `gpu`, `cpu`, `workers` (`min`/`max`), `scaling` (`type`/`value`/`idleTimeout`), `dataCenterIds`, `networkVolumes`, `timeout`, `flashboot`, and the container settings (`image`, `args`, `disk`, `ports`, `env`, `registry`). Omitted compute preserves the current selection. `cpu` completely replaces a CPU endpoint's selection; compute family is immutable. `gpu` on CPU, `cpu` on GPU, or both fields returns 400. Returns `200` with the full updated endpoint. Effect timing differs by field: scaling and worker-bound settings (`workers`, `scaling`, `timeout`) are applied to the autoscaler promptly, while container-affecting changes (e.g. `image`, `env`) create a new endpoint release that rolls out as workers cycle — in-flight workers keep the previous version until they are replaced. Track rollout via `listEndpointReleases`. */
export declare const updateEndpoint: API.OperationMethod<UpdateEndpointRequest, UpdateEndpointResponse, UpdateEndpointError, RunpodOpContext>;
export type UpdateNetworkVolumeError = BadRequest | Forbidden | NotFound | UnprocessableEntity | RunpodOpError;
/** Update a network volume Updates mutable fields on a network volume. Only provided fields are changed. Note: `size` may only increase; attempts to reduce size will be rejected. */
export declare const updateNetworkVolume: API.OperationMethod<UpdateNetworkVolumeRequest, NetworkVolume, UpdateNetworkVolumeError, RunpodOpContext>;
export type UpdatePodError = BadRequest | Forbidden | NotFound | Conflict | UnprocessableEntity | RunpodOpError;
/** Update a pod Partially updates a pod's configuration. This is a PATCH: only the fields present in the body are changed, and omitted fields are left untouched. Use empty values only when you explicitly mean to clear a field (for example, set `registry` to `null` or set `ports` to `[]`). See `UpdatePodRequest` for the full body. Mutable fields: `name`, `image`, `args`, `disk`, `ports`, `env`, `registry`, `mounts`, `locked`, and `globalNetworking`. Some changes apply immediately while others (e.g. `globalNetworking`) take effect on the pod's next start/restart, as noted on the individual fields. Pods that belong to a Cluster cannot be updated here — manage them through `/v2/clusters/{id}`. Returns `200` with the full updated pod. */
export declare const updatePod: API.OperationMethod<UpdatePodRequest, UpdatePodResponse, UpdatePodError, RunpodOpContext>;
export type UpdateSecretError = BadRequest | Forbidden | NotFound | UnprocessableEntity | RunpodOpError;
/** Update a secret Rotates a secret's value and/or updates its description. Only the provided fields are changed and at least one field is required; the `name` is immutable. Pods and workers receive the new value at their next boot — running instances keep the value they were started with. When both fields are sent, the value is applied first, then the description. The two updates are not atomic: if the description update fails after the value was rotated, the response is an error but the new value has already taken effect. Send the fields in separate requests when that partial outcome matters. */
export declare const updateSecret: API.OperationMethod<UpdateSecretRequest, Secret, UpdateSecretError, RunpodOpContext>;
export type UpdateSshKeysError = Forbidden | UnprocessableEntity | RunpodOpError;
/** Replace registered SSH public keys Replaces the account's full set of registered SSH public keys. Existing keys not present in the request are removed; send `[]` to remove all keys. Keys take effect for pods created afterwards with `startSsh` — running pods are not updated. */
export declare const updateSshKeys: API.OperationMethod<UpdateSshKeysRequest, SshKeys, UpdateSshKeysError, RunpodOpContext>;
export type UpdateTemplateError = BadRequest | Forbidden | NotFound | UnprocessableEntity | RunpodOpError;
/** Update a template Partially updates a template. This is a PATCH: only the fields present in the body are changed; omitted fields are left untouched. See `UpdateTemplateRequest` for the full body. Mutable fields: `name`, `image`, `args`, `disk`, `ports`, `env`, `registry`, `mounts`, `serverless`, `public`, and `category`. Only the template's owner can update it (authenticated via the request's API key); public catalog templates are readable via GET but return `404` here. Returns `200` with the full updated template. Pods and endpoints already created from this template are not changed retroactively — the template is a snapshot applied at creation time. */
export declare const updateTemplate: API.OperationMethod<UpdateTemplateRequest, UpdateTemplateResponse, UpdateTemplateError, RunpodOpContext>;
