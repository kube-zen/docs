import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout title="Zen Mesh Docs" description="Documentation for Zen Mesh, zen-lock, and Helm Charts">
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
              <p>Zero-knowledge secret management built into Zen Mesh. How enrollment and secrets are protected.</p>
              <span className={styles.cta}>Read docs →</span>
            </Link>
            <Link to="/helm-charts" className={styles.card}>
              <h2>⚙️ Helm Charts</h2>
              <p>Official charts for deploying zen-agent, zen-suite, and the full Zen Mesh edge stack.</p>
              <span className={styles.cta}>Read docs →</span>
            </Link>
          </div>
          <div className={styles.links}>
            <Link href="https://zen-mesh.io">zen-mesh.io</Link>
            <Link href="https://github.com/zenmesh/helm-charts">Helm Charts</Link>
            <Link href="https://github.com/zenmesh">GitHub</Link>
            <Link href="https://discord.com/invite/clawd">Discord</Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
