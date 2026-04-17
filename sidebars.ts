import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'introducao',
    'pre-requisitos',
    'arquitetura-e-fluxo',
    'estrutura-do-projeto',
    'preparacao-do-repositorio-github',
    {
      type: 'category',
      label: 'Acesso SSH e Servidor',
      items: [
        'ssh/configuracao-openssh',
        'ssh/geracao-chave',
        'ssh/configuracao-servidor',
        'ssh/teste-conexao',
      ],
    },
    'configuracao-da-aplicacao-no-coolify',
    'dockerfile',
    'primeiro-deploy',
    'configuracao-de-dominio',
    'configuracao-dns',
    'https-e-ssl',
    'validacao-pos-implantacao',
    'fluxo-de-atualizacao-e-cicd',
    'health-check-e-disponibilidade',
    {
      type: 'category',
      label: 'Coolify',
      items: ['coolify/configuracao-ssh', 'coolify/validacao-acesso'],
    },
    'boas-praticas',
    'troubleshooting',
    'checklist-executivo-final',
  ],
};

export default sidebars;
