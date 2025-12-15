# 🎨 Como Adicionar o Logo

## Passo 1: Preparar a Imagem

### Opção A: Usar a Imagem Enviada
1. Salve a imagem do logo que você enviou
2. Renomeie para: `logo.png`

### Opção B: Exportar do Design
Se você tem o arquivo original (Photoshop, Illustrator, etc):
1. Exporte em PNG com fundo transparente
2. Resolução recomendada: 500-800px de largura
3. Salve como `logo.png`

## Passo 2: Colocar no Projeto

Copie o arquivo para a pasta:
```
/Users/renatonagashima/Documents/Projetos/site/public/images/logo.png
```

**Caminho completo:**
```
site/
└── public/
    └── images/
        └── logo.png  ← Cole seu logo aqui
```

## Passo 3: Verificar

1. Certifique-se de que o servidor está rodando:
   ```bash
   npm run dev
   ```

2. Abra: http://localhost:3000

3. O logo deve aparecer automaticamente no canto superior esquerdo!

## ✅ O que Já Foi Configurado

- ✅ Header atualizado para usar imagem ao invés de texto
- ✅ Tamanho responsivo (menor em mobile, maior em desktop)
- ✅ Mantém proporção da imagem automaticamente
- ✅ Link para home page funcionando
- ✅ Alt text para acessibilidade

## 🎨 Ajustes de Tamanho (Opcional)

Se quiser alterar o tamanho do logo, edite `src/components/Header.tsx`:

```typescript
// Linha atual:
className="h-12 md:h-16 w-auto"

// Exemplos de ajustes:

// Maior:
className="h-14 md:h-20 w-auto"

// Menor:
className="h-10 md:h-14 w-auto"

// Largura fixa (não recomendado, pode distorcer):
className="h-12 md:h-16 w-40"
```

## 📐 Especificações Técnicas

| Propriedade | Valor Mobile | Valor Desktop |
|-------------|--------------|---------------|
| Altura | 48px (3rem) | 64px (4rem) |
| Largura | Auto (proporcional) | Auto (proporcional) |
| Formato | PNG/SVG preferível | PNG/SVG preferível |

## 🎯 Formatos Suportados

| Formato | Recomendado | Motivo |
|---------|-------------|--------|
| **PNG** | ✅ Sim | Suporta transparência |
| **SVG** | ✅ Melhor | Qualidade perfeita em qualquer tamanho |
| JPG | ⚠️ OK | Sem transparência (fundo branco) |
| WEBP | ✅ Sim | Moderno e leve |

## 🔍 Troubleshooting

### Logo não aparece?

1. **Verifique o nome do arquivo:**
   - Deve ser exatamente: `logo.png`
   - Cuidado com maiúsculas/minúsculas

2. **Verifique a pasta:**
   - Deve estar em: `public/images/`
   - NÃO em: `src/images/`

3. **Reinicie o servidor:**
   ```bash
   # Pare o servidor (Ctrl+C)
   # Inicie novamente:
   npm run dev
   ```

4. **Limpe o cache do navegador:**
   - Cmd+Shift+R (Mac)
   - Ctrl+Shift+R (Windows/Linux)

### Logo muito grande ou pequeno?

Edite em `src/components/Header.tsx`:
```typescript
// Ajuste os valores h-12 e h-16
className="h-12 md:h-16 w-auto"
          ^^      ^^
       mobile  desktop
```

### Logo distorcido?

Certifique-se de usar `w-auto` para manter proporção:
```typescript
className="h-12 md:h-16 w-auto"
                        ^^^^^^
                     Importante!
```

## 💡 Dicas Profissionais

1. **Use PNG com transparência** - Fica melhor em qualquer fundo
2. **Exporte em alta resolução** - Pelo menos 2x o tamanho final (retina)
3. **Otimize a imagem** - Use [TinyPNG](https://tinypng.com) para comprimir
4. **Considere SVG** - Se tiver o original, SVG é a melhor opção

## 🚀 Pronto!

Depois de adicionar o arquivo `logo.png` na pasta `public/images/`, 
seu logo aparecerá automaticamente no header do site!

---

**Observação:** O nome "Juliana Nagashima" também foi atualizado em 
`src/utils/constants.ts` para aparecer em todo o site.




