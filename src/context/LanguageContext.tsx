
import { createContext, useContext, useState, ReactNode } from 'react';

// Define translations for both languages
export const translations = {
  en: {
    // Navbar
    home: "Home",
    services: "Services",
    ourTeam: "Our Team",
    testimonials: "Testimonials",
    contact: "Contact",
    bookAppointment: "Book Appointment",
    
    // Hero Section
    heroTitle: "Your Beautiful Smile Is Our Priority",
    heroDescription: "Expert dental care with the latest technology for the healthiest smile. Our team provides personalized treatments in a comfortable environment.",
    learnMore: "Learn More",
    yearsOfExperience: "Years of Experience",
    happyPatients: "Happy Patients",
    dentalSpecialists: "Dental Specialists",
    currentlyAccepting: "Currently accepting new patients",
    
    // Services Section
    ourServices: "OUR SERVICES",
    servicesTitle: "Comprehensive Dental Services",
    servicesDescription: "We offer a wide range of dental services to keep your teeth healthy and your smile beautiful, using the latest technologies and techniques.",
    teethWhitening: "Teeth Whitening",
    teethWhiteningDesc: "Professional teeth whitening treatments for a brighter, more confident smile using the latest technology.",
    dentalImplants: "Dental Implants",
    dentalImplantsDesc: "Restore missing teeth with natural-looking and durable dental implants that function like your own teeth.",
    cosmeticDentistry: "Cosmetic Dentistry",
    cosmeticDentistryDesc: "Transform your smile with our range of cosmetic procedures designed to enhance your natural beauty.",
    orthodontics: "Orthodontics",
    orthodonticsDesc: "Straighten your teeth and correct bite issues with our modern orthodontic treatment options.",
    oralSurgery: "Oral Surgery",
    oralSurgeryDesc: "Expert oral surgery services including extractions and jaw treatments in a comfortable environment.",
    preventiveCare: "Preventive Care",
    preventiveCareDesc: "Regular checkups and cleanings to maintain optimal oral health and prevent future dental problems.",
    learnMoreLink: "Learn more",
    
    // Team Section
    ourSpecialists: "OUR SPECIALISTS",
    teamTitle: "Meet Our Experienced Team",
    teamDescription: "Our team of highly skilled dental professionals is dedicated to providing you with the best care and making your visit comfortable.",
    
    // Testimonials Section
    testimonials: "TESTIMONIALS",
    testimonialsTitle: "What Our Patients Say",
    testimonialsDescription: "Read firsthand accounts from our happy patients about their experiences with our dental services and team.",
    
    // Contact Section
    contactUs: "CONTACT US",
    getInTouch: "Get in Touch",
    contactDescription: "Have questions or ready to schedule your visit? Contact our friendly team today or request an appointment online.",
    contactInfo: "Contact Information",
    location: "Location",
    phone: "Phone",
    email: "Email",
    workingHours: "Working Hours",
    monday: "Monday - Friday:",
    saturday: "Saturday:",
    sunday: "Sunday:",
    closed: "Closed",
    
    // Appointment Form
    requestAppointment: "Request an Appointment",
    fullName: "Full Name",
    phoneNumber: "Phone Number",
    preferredService: "Preferred Service",
    selectService: "Select a service",
    generalCheckup: "General Checkup",
    message: "Message (Optional)",
    messagePlaceholder: "Tell us more about your dental needs...",
    preferredDate: "Preferred Date",
    submitAppointment: "Request Appointment",
    submitting: "Submitting...",
    thankYou: "Thank you!",
    appointmentSuccess: "Your appointment request has been submitted successfully. We'll contact you shortly to confirm your appointment.",
    
    // Footer
    quickLinks: "Quick Links",
    aboutUs: "About Us",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    sitemap: "Sitemap",
    allRightsReserved: "All rights reserved."
  },
  tr: {
    // Navbar
    home: "Ana Sayfa",
    services: "Hizmetler",
    ourTeam: "Ekibimiz",
    testimonials: "Yorumlar",
    contact: "İletişim",
    bookAppointment: "Randevu Al",
    
    // Hero Section
    heroTitle: "Güzel Gülüşünüz Bizim Önceliğimizdir",
    heroDescription: "En sağlıklı gülüş için en son teknoloji ile uzman diş bakımı. Ekibimiz, konforlu bir ortamda kişiselleştirilmiş tedaviler sunmaktadır.",
    learnMore: "Daha Fazla",
    yearsOfExperience: "Yıllık Deneyim",
    happyPatients: "Mutlu Hasta",
    dentalSpecialists: "Diş Uzmanı",
    currentlyAccepting: "Şu anda yeni hastalar kabul ediyoruz",
    
    // Services Section
    ourServices: "HİZMETLERİMİZ",
    servicesTitle: "Kapsamlı Diş Hizmetleri",
    servicesDescription: "En son teknolojileri ve teknikleri kullanarak, dişlerinizi sağlıklı tutmak ve gülüşünüzü güzelleştirmek için geniş bir hizmet yelpazesi sunuyoruz.",
    teethWhitening: "Diş Beyazlatma",
    teethWhiteningDesc: "En son teknolojiyi kullanarak daha parlak, daha özgüvenli bir gülümseme için profesyonel diş beyazlatma tedavileri.",
    dentalImplants: "Diş İmplantları",
    dentalImplantsDesc: "Eksik dişlerinizi, kendi dişleriniz gibi işlev gören doğal görünümlü ve dayanıklı diş implantları ile restore edin.",
    cosmeticDentistry: "Kozmetik Diş Hekimliği",
    cosmeticDentistryDesc: "Doğal güzelliğinizi artırmak için tasarlanmış kozmetik prosedürler yelpazemizle gülümsemenizi dönüştürün.",
    orthodontics: "Ortodonti",
    orthodonticsDesc: "Modern ortodontik tedavi seçeneklerimizle dişlerinizi düzeltip ısırma sorunlarını giderin.",
    oralSurgery: "Ağız Cerrahisi",
    oralSurgeryDesc: "Konforlu bir ortamda çekim ve çene tedavileri dahil uzman ağız cerrahisi hizmetleri.",
    preventiveCare: "Koruyucu Bakım",
    preventiveCareDesc: "Optimal ağız sağlığını korumak ve gelecekteki diş sorunlarını önlemek için düzenli kontroller ve temizlik.",
    learnMoreLink: "Detaylı bilgi",
    
    // Team Section
    ourSpecialists: "UZMANLARIMIZ",
    teamTitle: "Deneyimli Ekibimizle Tanışın",
    teamDescription: "Yüksek vasıflı diş hekimlerinden oluşan ekibimiz, size en iyi bakımı sağlamak ve ziyaretinizi konforlu hale getirmek için özveriyle çalışmaktadır.",
    
    // Testimonials Section
    testimonials: "YORUMLAR",
    testimonialsTitle: "Hastalarımız Ne Diyor",
    testimonialsDescription: "Diş hekimliği hizmetlerimiz ve ekibimizle ilgili deneyimleri hakkında hastalarımızın doğrudan hesaplarını okuyun.",
    
    // Contact Section
    contactUs: "BİZE ULAŞIN",
    getInTouch: "İletişime Geçin",
    contactDescription: "Sorularınız mı var veya ziyaretinizi planlamaya hazır mısınız? Bugün dostane ekibimizle iletişime geçin veya çevrimiçi randevu talep edin.",
    contactInfo: "İletişim Bilgileri",
    location: "Konum",
    phone: "Telefon",
    email: "E-posta",
    workingHours: "Çalışma Saatleri",
    monday: "Pazartesi - Cuma:",
    saturday: "Cumartesi:",
    sunday: "Pazar:",
    closed: "Kapalı",
    
    // Appointment Form
    requestAppointment: "Randevu Talep Et",
    fullName: "Ad Soyad",
    phoneNumber: "Telefon Numarası",
    preferredService: "Tercih Edilen Hizmet",
    selectService: "Bir hizmet seçin",
    generalCheckup: "Genel Kontrol",
    message: "Mesaj (İsteğe bağlı)",
    messagePlaceholder: "Diş ihtiyaçlarınız hakkında bize daha fazla bilgi verin...",
    preferredDate: "Tercih Edilen Tarih",
    submitAppointment: "Randevu Talep Et",
    submitting: "Gönderiliyor...",
    thankYou: "Teşekkürler!",
    appointmentSuccess: "Randevu talebiniz başarıyla gönderildi. Randevunuzu onaylamak için kısa süre içinde sizinle iletişime geçeceğiz.",
    
    // Footer
    quickLinks: "Hızlı Bağlantılar",
    aboutUs: "Hakkımızda",
    privacyPolicy: "Gizlilik Politikası",
    termsOfService: "Kullanım Koşulları",
    sitemap: "Site Haritası",
    allRightsReserved: "Tüm hakları saklıdır."
  }
};

type LanguageContextType = {
  language: 'en' | 'tr';
  setLanguage: (lang: 'en' | 'tr') => void;
  t: (key: keyof typeof translations.en) => string;
};

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<'en' | 'tr'>('en');

  // Translation function
  const t = (key: keyof typeof translations.en): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook to use language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
