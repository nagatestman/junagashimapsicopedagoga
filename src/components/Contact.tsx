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
    <section id="contact" className="py-20 bg-gradient-to-b from-white via-secondary-50/60 to-white">
      <div className="container mx-auto px-4">
        {/* Título da Seção */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <div className="w-24 h-1 bg-secondary-600 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Agende sua consulta ou tire dúvidas. Respondo rápido e com acolhimento.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          {/* Coluna esquerda: texto e diferenciais */}
          <div className="space-y-6 bg-white/80 backdrop-blur rounded-2xl shadow-xl border border-secondary-100 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center md:text-left">
              Formas de Contato
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Escolha o canal que preferir: telefone para agendar, email para detalhes,
              ou WhatsApp para resposta rápida. Atendimento humanizado e organizado.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-secondary-100 bg-secondary-50 px-4 py-3 text-gray-800 text-sm">
                • Retorno rápido e cordial
              </div>
              <div className="rounded-xl border border-secondary-100 bg-secondary-50 px-4 py-3 text-gray-800 text-sm">
                • Horário flexível para encaixes
              </div>
              <div className="rounded-xl border border-secondary-100 bg-secondary-50 px-4 py-3 text-gray-800 text-sm">
                • Primeira conversa acolhedora
              </div>
              <div className="rounded-xl border border-secondary-100 bg-secondary-50 px-4 py-3 text-gray-800 text-sm">
                • Atendimento presencial ou online
              </div>
            </div>
            <div className="bg-secondary-600 text-white rounded-xl p-6 shadow-lg">
              <p className="text-lg font-semibold mb-2">Precisa de um horário rápido?</p>
              <p className="text-sm text-secondary-50 mb-4">
                Clique em “Chamar” e me envie uma mensagem no WhatsApp. Vou responder
                o quanto antes para te ajudar.
              </p>
              <button
                onClick={handleWhatsAppClick}
                className="inline-flex items-center justify-center gap-2 bg-white text-secondary-700 px-5 py-3 rounded-lg font-semibold hover:bg-secondary-50 transition-colors shadow"
              >
                <FaWhatsapp /> Chamar
              </button>
            </div>
          </div>

          {/* Coluna direita: cartões de contato */}
          <div className="space-y-4">
            {/* Telefone */}
            <div className="flex items-center gap-4 bg-white rounded-2xl shadow-lg border border-secondary-100 p-6">
              <div className="w-12 h-12 rounded-full bg-secondary-600 text-white flex items-center justify-center">
                <FaPhone size={20} />
              </div>
              <div className="flex-1">
                <p className="text-sm uppercase tracking-wide text-gray-500 font-semibold">Telefone</p>
                <a
                  href={`tel:${contact.phone.replace(/\\D/g, '')}`}
                  className="text-xl font-bold text-gray-900 hover:text-secondary-600 transition-colors"
                >
                  {contact.phone}
                </a>
                <p className="text-sm text-gray-500 mt-1">Agende seu horário pelo telefone.</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 bg-white rounded-2xl shadow-lg border border-secondary-100 p-6">
              <div className="w-12 h-12 rounded-full bg-secondary-600 text-white flex items-center justify-center">
                <FaEnvelope size={20} />
              </div>
              <div className="flex-1">
                <p className="text-sm uppercase tracking-wide text-gray-500 font-semibold">Email</p>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-xl font-bold text-gray-900 hover:text-secondary-600 transition-colors break-all"
                >
                  {contact.email}
                </a>
                <p className="text-sm text-gray-500 mt-1">Envie dúvidas ou solicite informações.</p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center gap-4 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl shadow-lg text-white p-6">
              <div className="w-12 h-12 rounded-full bg-white text-green-600 flex items-center justify-center">
                <FaWhatsapp size={22} />
              </div>
              <div className="flex-1">
                <p className="text-sm uppercase tracking-wide font-semibold text-green-50">WhatsApp</p>
                <p className="text-xl font-bold">{contact.phone}</p>
                <p className="text-sm text-green-50 mt-1">Respostas rápidas e personalizadas.</p>
              </div>
              <button
                onClick={handleWhatsAppClick}
                className="bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                Chamar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;