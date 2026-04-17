---
title: HTTPS e SSL
sidebar_position: 15
---

# HTTPS e SSL

O HTTPS e responsavel por proteger o trafego entre o navegador e a aplicacao. No fluxo com Coolify, a emissao depende principalmente de dominio correto, DNS valido e proxy funcional.

## Objetivo

Ativar acesso seguro com certificado valido e garantir que o trafego externo seja entregue com criptografia.

## Pre-requisitos

- dominio cadastrado na aplicacao.
- DNS propagado para o IP correto.
- portas 80 e 443 liberadas.
- proxy do Coolify em execucao.

## Sequencia recomendada

1. Confirmar dominio.
2. Confirmar DNS.
3. Confirmar que o proxy responde.
4. Emitir ou aguardar a emissao do certificado.

## Como a emissao funciona

Em configuracoes comuns, o Coolify e o proxy associado tentam emitir automaticamente o certificado apos:

- dominio cadastrado.
- DNS apontando para o servidor.
- portas `80` e `443` disponiveis.

## Dependencias para funcionar

- dominio valido.
- DNS propagado.
- proxy do Coolify em execucao.
- aplicacao registrada corretamente.

## Validacoes necessarias

- acessar a URL por HTTPS.
- conferir se o navegador nao exibe alerta de certificado.
- validar se ha redirecionamento adequado de HTTP para HTTPS.

## Falhas comuns

- dominio apontando para IP errado.
- porta `80` bloqueada.
- tentativa de emissao antes da propagacao do DNS.
- configuracao salva sem redeploy.

## Critério de aceite

Considere esta etapa concluida quando a aplicacao responder com HTTPS valido no dominio final planejado.

## Problemas comuns

- tentar emitir certificado antes da propagacao DNS.
- firewall bloqueando 80/443.
- salvar alteracao de dominio sem redeploy.
