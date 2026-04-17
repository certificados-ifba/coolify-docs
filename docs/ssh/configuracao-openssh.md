---
title: Configuracao do OpenSSH
sidebar_position: 0
---

# OpenSSH

O Coolify usa SSH para se conectar ao seu servidor e implantar seus aplicativos. Isso é válido mesmo quando você está usando o servidor `localhost` onde o Coolify está sendo executado.

Você precisa configurar o SSH corretamente para que o Coolify consiga acessar seus servidores.

![Servidor configurado para acesso SSH no Coolify](/img/servidor.webp)

Figura 1: Tela do servidor dentro do Coolify, onde a chave privada e a validacao do host serao associadas.

## Métodos de configuração

Existem duas maneiras de configurar o OpenSSH.

- Configuração semiautomática
- Configuração manual

:::important
A chave SSH não deve ter uma senha ou autenticação de dois fatores (2FA) habilitada para o usuário que executa o script de instalação do Coolify, caso contrário, a conexão SSH falhará.
:::

## Configuração semiautomática

A configuração semiautomática é a abordagem recomendada. Nela, o script de instalação do Coolify prepara parte do fluxo, mas o administrador ainda deve garantir que o OpenSSH esteja instalado, habilitado e com autenticação por chave pública ativa.

### 1. Instale o servidor OpenSSH

**Debian / Ubuntu / Pop!_OS | CentOS / RHEL / Rocky / Fedora | SLES/openSUSE | Arch Linux | Linux alpino**

```bash
apt update && apt install -y openssh-server
systemctl enable --now ssh
```

### 2. Configure o SSH

Edite o arquivo de configuração do serviço SSH:

```bash
nano /etc/ssh/sshd_config
```

Defina, valide ou ajuste estas opções:

```ini
PubkeyAuthentication yes
PermitRootLogin prohibit-password
```

:::info Observação
A opção `PermitRootLogin` pode ser definida como `yes`, `without-password` ou `prohibit-password`. Para maior segurança, recomenda-se o uso de `prohibit-password`.

Certifique-se de adicionar suas chaves SSH ao arquivo `~/.ssh/authorized_keys` antes de configurar `PermitRootLogin prohibit-password`, caso contrário, você poderá se bloquear o acesso ao servidor.
:::

Reinicie o serviço SSH:

**Debian / Ubuntu / Pop!_OS | CentOS / RHEL / Rocky / Fedora / Arch / openSUSE | Linux alpino**

```bash
systemctl restart ssh
```

## Configuração manual

:::info Observação
Os seguintes passos são executados automaticamente pelo script de instalação do Coolify. A configuração manual só é necessária caso a instalação automática falhe.
:::

### 1. Instale o servidor OpenSSH

**Debian / Ubuntu / Pop!_OS | CentOS / RHEL / Rocky / Fedora | SLES/openSUSE | Arch Linux | Linux alpino**

```bash
apt update && apt install -y openssh-server
systemctl enable --now ssh
```

### 2. Configure o SSH

Edite o arquivo de configuração:

```bash
nano /etc/ssh/sshd_config
```

Defina as opções abaixo:

```ini
PubkeyAuthentication yes
PermitRootLogin prohibit-password
```

:::info Observação
A opção `PermitRootLogin` pode ser definida como `yes`, `without-password` ou `prohibit-password`. Para maior segurança, recomenda-se `prohibit-password`.

Certifique-se de adicionar suas chaves SSH ao arquivo `~/.ssh/authorized_keys` antes de configurar `PermitRootLogin prohibit-password`, caso contrário, você poderá se bloquear o acesso ao servidor.
:::

Reinicie o SSH:

**Debian / Ubuntu / Pop!_OS | CentOS / RHEL / Rocky / Fedora / Arch / openSUSE | Linux alpino**

```bash
systemctl restart ssh
```

### 3. Gere uma chave SSH para o Coolify

Execute os seguintes comandos no próprio servidor onde o Coolify está instalado. Essa chave será usada pelo Coolify para acessar o host via SSH.

Gerar chave SSH:

```bash
ssh-keygen -t ed25519 -a 100 \
  -f /data/coolify/ssh/keys/id.root@host.docker.internal \
  -q -N "" -C root@coolify
```

Ajustar propriedade do arquivo:

```bash
chown 9999 /data/coolify/ssh/keys/id.root@host.docker.internal
```

### 4. Autorize a chave pública

Adicione a chave pública ao arquivo `authorized_keys` do usuário que receberá a conexão SSH:

```bash
mkdir -p ~/.ssh
cat /data/coolify/ssh/keys/id.root@host.docker.internal.pub >> ~/.ssh/authorized_keys
```

Alterar permissões:

```bash
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
```

### 5. Adicione a chave privada ao Coolify

Copie o conteúdo da chave privada gerada no servidor:

```bash
# This command will show you the content of the Private key, you have to copy the content manually
cat /data/coolify/ssh/keys/id.root@host.docker.internal
```

No painel do Coolify, acesse a área de chaves privadas e adicione uma nova chave.

![Adicione uma nova chave privada](/img/adicione-uma-nova-chave-privada.webp)

Figura 2: Abertura do fluxo para cadastrar uma nova chave privada no painel.

No campo de entrada da chave privada, cole exatamente o conteúdo copiado na etapa anterior:

![Colar a chave privada](/img/colar-a-chave-privada.webp)

Figura 3: Campo de cadastro da chave privada no Coolify.

Acesse a aba **Servidores** e clique no servidor `localhost`:

![Servidor localhost](/img/servidor.webp)

Figura 4: Seleção do servidor que receberá a chave privada cadastrada.

Na página **Chave privada**, selecione a chave privada adicionada na etapa anterior:

![Selecione a chave privada](/img/selecione-a-chave-privada.webp)

Figura 5: Associação da chave privada ao servidor dentro do Coolify.

### 6. Validar servidor

Acesse a página **Geral** e clique em **Validar servidor e instalar o Docker Engine**:

![Validar servidor e instalar Docker Engine](/img/validar-servidor-e-instalar-o-docker-engine.webp)

Figura 6: Etapa final de validação do servidor e instalação do Docker Engine.

Após a conclusão, o esperado é visualizar um status verde como **Proxy em execução**, indicando que o host está acessível, o Docker está operacional e o Coolify pode prosseguir com deploys.

## Resultado esperado

Ao final desta página, o ambiente deve estar com:

- OpenSSH instalado e ativo
- Autenticação por chave pública habilitada
- Chave SSH do Coolify gerada sem senha
- Chave pública adicionada ao `authorized_keys`
- Chave privada cadastrada no painel do Coolify
- Servidor validado com Docker Engine disponível
