'use client';

import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { SITE_CONFIG } from '@/utils/constants';

/**
 * Footer Component
 * 
 * Rodapé com redes sociais e informações
 * Características:
 * - Links para redes sociais
 * - Informações de copyright
 * - Design clean e profissional
 */

const iconMap = {
  FaInstagram,
  FaWhatsapp,
};

const Footer = () => {
  const { professional, socialMedia } = SITE_CONFIG;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Sobre */}
          <div>
            <h3 className="text-xl font-bold mb-4">{professional.name}</h3>
            <p className="text-gray-400 mb-4">
              {professional.title} dedicada a transformar vidas através de uma abordagem 
              humanizada e baseada em evidências científicas.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="/sobre" className="text-gray-400 hover:text-white transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="/area-atendimento" className="text-gray-400 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
            <p className="text-gray-400 mb-4">
              Acompanhe conteúdos e dicas sobre aprendizagem e desenvolvimento
            </p>
            <div className="flex gap-4">
              {socialMedia.map((social) => {
                const IconComponent = iconMap[social.icon as keyof typeof iconMap];
                
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-secondary-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                    aria-label={social.platform}
                  >
                    {IconComponent && <IconComponent size={20} />}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-gray-400 text-sm text-center">
              © {currentYear} R. Nagashima. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

