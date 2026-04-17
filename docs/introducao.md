---
title: Introducao
sidebar_position: 2
---

# Introducao

Esta documentacao foi estruturada para permitir a implantacao completa de uma aplicacao no Coolify sem depender de explicacoes externas. O foco e operacional: o leitor deve conseguir preparar o repositorio, configurar o host, publicar a aplicacao, ativar dominio e HTTPS, validar o ambiente e manter o fluxo de atualizacao com previsibilidade.

## Objetivo

Ao final da trilha, o leitor deve conseguir sair do zero ate o ambiente publicado e validado em producao, cobrindo:

- preparacao de repositório no GitHub
- build por Dockerfile
- configuracao de aplicacao no Coolify
- dominio, DNS e HTTPS
- validacao pos-implantacao
- operacao continua com fluxo de atualizacao e CI/CD

## Como esta documentacao foi montada

- **RC (Referencia Coolify):** conceitos, comportamentos e fluxo base da plataforma.
- **AS (Adaptacao de cenario):** ajustes para o nosso cenario com GitHub, Dockerfile, dominio e ambiente self-hosted.
- **PP (Procedimento do projeto):** decisoes operacionais, convencoes e criterios de aceite deste repositorio.

Consulte a [Matriz de referencia Coolify](./matriz-de-referencia-coolify.md) para rastreabilidade completa.

## O que esta documentacao nao assume

- que o leitor conheca o Coolify previamente
- que o repositório esteja pronto para producao
- que DNS e HTTPS funcionem sem configuracao explicita
- que a aplicacao tenha porta, runtime ou health check padronizados por default

## Resultado esperado

- existe um fluxo reprodutivel para o primeiro deploy
- a superficie publica responde em dominio configurado
- o HTTPS esta ativo e validado
- o health check identifica indisponibilidade real
- a equipe sabe atualizar e diagnosticar falhas sem depender de suporte informal

## Ordem operacional resumida

1. validar pre-requisitos e arquitetura.
2. preparar o repositorio e o host.
3. cadastrar a aplicacao no Coolify e executar o primeiro deploy.
4. publicar dominio, DNS e HTTPS.
5. validar a aplicacao em condicao real.
6. padronizar atualizacoes, troubleshooting e checklist final.

## Leitura recomendada para novo integrante

Se voce esta entrando no processo sem contexto previo, siga esta ordem:

1. [Pre-requisitos](./pre-requisitos.md)
2. [Arquitetura e fluxo](./arquitetura-e-fluxo.md)
3. [Estrutura do projeto](./estrutura-do-projeto.md)
4. [Preparacao do repositorio GitHub](./preparacao-do-repositorio-github.md)
5. [Configuracao da aplicacao no Coolify](./configuracao-da-aplicacao-no-coolify.md)
6. [Primeiro deploy](./primeiro-deploy.md)
7. [Validacao pos-implantacao](./validacao-pos-implantacao.md)

## Erros de leitura mais comuns

- tentar começar por DNS e HTTPS antes de ter um deploy funcionando
- configurar branch ou caminho de Dockerfile sem confirmar o repositorio
- pular a validacao do host e descobrir erro somente no primeiro deploy
- nao registrar evidencias e perder rastreabilidade de aceite
