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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogs.slice(0, 4).map((post) => (
            <Link key={post._id} to={`/blog/${post.slug}`}>
              <article className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-700 hover:border-yellow-400 group">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={post.imageUrl}
                    alt={post.imageAlt}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-medium">
                      {post.categoryId.name}
                    </span>
                    <span className="text-gray-400 text-sm">
                      {post.content ? calculateReadTime(post.content) : '5 min read'}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-yellow-400 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                        <span className="text-black font-bold text-sm">
                          {post.authorId.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">{post.authorId.name}</p>
                        <p className="text-xs text-gray-400">{formatDate(post.publishDate)}</p>
                      </div>
                    </div>
                    <span className="text-yellow-400 hover:text-yellow-500 font-medium group-hover:translate-x-1 transition-all duration-300">
                      Read More →
                    </span>
                  </div>
                </div>
              </article>
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