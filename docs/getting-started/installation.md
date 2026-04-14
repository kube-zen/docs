---
sidebar_label: Installation
---

# Installation

Zen Mesh installs into your Kubernetes cluster via Helm. The agent runs as a Deployment and handles enrollment, delivery routing, and adapter synchronization.

## Requirements

| Requirement | Version |
|-------------|---------|
| Kubernetes | 1.24+ |
| Helm | 3.8+ |

## Install with Helm

### 1. Add the Helm repository

```bash
helm repo add zenmesh https://zenmesh.github.io/helm-charts
helm repo update
```

### 2. Install the agent

```bash
helm upgrade --install zen-agent zenmesh/zen-agent \
  --namespace zen-mesh \
  --create-namespace \
  --set saas.endpoint="https://api.zen-mesh.io" \
  --set agent.enrollment.secretRef.name="zen-enrollment-bundle"
```

You need the enrollment secret from the dashboard first. See the [quick start guide](./quick-start) for the full flow.

## What Gets Installed

The Helm chart deploys:

| Component | Type | Purpose |
|-----------|------|---------|
| `zen-agent` | Deployment | Enrollment, agent heartbeat, config sync |
| `zen-egress` | Deployment | Delivers events to local services via mTLS |
| `zen-lock` | Controller + Webhook | Zero-knowledge secret management |
| `zen-ingester` | (Optional) | Local event intake for Mode A delivery |

## Namespace

All components install into the `zen-mesh` namespace by default. You can override:

```bash
helm upgrade --install zen-agent zenmesh/zen-agent \
  --namespace my-custom-namespace \
  --create-namespace \
  --set saas.endpoint="https://api.zen-mesh.io"
```

## Upgrading

```bash
helm repo update
helm upgrade zen-agent zenmesh/zen-agent \
  --namespace zen-mesh \
  --reuse-values
```

## Uninstalling

```bash
helm uninstall zen-agent --namespace zen-mesh
kubectl delete namespace zen-mesh
```

:::warning
Uninstalling removes all Zen Mesh components. Delivery targets in this cluster will stop receiving webhooks.
:::
