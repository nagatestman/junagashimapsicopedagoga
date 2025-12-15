# 🔐 Como Configurar Token do GitHub

## Problema
O erro `HTTP 400` ao fazer push indica que você precisa de autenticação válida. O GitHub não aceita mais senhas para push via HTTPS - é necessário usar um **Personal Access Token**.

---

## 📋 Passo a Passo

### 1. Criar o Personal Access Token

1. **Acesse as configurações do GitHub:**
   - Vá para: https://github.com/settings/tokens
   - Ou: GitHub → Seu perfil (canto superior direito) → Settings → Developer settings → Personal access tokens → Tokens (classic)

2. **Gerar novo token:**
   - Clique em **"Generate new token"**
   - Selecione **"Generate new token (classic)"**

3. **Configurar o token:**
   - **Note:** Dê um nome descritivo (ex: `site-psicopedagoga` ou `meu-projeto-site`)
   - **Expiration:** Escolha o período (recomendo 90 dias ou "No expiration" para desenvolvimento)
   - **Scopes (Permissões):** Marque:
     - ✅ **`repo`** (acesso completo aos repositórios)
       - Isso inclui automaticamente: `repo:status`, `repo_deployment`, `public_repo`, `repo:invite`, `security_events`

4. **Gerar:**
   - Role até o final e clique em **"Generate token"**
   - ⚠️ **IMPORTANTE:** Copie o token imediatamente! Você só verá ele uma vez.
   - O token será algo como: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

---

### 2. Usar o Token no Push

Agora você tem 3 opções:

#### **Opção A: Usar o token diretamente (mais simples)**

Quando fizer push, o Git pedirá credenciais:

```bash
git push -u origin feat-first
```

- **Username:** Seu username do GitHub (ex: `nagatestman`)
- **Password:** Cole o token que você copiou (NÃO use sua senha do GitHub!)

O macOS salvará automaticamente no Keychain (já configurado).

---

#### **Opção B: Configurar o token na URL (temporário)**

```bash
git remote set-url origin https://SEU_TOKEN@github.com/nagatestman/junagashimapsicopedagoga.git
```

Substitua `SEU_TOKEN` pelo token que você copiou.

⚠️ **Atenção:** Isso deixa o token visível no histórico do Git. Use apenas para teste.

---

#### **Opção C: Usar variável de ambiente (recomendado para scripts)**

```bash
export GIT_ASKPASS=echo
export GITHUB_TOKEN=seu_token_aqui
git push -u origin feat-first
```

---

### 3. Verificar se Funcionou

Após configurar, teste:

```bash
git push -u origin feat-first
```

Se funcionar, você verá algo como:
```
Enumerating objects: 64, done.
Counting objects: 100% (64/64), done.
Delta compression using up to 8 threads
Compressing objects: 100% (55/55), done.
Writing objects: 100% (63/63), 1.10 MiB | 2.16 MiB/s, done.
Total 63 (delta 7), reused 0 (delta 0)
remote: Resolving deltas: 100% (7/7), completed with 7 local objects.
To https://github.com/nagatestman/junagashimapsicopedagoga.git
 * [new branch]      feat-first -> feat-first
Branch 'feat-first' set up to track remote branch 'feat-first' from 'origin'.
```

---

## 🔄 Se o Token Expirar

Se você configurou expiração e o token expirou:

1. Vá para: https://github.com/settings/tokens
2. Gere um novo token
3. No macOS, você precisará atualizar no Keychain:
   - Abra **Keychain Access** (Acesso ao Cofre de Chaves)
   - Procure por `github.com`
   - Delete a entrada antiga
   - Faça push novamente e insira o novo token

---

## 🛡️ Segurança

### ✅ Boas Práticas:
- Use tokens com expiração (90 dias é um bom prazo)
- Dê nomes descritivos aos tokens
- Revogue tokens não utilizados
- Não compartilhe tokens publicamente
- Não commite tokens no código

### ❌ NUNCA faça:
- Não coloque o token diretamente no código
- Não compartilhe tokens em mensagens ou emails
- Não use o mesmo token em múltiplos projetos públicos

---

## 🆘 Troubleshooting

### Erro: "Authentication failed"
- Verifique se copiou o token completo
- Certifique-se de que o token tem permissão `repo`
- Tente gerar um novo token

### Erro: "Token expired"
- Gere um novo token
- Atualize no Keychain (macOS) ou credenciais do Windows

### Erro: "Repository not found"
- Verifique se o repositório existe
- Confirme que você tem acesso ao repositório
- Verifique o nome do usuário/organização na URL

---

## 📝 Alternativa: Usar SSH

Se preferir não usar tokens, você pode configurar SSH:

```bash
# Verificar se já tem chave SSH
ls -al ~/.ssh

# Se não tiver, gerar nova chave
ssh-keygen -t ed25519 -C "seu_email@example.com"

# Adicionar ao ssh-agent
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Copiar chave pública
cat ~/.ssh/id_ed25519.pub

# Adicionar no GitHub: Settings → SSH and GPG keys → New SSH key

# Mudar remote para SSH
git remote set-url origin git@github.com:nagatestman/junagashimapsicopedagoga.git
```

---

## ✅ Próximos Passos

Após configurar o token:

1. ✅ Faça o push da branch `feat-first`
2. ✅ Crie um Pull Request no GitHub (se necessário)
3. ✅ Merge na branch `main` quando estiver pronto

---

**Dúvidas?** Consulte a documentação oficial: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token

