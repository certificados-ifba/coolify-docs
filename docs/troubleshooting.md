---
title: Troubleshooting
sidebar_position: 9
---

# Troubleshooting

Este guia lista problemas recorrentes na autenticacao SSH de servidor e na integracao de chave com o Coolify.

## 1) Permission denied (publickey)

### Causa comum

- chave publica nao foi instalada no servidor
- permissao incorreta em `~/.ssh` ou `authorized_keys`
- chave privada errada sendo usada no cliente

### Diagnostico

```bash
ssh -i ~/.ssh/id_ed25519 -vvv usuario@servidor
```

### Correcao

```bash
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
chown -R "$USER":"$USER" ~/.ssh
```

## 2) Host key verification failed

### Causa comum

- mudanca de host key no servidor
- entrada antiga em `known_hosts`

### Correcao

```bash
ssh-keygen -R servidor-ou-ip
ssh usuario@servidor
```

## 3) Timeout na conexao SSH

### Causa comum

- firewall bloqueando porta 22
- servico SSH parado

### Diagnostico

```bash
nc -zv servidor-ou-ip 22
sudo systemctl status sshd || sudo systemctl status ssh
```

## 4) Chave nao aparece no Coolify

### Causa comum

- campo preenchido com chave privada em formato invalido
- chave incompleta (quebra de linha removida)

### Correcao

```bash
cat ~/.ssh/id_ed25519
```

Confirme que o conteudo inclui cabecalho e rodape:

- `-----BEGIN OPENSSH PRIVATE KEY-----`
- `-----END OPENSSH PRIVATE KEY-----`

## 5) Coolify nao autentica no repositorio

### Causa comum

- chave publica nao foi adicionada no provedor Git (Deploy Key ou chave da conta)
- permissao de leitura ausente para o repositorio alvo

### Diagnostico rapido

```bash
ssh -T git@github.com
```

### Correcao

- adicionar chave publica correspondente no provedor Git
- garantir acesso de leitura ao repositorio correto
- repetir teste de conexao no Coolify

## 6) Erro de permissao no servidor apos hardening

### Causa comum

- `PasswordAuthentication no` aplicado antes de validar chave

### Correcao segura

1. Mantenha uma sessao SSH aberta antes de reiniciar `sshd`.
2. Valide em nova sessao.
3. Reverta configuracao se necessario.

Comando de validacao de sintaxe:

```bash
sudo sshd -t
```

## Referencia visual

A Figura 4 organiza o fluxo de diagnostico por sintoma.

![Figura 4 - Fluxo de troubleshooting SSH e Coolify](/img/figura-4-fluxo-troubleshooting.png)
