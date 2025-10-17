import React from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

// API base URL
const API_BASE_URL = "https://blogplatform-backend-cloudinary-weld.vercel.app";

// Types for blog data
interface Blog {
  _id: string;
  title: string;
  slug: string;
  content: string;
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

interface BlogResponse {
  success: boolean;
  blog: Blog;
}

// Fetch single blog function
const fetchBlog = async (slug: string): Promise<BlogResponse> => {
  const response = await fetch(`${API_BASE_URL}/api/blogs/slug/${slug}`);
  if (!response.ok) {
    throw new Error('Failed to fetch blog');
  }
  return response.json();
};

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  // Fetch blog using TanStack Query
  const { data: blogData, isLoading, error } = useQuery({
    queryKey: ['blog', slug],
    queryFn: () => fetchBlog(slug!),
    enabled: !!slug,
  });

  // Helper function to format date
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
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading blog...</div>
      </div>
    );
  }

  if (error || !blogData?.blog) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="text-white text-xl mb-4">Blog not found</div>
          <Link 
            to="/blogs" 
            className="text-yellow-400 hover:text-yellow-500 transition-colors duration-300"
          >
            ← Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  const blog = blogData.blog;

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Back Button */}
      <div className="pt-20 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/blogs" 
            className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-500 transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>
        </div>
      </div>

      {/* Blog Header */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Badge */}
          <div className="mb-6">
            <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium">
              {blog.categoryId.name}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {blog.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            {blog.excerpt}
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{blog.author.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(blog.publishDate)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{calculateReadTime(blog.content)}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-12">
            <img
              src={blog.imageUrl}
              alt={blog.imageAlt}
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="prose prose-invert prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.content }}
            style={{
              color: 'white',
              lineHeight: '1.8',
            }}
          />
        </div>
      </section>

      {/* Tags Section */}
      {blog.tags && blog.tags.length > 0 && (
        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-4">
              <Tag className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-medium">Tags:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Author Section */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-xl">
                  {blog.author.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {blog.author.name}
                </h3>
                <p className="text-gray-400">
                  Published on {formatDate(blog.publishDate)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles CTA */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Explore More <span className="text-yellow-400">Articles</span>
          </h2>
          <p className="text-gray-300 mb-8">
            Discover more insights and stories from our team.
          </p>
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-colors duration-300"
          >
            View All Articles
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default BlogDetail;
