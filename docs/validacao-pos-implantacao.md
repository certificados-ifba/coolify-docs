---
title: Validacao pos-implantacao
sidebar_position: 16
---

# Validacao pos-implantacao

Publicar a aplicacao nao encerra o trabalho. E necessario validar se o sistema esta realmente utilizavel em producao.

## Checklist final de publicacao

- [ ] dominio abre corretamente
- [ ] HTTPS esta ativo
- [ ] pagina principal responde sem erro
- [ ] assets estao carregando
- [ ] health check responde, se houver
- [ ] logs nao mostram falhas criticas

## Testes de acesso

- abrir a aplicacao em navegador
- validar resposta em aba anonima
- testar em rede externa, quando possivel

## Testes de dominio e HTTPS

```bash
curl -I https://SEU_DOMINIO
```

## Validacao da aplicacao em producao

Dependendo do projeto, revise:

- autenticacao
- rotas principais
- chamadas a API
- arquivos estaticos
- redirecionamentos

## Evidencias recomendadas

- URL validada
- logs do deploy bem-sucedido
- print do status da aplicacao no Coolify
- registro da data e versao implantada
