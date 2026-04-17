---
title: Fluxo de atualizacao e CI-CD
sidebar_position: 17
---

# Fluxo de atualização e CI/CD

Depois do primeiro deploy, o foco passa a ser atualização segura e previsível.

## Objetivo

Estabelecer um processo de mudança controlado, com validações antes do deploy e estratégia clara de rollback.

## Pre-requisitos

- branch de deploy oficial definida.
- políticas de merge alinhadas.
- responsáveis por aprovação e validação pós-deploy definidos.

## O que precisa estar combinado

- quando o deploy será automático.
- quando o deploy será manual.
- quem aprova a mudança.
- como fazer rollback.

## Como novas alteracoes serao publicadas

O fluxo mais comum e:

1. alteração no código.
2. commit na branch apropriada.
3. push para o GitHub.
4. validações automatizadas, se existirem.
5. deploy manual ou automático no Coolify.

## Integracao entre GitHub e Coolify

O Coolify pode observar uma branch e disparar deploys quando houver novas alteracoes. Mesmo assim, a equipe deve definir explicitamente:

- quais branches podem acionar deploy.
- se o deploy será automático ou manual.
- quem aprova mudanças para produção.

## Estrategia recomendada para producao

- CI valida build e testes antes do merge.
- branch protegida para produção.
- deploy manual assistido ou automático controlado.
- checklist de validação pós-implantação.

## Passos

1. Altere o código em uma branch de trabalho.
2. Execute validações locais e de CI.
3. Faça merge na branch monitorada.
4. Dispare ou aguarde o deploy no Coolify.
5. Execute a validação pós-implantação.

## O que o CI deve cobrir

- lint.
- testes automatizados.
- build da aplicação.
- opcionalmente build do `Dockerfile`.

## O que o Coolify deve cobrir

- build da imagem final de deploy.
- subida do container.
- aplicação de configurações do ambiente.
- health check e observação inicial.

## Riscos comuns

- deploy automático sem validação mínima.
- branch errada conectada ao ambiente.
- alteração de `Dockerfile` sem teste local.
- falta de estratégia de rollback.

## Validacoes esperadas

- cada mudança publicada pode ser rastreada a commit e autor.
- existe evidências de verificação pré-deploy.
- equipe sabe executar rollback sem improviso.
