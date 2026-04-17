---
title: Validacao do servidor
sidebar_position: 2
---

# Validacao do servidor no Coolify

Este documento valida se o Coolify consegue autenticar por SSH no servidor, instalar o Docker Engine e deixar o proxy operacional.

![Validar servidor e instalar o Docker Engine](/img/validar-servidor-e-instalar-o-docker-engine.webp)

Figura 1: Ação de validação do host dentro da tela Geral do servidor.

## 1. Executar a validacao

Na tela do servidor `localhost`, acesse a aba **Geral** e clique em **Validar servidor e instalar o Docker Engine**.

Esse processo confirma que o Coolify consegue:

- conectar via SSH ao servidor
- usar a chave privada associada
- preparar o Docker Engine no host
- habilitar o proxy necessário para deploys

## 2. Resultado esperado

Depois da conclusão, o host deve exibir um status saudável, com indicativo verde como **Proxy em execução**.

## 3. O que revisar se falhar

Se a validação não concluir com sucesso, revise:

- a chave privada cadastrada no painel
- a chave pública em `~/.ssh/authorized_keys`
- o serviço SSH em execução
- a conectividade de rede do servidor
- permissões do diretório `.ssh`

Comandos úteis no host:

```bash
systemctl status ssh
docker --version
docker ps
ls -ld ~/.ssh
ls -l ~/.ssh/authorized_keys
```

## 4. Evidencias de aceite

Considere a etapa concluída quando:

- o servidor aparece como validado
- o Docker Engine está funcional
- o proxy está em execução
- o host está pronto para receber aplicações

## 5. Proximo passo

Com o host validado, siga para a etapa de cadastro e deploy das aplicações no projeto.
