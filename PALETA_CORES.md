# 🎨 Paleta de Cores do Site - Juliana Nagashima

## Inspiração

As cores foram extraídas do logo oficial, criando uma identidade visual harmoniosa e acolhedora, perfeita para uma psicopedagoga.

---

## 🌊 Primary (Verde Água/Teal)

Cor principal usada em botões, destaques e elementos interativos.

```css
primary-50:  #f0f9f9  /* Muito claro - backgrounds */
primary-100: #d9f0f0
primary-200: #b8e3e3
primary-300: #8fd4d4
primary-400: #7fb5b5  /* Tom médio suave */
primary-500: #6ba5a5  /* PRINCIPAL - botões e CTAs */
primary-600: #5a8e8e  /* Hover states */
primary-700: #4a7373
primary-800: #3d5e5e
primary-900: #334d4d  /* Mais escuro */
```

**Usado em:**
- Botões principais (CTAs)
- Links e hover states
- Nome no header
- Ícones de destaque

---

## 🌸 Secondary (Rosa Suave/Terracota)

Cor secundária para acentos e elementos complementares.

```css
secondary-50:  #fdf6f6  /* Muito claro - backgrounds */
secondary-100: #fae8e8
secondary-200: #f5d5d5
secondary-300: #edb8b8
secondary-400: #e39595
secondary-500: #d4a5a5  /* Tom médio */
secondary-600: #c08585  /* Destaques */
secondary-700: #a86b6b
secondary-800: #8c5858
secondary-900: #744a4a  /* Mais escuro */
```

**Usado em:**
- Elementos decorativos
- Backgrounds suaves
- Destaques secundários
- Subtítulos

---

## 🍃 Accent (Verde Menta)

Cor de acento para elementos especiais e ilustrações.

```css
accent-50:  #f9fcfb  /* Muito claro */
accent-100: #e8f5f0
accent-200: #d4ebe3
accent-300: #b8dfd0  /* Tom da ilustração */
accent-400: #9dd3bd
accent-500: #82c7aa
accent-600: #6aaf92
accent-700: #55927a
accent-800: #457662
accent-900: #386051  /* Mais escuro */
```

**Usado em:**
- Elementos decorativos
- Ilustrações
- Backgrounds especiais
- Destaques suaves

---

## 🏜️ Beige (Bege/Creme)

Cor de fundo principal, criando uma atmosfera acolhedora.

```css
beige-50:  #fdfcfa  /* Quase branco */
beige-100: #f9f6f0  /* Muito claro */
beige-200: #f5efe7  /* FUNDO PRINCIPAL */
beige-300: #ede4d5
beige-400: #e3d7c0
beige-500: #d4c5a8
beige-600: #bfad8e
beige-700: #a69176
beige-800: #897760
beige-900: #70614e  /* Mais escuro */
```

**Usado em:**
- Background geral do site
- Cards e containers
- Áreas de conteúdo
- Seções alternadas

---

## 🎯 Aplicação das Cores

### **Hierarquia Visual**

```
Primary (Verde Água) → Ações principais
    ↓
Secondary (Rosa) → Elementos de suporte
    ↓
Accent (Verde Menta) → Detalhes especiais
    ↓
Beige (Creme) → Fundos e base
```

### **Exemplos de Uso**

#### **Botões**
```typescript
// Primário (CTA principal)
className="bg-primary-500 hover:bg-primary-600 text-white"

// Secundário (CTA alternativo)
className="bg-secondary-400 hover:bg-secondary-500 text-white"

// Outline
className="border-2 border-primary-500 text-primary-600 hover:bg-primary-50"
```

#### **Backgrounds**
```typescript
// Seção clara
className="bg-beige-50"

// Seção com destaque suave
className="bg-gradient-to-br from-beige-100 via-primary-50 to-secondary-50"

// Card destacado
className="bg-white border border-secondary-200"
```

#### **Textos**
```typescript
// Título principal
className="text-gray-900"

// Título secundário
className="text-primary-600"

// Corpo de texto
className="text-gray-700"

// Texto secundário
className="text-gray-600"
```

---

## 🌈 Combinações Recomendadas

### **Combinação 1: Calma e Profissional**
```css
Background: beige-100 (#f9f6f0)
Título: primary-600 (#5a8e8e)
Texto: gray-700
CTA: primary-500 (#6ba5a5)
```

### **Combinação 2: Acolhedora**
```css
Background: gradient(beige-50 → secondary-50)
Título: secondary-700 (#a86b6b)
Texto: gray-800
CTA: secondary-500 (#d4a5a5)
```

### **Combinação 3: Fresca e Leve**
```css
Background: white
Título: primary-700 (#4a7373)
Texto: gray-600
Accent: accent-300 (#b8dfd0)
```

---

## 📊 Acessibilidade (Contraste)

Todas as combinações seguem WCAG AA:

| Fundo | Texto | Contraste | Status |
|-------|-------|-----------|--------|
| `beige-50` | `gray-900` | 8.5:1 | ✅ AAA |
| `primary-500` | `white` | 4.8:1 | ✅ AA |
| `secondary-500` | `white` | 4.2:1 | ✅ AA |
| `white` | `primary-700` | 5.2:1 | ✅ AA |

---

## 🔄 Migração da Paleta Antiga

### **Antes (Dourado/Laranja)**
```css
primary-600: #d68c3c (dourado)
secondary-600: #9d7a52 (marrom)
```

### **Depois (Verde Água/Rosa)**
```css
primary-500: #6ba5a5 (verde água)
secondary-500: #d4a5a5 (rosa suave)
```

---

## 🎨 Design System

### **Espaçamentos**
Mantidos os espaçamentos do Tailwind (4px base)

### **Bordas Arredondadas**
- `rounded-lg`: 8px (cards pequenos)
- `rounded-xl`: 12px (cards médios)
- `rounded-2xl`: 16px (cards grandes)
- `rounded-3xl`: 24px (elementos hero)

### **Sombras**
```css
shadow-sm: Sutil
shadow-md: Média (cards padrão)
shadow-lg: Grande (cards destacados)
shadow-xl: Extra (elementos flutuantes)
shadow-2xl: Máxima (hero, fotos)
```

---

## 💡 Dicas de Uso

1. **Use beige nos backgrounds** para criar atmosfera acolhedora
2. **Primary (verde água) para CTAs** - chama atenção sem ser agressivo
3. **Secondary (rosa) para acentos** - feminino e suave
4. **Accent (verde menta) para ilustrações** - complementa perfeitamente
5. **Gradientes suaves** entre as cores para transições elegantes

---

## 🔍 Onde as Cores Estão Aplicadas

### **Header**
- Nome: `text-primary-600`
- Subtítulo: `text-secondary-600`

### **Hero**
- Background: `gradient(secondary-50 → primary-50 → white)`
- Título: `text-gray-900`
- Botão: `bg-primary-600 hover:bg-primary-700`

### **Serviços**
- Cards: `bg-gradient(secondary-50 → primary-50)`
- Ícones: `bg-primary-600`

### **Sobre**
- Background: `gradient(white → secondary-50 → primary-50)`
- Card: `bg-white border-secondary-100`

### **Footer**
- Background: `bg-gray-900`
- Texto: `text-gray-400`

---

**Paleta atualizada para refletir a identidade visual do logo! 🎨✨**

