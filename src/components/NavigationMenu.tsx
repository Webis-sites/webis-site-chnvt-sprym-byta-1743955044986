'use client';

import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link as ScrollLink } from 'react-scroll';
import Image from 'next/image';

interface NavigationItem {
  id: string;
  label: string;
}

const NavigationMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  const navigationItems: NavigationItem[] = [
    { id: 'home', label: 'ראשי' },
    { id: 'about', label: 'אודות' },
    { id: 'products', label: 'ספרים' },
    { id: 'services', label: 'שירותים' },
    { id: 'portfolio', label: 'גלריה' },
    { id: 'booking', label: 'הזמנות' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Find which section is currently in view
      const sections = navigationItems.map(item => document.getElementById(item.id));
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop - 100) {
            setActiveSection(navigationItems[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navigationItems]);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative h-12 w-12 mr-2">
              <Image
                src="/logo.svg"
                alt="חנות ספרים ביתא"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <span className="text-xl font-bold text-primary">חנות ספרים ביתא</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 space-x-reverse">
            {navigationItems.map((item) => (
              <ScrollLink
                key={item.id}
                to={item.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`cursor-pointer text-lg font-medium transition-colors duration-300 hover:text-primary ${
                  activeSection === item.id ? 'text-primary font-bold' : 'text-gray-700'
                }`}
              >
                {item.label}
              </ScrollLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary focus:outline-none"
              aria-label={isOpen ? 'סגור תפריט' : 'פתח תפריט'}
            >
              {isOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-white overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 shadow-lg' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col space-y-4">
            {navigationItems.map((item) => (
              <ScrollLink
                key={item.id}
                to={item.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={closeMenu}
                className={`block py-2 text-center text-lg font-medium transition-colors duration-300 hover:text-primary ${
                  activeSection === item.id ? 'text-primary font-bold' : 'text-gray-700'
                }`}
              >
                {item.label}
              </ScrollLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationMenu;