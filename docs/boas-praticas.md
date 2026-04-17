---
title: Boas praticas de seguranca
sidebar_position: 8
---

# Boas práticas

Este documento consolida recomendacoes para reduzir risco operacional no ciclo completo de implantacao: repositório, Dockerfile, Coolify, dominio, DNS, HTTPS e operacao continua.

## Objetivo

Transformar a implantação em rotina previsível, com segurança mínima e baixa dependência de conhecimento tácito.

## Padronizacao de ambientes

- mantenha separação clara entre homologação e produção.
- use nomes padronizados para projeto, ambiente e aplicação.
- documente porta interna, domínio, branch e estratégia de deploy.
- evite configurações ad hoc diretamente em produção.

## GitHub e branches

- defina uma branch principal de deploy.
- proteja a branch de produção com revisão, quando possível.
- mantenha o `Dockerfile` versionado junto da aplicação.
- registre alterações críticas em pull request e changelog.

## Dockerfile e imagem

- prefira imagens base oficiais e com versão fixa.
- minimize a imagem final.
- use `.dockerignore` para reduzir contexto de build.
- valide o build localmente antes do primeiro deploy em produção.
- documente claramente a porta interna da aplicação.

## Controle de acesso e SSH

- use uma chave por pessoa ou por automação.
- evite compartilhar chaves privadas.
- remova acessos obsoletos imediatamente.
- desabilite autenticação por senha no SSH quando o fluxo por chave estiver validado.
- revise `authorized_keys` periodicamente.

## Dominio, DNS e HTTPS

- use um subdomínio dedicado por aplicação.
- mantenha nomes previsíveis, como `app.empresa.com`.
- confirme DNS antes de depender da emissão de certificado.
- não altere domínio e porta ao mesmo tempo sem janela de validação.
- documente TTL e registros usados na publicação.

## Operacao e observabilidade

- configure health check coerente com a aplicação.
- monitore logs de build e runtime após cada deploy.
- valide HTTPS, redirecionamento e carregamento de assets.
- mantenha uma checklist de aceite por publicação.
- defina procedimento de rollback antes de grandes mudanças.

## Seguranca minima recomendada

- restrinja quem pode editar DNS e Coolify.
- use senhas fortes e MFA nos provedores externos.
- armazene segredos somente no Coolify ou em cofre apropriado.
- não versione credenciais no GitHub.
- revise portas e serviços expostos no host.

## Documentacao viva

- atualize a documentação sempre que o fluxo real mudar.
- registre screenshots apenas como apoio, nunca como única fonte de verdade.
- mantenha exemplos de comandos testados.
- inclua data ou versão da revisão quando a plataforma mudar muito.

## Problemas comuns

- documentação desatualizada após mudança de fluxo.
- segredos fora de cofre e expostos em histórico de commit.
- ausência de responsável por validação pós-deploy.
