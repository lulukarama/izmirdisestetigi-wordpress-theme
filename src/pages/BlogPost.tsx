import { useEffect, useState } from 'react';
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { format } from 'date-fns';
import { Star, MessageSquare, Phone } from "lucide-react";

const BlogPost = () => {
  const { t } = useLanguage();
  const [rating, setRating] = useState<number>(0);
  const [hoveredStar, setHoveredStar] = useState<number>(0);

  // Temporary mock data - would typically come from an API or CMS
  const post = {
    title: "Latest Advances in Dental Implant Technology",
    date: "2024-04-20",
    author: "Dr. Mehmet Yılmaz",
    commentsCount: 5,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    content: `
      <h2>The Evolution of Dental Implants</h2>
      <p>Modern dental implant procedures have revolutionized the field of dentistry, offering patients a permanent solution for missing teeth that looks, feels, and functions just like natural teeth.</p>
      
      <h2>Advanced Technology in Implementation</h2>
      <p>With the advent of 3D printing and computer-guided surgery, dental implant procedures have become more precise and less invasive than ever before.</p>
      
      <h2>Recovery and Long-term Care</h2>
      <p>The recovery process has been significantly improved thanks to these technological advances, with many patients able to resume their normal activities within a few days.</p>
    `
  };

  const handleRating = (value: number) => {
    setRating(value);
    // Here you would typically send this rating to your backend
  };

  useEffect(() => {
    // Add fade-in animation to content sections
    const elements = document.querySelectorAll('.animate-fade-in');
    elements.forEach(element => {
      element.classList.remove('opacity-0');
    });
  }, []);

  return (
    <>
      <main className="pt-28">
        {/* Hero Image */}
        <div className="w-full h-[400px] relative animate-fade-in opacity-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Content */}
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="animate-fade-in opacity-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">{post.title}</h1>
            
            {/* Post Metadata */}
            <div className="flex flex-wrap items-center gap-4 mb-8 text-gray-600">
              <time dateTime={post.date} className="flex items-center gap-2">
                {format(new Date(post.date), 'MMMM d, yyyy')}
              </time>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                {post.commentsCount} {t('comments')}
              </span>
            </div>

            {/* Rating System */}
            <div className="mb-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">{t('rateThisArticle')}</p>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={24}
                    className={`cursor-pointer transition-colors ${
                      star <= (hoveredStar || rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                    onMouseEnter={() => setHoveredStar(star)}
                    onMouseLeave={() => setHoveredStar(0)}
                    onClick={() => handleRating(star)}
                  />
                ))}
              </div>
            </div>
            
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* Action Buttons */}
          <div className="mt-12 space-y-4">
            <Button 
              className="w-full bg-dental-purple hover:bg-dental-purple/90 text-white"
              size="lg"
            >
              <Phone className="mr-2" />
              {t('bookAppointment')}
            </Button>

            <Button
              variant="outline"
              className="w-full border-green-500 text-green-600 hover:bg-green-50"
              size="lg"
              onClick={() => window.open('https://wa.me/your-number', '_blank')}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="mr-2 h-5 w-5"
              >
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                <path d="M9 10a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0v-4Z" />
                <path d="M13 9a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 .5-.5Z" />
              </svg>
              {t('contactWhatsApp')}
            </Button>
          </div>

          {/* Comments Section */}
          <div className="mt-16 pt-8 border-t animate-fade-in opacity-0">
            <h3 className="text-2xl font-bold mb-8">{t('comments')}</h3>
            <p className="text-gray-600">{t('noComments')}</p>
          </div>
        </article>

        {/* WhatsApp Floating Button (Mobile) */}
        <div className="fixed bottom-6 right-6 md:hidden z-50">
          <Button
            size="icon"
            className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg"
            onClick={() => window.open('https://wa.me/your-number', '_blank')}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="h-6 w-6 text-white"
            >
              <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
              <path d="M9 10a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0v-4Z" />
              <path d="M13 9a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 .5-.5Z" />
            </svg>
          </Button>
        </div>
      </main>
    </>
  );
};

export default BlogPost;
