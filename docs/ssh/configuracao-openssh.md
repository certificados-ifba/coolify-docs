---
title: Configuracao do OpenSSH
sidebar_position: 0
---

# OpenSSH

O Coolify usa SSH para se conectar ao servidor e implantar aplicações. Esta página trata da preparação do OpenSSH no host que vai receber a conexão da plataforma.

![Servidor configurado para acesso SSH no Coolify](/img/servidor.webp)

Figura 1: Tela do servidor no Coolify, onde a chave privada e a validação do host serão associadas.

## Objetivo

Garantir que o servidor aceite autenticação por chave pública, que o serviço SSH esteja ativo e que o Coolify consiga validar o host com segurança.

## Pre-requisitos

- Acesso administrativo ao servidor.
- Capacidade de editar `/etc/ssh/sshd_config`.
- Acesso ao usuário que receberá a chave em `authorized_keys`.
- Serviço SSH instalado ou apto à instalação.

:::important
A chave SSH não deve ter senha nem depender de 2FA para o fluxo automatizado do Coolify.
:::

## Passos

### 1. Instale o OpenSSH

```bash
apt update && apt install -y openssh-server
systemctl enable --now ssh
```

### 2. Ajuste a configuração do SSH

Edite `/etc/ssh/sshd_config` e confirme estas diretivas:

```ini
PubkeyAuthentication yes
PermitRootLogin prohibit-password
```

Se necessário, aplique endurecimento adicional depois da validação inicial:

```ini
PasswordAuthentication no
```

### 3. Reinicie o serviço SSH

```bash
systemctl restart ssh
```

### 4. Confirme a autorizacao por chave publica

No usuário que receberá a conexão, garanta o arquivo `authorized_keys` com permissão correta.

```bash
mkdir -p ~/.ssh
chmod 700 ~/.ssh
```

## O que a etapa precisa comprovar

- `PubkeyAuthentication` está habilitado.
- o serviço SSH está em execução.
- a conexão por senha não é obrigatória para o fluxo do Coolify.
- a chave pública poderá ser adicionada sem bloqueio administrativo.

## Validacao esperada

- `systemctl status ssh` responde sem erro.
- o servidor aceita conexão por chave pública.
- o usuário alvo possui diretório `.ssh` com permissão adequada.

## Problemas comuns

- editar `sshd_config` e esquecer de reiniciar o serviço.
- habilitar `PermitRootLogin prohibit-password` sem antes cadastrar a chave.
- confundir o usuário que recebe a chave com o usuário que administra o Coolify.
- tentar usar uma chave com passphrase no fluxo automatizado.

## Referencia visual

![Servidor configurado para acesso SSH no Coolify](/img/servidor.webp)

Figura 2: O host pronto para receber a chave privada cadastrada no Coolify.

## Proximo passo

Siga para [Geração de chave SSH no Coolify](./geracao-chave.md) para criar a credencial usada pelo painel.
