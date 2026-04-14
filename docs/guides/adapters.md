---
sidebar_label: Adapters
---

# Adapters

Adapters connect Zen Mesh delivery targets to external services. When an event arrives at your cluster, an adapter transforms it into the format the target service expects.

## Supported Adapters

### Splunk

Deliver webhook events to Splunk HTTP Event Collector (HEC).

- **Delivery**: Push events as Splunk HEC payloads
- **Format**: CloudEvents → Splunk event format
- **Auth**: HEC token stored in zen-lock

### PagerDuty

Create PagerDuty incidents from webhook events.

- **Delivery**: POST to PagerDuty Events API v2
- **Format**: CloudEvents → PagerDuty event envelope
- **Features**: Automatic deduplication via `dedup_key`

### Grafana

Forward events to Grafana OnCall or Grafana Alerting webhooks.

- **Delivery**: POST to Grafana webhook endpoint
- **Format**: CloudEvents → Grafana alert payload
- **Features**: Severity mapping, group/label extraction

### Microsoft Teams

Send adaptive card notifications to Teams channels.

- **Delivery**: POST to Microsoft Teams incoming webhook
- **Format**: CloudEvents → Teams Adaptive Card
- **Features**: Channel-specific formatting, action buttons

## Creating an Adapter

1. Navigate to **Adapters** in the dashboard
2. Click **Add Adapter**
3. Select the adapter type
4. Configure the connection (URL, auth token, etc.)
5. Map delivery targets to the adapter

## Adapter Configuration

All adapter secrets (API keys, tokens) are stored in [zen-lock](/zen-lock/) with zero-knowledge encryption. They are never stored in plaintext.

## Custom Adapters

Zen Mesh supports custom adapters via a generic webhook adapter. Configure any HTTP endpoint as a target, and Zen Mesh will deliver CloudEvents payloads to it.

```yaml
# Example: Custom adapter via Helm values
adapter:
  type: webhook
  endpoint: https://your-service.internal/webhooks
  headers:
    Authorization: "Bearer ${SECRET_NAME}"
  secretRef:
    name: my-adapter-credentials
```
