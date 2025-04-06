import React from 'react';
import { FaBookOpen, FaGift, FaUserFriends, FaSearch, FaCalendarAlt } from 'react-icons/fa';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, imageUrl }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-lg">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6 rtl">
        <div className="flex items-center mb-4">
          <div className="text-primary text-2xl mr-3">{icon}</div>
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "המלצות ספרים",
      description: "צוות המומחים שלנו ישמח להמליץ על ספרים המותאמים להעדפות הקריאה האישיות שלך.",
      icon: <FaBookOpen />,
      imageUrl: "https://images.unsplash.com/photo-1521123845560-14093637aa7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "הזמנות מיוחדות",
      description: "לא מצאת את הספר שחיפשת? אנו יכולים להזמין כמעט כל ספר עבורך.",
      icon: <FaSearch />,
      imageUrl: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "עטיפת מתנות",
      description: "שירות עטיפת מתנות מהודר לכל ספר שתרכשו בחנות שלנו.",
      icon: <FaGift />,
      imageUrl: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "מועדוני קריאה",
      description: "הצטרפו למועדוני הקריאה שלנו ופגשו קוראים אחרים בדיונים מרתקים.",
      icon: <FaUserFriends />,
      imageUrl: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "אירועי סופרים",
      description: "אירועים והרצאות עם סופרים מובילים מהארץ ומהעולם.",
      icon: <FaCalendarAlt />,
      imageUrl: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dir-rtl" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">השירותים שלנו</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            בחנות ספרים ביתא אנו מציעים מגוון שירותים מקצועיים כדי להעשיר את חווית הקריאה שלך
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;