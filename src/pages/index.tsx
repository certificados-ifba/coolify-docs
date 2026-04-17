import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const KPIS = [
  {label: 'Trilha operacional', value: '9 guias'},
  {label: 'Hardening recomendado', value: 'SSH + acesso'},
  {label: 'Modelo de uso', value: 'Runbook pronto'},
];

const DEPLOY_FLOW = [
  {
    step: '01',
    title: 'Preparar ambiente',
    description:
      'Validacao de conectividade, usuarios administrativos e checklist tecnico antes de qualquer mudanca.',
  },
  {
    step: '02',
    title: 'Configurar SSH com seguranca',
    description:
      'Geracao de chave, permissao correta de .ssh, hardening do sshd e teste de autenticacao com log verboso.',
  },
  {
    step: '03',
    title: 'Integrar com Coolify',
    description:
      'Cadastro da chave no painel, associacao com repositorio Git e validacao completa da autenticacao.',
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={styles.heroGlowLeft} />
      <div className={styles.heroGlowRight} />
      <div className="container">
        <p className={styles.kicker}>Playbook tecnico</p>
        <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
          {siteConfig.title}
        </Heading>
        <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
          {siteConfig.tagline}
        </p>
        <p className={styles.heroDescription}>
          Padronize acesso SSH, proteja servidores e conecte o Coolify com
          repositorios Git de forma reproduzivel para equipes de engenharia.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/introducao">
            Iniciar trilha de autenticacao
          </Link>
          <Link
            className="button button--outline button--lg"
            to="/docs/ssh/geracao-chave">
            Ir para configuracao SSH
          </Link>
        </div>

        <div className={styles.kpiGrid}>
          {KPIS.map((item) => (
            <article key={item.label} className={styles.kpiCard}>
              <p className={styles.kpiValue}>{item.value}</p>
              <p className={styles.kpiLabel}>{item.label}</p>
            </article>
          ))}
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Documentacao | ${siteConfig.title}`}
      description="Guias tecnicos para autenticacao SSH, seguranca de acesso e integracao Coolify com repositorios Git.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />

        <section className={styles.flowSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <p className={styles.sectionEyebrow}>Fluxo recomendado</p>
              <Heading as="h2" className={styles.sectionTitle}>
                Da autenticacao ao acesso validado em 3 etapas
              </Heading>
            </div>

            <div className={styles.flowGrid}>
              {DEPLOY_FLOW.map((item) => (
                <article key={item.step} className={styles.flowCard}>
                  <span className={styles.flowStep}>{item.step}</span>
                  <Heading as="h3" className={styles.flowTitle}>
                    {item.title}
                  </Heading>
                  <p className={styles.flowDescription}>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaCard}>
              <div>
                <p className={styles.sectionEyebrow}>Pronto para executar</p>
                <Heading as="h2" className={styles.ctaTitle}>
                  Use o runbook e reduza falhas de autenticacao em operacao
                </Heading>
              </div>
              <div className={styles.ctaButtons}>
                <Link
                  className="button button--primary button--lg"
                  to="/docs/pre-requisitos">
                  Ver checklist inicial
                </Link>
                <Link
                  className="button button--secondary button--lg"
                  to="/docs/coolify/configuracao-ssh">
                  Ir para integracao Coolify
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
