---
title: Checklist executivo final
sidebar_position: 21
---

# Checklist executivo final

Use esta página como resumo operacional antes de declarar a implantação concluída.

## Objetivo

Consolidar o aceite final da implantação com critérios objetivos de prontidão técnica e operacional.

## Repositorio

- [ ] branch de deploy definida.
- [ ] `Dockerfile` validado.
- [ ] `.dockerignore` revisado.
- [ ] segredos fora do código.

## Servidor e acesso

- [ ] SSH funcional.
- [ ] servidor validado no Coolify.
- [ ] Docker Engine funcional.

## Coolify

- [ ] projeto e ambiente criados.
- [ ] aplicação cadastrada.
- [ ] branch, `Dockerfile` e porta interna corretos.

## Dominio e DNS

- [ ] domínio cadastrado no Coolify.
- [ ] DNS apontando para o IP correto.
- [ ] propagação validada.

## Publicacao

- [ ] primeiro deploy concluído.
- [ ] container em execução.
- [ ] health check respondendo.
- [ ] HTTPS ativo.
- [ ] aplicação acessível em produção.

## Operacao continua

- [ ] fluxo de atualização definido.
- [ ] responsável pela validação pós-deploy definido.
- [ ] troubleshooting documentado.
- [ ] boas práticas alinhadas com a equipe.

## Criterio de encerramento

Considere a implantação encerrada somente quando todos os itens estiverem concluídos e houver evidências de validação registradas.
