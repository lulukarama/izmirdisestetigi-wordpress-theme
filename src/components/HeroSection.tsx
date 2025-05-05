
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const heroSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2668&auto=format&fit=crop",
    alt: "Dentist with patient"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2500&auto=format&fit=crop",
    alt: "Dental treatment"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1606811841346-3f5503b8e0a0?q=80&w=2500&auto=format&fit=crop",
    alt: "Modern dental clinic"
  }
];

const HeroSection = () => {
  const { t } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);
  
  useEffect(() => {
    // Auto-advance slides every 5 seconds
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Hero Content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text">{t('heroTitle')}</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              {t('heroDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-dental-purple hover:bg-dental-purple/90 flex items-center gap-2">
                <Calendar size={20} />
                <span>{t('bookAppointment')}</span>
              </Button>
              <Button size="lg" variant="outline" className="flex items-center gap-2">
                <span>{t('learnMore')}</span>
                <ArrowRight size={20} />
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              <div>
                <div className="text-3xl font-bold text-dental-purple">12+</div>
                <div className="text-sm text-gray-600">{t('yearsOfExperience')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-dental-orange">5000+</div>
                <div className="text-sm text-gray-600">{t('happyPatients')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-dental-blue">15+</div>
                <div className="text-sm text-gray-600">{t('dentalSpecialists')}</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image Slider */}
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-dental-blue/20 blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-dental-orange/20 blur-2xl"></div>
            
            <Carousel
              className="relative z-10 rounded-2xl overflow-hidden shadow-custom"
              setApi={(api) => {
                if (api && activeSlide !== api.selectedScrollSnap()) {
                  api.scrollTo(activeSlide);
                }
              }}
            >
              <CarouselContent>
                {heroSlides.map((slide) => (
                  <CarouselItem key={slide.id}>
                    <div className="w-full aspect-[4/3]">
                      <img 
                        src={slide.image} 
                        alt={slide.alt} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      activeSlide === index ? "bg-white scale-125" : "bg-white/50"
                    }`}
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              <CarouselPrevious 
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white" 
              />
              <CarouselNext 
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white" 
              />
            </Carousel>
          </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="wave-divider"></div>
    </section>
  );
};

export default HeroSection;
