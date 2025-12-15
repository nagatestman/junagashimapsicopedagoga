import { render, screen } from '@testing-library/react';
import Hero from '@/components/Hero';
import { SITE_CONFIG } from '@/utils/constants';

/**
 * Testes para o componente Hero
 * 
 * Cobertura:
 * - Renderização de conteúdo
 * - Exibição de informações do profissional
 * - Botões de ação
 */

describe('Hero Component', () => {
  it('deve renderizar o nome do profissional', () => {
    render(<Hero />);
    expect(screen.getByText(SITE_CONFIG.professional.name)).toBeInTheDocument();
  });

  it('deve renderizar o título profissional', () => {
    render(<Hero />);
    expect(screen.getByText(SITE_CONFIG.professional.title)).toBeInTheDocument();
  });

  it('deve renderizar o subtítulo/credencial', () => {
    render(<Hero />);
    expect(screen.getByText(SITE_CONFIG.professional.subtitle)).toBeInTheDocument();
  });

  it('deve renderizar o botão de WhatsApp', () => {
    render(<Hero />);
    expect(screen.getByText('Agende sua Consulta')).toBeInTheDocument();
  });

  it('deve renderizar o botão "Saiba Mais"', () => {
    render(<Hero />);
    expect(screen.getByText('Saiba Mais')).toBeInTheDocument();
  });

  it('deve renderizar as estatísticas', () => {
    render(<Hero />);
    expect(screen.getByText('Anos de Experiência')).toBeInTheDocument();
    expect(screen.getByText('Pacientes Atendidos')).toBeInTheDocument();
    expect(screen.getByText('Satisfação')).toBeInTheDocument();
  });
});




