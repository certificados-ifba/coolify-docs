---
title: Pre-requisitos
sidebar_position: 3
---

# Pre-requisitos

Antes de iniciar a implantacao, confirme tudo o que precisa existir no ambiente local, no repositório e no servidor. Esta etapa evita que a equipe avance para o deploy com bloqueios de acesso, DNS, build ou permissao.

## Acessos necessarios

- acesso ao repositório GitHub que será implantado
- acesso administrativo ao painel do Coolify
- acesso SSH ao servidor onde o Coolify está ou será executado
- permissao para editar DNS do domínio ou subdomínio
- conhecimento do domínio final da aplicação

## Dependencias do ambiente local

- cliente `ssh`
- `git`
- navegador atualizado
- acesso à internet
- editor de texto para revisão de arquivos
- opcionalmente `docker` para validação local do build

## Dependencias do servidor

- Linux 64 bits
- usuário com `sudo`
- portas `22`, `80` e `443` liberadas
- acesso de saída para internet
- recursos suficientes para build e execução

## Premissas e limitacoes

- a aplicação já está versionada no GitHub
- o build será feito por `Dockerfile`, não por build pack automático
- o fluxo considera publicação em domínio ou subdomínio próprio
- o leitor precisa seguir a ordem sequencial da documentação
- ambientes de produção podem exigir controles extras de segurança e mudança

## Validacoes iniciais recomendadas

### 1) Verificar cliente SSH local

```bash
ssh -V
```

### 2) Verificar conectividade com o servidor

```bash
ping -c 4 SEU_SERVIDOR_OU_IP
```

### 3) Confirmar acesso ao GitHub

- repositório visível
- branch principal identificada
- permissão para leitura e atualização, se aplicável

### 4) Garantir usuario com sudo no servidor

```bash
sudo -l
```

### 5) Confirmar porta SSH liberada

```bash
nc -zv SEU_SERVIDOR_OU_IP 22
```

### 6) Validar resolução DNS atual, se o domínio já existir

```bash
dig +short SEU_DOMINIO
```

## Checklist de preparo

- [ ] IP ou hostname do servidor foi validado
- [ ] usuario administrativo do servidor foi definido
- [ ] repositório GitHub foi identificado e está acessível
- [ ] branch de deploy foi definida
- [ ] domínio ou subdomínio de publicação foi escolhido
- [ ] acesso ao painel do Coolify foi confirmado
- [ ] equipe sabe qual porta interna a aplicação usará
- [ ] janela de manutenção foi aprovada, se necessário

## Critério de aceite desta etapa

Avance apenas quando não houver dúvida sobre:

- de onde o código será lido
- em qual servidor o deploy será executado
- qual domínio será usado
- quem pode alterar DNS e Coolify
- quem valida o resultado final da implantação

