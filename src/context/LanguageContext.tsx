import React, { createContext, useState, useContext, ReactNode } from 'react';

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
    blog: "Blog",
    
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
    testimonialsSection: "TESTIMONIALS",
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
    
    // Blog Section
    latestBlogPosts: "Latest Blog Posts",
    blogSectionDescription: "Stay updated with the latest dental news, tips, and information from our expert team.",
    readMore: "Read More",
    
    // Blog Page
    blogPageTitle: "Dental Care Insights",
    blogPageSubtitle: "Tips, news, and updates to keep your smile healthy.",
    search: "Search",
    searchBlog: "Search blog...",
    categories: "Categories",
    recentPosts: "Recent Posts",
    newsletter: "Subscribe to Our Newsletter",
    newsletterDescription: "Get the latest dental tips and news delivered to your inbox.",
    emailPlaceholder: "Your email address",
    subscribe: "Subscribe",
    
    // Packages Section
    dentalPackages: "Our Dental Packages",
    packagesDescription: "Choose from our range of comprehensive dental care packages designed to meet your specific needs and budget.",
    bookNow: "Book Now",
    
    // Blog Post
    comments: "Comments",
    noComments: "No comments yet. Be the first to leave a comment!",
    
    // Footer
    quickLinks: "Quick Links",
    aboutUs: "About Us",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    sitemap: "Sitemap",
    allRightsReserved: "All rights reserved.",
    
    // Instagram-related translations
    followUsOnInstagram: "Follow Us on Instagram",
    instagramDescription: "Stay connected with us on social media for the latest updates, tips, and transformed smiles. Join our online community!",
    followOnInstagram: "Follow on Instagram",
  },
  tr: {
    // Navbar
    home: "Ana Sayfa",
    services: "Hizmetler",
    ourTeam: "Ekibimiz",
    testimonials: "Yorumlar",
    contact: "İletişim",
    bookAppointment: "Randevu Al",
    blog: "Blog",
    
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
    testimonialsSection: "YORUMLAR",
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
    
    // Blog Section
    latestBlogPosts: "Son Blog Yazıları",
    blogSectionDescription: "Uzman ekibimizden en son diş haberleri, ipuçları ve bilgilerle güncel kalın.",
    readMore: "Daha Fazla Oku",
    
    // Blog Page
    blogPageTitle: "Diş Bakımı Öngörüleri",
    blogPageSubtitle: "Gülüşünüzü sağlıklı tutmak için ipuçları, haberler ve güncellemeler.",
    search: "Ara",
    searchBlog: "Blog'da ara...",
    categories: "Kategoriler",
    recentPosts: "Son Yazılar",
    newsletter: "Bültenimize Abone Olun",
    newsletterDescription: "En son diş bakım ipuçları ve haberlerini gelen kutunuza alın.",
    emailPlaceholder: "E-posta adresiniz",
    subscribe: "Abone Ol",
    
    // Packages Section
    dentalPackages: "Diş Bakım Paketlerimiz",
    packagesDescription: "Özel ihtiyaçlarınıza ve bütçenize uygun tasarlanmış kapsamlı diş bakım paketlerimizden seçim yapın.",
    bookNow: "Hemen Rezervasyon Yap",
    
    // Blog Post
    comments: "Yorumlar",
    noComments: "Henüz yorum yok. İlk yorumu siz yapın!",
    
    // Footer
    quickLinks: "Hızlı Bağlantılar",
    aboutUs: "Hakkımızda",
    privacyPolicy: "Gizlilik Politikası",
    termsOfService: "Kullanım Koşulları",
    sitemap: "Site Haritası",
    allRightsReserved: "Tüm hakları saklıdır.",
    
    // Instagram-related translations
    followUsOnInstagram: "Instagram'da Bizi Takip Edin",
    instagramDescription: "En son güncellemeler, ipuçları ve dönüştürülmüş gülüşler için sosyal medyada bizimle bağlantıda kalın. Çevrimiçi topluluğumuza katılın!",
    followOnInstagram: "Instagram'da Takip Et",
  },
  es: {
    // Navbar
    home: "Inicio",
    services: "Servicios",
    ourTeam: "Nuestro Equipo",
    testimonials: "Testimonios",
    contact: "Contacto",
    bookAppointment: "Reservar Cita",
    blog: "Blog",
    
    // Hero Section
    heroTitle: "Tu Sonrisa Perfecta",
    heroDescription: "Cuidado dental experto con la última tecnología para la mejor sonrisa. Nuestro equipo ofrece tratamientos personalizados en un ambiente confortable.",
    learnMore: "Más Información",
    yearsOfExperience: "Años de Experiencia",
    happyPatients: "Hasta los Más Felices",
    dentalSpecialists: "Especialistas en Diagnóstico y Cirugía Dental",
    currentlyAccepting: "Aceptando nuevos pacientes",
    
    // Services Section
    ourServices: "NUESTROS SERVICIOS",
    servicesTitle: "Servicios Dentales Completos",
    servicesDescription: "Ofrecemos una amplia gama de servicios dentales para mantener tus dientes saludables y tu sonrisa hermosa, utilizando la última tecnología y técnicas.",
    teethWhitening: "Blanqueamiento de Dientes",
    teethWhiteningDesc: "Tratamientos de blanqueamiento de dientes profesionales para una sonrisa más brillante y confiada utilizando la última tecnología.",
    dentalImplants: "Implantes Dentales",
    dentalImplantsDesc: "Restaurar dientes perdidos con implantes dentales naturales y duraderos que funcionan como tus propios dientes.",
    cosmeticDentistry: "Dentista Cosmético",
    cosmeticDentistryDesc: "Transforma tu sonrisa con nuestros procedimientos cosméticos diseñados para mejorar tu belleza natural.",
    orthodontics: "Ortodontia",
    orthodonticsDesc: "Alinear tus dientes y corregir problemas de boca con nuestras opciones de ortodoncia modernas.",
    oralSurgery: "Cirugía Oral",
    oralSurgeryDesc: "Servicios de cirugía oral expertos incluyendo extracciones y tratamientos de la mandíbula en un ambiente confortable.",
    preventiveCare: "Cuidado Preventivo",
    preventiveCareDesc: "Revisión y limpieza regulares para mantener la salud oral óptima y prevenir problemas dentales futuros.",
    learnMoreLink: "Más Información",
    
    // Team Section
    ourSpecialists: "NUESTROS ESPECIALISTAS",
    teamTitle: "Conoce Nuestro Equipo Experto",
    teamDescription: "Nuestro equipo de profesionales dentales altamente calificados está dedicado a brindarte el mejor cuidado y hacer tu visita confortable.",
    
    // Testimonials Section
    testimonialsSection: "TESTIMONIOS",
    testimonialsTitle: "Lo Que Nosotros Nos Decimos",
    testimonialsDescription: "Lee las experiencias de nuestros pacientes felices sobre nuestros servicios dentales y equipo.",
    
    // Contact Section
    contactUs: "CONTÁCTANOS",
    getInTouch: "Contáctanos",
    contactDescription: "¿Tienes preguntas o deseas programar tu visita? Contáctanos hoy mismo o solicita una cita en línea.",
    contactInfo: "Información de Contacto",
    location: "Ubicación",
    phone: "Teléfono",
    email: "Correo Electrónico",
    workingHours: "Horarios de Trabajo",
    monday: "Lunes - Viernes:",
    saturday: "Sábado:",
    sunday: "Domingo:",
    closed: "Cerrado",
    
    // Appointment Form
    requestAppointment: "Solicita una Cita",
    fullName: "Nombre Completo",
    phoneNumber: "Número de Teléfono",
    preferredService: "Servicio Preferido",
    selectService: "Selecciona un servicio",
    generalCheckup: "Revisión General",
    message: "Mensaje (Opcional)",
    messagePlaceholder: "Dime más sobre tus necesidades dentales...",
    preferredDate: "Fecha Preferida",
    submitAppointment: "Solicita Cita",
    submitting: "Enviando...",
    thankYou: "Gracias!",
    appointmentSuccess: "Tu solicitud de cita ha sido enviada con éxito. Nos pondremos en contacto contigo pronto para confirmar tu cita.",
    
    // Blog Section
    latestBlogPosts: "Últimos Artículos del Blog",
    blogSectionDescription: "Está al día con las últimas noticias, consejos y información sobre el cuidado dental de nuestra experta equipo.",
    readMore: "Leer Más",
    
    // Blog Page
    blogPageTitle: "Insights en el Cuidado Dental",
    blogPageSubtitle: "Consejos, noticias y actualizaciones para mantener tu sonrisa saludable.",
    search: "Buscar",
    searchBlog: "Buscar en el blog...",
    categories: "Categorías",
    recentPosts: "Artículos Recientes",
    newsletter: "Suscríbete a nuestro Boletín",
    newsletterDescription: "Recibe las últimas noticias y consejos sobre el cuidado dental directamente en tu bandeja de entrada.",
    emailPlaceholder: "Tu dirección de correo electrónico",
    subscribe: "Suscribirse",
    
    // Packages Section
    dentalPackages: "Nuestros Paquetes de Cuidado Dental",
    packagesDescription: "Elige entre nuestros paquetes de cuidado dental completos diseñados para satisfacer tus necesidades y presupuesto.",
    bookNow: "Reservar Ahora",
    
    // Blog Post
    comments: "Comentarios",
    noComments: "Aún no hay comentarios. ¡Primero deja tu comentario!",
    
    // Footer
    quickLinks: "Enlaces Rápidos",
    aboutUs: "Sobre Nosotros",
    privacyPolicy: "Política de Privacidad",
    termsOfService: "Términos de Servicio",
    sitemap: "Mapa del Sitio",
    allRightsReserved: "Todos los derechos reservados.",
    
    // Instagram-related translations
    followUsOnInstagram: "Síguenos en Instagram",
    instagramDescription: "Mantente conectado con nosotros en las redes sociales para conocer las últimas actualizaciones, consejos y sonrisas transformadas. ¡Únete a nuestra comunidad en línea!",
    followOnInstagram: "Seguir en Instagram",
  },
  de: {
    // Navbar
    home: "Startseite",
    services: "Dienstleistungen",
    ourTeam: "Unser Team",
    testimonials: "Bewertungen",
    contact: "Kontakt",
    bookAppointment: "Termin vereinbaren",
    blog: "Blog",
    
    // Hero Section
    heroTitle: "Deine Schönste Zahnspur ist unser Priorität",
    heroDescription: "Experten Diashilfe mit der neuesten Technologie für die gesundeste Zahnspur. Unser Team bietet individuelle Behandlungen in einem angenehmen Umfeld.",
    learnMore: "Mehr erfahren",
    yearsOfExperience: "Jahre Erfahrung",
    happyPatients: "Glückliche Patienten",
    dentalSpecialists: "Zahnärzte",
    currentlyAccepting: "Jetzt neue Patienten akzeptieren",
    
    // Services Section
    ourServices: "UNSERE DIENSTLEISTUNGEN",
    servicesTitle: "Komplexe Zahnhilfe",
    servicesDescription: "Wir bieten eine breite Palette von Zahnhilfen, um deine Zähne gesund zu halten und deine Zahnspur zu schmücken, mit den neuesten Technologien und Techniken.",
    teethWhitening: "Zahnweißung",
    teethWhiteningDesc: "Professionelle Zahnweißungstherapien für eine bessere, sicherere und glänzende Zahnspur mit der neuesten Technologie.",
    dentalImplants: "Zahnimplantate",
    dentalImplantsDesc: "Restauriere verlorene Zähne mit natürlichen, duramenfreien Zahnimplantaten, die wie deine eigenen Zähne funktionieren.",
    cosmeticDentistry: "Kosmetische Zahnheilkunde",
    cosmeticDentistryDesc: "Verändern Sie Ihre Zahnspur mit unseren Kosmetikprozeduren, die Ihre natürliche Schönheit verbessern.",
    orthodontics: "Ortodontie",
    orthodonticsDesc: "Richten Sie Ihre Zähne und korrigieren Sie Zahnprobleme mit unseren modernen Orthodontieoptionen.",
    oralSurgery: "Zahnärztliche Chirurgie",
    oralSurgeryDesc: "Expertische Zahnärztliche Chirurgie mit Extraktionen und Zahnärztlichen Behandlungen in einem angenehmen Umfeld.",
    preventiveCare: "Vorsorge",
    preventiveCareDesc: "Regelmäßige Prüfungen und Reinigungen, um die optimale Zahnärztliche Gesundheit zu gewährleisten und mögliche Zahnprobleme vorzubeugen.",
    learnMoreLink: "Mehr erfahren",
    
    // Team Section
    ourSpecialists: "UNSERE EXPERTEN",
    teamTitle: "Mit Unsere Experten Bekannt zu sein",
    teamDescription: "Unser Team von hochqualifizierten Zahnärzten ist darauf aus, Ihnen das beste Zahnärztliche Zuhilfen zu bieten und Ihre Besuche angenehm zu gestalten.",
    
    // Testimonials Section
    testimonialsSection: "BEWERTUNGEN",
    testimonialsTitle: "Was unsere Patienten sagen",
    testimonialsDescription: "Lies die persönlichen Erfahrungen unserer glücklichen Patienten zu unseren Zahnärztlichen Dienstleistungen und Team.",
    
    // Contact Section
    contactUs: "KONTAKTIEREN SIE UNS",
    getInTouch: "Kontaktieren Sie uns",
    contactDescription: "Haben Sie Fragen oder möchten Sie Ihre Terminplanung starten? Kontaktieren Sie uns heute oder stellen Sie eine Terminanfrage online.",
    contactInfo: "Kontaktinformationen",
    location: "Standort",
    phone: "Telefon",
    email: "E-Mail",
    workingHours: "Arbeitszeiten",
    monday: "Montag - Freitag:",
    saturday: "Samstag:",
    sunday: "Sonntag:",
    closed: "Geschlossen",
    
    // Appointment Form
    requestAppointment: "Terminanfrage stellen",
    fullName: "Vollständiger Name",
    phoneNumber: "Telefonnummer",
    preferredService: "Bevorzugter Dienst",
    selectService: "Wähle einen Dienst",
    generalCheckup: "Allgemeine Prüfung",
    message: "Nachricht (optional)",
    messagePlaceholder: "Mehr über Ihre Zahnbedürfnisse...",
    preferredDate: "Bevorzugte Terminzeit",
    submitAppointment: "Terminanfrage stellen",
    submitting: "Senden...",
    thankYou: "Danke!",
    appointmentSuccess: "Ihre Terminanfrage wurde erfolgreich gesendet. Wir werden Sie bald kontaktieren, um Ihre Terminbestätigung zu bestätigen.",
    
    // Blog Section
    latestBlogPosts: "Neueste Blog-Artikel",
    blogSectionDescription: "Streben Sie nach den neuesten Zahnärztlichen Neuigkeiten, Tipps und Informationen von unserem erfahrenen Team.",
    readMore: "Mehr lesen",
    
    // Blog Page
    blogPageTitle: "Zahnärztliche Entdeckungen",
    blogPageSubtitle: "Tipps, Neuigkeiten und Updates, um Ihre Zahnspur zu schützen.",
    search: "Suchen",
    searchBlog: "Blog suchen...",
    categories: "Kategorien",
    recentPosts: "Neueste Artikel",
    newsletter: "Abonnieren Sie unseren Newsletter",
    newsletterDescription: "Erhalten Sie die neuesten Zahnärztlichen Tipps und Neuigkeiten direkt in Ihrem Posteingang.",
    emailPlaceholder: "Ihre E-Mail-Adresse",
    subscribe: "Abonnieren",
    
    // Packages Section
    dentalPackages: "Unsere Zahnärztliche Pakete",
    packagesDescription: "Wählen Sie aus unseren breiten Auswahlmöglichkeiten von komplexen Zahnärztlichen Paketen, die Ihren spezifischen Bedürfnissen und Budget entsprechend angepasst sind.",
    bookNow: "Jetzt buchen",
    
    // Blog Post
    comments: "Kommentare",
    noComments: "Noch keine Kommentare. Seien Sie der erste, der einen Kommentar hinterlässt!",
    
    // Footer
    quickLinks: "Schnelle Links",
    aboutUs: "Über uns",
    privacyPolicy: "Datenschutzrichtlinien",
    termsOfService: "Nutzungsbedingungen",
    sitemap: "Seitenstruktur",
    allRightsReserved: "Alle Rechte vorbehalten.",
    
    // Instagram-related translations
    followUsOnInstagram: "Folgen Sie uns auf Instagram",
    instagramDescription: "Streben Sie nach den neuesten Zahnärztlichen Neuigkeiten, Tipps und transformierten Zahnspuren auf sozialen Medien. Beitreten Sie zu unserer Online-Community!",
    followOnInstagram: "Folgen Sie uns auf Instagram",
  },
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
