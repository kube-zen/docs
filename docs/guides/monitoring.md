---
sidebar_label: Monitoring
---

# Monitoring

Zen Mesh provides built-in Prometheus metrics and Grafana dashboards for observability.

## Built-in Metrics

### Data Plane Metrics

| Metric | Type | Description |
|--------|------|-------------|
| `zen_bridge_events_total` | Counter | Total events routed through the bridge |
| `zen_bridge_delivery_duration_seconds` | Histogram | End-to-end delivery latency |
| `zen_bridge_deliveries_failed_total` | Counter | Failed delivery attempts |
| `zen_bridge_dlq_size` | Gauge | Current dead letter queue depth |

### Edge Plane Metrics

| Metric | Type | Description |
|--------|------|-------------|
| `zen_agent_enrollment_status` | Gauge | Agent enrollment state (0=unenrolled, 1=enrolled) |
| `zen_egress_connections_active` | Gauge | Active mTLS connections to bridge |
| `zen_egress_events_delivered_total` | Counter | Events delivered to local targets |

### Infrastructure Metrics

| Metric | Type | Description |
|--------|------|-------------|
| `zen_lock_decryptions_total` | Counter | Secret decryption operations |
| `zen_lock_decryption_duration_seconds` | Histogram | Decryption latency |

## Grafana Dashboards

Zen Mesh includes pre-built Grafana dashboards:

- **Overview**: Cluster health, delivery rates, error rates
- **Per-Cluster**: Individual cluster enrollment, agent status, egress throughput
- **Delivery**: Per-destination success rates, latency percentiles, retry counts

Import the dashboards from the [helm-charts](https://github.com/zenmesh/helm-charts) repository.

## Alerts

Built-in Prometheus alert rules cover:

- Agent disconnection (cluster offline)
- Delivery failure rate exceeding threshold
- DLQ depth exceeding limit
- Certificate rotation failures
- Backpressure activation

## Health Endpoints

Each component exposes a `/healthz` endpoint:

```bash
kubectl get --raw /api/v1/namespaces/zen-mesh/services/zen-agent/healthz
```

Responses include component version, uptime, and last successful heartbeat.
