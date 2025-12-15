# 📌 Instruções para Adicionar o Favicon

## Como adicionar o ícone na aba do navegador

### Opção 1: Usando arquivo ICO (Recomendado)

1. **Converta sua imagem para formato ICO**
   - Use um conversor online como: https://convertio.co/pt/png-ico/
   - Ou: https://www.favicon-generator.org/
   - Tamanho recomendado: 32x32 ou 16x16 pixels

2. **Salve o arquivo como `favicon.ico`**
   - Coloque o arquivo na pasta: `public/favicon.ico`
   - O Next.js detectará automaticamente!

### Opção 2: Usando arquivo PNG

1. **Prepare sua imagem**
   - Tamanho recomendado: 32x32, 64x64 ou 128x128 pixels
   - Formato: PNG com fundo transparente (se possível)

2. **Salve na pasta public/**
   - Nome do arquivo: `favicon.png` ou `icon.png`
   - Localização: `public/favicon.png`

3. **Atualize o layout.tsx** (já está configurado!)
   - O arquivo já está configurado para usar `/favicon.ico`
   - Se usar PNG, altere para `/favicon.png` no arquivo `src/app/layout.tsx`

### Opção 3: Múltiplos tamanhos (Apple Touch Icon)

Para melhor compatibilidade, você pode adicionar:

- `public/favicon.ico` - 32x32 (padrão)
- `public/apple-touch-icon.png` - 180x180 (para dispositivos Apple)
- `public/favicon-16x16.png` - 16x16
- `public/favicon-32x32.png` - 32x32

## ✅ Status Atual

O código já está configurado no arquivo `src/app/layout.tsx` para usar:
- `/favicon.ico` como ícone principal
- `/apple-touch-icon.png` para dispositivos Apple

**Próximo passo:** Adicione sua imagem na pasta `public/` com o nome `favicon.ico` ou `favicon.png`!

## 🎨 Dica

A imagem descrita (menino lendo sob uma árvore) será perfeita como favicon! 
Certifique-se de que a imagem seja clara mesmo em tamanho pequeno (32x32 pixels).

