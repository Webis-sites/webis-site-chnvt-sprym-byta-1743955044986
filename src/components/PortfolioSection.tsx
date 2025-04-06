'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  date: string;
}

const PortfolioSection: React.FC = () => {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<PortfolioItem[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('הכל');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    // Simulated data - in a real app, this would come from an API
    const portfolioData: PortfolioItem[] = [
      {
        id: '1',
        title: 'מפגש עם הסופרת רחל שור',
        description: 'ערב מיוחד עם הסופרת רחל שור לרגל השקת ספרה החדש "מעבר לאופק". האירוע כלל קריאה מהספר, שיחה עם הסופרת וחתימות.',
        category: 'מפגשי סופרים',
        imageUrl: 'https://images.unsplash.com/photo-1529473814998-077b4fec6770',
        date: '15.03.2023'
      },
      {
        id: '2',
        title: 'תערוכת ספרי ילדים',
        description: 'תערוכה מיוחדת של ספרי ילדים מאוירים מהארץ ומהעולם. התערוכה הציגה יצירות מקוריות והדפסים של מאיירים מובילים.',
        category: 'תערוכות',
        imageUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794',
        date: '22.05.2023'
      },
      {
        id: '3',
        title: 'סדנת כתיבה יוצרת',
        description: 'סדנה בת שלושה מפגשים בהנחיית הסופר יוסי ברנע. המשתתפים למדו טכניקות כתיבה, פיתוח דמויות ובניית עלילה.',
        category: 'סדנאות',
        imageUrl: 'https://images.unsplash.com/photo-1519791883288-dc8bd696e667',
        date: '10.06.2023'
      },
      {
        id: '4',
        title: 'אוסף ספרי שירה קלאסית',
        description: 'אוסף מיוחד של ספרי שירה קלאסית במהדורות מהודרות. האוסף כולל יצירות מאת משוררים ישראלים ובינלאומיים.',
        category: 'אוספים מיוחדים',
        imageUrl: 'https://images.unsplash.com/photo-1535905557558-afc4877a26fc',
        date: '05.07.2023'
      },
      {
        id: '5',
        title: 'ערב ספרות ומוזיקה',
        description: 'ערב משולב של קריאת שירה וביצועים מוזיקליים. האירוע כלל קריאה מיצירות מקוריות של משתתפים מהקהילה המקומית.',
        category: 'אירועים מיוחדים',
        imageUrl: 'https://images.unsplash.com/photo-1517971071642-34a2d3ecc9cd',
        date: '18.08.2023'
      },
      {
        id: '6',
        title: 'מפגש עם הסופר דוד גרוסמן',
        description: 'שיחה מרתקת עם הסופר דוד גרוסמן על ספרו האחרון, תהליכי הכתיבה והשפעות תרבותיות על יצירתו.',
        category: 'מפגשי סופרים',
        imageUrl: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10',
        date: '29.09.2023'
      },
      {
        id: '7',
        title: 'תצוגת ספרים עתיקים',
        description: 'תצוגה מיוחדת של ספרים עתיקים ונדירים מהמאות ה-18 וה-19. התצוגה כללה ספרי קודש, ספרי מסע וספרות קלאסית.',
        category: 'אוספים מיוחדים',
        imageUrl: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66',
        date: '12.10.2023'
      },
      {
        id: '8',
        title: 'סדנת כריכת ספרים',
        description: 'סדנה מעשית ללימוד אמנות כריכת ספרים בשיטות מסורתיות. המשתתפים יצרו כריכת ספר מעור אותה לקחו עמם בסיום.',
        category: 'סדנאות',
        imageUrl: 'https://images.unsplash.com/photo-1533669955142-6a73332af4db',
        date: '25.11.2023'
      },
      {
        id: '9',
        title: 'מפגש קוראים: ספרות פנטזיה',
        description: 'מפגש קוראים חודשי בנושא ספרות פנטזיה. הדיון התמקד בסדרת הספרים "שיר של אש וקרח" והשוואתה לסדרת הטלוויזיה.',
        category: 'מפגשי קוראים',
        imageUrl: 'https://images.unsplash.com/photo-1551029506-0807df4e2031',
        date: '05.12.2023'
      }
    ];

    setItems(portfolioData);
    setFilteredItems(portfolioData);

    // Extract unique categories
    const allCategories = ['הכל', ...new Set(portfolioData.map(item => item.category))];
    setCategories(allCategories);
  }, []);

  useEffect(() => {
    // Filter items based on active category and search term
    let result = [...items];
    
    if (activeCategory !== 'הכל') {
      result = result.filter(item => item.category === activeCategory);
    }
    
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        item => 
          item.title.toLowerCase().includes(term) || 
          item.description.toLowerCase().includes(term)
      );
    }
    
    setFilteredItems(result);
  }, [activeCategory, searchTerm, items]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  const handleItemClick = (item: PortfolioItem) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <section className="py-16 bg-white text-right" dir="rtl">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-2 text-primary">הפורטפוליו שלנו</h2>
        <p className="text-xl text-gray-600 mb-10">אירועים, מפגשים ואוספים מיוחדים בחנות הספרים ביתא</p>
        
        {/* Search and filter */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="חיפוש..."
              className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Portfolio grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => handleItemClick(item)}
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={`${item.imageUrl}?w=600&h=400&fit=crop`}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-secondary text-gray-700 rounded-full mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 line-clamp-2">{item.description}</p>
                  <p className="mt-4 text-sm text-gray-500">{item.date}</p>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <p className="text-xl text-gray-500">לא נמצאו פריטים התואמים את החיפוש שלך</p>
            </div>
          )}
        </div>
      </div>

      {/* Modal for detailed view */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-80 w-full">
              <Image
                src={`${selectedItem.imageUrl}?w=1200&h=600&fit=crop`}
                alt={selectedItem.title}
                fill
                className="object-cover"
              />
              <button
                className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                onClick={closeModal}
              >
                <FaTimes className="text-gray-700" />
              </button>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 text-sm font-semibold bg-secondary text-gray-700 rounded-full">
                  {selectedItem.category}
                </span>
                <span className="text-sm text-gray-500">{selectedItem.date}</span>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-800">{selectedItem.title}</h2>
              <p className="text-gray-600 text-lg leading-relaxed">{selectedItem.description}</p>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;