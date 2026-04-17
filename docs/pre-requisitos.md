---
title: Pre-requisitos
sidebar_position: 3
---

# Pre-requisitos

Antes de iniciar a configuracao de SSH no servidor e no Coolify, valide os itens abaixo.

## Requisitos tecnicos

- estacao local com cliente SSH instalado
- acesso ao servidor Linux com usuario administrativo (sudo)
- acesso ao painel do Coolify com permissao para configurar chaves
- conta no provedor Git (exemplo: GitHub, GitLab ou Gitea)
- repositorio remoto disponivel para teste de autenticacao

## Validacoes iniciais

### 1) Verificar cliente SSH local

```bash
ssh -V
```

### 2) Verificar conectividade com o servidor

```bash
ping -c 4 SEU_SERVIDOR_OU_IP
```

### 3) Garantir usuario com sudo no servidor

```bash
sudo -l
```

### 4) Confirmar porta SSH liberada

```bash
nc -zv SEU_SERVIDOR_OU_IP 22
```

## Checklist de preparo

- [ ] hostname ou IP do servidor validado
- [ ] usuario de acesso definido (evitar root direto)
- [ ] acesso ao painel Coolify confirmado
- [ ] URL SSH do repositorio remoto identificada
- [ ] janela de manutencao aprovada (se ambiente produtivo)

## Referencia visual

A Figura 2 ilustra os pontos que devem estar prontos antes da configuracao.

![Figura 2 - Checklist de preparo do ambiente](/img/figura-2-checklist-preparacao.png)
