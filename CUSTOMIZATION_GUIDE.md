# Guia de Customização Rápida

Este guia mostra como personalizar o site para suas necessidades específicas.

## 🎨 Customização Básica (5 minutos)

### 1. Informações Profissionais

Edite: `src/utils/constants.ts`

```typescript
export const SITE_CONFIG: SiteConfig = {
  professional: {
    name: 'SEU NOME AQUI',
    title: 'SUA PROFISSÃO',
    subtitle: 'SEU REGISTRO PROFISSIONAL',
    bio: 'SUA BIOGRAFIA...',
    credentials: [
      'Sua formação 1',
      'Sua formação 2',
      // Adicione mais...
    ],
  },
  // ...
};
```

### 2. Serviços Oferecidos

No mesmo arquivo `constants.ts`, edite a seção `services`:

```typescript
services: [
  {
    id: '1',
    title: 'Nome do Serviço',
    description: 'Descrição do serviço...',
    icon: 'FaClipboardList', // Escolha um ícone
  },
  // Adicione mais serviços...
],
```

#### Ícones Disponíveis
- `FaClipboardList` - Lista/Avaliação
- `FaUserGraduate` - Educação/Estudante
- `FaUsers` - Grupo/Família
- `FaSchool` - Escola
- `FaBrain` - Cérebro/Neurociência
- `FaBook` - Livro/Estudo
- `FaHeart` - Coração/Cuidado
- `FaStar` - Estrela/Destaque

Para adicionar novos ícones, veja [React Icons](https://react-icons.github.io/react-icons/)

### 3. Informações de Contato

```typescript
contact: {
  phone: '(XX) XXXXX-XXXX',
  email: 'seu@email.com',
  whatsapp: '5511999999999', // Formato: código país + DDD + número
},
```

### 4. Localização

```typescript
location: {
  address: 'Seu endereço completo',
  city: 'Sua cidade',
  state: 'UF',
  zipCode: 'XXXXX-XXX',
  mapUrl: 'URL_DO_GOOGLE_MAPS', // Ver instruções abaixo
},
```

#### Como obter a URL do Google Maps:

1. Acesse [Google Maps](https://maps.google.com)
2. Busque seu endereço
3. Clique em "Compartilhar" > "Incorporar mapa"
4. Copie o código iframe
5. Extraia a URL do atributo `src`

### 5. Redes Sociais

```typescript
socialMedia: [
  {
    platform: 'Instagram',
    url: 'https://instagram.com/seuperfil',
    icon: 'FaInstagram',
  },
  // Adicione mais redes...
],
```

### 6. Metadados SEO

```typescript
export const SITE_METADATA = {
  title: 'Seu Nome - Sua Profissão',
  description: 'Descrição para motores de busca...',
  keywords: 'palavra-chave1, palavra-chave2, ...',
  author: 'Seu Nome',
  siteUrl: 'https://seusite.com.br',
};
```

## 🎨 Customização de Design (10 minutos)

### Cores

Edite: `tailwind.config.js`

```javascript
colors: {
  primary: {
    50: '#fef3f2',   // Mais claro
    100: '#fde4e2',
    200: '#fbcdca',
    300: '#f7aaa5',
    400: '#f17a73',
    500: '#e85146',  // Cor principal
    600: '#d43426',  // Cor usada no site
    700: '#b2281d',
    800: '#93251c',
    900: '#7a251e',  // Mais escuro
  },
}
```

#### Geradores de Paleta
- [Coolors](https://coolors.co/)
- [Tailwind Color Generator](https://uicolors.app/create)

### Fontes

Edite: `src/app/globals.css`

```css
@import url('https://fonts.googleapis.com/css2?family=SuaFonte:wght@300;400;600;700&display=swap');
```

E em `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['SuaFonte', 'system-ui', 'sans-serif'],
},
```

## 📸 Adicionando Imagens

### Foto Profissional

1. Adicione sua foto em `public/images/profile.jpg`
2. Edite `src/components/Hero.tsx` e `src/components/About.tsx`:

```typescript
// Substituir o placeholder por:
<Image 
  src="/images/profile.jpg" 
  alt="Foto profissional"
  width={400}
  height={400}
  className="rounded-full"
/>
```

### Logo

1. Adicione `public/images/logo.png`
2. Edite `src/components/Header.tsx`:

```typescript
<Image 
  src="/images/logo.png" 
  alt="Logo"
  width={150}
  height={50}
/>
```

### Favicon

1. Adicione `public/favicon.ico`
2. Next.js detectará automaticamente

## 🔧 Customização Avançada

### Adicionar Nova Seção

1. Crie componente: `src/components/NovaSecao.tsx`

```typescript
const NovaSecao = () => {
  return (
    <section id="nova-secao" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Seu conteúdo */}
      </div>
    </section>
  );
};

export default NovaSecao;
```

2. Adicione em `src/app/page.tsx`:

```typescript
import NovaSecao from '@/components/NovaSecao';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <NovaSecao /> {/* Nova seção */}
      <About />
      {/* ... */}
    </main>
  );
}
```

3. Adicione link no menu (`src/components/Header.tsx`):

```typescript
const menuItems = [
  // ...
  { label: 'Nova Seção', href: '#nova-secao' },
];
```

### Mudar Layout

#### Hero com imagem de fundo:

```typescript
// src/components/Hero.tsx
<section 
  className="min-h-screen flex items-center"
  style={{
    backgroundImage: 'url(/images/hero-bg.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <div className="bg-black bg-opacity-50 w-full">
    {/* Conteúdo com overlay escuro */}
  </div>
</section>
```

### Animações Personalizadas

Adicione em `tailwind.config.js`:

```javascript
extend: {
  animation: {
    'bounce-slow': 'bounce 3s linear infinite',
    'fade-in': 'fadeIn 0.5s ease-in',
  },
  keyframes: {
    fadeIn: {
      '0%': { opacity: '0' },
      '100%': { opacity: '1' },
    },
  },
}
```

Use: `className="animate-fade-in"`

## 📝 Customização de Conteúdo

### Alterar Textos do Hero

```typescript
// src/components/Hero.tsx
<p className="text-xl">
  SEU TEXTO CHAMATIVO AQUI
</p>
```

### Alterar Estatísticas

```typescript
<div className="grid grid-cols-3 gap-4 pt-8">
  <div className="text-center">
    <p className="text-3xl font-bold">10+</p>
    <p className="text-sm">SEU TEXTO</p>
  </div>
  {/* ... */}
</div>
```

### Adicionar Depoimentos

Crie `src/components/Testimonials.tsx`:

```typescript
const testimonials = [
  {
    name: 'Nome do Cliente',
    text: 'Depoimento...',
    role: 'Pai de paciente',
  },
  // Mais depoimentos...
];

const Testimonials = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">
        Depoimentos
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-600 italic mb-4">
              &quot;{testimonial.text}&quot;
            </p>
            <div>
              <p className="font-bold">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
```

## 🚀 Deploy

### Preparação

1. **Teste localmente:**
   ```bash
   npm run build
   npm start
   ```

2. **Verifique erros:**
   ```bash
   npm run lint
   npm test
   ```

### Deploy na Vercel (Recomendado)

1. Crie conta em [vercel.com](https://vercel.com)
2. Conecte seu repositório GitHub
3. Configure variáveis de ambiente (se houver)
4. Deploy automático!

### Deploy em outro host

```bash
npm run build
# Upload da pasta .next e public para seu servidor
```

## ❓ Perguntas Frequentes

### Como adicionar Google Analytics?

1. Obtenha seu ID do GA (G-XXXXXXXXXX)
2. Adicione em `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
3. Adicione em `src/app/layout.tsx`:
   ```typescript
   <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
   ```

### Como conectar o formulário a um email real?

Veja [README.md](./README.md) seção "Formulário de Contato" para opções de integração.

### Como adicionar mais páginas?

```
src/
  app/
    blog/
      page.tsx       # /blog
    sobre/
      page.tsx       # /sobre
```

## 🆘 Precisa de Ajuda?

- Consulte a [Documentação Completa](./README.md)
- Veja a [Arquitetura do Sistema](./ARCHITECTURE.md)
- Problemas? Abra uma issue no GitHub

---

**Última atualização:** Outubro 2025




