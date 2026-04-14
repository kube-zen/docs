import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout title="Zen Mesh Docs" description="Documentation for Zen Mesh, zen-lock, zen-gc, and zen-brain">
      <main className={styles.hero}>
        <div className={styles.container}>
          <h1>Zen Mesh <span className={styles.accent}>Documentation</span></h1>
          <p className={styles.tagline}>
            Secure webhook delivery to private networks — without opening firewalls.
          </p>
          <div className={styles.products}>
            <Link to="/docs" className={styles.card}>
              <h2>🪝 zen-mesh</h2>
              <p>Webhook delivery platform. Three-plane architecture, outbound-only, mTLS everywhere.</p>
              <span className={styles.cta}>Read docs →</span>
            </Link>
            <Link to="/zen-lock" className={styles.card}>
              <h2>🔐 zen-lock</h2>
              <p>Zero-knowledge secret manager for Kubernetes. Ciphertext-only CRDs, ephemeral decryption.</p>
              <span className={styles.cta}>Read docs →</span>
            </Link>
            <Link to="/zen-gc" className={styles.card}>
              <h2>🧹 zen-gc</h2>
              <p>Kubernetes garbage collection for any resource. TTL policies on ConfigMaps, Secrets, Pods, CRDs.</p>
              <span className={styles.cta}>Read docs →</span>
            </Link>
            <Link to="/zen-brain" className={`${styles.card} ${styles.comingSoon}`}>
              <h2>🧠 zen-brain</h2>
              <p>AI-native enterprise operating system. Strategic / Detail / Execution tiers.</p>
              <span className={styles.cta}>Coming soon</span>
            </Link>
          </div>
          <div className={styles.links}>
            <Link href="https://zen-mesh.io">zen-mesh.io</Link>
            <Link href="https://github.com/zenmesh">GitHub</Link>
            <Link href="https://discord.com/invite/clawd">Discord</Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
