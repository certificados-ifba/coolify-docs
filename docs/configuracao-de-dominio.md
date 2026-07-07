---
title: Configuracao de dominio
sidebar_position: 13
---

# Configuração de domínio

Depois que a aplicação estiver apta para rodar, configure o domínio ou subdomínio que será exposto ao usuário final.

## Objetivo

Definir o endereço público oficial da aplicação de forma consistente com ambiente e estratégia de operação.

## Pre-requisitos

- aplicação em execução no Coolify.
- IP do host confirmado.
- responsável por DNS definido.

## O que precisa ser decidido antes

- ambiente alvo.
- nome oficial da URL.
- estratégia `www` ou sem `www`.
- se a aplicação será publicada na raiz ou em subdomínio.

## Definicao do dominio

Escolha um nome que deixe claro:

- ambiente
- aplicação
- contexto institucional ou corporativo

Exemplos:

- `app.exemplo.com`.
- `docs.exemplo.com`.
- `sistema.hom.exemplo.com`.

## Sintaxe exigida pelo Coolify

O campo de domínio da aplicação no Coolify não aceita apenas o nome do host: ele espera uma URL completa, com protocolo. O formato mínimo é:

```text
https://app.exemplo.com
```

Regras importantes desse campo:

- o protocolo é obrigatório (`https://` para emissão automática de certificado, `http://` quando não houver HTTPS).
- múltiplos domínios para a mesma aplicação são separados por vírgula: `https://app.exemplo.com,https://api.exemplo.com`.
- é possível informar uma porta específica de proxy logo após o host: `https://app.exemplo.com:3000`.
- quando houver porta e caminho ao mesmo tempo, a porta vem antes do caminho: `https://app.exemplo.com:3000/api` (nunca `/api:3000`).
- é possível rotear caminhos diferentes para aplicações diferentes no mesmo domínio (`https://exemplo.com/api`, `https://exemplo.com/admin`); o Coolify prioriza o caminho mais específico, mas isso só funciona enquanto a aplicação responsável pelo caminho estiver saudável — se cair, o Coolify recai para o roteamento do domínio raiz.

## Configuração no Coolify

Ao cadastrar o dominio no painel:

- use a URL completa, com protocolo, no formato acima.
- defina a estratégia entre `www` e não `www`.
- confirme se o subdomínio corresponde ao ambiente correto.

## Regras e cuidados

- use apenas domínios que a equipe realmente controla.
- não misture domínio de produção com ambiente de teste.
- alinhe o `baseUrl` da aplicação se ela depender disso.
- não publique DNS sem saber qual IP do servidor receberá tráfego.
- bancos de dados não suportam domínio próprio no Coolify; essa configuração é exclusiva de aplicações e serviços.

## Passos

1. Defina o domínio final.
2. Cadastre o domínio na aplicação do Coolify.
3. Salve a configuração.
4. Confirme se a URL refletida no painel esta correta.

## Validacao da etapa

- [ ] domínio principal escolhido.
- [ ] domínio cadastrado no Coolify.
- [ ] política de redirecionamento definida.
- [ ] equipe sabe qual URL deve responder ao final.

## Problemas comuns

- cadastrar domínio errado no app e corrigir apenas no DNS.
- alternar entre www e não-www sem definir redirecionamento.
- usar o mesmo domínio para homologação e produção.
- esquecer o protocolo (`https://`) no campo de domínio do Coolify.
- colocar o caminho antes da porta na mesma URL (`/api:3000` em vez de `:3000/api`).
