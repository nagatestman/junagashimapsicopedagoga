# 🚀 Início Rápido - 5 Minutos

## Passo 1: Instalar Dependências

```bash
cd /Users/renatonagashima/Documents/Projetos/site
npm install
```

## Passo 2: Iniciar o Servidor de Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Passo 3: Personalizar Suas Informações

Edite o arquivo `src/utils/constants.ts`:

```typescript
export const SITE_CONFIG: SiteConfig = {
  professional: {
    name: 'SEU NOME',                    // ← Altere aqui
    title: 'SUA PROFISSÃO',              // ← Altere aqui
    subtitle: 'SEU REGISTRO (CRP, etc)', // ← Altere aqui
    bio: 'Sua biografia...',             // ← Altere aqui
    credentials: [
      'Sua formação 1',                  // ← Altere aqui
      'Sua formação 2',
      // Adicione mais...
    ],
  },
  services: [
    // Seus serviços aqui
  ],
  contact: {
    phone: '(XX) XXXXX-XXXX',           // ← Altere aqui
    email: 'seu@email.com',             // ← Altere aqui
    whatsapp: '55XXXXXXXXXXX',          // ← Altere aqui (código país + DDD + número)
  },
  location: {
    address: 'Seu endereço',            // ← Altere aqui
    city: 'Sua cidade',                 // ← Altere aqui
    state: 'UF',                        // ← Altere aqui
    zipCode: 'XXXXX-XXX',              // ← Altere aqui
    mapUrl: 'URL_DO_GOOGLE_MAPS',      // ← Veja instruções abaixo
  },
  socialMedia: [
    {
      platform: 'Instagram',
      url: 'https://instagram.com/seuperfil',  // ← Altere aqui
      icon: 'FaInstagram',
    },
    // Suas outras redes...
  ],
};
```

## Passo 4: Adicionar Sua Foto

1. Adicione sua foto em: `public/images/profile.jpg`
2. Edite `src/components/Hero.tsx` (linha ~58):

```typescript
// Substitua o placeholder por:
<div className="relative z-10 aspect-[3/4] bg-gradient-to-br from-secondary-200 to-primary-200 rounded-3xl overflow-hidden shadow-2xl">
  <img 
    src="/images/profile.jpg" 
    alt="Foto profissional"
    className="w-full h-full object-cover"
  />
</div>
```

## Passo 5: Obter URL do Google Maps

1. Acesse [Google Maps](https://www.google.com/maps)
2. Busque seu endereço
3. Clique em "Compartilhar"
4. Selecione "Incorporar mapa"
5. Copie o código iframe
6. Extraia a URL do atributo `src` (entre aspas após `src=`)
7. Cole em `constants.ts` no campo `mapUrl`

## 🎨 Alterar Cores (Opcional)

Edite `tailwind.config.js`:

```javascript
colors: {
  primary: {
    600: '#d68c3c',  // Cor principal dos botões e destaques
    // ... outras tonalidades
  },
}
```

**Dica:** Use [UI Colors](https://uicolors.app/create) para gerar paletas completas.

## 📝 Páginas do Site

Seu site tem 3 páginas:

1. **Home** (`/`) - Hero + Serviços
2. **Sobre** (`/sobre`) - Biografia completa
3. **Área de Atendimento** (`/area-atendimento`) - Localização + Contato

## ✅ Checklist Antes de Publicar

- [ ] Personalizei nome, título e biografia
- [ ] Adicionei minha foto profissional
- [ ] Atualizei telefone, email e WhatsApp
- [ ] Configurei endereço e Google Maps
- [ ] Atualizei links de redes sociais
- [ ] Ajustei serviços oferecidos
- [ ] Testei em mobile (responsive)
- [ ] Revisei toda a ortografia

## 🚀 Build para Produção

```bash
npm run build
npm start
```

## 📚 Documentação Completa

- **README.md** - Documentação técnica completa
- **UPDATES.md** - Mudanças de design implementadas
- **CUSTOMIZATION_GUIDE.md** - Guia detalhado de personalização
- **ARCHITECTURE.md** - Decisões arquiteturais

## ❓ Precisa de Ajuda?

Consulte os arquivos de documentação ou entre em contato!

---

**Pronto! Seu site está rodando e pronto para personalização! 🎉**


