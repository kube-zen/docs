---
sidebar_label: First Webhook
---

# Your First Webhook

Walk through delivering a real webhook from Stripe (or any HTTP source) to a service running in your private Kubernetes cluster.

## Target Service

Create a simple webhook receiver in your cluster:

```bash
kubectl create deployment webhook-echo \
  --image=hashicorp/http-echo \
  --namespace zen-mesh \
  -- --listen=:8080 --text="webhook received!"

kubectl expose deployment webhook-echo \
  --port=8080 \
  --namespace zen-mesh
```

This creates an HTTP service that returns "webhook received!" on any request.

## Create a Destination in Zen Mesh

1. Go to **Destinations** in the dashboard
2. Click **Add Destination**
3. Fill in:
   - **Name**: `my-first-destination`
   - **URL**: `http://webhook-echo:8080/webhooks`
   - **Cluster**: Select your connected cluster
4. Click **Save**

Zen Mesh will give you an ingestion URL like:
```
https://ingest.zen-mesh.io/hooks/<hook-id>
```

## Configure Your Webhook Source

### Stripe

1. Go to Stripe Dashboard → Developers → Webhooks
2. Click **Add endpoint**
3. Paste the Zen Mesh ingestion URL
4. Select events: `payment_intent.succeeded`, `invoice.paid`
5. Click **Create endpoint**

### GitHub

1. Go to your repository → Settings → Webhooks → Add webhook
2. Paste the Zen Mesh ingestion URL
3. Content type: `application/json`
4. Select events: `push`, `pull_request`
5. Click **Add webhook**

### Generic cURL Test

```bash
curl -X POST "https://ingest.zen-mesh.io/hooks/<hook-id>" \
  -H "Content-Type: application/json" \
  -d '{"event": "test", "data": "hello from zen-mesh"}'
```

## Verify Delivery

1. Go to **Deliveries** in the dashboard
2. You should see the event with a **200** or **Delivered** status
3. Check the pod logs:

```bash
kubectl logs -n zen-mesh -l app=webhook-echo --tail=20
```

You should see the request logged.

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Cluster shows "Not Connected" | Check agent logs: `kubectl logs -n zen-mesh -l app=zen-agent` |
| Delivery shows "Failed" | Check destination URL is reachable from within the cluster |
| Events not appearing | Verify the hook URL is correct and the source is sending events |
