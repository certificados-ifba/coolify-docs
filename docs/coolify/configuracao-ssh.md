---
title: Configuracao SSH no Coolify
sidebar_position: 1
---

# Configuracao da chave SSH no Coolify

Este documento cobre o cadastro da chave privada no painel do Coolify para permitir autenticação segura com o servidor administrado pela plataforma.

![Adicione uma nova chave privada](/img/adicione-uma-nova-chave-privada.webp)

Figura 1: Início do cadastro da chave privada no painel do Coolify.

## 1. Obter a chave privada gerada no servidor

No servidor com Coolify instalado, exiba a chave privada:

```bash
cat /data/coolify/ssh/keys/id.root@host.docker.internal
```

Copie o conteúdo completo.

## 2. Adicionar uma nova chave privada

No painel do Coolify:

1. Abra a área de chaves privadas
2. Clique em adicionar nova chave privada
3. Informe um nome descritivo
4. Cole o conteúdo da chave privada
5. Salve o cadastro

![Colar a chave privada](/img/colar-a-chave-privada.webp)

Figura 2: Colagem do conteúdo da chave privada no formulário do Coolify.

## 3. Associar a chave ao servidor

Depois do cadastro:

1. Acesse a aba **Servidores**
2. Clique no servidor `localhost`
3. Abra a página **Chave privada**
4. Selecione a chave adicionada

![Servidor localhost](/img/servidor.webp)

Figura 3: Seleção do host em que a chave privada será utilizada.

![Selecione a chave privada](/img/selecione-a-chave-privada.webp)

Figura 4: Associação da chave privada cadastrada ao servidor `localhost`.

## 4. Resultado esperado

Ao final, a chave privada deve estar disponível no painel e vinculada ao servidor correto para que o Coolify possa validá-lo e instalar o Docker Engine, quando necessário.
