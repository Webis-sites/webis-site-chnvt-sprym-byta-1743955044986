'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { he } from 'date-fns/locale';
import { motion } from 'framer-motion';

interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
  appointmentDate: Date | null;
}

const BookingSection: React.FC = () => {
  const [appointmentDate, setAppointmentDate] = useState<Date | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<BookingFormData>();
  
  // Create RTL cache for MUI
  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });
  
  // Create RTL theme
  const theme = createTheme({
    direction: 'rtl',
    palette: {
      primary: {
        main: '#96CEB4',
      },
      secondary: {
        main: '#FFEEAD',
      },
    },
    typography: {
      fontFamily: 'Rubik, Arial, sans-serif',
    },
  });
  
  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    
    try {
      // Here you would normally send the data to your backend
      // For demo purposes, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', { ...data, appointmentDate });
      setSubmitSuccess(true);
      reset();
      setAppointmentDate(null);
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleDateChange = (newDate: Date | null) => {
    setAppointmentDate(newDate);
  };
  
  return (
    <div className="booking-section bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 rtl" dir="rtl">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">הזמנת תור בחנות ספרים ביתא</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            אנו מזמינים אתכם להזמין תור לייעוץ אישי, חיפוש ספרים מיוחדים, או השתתפות באירועי קריאה. 
            מלאו את הטופס ונחזור אליכם בהקדם לאישור התור.
          </p>
        </motion.div>
        
        <div className="bg-white shadow-xl rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-5">
            {/* Services Info Section */}
            <div className="md:col-span-2 bg-primary p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">השירותים שלנו</h3>
              
              <div className="space-y-6">
                <div className="service-item">
                  <h4 className="text-xl font-semibold mb-2">ייעוץ ספרותי אישי</h4>
                  <p className="text-white/80">קבלו המלצות מותאמות אישית מהצוות המקצועי שלנו בהתאם לטעם הקריאה שלכם.</p>
                </div>
                
                <div className="service-item">
                  <h4 className="text-xl font-semibold mb-2">איתור ספרים נדירים</h4>
                  <p className="text-white/80">אנו מתמחים באיתור ספרים נדירים ומהדורות מיוחדות לפי בקשה.</p>
                </div>
                
                <div className="service-item">
                  <h4 className="text-xl font-semibold mb-2">מפגשי קריאה וסדנאות</h4>
                  <p className="text-white/80">הצטרפו למפגשי קריאה, סדנאות כתיבה ואירועי תרבות מיוחדים.</p>
                </div>
                
                <div className="service-item">
                  <h4 className="text-xl font-semibold mb-2">שעות פעילות</h4>
                  <p className="text-white/80">
                    ימים א'-ה': 9:00-20:00<br />
                    יום ו': 9:00-14:00<br />
                    שבת: סגור
                  </p>
                </div>
              </div>
            </div>
            
            {/* Booking Form */}
            <div className="md:col-span-3 p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">קביעת תור</h3>
              
              {submitSuccess ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6"
                >
                  <p className="font-medium">הטופס נשלח בהצלחה! ניצור איתך קשר בהקדם.</p>
                </motion.div>
              ) : null}
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="form-group">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">שם מלא *</label>
                  <motion.div whileTap={{ scale: 0.99 }}>
                    <input
                      id="name"
                      type="text"
                      className={`w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary transition-shadow ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="הכנס את שמך המלא"
                      {...register('name', { required: 'שדה חובה' })}
                    />
                  </motion.div>
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">טלפון *</label>
                  <motion.div whileTap={{ scale: 0.99 }}>
                    <input
                      id="phone"
                      type="tel"
                      className={`w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary transition-shadow ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="הכנס את מספר הטלפון שלך"
                      {...register('phone', { 
                        required: 'שדה חובה',
                        pattern: {
                          value: /^[0-9]{9,10}$/,
                          message: 'מספר טלפון לא תקין'
                        }
                      })}
                    />
                  </motion.div>
                  {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">אימייל *</label>
                  <motion.div whileTap={{ scale: 0.99 }}>
                    <input
                      id="email"
                      type="email"
                      className={`w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary transition-shadow ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="הכנס את כתובת האימייל שלך"
                      {...register('email', { 
                        required: 'שדה חובה',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'כתובת אימייל לא תקינה'
                        }
                      })}
                    />
                  </motion.div>
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="appointmentDate" className="block text-sm font-medium text-gray-700 mb-1">תאריך ושעה מבוקשים *</label>
                  <CacheProvider value={cacheRtl}>
                    <ThemeProvider theme={theme}>
                      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={he}>
                        <DateTimePicker
                          value={appointmentDate}
                          onChange={handleDateChange}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              fullWidth
                              error={!appointmentDate}
                              helperText={!appointmentDate ? 'שדה חובה' : ''}
                              className="rtl-date-picker"
                            />
                          )}
                          minDate={new Date()}
                          minutesStep={15}
                        />
                      </LocalizationProvider>
                    </ThemeProvider>
                  </CacheProvider>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">הודעה</label>
                  <motion.div whileTap={{ scale: 0.99 }}>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary transition-shadow"
                      placeholder="ספר לנו במה נוכל לעזור לך"
                      {...register('message')}
                    ></textarea>
                  </motion.div>
                </div>
                
                <div className="form-group">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting || !appointmentDate}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 px-4 rounded-md text-white font-medium transition-all ${
                      isSubmitting || !appointmentDate 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-primary hover:bg-primary/90'
                    }`}
                  >
                    {isSubmitting ? 'שולח...' : 'קבע תור עכשיו'}
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSection;