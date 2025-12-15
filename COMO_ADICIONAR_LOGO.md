# 🎨 Como Adicionar o Logo da Juliana Nagashima

## ⚠️ Situação Atual

O site está mostrando o nome em texto porque a imagem do logo ainda não foi adicionada.

---

## 📥 Solução: Adicionar a Imagem

### **Método 1: Via Finder (macOS) - MAIS FÁCIL**

1. **Abra o Finder**

2. **Navegue até a pasta do projeto:**
   ```
   /Users/renatonagashima/Documents/Projetos/site/public/images/
   ```
   
   **Atalho rápido:**
   - Abra o Finder
   - Pressione `Cmd + Shift + G`
   - Cole o caminho acima
   - Pressione Enter

3. **Salve a imagem do logo nesta pasta com o nome:**
   ```
   logo.png
   ```

4. **Atualize o navegador** (Cmd + R)

---

### **Método 2: Via Terminal**

Se você já tem a imagem salva em algum lugar:

```bash
# Navegue até a pasta onde está sua imagem
cd ~/Downloads  # ou onde você salvou

# Copie para a pasta do projeto
cp logo.png /Users/renatonagashima/Documents/Projetos/site/public/images/

# Ou se tiver outro nome:
cp "nome-da-imagem.png" /Users/renatonagashima/Documents/Projetos/site/public/images/logo.png
```

---

### **Método 3: Via VSCode/Cursor**

1. No explorador de arquivos do editor
2. Navegue até: `public/images/`
3. Arraste e solte a imagem do logo
4. Renomeie para: `logo.png`

---

## 🖼️ Preparar a Imagem

### **Opção A: Usar a imagem que você me mostrou**

A imagem com:
- "Juliana Nagashima" (nome principal)
- "Psicopedagoga" (subtítulo)
- Ilustração da árvore com criança lendo

**Passos:**
1. Salve/baixe a imagem
2. Renomeie para `logo.png`
3. Coloque em `public/images/`

### **Opção B: Criar/Exportar uma nova**

**Especificações recomendadas:**
- **Formato:** PNG (com transparência) ou SVG
- **Largura:** 400-600px
- **Fundo:** Transparente (preferível)
- **Resolução:** Alta (para telas Retina)

---

## 🔄 Ativar a Imagem no Código

Depois de adicionar a imagem, **atualize o Header:**

**Edite:** `src/components/Header.tsx` (linhas 36-47)

**Substitua:**
```typescript
{/* Texto temporário até adicionar a imagem */}
<div className="flex flex-col">
  <span className="text-xl md:text-2xl font-bold text-primary-600 leading-tight">
    Juliana Nagashima
  </span>
  <span className="text-xs md:text-sm text-secondary-600 uppercase tracking-wider">
    Psicopedagoga
  </span>
</div>
```

**Por:**
```typescript
<img 
  src="/images/logo.png" 
  alt="Juliana Nagashima - Psicopedagoga" 
  className="h-12 md:h-16 w-auto"
  onError={(e) => {
    e.currentTarget.style.display = 'none';
    e.currentTarget.parentElement!.innerHTML = 
      '<span class="text-xl font-bold text-primary-600">Juliana Nagashima</span>';
  }}
/>
```

---

## ✅ Verificar se Funcionou

1. **Adicione o arquivo** `logo.png` em `public/images/`

2. **Reinicie o servidor** (se necessário):
   ```bash
   # Pare (Ctrl+C) e reinicie:
   npm run dev
   ```

3. **Abra no navegador:** http://localhost:3000

4. **Limpe o cache:** Cmd + Shift + R (Mac) ou Ctrl + Shift + R (Windows)

---

## 🔍 Troubleshooting

### ❌ Ainda aparece quebrado?

**Verifique:**

1. **Nome do arquivo está correto?**
   - Deve ser exatamente: `logo.png`
   - Letras minúsculas
   - Sem espaços

2. **Arquivo está na pasta certa?**
   ```
   site/
   └── public/
       └── images/
           └── logo.png  ← Aqui!
   ```
   
   **NÃO em:**
   - ~~src/images/~~
   - ~~public/logo.png~~
   - ~~images/logo.png~~

3. **Reiniciou o servidor?**
   ```bash
   # Pare (Ctrl+C)
   npm run dev
   ```

4. **Limpou o cache do navegador?**
   - Cmd + Shift + R (Mac)
   - Ctrl + Shift + R (Windows)

---

## 📁 Estrutura Correta

```
site/
├── public/
│   └── images/
│       └── logo.png          ← COLOQUE AQUI
│
├── src/
│   ├── components/
│   │   └── Header.tsx        ← Usa: /images/logo.png
│   └── ...
```

**Importante:** O caminho `/images/logo.png` no código se refere a `public/images/logo.png`

---

## 🎨 Ajustar Tamanho (Depois de Adicionar)

Se o logo ficar muito grande ou pequeno:

**Edite:** `src/components/Header.tsx`

```typescript
// Tamanho atual:
className="h-12 md:h-16 w-auto"
          ↓      ↓
       mobile  desktop

// Ajustes:
// Maior:   "h-14 md:h-20 w-auto"
// Menor:   "h-10 md:h-14 w-auto"
// Bem grande: "h-16 md:h-24 w-auto"
```

---

## 💡 Dica: Verificar se o Arquivo Existe

Execute no terminal:

```bash
ls -la /Users/renatonagashima/Documents/Projetos/site/public/images/
```

Deve aparecer `logo.png` na lista. Se não aparecer, o arquivo não está lá!

---

## 🆘 Precisa de Ajuda?

Se continuar com problemas:

1. Tire um print da pasta `public/images/` no Finder
2. Tire um print do erro no navegador (console)
3. Me mostre e eu te ajudo!

---

**Por enquanto, o site está funcionando com o texto "Juliana Nagashima" no lugar do logo. Assim que você adicionar a imagem, ele aparecerá automaticamente!** ✨

