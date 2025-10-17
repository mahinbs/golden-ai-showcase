import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

// API base URL
const API_BASE_URL = "https://blogplatform-backend-cloudinary-weld.vercel.app";

// Types for blog data
interface Blog {
  _id: string;
  title: string;
  slug: string;
  content?: string;
  authorId: {
    _id: string;
    name: string;
  };
  categoryId: {
    _id: string;
    name: string;
    slug: string;
  };
  tags: string[];
  excerpt: string;
  imageAlt: string;
  isFeatured: boolean;
  author: {
    _id: string;
    name: string;
  };
  metaDescription: string;
  metaKeywords: string[];
  imageUrl: string;
  status: string;
  publishDate: string;
  createdAt: string;
  updatedAt: string;
}

interface BlogsResponse {
  success: boolean;
  blogs: Blog[];
  totalCount: number;
  currentPage: number;
  totalPages: number | null;
}

// Fetch blogs function
const fetchBlogs = async (): Promise<BlogsResponse> => {
  const response = await fetch(`${API_BASE_URL}/api/blogs/published`);
  if (!response.ok) {
    throw new Error('Failed to fetch blogs');
  }
  return response.json();
};

const BlogSection = () => {
  // Fetch blogs using TanStack Query
  const { data: blogsData, isLoading, error } = useQuery({
    queryKey: ['blogs-section'],
    queryFn: fetchBlogs,
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Helper function to calculate read time
  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(' ').length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    return `${readTime} min read`;
  };

  if (isLoading) {
    return (
      <section id="blog" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white text-xl">Loading blogs...</div>
        </div>
      </section>
    );
  }

  if (error || !blogsData?.blogs) {
    return (
      <section id="blog" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white text-xl">Error loading blogs</div>
        </div>
      </section>
    );
  }

  const blogs = blogsData.blogs;
  const featuredBlog = blogs.find(blog => blog.isFeatured) || blogs[0];
  const regularBlogs = blogs.filter(blog => blog._id !== featuredBlog._id).slice(0, 3);

  return (
    <section id="blog" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 animate-fade-in text-left">
          <div className="mb-6">
            <h2 className="text-4xl md:text-6xl font-bold inline-block">
              <span className="bg-[#ffd63c] text-black px-4 py-2 rounded-lg">Blogs</span>{" "}
              <span className="text-white">& Inspecs News</span>
            </h2>
          </div>
          
          {/* White separator line */}
          <div className="w-24 h-1 bg-white mb-8"></div>
          
          <div className="text-white max-w-4xl">
            <p className="text-lg md:text-xl mb-4">
              Stay ahead with insights, trends, and stories from the Specslo team.
            </p>
            <p className="text-lg md:text-xl">
              Explore how tech and AI shape the future of your business.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Featured Post */}
          <Link to={`/blog/${featuredBlog.slug}`}>
            <Card className="lg:col-span-2 overflow-hidden hover:shadow-card transition-all duration-300 group cursor-pointer animate-slide-up border-border hover:border-accent/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img 
                    src={featuredBlog.imageUrl} 
                    alt={featuredBlog.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="bg-accent/10 text-accent px-2 py-1 rounded-full">
                      {featuredBlog.categoryId.name}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(featuredBlog.publishDate)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredBlog.content ? calculateReadTime(featuredBlog.content) : '5 min read'}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                    {featuredBlog.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredBlog.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{featuredBlog.author.name}</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-accent group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        </div>

        {/* Regular Posts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {regularBlogs.map((post, index) => (
            <Link key={post._id} to={`/blog/${post.slug}`}>
              <Card 
                className="overflow-hidden hover:shadow-card transition-all duration-300 group cursor-pointer animate-slide-up border-border hover:border-accent/20"
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.imageUrl} 
                    alt={post.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent/10 backdrop-blur-sm text-accent px-2 py-1 rounded-full text-xs font-medium">
                      {post.categoryId.name}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {formatDate(post.publishDate)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.content ? calculateReadTime(post.content) : '5 min read'}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      <User className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{post.author.name}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link to="/blogs">
            <Button variant="outline" size="lg" className="group">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;