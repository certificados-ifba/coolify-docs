---
title: Configuracao DNS
sidebar_position: 14
---

# Configuração DNS

O DNS conecta o domínio configurado no Coolify ao IP real do servidor.

## Objetivo

Garantir que o domínio público resolva para o host correto antes da emissão de HTTPS.

## Pre-requisitos

- domínio cadastrado no Coolify.
- IP público confirmado.
- acesso ao provedor DNS.

## O que precisa ser definido

- registro principal.
- TTL desejado.
- se haverá `www` ou apenas subdomínio.
- se existe IPv6 disponível.

## Registros mais comuns

Para a maioria dos cenários, use:

- registro `A` para IPv4.
- registro `AAAA` para IPv6, se aplicável.
- registro `CNAME` quando fizer sentido apontar um subdomínio para outro nome.

## Exemplo pratico

```text
A    app.exemplo.com    ->    203.0.113.10
```

## Passos

1. Crie o registro no provedor DNS.
2. Aponte para o IP correto do servidor.
3. Aguarde a propagação.
4. Valide a resolucao externamente.

## Validar a propagação

```bash
dig +short app.exemplo.com
nslookup app.exemplo.com
```

## Cuidados importantes

- confirme o IP do servidor antes de publicar.
- entenda o TTL usado pelo provedor DNS.
- não dependa de HTTPS antes de o DNS apontar corretamente.

## Checklist da etapa

- [ ] registro DNS criado.
- [ ] IP correto configurado.
- [ ] propagação validada.
- [ ] domínio responde para o host esperado.

## Problemas comuns

- TTL alto atrasando validação e gerando diagnóstico incorreto.
- registros duplicados para o mesmo host.
- apontar para IP antigo do servidor.
