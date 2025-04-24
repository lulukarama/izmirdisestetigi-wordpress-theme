
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Calendar, Star } from "lucide-react";
import { Link } from "react-router-dom";

const BlogSidebar = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data
  const recentPosts = [
    {
      id: 1,
      title: "Latest Advances in Dental Implant Technology",
      date: "2024-04-20",
      rating: 4.5
    },
    {
      id: 2,
      title: "Tips for Maintaining Optimal Oral Health",
      date: "2024-04-18",
      rating: 5
    },
    {
      id: 3,
      title: "The Role of AI in Modern Dentistry",
      date: "2024-04-15",
      rating: 4
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search for:", searchTerm);
    // Here you would typically handle the search logic
  };

  return (
    <div className="space-y-8">
      {/* Search Widget */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">{t('search')}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSearch} className="flex gap-2">
            <input
              type="text"
              placeholder={t('searchBlog')}
              className="flex-grow border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-dental-purple"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button type="submit" variant="outline" size="icon">
              <Search size={18} />
              <span className="sr-only">{t('search')}</span>
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Recent Posts Widget */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">{t('recentPosts')}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {recentPosts.map((post) => (
              <li key={post.id} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                <Link to={`/blog/${post.id}`} className="group">
                  <h4 className="text-sm font-medium text-gray-800 group-hover:text-dental-purple transition-colors">
                    {post.title}
                  </h4>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="text-xs text-gray-500 flex items-center">
                      <Calendar size={12} className="mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center">
                      <Star size={12} className="mr-1" />
                      {post.rating}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Newsletter Subscription */}
      <Card className="bg-gradient-to-r from-dental-purple/10 to-dental-blue/10">
        <CardHeader>
          <CardTitle className="text-xl">{t('newsletter')}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 mb-4">{t('newsletterDescription')}</p>
          <form className="space-y-4">
            <input
              type="email"
              placeholder={t('emailPlaceholder')}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-dental-purple"
              required
            />
            <Button type="submit" className="w-full bg-dental-purple hover:bg-dental-purple/90">
              {t('subscribe')}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Book Appointment Card */}
      <Card className="bg-dental-purple text-white">
        <CardContent className="pt-6">
          <h3 className="text-xl font-bold mb-2">{t('needDentalCare')}</h3>
          <p className="text-sm mb-4 text-white/90">{t('bookAppointmentDescription')}</p>
          <Button 
            variant="outline" 
            className="w-full bg-white text-dental-purple hover:bg-white/90"
          >
            <Phone className="mr-2" />
            {t('bookAppointment')}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogSidebar;
