import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const KPIS = [
  {label: 'Foco', value: 'Implantação via Coolify'},
  {label: 'Instituição', value: 'IFBA Vitória da Conquista'},
  {label: 'Autoria', value: 'Breno Tainan Aguiar'},
];

const DEPLOY_FLOW = [
  {
    step: '01',
    title: 'Preparar servidor',
    description:
      'Validação de rede, acesso administrativo, OpenSSH e requisitos técnicos antes da publicação.',
  },
  {
    step: '02',
    title: 'Configurar acesso e Coolify',
    description:
      'Cadastro de chave privada, vinculação ao servidor, validação do host e instalação do Docker Engine.',
  },
  {
    step: '03',
    title: 'Implantar sistemas',
    description:
      'Deploy com domínio, proxy reverso, healthcheck, boas práticas e troubleshooting operacional.',
  },
];

const HIGHLIGHTS = [
  'Passo a passo didático para equipes técnicas',
  'Fluxo completo do servidor ao deploy',
  'Base pronta para operação, ensino e documentação institucional',
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={styles.heroGlowLeft} />
      <div className={styles.heroGlowRight} />
      <div className="container">
        <div className={styles.heroShell}>
          <div className={styles.heroContent}>
            <p className={styles.kicker}>IFBA Vitória da Conquista</p>
            <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
              Documentação moderna para implantação de sistemas via Coolify
            </Heading>
            <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
              {siteConfig.tagline}
            </p>
            <p className={styles.heroDescription}>
              Material técnico desenvolvido por Breno Tainan Aguiar para apoiar
              a preparação de servidores, configuração de acesso seguro,
              validação de infraestrutura e deploy de sistemas com Coolify.
            </p>
            <ul className={styles.highlightList}>
              {HIGHLIGHTS.map((item) => (
                <li key={item} className={styles.highlightItem}>
                  {item}
                </li>
              ))}
            </ul>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/introducao">
                Explorar documentação
              </Link>
              <Link
                className="button button--outline button--lg"
                to="/docs/coolify/configuracao-ssh">
                Ver fluxo no Coolify
              </Link>
            </div>
          </div>

          <aside className={styles.heroPanel}>
            <p className={styles.heroPanelEyebrow}>Resumo do projeto</p>
            <Heading as="h2" className={styles.heroPanelTitle}>
              Um guia institucional para operação e implantação
            </Heading>
            <p className={styles.heroPanelText}>
              Esta plataforma organiza a documentação de implantação de
              sistemas via Coolify com foco em clareza, segurança e
              reprodutibilidade.
            </p>
            <div className={styles.heroPanelMeta}>
              <span className={styles.metaLabel}>Autor</span>
              <span className={styles.metaValue}>Breno Tainan Aguiar</span>
            </div>
            <div className={styles.heroPanelMeta}>
              <span className={styles.metaLabel}>Campus</span>
              <span className={styles.metaValue}>IFBA Vitória da Conquista</span>
            </div>
            <div className={styles.heroPanelMeta}>
              <span className={styles.metaLabel}>Escopo</span>
              <span className={styles.metaValue}>
                SSH, Coolify, deploy, segurança e troubleshooting
              </span>
            </div>
          </aside>
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
      title={`Documentação | ${siteConfig.title}`}
      description="Documentação para implantação de sistemas via Coolify, com foco em SSH, validação de servidor, deploy e operação segura.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />

        <section className={styles.flowSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <p className={styles.sectionEyebrow}>Fluxo recomendado</p>
              <Heading as="h2" className={styles.sectionTitle}>
                Do provisionamento ao deploy em 3 movimentos
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
                  Use esta base para implantar sistemas via Coolify com mais
                  previsibilidade
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
                  to="/docs/coolify/validacao-acesso">
                  Ir para validação no Coolify
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}