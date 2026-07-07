---
title: Matriz de referencia Coolify
sidebar_position: 19
---

# Matriz de referencia Coolify

Esta pagina define, de forma explicita, como o conteudo desta documentacao foi construido a partir de tres fontes e como separar referencia geral do Coolify, adaptacao ao cenario e procedimento do projeto.

- **RC (Referencia Coolify):** conceito ou fluxo consolidado na documentacao oficial do Coolify.
- **AS (Adaptacao de cenario):** ajuste para o nosso contexto operacional (GitHub + Dockerfile + deploy self-hosted).
- **PP (Procedimento do projeto):** passos e padroes especificos deste repositório.

## Como usar esta matriz

Use esta pagina para responder duas perguntas antes de executar qualquer etapa:

1. O que vem do comportamento padrao do Coolify.
2. O que precisa ser seguido como padrao interno do projeto.

## Regra pratica de leitura

Se uma informacao aparecer apenas como RC, ela serve como contexto de plataforma.

Se a informacao aparecer como AS, ela foi adaptada para o fluxo deste repositorio e deve ser seguida como referencia operacional.

Se a informacao aparecer como PP, ela e obrigatoria para este projeto.

## Matriz por pagina

| Pagina | Objetivo | RC | AS | PP |
| --- | --- | --- | --- | --- |
| Introducao | Definir escopo e resultado esperado do guia | Conceitos gerais de deploy no Coolify | Sequencia de implantacao orientada a operacao | Critérios de aceite e ordem de leitura do projeto |
| Pre-requisitos | Garantir prontidao de acesso e infraestrutura | Requisitos base de acesso/host | Lista minima de portas e conectividade para nosso cenario | Checklist de preparo antes de alterar ambiente |
| Arquitetura e fluxo | Mostrar caminho de ponta a ponta | Pipeline geral de build/deploy da plataforma | Encadeamento GitHub -> Dockerfile -> Coolify -> DNS -> HTTPS | Sequencia oficial adotada pela equipe |
| Estrutura do projeto | Preparar repositório para build reproduzivel | Necessidade de fonte de build consistente | Estrutura focada em Dockerfile e branch de deploy | Padrao minimo de arquivos e organizacao interna |
| Preparacao do repositório GitHub | Validar aptidao para integracao | Conexão via repositório público, GitHub App ou Deploy Key | Validacoes locais antes do primeiro deploy | Regras de branch e controles de segredos |
| Configuracao do OpenSSH | Garantir conectividade do host | Fluxo de SSH por chave do Coolify | Endurecimento progressivo de acesso | Parametros recomendados para nosso ambiente |
| Geracao de chave SSH | Criar credencial de acesso do Coolify | Chave gerada e usada pelo painel | Sequencia em servidor self-hosted | Nome de arquivo e padrao de uso local |
| Configuracao da chave no servidor | Autorizar a chave publica | Uso de authorized_keys | Permissoes e validacao antes de endurecer sshd | Passos validados para o host do projeto |
| Teste de conexao SSH | Validar host pronto para deploy | Acao de validar host no painel | Diagnostico complementar no servidor | Criterio de aceite do host |
| Configuracao SSH no Coolify | Registrar chave privada no painel | Cadastro e associacao de chave | Nomeacao e validacao de vinculo | Checklist para evitar chave incorreta |
| Validacao do servidor | Confirmar Docker e proxy operacionais | Validacao automatica do servidor | Evidencias operacionais obrigatorias | Gate para liberar deploy de aplicacao |
| Configuracao da aplicacao no Coolify | Cadastrar aplicacao com parametros corretos | Build Pack, Base Directory e Port Exposes | Uso obrigatorio do Build Pack Dockerfile | Definicao de branch, porta e dominio do projeto |
| Dockerfile | Definir build e runtime reproduziveis | HEALTHCHECK, build args e Docker Build Secrets | Boas praticas de imagem para nosso cenario | Validacao local obrigatoria antes de producao |
| Primeiro deploy | Executar primeira publicacao | Build e runtime no pipeline da plataforma | Coleta de evidencias por camada | Checklist de aceite de go-live inicial |
| Configuracao de dominio | Definir endereco publico | Sintaxe de URL completa com protocolo, porta e caminho | Politica de nomenclatura por ambiente | Convencao institucional do projeto |
| Configuracao DNS | Apontar dominio para o host | Registro A/AAAA e verificacao via 1.1.1.1 | Sequencia segura com validacao de propagacao | Comandos oficiais para diagnostico |
| HTTPS e SSL | Habilitar canal seguro | Let's Encrypt automatico via Traefik/Caddy, renovacao e fallback self-signed | Ordem correta de DNS/porta/proxy | Validacao de certificado e redirecionamento |
| Validacao pos-implantacao | Confirmar operacao real em producao | Verificacoes de disponibilidade | Roteiro de aceite funcional | Evidencias minimas para encerramento |
| Health check e disponibilidade | Sustentar confiabilidade de runtime | Precedencia Dockerfile HEALTHCHECK e requisito curl/wget | Definicao de rota por tipo de app | SLO minimo e rotina de verificacao |
| Fluxo de atualizacao e CI/CD | Padronizar mudancas seguras | Integração por branch monitorada | Governanca de release e rollback | Estrategia de atualizacao do time |
| Troubleshooting | Resolver falhas sem suporte informal | Erros comuns de acesso/build/runtime | Diagnostico por camadas | Base de resposta a incidentes do projeto |
| Boas praticas | Reduzir risco operacional | Diretrizes gerais de seguranca/operacao | Adaptacao a ambiente self-hosted | Controles internos e responsabilidades |
| Checklist executivo final | Consolidar aceite da implantacao | Visao global de prontidao | Critérios objetivos de encerramento | Lista oficial de aceite institucional |

## Criterio de manutencao desta matriz

Atualize esta pagina quando houver:

- mudanca de fluxo operacional no Coolify;
- mudanca no processo interno de deploy;
- nova etapa obrigatoria de seguranca, dominio, DNS ou CI/CD.

Sem esta atualizacao, a documentacao perde rastreabilidade entre referencia externa e procedimento interno.
