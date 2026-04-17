---
title: Configuracao de dominio
sidebar_position: 13
---

# Configuracao de dominio

Depois que a aplicacao estiver apta para rodar, configure o dominio ou subdominio que sera exposto ao usuario final.

## Objetivo

Definir o endereco publico oficial da aplicacao de forma consistente com ambiente e estrategia de operacao.

## Pre-requisitos

- aplicacao em execucao no Coolify.
- IP do host confirmado.
- responsavel por DNS definido.

## O que precisa ser decidido antes

- ambiente alvo.
- nome oficial da URL.
- estrategia `www` ou sem `www`.
- se a aplicacao sera publicada na raiz ou em subdominio.

## Definicao do dominio

Escolha um nome que deixe claro:

- ambiente
- aplicacao
- contexto institucional ou corporativo

Exemplos:

- `app.exemplo.com`.
- `docs.exemplo.com`.
- `sistema.hom.exemplo.com`.

## Configuracao no Coolify

Ao cadastrar o dominio no painel:

- use o dominio completo.
- prefira incluir o protocolo esperado.
- defina a estrategia entre `www` e nao `www`.
- confirme se o subdominio corresponde ao ambiente correto.

## Regras e cuidados

- use apenas dominios que a equipe realmente controla.
- nao misture dominio de producao com ambiente de teste.
- alinhe o `baseUrl` da aplicacao se ela depender disso.
- nao publique DNS sem saber qual IP do servidor recebera trafego.

## Passos

1. Defina o dominio final.
2. Cadastre o dominio na aplicacao do Coolify.
3. Salve a configuracao.
4. Confirme se a URL refletida no painel esta correta.

## Validacao da etapa

- [ ] dominio principal escolhido.
- [ ] dominio cadastrado no Coolify.
- [ ] politica de redirecionamento definida.
- [ ] equipe sabe qual URL deve responder ao final.

## Problemas comuns

- cadastrar dominio errado no app e corrigir apenas no DNS.
- alternar entre www e nao-www sem definir redirecionamento.
- usar o mesmo dominio para homologacao e producao.
