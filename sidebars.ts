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
    {
      type: 'category',
      label: 'SSH',
      items: [
        'ssh/geracao-chave',
        'ssh/configuracao-servidor',
        'ssh/teste-conexao',
      ],
    },
    {
      type: 'category',
      label: 'Coolify',
      items: ['coolify/configuracao-ssh', 'coolify/validacao-acesso'],
    },
    'boas-praticas',
    'troubleshooting',
  ],

  // Sidebar manual para manter a sequencia operacional da documentacao.
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
