import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

function CustomWelcomeSection() {
  return (
    <section style={{ padding: '2rem 0', textAlign: 'center' }}>
      <h2>Welcome to the SDK Docs</h2>
      <p style={{ fontSize: '1.2rem' }}>
        Click below to jump directly to the documentation.
      </p>
      <Link
        className="button button--primary button--lg"
        to="/docs/intro"
        style={{ marginTop: '1rem' }}
      >
        Go to the Docs →
      </Link>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="SDK Docs homepage">
      <HomepageHeader />
      <main>
        <CustomWelcomeSection />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
