---
title: Arquitetura e fluxo
sidebar_position: 4
---

# Arquitetura e fluxo

Esta pagina apresenta a visão de ponta a ponta da implantacao. O objetivo e garantir que o leitor entenda o papel de cada componente antes de entrar na execucao operacional.

## Visao geral da arquitetura

O fluxo base desta documentacao considera:

- GitHub como origem do codigo-fonte
- `Dockerfile` como definicao de build e imagem
- Coolify como plataforma de deploy e operacao
- servidor Linux como host da aplicacao
- dominio ou subdominio para acesso publico
- DNS para apontar o nome ao IP do servidor
- HTTPS para trafego seguro e publicacao confiavel

## Fluxo de ponta a ponta

1. O codigo e versionado no GitHub.
2. O repositório e preparado para deploy com `Dockerfile`.
3. O servidor e validado no Coolify com acesso SSH.
4. A aplicacao e cadastrada no Coolify apontando para a branch correta.
5. O Coolify faz o build da imagem usando o `Dockerfile`.
6. O container e iniciado no servidor.
7. O dominio e configurado no Coolify.
8. O DNS aponta o dominio para o IP do servidor.
9. O proxy do Coolify recebe as requisicoes externas e encaminha para a porta interna da aplicacao.
10. O HTTPS e emitido e validado.

## Papel do GitHub

O GitHub e o ponto de controle do codigo. Ele define:

- branch de deploy
- historico de mudancas
- revisao por pull request, quando adotada
- integracoes de CI para validacao automatica

## Papel do Dockerfile

O `Dockerfile` descreve:

- como o build deve ser executado
- quais arquivos entram na imagem
- qual processo principal sera iniciado
- qual porta interna a aplicacao usara

Sem um `Dockerfile` correto, o Coolify nao consegue reproduzir o ambiente esperado.

## Papel do Coolify

O Coolify centraliza:

- conexao com o repositorio
- definicao da branch de deploy
- execucao do build
- criacao do container
- associacao de dominio
- health check e observabilidade basica

## Papel do dominio, DNS e HTTPS

- dominio: nome pelo qual a aplicacao sera acessada
- DNS: mecanismo que aponta esse nome para o IP do servidor
- HTTPS: camada que protege o trafego entre navegador e aplicacao

Esses tres elementos precisam estar coerentes para a publicacao ser considerada concluida.

## O que precisa ser validado em cada camada

- GitHub: branch certa, codigo certo, Dockerfile certo
- servidor: SSH, recursos e rede
- Coolify: configuracao da aplicacao e porta interna
- DNS: apontamento correto
- HTTPS: emissao e resposta sem erro
- aplicacao: pagina abre, assets carregam e health check responde
