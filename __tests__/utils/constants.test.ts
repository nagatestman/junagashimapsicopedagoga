import { SITE_CONFIG, SITE_METADATA } from '@/utils/constants';

/**
 * Testes para as constantes da aplicação
 * 
 * Cobertura:
 * - Estrutura de dados
 * - Validação de informações essenciais
 */

describe('SITE_CONFIG', () => {
  it('deve ter informações do profissional', () => {
    expect(SITE_CONFIG.professional).toBeDefined();
    expect(SITE_CONFIG.professional.name).toBeTruthy();
    expect(SITE_CONFIG.professional.title).toBeTruthy();
    expect(SITE_CONFIG.professional.bio).toBeTruthy();
    expect(SITE_CONFIG.professional.credentials).toBeInstanceOf(Array);
  });

  it('deve ter pelo menos um serviço', () => {
    expect(SITE_CONFIG.services).toBeInstanceOf(Array);
    expect(SITE_CONFIG.services.length).toBeGreaterThan(0);
  });

  it('deve ter informações de contato válidas', () => {
    expect(SITE_CONFIG.contact.phone).toBeTruthy();
    expect(SITE_CONFIG.contact.email).toContain('@');
    expect(SITE_CONFIG.contact.whatsapp).toBeTruthy();
  });

  it('deve ter informações de localização', () => {
    expect(SITE_CONFIG.location.address).toBeTruthy();
    expect(SITE_CONFIG.location.city).toBeTruthy();
    expect(SITE_CONFIG.location.state).toBeTruthy();
    expect(SITE_CONFIG.location.zipCode).toBeTruthy();
  });

  it('deve ter pelo menos uma rede social', () => {
    expect(SITE_CONFIG.socialMedia).toBeInstanceOf(Array);
    expect(SITE_CONFIG.socialMedia.length).toBeGreaterThan(0);
  });

  it('cada serviço deve ter estrutura correta', () => {
    SITE_CONFIG.services.forEach((service) => {
      expect(service.id).toBeTruthy();
      expect(service.title).toBeTruthy();
      expect(service.description).toBeTruthy();
      expect(service.icon).toBeTruthy();
    });
  });

  it('cada rede social deve ter estrutura correta', () => {
    SITE_CONFIG.socialMedia.forEach((social) => {
      expect(social.platform).toBeTruthy();
      expect(social.url).toMatch(/^https?:\/\//);
      expect(social.icon).toBeTruthy();
    });
  });
});

describe('SITE_METADATA', () => {
  it('deve ter metadados completos', () => {
    expect(SITE_METADATA.title).toBeTruthy();
    expect(SITE_METADATA.description).toBeTruthy();
    expect(SITE_METADATA.keywords).toBeTruthy();
    expect(SITE_METADATA.author).toBeTruthy();
  });

  it('deve ter URL válida', () => {
    expect(SITE_METADATA.siteUrl).toMatch(/^https?:\/\//);
  });
});




