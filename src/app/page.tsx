'use client';

import React from 'react';
import NavigationMenu from '../components/NavigationMenu';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProductsSection from '../components/ProductsSection';
import ServicesSection from '../components/ServicesSection';
import PortfolioSection from '../components/PortfolioSection';
import BookingSection from '../components/BookingSection';
import ContactSection from '../components/ContactSection';
import FooterSection from '../components/FooterSection';
import ScrollToTopButton from '../components/ScrollToTopButton';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* כאן יתווספו הקומפוננטות שייווצרו על ידי המחולל */}
        <NavigationMenu />
    <HeroSection />
    <AboutSection />
    <ProductsSection />
    <ServicesSection />
    <PortfolioSection />
    <BookingSection />
    <ContactSection />
    <FooterSection />
    <ScrollToTopButton />
  </main>
      
      <footer className="py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          &copy; 2025 חנות ספרים ביתא. כל הזכויות שמורות.
        </div>
      </footer>
    </div>
  );
}