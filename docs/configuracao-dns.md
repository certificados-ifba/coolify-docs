---
title: Configuracao DNS
sidebar_position: 14
---

# Configuracao DNS

O DNS conecta o dominio configurado no Coolify ao IP real do servidor.

## Objetivo

Garantir que o dominio publico resolva para o host correto antes da emissao de HTTPS.

## Pre-requisitos

- dominio cadastrado no Coolify.
- IP publico confirmado.
- acesso ao provedor DNS.

## O que precisa ser definido

- registro principal.
- TTL desejado.
- se havera `www` ou apenas subdominio.
- se existe IPv6 disponivel.

## Registros mais comuns

Para a maioria dos cenarios, use:

- registro `A` para IPv4.
- registro `AAAA` para IPv6, se aplicavel.
- registro `CNAME` quando fizer sentido apontar um subdominio para outro nome.

## Exemplo pratico

```text
A    app.exemplo.com    ->    203.0.113.10
```

## Passos

1. Crie o registro no provedor DNS.
2. Aponte para o IP correto do servidor.
3. Aguarde a propagacao.
4. Valide a resolucao externamente.

## Validar a propagacao

```bash
dig +short app.exemplo.com
nslookup app.exemplo.com
```

## Cuidados importantes

- confirme o IP do servidor antes de publicar.
- entenda o TTL usado pelo provedor DNS.
- nao dependa de HTTPS antes de o DNS apontar corretamente.

## Checklist da etapa

- [ ] registro DNS criado.
- [ ] IP correto configurado.
- [ ] propagacao validada.
- [ ] dominio responde para o host esperado.

## Problemas comuns

- TTL alto atrasando validacao e gerando diagnostico incorreto.
- registros duplicados para o mesmo host.
- apontar para IP antigo do servidor.
