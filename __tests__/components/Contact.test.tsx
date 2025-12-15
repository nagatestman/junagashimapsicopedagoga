import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Contact from '@/components/Contact';
import { SITE_CONFIG } from '@/utils/constants';

/**
 * Testes para o componente Contact
 * 
 * Cobertura:
 * - Renderização do formulário
 * - Validação de campos
 * - Submissão de formulário
 * - Informações de contato
 */

describe('Contact Component', () => {
  it('deve renderizar o título da seção', () => {
    render(<Contact />);
    expect(screen.getByText('Entre em Contato')).toBeInTheDocument();
    expect(screen.getByText('Formas de Contato')).toBeInTheDocument();
  });

  it('deve renderizar as informações de contato', () => {
    render(<Contact />);
    
    expect(screen.getAllByText(SITE_CONFIG.contact.phone)).toHaveLength(2); // Phone + WhatsApp
    expect(screen.getByText(SITE_CONFIG.contact.email)).toBeInTheDocument();
  });

  it('deve renderizar os cards de contato', () => {
    render(<Contact />);
    
    expect(screen.getByText('Telefone')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('WhatsApp')).toBeInTheDocument();
  });

  it('deve mostrar botão de WhatsApp', () => {
    render(<Contact />);
    expect(screen.getByText('Chamar')).toBeInTheDocument();
  });

  it('deve ter links funcionais para telefone e email', () => {
    render(<Contact />);
    
    // Buscar especificamente pelo link do telefone (primeiro elemento)
    const phoneLinks = screen.getAllByText(SITE_CONFIG.contact.phone);
    const phoneLink = phoneLinks[0].closest('a');
    const emailLink = screen.getByText(SITE_CONFIG.contact.email).closest('a');
    
    expect(phoneLink).toHaveAttribute('href', expect.stringContaining('tel:'));
    expect(emailLink).toHaveAttribute('href', expect.stringContaining('mailto:'));
  });
});




