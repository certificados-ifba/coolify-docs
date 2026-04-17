---
title: Primeiro deploy
sidebar_position: 12
---

# Primeiro deploy

Esta e a primeira execucao real do fluxo. O objetivo aqui e sair do cadastro da aplicacao para uma publicacao funcional no servidor.

## Como executar

No painel do Coolify:

1. revise a configuracao salva
2. confirme branch e `Dockerfile`
3. acione o deploy
4. acompanhe logs de build e runtime

## O que acompanhar durante o processo

- clone do repositório
- build da imagem
- criacao do container
- inicializacao do processo principal
- verificacao de health check, se configurado

## Como validar o build

O build deve concluir sem:

- erro de dependencia
- erro de caminho no `Dockerfile`
- erro de permissao de acesso ao repositório
- falha por variavel ausente

## Como validar se o container subiu

Sinais positivos:

- aplicacao aparece como `Running`
- logs mostram o processo principal ativo
- a porta esperada esta acessivel internamente

## Erros iniciais mais comuns

- porta interna errada
- `Dockerfile` invalido
- dominio configurado antes do DNS estar pronto
- processso principal encerrando apos o start

## Checklist do primeiro deploy

- [ ] build concluido
- [ ] container em execucao
- [ ] logs sem erro fatal
- [ ] health check, se usado, esta respondendo
- [ ] aplicacao acessivel por IP ou dominio configurado
