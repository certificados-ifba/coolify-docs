---
title: Configuracao da aplicacao no Coolify
sidebar_position: 10
---

# Configuração da aplicação no Coolify

Com o servidor validado e o repositório preparado, o próximo passo é cadastrar a aplicação no Coolify.

## Objetivo

Configurar o projeto, o ambiente e a aplicação com o mínimo necessário para o primeiro deploy.

## O que precisa estar definido antes

- Projeto no Coolify identificado.
- Ambiente de destino conhecido.
- Repositório GitHub acessível.
- Branch de deploy definida.
- Caminho do `Dockerfile` confirmado.
- Porta interna da aplicação documentada.

## Pré-requisitos

- servidor validado no Coolify.
- repositório apto e acessível.
- branch de deploy definida.
- caminho do Dockerfile confirmado.

## Sequência recomendada

1. Criar ou selecionar um projeto.
2. Criar ou selecionar o ambiente.
3. Adicionar a aplicação.
4. Conectar o repositório GitHub.
5. Definir o `Dockerfile`.
6. Definir branch e porta interna.

## Configurações mínimas

Ao cadastrar a aplicação, revise:

- origem do código.
- branch de deploy.
- `Dockerfile Location`.
- `Base Directory`, se aplicável.
- `Port Exposes`.
- domínio, se já estiver definido.

## Porta da aplicação

A porta configurada no Coolify precisa ser a porta interna usada pelo processo principal da imagem.

Exemplos:

- aplicação servida por Nginx: `80`.
- aplicação Node com servidor próprio: `3000`.
- aplicação Java: porta configurada pela própria app.

## O que evitar

- `Port Mappings` manuais quando o acesso será por domínio e proxy reverso.
- branch errada no ambiente de produção.
- variáveis de ambiente ausentes.
- caminhos incorretos para `Dockerfile`.

## Checklist da etapa

- [ ] projeto criado.
- [ ] ambiente criado.
- [ ] aplicação cadastrada.
- [ ] repositório conectado.
- [ ] branch correta selecionada.
- [ ] `Dockerfile` configurado.
- [ ] porta interna definida.

## Critério de aceite

Avance para o deploy apenas quando o painel do Coolify refletir exatamente o fluxo que será executado em produção.

## Problemas comuns

- selecionar branch de feature por engano.
- informar caminho relativo incorreto do Dockerfile.
- configurar porta interna diferente da porta real da aplicação.
