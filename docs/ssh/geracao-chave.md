---
title: Geracao de chave SSH no Coolify
sidebar_position: 2
---

# Geracao de chave SSH no Coolify

Este documento cobre a geração da chave SSH usada pelo Coolify para acessar o servidor via OpenSSH. Nesse fluxo, a chave é criada no próprio servidor e depois cadastrada no painel do Coolify como chave privada.

![Adicionar nova chave privada no Coolify](/img/adicione-uma-nova-chave-privada.webp)

Figura 1: Início do fluxo para registrar a chave privada que o Coolify usará no servidor.

## Visao geral do fluxo

O fluxo recomendado é:

1. Gerar a chave no servidor
2. Autorizar a chave pública no `authorized_keys`
3. Copiar a chave privada
4. Cadastrar a chave privada no Coolify
5. Associar a chave ao servidor `localhost`

## 1. Gerar a chave SSH no servidor

Execute no servidor onde o Coolify está instalado:

```bash
ssh-keygen -t ed25519 -a 100 \
  -f /data/coolify/ssh/keys/id.root@host.docker.internal \
  -q -N "" -C root@coolify
```

Esse comando cria uma chave `ed25519` sem senha, compatível com o fluxo esperado pelo Coolify para acesso automático ao host.

Em seguida, ajuste a propriedade do arquivo:

```bash
chown 9999 /data/coolify/ssh/keys/id.root@host.docker.internal
```

:::important
A chave SSH não deve ter senha. Se houver passphrase, a conexão automática do Coolify pode falhar.
:::

## 2. Copiar o conteudo da chave privada

Exiba a chave privada para copiar manualmente:

```bash
cat /data/coolify/ssh/keys/id.root@host.docker.internal
```

Copie todo o conteúdo, incluindo as linhas de início e fim da chave.

## 3. Adicionar a chave privada no painel do Coolify

No painel do Coolify, adicione uma nova chave privada:

![Adicione uma nova chave privada](/img/adicione-uma-nova-chave-privada.webp)

Figura 2: Abertura do formulário para criação de uma nova chave privada.

No campo de chave privada, cole o conteúdo copiado:

![Colar a chave privada](/img/colar-a-chave-privada.webp)

Figura 3: Cadastro da chave privada que será associada ao servidor.

## 4. Resultado esperado

Ao final desta etapa, o Coolify deve exibir a chave privada como disponível para associação a um servidor.
