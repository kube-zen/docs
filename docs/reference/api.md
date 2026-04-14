---
sidebar_label: API
---

# API Reference

The Zen Mesh BFF (Backend-for-Frontend) provides a REST API for the dashboard and programmatic access.

## Base URL

```
https://api.zen-mesh.io
```

## Authentication

All API calls require a session cookie (from dashboard login) or an API key header:

```bash
curl -H "X-API-Key: zen_key_..." https://api.zen-mesh.io/tenants/{tid}/clusters
```

## Endpoints

### Session

| Method | Path | Description |
|--------|------|-------------|
| `POST` | `/auth/login` | Authenticate with email/password |
| `GET` | `/me` | Get current user and tenant info |

### Clusters

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/tenants/{tid}/clusters` | List clusters |
| `POST` | `/tenants/{tid}/clusters` | Create a cluster |
| `GET` | `/tenants/{tid}/clusters/{cid}` | Get cluster details |
| `DELETE` | `/tenants/{tid}/clusters/{cid}` | Delete a cluster |
| `POST` | `/tenants/{tid}/clusters/{cid}/install-bundle` | Generate enrollment bundle |

### Destinations

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/tenants/{tid}/destinations` | List destinations |
| `POST` | `/tenants/{tid}/destinations` | Create a destination |
| `GET` | `/tenants/{tid}/destinations/{did}` | Get destination details |
| `PATCH` | `/tenants/{tid}/destinations/{did}` | Update a destination |
| `DELETE` | `/tenants/{tid}/destinations/{did}` | Delete a destination |

### Deliveries

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/tenants/{tid}/deliveries` | List delivery history |
| `GET` | `/tenants/{tid}/deliveries/{did}` | Get delivery details |
| `POST` | `/tenants/{tid}/deliveries/{did}/replay` | Replay a delivery from DLQ |

### API Keys

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/tenants/{tid}/api-keys` | List API keys |
| `POST` | `/tenants/{tid}/api-keys` | Create an API key |
| `DELETE` | `/tenants/{tid}/api-keys/{kid}` | Revoke an API key |
