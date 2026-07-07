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
5. Selecionar o **Build Pack** `Dockerfile`.
6. Definir o `Dockerfile`.
7. Definir branch e porta interna.

## Como conectar o repositório

O Coolify oferece três formas de origem do código, e a escolha depende da visibilidade do repositório:

- **Repositório público**: basta informar a URL, sem autenticação.
- **GitHub App**: instalada na conta pessoal ou na organização do GitHub, dá acesso a repositórios públicos e privados e é o método recomendado para uso continuado.
- **Deploy Key**: chave SSH somente leitura, vinculada a um único repositório privado. Prefira essa opção quando quiser acesso restrito a um repositório específico, sem instalar a GitHub App inteira.

## Configurações mínimas

Ao cadastrar a aplicação, revise:

- origem do código e método de conexão (público, GitHub App ou Deploy Key).
- branch de deploy.
- **Build Pack**: o Coolify seleciona `Nixpacks` por padrão — troque explicitamente para `Dockerfile` quando o build for feito pelo `Dockerfile` do projeto.
- `Base Directory` (raiz do projeto dentro do repositório; use `/` para a raiz ou um caminho como `/backend` em monorepos).
- caminho do `Dockerfile` dentro da `Base Directory`.
- `Port Exposes`.
- domínio, se já estiver definido.

## Porta da aplicação

A porta configurada no Coolify precisa ser a porta interna usada pelo processo principal da imagem. O Coolify sugere `3000` por padrão para o Build Pack `Dockerfile` — esse valor precisa ser ajustado manualmente se a aplicação escuta em outra porta.

Exemplos:

- aplicação servida por Nginx: `80`.
- aplicação Node com servidor próprio: `3000`.
- aplicação Java: porta configurada pela própria app.

Quando mais de uma porta é declarada em `Port Exposes`, a primeira da lista é a que o Coolify usa como porta padrão do health check.

## O que evitar

- `Port Mappings` manuais quando o acesso será por domínio e proxy reverso — além de desnecessário, o `Port Mappings` desabilita rolling updates.
- branch errada no ambiente de produção.
- variáveis de ambiente ausentes.
- caminhos incorretos para `Dockerfile`.
- deixar o Build Pack em `Nixpacks` quando o projeto depende do `Dockerfile` próprio.

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
