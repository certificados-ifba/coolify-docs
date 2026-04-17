---
title: Configuracao de dominio
sidebar_position: 13
---

# Configuracao de dominio

Depois que a aplicacao estiver apta para rodar, configure o dominio ou subdominio que sera exposto ao usuario final.

## Definicao do dominio

Escolha um nome que deixe claro:

- ambiente
- aplicacao
- contexto institucional ou corporativo

Exemplos:

- `app.exemplo.com`
- `docs.exemplo.com`
- `sistema.hom.exemplo.com`

## Configuracao no Coolify

Ao cadastrar o dominio no painel:

- use o dominio completo
- prefira incluir o protocolo esperado
- defina a estrategia entre `www` e nao `www`

## Regras e cuidados

- use apenas dominios que a equipe realmente controla
- nao misture dominio de producao com ambiente de teste
- alinhe o `baseUrl` da aplicacao se ela depender disso
- nao publique DNS sem saber qual IP do servidor recebera trafego

## Validacao da etapa

- [ ] dominio principal escolhido
- [ ] dominio cadastrado no Coolify
- [ ] politica de redirecionamento definida
- [ ] equipe sabe qual URL deve responder ao final
