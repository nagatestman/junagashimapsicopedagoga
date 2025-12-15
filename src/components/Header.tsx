'use client';

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

/**
 * Header Component
 * 
 * Cabeçalho responsivo com navegação e menu mobile
 * Características:
 * - Menu hamburguer para mobile
 * - Navegação suave entre seções
 * - Sticky header com sombra ao scroll
 * - Indicador visual da página ativa com tom escuro da paleta
 */

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { label: 'INÍCIO', href: '/' },
    { label: 'SOBRE', href: '/sobre' },
    { label: 'CONTATO', href: '/area-atendimento' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-[9999]">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center" onClick={closeMenu}>
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-bold text-secondary-600 leading-tight">
                  Juliana Nagashima
                </span>
                <span className="text-sm md:text-base text-secondary-500 uppercase tracking-wider">
                  Psicopedagoga
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-10">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`
                    relative text-gray-700 hover:text-secondary-600 transition-all duration-300 font-medium text-lg tracking-wide pb-1
                    ${isActive(item.href) 
                      ? 'text-secondary-700 font-semibold' 
                      : ''
                    }
                  `}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary-700 rounded-full" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            type="button"
            className="md:hidden text-gray-700 hover:text-secondary-600 transition-colors p-2 cursor-pointer"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <ul className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className={`
                      block text-gray-700 hover:text-secondary-600 transition-all duration-300 font-medium text-lg py-2 px-3 rounded-lg
                      ${isActive(item.href) 
                        ? 'bg-secondary-700 text-white font-semibold' 
                        : 'hover:bg-gray-50'
                      }
                    `}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
