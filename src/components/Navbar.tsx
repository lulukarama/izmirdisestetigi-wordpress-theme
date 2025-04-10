
import { useState, useEffect } from "react";
import { Menu, X, Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'tr' : 'en');
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="mr-2">
              {/* Logo */}
              <a href="#home" className="flex items-center">
                <img 
                  src="/lovable-uploads/83a7815a-a265-4521-b0fc-e92f824f7141.png" 
                  alt="Izmir Diş Estetiği" 
                  className="h-20 w-auto" 
                />
              </a>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="font-medium text-gray-800 hover:text-dental-purple transition-colors">
              {t('home')}
            </a>
            <a href="#services" className="font-medium text-gray-800 hover:text-dental-purple transition-colors">
              {t('services')}
            </a>
            <a href="#team" className="font-medium text-gray-800 hover:text-dental-purple transition-colors">
              {t('ourTeam')}
            </a>
            <a href="#testimonials" className="font-medium text-gray-800 hover:text-dental-purple transition-colors">
              {t('testimonials')}
            </a>
            <a href="#contact" className="font-medium text-gray-800 hover:text-dental-purple transition-colors">
              {t('contact')}
            </a>
          </div>

          {/* Language Switcher & Call Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={toggleLanguage} 
              className="flex items-center gap-1"
            >
              <Globe size={16} />
              <span>{language === 'en' ? 'TR' : 'EN'}</span>
            </Button>
            
            <Button className="bg-dental-purple hover:bg-dental-purple/90 flex items-center gap-2">
              <Phone size={18} />
              <span>{t('bookAppointment')}</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={toggleLanguage} 
              className="flex items-center gap-1"
            >
              <Globe size={16} />
              <span>{language === 'en' ? 'TR' : 'EN'}</span>
            </Button>
          
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a 
                href="#home" 
                className="font-medium text-gray-800 hover:text-dental-purple"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('home')}
              </a>
              <a 
                href="#services" 
                className="font-medium text-gray-800 hover:text-dental-purple"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('services')}
              </a>
              <a 
                href="#team" 
                className="font-medium text-gray-800 hover:text-dental-purple"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('ourTeam')}
              </a>
              <a 
                href="#testimonials" 
                className="font-medium text-gray-800 hover:text-dental-purple"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('testimonials')}
              </a>
              <a 
                href="#contact" 
                className="font-medium text-gray-800 hover:text-dental-purple"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('contact')}
              </a>
              <Button className="bg-dental-purple hover:bg-dental-purple/90 w-full flex items-center justify-center gap-2">
                <Phone size={18} />
                <span>{t('bookAppointment')}</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
