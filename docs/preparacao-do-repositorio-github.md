---
title: Preparacao do repositorio GitHub
sidebar_position: 6
---

# Preparacao do repositorio GitHub

Esta etapa garante que o repositório esteja realmente pronto para ser consumido pelo Coolify.

## O que revisar antes de conectar ao Coolify

- branch principal ou branch de deploy definida
- `Dockerfile` presente e funcional
- `.dockerignore` configurado
- dependencias versionadas corretamente
- variaveis sensiveis removidas do codigo
- porta da aplicacao documentada

## Criterios minimos para o repositorio estar apto

- o build local deve ser reproduzivel
- a aplicacao deve iniciar sem ajustes manuais pos-build
- o comando principal da imagem deve manter o processo em execucao
- o repositório deve conter apenas o necessario para o deploy

## Validacoes recomendadas

### Validar a branch atual

```bash
git branch --show-current
```

### Validar remotos configurados

```bash
git remote -v
```

### Validar o build local da imagem

```bash
docker build -t app-local .
```

### Validar a execucao local

```bash
docker run --rm -p 8080:80 app-local
```

Adapte a porta externa conforme a porta interna da aplicacao.

## Checklist de preparacao

- [ ] branch de deploy definida
- [ ] `Dockerfile` validado localmente
- [ ] `docker run` validado localmente
- [ ] `.dockerignore` revisado
- [ ] segredos retirados do codigo
- [ ] README ou documentacao operacional minima atualizada

## Riscos comuns

- confiar em build nunca testado fora da maquina do autor
- usar arquivos locais nao versionados sem perceber
- deixar a porta da aplicacao implicita
- misturar configuracoes de homologacao e producao na mesma branch
