'use client';

import React, { useState, useEffect } from 'react';
import { FaFilter, FaSearch, FaShekelSign } from 'react-icons/fa';
import Image from 'next/image';

interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
}

const BOOK_DATA: Book[] = [
  {
    id: '1',
    title: 'האיש שלא רצה לאהוב',
    author: 'יובל אברמוביץ',
    description: 'סיפור מרגש על אהבה ואובדן בתל אביב של שנות ה-90',
    price: 89.90,
    category: 'fiction',
    imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    title: 'מסע אל העצמי',
    author: 'נועה כהן',
    description: 'ספר עזרה עצמית המציע כלים פרקטיים להתמודדות עם אתגרי החיים',
    price: 78.50,
    category: 'non-fiction',
    imageUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    title: 'הרפתקאות דני הקטן',
    author: 'רונית לוי',
    description: 'סיפור הרפתקאות לילדים על דני שמגלה עולם קסום',
    price: 54.90,
    category: 'children',
    imageUrl: 'https://images.unsplash.com/photo-1629992101753-56d196c8aabb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4',
    title: 'היסטוריה של המזרח התיכון',
    author: 'פרופ\' אבי שלום',
    description: 'סקירה מקיפה של ההיסטוריה המורכבת של המזרח התיכון',
    price: 124.90,
    category: 'non-fiction',
    imageUrl: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '5',
    title: 'שירת הים',
    author: 'מיכל ברק',
    description: 'אסופת שירים מרגשת על הים, החיים והאהבה',
    price: 68.00,
    category: 'poetry',
    imageUrl: 'https://images.unsplash.com/photo-1476275466078-4007374efbbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '6',
    title: 'מסתרי היקום',
    author: 'ד״ר דן כוכבי',
    description: 'ספר מדע פופולרי המסביר את תופעות היקום בשפה נגישה',
    price: 98.50,
    category: 'science',
    imageUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '7',
    title: 'בישול ים תיכוני',
    author: 'שף יוסי לוי',
    description: 'ספר מתכונים עם מיטב המאכלים מהמטבח הים תיכוני',
    price: 145.00,
    category: 'cooking',
    imageUrl: 'https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '8',
    title: 'הנסיכה הקסומה',
    author: 'תמר אלון',
    description: 'סיפור קסום לילדים על נסיכה אמיצה שיוצאת להציל את ממלכתה',
    price: 59.90,
    category: 'children',
    imageUrl: 'https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

const CATEGORIES = [
  { id: 'all', name: 'הכל' },
  { id: 'fiction', name: 'ספרות יפה' },
  { id: 'non-fiction', name: 'עיון' },
  { id: 'children', name: 'ילדים' },
  { id: 'poetry', name: 'שירה' },
  { id: 'science', name: 'מדע' },
  { id: 'cooking', name: 'בישול' }
];

const ProductsSection: React.FC = () => {
  const [books, setBooks] = useState<Book[]>(BOOK_DATA);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(BOOK_DATA);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  useEffect(() => {
    let result = [...books];
    
    // Apply category filter
    if (activeCategory !== 'all') {
      result = result.filter(book => book.category === activeCategory);
    }
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        book => 
          book.title.toLowerCase().includes(query) || 
          book.author.toLowerCase().includes(query) ||
          book.description.toLowerCase().includes(query)
      );
    }
    
    setFilteredBooks(result);
  }, [books, activeCategory, searchQuery]);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    if (window.innerWidth < 768) {
      setIsFilterOpen(false);
    }
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <section className="products-section bg-gray-50 py-12 px-4 md:px-8 lg:px-16 rtl">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-right mb-8 text-primary">
          הספרים שלנו
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <button 
            className="md:hidden flex items-center justify-center gap-2 bg-primary text-white py-2 px-4 rounded-md mb-4"
            onClick={toggleFilter}
          >
            <FaFilter />
            <span>סינון ספרים</span>
          </button>
          
          {/* Filters Sidebar */}
          <aside className={`filter-sidebar md:w-1/4 lg:w-1/5 transition-all duration-300 ${isFilterOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 md:max-h-[500px] opacity-0 md:opacity-100 overflow-hidden'}`}>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-right text-primary">קטגוריות</h3>
              <ul className="space-y-2">
                {CATEGORIES.map(category => (
                  <li key={category.id}>
                    <button
                      className={`w-full text-right py-2 px-3 rounded-md transition-colors duration-200 ${
                        activeCategory === category.id 
                          ? 'bg-primary text-white' 
                          : 'hover:bg-gray-100'
                      }`}
                      onClick={() => handleCategoryChange(category.id)}
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6">
                <h3 className="text-xl font-bold mb-4 text-right text-primary">חיפוש</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="חפש ספרים..."
                    className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-right"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
            </div>
          </aside>
          
          {/* Products Grid */}
          <div className="md:w-3/4 lg:w-4/5">
            {filteredBooks.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">לא נמצאו ספרים התואמים את החיפוש שלך</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredBooks.map(book => (
                  <div 
                    key={book.id} 
                    className="book-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={book.imageUrl}
                        alt={book.title}
                        fill
                        className="object-cover transform hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-bold mb-2 text-right">{book.title}</h3>
                      <p className="text-gray-600 text-sm mb-2 text-right">{book.author}</p>
                      <p className="text-gray-700 text-right mb-4 text-sm line-clamp-2">{book.description}</p>
                      <div className="flex justify-between items-center">
                        <button className="bg-secondary hover:bg-secondary-dark text-gray-800 py-1 px-3 rounded-md transition-colors duration-200">
                          הוסף לסל
                        </button>
                        <div className="flex items-center text-primary font-bold">
                          <FaShekelSign className="ml-1" />
                          <span>{book.price.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;