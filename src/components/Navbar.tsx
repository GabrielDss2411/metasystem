import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', target: 'inicio' },
    { name: 'A revolução', target: 'about' },
    { name: 'Por que a MetaSystem', target: 'values' },
  ];

  const handleSmoothScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false); // Fecha menu mobile
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <Logo className="h-10 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleSmoothScroll(link.target)}
              className="text-sm font-medium text-gray-800 hover:text-purple-600 transition-colors"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => handleSmoothScroll('contact')}
            className="px-5 py-2.5 rounded-full bg-blue-600 text-white text-sm font-medium transition-all hover:bg-blue-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Começar
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden p-4 z-40">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleSmoothScroll(link.target)}
                  className="text-gray-800 hover:text-purple-600 font-medium py-2 text-left"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => handleSmoothScroll('contact')}
                className="px-5 py-2.5 rounded-full bg-purple-600 text-white text-sm font-medium transition-all hover:bg-purple-700 text-center"
              >
                Começar
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
