---
slug: /
title: zen-lock Documentation
sidebar_label: Home
---

# zen-lock

**Zero-knowledge secret management for Kubernetes.**

zen-lock stores only ciphertext in Kubernetes CRDs. Decryption happens at runtime via a mutating webhook — your API server and etcd never see plaintext secrets.

:::info
Full documentation coming soon. See the [GitHub repo](https://github.com/kube-zen/zen-lock) for current details.
:::

## Quick Reference

```bash
# Encrypt a secret
zen-lock encrypt --public-key age1... --secret my-secret-value

# The output is a ZenLock CRD — commit to Git, apply to cluster
# Pod starts → mutating webhook decrypts → ephemeral K8s Secret created
# Pod terminates → ephemeral Secret cleaned up
```
