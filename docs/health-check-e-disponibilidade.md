---
title: Health check e disponibilidade
sidebar_position: 18
---

# Health check e disponibilidade

Health check é a forma mais simples de detectar se a aplicação ficou de pé após o deploy.

## Objetivo

Definir verificações de vida e estabilidade para detectar falhas rapidamente após a publicação e durante a operação.

## Pre-requisitos

- aplicação em execução após o deploy.
- rota válida para verificação.
- acesso aos logs de runtime.

## O que precisa ser definido

- qual rota representa saúde real.
- qual tempo de resposta é aceitável.
- se o endpoint depende de banco ou serviço externo.

## Por que isso importa

Sem validação automática mínima, uma aplicação pode ser publicada mesmo estando indisponível para o usuário.

## O que deve ser validado

- o processo principal subiu.
- a aplicação responde na rota esperada.
- a resposta acontece em tempo adequado.

## Caminhos recomendados

- sites estáticos: `/`.
- APIs: `/health`, `/status` ou equivalente.

## Passos

1. Defina a rota do health check.
2. Registre a rota no Coolify.
3. Valide a resposta em rede local e externa.
4. Observe o comportamento após o redeploy.

## Como monitorar

- acompanhar o status da aplicação no Coolify.
- revisar logs após cada deploy.
- testar manualmente a URL principal e o health check.

## Estabilidade minima esperada

Considere a aplicação minimamente estável quando:

- sobe de forma consistente após o redeploy.
- responde ao health check.
- não reinicia continuamente.
- responde por domínio com HTTPS ativo.

## Problemas comuns

- usar endpoint que exige autenticação como health check.
- health check em rota com dependência externa instável.
- timeout de inicialização muito baixo para a aplicação.
