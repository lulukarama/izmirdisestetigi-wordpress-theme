
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Instagram } from "lucide-react";
import { Button } from "./ui/button";

interface InstagramPost {
  id: string;
  media_url: string;
  permalink: string;
  caption?: string;
  timestamp: string;
}

const InstagramSection = () => {
  const { t } = useLanguage();
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);

  // For demo purposes, we'll use mock data since we can't make direct Instagram API calls
  // In a real WordPress implementation, this would connect via the Instagram API
  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      // Mock data to simulate Instagram posts
      const mockPosts: InstagramPost[] = [
        {
          id: "1",
          media_url: "https://images.unsplash.com/photo-1601662528567-526cd06f6582",
          permalink: "https://www.instagram.com/p/example1/",
          caption: "Modern dental care for the whole family #dentistry #smile",
          timestamp: "2024-04-20T10:00:00Z"
        },
        {
          id: "2",
          media_url: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5",
          permalink: "https://www.instagram.com/p/example2/",
          caption: "State-of-the-art dental equipment #technology #dentalcare",
          timestamp: "2024-04-18T09:15:00Z"
        },
        {
          id: "3",
          media_url: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95",
          permalink: "https://www.instagram.com/p/example3/",
          caption: "Beautiful smiles start here #cosmeticdentistry",
          timestamp: "2024-04-15T14:30:00Z"
        },
        {
          id: "4",
          media_url: "https://images.unsplash.com/photo-1571736772770-ca153d7ca452",
          permalink: "https://www.instagram.com/p/example4/",
          caption: "Our team of experienced professionals #dentalteam",
          timestamp: "2024-04-12T16:45:00Z"
        },
        {
          id: "5",
          media_url: "https://images.unsplash.com/photo-1606818616331-508e22b2cfdb",
          permalink: "https://www.instagram.com/p/example5/",
          caption: "Patient comfort is our priority #patientcare",
          timestamp: "2024-04-10T11:20:00Z"
        },
        {
          id: "6",
          media_url: "https://images.unsplash.com/photo-1498081959737-f3ba1af08103",
          permalink: "https://www.instagram.com/p/example6/",
          caption: "Transforming smiles every day #smilemakeover",
          timestamp: "2024-04-08T13:10:00Z"
        }
      ];
      
      setPosts(mockPosts);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <section id="instagram" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in opacity-0">
          <p className="text-dental-orange font-medium mb-2">@izmir.dis.estetigi</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{t('followUsOnInstagram')}</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('instagramDescription')}
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10 animate-fade-in opacity-0">
          {loading ? (
            // Loading placeholders
            Array(6).fill(0).map((_, index) => (
              <div 
                key={`loading-${index}`}
                className="aspect-square bg-gray-200 rounded-lg animate-pulse"
              />
            ))
          ) : (
            posts.map(post => (
              <a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-post group relative aspect-square overflow-hidden rounded-lg"
              >
                <img 
                  src={post.media_url} 
                  alt={post.caption || "Instagram post"} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Instagram className="h-8 w-8 mx-auto mb-2" />
                  </div>
                </div>
              </a>
            ))
          )}
        </div>
        
        <div className="text-center animate-fade-in opacity-0">
          <Button asChild className="bg-gradient-to-r from-dental-purple to-dental-blue hover:from-dental-blue hover:to-dental-purple text-white px-8 py-6 h-auto">
            <a
              href="https://www.instagram.com/izmir.dis.estetigi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Instagram className="h-5 w-5" />
              {t('followOnInstagram')}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
