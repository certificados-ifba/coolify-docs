---
title: Validacao pos-implantacao
sidebar_position: 16
---

# Validacao pos-implantacao

Publicar a aplicacao nao encerra o trabalho. E necessario validar se o sistema esta realmente utilizavel em producao.

## Objetivo

Comprovar disponibilidade funcional e tecnica apos deploy, com evidencias suficientes para aceite formal.

## Pre-requisitos

- deploy concluido no Coolify.
- dominio configurado.
- HTTPS ativo ou em fase final de ativacao.

## O que deve ser validado

- acesso pela URL final.
- carregamento da pagina principal.
- carregamento de assets.
- rotas criticas.
- logs sem falhas obvias.

## Checklist final de publicacao

- [ ] dominio abre corretamente.
- [ ] HTTPS esta ativo.
- [ ] pagina principal responde sem erro.
- [ ] assets estao carregando.
- [ ] health check responde, se houver.
- [ ] logs nao mostram falhas criticas.

## Testes de acesso

- abrir a aplicacao em navegador.
- validar resposta em aba anonima.
- testar em rede externa, quando possivel.

## Testes de dominio e HTTPS

```bash
curl -I https://SEU_DOMINIO
```

## Validacao da aplicacao em producao

Dependendo do projeto, revise:

- autenticacao.
- rotas principais.
- chamadas a API.
- arquivos estaticos.
- redirecionamentos.

## Evidencias recomendadas

- URL validada.
- logs do deploy bem-sucedido.
- print do status da aplicacao no Coolify.
- registro da data e versao implantada.

## Problemas comuns

- validar apenas status no painel e nao validar acesso real do usuario.
- ignorar assets quebrados em paginas internas.
- encerrar implantacao sem registro de versao e horario.
