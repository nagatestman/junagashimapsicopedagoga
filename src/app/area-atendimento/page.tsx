/**
 * Área de Atendimento Page
 * 
 * Página com localização e informações de contato
 */

import Header from '@/components/Header';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function AreaAtendimento() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}




