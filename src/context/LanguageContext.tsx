import React, { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextProps {
  language: 'en' | 'tr';
  setLanguage: (lang: 'en' | 'tr') => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

interface LanguageProviderProps {
  children: React.ReactNode;
}

const translations = {
  en: {
    home: "Home",
    services: "Services",
    ourTeam: "Our Team",
    testimonials: "Testimonials",
    contact: "Contact",
    bookAppointment: "Book Appointment",
    latestBlogPosts: "Latest Blog Posts",
    blogSectionDescription: "Stay informed with the latest news and insights from our dental experts.",
    readMore: "Read More",
    blog: "Blog",
    search: "Search",
    categories: "Categories",
    recentPosts: "Recent Posts",
    newsletter: "Newsletter",
    newsletterDescription: "Subscribe to our newsletter to receive the latest news and updates.",
    emailPlaceholder: "Your email address",
    subscribe: "Subscribe",
    rateThisArticle: "Rate this article",
    contactWhatsApp: "Contact Us on WhatsApp",
    needDentalCare: "Need Dental Care?",
    bookAppointmentDescription: "Schedule your consultation today for a brighter smile tomorrow.",
    searchBlog: "Search blog posts...",
    comments: "Comments",
    noComments: "No comments yet. Be the first to comment!",
  },
  tr: {
    home: "Anasayfa",
    services: "Hizmetlerimiz",
    ourTeam: "Ekibimiz",
    testimonials: "Referanslar",
    contact: "İletişim",
    bookAppointment: "Randevu Al",
    latestBlogPosts: "Son Blog Yazıları",
    blogSectionDescription: "Diş uzmanlarımızdan en son haberler ve içgörülerle güncel kalın.",
    readMore: "Devamını Oku",
    blog: "Blog",
    search: "Ara",
    categories: "Kategoriler",
    recentPosts: "Son Yazılar",
    newsletter: "Bülten",
    newsletterDescription: "En son haberleri ve güncellemeleri almak için bültenimize abone olun.",
    emailPlaceholder: "E-posta adresiniz",
    subscribe: "Abone Ol",
    rateThisArticle: "Bu makaleyi değerlendirin",
    contactWhatsApp: "WhatsApp'tan Bize Ulaşın",
    needDentalCare: "Diş Bakımına mı İhtiyacınız Var?",
    bookAppointmentDescription: "Daha parlak bir gülümseme için bugün randevunuzu alın.",
    searchBlog: "Blog yazılarında ara...",
    comments: "Yorumlar",
    noComments: "Henüz yorum yapılmamış. İlk yorumu siz yapın!",
  }
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'tr'>((typeof window !== 'undefined' && localStorage.getItem('language')) === 'tr' ? 'tr' : 'en');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language);
    }
  }, [language]);

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  const value: LanguageContextProps = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
