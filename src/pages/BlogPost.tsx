
import { useEffect } from 'react';
import { useLanguage } from "@/context/LanguageContext";

const BlogPost = () => {
  const { t } = useLanguage();

  // Temporary mock data - would typically come from an API or CMS
  const post = {
    title: "Latest Advances in Dental Implant Technology",
    date: "2024-04-20",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <time className="text-gray-600 block mb-8">
              {new Date(post.date).toLocaleDateString()}
            </time>
            
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* Comments Section */}
          <div className="mt-16 pt-8 border-t animate-fade-in opacity-0">
            <h3 className="text-2xl font-bold mb-8">{t('comments')}</h3>
            
            {/* Add comment form and list here */}
            <p className="text-gray-600">{t('noComments')}</p>
          </div>
        </article>
      </main>
    </>
  );
};

export default BlogPost;
