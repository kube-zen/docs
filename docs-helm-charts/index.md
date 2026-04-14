---
slug: /
title: Helm Charts
sidebar_label: Overview
---

# Zen Mesh Helm Charts

Official Helm charts for deploying Zen Mesh components into your Kubernetes cluster.

## Repository

```bash
helm repo add zenmesh https://zenmesh.github.io/helm-charts
helm repo update
```

## Available Charts

| Chart | Description |
|-------|-------------|
| **zen-agent** | Edge agent + egress + zen-lock. The main chart customers use. |
| **zen-suite** | Umbrella chart that installs zen-agent + zen-ingester + zen-egress + zen-lock. For advanced setups. |

### Which Chart Should I Use?

- **Most customers**: Use `zen-agent`. It's the standard install — agent, egress, and zen-lock in one chart.
- **Advanced/self-hosted ingester**: Use `zen-suite` if you want to run your own ingester alongside the edge components.

## Quick Install

```bash
helm upgrade --install zen-agent zenmesh/zen-agent \
  --namespace zen-mesh \
  --create-namespace \
  --set saas.endpoint="https://api.zen-mesh.io" \
  --set agent.enrollment.secretRef.name="zen-enrollment-bundle"
```

See [zen-agent chart](./zen-agent) for full values reference.

## Chart Sources

Charts are published on GitHub: [zenmesh/helm-charts](https://github.com/zenmesh/helm-charts)
