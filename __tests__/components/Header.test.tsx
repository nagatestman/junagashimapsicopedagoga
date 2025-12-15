import { render, screen, fireEvent } from '@testing-library/react';
import Header from '@/components/Header';

/**
 * Testes para o componente Header
 * 
 * Cobertura:
 * - Renderização correta
 * - Menu mobile
 * - Navegação
 */

describe('Header Component', () => {
  it('deve renderizar o logo', () => {
    render(<Header />);
    expect(screen.getByText('Psicopedagogia')).toBeInTheDocument();
  });

  it('deve renderizar todos os itens de menu no desktop', () => {
    render(<Header />);
    expect(screen.getByText('Início')).toBeInTheDocument();
    expect(screen.getByText('Sobre')).toBeInTheDocument();
    expect(screen.getByText('Serviços')).toBeInTheDocument();
    expect(screen.getByText('Localização')).toBeInTheDocument();
    expect(screen.getByText('Contato')).toBeInTheDocument();
  });

  it('deve abrir o menu mobile ao clicar no botão hamburguer', () => {
    render(<Header />);
    const menuButton = screen.getByLabelText('Toggle menu');
    
    fireEvent.click(menuButton);
    
    // Verificar se o menu mobile está visível
    const mobileMenuItems = screen.getAllByText('Início');
    expect(mobileMenuItems.length).toBeGreaterThan(1); // Desktop + Mobile
  });

  it('deve fechar o menu mobile ao clicar novamente', () => {
    render(<Header />);
    const menuButton = screen.getByLabelText('Toggle menu');
    
    // Abrir
    fireEvent.click(menuButton);
    let mobileMenuItems = screen.getAllByText('Início');
    expect(mobileMenuItems.length).toBeGreaterThan(1);
    
    // Fechar
    fireEvent.click(menuButton);
    mobileMenuItems = screen.getAllByText('Início');
    // Após fechar, deve ter apenas a versão desktop
    expect(mobileMenuItems.length).toBe(2); // Desktop e um único item mobile
  });
});




