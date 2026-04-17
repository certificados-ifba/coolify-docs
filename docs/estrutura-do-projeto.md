---
title: Estrutura do projeto
sidebar_position: 5
---

# Estrutura do projeto

O repositório precisa ser simples de entender por quem vai implantar, manter e auditar. A estrutura deste projeto prioriza previsibilidade: o que interessa ao deploy deve estar evidente na raiz ou em caminhos padronizados, sem depender de conhecimento implícito.

## Objetivo

Definir uma estrutura mínima que favoreça build reproduzível e leitura clara pelo time.

## O que o leitor precisa enxergar

- Onde está a aplicação principal.
- Onde esta o `Dockerfile`.
- Onde estão variáveis de ambiente e arquivos de configuração.
- O que deve ou nao ser versionado.
- Qual e o ponto de entrada do deploy.

## Estrutura minima esperada

- `Dockerfile` na raiz ou em caminho documentado.
- Código-fonte da aplicação em diretório previsível.
- Arquivos de configuração de build versionados.
- `.dockerignore` coerente com o build.
- `.gitignore` cobrindo saídas temporárias.
- Documentação apontando a branch de deploy.

## Regras de organizacao

1. Mantenha o caminho do `Dockerfile` fixo e documentado.
2. Se usar subdiretório, declare isso explicitamente no Coolify.
3. Não misture artefatos de build com código-fonte.
4. Documente variáveis essenciais para o deploy.
5. Evite dependências implícitas no ambiente local.

## O que validar antes de publicar

- o build local encontra o `Dockerfile`.
- o contexto de build está correto.
- o `.dockerignore` não remove arquivos necessários.
- a branch de deploy não depende de alterações locais não commitadas.

## Problemas comuns

- `Dockerfile` apontando para pasta errada.
- arquivos de build ignorados por engano.
- estrutura local diferente da estrutura usada no deploy.
- repositório sem convenção clara de entrada principal.
