---
title: Preparacao do repositorio GitHub
sidebar_position: 6
---

# Preparacao do repositorio GitHub

Antes de conectar o Coolify, o repositório precisa estar pronto para receber deploys sem ajustes improvisados. Esta pagina consolida o que precisa existir no GitHub para que o fluxo seja reproduzivel.

## Objetivo

Garantir que o repositório tenha branch, arquivos e convenções aptos para o primeiro deploy.

## O que precisa estar definido

- Branch de produção definida e protegida, se aplicável.
- Estrutura de pastas coerente com o `Dockerfile`.
- Variáveis de ambiente registradas fora do código-fonte.
- README ou documentação de apoio indicando como executar a aplicação.
- Permissões e acessos adequados no repositório.

## Como o Coolify acessa o repositorio

Existem três formas de conexão, e a escolha depende da visibilidade do repositório:

- **Repositório público**: o Coolify clona direto pela URL, sem credencial.
- **GitHub App**: instalada na conta ou organização do GitHub, cobre repositórios públicos e privados e é o método recomendado para uso continuado (facilita atualização de permissões e múltiplos repositórios).
- **Deploy Key**: chave SSH somente leitura vinculada a um único repositório privado. Use quando quiser conceder acesso restrito a um repositório específico, sem instalar a GitHub App inteira na organização.

## Itens obrigatórios

- branch principal definida e documentada.
- `Dockerfile` versionado.
- `.gitignore` atualizado.
- variáveis sensíveis fora do código.
- caminho do build conhecido.
- método de acesso do Coolify ao repositório definido (público, GitHub App ou Deploy Key).

## Passos recomendados

1. Confirme a branch que sera usada em producao.
2. Valide o `Dockerfile` localmente.
3. Revise `.gitignore` e `.dockerignore`.
4. Mova segredos para variaveis de ambiente.
5. Garanta que o repositório tenha nome e descrição coerentes.
6. Confirme permissão de acesso ao GitHub para o Coolify.

## Validação esperada

- `git status` limpo antes do deploy.
- branch apontando para o conteúdo correto.
- build local reproduzivel.
- nenhum segredo visivel no historico recente.

## Problemas comuns

- branch errada conectada ao ambiente de producao.
- segredos commitados por engano.
- `.dockerignore` excluindo dependencias necessarias.
- branch publica sem revisão minima.
