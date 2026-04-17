---
title: Health check e disponibilidade
sidebar_position: 18
---

# Health check e disponibilidade

Health check e a forma mais simples de detectar se a aplicacao ficou de pe apos o deploy.

## Objetivo

Definir verificacoes de vida e estabilidade para detectar falhas rapidamente apos publicacao e durante operacao.

## Pre-requisitos

- aplicacao em execucao apos deploy.
- rota valida para verificacao.
- acesso aos logs de runtime.

## O que precisa ser definido

- qual rota representa saude real.
- qual tempo de resposta e aceitavel.
- se o endpoint depende de banco ou servico externo.

## Por que isso importa

Sem validacao automatica minima, uma aplicacao pode ser publicada mesmo estando indisponivel para o usuario.

## O que deve ser validado

- o processo principal subiu.
- a aplicacao responde na rota esperada.
- a resposta acontece em tempo adequado.

## Caminhos recomendados

- sites estaticos: `/`.
- APIs: `/health`, `/status` ou equivalente.

## Passos

1. Defina a rota do health check.
2. Registre a rota no Coolify.
3. Valide a resposta em rede local e externa.
4. Observe o comportamento apos redeploy.

## Como monitorar

- acompanhar o status da aplicacao no Coolify.
- revisar logs apos cada deploy.
- testar manualmente a URL principal e o health check.

## Estabilidade minima esperada

Considere a aplicacao minimamente estavel quando:

- sobe de forma consistente apos redeploy.
- responde ao health check.
- nao reinicia continuamente.
- responde por dominio com HTTPS ativo.

## Problemas comuns

- usar endpoint que exige autenticacao como health check.
- health check em rota com dependencia externa instavel.
- timeout de inicializacao muito baixo para a aplicacao.
