---
sidebar_label: Troubleshooting
---

# Troubleshooting

Common issues and their solutions.

## Cluster Won't Connect

### Agent shows "Not Connected"

**Check agent logs:**
```bash
kubectl logs -n zen-mesh -l app=zen-agent --tail=50
```

**Common causes:**
- Network: Agent needs outbound HTTPS to `api.zen-mesh.io`
- Expired bundle: Regenerate from the dashboard
- Wrong cluster ID: Verify the bundle matches the cluster in the dashboard

## Delivery Failures

### Events showing "Failed" in dashboard

1. Check the delivery details for the error message
2. Verify the destination URL is reachable from within the cluster:
   ```bash
   kubectl run curl-test --image=curlimages/curl -it --rm -- \
     curl -v http://your-service:8080/webhooks
   ```
3. Check egress logs:
   ```bash
   kubectl logs -n zen-mesh -l app=zen-egress --tail=50
   ```

### Intermittent Failures

- **Target service overloaded**: Check target service metrics
- **Backpressure active**: Zen Mesh is throttling to protect the target. Check `zen_bridge_backpressure_active` metric
- **mTLS certificate issue**: Check zen-lock is running and certificates are valid

## Enrollment Issues

### Bundle expired before use

Generate a new bundle from the dashboard. Bundles expire after 30 minutes.

### mTLS handshake failure

```bash
# Check zen-lock status
kubectl get pods -n zen-mesh -l app=zen-lock
kubectl logs -n zen-mesh -l app=zen-lock --tail=20

# Check certificate rotation
kubectl get certificates -n zen-mesh
```

## Performance Issues

### High delivery latency

1. Check bridge metrics: `zen_bridge_delivery_duration_seconds`
2. Check egress connection pool: `zen_egress_connections_active`
3. Check target service response times

### High memory usage

Default resource limits may be too low for high-throughput workloads. Increase via Helm values:

```yaml
agent:
  resources:
    limits:
      memory: 512Mi
egress:
  resources:
    limits:
      memory: 512Mi
```

## Getting More Help

- **Discord**: [Join the community](https://discord.com/invite/clawd)
- **GitHub Issues**: [zen-platform](https://github.com/zenmesh/zen-platform/issues)
- **Dashboard**: Check the delivery logs for detailed error messages
