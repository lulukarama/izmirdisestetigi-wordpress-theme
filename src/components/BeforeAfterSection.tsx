
import { useState, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

interface BeforeAfterCase {
  id: number;
  title: string;
  beforeImage: string;
  afterImage: string;
}

const BeforeAfterSection = () => {
  const { t } = useLanguage();
  const [sliderValue, setSliderValue] = useState(50);
  const beforeImgRef = useRef<HTMLDivElement>(null);

  // Sample before-after cases
  const cases: BeforeAfterCase[] = [
    {
      id: 1,
      title: "Teeth Whitening",
      beforeImage: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=2500&auto=format&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1649519524233-dfa5cc8fc6c4?q=80&w=2670&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Dental Implants",
      beforeImage: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=2670&auto=format&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?q=80&w=2080&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Invisalign",
      beforeImage: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2670&auto=format&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1600170236320-5def2ecf5278?q=80&w=2670&auto=format&fit=crop"
    }
  ];

  const [activeCase, setActiveCase] = useState<BeforeAfterCase>(cases[0]);

  // Handle slider change
  const handleSliderChange = (value: number[]) => {
    setSliderValue(value[0]);
    if (beforeImgRef.current) {
      beforeImgRef.current.style.width = `${value}%`;
    }
  };

  return (
    <section id="transformations" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-dental-purple font-medium mb-2">
            {t('ourServices')}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{t('servicesTitle')}</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('servicesDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-custom">
              {/* Before-After Slider */}
              <div className="relative w-full h-full">
                {/* After Image (Background) */}
                <div 
                  className="absolute inset-0 w-full h-full"
                  style={{
                    backgroundImage: `url(${activeCase.afterImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                
                {/* Before Image (Foreground with variable width) */}
                <div 
                  ref={beforeImgRef}
                  className="absolute inset-0 h-full"
                  style={{
                    width: `${sliderValue}%`,
                    backgroundImage: `url(${activeCase.beforeImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRight: '3px solid white'
                  }}
                />
                
                {/* Labels */}
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded">
                  Before
                </div>
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded">
                  After
                </div>
                
                {/* Slider Control */}
                <div className="absolute bottom-16 left-0 right-0 px-8">
                  <Slider
                    defaultValue={[50]}
                    value={[sliderValue]}
                    onValueChange={handleSliderChange}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Case Selection */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold mb-4">Treatment Cases</h3>
            
            {cases.map((caseItem) => (
              <Card 
                key={caseItem.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-custom-hover ${
                  activeCase.id === caseItem.id ? 'border-dental-purple ring-2 ring-dental-purple/20' : ''
                }`}
                onClick={() => setActiveCase(caseItem)}
              >
                <CardContent className="p-4">
                  <h4 className="font-medium">{caseItem.title}</h4>
                  <div className="flex justify-between mt-2">
                    <div className="w-24 h-16 rounded overflow-hidden">
                      <img 
                        src={caseItem.beforeImage} 
                        alt="Before" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-24 h-16 rounded overflow-hidden">
                      <img 
                        src={caseItem.afterImage} 
                        alt="After" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <Button 
              variant="outline" 
              className="mt-4"
            >
              {t('learnMoreLink')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
