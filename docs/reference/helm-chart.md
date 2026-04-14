---
sidebar_label: Helm Chart
---

# Helm Chart Reference

The `zen-agent` Helm chart deploys the Zen Mesh edge stack (agent, egress, zen-lock) into your Kubernetes cluster.

## Installation

```bash
helm repo add zenmesh https://zenmesh.github.io/helm-charts
helm repo update

helm upgrade --install zen-agent zenmesh/zen-agent \
  --namespace zen-mesh \
  --create-namespace \
  --set saas.endpoint="https://api.zen-mesh.io" \
  --set agent.enrollment.secretRef.name="zen-enrollment-bundle"
```

## Values

### Global

| Parameter | Default | Description |
|-----------|---------|-------------|
| `saas.endpoint` | `https://api.zen-mesh.io` | Control plane API endpoint |
| `imagePullSecrets` | `[]` | Secrets for pulling images from private registries |

### Agent

| Parameter | Default | Description |
|-----------|---------|-------------|
| `agent.image.repository` | `zenmesh/zen-agent` | Container image |
| `agent.image.tag` | Chart appVersion | Container image tag |
| `agent.replicas` | `1` | Number of agent replicas |
| `agent.resources.requests.cpu` | `100m` | CPU request |
| `agent.resources.requests.memory` | `128Mi` | Memory request |
| `agent.resources.limits.cpu` | `500m` | CPU limit |
| `agent.resources.limits.memory` | `256Mi` | Memory limit |
| `agent.enrollment.secretRef.name` | — | Name of enrollment Secret (required) |
| `agent.enrollment.secretRef.namespace` | Release namespace | Namespace of enrollment Secret |

### Egress

| Parameter | Default | Description |
|-----------|---------|-------------|
| `egress.enabled` | `true` | Deploy zen-egress |
| `egress.image.repository` | `zenmesh/zen-egress` | Container image |
| `egress.image.tag` | Chart appVersion | Container image tag |
| `egress.replicas` | `1` | Number of egress replicas |
| `egress.tls.enabled` | `true` | Enable mTLS to bridge |

### zen-lock

| Parameter | Default | Description |
|-----------|---------|-------------|
| `zenLock.enabled` | `true` | Deploy zen-lock |
| `zenLock.image.repository` | `zenmesh/zen-lock` | Container image |

## Example: Production Values

```yaml
# values-production.yaml
saas:
  endpoint: "https://api.zen-mesh.io"

agent:
  replicas: 2
  resources:
    requests:
      cpu: 200m
      memory: 256Mi
    limits:
      cpu: "1"
      memory: 512Mi

egress:
  enabled: true
  replicas: 2
  tls:
    enabled: true

zenLock:
  enabled: true
```

```bash
helm upgrade --install zen-agent zenmesh/zen-agent \
  --namespace zen-mesh \
  -f values-production.yaml
```
