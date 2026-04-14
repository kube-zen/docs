---
sidebar_label: Backups
---

# Backups

Zen Mesh state is split between the control plane (SaaS-managed) and your cluster (locally managed).

## What Needs Backing Up

### Control Plane (Managed by Zen Mesh)

Tenant configuration, API keys, destination settings, and delivery history are stored in CockroachDB and automatically backed up. No action needed on your side.

### Edge Plane (Your Responsibility)

| Resource | How to Back Up |
|----------|---------------|
| Helm values | `helm get values zen-agent -n zen-mesh > values-backup.yaml` |
| zen-lock CRDs | `kubectl get zenlocks -n zen-mesh -o yaml > zenlocks-backup.yaml` |
| Adapter configs | Stored in dashboard — export via API |

## Restoring

### Helm Values

```bash
helm upgrade --install zen-agent zenmesh/zen-agent \
  --namespace zen-mesh \
  -f values-backup.yaml
```

### zen-lock CRDs

```bash
kubectl apply -f zenlocks-backup.yaml
```

:::warning
Enrollment bundles cannot be restored — they are single-use and time-limited. If you lose your cluster, generate a new enrollment bundle from the dashboard.
:::
