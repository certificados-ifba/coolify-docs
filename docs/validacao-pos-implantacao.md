---
title: Validacao pos-implantacao
sidebar_position: 16
---

# Validação pós-implantação

Publicar a aplicação não encerra o trabalho. É necessário validar se o sistema está realmente utilizável em produção.

## Objetivo

Comprovar disponibilidade funcional e técnica após o deploy, com evidências suficientes para aceite formal.

## Pre-requisitos

- deploy concluído no Coolify.
- domínio configurado.
- HTTPS ativo ou em fase final de ativação.

## O que deve ser validado

- acesso pela URL final.
- carregamento da página principal.
- carregamento de assets.
- rotas críticas.
- logs sem falhas óbvias.

## Checklist final de publicacao

- [ ] domínio abre corretamente.
- [ ] HTTPS está ativo.
- [ ] página principal responde sem erro.
- [ ] assets estão carregando.
- [ ] health check responde, se houver.
- [ ] logs não mostram falhas críticas.

## Testes de acesso

- abrir a aplicação em navegador.
- validar resposta em aba anônima.
- testar em rede externa, quando possível.

## Testes de dominio e HTTPS

```bash
curl -I https://SEU_DOMINIO
```

## Validacao da aplicacao em producao

Dependendo do projeto, revise:

- autenticação.
- rotas principais.
- chamadas a API.
- arquivos estáticos.
- redirecionamentos.

## Evidencias recomendadas

- URL validada.
- logs do deploy bem-sucedido.
- print do status da aplicação no Coolify.
- registro da data e versão implantada.

## Problemas comuns

- validar apenas status no painel e não validar acesso real do usuário.
- ignorar assets quebrados em páginas internas.
- encerrar implantação sem registro de versão e horário.
