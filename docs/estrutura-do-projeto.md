---
title: Estrutura do projeto
sidebar_position: 5
---

# Estrutura do projeto

O repositorio precisa ser simples de entender por quem vai implantar, manter e auditar. A estrutura deste projeto prioriza previsibilidade: o que interessa ao deploy deve estar evidente na raiz ou em caminhos padronizados, sem depender de conhecimento implícito.

## Objetivo

Definir uma estrutura minima que favoreca build reproduzivel e leitura clara pelo time.

## O que o leitor precisa enxergar

- Onde esta a aplicacao principal.
- Onde esta o `Dockerfile`.
- Onde estao variaveis de ambiente e arquivos de configuracao.
- O que deve ou nao ser versionado.
- Qual e o ponto de entrada do deploy.

## Estrutura minima esperada

- `Dockerfile` na raiz ou em caminho documentado.
- Codigo fonte da aplicacao em diretorio previsivel.
- Arquivos de configuracao de build versionados.
- `.dockerignore` coerente com o build.
- `.gitignore` cobrindo saidas temporarias.
- Documentacao apontando a branch de deploy.

## Regras de organizacao

1. Mantenha o caminho do `Dockerfile` fixo e documentado.
2. Se usar subdiretorio, declare isso explicitamente no Coolify.
3. Nao misture artefatos de build com codigo-fonte.
4. Documente variaveis essenciais para o deploy.
5. Evite dependencias implicitas no ambiente local.

## O que validar antes de publicar

- o build local encontra o `Dockerfile`.
- o contexto de build esta correto.
- o `.dockerignore` nao remove arquivos necessarios.
- a branch de deploy nao depende de alteracoes locais nao commitadas.

## Problemas comuns

- `Dockerfile` apontando para pasta errada.
- arquivos de build ignorados por engano.
- estrutura local diferente da estrutura usada no deploy.
- repositorio sem convencao clara de entrada principal.
