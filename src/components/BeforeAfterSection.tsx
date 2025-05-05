
import { useState, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

interface BeforeAfterItem {
  id: number;
  title: string;
  beforeImage: string;
  afterImage: string;
}

const BeforeAfterSection = () => {
  const { t } = useLanguage();
  const [sliderValues, setSliderValues] = useState<Record<number, number>>({
    1: 50,
    2: 50,
    3: 50,
  });
  
  const beforeImgRefs = useRef<Record<number, HTMLDivElement | null>>({});

  // Sample before-after cases
  const cases: BeforeAfterItem[] = [
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

  // Handle slider change
  const handleSliderChange = (id: number, value: number[]) => {
    const newValues = { ...sliderValues, [id]: value[0] };
    setSliderValues(newValues);
    
    if (beforeImgRefs.current[id]) {
      beforeImgRefs.current[id]!.style.width = `${value[0]}%`;
    }
  };

  return (
    <section id="transformations" className="section-padding bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Before & After
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See the amazing transformations we've achieved for our patients with our state-of-the-art dental procedures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((item) => (
            <div key={item.id} className="flex flex-col">
              <h3 className="text-xl font-semibold mb-4 text-center">{item.title}</h3>
              
              <div className="relative h-[300px] md:h-[350px] rounded-xl overflow-hidden shadow-custom">
                {/* Before-After Slider */}
                <div className="relative w-full h-full">
                  {/* After Image (Background) */}
                  <div 
                    className="absolute inset-0 w-full h-full"
                    style={{
                      backgroundImage: `url(${item.afterImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                  
                  {/* Before Image (Foreground with variable width) */}
                  <div 
                    ref={(el) => { beforeImgRefs.current[item.id] = el; }}
                    className="absolute inset-0 h-full"
                    style={{
                      width: `${sliderValues[item.id]}%`,
                      backgroundImage: `url(${item.beforeImage})`,
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
                  
                  {/* Slider Handle */}
                  <div 
                    className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
                    style={{
                      left: `calc(${sliderValues[item.id]}% - 1.5px)`,
                      zIndex: 10,
                      touchAction: 'none'
                    }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                      <span className="text-dental-purple text-xs font-bold">←→</span>
                    </div>
                  </div>
                  
                  {/* Slider Control */}
                  <div className="absolute bottom-16 left-0 right-0 px-8">
                    <Slider
                      value={[sliderValues[item.id]]}
                      onValueChange={(value) => handleSliderChange(item.id, value)}
                      className="w-full"
                      max={100}
                      step={1}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button className="bg-dental-purple hover:bg-dental-purple/90 text-white px-8 py-6 text-lg">
            Book Your Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
