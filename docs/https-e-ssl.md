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

Quando o domínio é cadastrado com o prefixo `https://` (ver [Configuração de domínio](./configuracao-de-dominio.md)), o Coolify configura automaticamente o proxy reverso (Traefik ou Caddy) e solicita o certificado ao Let's Encrypt, sem passo manual adicional. Isso depende de:

- domínio cadastrado com `https://`.
- DNS apontando para o servidor.
- portas `80` e `443` disponíveis.

## Renovacao e fallback

- os certificados emitidos pelo Let's Encrypt são válidos por 90 dias; o Coolify renova automaticamente antes do vencimento.
- se a emissão pelo Let's Encrypt falhar (por exemplo, DNS ainda não propagado), o proxy usa um certificado autoassinado temporário para manter a aplicação acessível. Nesse caso o site carrega, mas o navegador exibe alerta de certificado até a emissão real ser concluída.

## Dependencias para funcionar

- domínio válido, cadastrado com protocolo `https://`.
- DNS propagado.
- proxy do Coolify em execução.
- aplicação registrada corretamente.

## Validacoes necessarias

- acessar a URL por HTTPS.
- conferir se o navegador não exibe alerta de certificado (alerta indica fallback autoassinado, não falha definitiva).
- validar se há redirecionamento adequado de HTTP para HTTPS.

## Falhas comuns

- domínio apontando para IP errado.
- porta `80` bloqueada.
- tentativa de emissão antes da propagação do DNS.
- configuração salva sem redeploy.
- domínio cadastrado sem o prefixo `https://`, o que faz o Coolify não tentar emitir certificado algum.

## Verificacao de DNS usada pelo Coolify

Por padrão, o Coolify valida a propagação do domínio consultando o resolvedor público `1.1.1.1` (Cloudflare). Em redes com DNS interno ou split-horizon, essa checagem pode acusar falso negativo mesmo com o registro já propagado; o servidor de checagem pode ser alterado em **Settings** no painel.

## Critério de aceite

Considere esta etapa concluída quando a aplicação responder com HTTPS válido no domínio final planejado.

## Problemas comuns

- tentar emitir certificado antes da propagação DNS.
- firewall bloqueando 80/443.
- salvar alteração de domínio sem redeploy.
