---
title: Teste de conexao SSH
sidebar_position: 4
---

# Teste de conexao SSH

Este documento valida que o host está pronto para uso no Coolify e que a integração SSH foi concluída com sucesso.

![Validar servidor e instalar o Docker Engine](/img/validar-servidor-e-instalar-o-docker-engine.webp)

Figura 1: Tela usada para validar o servidor e preparar o Docker Engine.

## 1. Validacao no painel do Coolify

No painel do Coolify:

1. Acesse **Servidores**
2. Selecione o servidor `localhost`
3. Abra a página **Geral**
4. Clique em **Validar servidor e instalar o Docker Engine**

Esse é o teste principal do fluxo operacional documentado pelo Coolify.

## 2. O que o teste valida

Durante a validação, o Coolify confirma:

- acesso SSH ao servidor
- associação correta da chave privada
- capacidade de executar comandos remotos
- preparação do Docker Engine no host
- disponibilidade do proxy da plataforma

## 3. Resultado esperado

Ao final do processo, o painel deve indicar um status saudável para o host. Em instalações bem-sucedidas, o indicativo esperado é um status verde como **Proxy em execução**.

## 4. Validacoes complementares no servidor

Se necessário, valide diretamente no servidor:

```bash
docker --version
docker ps
systemctl status ssh
```

Se o Docker tiver sido instalado na validação, ele já deve responder sem erro.

## 5. Quando a validacao falha

Se a validação falhar, revise os pontos abaixo:

- a chave privada correta foi cadastrada no Coolify
- a chave pública correspondente está em `~/.ssh/authorized_keys`
- o serviço SSH está ativo
- `PubkeyAuthentication yes` está definido
- `PermitRootLogin prohibit-password` foi aplicado sem bloquear o acesso
- o servidor possui acesso à internet para instalar o Docker Engine

## 6. Evidencia de aceite

Considere a etapa concluída quando:

- o servidor aparecer saudável no painel
- a chave privada estiver associada corretamente
- o Docker estiver instalado e funcional
- o proxy da plataforma estiver em execução
