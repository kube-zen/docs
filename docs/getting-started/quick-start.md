---
sidebar_label: Quick Start
---

# Quick Start

Get webhooks flowing to your private network in under 5 minutes.

## Prerequisites

- A [Zen Mesh account](https://zen-mesh.io) (free tier available)
- A Kubernetes cluster (any version 1.24+)
  - **Don't have K8s?** Use the one-command k3s installer (coming soon)
- `helm` CLI installed

## Step 1: Create a Cluster

1. Sign in to the [Zen Mesh dashboard](https://app.zen-mesh.io)
2. Navigate to **Clusters** in the sidebar
3. Click **Add Cluster** and give it a name (e.g., `production`)
4. Click **Create**

## Step 2: Get the Install Command

1. In the clusters list, find your new cluster
2. Click **Get install command**
3. The enrollment bundle modal will appear with a single command

The command looks like:

```bash
# Step 1: Apply enrollment secret
kubectl apply -f - <<'ENROLLMENT_SECRET'
apiVersion: v1
kind: Secret
metadata:
  name: zen-enrollment-bundle
  namespace: zen-mesh
type: Opaque
data:
  enrollment_bundle: <base64-encoded-bundle>
ENROLLMENT_SECRET

# Step 2: Install or upgrade the agent
helm repo add zenmesh https://zenmesh.github.io/helm-charts || true
helm repo update

helm upgrade --install zen-agent zenmesh/zen-agent \
  --namespace zen-mesh \
  --create-namespace \
  --set saas.endpoint="https://api.zen-mesh.io" \
  --set agent.enrollment.secretRef.name="zen-enrollment-bundle"
```

Click **Copy all** and paste into your terminal.

## Step 3: Run the Command

Run the command on any machine with `kubectl` access to your cluster.

The agent will:
1. Read the enrollment bundle
2. Register with the control plane
3. Start watching for delivery targets in your cluster

Your cluster status will change to **Connected** in the dashboard.

## Step 4: Create a Destination

1. In the dashboard, navigate to **Destinations**
2. Click **Add Destination**
3. Enter the URL of the service in your cluster you want to receive webhooks
4. Select your cluster as the delivery target

## Step 5: Point Your Webhook Source

Copy the ingester URL from your destination and configure your webhook source:

- **Stripe**: Settings → Webhooks → Add endpoint
- **GitHub**: Repository → Settings → Webhooks → Add webhook
- **Shopify**: Settings → Notifications → Create webhook

Use the URL provided by Zen Mesh (e.g., `https://ingest.zen-mesh.io/hooks/<hook-id>`).

## Step 6: Verify

Trigger a test event from your webhook source. You should see it appear in the **Deliveries** view in the dashboard, and your service should receive the payload.

## Next Steps

- [Set up adapters](../guides/adapters) for Splunk, PagerDuty, Grafana, Teams, and more
- [Configure delivery modes](../architecture/delivery-modes) for your network topology
- [Set up monitoring](../guides/monitoring) with built-in Prometheus metrics
