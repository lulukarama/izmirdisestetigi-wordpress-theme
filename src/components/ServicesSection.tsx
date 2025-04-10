
import ServiceCard from "./ServiceCard";
import { Smile, Gem, Sparkles, Star, Scissors, Shield } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Teeth Whitening",
      description: "Professional teeth whitening treatments for a brighter, more confident smile using the latest technology.",
      icon: Sparkles,
      color: "blue"
    },
    {
      id: 2,
      title: "Dental Implants",
      description: "Restore missing teeth with natural-looking and durable dental implants that function like your own teeth.",
      icon: Shield,
      color: "green"
    },
    {
      id: 3,
      title: "Cosmetic Dentistry",
      description: "Transform your smile with our range of cosmetic procedures designed to enhance your natural beauty.",
      icon: Gem,
      color: "purple"
    },
    {
      id: 4,
      title: "Orthodontics",
      description: "Straighten your teeth and correct bite issues with our modern orthodontic treatment options.",
      icon: Smile,
      color: "orange"
    },
    {
      id: 5,
      title: "Oral Surgery",
      description: "Expert oral surgery services including extractions and jaw treatments in a comfortable environment.",
      icon: Scissors,
      color: "purple"
    },
    {
      id: 6,
      title: "Preventive Care",
      description: "Regular checkups and cleanings to maintain optimal oral health and prevent future dental problems.",
      icon: Star,
      color: "orange"
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-dental-purple font-medium mb-2">OUR SERVICES</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Dental <span className="gradient-text">Services</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of dental services to keep your teeth healthy and your smile beautiful, using the latest technologies and techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard 
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              color={service.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
