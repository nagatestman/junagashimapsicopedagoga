'use client';

import { FaCheckCircle } from 'react-icons/fa';
import { SITE_CONFIG } from '@/utils/constants';

/**
 * About Component
 * 
 * Seção sobre a profissional com biografia e credenciais
 * Características:
 * - Layout limpo e profissional
 * - Lista de credenciais
 * - Fácil de ler e escanear
 */

const About = () => {
  const { professional } = SITE_CONFIG;

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-secondary-50 to-secondary-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Título da Seção */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 uppercase tracking-tight">
              Sobre Mim
            </h2>
          </div>

          {/* Conteúdo */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Coluna Esquerda: Foto, Formação e Citação */}
            <div className="space-y-8">
              {/* Foto e Info Rápida */}
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-secondary-100">
                <div className="aspect-[3/4] bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-2xl overflow-hidden mb-6">
                  <img 
                    src="/images/foto-quem-sou.jpg" 
                    alt={professional.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">
                  {professional.name}
                </h3>
                <p className="text-secondary-600 font-semibold text-center text-lg">
                  {professional.title}
                </p>
              </div>

              {/* Formação */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  Formação
                </h3>
                <ul className="space-y-3">
                  {professional.credentials.map((credential, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <FaCheckCircle className="text-secondary-600 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{credential}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Citação */}
              <div className="bg-gradient-to-r from-secondary-50 via-secondary-100 to-secondary-50 p-8 rounded-2xl border-l-4 border-secondary-600 shadow-lg">
                <p className="text-gray-800 text-lg font-medium leading-relaxed">
                  <span className="text-3xl text-secondary-600 mr-2">&quot;</span>
                  Transformo desafios da infância em conquistas. Acredito que cada criança tem 
                  potencialidades únicas esperando para serem descobertas e desenvolvidas. 
                  Meu trabalho é acolher, observar e guiar com amor, respeito e conhecimento científico.
                  <span className="text-3xl text-secondary-600 ml-2">&quot;</span>
                </p>
              </div>
            </div>

            {/* Coluna Direita: Bio */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-xl text-gray-800 leading-relaxed font-medium whitespace-pre-line">
                  {professional.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

