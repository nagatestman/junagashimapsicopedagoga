import { render, screen, fireEvent } from '@testing-library/react';
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
  it('deve renderizar o título principal', () => {
    render(<Hero />);
    expect(screen.getByText('Psicopedagogia com inspiração Montessoriana')).toBeInTheDocument();
  });

  it('deve renderizar a descrição do atendimento', () => {
    render(<Hero />);
    expect(screen.getByText(/Atendimento psicopedagógico para crianças e adolescentes/i)).toBeInTheDocument();
  });

  it('deve renderizar o botão de ação', () => {
    render(<Hero />);
    expect(screen.getByText('Descubra Como')).toBeInTheDocument();
  });

  it('deve renderizar a imagem profissional', () => {
    render(<Hero />);
    const image = screen.getByAltText(SITE_CONFIG.professional.name);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/images/logo-home.jpeg');
  });

  it('deve ter botão funcional de WhatsApp', () => {
    // Spy no window.open
    const windowOpenSpy = jest.spyOn(window, 'open').mockImplementation(() => null);
    
    render(<Hero />);
    const button = screen.getByText('Descubra Como');
    
    fireEvent.click(button);
    
    expect(windowOpenSpy).toHaveBeenCalledWith(
      expect.stringContaining('https://api.whatsapp.com/send'),
      '_blank'
    );
    
    windowOpenSpy.mockRestore();
  });
});




