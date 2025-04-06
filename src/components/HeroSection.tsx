'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-white" dir="rtl">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="חנות ספרים ביתא"
          layout="fill"
          objectFit="cover"
          priority
          className="opacity-20"
        />
      </div>
      
      <div className="relative z-10 flex h-full w-full items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-6 font-heading text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
              חנות ספרים מוביל בישראל
            </h1>
            
            <p className="mb-8 text-xl text-gray-700 md:text-2xl">
              חווית לקוח מושלמת בכל ביקור
            </p>
            
            <motion.button
              className="rounded-lg bg-primary px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-primary-dark hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              קבע תור עכשיו
            </motion.button>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 z-10 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;