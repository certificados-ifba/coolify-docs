---
title: Estrutura do projeto
sidebar_position: 5
---

# Estrutura do projeto

Antes de conectar o repositório ao Coolify, a equipe precisa entender a estrutura minima esperada no projeto.

## Objetivo desta pagina

Explicar como o repositório deve estar organizado para que o build com `Dockerfile` seja previsivel e facil de manter.

## Arquivos principais

Os arquivos mais relevantes para o fluxo de implantacao sao:

- `Dockerfile`
- `.dockerignore`
- `package.json`, `requirements.txt`, `pom.xml` ou equivalente, dependendo da stack
- arquivos de configuracao da aplicacao
- documentacao operacional do projeto

## Papel do Dockerfile

O `Dockerfile` precisa estar versionado no repositório e em um caminho conhecido pelo Coolify. Ele sera o ponto de verdade para o build da imagem.

## Papel do `.dockerignore`

O `.dockerignore` reduz o contexto de build e evita enviar artefatos desnecessarios, como:

- `node_modules`
- builds antigos
- caches
- arquivos temporarios

## Estrutura recomendada

Uma estrutura simples e eficiente costuma seguir o padrao:

```text
/
├── Dockerfile
├── .dockerignore
├── README.md
├── codigo-da-aplicacao
├── arquivos-de-configuracao
└── documentacao
```

## Branch de deploy

Defina explicitamente qual branch sera usada pelo Coolify. As opcoes mais comuns sao:

- `main`
- `master`
- `production`
- `release`

Evite ambiguidade. Se houver mais de um ambiente, documente a branch de cada um.

## O que revisar no repositório

- o `Dockerfile` builda sem editar o ambiente manualmente
- o comando final da imagem sobe a aplicacao
- a porta interna esta clara
- variaveis sensiveis nao estao commitadas
- existe documentacao minima para operacao

## Critério de aceite desta etapa

O repositório esta apto quando outra pessoa consegue identificar com rapidez:

- como a imagem sera montada
- qual branch sera implantada
- onde estao os arquivos criticos
- o que precisa ser configurado no Coolify
