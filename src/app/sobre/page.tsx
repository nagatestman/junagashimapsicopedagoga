/**
 * Sobre Page
 * 
 * Página sobre a profissional
 */

import Header from '@/components/Header';
import About from '@/components/About';
import Footer from '@/components/Footer';

export default function Sobre() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <About />
      </div>
      <Footer />
    </main>
  );
}




