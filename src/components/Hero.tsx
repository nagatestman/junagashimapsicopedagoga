'use client';

import { FaWhatsapp } from 'react-icons/fa';
import { SITE_CONFIG } from '@/utils/constants';

/**
 * Hero Component
 * 
 * Seção principal inspirada em design clean e elegante
 * Características:
 * - Layout limpo com foto profissional à direita
 * - Tipografia forte e hierárquica
 * - CTA destacado
 */

const Hero = () => {
  const { professional, contact } = SITE_CONFIG;

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de agendar uma consulta.');
    window.open(`https://api.whatsapp.com/send/?phone=5519982970432&text=${message}&type=phone_number&app_absent=0`, '_blank');
  };

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-secondary-50 via-secondary-100 to-white pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Texto */}
          <div className="space-y-8 max-w-2xl">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight uppercase tracking-tight">
                Psicopedagogia com inspiração Montessoriana
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                Atendimento psicopedagógico para crianças e adolescentes, acolhendo suas necessidades e potencialidades por meio da observação e dos materiais Montessorianos.
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={handleWhatsAppClick}
                className="bg-secondary-500 hover:bg-secondary-600 text-white px-12 py-4 rounded-md font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide"
              >
                Descubra Como
              </button>
            </div>
          </div>

          {/* Imagem */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[615px]">
              {/* Círculo de fundo decorativo */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-gradient-to-br from-accent-200 to-accent-100 rounded-full opacity-30 blur-3xl"></div>
              
              {/* Container da foto */}
              <div className="relative z-10 aspect-[3/4] bg-gradient-to-br from-secondary-200 to-secondary-300 rounded-3xl overflow-hidden shadow-2xl">
                {/* Foto profissional */}
                <img 
                  src="/images/logo-home.jpeg" 
                  alt={professional.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

