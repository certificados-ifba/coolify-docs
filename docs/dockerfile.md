---
title: Dockerfile
sidebar_position: 11
---

# Dockerfile

O `Dockerfile` e a base do deploy neste projeto. Ele define como o build acontece e qual imagem final sera executada pelo Coolify.

## O que o Dockerfile precisa resolver

- instalar dependencias
- copiar arquivos corretos
- compilar ou montar a aplicacao
- definir a imagem final
- iniciar o processo principal

## Estrutura recomendada

Em muitos casos, um build multi-stage e a melhor escolha:

- stage de build: instala dependencias e gera artefatos
- stage final: publica somente o necessario para execucao

## Beneficios do multi-stage

- imagem final menor
- menos superficie de ataque
- menos ruido operacional
- build mais organizado

## Como validar localmente

### Build

```bash
docker build -t app-local .
```

### Execucao

```bash
docker run --rm -p 8080:80 app-local
```

Substitua a porta interna conforme a sua aplicacao.

## O que revisar no Dockerfile

- a imagem base e confiavel e compativel
- os comandos de build sao reprodutiveis
- o processo principal nao encerra imediatamente
- a porta interna esta clara
- o build nao depende de arquivos ausentes no repositorio

## Validacao operacional

Considere o `Dockerfile` aceito quando:

- o build local termina sem erro
- o container sobe localmente
- a aplicacao responde em teste local
- o mesmo arquivo pode ser apontado no Coolify sem adaptacoes manuais
