---
title: Introducao
sidebar_position: 2
---

# Introducao

Esta documentação foi estruturada para permitir a implantação completa de uma aplicação no Coolify sem depender de explicações externas. O foco é operacional: o leitor deve conseguir preparar o repositório, configurar o host, publicar a aplicação, ativar domínio e HTTPS, validar o ambiente e manter o fluxo de atualização com previsibilidade.

## Objetivo

Ao final da trilha, o leitor deve conseguir sair do zero até o ambiente publicado e validado em produção, cobrindo:

- preparação do repositório no GitHub
- build por Dockerfile
- configuração da aplicação no Coolify
- domínio, DNS e HTTPS
- validação pós-implantação
- operação contínua com fluxo de atualização e CI/CD

## Como esta documentacao foi montada

- **RC (Referência Coolify):** conceitos, comportamentos e fluxo base da plataforma.
- **AS (Adaptação de cenário):** ajustes para o nosso cenário com GitHub, Dockerfile, domínio e ambiente self-hosted.
- **PP (Procedimento do projeto):** decisões operacionais, convenções e critérios de aceite deste repositório.

Consulte a [Matriz de referencia Coolify](./matriz-de-referencia-coolify.md) para rastreabilidade completa.

## O que esta documentação não assume

- que o leitor conheça o Coolify previamente
- que o repositório esteja pronto para produção
- que DNS e HTTPS funcionem sem configuração explícita
- que a aplicação tenha porta, runtime ou health check padronizados por default

## Resultado esperado

- existe um fluxo reproduzível para o primeiro deploy
- a superfície pública responde em domínio configurado
- o HTTPS está ativo e validado
- o health check identifica indisponibilidade real
- a equipe sabe atualizar e diagnosticar falhas sem depender de suporte informal

## Ordem operacional resumida

1. validar pré-requisitos e arquitetura.
2. preparar o repositório e o host.
3. cadastrar a aplicação no Coolify e executar o primeiro deploy.
4. publicar domínio, DNS e HTTPS.
5. validar a aplicação em condição real.
6. padronizar atualizações, troubleshooting e checklist final.

## Leitura recomendada para novo integrante

Se você está entrando no processo sem contexto prévio, siga esta ordem:

1. [Pre-requisitos](./pre-requisitos.md)
2. [Arquitetura e fluxo](./arquitetura-e-fluxo.md)
3. [Estrutura do projeto](./estrutura-do-projeto.md)
4. [Preparacao do repositorio GitHub](./preparacao-do-repositorio-github.md)
5. [Configuracao da aplicacao no Coolify](./configuracao-da-aplicacao-no-coolify.md)
6. [Primeiro deploy](./primeiro-deploy.md)
7. [Validacao pos-implantacao](./validacao-pos-implantacao.md)

## Erros de leitura mais comuns

- tentar começar por DNS e HTTPS antes de ter um deploy funcionando
- configurar branch ou caminho de Dockerfile sem confirmar o repositório
- pular a validação do host e descobrir erro somente no primeiro deploy
- não registrar evidências e perder rastreabilidade de aceite
