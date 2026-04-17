---
title: Pre-requisitos
sidebar_position: 3
---

# Pré-requisitos

Antes de iniciar a implantação, confirme tudo o que precisa existir no ambiente local, no repositório e no servidor.

## Objetivo

Evitar bloqueios de acesso, build, rede, DNS e permissão durante as etapas críticas de configuração e primeiro deploy.

## Origem do conteudo

- RC: requisitos mínimos de conectividade e acesso para operação da plataforma.
- AS: adaptação para deploy por Dockerfile em host Linux self-hosted.
- PP: checklist de prontidão usado como gate antes de avançar.

## Acessos necessarios

- acesso ao repositório GitHub que será implantado.
- acesso administrativo ao painel do Coolify.
- acesso SSH ao servidor onde o Coolify está ou será executado.
- permissão para editar DNS do domínio ou subdomínio.
- conhecimento do domínio final da aplicação.

## Dependencias do ambiente local

- cliente `ssh`.
- `git`.
- navegador atualizado.
- acesso à internet.
- editor de texto para revisão de arquivos.
- opcionalmente `docker` para validação local do build.

## O que precisa existir

- Conta com permissão no GitHub para ler, publicar e revisar o repositório.
- Acesso administrativo ou delegado ao servidor onde o Coolify está instalado.
- Acesso ao painel do Coolify com permissão para cadastrar servidor, aplicação e domínio.
- Acesso ao provedor de DNS para criar e validar registros.
- Acesso ao ambiente de terminal local para testar Git, SSH e build do projeto.
- Uma branch de deploy definida e conhecida.
- Uma porta interna esperada para a aplicação, documentada no projeto.
- O build será feito por `Dockerfile`, não por build pack automático.

## Pre-requisitos tecnicos

- Git instalado localmente.
- Docker instalado localmente, ou pelo menos a capacidade de validar o `Dockerfile` em um ambiente de build.
- Um `Dockerfile` ou plano de imagem definido para a aplicação.
- Variáveis de ambiente identificadas, mesmo que ainda não estejam todas configuradas.
- Porta do aplicativo conhecida, para que o Coolify consiga roteamento correto.

## Ordem de validacao

1. Confirmar acesso ao GitHub e ao repositório.
2. Confirmar acesso ao Coolify e ao host.
3. Confirmar dominio e acesso ao DNS.
4. Confirmar `Dockerfile` e porta da aplicação.
5. Confirmar estrategia de branch e de atualizacao.

## Validacao esperada

- `git status` e `git remote -v` funcionam no repositório local.
- O host responde por SSH.
- O painel do Coolify esta acessivel com permissao adequada.
- O dominio pode ser resolvido e alterado no provedor DNS.
- O build do projeto pode ser executado localmente ou em ambiente equivalente.

## Problemas comuns

- descobrir durante o deploy que a branch de produção não estava combinada.
- não conseguir emitir SSL porque o DNS ainda não aponta para o servidor.
- tentar operar o Coolify sem permissão de cadastro do host.
- ter um `Dockerfile` válido, mas desconhecer a porta exposta pela aplicação.

