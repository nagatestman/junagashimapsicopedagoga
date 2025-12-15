import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SITE_METADATA } from '@/utils/constants';

/**
 * Root Layout
 * 
 * Layout principal da aplicação Next.js
 * Características:
 * - Metadados SEO-friendly
 * - Configuração global de estilos
 * - Estrutura HTML base
 */

export const metadata: Metadata = {
  title: SITE_METADATA.title,
  description: SITE_METADATA.description,
  keywords: SITE_METADATA.keywords,
  authors: [{ name: SITE_METADATA.author }],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    type: 'website',
    locale: 'pt_BR',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}




