---
sidebar_label: CLI
---

# CLI Reference

:::info
The Zen Mesh CLI is under development. Most operations are currently performed through the dashboard and Helm charts.
:::

## Commands (Planned)

### `zen-mesh enroll`

Generate an enrollment bundle for a cluster.

```bash
zen-mesh enroll --cluster my-cluster --endpoint https://api.zen-mesh.io
```

### `zen-mesh status`

Check the enrollment and delivery status of your cluster.

```bash
zen-mesh status
```

### `zen-mesh destinations list`

List all configured destinations.

```bash
zen-mesh destinations list
```

### `zen-mesh deliveries list`

Show recent delivery history.

```bash
zen-mesh deliveries list --last 1h --status failed
```
