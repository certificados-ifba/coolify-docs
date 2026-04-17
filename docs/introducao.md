---
title: Introducao
sidebar_position: 2
---

# Introducao

Esta documentacao foi criada para permitir que qualquer pessoa consiga implantar uma aplicacao no Coolify do zero, usando um repositorio no GitHub e um `Dockerfile` como base de build e publicacao.

## Objetivo

Ao final desta trilha, o leitor deve conseguir:

- entender o contexto arquitetural da implantacao
- validar todos os pre-requisitos tecnicos e operacionais
- preparar o repositorio GitHub para deploy
- configurar o servidor e o acesso SSH utilizado pelo Coolify
- cadastrar a aplicacao no Coolify usando `Dockerfile`
- realizar o primeiro deploy com dominio e DNS corretos
- habilitar HTTPS e validar a publicacao
- operar atualizacoes com fluxo de CI/CD previsivel
- diagnosticar e corrigir falhas comuns de implantacao

## Escopo

Este material cobre:

- GitHub como origem do codigo
- Dockerfile como mecanismo de build
- Coolify como plataforma de deploy
- DNS, dominio e HTTPS
- health check, validacao operacional e CI/CD
- troubleshooting e boas praticas para ambientes reais

Este material nao substitui:

- politicas internas de governanca da organizacao
- arquitetura detalhada da aplicacao implantada
- requisitos especificos de compliance fora do escopo do projeto

## Publico-alvo

Esta documentacao foi desenhada para:

- desenvolvedores que precisam publicar aplicacoes sem depender de suporte informal
- analistas de sistemas responsaveis por operacao e implantacao
- equipes de infraestrutura e plataforma que administram ambientes self-hosted
- estudantes e profissionais que precisam entender o fluxo completo de deploy no Coolify

## Resultado esperado

Quando a trilha estiver concluida, a equipe deve ter:

- um repositorio apto para deploy
- um servidor validado pelo Coolify
- uma aplicacao configurada com `Dockerfile`
- dominio e DNS apontando corretamente
- HTTPS ativo
- validacao final de acesso e operacao
- processo de atualizacao documentado

## Ordem ideal de leitura

1. [Pre-requisitos](./pre-requisitos.md)
2. [Arquitetura e fluxo](./arquitetura-e-fluxo.md)
3. [Estrutura do projeto](./estrutura-do-projeto.md)
4. [Preparacao do repositorio GitHub](./preparacao-do-repositorio-github.md)
5. [Configuracao do OpenSSH](./ssh/configuracao-openssh.md)
6. [Geracao da chave SSH](./ssh/geracao-chave.md)
7. [Configuracao da chave no servidor](./ssh/configuracao-servidor.md)
8. [Teste de conexao SSH](./ssh/teste-conexao.md)
9. [Configuracao da chave no Coolify](./coolify/configuracao-ssh.md)
10. [Validacao do servidor](./coolify/validacao-acesso.md)
11. [Configuracao da aplicacao no Coolify](./configuracao-da-aplicacao-no-coolify.md)
12. [Dockerfile](./dockerfile.md)
13. [Primeiro deploy](./primeiro-deploy.md)
14. [Dominio, DNS e HTTPS](./configuracao-de-dominio.md)
15. [Validacao pos-implantacao](./validacao-pos-implantacao.md)
16. [Fluxo de atualizacao e CI/CD](./fluxo-de-atualizacao-e-cicd.md)
17. [Boas praticas](./boas-praticas.md)
18. [Troubleshooting](./troubleshooting.md)
19. [Checklist executivo final](./checklist-executivo-final.md)

## Como usar este material

Cada pagina foi escrita com quatro preocupacoes:

- contexto: explicar por que a etapa existe
- execucao: mostrar o que precisa ser feito
- validacao: definir como saber se deu certo
- risco: apontar erros comuns e cuidados operacionais
