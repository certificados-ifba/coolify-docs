---
title: Fluxo de atualizacao e CI-CD
sidebar_position: 17
---

# Fluxo de atualizacao e CI-CD

Depois do primeiro deploy, o foco passa a ser atualização segura e previsível.

## Objetivo

Estabelecer um processo de mudanca controlado, com validacoes antes do deploy e estrategia clara de rollback.

## Pre-requisitos

- branch de deploy oficial definida.
- politicas de merge alinhadas.
- responsaveis por aprovacao e validacao pos-deploy definidos.

## O que precisa estar combinado

- quando o deploy sera automatico.
- quando o deploy sera manual.
- quem aprova a mudanca.
- como fazer rollback.

## Como novas alteracoes serao publicadas

O fluxo mais comum e:

1. alteracao no codigo.
2. commit na branch apropriada.
3. push para o GitHub.
4. validacoes automatizadas, se existirem.
5. deploy manual ou automatico no Coolify.

## Integracao entre GitHub e Coolify

O Coolify pode observar uma branch e disparar deploys quando houver novas alteracoes. Mesmo assim, a equipe deve definir explicitamente:

- quais branches podem acionar deploy.
- se o deploy sera automatico ou manual.
- quem aprova mudancas para producao.

## Estrategia recomendada para producao

- CI valida build e testes antes do merge.
- branch protegida para producao.
- deploy manual assistido ou automatico controlado.
- checklist de validacao pos-implantacao.

## Passos

1. Altere o codigo em uma branch de trabalho.
2. Execute validacoes locais e de CI.
3. Faça merge na branch monitorada.
4. Dispare ou aguarde o deploy no Coolify.
5. Execute a validacao pos-implantacao.

## O que o CI deve cobrir

- lint.
- testes automatizados.
- build da aplicacao.
- opcionalmente build do `Dockerfile`.

## O que o Coolify deve cobrir

- build da imagem final de deploy.
- subida do container.
- aplicacao de configuracoes do ambiente.
- health check e observacao inicial.

## Riscos comuns

- deploy automatico sem validacao minima.
- branch errada conectada ao ambiente.
- alteracao de `Dockerfile` sem teste local.
- falta de estrategia de rollback.

## Validacoes esperadas

- cada mudanca publicada pode ser rastreada a commit e autor.
- existe evidencias de verificacao pre-deploy.
- equipe sabe executar rollback sem improviso.
