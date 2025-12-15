'use client';

import { FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { SITE_CONFIG } from '@/utils/constants';

/**
 * Contact Component
 * 
 * Seção de contato com informações
 * Características:
 * - Informações de contato direto
 */

const Contact = () => {
  const { contact } = SITE_CONFIG;

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de agendar uma consulta.');
    window.open(`https://api.whatsapp.com/send/?phone=5519982970432&text=${message}&type=phone_number&app_absent=0`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-secondary-50 to-secondary-100">
      <div className="container mx-auto px-4">
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <div className="w-24 h-1 bg-secondary-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Agende sua consulta ou tire suas dúvidas. Estou à disposição para ajudar!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Formas de Contato
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                {/* Telefone */}
                <div className="flex flex-col items-center gap-4 bg-white p-6 rounded-lg shadow-lg">
                  <div className="w-12 h-12 bg-secondary-600 rounded-full flex items-center justify-center text-white">
                    <FaPhone size={20} />
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600 font-semibold mb-1">Telefone</p>
                    <a 
                      href={`tel:${contact.phone.replace(/\D/g, '')}`}
                      className="text-lg text-gray-900 hover:text-secondary-600 transition-colors"
                    >
                      {contact.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col items-center gap-4 bg-white p-6 rounded-lg shadow-lg">
                  <div className="w-12 h-12 bg-secondary-600 rounded-full flex items-center justify-center text-white">
                    <FaEnvelope size={20} />
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600 font-semibold mb-1">Email</p>
                    <a 
                      href={`mailto:${contact.email}`}
                      className="text-lg text-gray-900 hover:text-secondary-600 transition-colors break-all"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex flex-col items-center gap-4 bg-green-500 p-6 rounded-lg shadow-lg text-white">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-green-500">
                    <FaWhatsapp size={24} />
                  </div>
                  <div className="text-center flex-1">
                    <p className="text-sm font-semibold mb-1">WhatsApp</p>
                    <p className="text-lg mb-3">{contact.phone}</p>
                    <button
                      onClick={handleWhatsAppClick}
                      className="bg-white text-green-500 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Chamar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;



