/**
 * Constantes e configurações do site
 * Centralizadas para fácil manutenção
 */

import { SiteConfig } from '@/types';

export const SITE_CONFIG: SiteConfig = {
  professional: {
    name: 'Juliana Nagashima',
    title: 'Psicopedagoga',
    subtitle: 'CRP XX/XXXXXX',
    bio: 'Sou Juliana, psicopedagoga e Guia Montessori, com atuação dedicada ao desenvolvimento infantil e aos processos de aprendizagem. Minha trajetória profissional é construída a partir da vivência em sala de aula, do estudo contínuo e de um profundo respeito pela infância.\n\nSou mãe do Léo e do Thiago e companheira do Renato Nagashima há 21 anos. Essas experiências ampliam diariamente meu olhar, minha escuta e minha empatia com as crianças e suas famílias.\n\nTenho especialização no trabalho com crianças de 6 a 9 anos e sou profundamente interessada em neurociência e desenvolvimento infantil. Acredito que cada criança possui um ritmo próprio, necessidades singulares e um grande potencial de aprendizagem, que precisa ser compreendido e respeitado para que se desenvolva de forma saudável.\n\nMeu trabalho é pautado em uma abordagem humanizada, fundamentada em evidências científicas e inspirada na metodologia Montessori. A partir da avaliação psicopedagógica, busco compreender como a criança aprende, quais aspectos do desenvolvimento precisam ser fortalecidos e quais estratégias podem favorecer sua autonomia, segurança emocional e autoestima.\n\nAtuo em parceria com as famílias, oferecendo orientação, escuta e direcionamento ao longo de todo o processo, com o objetivo de transformar desafios em possibilidades reais de crescimento, amadurecimento e conquistas na aprendizagem.\n\nAcredito que aprender se torna mais leve e significativo quando a criança se sente segura, respeitada e compreendida.',
    credentials: [
      'Graduação em Pedagogia',
      'Pós-graduação em Psicopedagogia Clínica e Institucional',
      'Guia Montessoriana com certificação MACTE 3-6 e 6-9 anos',
    ],
  },
  services: [
    {
      id: '1',
      title: 'Avaliação Psicopedagógica',
      description: 'Diagnóstico completo das dificuldades de aprendizagem através de instrumentos validados e entrevistas.',
      icon: 'FaClipboardList',
    },
    {
      id: '2',
      title: 'Intervenção Psicopedagógica',
      description: 'Atendimento individualizado focado nas necessidades específicas de cada pessoa.',
      icon: 'FaUserGraduate',
    },
    {
      id: '3',
      title: 'Orientação Familiar',
      description: 'Suporte e orientação para pais e familiares no processo de aprendizagem.',
      icon: 'FaUsers',
    },
    {
      id: '4',
      title: 'Atendimento a Escolas',
      description: 'Consultoria e formação de professores para lidar com dificuldades de aprendizagem.',
      icon: 'FaSchool',
    },
    {
      id: '5',
      title: 'Dificuldades e transtornos de aprendizagem',
      description: 'Trabalho especializado em dislexia, discalculia, disgrafia e outros transtornos.',
      icon: 'FaBrain',
    },
    {
      id: '6',
      title: 'Acompanhamento pedagógico',
      description: 'Apoio pedagógico individualizado para melhorar o desempenho acadêmico.',
      icon: 'FaBook',
    },
  ],
  contact: {
    phone: '(19) 98297-0432',
    email: 'junagashimapsicopedagoga@gmail.com',
    whatsapp: '5519982970432',
  },
  location: {
    address: 'Rua Dr. Paulo C. P. Nogueira, 21 - Nova Campinas',
    city: 'Campinas',
    state: 'SP',
    zipCode: '13092-104',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.1745908847685!2d-47.05782!3d-22.898461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c8f0e0e0e0e0%3A0x0!2zMjLCsDUzJzU0LjUiUyA0N8KwMDMnMjguMiJX!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr',
  },
  socialMedia: [
    {
      platform: 'Instagram',
      url: 'https://www.instagram.com/juliananagashima/',
      icon: 'FaInstagram',
    },
    {
      platform: 'WhatsApp',
      url: 'https://api.whatsapp.com/send/?phone=5519982970432&text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20atendimento.&type=phone_number&app_absent=0',
      icon: 'FaWhatsapp',
    },
  ],
};

export const SITE_METADATA = {
  title: 'Juliana Nagashima - Psicopedagoga',
  description: 'Psicopedagoga especializada em dificuldades de aprendizagem. Atendimento infantil, juvenil e adulto.',
  keywords: 'psicopedagoga, psicopedagogia, dificuldades de aprendizagem, dislexia, avaliação psicopedagógica, Juliana Nagashima',
  author: 'Juliana Nagashima',
  siteUrl: 'https://juliana-nagashima.com.br',
};

