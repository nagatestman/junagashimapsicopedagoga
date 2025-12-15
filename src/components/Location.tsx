'use client';

import { FaMapMarkerAlt, FaParking } from 'react-icons/fa';
import { SITE_CONFIG } from '@/utils/constants';

/**
 * Location Component
 * 
 * Seção de localização com mapa e informações
 * Características:
 * - Google Maps embed
 * - Informações de endereço
 * - Informações adicionais (estacionamento)
 */

const Location = () => {
  const { location } = SITE_CONFIG;

  return (
    <section id="location" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Localização
          </h2>
          <div className="w-24 h-1 bg-secondary-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            Consultório em localização privilegiada e de fácil acesso
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Informações */}
            <div className="space-y-8">
              {/* Endereço */}
              <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-8 rounded-xl shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <FaMapMarkerAlt size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Endereço
                    </h3>
                    <p className="text-gray-700 text-lg">
                      {location.address}
                    </p>
                    <p className="text-gray-700 text-lg">
                      {location.city} - {location.state}
                    </p>
                    <p className="text-gray-600">
                      CEP: {location.zipCode}
                    </p>
                  </div>
                </div>
              </div>

              {/* Facilidades */}
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <FaParking size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Facilidades
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>✓ Estacionamento no local</li>
                      <li>✓ Acessibilidade para cadeirantes</li>
                      <li>✓ Sala de espera confortável</li>
                      <li>✓ Próximo ao transporte público</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div className="h-full min-h-[500px]">
              <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl">
                {location.mapUrl ? (
                  <iframe
                    src={location.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '500px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização do consultório"
                  ></iframe>
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500 text-center px-4">
                      Mapa será carregado aqui<br />
                      Configure o mapUrl nas constantes
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;




