# Site Profissional - Psicopedagoga

Site moderno e profissional desenvolvido para uma psicopedagoga, com design clean e elegante inspirado em tendências atuais, componentes modulares e otimizado para SEO.

## 🎯 Visão Geral

Este projeto foi desenvolvido seguindo as melhores práticas de arquitetura de software, com foco em:
- **Design Clean**: Visual elegante com cores suaves (bege/dourado)
- **3 Páginas**: Estrutura simplificada (Home, Sobre, Área de Atendimento)
- **Modularidade**: Componentes reutilizáveis e independentes
- **Manutenibilidade**: Código limpo e bem documentado
- **Performance**: Otimizado para carregamento rápido
- **SEO**: Estrutura otimizada para motores de busca
- **Responsividade**: Funciona perfeitamente em todos os dispositivos

## 🏗️ Arquitetura e Decisões Técnicas

### Stack Tecnológico

#### Next.js 14 (App Router)
**Por quê?**
- **SSR/SSG**: Renderização no servidor para melhor SEO e performance
- **File-based Routing**: Roteamento simplificado e intuitivo
- **Image Optimization**: Otimização automática de imagens
- **Code Splitting**: Carregamento sob demanda de recursos
- **Built-in Performance**: Métricas e otimizações nativas

#### TypeScript
**Por quê?**
- **Type Safety**: Detecta erros em tempo de desenvolvimento
- **IntelliSense**: Autocompletar e documentação inline
- **Refatoração Segura**: Mudanças mais confiáveis
- **Melhor Manutenibilidade**: Código autodocumentado

#### Tailwind CSS
**Por quê?**
- **Utility-First**: Desenvolvimento rápido e consistente
- **Design System**: Sistema de cores e espaçamentos padronizado
- **Responsividade**: Classes responsivas built-in
- **Tree-Shaking**: Remove CSS não utilizado
- **Customização**: Facilmente personalizável

#### React Icons
**Por quê?**
- **Consistência**: Ícones de bibliotecas populares unificados
- **Tree-Shakeable**: Importa apenas ícones utilizados
- **Customizável**: Fácil estilização com CSS

### Estrutura do Projeto

```
site/
├── src/
│   ├── app/                         # Next.js App Router
│   │   ├── layout.tsx              # Layout raiz com metadados SEO
│   │   ├── page.tsx                # Home
│   │   ├── sobre/
│   │   │   └── page.tsx            # Página Sobre
│   │   ├── area-atendimento/
│   │   │   └── page.tsx            # Página Área de Atendimento
│   │   └── globals.css             # Estilos globais e animações
│   ├── components/                 # Componentes React modulares
│   │   ├── Header.tsx              # Navegação (3 páginas)
│   │   ├── Hero.tsx                # Hero section com design clean
│   │   ├── About.tsx               # Perfil profissional
│   │   ├── Services.tsx            # Como Posso Te Ajudar
│   │   ├── Location.tsx            # Mapa e localização
│   │   ├── Contact.tsx             # Formulário e contatos
│   │   └── Footer.tsx              # Rodapé e redes sociais
│   ├── types/                      # Definições TypeScript
│   │   └── index.ts                # Interfaces e tipos
│   └── utils/                      # Utilitários e constantes
│       └── constants.ts            # Configurações centralizadas
├── __tests__/                      # Testes automatizados
│   ├── components/                 # Testes de componentes
│   └── utils/                      # Testes de utilitários
├── public/                         # Assets estáticos (adicione suas fotos aqui)
├── package.json                    # Dependências
├── tsconfig.json                   # Configuração TypeScript
├── tailwind.config.js              # Configuração Tailwind (cores atualizadas)
├── jest.config.js                  # Configuração Jest
├── README.md                       # Documentação
├── UPDATES.md                      # Log de mudanças de design
└── CUSTOMIZATION_GUIDE.md          # Guia de customização rápida
```

### Padrões Arquiteturais

#### 1. **Separação de Responsabilidades**
- **Componentes**: Apenas UI e lógica de apresentação
- **Utils**: Funções utilitárias e helpers
- **Types**: Definições de tipos centralizadas
- **Constants**: Dados configuráveis em um único local

#### 2. **Componentes Modulares**
Cada componente é:
- **Autocontido**: Funciona independentemente
- **Reutilizável**: Pode ser usado em diferentes contextos
- **Documentado**: Com comentários JSDoc
- **Testável**: Isolado e fácil de testar

#### 3. **Type Safety**
- Todas as interfaces definidas em `types/index.ts`
- Props tipadas em todos os componentes
- Dados configuráveis validados em tempo de compilação

#### 4. **Single Source of Truth**
- Dados centralizados em `utils/constants.ts`
- Fácil atualização de conteúdo sem alterar código
- Configuração type-safe

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar produção localmente
npm start

# Executar testes
npm test

# Executar testes em modo watch
npm run test:watch

# Gerar relatório de cobertura
npm run test:coverage

# Linting
npm run lint
```

### Desenvolvimento

O site estará disponível em `http://localhost:3000`

### Personalização

Para personalizar o conteúdo, edite o arquivo `src/utils/constants.ts`:

```typescript
export const SITE_CONFIG: SiteConfig = {
  professional: {
    name: 'Seu Nome',
    title: 'Sua Profissão',
    // ... outros campos
  },
  // ... outras configurações
};
```

## 🧪 Testes

### Estratégia de Testes

Implementamos testes automatizados para garantir qualidade:

1. **Testes de Componentes**: Verificam renderização e interação
2. **Testes de Integração**: Validam fluxos completos
3. **Testes de Dados**: Garantem estrutura correta das constantes

### Cobertura

```bash
npm run test:coverage
```

Alvos de cobertura:
- Statements: > 80%
- Branches: > 75%
- Functions: > 80%
- Lines: > 80%

## 📦 Deploy

### Opções de Hospedagem

#### 1. **Vercel (Recomendado)**
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**Vantagens:**
- Deploy automático via Git
- Edge Functions
- Preview deployments
- Analytics built-in
- SSL automático
- CDN global

#### 2. **Netlify**
```bash
# Instalar Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

**Vantagens:**
- CI/CD integrado
- Forms nativo
- Split testing
- SSL automático

#### 3. **AWS Amplify**
```bash
# Instalar Amplify CLI
npm i -g @aws-amplify/cli

# Configurar e deploy
amplify init
amplify publish
```

**Vantagens:**
- Integração AWS
- Autenticação
- API Gateway
- Escalabilidade

#### 4. **Docker + VPS**
```dockerfile
# Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

```bash
# Build e deploy
docker build -t psicopedagoga-site .
docker run -p 3000:3000 psicopedagoga-site
```

### Variáveis de Ambiente

Crie um arquivo `.env.local` para desenvolvimento:

```env
# Analytics (opcional)
NEXT_PUBLIC_GA_ID=your_ga_id

# Email Service (para formulário de contato)
EMAIL_SERVICE_API_KEY=your_api_key
```

## 🎨 Customização de Design

### Cores

Edite `tailwind.config.js` para alterar o esquema de cores:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Suas cores primárias
      },
      secondary: {
        // Suas cores secundárias
      },
    },
  },
}
```

### Fontes

Altere em `src/app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=SuaFonte&display=swap');
```

## 📊 Performance

### Métricas Alvo

- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1
- **TTI (Time to Interactive)**: < 3.8s

### Otimizações Implementadas

1. **Code Splitting**: Carregamento sob demanda
2. **Image Optimization**: Next.js Image component
3. **Lazy Loading**: Componentes carregados quando necessário
4. **CSS Purging**: Tailwind remove CSS não utilizado
5. **Minificação**: Build otimizado para produção
6. **Caching**: Headers otimizados

## 🔒 Segurança

### Medidas Implementadas

1. **Headers de Segurança**: CSP, HSTS, X-Frame-Options
2. **Sanitização de Inputs**: Validação em formulários
3. **HTTPS Only**: Redirecionamento automático
4. **Dependências Atualizadas**: Vulnerabilidades minimizadas

## 🔍 SEO

### Otimizações

1. **Meta Tags**: OpenGraph, Twitter Cards
2. **Semantic HTML**: Estrutura semântica correta
3. **Schema.org**: Dados estruturados (a implementar)
4. **Sitemap**: Gerado automaticamente
5. **Robots.txt**: Configurado corretamente
6. **URLs Amigáveis**: Âncoras semânticas

## ♿ Acessibilidade

### Padrões Implementados

1. **ARIA Labels**: Navegação acessível
2. **Keyboard Navigation**: Totalmente navegável por teclado
3. **Color Contrast**: WCAG AA compliant
4. **Semantic HTML**: Tags apropriadas
5. **Alt Text**: Imagens com descrições

## 📈 Analytics (Opcional)

### Google Analytics

Adicione ao `layout.tsx`:

```typescript
import Script from 'next/script';

// Dentro do componente
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
  strategy="afterInteractive"
/>
```

## 🔧 Revisão Crítica e Melhorias

### Pontos Fortes

✅ **Arquitetura Modular**: Fácil manutenção e escalabilidade
✅ **Type Safety**: Reduz bugs e melhora DX
✅ **Performance**: Otimizado para Web Vitals
✅ **SEO**: Estrutura otimizada
✅ **Responsivo**: Funciona em todos os dispositivos
✅ **Testável**: Cobertura de testes automatizados

### Áreas de Melhoria

#### 1. **Formulário de Contato**
**Atual**: Simulação de envio
**Melhoria**: Integrar com serviço real

```typescript
// Opções:
- Emailjs
- SendGrid
- AWS SES
- API personalizada
```

#### 2. **Sistema de CMS**
**Risco**: Conteúdo hardcoded
**Melhoria**: Integrar CMS headless

```typescript
// Opções:
- Contentful
- Sanity.io
- Strapi
- WordPress Headless
```

#### 3. **Imagens**
**Atual**: Placeholders
**Melhoria**: Sistema de gerenciamento de mídia

```typescript
// Opções:
- Cloudinary
- ImageKit
- AWS S3 + CloudFront
```

#### 4. **Analytics e Tracking**
**Melhoria**: Implementar tracking de eventos

```typescript
// Eventos a trackear:
- Cliques em CTA
- Submissão de formulário
- Tempo em cada seção
- Taxa de conversão
```

#### 5. **Blog**
**Melhoria**: Adicionar seção de artigos

```typescript
// Estrutura:
src/
  app/
    blog/
      [slug]/
        page.tsx
```

#### 6. **Multilíngue**
**Melhoria**: Suporte a múltiplos idiomas

```typescript
// Implementar com:
- next-intl
- i18next
```

## 🚀 Roadmap de Evolução

### Fase 1: MVP (Atual) ✅
- [x] Site institucional completo
- [x] Design responsivo
- [x] Formulário de contato
- [x] SEO básico

### Fase 2: Interatividade (1-2 meses)
- [ ] Integração com serviço de email real
- [ ] Sistema de agendamento online
- [ ] Chat ao vivo / Chatbot
- [ ] Área de depoimentos de clientes

### Fase 3: Conteúdo (2-3 meses)
- [ ] Blog com artigos
- [ ] Recursos educacionais para download
- [ ] Vídeos informativos
- [ ] FAQ interativo

### Fase 4: Escalabilidade (3-6 meses)
- [ ] Área do cliente (login)
- [ ] Sistema de pagamentos
- [ ] Agendamento com calendário
- [ ] Videoconferência integrada

### Fase 5: Avançado (6+ meses)
- [ ] App mobile (React Native)
- [ ] Plataforma de cursos online
- [ ] Gamificação para crianças
- [ ] IA para triagem inicial

## 🛡️ Riscos e Mitigações

### 1. **Performance em Escala**
**Risco**: Lentidão com muito conteúdo
**Mitigação**: Paginação, lazy loading, CDN

### 2. **Segurança de Dados**
**Risco**: Exposição de dados sensíveis
**Mitigação**: HTTPS, validação, sanitização, backend seguro

### 3. **Compatibilidade de Navegadores**
**Risco**: Bugs em navegadores antigos
**Mitigação**: Polyfills, testes cross-browser

### 4. **Dependências Desatualizadas**
**Risco**: Vulnerabilidades de segurança
**Mitigação**: Renovate/Dependabot, atualizações regulares

### 5. **Custos de Hospedagem**
**Risco**: Custo elevado com tráfego
**Mitigação**: Caching agressivo, otimização de imagens, escolha de provedor adequado

## 📚 Recursos e Documentação

### Documentação Oficial
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

### Ferramentas Úteis
- [Can I Use](https://caniuse.com) - Compatibilidade de navegadores
- [PageSpeed Insights](https://pagespeed.web.dev) - Performance
- [WAVE](https://wave.webaim.org) - Acessibilidade
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Auditoria

## 🤝 Contribuindo

### Como Contribuir

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Add: Nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

### Padrões de Commit

Seguimos [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: adiciona nova funcionalidade
fix: corrige bug
docs: atualiza documentação
style: mudanças de formatação
refactor: refatoração de código
test: adiciona ou atualiza testes
chore: tarefas de manutenção
```

## 📝 Licença

Este projeto é proprietário e confidencial.

## 👥 Suporte

Para dúvidas ou suporte:
- Email: junagashimapsicopedagoga@gmail.com
- WhatsApp: (19) 98297-0432

---

**Desenvolvido com ❤️ usando Next.js, React e TypeScript**

# junagashimapsicopedagoga
