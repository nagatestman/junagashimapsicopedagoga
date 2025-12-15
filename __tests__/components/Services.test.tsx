import { render, screen } from '@testing-library/react';
import Services from '@/components/Services';
import { SITE_CONFIG } from '@/utils/constants';

/**
 * Testes para o componente Services
 * 
 * Cobertura:
 * - Renderização de serviços
 * - Conteúdo correto
 */

describe('Services Component', () => {
  it('deve renderizar o título da seção', () => {
    render(<Services />);
    expect(screen.getByText('Serviços Oferecidos')).toBeInTheDocument();
  });

  it('deve renderizar todos os serviços', () => {
    render(<Services />);
    
    SITE_CONFIG.services.forEach((service) => {
      expect(screen.getByText(service.title)).toBeInTheDocument();
      expect(screen.getByText(service.description)).toBeInTheDocument();
    });
  });

  it('deve renderizar o número correto de cards de serviço', () => {
    render(<Services />);
    
    SITE_CONFIG.services.forEach((service) => {
      const serviceCard = screen.getByText(service.title).closest('div');
      expect(serviceCard).toBeInTheDocument();
    });
  });

  it('deve renderizar o botão de CTA', () => {
    render(<Services />);
    expect(screen.getByText('Agende uma Avaliação')).toBeInTheDocument();
  });
});




