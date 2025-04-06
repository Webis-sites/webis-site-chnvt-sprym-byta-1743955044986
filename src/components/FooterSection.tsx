'use client';

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

interface NewsletterFormData {
  email: string;
}

const FooterSection: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<NewsletterFormData>();

  const onSubmit = (data: NewsletterFormData) => {
    // Handle newsletter subscription logic here
    console.log('Newsletter subscription:', data);
    // Reset form after submission
    reset();
    // Here you would typically send the data to your backend
  };

  return (
    <footer className="bg-primary text-white rtl" dir="rtl">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About Section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-3">
                <span className="text-primary font-bold text-xl">חס"ב</span>
              </div>
              <h2 className="text-xl font-bold">חנות ספרים ביתא</h2>
            </div>
            <p className="text-sm">
              חנות הספרים המובילה בישראל, מציעה מגוון רחב של ספרים בכל הקטגוריות. אצלנו תמצאו את הספרים החדשים והמבוקשים ביותר.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-secondary pb-2">ניווט מהיר</h3>
            <ul className="space-y-3">
              <li><a href="/" className="hover:text-secondary transition-colors">דף הבית</a></li>
              <li><a href="/books" className="hover:text-secondary transition-colors">קטלוג ספרים</a></li>
              <li><a href="/new-arrivals" className="hover:text-secondary transition-colors">חדש על המדף</a></li>
              <li><a href="/bestsellers" className="hover:text-secondary transition-colors">רבי מכר</a></li>
              <li><a href="/authors" className="hover:text-secondary transition-colors">סופרים</a></li>
              <li><a href="/about" className="hover:text-secondary transition-colors">אודות</a></li>
              <li><a href="/contact" className="hover:text-secondary transition-colors">צור קשר</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-secondary pb-2">צור קשר</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaMapMarkerAlt className="ml-2" />
                <span>רחוב הרצל 123, תל אביב</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="ml-2" />
                <span>03-1234567</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="ml-2" />
                <span>info@bookstore-beta.co.il</span>
              </li>
              <li className="flex items-center">
                <FaClock className="ml-2" />
                <span>שעות פעילות:</span>
              </li>
              <li className="pr-6">א'-ה': 09:00-21:00</li>
              <li className="pr-6">ו': 09:00-14:00</li>
              <li className="pr-6">שבת: סגור</li>
            </ul>

            <div className="mt-6">
              <h4 className="text-md font-semibold mb-3">עקבו אחרינו</h4>
              <div className="flex space-x-4 space-x-reverse">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                  <FaFacebook size={24} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                  <FaTwitter size={24} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                  <FaInstagram size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-secondary pb-2">הרשמה לניוזלטר</h3>
            <p className="text-sm mb-4">הירשמו לניוזלטר שלנו וקבלו עדכונים על ספרים חדשים ומבצעים מיוחדים.</p>
            
            <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="כתובת אימייל"
                  className={`p-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-secondary ${errors.email ? 'border-red-500' : ''}`}
                  {...register('email', { 
                    required: 'שדה חובה', 
                    pattern: { 
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
                      message: 'כתובת אימייל לא תקינה' 
                    } 
                  })}
                />
                {errors.email && <p className="text-red-300 text-xs">{errors.email.message}</p>}
                <button 
                  type="submit" 
                  className="bg-secondary text-gray-800 font-bold py-2 px-4 rounded-md hover:bg-opacity-80 transition-colors"
                >
                  הרשמה
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-white border-opacity-20 mt-12 pt-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} חנות ספרים ביתא. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;