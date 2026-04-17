---
title: Configuracao da aplicacao no Coolify
sidebar_position: 10
---

# Configuracao da aplicacao no Coolify

Com o servidor validado e o repositório preparado, o próximo passo é cadastrar a aplicação no Coolify.

## Objetivo

Configurar o projeto, o ambiente e a aplicacao com o minimo necessario para o primeiro deploy.

## O que precisa estar definido antes

- Projeto no Coolify identificado.
- Ambiente de destino conhecido.
- Repositório GitHub acessivel.
- Branch de deploy definida.
- Caminho do `Dockerfile` confirmado.
- Porta interna da aplicação documentada.

## Pre-requisitos

- servidor validado no Coolify.
- repositório apto e acessivel.
- branch de deploy definida.
- caminho do Dockerfile confirmado.

## Sequencia recomendada

1. Criar ou selecionar um projeto.
2. Criar ou selecionar o ambiente.
3. Adicionar a aplicação.
4. Conectar o repositório GitHub.
5. Definir o `Dockerfile`.
6. Definir branch e porta interna.

## Configuracoes minimas

Ao cadastrar a aplicacao, revise:

- origem do codigo.
- branch de deploy.
- `Dockerfile Location`.
- `Base Directory`, se aplicavel.
- `Port Exposes`.
- dominio, se ja estiver definido.

## Porta da aplicacao

A porta configurada no Coolify precisa ser a porta interna usada pelo processo principal da imagem.

Exemplos:

- aplicacao servida por Nginx: `80`.
- aplicacao Node com servidor proprio: `3000`.
- aplicacao Java: porta configurada pela propria app.

## O que evitar

- `Port Mappings` manuais quando o acesso sera por dominio e proxy reverso.
- branch errada no ambiente de producao.
- variaveis de ambiente ausentes.
- caminhos incorretos para `Dockerfile`.

## Checklist da etapa

- [ ] projeto criado.
- [ ] ambiente criado.
- [ ] aplicacao cadastrada.
- [ ] repositorio conectado.
- [ ] branch correta selecionada.
- [ ] `Dockerfile` configurado.
- [ ] porta interna definida.

## Critério de aceite

Avance para o deploy apenas quando o painel do Coolify refletir exatamente o fluxo que sera executado em producao.

## Problemas comuns

- selecionar branch de feature por engano.
- informar caminho relativo incorreto do Dockerfile.
- configurar porta interna diferente da porta real da aplicacao.
