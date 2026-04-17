---
title: Introducao
sidebar_position: 2
---

# Introducao

Este guia documenta, de forma reproduzivel, o processo de configuracao de acesso seguro via SSH para servidores e a integracao de chaves SSH com o Coolify para autenticacao em repositorios Git.

## Objetivo

Ao final desta trilha, voce conseguira:

- preparar o ambiente para operacoes SSH
- gerar e proteger chaves SSH
- configurar acesso por chave no servidor com foco em seguranca
- validar conectividade SSH
- configurar chave SSH no Coolify
- validar autenticacao do Coolify com o repositorio remoto

## Escopo

Este material cobre somente:

- configuracao de acesso SSH
- autenticacao segura entre servidor, Coolify e repositorio Git
- hardening basico de acesso remoto

Este material NAO cobre:

- instalacao do Coolify
- criacao de projetos no Coolify
- fluxo de deploy de aplicacoes

## Fluxo recomendado

1. Ler [Pre-requisitos](./pre-requisitos.md)
2. Configurar [OpenSSH no servidor](./ssh/configuracao-openssh.md)
3. Executar a geracao e o cadastro da chave no Coolify em [Geracao de chave SSH no Coolify](./ssh/geracao-chave.md)
4. Aplicar [Configuracao da chave SSH no servidor](./ssh/configuracao-servidor.md)
5. Confirmar em [Teste de conexao SSH](./ssh/teste-conexao.md)
6. Configurar no painel em [Configuracao SSH no Coolify](./coolify/configuracao-ssh.md)
7. Finalizar em [Validacao de acesso entre Coolify e repositorio](./coolify/validacao-acesso.md)
8. Revisar [Boas praticas](./boas-praticas.md)
9. Resolver falhas com [Troubleshooting](./troubleshooting.md)

