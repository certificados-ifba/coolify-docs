---
title: Primeiro deploy
sidebar_position: 12
---

# Primeiro deploy

Esta é a primeira execução real do fluxo. O objetivo aqui é sair do cadastro da aplicação para uma publicação funcional no servidor.

## Objetivo

Executar o primeiro deploy completo com coleta de evidências técnicas para liberar as etapas de domínio e HTTPS.

## Pre-requisitos

- aplicação cadastrada no Coolify.
- `Dockerfile` configurado.
- branch e porta interna revisadas.

## Como executar

No painel do Coolify:

1. Revise a configuração salva.
2. Confirme branch e `Dockerfile`.
3. Acione o deploy.
4. Acompanhe logs de build e runtime.

## O que acompanhar durante o processo

- clone do repositório.
- build da imagem.
- criação do container.
- inicialização do processo principal.
- verificação de health check, se configurado.

## Como validar o build

O build deve concluir sem:

- erro de dependência.
- erro de caminho no `Dockerfile`.
- erro de permissão de acesso ao repositório.
- falha por variável ausente.

## Como validar se o container subiu

Sinais positivos:

- aplicação aparece como `Running`.
- logs mostram o processo principal ativo.
- a porta esperada está acessível internamente.

## Erros iniciais mais comuns

- porta interna errada.
- `Dockerfile` invalido.
- domínio configurado antes do DNS estar pronto.
- processo principal encerrando após o start.

## Checklist do primeiro deploy

- [ ] build concluído.
- [ ] container em execução.
- [ ] logs sem erro fatal.
- [ ] health check, se usado, está respondendo.
- [ ] aplicação acessível por IP ou domínio configurado.

## Problemas comuns

- processo principal encerra após inicialização.
- variável de ambiente obrigatória ausente.
- health check aponta para rota indisponível.
