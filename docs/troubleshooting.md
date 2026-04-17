---
title: Troubleshooting
sidebar_position: 9
---

# Troubleshooting

Este guia reúne problemas recorrentes em GitHub, SSH, Dockerfile, Coolify, DNS, HTTPS e publicação final. Use sempre uma abordagem estruturada: identificar a camada com falha, validar evidências e aplicar correção mínima antes de seguir.

## Objetivo

Permitir diagnóstico e correção de incidentes sem dependência de suporte informal, mantendo rastreabilidade técnica.

## Pre-requisitos

- acesso aos logs de build/runtime no Coolify.
- acesso ao host por SSH.
- conhecimento da branch e versão implantada.

## Regra de diagnóstico

1. Identifique a camada que falhou.
2. Colete o erro exato.
3. Compare com a última mudança realizada.
4. Corrija a menor causa possível.
5. Valide novamente.

## Ordem de diagnóstico recomendada

- Repositório e branch.
- Acesso SSH ao servidor.
- Configuração da chave no Coolify.
- Build do Dockerfile.
- Subida do container.
- Domínio e DNS.
- HTTPS e proxy reverso.
- Health check e disponibilidade.

## 1) Permission denied (publickey)

- chave pública não foi instalada no servidor.
- permissão incorreta em `~/.ssh` ou `authorized_keys`.
- chave privada errada sendo usada no cliente.

### Diagnostico

```bash
ssh -i ~/.ssh/id_ed25519 -vvv usuario@servidor
```

### Correcao

```bash
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
chown -R "$USER":"$USER" ~/.ssh
```

## 2) Host key verification failed

- mudança de host key no servidor.
- entrada antiga em `known_hosts`.

### Correcao

```bash
ssh-keygen -R servidor-ou-ip
ssh usuario@servidor
```

## 3) Timeout na conexao SSH

- firewall bloqueando porta 22.
- serviço SSH parado.

### Diagnostico

```bash
nc -zv servidor-ou-ip 22
sudo systemctl status sshd || sudo systemctl status ssh
```

## 4) Build falha no Coolify

- `Dockerfile` em caminho errado.
- erro em `COPY`, `RUN` ou `npm ci`.
- arquivo importante excluído pelo `.dockerignore`.
- branch errada selecionada.

### Diagnostico

- revisar logs de build
- validar o `Dockerfile` localmente
- confirmar caminho configurado no painel

### Correcao

```bash
docker build -t app-teste .
```

## 5) Container sobe, mas a aplicacao nao responde

- porta interna errada no Coolify.
- processo principal terminou após o start.
- comando final da imagem não manteve o processo em foreground.
- health check apontando para rota inexistente.

### Diagnostico rapido

```bash
docker ps
docker logs -f NOME_DO_CONTAINER
```

## 6) Erro 502 Bad Gateway

- o proxy do Coolify não conseguiu alcançar a aplicação.
- a porta configurada no painel não é a mesma da aplicação.
- o container caiu logo após o deploy.

### Correcao tipica

- revisar `Port Exposes`
- remover `Port Mappings` desnecessarios
- validar se a aplicacao responde internamente
- executar novo redeploy depois de salvar as configuracoes

## 7) Dominio nao resolve

- registro DNS ausente.
- IP errado.
- propagação ainda em andamento.

### Diagnostico

```bash
dig +short app.seudominio.com
nslookup app.seudominio.com
```

## 8) HTTPS nao sobe

- porta 80 bloqueada.
- domínio ainda não aponta para o servidor correto.
- certificado não conseguiu ser emitido.

### Validacoes

- dominio abre por HTTP
- DNS aponta para o host correto
- proxy do Coolify esta ativo

## 9) Assets quebrados apos deploy

- `baseUrl` incorreta no projeto.
- aplicação publicada em subcaminho, mas configurada como raiz.
- build antigo em cache.

### Correcao

- se a aplicacao estiver em subdominio, use `baseUrl: '/'`
- se estiver em subcaminho, ajuste para o caminho correto
- gere novo build e redeploy

## 10) O Coolify nao aplica a nova configuracao

- alteração foi salva, mas não houve redeploy.
- labels antigas continuam aplicadas no container anterior.

### Correcao

- salvar configuracao
- executar redeploy
- em ultimo caso, reiniciar ou recriar a aplicacao

## 11) O repositorio nao esta apto para deploy

- falta `Dockerfile`.
- build local nunca foi testado.
- branch principal indefinida.
- segredos foram hardcoded em arquivo versionado.

### Correcao

- validar checklist de [Preparacao do repositorio GitHub](./preparacao-do-repositorio-github.md)
- remover segredos do codigo
- documentar variaveis no Coolify

## 12) Health check falha

- caminho configurado não existe.
- aplicação demora mais que o esperado para iniciar.
- endpoint exige autenticação.

### Correcao

- usar `/` para sites estaticos
- usar `/health` ou equivalente para APIs
- revisar timeout e readiness da aplicacao

## Abordagem de incidente recomendada

Quando houver falha em producao:

1. Registrar o erro exato.
2. Identificar a camada com falha.
3. Coletar logs e evidências.
4. Aplicar a menor correção necessária.
5. Revalidar a etapa anterior e a etapa atual.
6. Atualizar a documentação se o erro revelar uma lacuna do processo.
