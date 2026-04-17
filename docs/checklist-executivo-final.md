---
title: Checklist executivo final
sidebar_position: 21
---

# Checklist executivo final

Use esta pagina como resumo operacional antes de declarar a implantacao concluida.

## Objetivo

Consolidar o aceite final da implantacao com criterios objetivos de prontidao tecnica e operacional.

## Repositorio

- [ ] branch de deploy definida.
- [ ] `Dockerfile` validado.
- [ ] `.dockerignore` revisado.
- [ ] segredos fora do codigo.

## Servidor e acesso

- [ ] SSH funcional.
- [ ] servidor validado no Coolify.
- [ ] Docker Engine funcional.

## Coolify

- [ ] projeto e ambiente criados.
- [ ] aplicacao cadastrada.
- [ ] branch, `Dockerfile` e porta interna corretos.

## Dominio e DNS

- [ ] dominio cadastrado no Coolify.
- [ ] DNS apontando para o IP correto.
- [ ] propagacao validada.

## Publicacao

- [ ] primeiro deploy concluido.
- [ ] container em execucao.
- [ ] health check respondendo.
- [ ] HTTPS ativo.
- [ ] aplicacao acessivel em producao.

## Operacao continua

- [ ] fluxo de atualizacao definido.
- [ ] responsavel pela validacao pos-deploy definido.
- [ ] troubleshooting documentado.
- [ ] boas praticas alinhadas com a equipe.

## Criterio de encerramento

Considere a implantacao encerrada somente quando todos os itens estiverem concluidos e houver evidencias de validacao registradas.
