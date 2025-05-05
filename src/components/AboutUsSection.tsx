
import { useLanguage } from "@/context/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Award, Flag } from "lucide-react";

const AboutUsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 md:py-24 relative bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">About Us</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We are dedicated to providing exceptional dental care in a comfortable and welcoming environment. 
            Learn more about our commitment to your oral health.
          </p>
        </div>

        {/* About Us Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Us Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-custom">
            <img 
              src="https://images.unsplash.com/photo-1606811851315-22e4c1a42e4d?q=80&w=2670&auto=format&fit=crop" 
              alt="Dental team" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-dental-purple/10"></div>
          </div>

          {/* About Us Text */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Who We Are</h3>
              <p className="text-gray-700">
                Founded in 2010, our dental practice has been serving the community with high-quality dental care. 
                Our team of experienced professionals is committed to staying at the forefront of dental technology 
                and techniques to provide you with the best possible care.
              </p>
            </div>

            {/* Mission and Vision Cards */}
            <div className="space-y-6">
              <Card className="border-l-4 border-l-dental-purple hover:shadow-custom-hover transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Target className="text-dental-purple h-10 w-10" />
                    <div>
                      <h4 className="text-xl font-bold mb-2">Our Mission</h4>
                      <p className="text-gray-700">
                        To provide exceptional dental care that enhances our patients' quality of life through 
                        improved oral health, delivered with compassion and using the latest advancements in dental technology.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-dental-orange hover:shadow-custom-hover transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Award className="text-dental-orange h-10 w-10" />
                    <div>
                      <h4 className="text-xl font-bold mb-2">Our Vision</h4>
                      <p className="text-gray-700">
                        To be the leading dental practice known for excellence in comprehensive care, patient satisfaction, 
                        and creating beautiful, healthy smiles that last a lifetime.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-dental-blue hover:shadow-custom-hover transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Flag className="text-dental-blue h-10 w-10" />
                    <div>
                      <h4 className="text-xl font-bold mb-2">Our Values</h4>
                      <p className="text-gray-700">
                        We believe in integrity, excellence, compassion, innovation, and continuous education. 
                        These core values guide our approach to patient care and shape our practice culture.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="wave-divider"></div>
    </section>
  );
};

export default AboutUsSection;
