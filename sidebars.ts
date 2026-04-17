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
    {
      type: 'category',
      label: 'Visao geral',
      items: ['intro', 'introducao', 'matriz-de-referencia-coolify'],
    },
    {
      type: 'category',
      label: 'Preparacao',
      items: ['pre-requisitos', 'arquitetura-e-fluxo', 'estrutura-do-projeto', 'preparacao-do-repositorio-github'],
    },
    {
      type: 'category',
      label: 'Acesso e infraestrutura',
      items: [
        {
          type: 'category',
          label: 'SSH no host',
          items: [
            'ssh/configuracao-openssh',
            'ssh/geracao-chave',
            'ssh/configuracao-servidor',
            'ssh/teste-conexao',
          ],
        },
        {
          type: 'category',
          label: 'Coolify e servidor',
          items: ['coolify/configuracao-ssh', 'coolify/validacao-acesso'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Deploy inicial',
      items: ['configuracao-da-aplicacao-no-coolify', 'dockerfile', 'primeiro-deploy'],
    },
    {
      type: 'category',
      label: 'Publicacao externa',
      items: ['configuracao-de-dominio', 'configuracao-dns', 'https-e-ssl'],
    },
    {
      type: 'category',
      label: 'Operacao',
      items: ['validacao-pos-implantacao', 'health-check-e-disponibilidade', 'fluxo-de-atualizacao-e-cicd'],
    },
    {
      type: 'category',
      label: 'Governanca',
      items: ['troubleshooting', 'boas-praticas', 'checklist-executivo-final'],
    },
  ],
};

export default sidebars;
