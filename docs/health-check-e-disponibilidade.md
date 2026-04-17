---
title: Health check e disponibilidade
sidebar_position: 18
---

# Health check e disponibilidade

Health check e a forma mais simples de detectar se a aplicacao ficou de pe apos o deploy.

## Por que isso importa

Sem validacao automatica minima, uma aplicacao pode ser publicada mesmo estando indisponivel para o usuario.

## O que deve ser validado

- o processo principal subiu
- a aplicacao responde na rota esperada
- a resposta acontece em tempo adequado

## Caminhos recomendados

- sites estaticos: `/`
- APIs: `/health`, `/status` ou equivalente

## Como monitorar

- acompanhar o status da aplicacao no Coolify
- revisar logs apos cada deploy
- testar manualmente a URL principal e o health check

## Estabilidade minima esperada

Considere a aplicacao minimamente estavel quando:

- sobe de forma consistente apos redeploy
- responde ao health check
- nao reinicia continuamente
- responde por dominio com HTTPS ativo
