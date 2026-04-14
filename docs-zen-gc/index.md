---
slug: /
title: zen-gc Documentation
sidebar_label: Home
---

# zen-gc

**Kubernetes garbage collection for any resource.**

zen-gc automatically cleans up any Kubernetes resource based on TTL policies — not just Jobs. ConfigMaps, Secrets, Pods, CRDs, anything.

:::info
Full documentation coming soon. See the [GitHub repo](https://github.com/zenmesh/zen-gc) for current details.
:::

## Quick Reference

```bash
# Install
helm repo add zenmesh https://zenmesh.github.io/helm-charts
helm install zen-gc zenmesh/zen-gc --namespace zen-gc --create-namespace

# Apply a TTL policy
cat <<EOF | kubectl apply -f -
apiVersion: gc.zen-mesh.io/v1alpha1
kind: GarbageCollectionPolicy
metadata:
  name: cleanup-stale-configmaps
  namespace: my-app
spec:
  TTL: "24h"
  matchLabels:
    gc.zen-mesh.io/auto-cleanup: "true"
EOF
```
