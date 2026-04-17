---
title: Configuracao da aplicacao no Coolify
sidebar_position: 10
---

# Configuracao da aplicacao no Coolify

Com o servidor validado e o repositório preparado, o proximo passo e cadastrar a aplicacao no Coolify.

## Objetivo

Configurar o projeto, o ambiente e a aplicacao com o minimo necessario para o primeiro deploy.

## Sequencia recomendada

1. criar ou selecionar um projeto
2. criar ou selecionar o ambiente
3. adicionar a aplicacao
4. conectar o repositório GitHub
5. definir o `Dockerfile`
6. definir branch e porta interna

## Configuracoes minimas

Ao cadastrar a aplicacao, revise:

- origem do codigo
- branch de deploy
- `Dockerfile Location`
- `Base Directory`, se aplicavel
- `Port Exposes`
- dominio, se ja estiver definido

## Porta da aplicacao

A porta configurada no Coolify precisa ser a porta interna usada pelo processo principal da imagem.

Exemplos:

- aplicacao servida por Nginx: `80`
- aplicacao Node com servidor proprio: `3000`
- aplicacao Java: porta configurada pela propria app

## O que evitar

- `Port Mappings` manuais quando o acesso sera por dominio e proxy reverso
- branch errada no ambiente de producao
- variaveis de ambiente ausentes
- caminhos incorretos para `Dockerfile`

## Checklist da etapa

- [ ] projeto criado
- [ ] ambiente criado
- [ ] aplicacao cadastrada
- [ ] repositorio conectado
- [ ] branch correta selecionada
- [ ] `Dockerfile` configurado
- [ ] porta interna definida

## Critério de aceite

Avance para o deploy apenas quando o painel do Coolify refletir exatamente o fluxo que sera executado em producao.
