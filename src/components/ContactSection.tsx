'use client';

import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitSuccess(false);
    } finally {
      setIsSubmitting(false);
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(null);
      }, 5000);
    }
  };
  
  return (
    <section className="contact-section bg-white py-16 px-4 md:px-8 lg:px-16 rtl" dir="rtl">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">צור קשר</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="contact-form-container bg-white rounded-lg shadow-lg p-6 md:p-8 transform transition-transform duration-300 hover:translate-y-[-5px]">
            <h3 className="text-2xl font-semibold mb-6 text-primary">שלח לנו הודעה</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-group">
                <label htmlFor="name" className="block text-gray-700 mb-2">שם</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="השם המלא שלך"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone" className="block text-gray-700 mb-2">טלפון</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="מספר הטלפון שלך"
                  dir="ltr"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="block text-gray-700 mb-2">אימייל</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="כתובת האימייל שלך"
                  dir="ltr"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="block text-gray-700 mb-2">הודעה</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="כתוב את ההודעה שלך כאן..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-md text-white font-medium transition-all duration-300 
                  ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary hover:bg-primary-dark'}`}
              >
                {isSubmitting ? 'שולח...' : 'שלח הודעה'}
              </button>
              
              {submitSuccess === true && (
                <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md text-center animate-fade-in">
                  ההודעה נשלחה בהצלחה! נחזור אליך בהקדם.
                </div>
              )}
              
              {submitSuccess === false && (
                <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md text-center animate-fade-in">
                  אירעה שגיאה בשליחת ההודעה. אנא נסה שוב מאוחר יותר.
                </div>
              )}
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="contact-info-container">
            <h3 className="text-2xl font-semibold mb-6 text-primary">פרטי התקשרות</h3>
            
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8">
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-secondary p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">כתובת</h4>
                    <p className="text-gray-600">רחוב הספרים 123, תל אביב, ישראל</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-secondary p-3 rounded-full mr-4">
                    <FaPhone className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">טלפון</h4>
                    <p className="text-gray-600 direction-ltr" dir="ltr">+972-3-1234567</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-secondary p-3 rounded-full mr-4">
                    <FaEnvelope className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">אימייל</h4>
                    <p className="text-gray-600 direction-ltr" dir="ltr">info@bookstore-beta.co.il</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-secondary p-3 rounded-full mr-4">
                    <FaClock className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">שעות פעילות</h4>
                    <p className="text-gray-600">ראשון - חמישי: 9:00 - 20:00</p>
                    <p className="text-gray-600">שישי: 9:00 - 14:00</p>
                    <p className="text-gray-600">שבת: סגור</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Map */}
            <div className="map-container rounded-lg shadow-lg overflow-hidden h-64 md:h-80">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27035.50709727014!2d34.76965542064548!3d32.08740495767213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4c9f3a4f9999%3A0xf9d2e8e4c7e10416!2sTel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1653508567272!5m2!1sen!2sil" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="מפת מיקום חנות ספרים ביתא"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;