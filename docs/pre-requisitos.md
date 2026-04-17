---
title: Pre-requisitos
sidebar_position: 3
---

# Pre-requisitos

Antes de iniciar a implantacao, confirme tudo o que precisa existir no ambiente local, no repositório e no servidor.

## Objetivo

Evitar bloqueios de acesso, build, rede, DNS e permissao durante as etapas criticas de configuracao e primeiro deploy.

## Origem do conteudo

- RC: requisitos minimos de conectividade e acesso para operacao da plataforma.
- AS: adaptacao para deploy por Dockerfile em host Linux self-hosted.
- PP: checklist de prontidao usado como gate antes de avancar.

## Acessos necessarios

- acesso ao repositório GitHub que sera implantado.
- acesso administrativo ao painel do Coolify.
- acesso SSH ao servidor onde o Coolify esta ou sera executado.
- permissao para editar DNS do dominio ou subdominio.
- conhecimento do dominio final da aplicacao.

## Dependencias do ambiente local

- cliente `ssh`.
- `git`.
- navegador atualizado.
- acesso à internet.
- editor de texto para revisao de arquivos.
- opcionalmente `docker` para validacao local do build.

## O que precisa existir

- Conta com permissao no GitHub para ler, publicar e revisar o repositorio.
- Acesso administrativo ou delegado ao servidor onde o Coolify esta instalado.
- Acesso ao painel do Coolify com permissao para cadastrar servidor, aplicacao e dominio.
- Acesso ao provedor de DNS para criar e validar registros.
- Acesso ao ambiente de terminal local para testar Git, SSH e build do projeto.
- Uma branch de deploy definida e conhecida.
- Uma porta interna esperada para a aplicacao, documentada no projeto.
- O build sera feito por `Dockerfile`, nao por build pack automatico.

## Pre-requisitos tecnicos

- Git instalado localmente.
- Docker instalado localmente, ou pelo menos a capacidade de validar o `Dockerfile` em um ambiente de build.
- Um `Dockerfile` ou plano de imagem definido para a aplicacao.
- Variaveis de ambiente identificadas, mesmo que ainda nao estejam todas configuradas.
- Porta do aplicativo conhecida, para que o Coolify consiga roteamento correto.

## Ordem de validacao

1. Confirmar acesso ao GitHub e ao repositorio.
2. Confirmar acesso ao Coolify e ao host.
3. Confirmar dominio e acesso ao DNS.
4. Confirmar `Dockerfile` e porta da aplicacao.
5. Confirmar estrategia de branch e de atualizacao.

## Validacao esperada

- `git status` e `git remote -v` funcionam no repositorio local.
- O host responde por SSH.
- O painel do Coolify esta acessivel com permissao adequada.
- O dominio pode ser resolvido e alterado no provedor DNS.
- O build do projeto pode ser executado localmente ou em ambiente equivalente.

## Problemas comuns

- descobrir durante o deploy que a branch de producao nao estava combinada.
- nao conseguir emitir SSL porque o DNS ainda nao aponta para o servidor.
- tentar operar o Coolify sem permissao de cadastro do host.
- ter um `Dockerfile` valido, mas desconhecer a porta exposta pela aplicacao.

