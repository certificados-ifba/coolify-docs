---
title: Boas praticas de seguranca
sidebar_position: 8
---

# Boas praticas

Este documento consolida recomendacoes para reduzir risco operacional no ciclo completo de implantacao: repositório, Dockerfile, Coolify, dominio, DNS, HTTPS e operacao continua.

## Padronizacao de ambientes

- mantenha separacao clara entre homologacao e producao
- use nomes padronizados para projeto, ambiente e aplicacao
- documente porta interna, dominio, branch e estrategia de deploy
- evite configuracoes ad hoc diretamente em producao

## GitHub e branches

- defina uma branch principal de deploy
- proteja a branch de producao com revisao, quando possivel
- mantenha o `Dockerfile` versionado junto da aplicacao
- registre alteracoes criticas em pull request e changelog

## Dockerfile e imagem

- prefira imagens base oficiais e com versao fixa
- minimize a imagem final
- use `.dockerignore` para reduzir contexto de build
- valide o build localmente antes do primeiro deploy em producao
- documente claramente a porta interna da aplicacao

## Controle de acesso e SSH

- use uma chave por pessoa ou por automacao
- evite compartilhar chaves privadas
- remova acessos obsoletos imediatamente
- desabilite autenticao por senha no SSH quando o fluxo por chave estiver validado
- revise `authorized_keys` periodicamente

## Dominio, DNS e HTTPS

- use um subdominio dedicado por aplicacao
- mantenha nomes previsiveis, como `app.empresa.com`
- confirme DNS antes de depender da emissao de certificado
- nao altere dominio e porta ao mesmo tempo sem janela de validacao
- documente TTL e registros usados na publicacao

## Operacao e observabilidade

- configure health check coerente com a aplicacao
- monitore logs de build e runtime apos cada deploy
- valide HTTPS, redirecionamento e carregamento de assets
- mantenha uma checklist de aceite por publicacao
- defina procedimento de rollback antes de grandes mudancas

## Seguranca minima recomendada

- restrinja quem pode editar DNS e Coolify
- use senhas fortes e MFA nos provedores externos
- armazene segredos somente no Coolify ou em cofre apropriado
- nao versione credenciais no GitHub
- revise portas e servicos expostos no host

## Documentacao viva

- atualize a documentacao sempre que o fluxo real mudar
- registre screenshots apenas como apoio, nunca como unica fonte de verdade
- mantenha exemplos de comandos testados
- inclua data ou versao da revisao quando a plataforma mudar muito
