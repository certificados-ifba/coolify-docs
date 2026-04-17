---
title: Configuracao da chave no servidor
sidebar_position: 3
---

# Configuracao da chave SSH no servidor

Esta pagina trata da autorizacao da chave publica gerada para o Coolify e da preparacao do servidor para aceitar conexoes SSH com autenticacao por chave.

![Tela do servidor no Coolify](/img/servidor.webp)

Figura 1: O servidor `localhost` no Coolify será o destino da chave privada cadastrada.

## Objetivo

Autorizar a chave publica no servidor, ajustar permissoes e deixar o host pronto para ser associado ao Coolify.

## Pre-requisitos

- Chave SSH ja gerada no servidor.
- Acesso ao usuario que recebera a conexao.
- Servico SSH em funcionamento.

## Passos

### 1. Garantir que a pasta `.ssh` exista

No usuário que receberá a conexão SSH, crie a estrutura básica:

```bash
mkdir -p ~/.ssh
chmod 700 ~/.ssh
```

### 2. Autorizar a chave pública do Coolify

Adicione a chave pública gerada pelo Coolify ao arquivo `authorized_keys`:

```bash
cat /data/coolify/ssh/keys/id.root@host.docker.internal.pub >> ~/.ssh/authorized_keys
```

Aplique as permissões corretas:

```bash
chmod 600 ~/.ssh/authorized_keys
```

### 3. Validar o arquivo de configuracao do OpenSSH

Edite o arquivo `/etc/ssh/sshd_config`:

```bash
sudo nano /etc/ssh/sshd_config
```

Garanta estas diretivas:

```bash
PubkeyAuthentication yes
PermitRootLogin prohibit-password
```

Se a equipe decidir endurecer ainda mais o acesso depois da validação inicial, a desativação de senha pode ser feita em uma janela controlada:

```bash
PasswordAuthentication no
```

:::important
Adicione a chave ao `authorized_keys` antes de endurecer o acesso com `PermitRootLogin prohibit-password`, para evitar bloqueio administrativo.
:::

### 4. Reiniciar o SSH

```bash
sudo systemctl restart ssh
```

### 5. Associar a chave privada ao servidor no Coolify

Dentro do Coolify:

1. Acesse a aba **Servidores**
2. Clique no servidor `localhost`
3. Abra a seção **Chave privada**
4. Selecione a chave privada cadastrada anteriormente

![Selecione a chave privada](/img/selecione-a-chave-privada.webp)

Figura 2: Associação da chave privada ao servidor configurado.

## Validacao esperada

- o servidor aceita a chave publica gerada para o Coolify.
- o arquivo `authorized_keys` possui permissões corretas.
- a chave privada aparece selecionavel no Coolify.

## Problemas comuns

- esquecer de criar `.ssh` antes de gravar `authorized_keys`.
- definir permissao incorreta e o SSH ignorar a chave.
- reiniciar o servico sem validar a sintaxe do `sshd_config`.
- selecionar a chave errada no painel do Coolify.
