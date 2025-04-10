
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
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
              Home
            </a>
            <a href="#services" className="font-medium text-gray-800 hover:text-dental-purple transition-colors">
              Services
            </a>
            <a href="#team" className="font-medium text-gray-800 hover:text-dental-purple transition-colors">
              Our Team
            </a>
            <a href="#testimonials" className="font-medium text-gray-800 hover:text-dental-purple transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="font-medium text-gray-800 hover:text-dental-purple transition-colors">
              Contact
            </a>
          </div>

          {/* Call Button */}
          <div className="hidden md:block">
            <Button className="bg-dental-purple hover:bg-dental-purple/90 flex items-center gap-2">
              <Phone size={18} />
              <span>Book Appointment</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
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
                Home
              </a>
              <a 
                href="#services" 
                className="font-medium text-gray-800 hover:text-dental-purple"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#team" 
                className="font-medium text-gray-800 hover:text-dental-purple"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Our Team
              </a>
              <a 
                href="#testimonials" 
                className="font-medium text-gray-800 hover:text-dental-purple"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#contact" 
                className="font-medium text-gray-800 hover:text-dental-purple"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <Button className="bg-dental-purple hover:bg-dental-purple/90 w-full flex items-center justify-center gap-2">
                <Phone size={18} />
                <span>Book Appointment</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
