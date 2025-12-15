'use client';

import { 
  FaClipboardList, 
  FaUserGraduate, 
  FaUsers, 
  FaSchool, 
  FaBrain, 
  FaBook 
} from 'react-icons/fa';
import { SITE_CONFIG } from '@/utils/constants';

/**
 * Services Component
 * 
 * Seção de serviços oferecidos
 * Características:
 * - Grid responsivo de cards
 * - Ícones intuitivos
 * - Hover effects
 */

const iconMap = {
  FaClipboardList,
  FaUserGraduate,
  FaUsers,
  FaSchool,
  FaBrain,
  FaBook,
};

const Services = () => {
  const { services } = SITE_CONFIG;

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 uppercase tracking-tight">
            Como Posso Te Ajudar
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Atendimento personalizado e baseado em evidências científicas para 
            promover o desenvolvimento e superar dificuldades de aprendizagem.
          </p>
        </div>

        {/* Grid de Serviços */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <div
                key={service.id}
                className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-secondary-100"
              >
                <div className="flex flex-col items-start text-left space-y-4">
                  {/* Ícone */}
                  <div className="w-14 h-14 bg-secondary-500 rounded-lg flex items-center justify-center text-white">
                    {IconComponent && <IconComponent size={28} />}
                  </div>

                  {/* Título */}
                  <h3 className="text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>

                  {/* Descrição */}
                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="/area-atendimento"
            className="inline-block bg-secondary-500 hover:bg-secondary-600 text-white px-10 py-4 rounded-md font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide"
          >
            Agende uma Avaliação
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;

