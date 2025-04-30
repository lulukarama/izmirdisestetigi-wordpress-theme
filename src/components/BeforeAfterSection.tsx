
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "./ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Card } from "./ui/card";
import { AspectRatio } from "./ui/aspect-ratio";
import { Eye, ArrowLeft, ArrowRight } from "lucide-react";

interface BeforeAfterCase {
  id: string;
  title: string;
  beforeImage: string;
  afterImage: string;
  description: string;
}

const BeforeAfterSection = () => {
  const { t } = useLanguage();
  const [activeImage, setActiveImage] = useState<"before" | "after">("after");
  const [cases, setCases] = useState<BeforeAfterCase[]>([]);
  const [loading, setLoading] = useState(true);

  // Mock data for demonstration
  useEffect(() => {
    setTimeout(() => {
      const mockCases: BeforeAfterCase[] = [
        {
          id: "1",
          title: "Teeth Whitening",
          beforeImage: "https://images.unsplash.com/photo-1606818616331-508e22b2cfdb",
          afterImage: "https://images.unsplash.com/photo-1601662528567-526cd06f6582",
          description: "Professional teeth whitening treatment showing dramatic results."
        },
        {
          id: "2",
          title: "Dental Implants",
          beforeImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95",
          afterImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5",
          description: "Dental implant procedure replacing missing teeth with natural-looking results."
        },
        {
          id: "3",
          title: "Cosmetic Veneers",
          beforeImage: "https://images.unsplash.com/photo-1571736772770-ca153d7ca452",
          afterImage: "https://images.unsplash.com/photo-1498081959737-f3ba1af08103",
          description: "Porcelain veneers transforming smile appearance and confidence."
        }
      ];
      
      setCases(mockCases);
      setLoading(false);
    }, 800);
  }, []);

  return (
    <section id="before-after" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in opacity-0">
          <p className="text-dental-purple font-medium mb-2">{t('ourServices')}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{t('servicesTitle')}</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('servicesDescription')}
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="bg-gray-100 rounded-lg h-[400px] animate-pulse"></div>
            ))}
          </div>
        ) : (
          <Carousel className="w-full max-w-5xl mx-auto animate-fade-in opacity-0">
            <CarouselContent>
              {cases.map((caseItem) => (
                <CarouselItem key={caseItem.id}>
                  <div className="p-1">
                    <Card className="overflow-hidden">
                      <div className="relative">
                        <AspectRatio ratio={16/9} className="bg-muted relative">
                          <div className="absolute inset-0 z-10 transition-opacity duration-500"
                               style={{ opacity: activeImage === "before" ? 1 : 0 }}>
                            <img 
                              src={caseItem.beforeImage} 
                              alt={`Before - ${caseItem.title}`}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="absolute inset-0 transition-opacity duration-500"
                               style={{ opacity: activeImage === "after" ? 1 : 0 }}>
                            <img 
                              src={caseItem.afterImage} 
                              alt={`After - ${caseItem.title}`}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="absolute top-4 left-4 z-20 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium">
                            {activeImage === "before" ? "Before" : "After"}
                          </div>
                        </AspectRatio>
                        
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
                          <Button 
                            size="sm" 
                            variant={activeImage === "before" ? "default" : "outline"} 
                            className="bg-white/80 backdrop-blur-sm hover:bg-white text-gray-800 border-gray-200"
                            onClick={() => setActiveImage("before")}
                          >
                            <Eye className="mr-1 h-4 w-4" />
                            Before
                          </Button>
                          <Button 
                            size="sm" 
                            variant={activeImage === "after" ? "default" : "outline"} 
                            className="bg-white/80 backdrop-blur-sm hover:bg-white text-gray-800 border-gray-200"
                            onClick={() => setActiveImage("after")}
                          >
                            <Eye className="mr-1 h-4 w-4" />
                            After
                          </Button>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">{caseItem.title}</h3>
                        <p className="text-gray-600">{caseItem.description}</p>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6 gap-4">
              <CarouselPrevious className="relative static left-0 translate-y-0 border-dental-purple text-dental-purple hover:bg-dental-purple/10" />
              <CarouselNext className="relative static right-0 translate-y-0 border-dental-purple text-dental-purple hover:bg-dental-purple/10" />
            </div>
          </Carousel>
        )}

        <div className="text-center mt-12 animate-fade-in opacity-0">
          <Button asChild className="bg-gradient-to-r from-dental-purple to-dental-blue hover:from-dental-blue hover:to-dental-purple text-white px-6 py-2">
            <a href="#services">
              <ArrowRight className="mr-2 h-5 w-5" />
              {t('learnMoreLink')}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
