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

## Como o Coolify executa o health check

Existem duas formas de configurar, e elas não se combinam livremente:

- **Pela interface do Coolify**: você define caminho, código de resposta esperado e intervalo. Essa verificação é feita de dentro do container usando `curl` ou `wget` — a imagem final precisa ter um dos dois binários instalados, senão o check falha mesmo com a aplicação saudável.
- **Pela instrução `HEALTHCHECK` do `Dockerfile`**: se o `Dockerfile` já define `HEALTHCHECK`, essa instrução tem precedência sobre a configuração feita na interface.

O proxy (Traefik) só encaminha tráfego para instâncias que passam no health check. Quando o check falha, o sintoma típico não é um erro de aplicação, e sim `404 Not Found` ou `no available server` no proxy — o que costuma ser confundido com problema de rota ou de domínio.

## Passos

1. Defina a rota do health check.
2. Registre a rota no Coolify (ou garanta que o `HEALTHCHECK` do `Dockerfile` já cobre isso).
3. Confirme que a imagem final tem `curl` ou `wget`, caso o check seja configurado pela interface.
4. Valide a resposta em rede local e externa.
5. Observe o comportamento após o redeploy.

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
- configurar o health check pela interface em uma imagem sem `curl` nem `wget`.
- editar o health check na interface sem perceber que o `HEALTHCHECK` do `Dockerfile` está sobrepondo a configuração.
