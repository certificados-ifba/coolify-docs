---
title: HTTPS e SSL
sidebar_position: 15
---

# HTTPS e SSL

O HTTPS é responsável por proteger o tráfego entre o navegador e a aplicação. No fluxo com Coolify, a emissão depende principalmente de domínio correto, DNS válido e proxy funcional.

## Objetivo

Ativar acesso seguro com certificado válido e garantir que o tráfego externo seja entregue com criptografia.

## Pre-requisitos

- domínio cadastrado na aplicação.
- DNS propagado para o IP correto.
- portas 80 e 443 liberadas.
- proxy do Coolify em execucao.

## Sequência recomendada

1. Confirmar dominio.
2. Confirmar DNS.
3. Confirmar que o proxy responde.
4. Emitir ou aguardar a emissao do certificado.

## Como a emissao funciona

Em configurações comuns, o Coolify e o proxy associado tentam emitir automaticamente o certificado após:

- domínio cadastrado.
- DNS apontando para o servidor.
- portas `80` e `443` disponíveis.

## Dependencias para funcionar

- domínio válido.
- DNS propagado.
- proxy do Coolify em execução.
- aplicação registrada corretamente.

## Validacoes necessarias

- acessar a URL por HTTPS.
- conferir se o navegador não exibe alerta de certificado.
- validar se há redirecionamento adequado de HTTP para HTTPS.

## Falhas comuns

- domínio apontando para IP errado.
- porta `80` bloqueada.
- tentativa de emissão antes da propagação do DNS.
- configuração salva sem redeploy.

## Critério de aceite

Considere esta etapa concluída quando a aplicação responder com HTTPS válido no domínio final planejado.

## Problemas comuns

- tentar emitir certificado antes da propagação DNS.
- firewall bloqueando 80/443.
- salvar alteração de domínio sem redeploy.
