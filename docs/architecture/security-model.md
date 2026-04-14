---
sidebar_label: Security Model
---

# Security Model

Zen Mesh is designed for security-critical webhook delivery. Every internal path uses strong encryption, and the control plane never sees event payloads.

## Trust Chain

Trust originates from **enrollment**, never from configuration:

1. You generate an enrollment bundle in the dashboard
2. The bundle is applied to your cluster
3. zen-agent uses the bundle to prove identity to the control plane
4. mTLS certificates are issued via SPIFFE/SPIRE
5. All subsequent communication uses certificate-based identity

No manual API keys, no shared secrets, no IP allowlists. Identity is cryptographic and short-lived.

## Encryption Layers

| Layer | Protocol | Purpose |
|-------|----------|---------|
| Source → Ingester | TLS 1.3 | Encrypt events in transit from webhook sources |
| Bridge → Egress | mTLS | Mutual authentication between data plane and edge |
| Egress → Target | mTLS | Secure delivery to your private services |
| Control Plane ↔ Agent | mTLS | Enrollment and config sync |
| Secrets at Rest | age encryption | Zero-knowledge storage via zen-lock |

## HMAC Replay Protection

Every event delivered through the data plane includes an HMAC-SHA256 signature. This prevents:

- **Replay attacks**: Duplicate events are detected and rejected
- **Tampering**: Any modification invalidates the signature
- **Spoofing**: Only authenticated sources can produce valid signatures

## SPIFFE/SPIRE Workload Identity

Zen Mesh uses SPIFFE/SPIRE for workload identity:

- Every component gets a SPIFFE ID (e.g., `spiffe://zen-mesh.io/ingester/us-east-1`)
- mTLS certificates are automatically rotated
- Access policies are expressed in terms of SPIFFE identities

## RBAC

Four levels of role-based access control:

| Role | Scope |
|------|-------|
| **Owner** | Full access to tenant, including billing and user management |
| **Admin** | Manage clusters, destinations, adapters |
| **Editor** | Create and modify destinations, view deliveries |
| **Viewer** | Read-only access to dashboards and delivery logs |

SSO integration with Google OAuth, Okta, and Azure AD.

## Zero-Knowledge Secrets

Sensitive material (enrollment credentials, HMAC keys, mTLS certs) is managed by [zen-lock](/zen-lock/):

- Only ciphertext is stored in Kubernetes CRDs
- Decryption happens in a mutating webhook at pod start time
- Secrets exist as ephemeral K8s Secrets, cleaned up after use
- API server and etcd never see plaintext

## Audit Trail

Every administrative action and delivery event is logged with tamper-detection via audit hash chains.
