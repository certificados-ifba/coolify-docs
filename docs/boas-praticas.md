---
title: Boas praticas de seguranca
sidebar_position: 8
---

# Boas praticas de seguranca

Este documento consolida recomendacoes para reduzir risco operacional na autenticacao SSH entre usuarios, servidores e Coolify.

## Gestao de chaves

- use um par de chaves por pessoa e por ambiente
- evite compartilhar chave privada entre membros do time
- proteja a chave privada com passphrase forte
- nomeie chaves com padrao claro (exemplo: id_ed25519_coolify_prod)
- mantenha inventario de quem possui acesso em cada ambiente

## Controle de acesso

- desabilite login por senha no SSH quando possivel
- desabilite login de root via SSH
- conceda acesso por grupo e principio do menor privilegio
- remova chaves de usuarios desligados imediatamente

## Operacao segura

- use bastion/jump host para ambientes criticos
- aplique rate limiting e fail2ban para reduzir brute force
- monitore logs de autenticacao regularmente
- gire chaves em ciclos definidos (exemplo: 90 ou 180 dias)

## Hardening recomendado

Exemplo de parametros no servidor:

```bash
sudo sed -n '1,220p' /etc/ssh/sshd_config
```

Parametros a validar:

- `PubkeyAuthentication yes`
- `PasswordAuthentication no`
- `PermitRootLogin no`
- `AllowUsers usuario_admin`

Aplicar alteracoes com cautela:

```bash
sudo sshd -t
sudo systemctl restart sshd || sudo systemctl restart ssh
```

## Governanca e auditoria

- mantenha trilha de auditoria de inclusao/remocao de chaves
- registre mudancas em runbook e ticket de mudanca
- defina procedimento de revogacao imediata em incidente

## Referencia visual

A Figura 3 resume o ciclo de vida seguro de chaves SSH.

![Figura 3 - Ciclo de vida de chaves SSH](/img/figura-3-ciclo-chave-ssh.png)
