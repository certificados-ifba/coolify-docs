---
title: HTTPS e SSL
sidebar_position: 15
---

# HTTPS e SSL

O HTTPS e responsavel por proteger o trafego entre o navegador e a aplicacao. No fluxo com Coolify, a emissao depende principalmente de dominio correto, DNS valido e proxy funcional.

## Como a emissao funciona

Em configuracoes comuns, o Coolify e o proxy associado tentam emitir automaticamente o certificado apos:

- dominio cadastrado
- DNS apontando para o servidor
- portas `80` e `443` disponiveis

## Dependencias para funcionar

- dominio valido
- DNS propagado
- proxy do Coolify em execucao
- aplicacao registrada corretamente

## Validacoes necessarias

- acessar a URL por HTTPS
- conferir se o navegador nao exibe alerta de certificado
- validar se ha redirecionamento adequado de HTTP para HTTPS

## Falhas comuns

- dominio apontando para IP errado
- porta `80` bloqueada
- tentativa de emissao antes da propagacao do DNS
- configuracao salva sem redeploy

## Critério de aceite

Considere esta etapa concluida quando a aplicacao responder com HTTPS valido no dominio final planejado.
