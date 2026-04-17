---
title: Teste de conexao SSH
sidebar_position: 4
---

# Teste de conexao SSH

Esta pagina valida que o host esta pronto para uso no Coolify e que a integracao SSH foi concluida com sucesso.

![Validar servidor e instalar o Docker Engine](/img/validar-servidor-e-instalar-o-docker-engine.webp)

Figura 1: Tela usada para validar o servidor e preparar o Docker Engine.

## Objetivo

Confirmar que o Coolify consegue autenticar no host, instalar o Docker Engine e deixar o proxy operacional.

## Pre-requisitos

- Chave privada cadastrada no Coolify.
- Chave publica autorizada no servidor.
- Servico SSH ativo.
- Acesso ao painel do Coolify.

## Passos

### 1. Validacao no painel do Coolify

No painel do Coolify:

1. Acesse **Servidores**
2. Selecione o servidor `localhost`
3. Abra a página **Geral**
4. Clique em **Validar servidor e instalar o Docker Engine**

### 2. O que o teste valida

Durante a validação, o Coolify confirma:

- acesso SSH ao servidor
- associação correta da chave privada
- capacidade de executar comandos remotos
- preparação do Docker Engine no host
- disponibilidade do proxy da plataforma

### 3. Validacoes complementares no servidor

Se necessário, valide diretamente no servidor:

```bash
docker --version
docker ps
systemctl status ssh
```

## Resultado esperado

- o host aparece validado no painel.
- o Docker Engine responde no servidor.
- o proxy da plataforma fica em execução.
- a página do servidor nao mostra erro de autenticacao.

## Quando a validacao falha

Revisar primeiro a camada SSH e depois a camada Docker:

- a chave privada correta foi cadastrada no Coolify.
- a chave pública correspondente esta em `~/.ssh/authorized_keys`.
- o serviço SSH esta ativo.
- `PubkeyAuthentication yes` esta definido.
- `PermitRootLogin prohibit-password` foi aplicado sem bloquear o acesso.
- o servidor possui acesso à internet para instalar o Docker Engine.

## Evidencia de aceite

Considere a etapa concluida quando o host estiver saudavel no painel e o proxy estiver em execução.
