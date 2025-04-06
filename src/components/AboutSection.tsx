'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section dir="rtl" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="order-2 md:order-1"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              אודות חנות ספרים ביתא
            </h2>
            <div className="w-20 h-1 bg-secondary mb-8"></div>
            
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              אנחנו חנות ספרים מוביל בתחום האופנה עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
            </p>
            
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              כבר למעלה מ-25 שנה, חנות ספרים ביתא מהווה בית לחובבי הספרות והקריאה. המומחיות שלנו בתחום מאפשרת לנו להציע מגוון רחב של ספרים בכל הז׳אנרים, מספרות יפה ועד ספרי עיון, ספרי ילדים וספרות מקצועית.
            </p>
            
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              הצוות המקצועי שלנו תמיד זמין לייעץ ולהמליץ על הספר המושלם עבורכם, ואנו גאים להיות חלק מהקהילה הספרותית המקומית ולתרום לתרבות הקריאה בישראל.
            </p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="bg-primary bg-opacity-10 rounded-lg p-4 text-center flex-1 min-w-[120px]">
                <h3 className="text-2xl font-bold text-primary mb-1">25+</h3>
                <p className="text-gray-600">שנות ניסיון</p>
              </div>
              <div className="bg-secondary bg-opacity-20 rounded-lg p-4 text-center flex-1 min-w-[120px]">
                <h3 className="text-2xl font-bold text-primary mb-1">10,000+</h3>
                <p className="text-gray-600">כותרים</p>
              </div>
              <div className="bg-primary bg-opacity-10 rounded-lg p-4 text-center flex-1 min-w-[120px]">
                <h3 className="text-2xl font-bold text-primary mb-1">50,000+</h3>
                <p className="text-gray-600">לקוחות מרוצים</p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="פנים חנות הספרים ביתא"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="bg-secondary text-gray-800 px-4 py-2 rounded-full text-sm font-medium">
                  מאז 1998
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;