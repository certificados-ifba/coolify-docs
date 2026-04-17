---
title: Configuracao DNS
sidebar_position: 14
---

# Configuracao DNS

O DNS conecta o dominio configurado no Coolify ao IP real do servidor.

## Registros mais comuns

Para a maioria dos cenarios, use:

- registro `A` para IPv4
- registro `AAAA` para IPv6, se aplicavel
- registro `CNAME` quando fizer sentido apontar um subdominio para outro nome

## Exemplo pratico

```text
A    app.exemplo.com    ->    203.0.113.10
```

## Validar a propagacao

```bash
dig +short app.exemplo.com
nslookup app.exemplo.com
```

## Cuidados importantes

- confirme o IP do servidor antes de publicar
- entenda o TTL usado pelo provedor DNS
- nao dependa de HTTPS antes de o DNS apontar corretamente

## Checklist da etapa

- [ ] registro DNS criado
- [ ] IP correto configurado
- [ ] propagacao validada
- [ ] dominio responde para o host esperado
