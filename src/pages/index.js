import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

import { useLocation } from '@docusaurus/router'; // Import useLocation

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {

  const location = useLocation(); // Get the current location
  const queryParams = new URLSearchParams(location.search); // Parse the query parameters

  // Assuming you want to get a parameter named 'e'
  const myParam = queryParams.get('e');

  // You can use myParam in your component as needed
  //console.log('Received URL parameter e:', myParam);


  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="">
      <HomepageHeader />
      <main>
        {myParam === 'noBook' && (
        <p> <br /> 
        <div className="alert alert--danger" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <strong>Atenção:</strong> Não consegui encontrar uma licença de acesso ao guia associada ao seu e-mail.
        </div>
        </p>
        )}

        {myParam === 'browserdate' && (
          <div className="alert alert--danger" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <strong>Atenção:</strong> Ao acessar seu cadastro, notei que o acesso a este guia/conteúdo expirou. Para que você possa continuar desfrutando de nossos conteúdos, por favor, renove sua licença.
          </div>
        )}

        <HomepageFeatures />
      </main>
    </Layout>
  );
}
