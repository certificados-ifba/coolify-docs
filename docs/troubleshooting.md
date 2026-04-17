---
title: Troubleshooting
sidebar_position: 9
---

# Troubleshooting

Este guia reúne problemas recorrentes em GitHub, SSH, Dockerfile, Coolify, DNS, HTTPS e publicação final. Use sempre uma abordagem estruturada: identificar a camada com falha, validar evidências e aplicar correção mínima antes de seguir.

## Ordem de diagnóstico recomendada

1. Repositório e branch
2. Acesso SSH ao servidor
3. Configuração da chave no Coolify
4. Build do Dockerfile
5. Subida do container
6. Domínio e DNS
7. HTTPS e proxy reverso
8. Health check e disponibilidade

## 1) Permission denied (publickey)

- chave publica nao foi instalada no servidor
- permissao incorreta em `~/.ssh` ou `authorized_keys`
- chave privada errada sendo usada no cliente

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

- mudanca de host key no servidor
- entrada antiga em `known_hosts`

### Correcao

```bash
ssh-keygen -R servidor-ou-ip
ssh usuario@servidor
```

## 3) Timeout na conexao SSH

- firewall bloqueando porta 22
- servico SSH parado

### Diagnostico

```bash
nc -zv servidor-ou-ip 22
sudo systemctl status sshd || sudo systemctl status ssh
```

## 4) Build falha no Coolify

- `Dockerfile` em caminho errado
- erro em `COPY`, `RUN` ou `npm ci`
- arquivo importante excluido pelo `.dockerignore`
- branch errada selecionada

### Diagnostico

- revisar logs de build
- validar o `Dockerfile` localmente
- confirmar caminho configurado no painel

### Correcao

```bash
docker build -t app-teste .
```

## 5) Container sobe, mas a aplicacao nao responde

- porta interna errada no Coolify
- processo principal terminou apos o start
- comando final da imagem nao manteve o processo em foreground
- health check apontando para rota inexistente

### Diagnostico rapido

```bash
docker ps
docker logs -f NOME_DO_CONTAINER
```

## 6) Erro 502 Bad Gateway

- o proxy do Coolify nao conseguiu alcancar a aplicacao
- a porta configurada no painel nao e a mesma da aplicacao
- o container caiu logo apos o deploy

### Correcao tipica

- revisar `Port Exposes`
- remover `Port Mappings` desnecessarios
- validar se a aplicacao responde internamente
- executar novo redeploy depois de salvar as configuracoes

## 7) Dominio nao resolve

- registro DNS ausente
- IP errado
- propagacao ainda em andamento

### Diagnostico

```bash
dig +short app.seudominio.com
nslookup app.seudominio.com
```

## 8) HTTPS nao sobe

- porta 80 bloqueada
- dominio ainda nao aponta para o servidor correto
- certificado nao conseguiu ser emitido

### Validacoes

- dominio abre por HTTP
- DNS aponta para o host correto
- proxy do Coolify esta ativo

## 9) Assets quebrados apos deploy

- `baseUrl` incorreta no projeto
- aplicacao publicada em subcaminho, mas configurada como raiz
- build antigo em cache

### Correcao

- se a aplicacao estiver em subdominio, use `baseUrl: '/'`
- se estiver em subcaminho, ajuste para o caminho correto
- gere novo build e redeploy

## 10) O Coolify nao aplica a nova configuracao

- alteracao foi salva, mas nao houve redeploy
- labels antigas continuam aplicadas no container anterior

### Correcao

- salvar configuracao
- executar redeploy
- em ultimo caso, reiniciar ou recriar a aplicacao

## 11) O repositorio nao esta apto para deploy

- falta `Dockerfile`
- build local nunca foi testado
- branch principal indefinida
- segredos foram hardcoded em arquivo versionado

### Correcao

- validar checklist de [Preparacao do repositorio GitHub](./preparacao-do-repositorio-github.md)
- remover segredos do codigo
- documentar variaveis no Coolify

## 12) Health check falha

- caminho configurado nao existe
- aplicacao demora mais que o esperado para iniciar
- endpoint exige autenticacao

### Correcao

- usar `/` para sites estaticos
- usar `/health` ou equivalente para APIs
- revisar timeout e readiness da aplicacao

## Abordagem de incidente recomendada

Quando houver falha em producao:

1. registrar o erro exato
2. identificar a camada com falha
3. coletar logs e evidencias
4. aplicar a menor correcao necessaria
5. revalidar a etapa anterior e a etapa atual
6. atualizar a documentacao se o erro revelar uma lacuna do processo
