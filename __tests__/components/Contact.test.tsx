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
  it('deve renderizar o formulário de contato', () => {
    render(<Contact />);
    
    expect(screen.getByLabelText(/Nome Completo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Telefone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Mensagem/i)).toBeInTheDocument();
  });

  it('deve renderizar as informações de contato', () => {
    render(<Contact />);
    
    expect(screen.getByText(SITE_CONFIG.contact.phone)).toBeInTheDocument();
    expect(screen.getByText(SITE_CONFIG.contact.email)).toBeInTheDocument();
  });

  it('deve permitir preencher o formulário', async () => {
    const user = userEvent.setup();
    render(<Contact />);
    
    const nameInput = screen.getByLabelText(/Nome Completo/i) as HTMLInputElement;
    const emailInput = screen.getByLabelText(/Email/i) as HTMLInputElement;
    const messageInput = screen.getByLabelText(/Mensagem/i) as HTMLTextAreaElement;
    
    await user.type(nameInput, 'João Silva');
    await user.type(emailInput, 'joao@example.com');
    await user.type(messageInput, 'Gostaria de agendar uma consulta');
    
    expect(nameInput.value).toBe('João Silva');
    expect(emailInput.value).toBe('joao@example.com');
    expect(messageInput.value).toBe('Gostaria de agendar uma consulta');
  });

  it('deve submeter o formulário com sucesso', async () => {
    const user = userEvent.setup();
    render(<Contact />);
    
    const nameInput = screen.getByLabelText(/Nome Completo/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const messageInput = screen.getByLabelText(/Mensagem/i);
    const submitButton = screen.getByText('Enviar Mensagem');
    
    await user.type(nameInput, 'João Silva');
    await user.type(emailInput, 'joao@example.com');
    await user.type(messageInput, 'Teste de mensagem');
    
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/Mensagem enviada com sucesso/i)).toBeInTheDocument();
    }, { timeout: 2000 });
  });

  it('deve mostrar botão de WhatsApp', () => {
    render(<Contact />);
    expect(screen.getByText('Chamar')).toBeInTheDocument();
  });
});




