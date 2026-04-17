---
title: Validacao do servidor
sidebar_position: 2
---

# Validacao do servidor no Coolify

Esta pagina valida se o Coolify consegue autenticar por SSH no servidor, instalar o Docker Engine e deixar o proxy operacional.

![Validar servidor e instalar o Docker Engine](/img/validar-servidor-e-instalar-o-docker-engine.webp)

Figura 1: Ação de validação do host dentro da tela Geral do servidor.

## Objetivo

Confirmar que o host esta apto para receber aplicativos e que a infraestrutura basica do Coolify foi concluida.

## Pre-requisitos

- Chave privada cadastrada e associada ao servidor.
- Chave publica autorizada no host.
- SSH ativo.
- Acesso ao painel do Coolify.

## Passos

### 1. Executar a validacao

Na tela do servidor `localhost`, acesse a aba **Geral** e clique em **Validar servidor e instalar o Docker Engine**.

Esse processo confirma que o Coolify consegue:

- conectar via SSH ao servidor
- usar a chave privada associada
- preparar o Docker Engine no host
- habilitar o proxy necessário para deploys

### 2. Se a validacao falhar

Revisar primeiro a autenticacao e depois a infraestrutura local:

- a chave privada cadastrada no painel.
- a chave publica em `~/.ssh/authorized_keys`.
- o serviço SSH em execucao.
- a conectividade de rede do servidor.
- as permissoes do diretorio `.ssh`.

Comandos uteis no host:

```bash
systemctl status ssh
docker --version
docker ps
ls -ld ~/.ssh
ls -l ~/.ssh/authorized_keys
```

## Resultado esperado

- o host aparece validado.
- o Docker Engine esta funcional.
- o proxy esta em execucao.
- o painel nao mostra erro de autenticacao.

## Evidencias de aceite

Considere a etapa concluida quando o servidor estiver validado, o Docker Engine estiver funcional e o proxy estiver em execucao.

## Proximo passo

Com o host validado, siga para [Configuracao da aplicacao no Coolify](../configuracao-da-aplicacao-no-coolify.md).
