---
title: Dockerfile
sidebar_position: 11
---

# Dockerfile

O `Dockerfile` é a base do deploy neste projeto. Ele define como o build acontece e qual imagem final será executada pelo Coolify.

## Objetivo

Definir um build reproduzível, com runtime estável e compatível com o fluxo de implantação da plataforma.

## O que o arquivo precisa resolver

- instalar dependências.
- copiar arquivos corretos.
- compilar ou montar a aplicação.
- definir a imagem final.
- iniciar o processo principal.

## Pre-requisitos

- Docker instalado no ambiente local.
- contexto de build limpo com `.dockerignore`.
- caminho do Dockerfile conhecido e versionado.

## Estrutura recomendada

Em muitos casos, um build multi-stage é a melhor escolha:

- stage de build: instala dependências e gera artefatos.
- stage final: publica somente o necessário para execução.

## Beneficios do multi-stage

- imagem final menor.
- menos superfície de ataque.
- menos ruído operacional.
- build mais organizado.

## Como validar localmente

### Build

```bash
docker build -t app-local .
```

### Execucao

```bash
docker run --rm -p 8080:80 app-local
```

Substitua a porta interna conforme a sua aplicação.

## O que revisar no Dockerfile

- a imagem base é confiável e compatível.
- os comandos de build são reprodutíveis.
- o processo principal não encerra imediatamente.
- a porta interna está clara.
- o build não depende de arquivos ausentes no repositório.

## Validacao operacional

Considere o `Dockerfile` aceito quando:

- o build local termina sem erro.
- o container sobe localmente.
- a aplicação responde em teste local.
- o mesmo arquivo pode ser apontado no Coolify sem adaptações manuais.

## Problemas comuns

- copiar arquivos errados para a imagem final.
- esquecer variável ou arquivo exigido em runtime.
- usar imagem base não suportada pela stack da aplicação.
