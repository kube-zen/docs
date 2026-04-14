---
sidebar_label: Configuration
---

# Configuration

Zen Mesh components are configured via Helm values, environment variables, and CRDs.

## Environment Variables

### Agent

| Variable | Default | Description |
|----------|---------|-------------|
| `ZEN_SAAS_ENDPOINT` | `https://api.zen-mesh.io` | Control plane API endpoint |
| `ZEN_CLUSTER_ID` | — | Cluster ID (set during enrollment) |
| `ZEN_TENANT_ID` | — | Tenant ID (extracted from enrollment bundle) |
| `ZEN_LOG_LEVEL` | `info` | Log level: `debug`, `info`, `warn`, `error` |

### Egress

| Variable | Default | Description |
|----------|---------|-------------|
| `ZEN_BRIDGE_ENDPOINT` | — | Bridge address for mTLS connection |
| `ZEN_TLS_ENABLED` | `true` | Enable mTLS to bridge |
| `ZEN_HMAC_ENFORCE` | `true` | Enforce HMAC validation on delivered events |

### Back (Control Plane)

| Variable | Default | Description |
|----------|---------|-------------|
| `DATABASE_URL` | — | CockroachDB connection string |
| `REDIS_URL` | — | Redis connection string |
| `ENVIRONMENT` | `sandbox` | `sandbox`, `staging`, `production` |
| `TLS_ENABLED` | `false` | Require TLS for all connections (must be `true` in production) |

## CRDs

### DeliveryFlow

Defines how events are routed from an ingester to a destination.

### Destination

A delivery target (URL + cluster + adapter mapping).

### EndpointConfig

Configuration for delivery endpoints (timeouts, retries, headers).

### Ingester

An event intake point with its routing rules.

## Feature Flags

Feature flags are controlled via the control plane configuration:

| Flag | Description |
|------|-------------|
| `delivery.mode_c` | Enable Mode C (relay) delivery |
| `enrollment.bundle_ttl` | Enrollment bundle time-to-live (minutes) |
| `delivery.retry_max` | Maximum delivery retry attempts |
| `delivery.backpressure_threshold` | Events queued before backpressure activates |
