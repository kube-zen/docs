---
sidebar_label: Upgrades
---

# Upgrades

Zen Mesh uses Helm for upgrades. Always check the changelog before upgrading.

## Standard Upgrade

```bash
helm repo update
helm upgrade zen-agent zenmesh/zen-agent \
  --namespace zen-mesh \
  --reuse-values
```

## Rolling Upgrade

Helm performs a rolling upgrade by default. The agent and egress pods are replaced one at a time, ensuring continuous delivery.

## Pre-Upgrade Checklist

- [ ] Review the [changelog](https://github.com/zenmesh/helm-charts/releases) for breaking changes
- [ ] Back up your configuration: `helm get values zen-agent -n zen-mesh > values-backup.yaml`
- [ ] Verify cluster health: all pods in `zen-mesh` namespace are `Running`

## Rollback

If an upgrade causes issues:

```bash
helm rollback zen-agent <revision> --namespace zen-mesh
```

To find the previous revision:

```bash
helm history zen-agent --namespace zen-mesh
```

## Version Compatibility

| zen-agent | zen-back (Control Plane) | Notes |
|-----------|--------------------------|-------|
| 0.3.x | 0.3.x | Current |
| 0.2.x | 0.2.x | Supported |
| < 0.2.x | — | Upgrade to 0.2.x first |
