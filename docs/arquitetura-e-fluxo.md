---
title: Arquitetura e fluxo
sidebar_position: 4
---

# Arquitetura e fluxo

Esta página apresenta a visão de ponta a ponta da implantação. O objetivo é garantir que o leitor entenda o papel de cada componente antes de entrar na execução operacional.

## Objetivo

Estabelecer uma visão sistêmica do processo para reduzir erro de sequenciamento e facilitar diagnóstico por camada.

## Fluxo de ponta a ponta

1. O código é versionado no GitHub.
2. O `Dockerfile` define como a aplicação será empacotada.
3. O Coolify conecta o repositório e executa o build.
4. O container sobe no host com a porta interna correta.
5. O domínio aponta para o host por meio do DNS.
6. O proxy publica o servico com HTTPS.
7. O time valida funcionamento, observabilidade e atualizacoes.

## Papéis de cada componente

- GitHub guarda a fonte da verdade do código.
- `Dockerfile` garante build reproduzível.
- Coolify orquestra deploy, variáveis, runtime e proxy.
- DNS torna o serviço acessível por nome.
- HTTPS garante transporte seguro e confiança no acesso público.

## Pontos de controle por etapa

- Antes do GitHub: branch e organização do repositório.
- Antes do Coolify: host validado e credenciais prontas.
- Antes do domínio: a aplicação precisa subir e responder na porta interna.
- Antes do HTTPS: o DNS precisa apontar para o host correto.
- Antes do encerramento: teste funcional e health check confirmados.

## Decisoes que precisam estar escritas

- qual é a branch de deploy.
- qual é a porta interna da aplicação.
- qual é o caminho do `Dockerfile`.
- qual domínio e qual ambiente foram usados.
- quais validações comprovam cada etapa.

## Validacao esperada

- o leitor consegue descrever a jornada completa sem pular etapas.
- cada bloqueio operacional tem uma camada responsável identificada.
- a equipe sabe em que momento DNS e SSL entram no fluxo.

## Problemas comuns

- tentar resolver DNS antes de validar o container.
- configurar HTTPS sem o DNS apontar para o host.
- confundir branch de trabalho com branch de deploy.
- tratar build, deploy e proxy como a mesma etapa.
