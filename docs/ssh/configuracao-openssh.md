---
title: Configuracao do OpenSSH
sidebar_position: 0
---

# OpenSSH

O Coolify usa SSH para se conectar ao servidor e implantar aplicações. Esta pagina trata da preparacao do OpenSSH no host que vai receber a conexao da plataforma.

![Servidor configurado para acesso SSH no Coolify](/img/servidor.webp)

Figura 1: Tela do servidor no Coolify, onde a chave privada e a validacao do host serao associadas.

## Objetivo

Garantir que o servidor aceite autenticacao por chave publica, que o servico SSH esteja ativo e que o Coolify consiga validar o host com segurança.

## Pre-requisitos

- Acesso administrativo ao servidor.
- Capacidade de editar `/etc/ssh/sshd_config`.
- Acesso ao usuário que recebera a chave em `authorized_keys`.
- Servico SSH instalado ou apto a instalacao.

:::important
A chave SSH nao deve ter senha nem depender de 2FA para o fluxo automatizado do Coolify.
:::

## Passos

### 1. Instale o OpenSSH

```bash
apt update && apt install -y openssh-server
systemctl enable --now ssh
```

### 2. Ajuste a configuracao do SSH

Edite `/etc/ssh/sshd_config` e confirme estas diretivas:

```ini
PubkeyAuthentication yes
PermitRootLogin prohibit-password
```

Se necessario, aplique endurecimento adicional depois da validacao inicial:

```ini
PasswordAuthentication no
```

### 3. Reinicie o servico SSH

```bash
systemctl restart ssh
```

### 4. Confirme a autorizacao por chave publica

No usuario que recebera a conexao, garanta o arquivo `authorized_keys` com permissao correta.

```bash
mkdir -p ~/.ssh
chmod 700 ~/.ssh
```

## O que a etapa precisa comprovar

- `PubkeyAuthentication` esta habilitado.
- o servico SSH esta em execucao.
- a conexao por senha nao e obrigatoria para o fluxo do Coolify.
- a chave publica podera ser adicionada sem bloqueio administrativo.

## Validacao esperada

- `systemctl status ssh` responde sem erro.
- o servidor aceita conexao por chave publica.
- o usuario alvo possui diretório `.ssh` com permissao adequada.

## Problemas comuns

- editar `sshd_config` e esquecer de reiniciar o servico.
- habilitar `PermitRootLogin prohibit-password` sem antes cadastrar a chave.
- confundir o usuario que recebe a chave com o usuario que administra o Coolify.
- tentar usar uma chave com passphrase no fluxo automatizado.

## Referencia visual

![Servidor configurado para acesso SSH no Coolify](/img/servidor.webp)

Figura 2: O host pronto para receber a chave privada cadastrada no Coolify.

## Proximo passo

Siga para [Geracao de chave SSH no Coolify](./geracao-chave.md) para criar a credencial usada pelo painel.
