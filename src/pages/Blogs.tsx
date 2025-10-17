import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ContactSection from "@/components/ContactSection";
import heroImg from "../assets/blogs-hero.webp";

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
    throw new Error("Failed to fetch blogs");
  }
  return response.json();
};

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch blogs using TanStack Query
  const {
    data: blogsData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  });

  // Get unique categories from blogs
  const categories = blogsData?.blogs
    ? ["All", ...new Set(blogsData.blogs.map((blog) => blog.categoryId.name))]
    : ["All"];

  // Filter blogs based on category and search
  const filteredPosts =
    blogsData?.blogs?.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.categoryId.name === selectedCategory;
      const matchesSearch =
        searchTerm === "" ||
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    }) || [];


  const featuredPosts = filteredPosts.filter((post) => post.isFeatured);
  const regularPosts = filteredPosts.filter((post) => !post.isFeatured);

  // Helper function to format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Helper function to calculate read time
  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(" ").length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    return `${readTime} min read`;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading blogs...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">
          Error loading blogs. Please try again later.
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <HeroSection
        backgroundImage={heroImg}
        mainHeadline=""
        highlightedWord="Blogs"
        headlineAfterHighlight="& Inspecs News"
        subHeadline="Stay updated with the latest insights, trends, and innovations in technology, healthcare, and digital transformation."
        primaryButtonText="Explore Articles"
        showSecondaryButton={false}
        showCtaText={false}
        stat1Value="50+"
        stat1Label="Articles Published"
        stat2Value="10K+"
        stat2Label="Monthly Readers"
        stat3Value="95%"
        stat3Label="Reader Satisfaction"
        bottomSectionText="Insights That Drive Innovation"
        bottomHighlightedWord="Innovation"
        show3DLogo={false}
      />

      {/* Search and Filter Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            {/* Search Bar */}
            <div className="w-full lg:w-1/3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 border-2 border-gray-600 bg-gray-800 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-colors duration-300"
                />
                <svg
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Category Filters */}
            <div className="w-full lg:w-2/3">
              <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                      selectedCategory === category
                        ? "bg-yellow-400 text-black"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      {selectedCategory === "All" && featuredPosts.length > 0 && (
        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Featured <span className="text-yellow-400">Articles</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
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
                          {post.content
                            ? calculateReadTime(post.content)
                            : "5 min read"}
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
                              {post.author.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-white">
                              {post.author.name}
                            </p>
                            <p className="text-xs text-gray-400">
                              {formatDate(post.publishDate)}
                            </p>
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
          </div>
        </section>
      )}

      {/* All Posts Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            {selectedCategory === "All"
              ? "All Articles"
              : `${selectedCategory} Articles`}
          </h2>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">
                No articles found matching your criteria.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
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
                          {post.content
                            ? calculateReadTime(post.content)
                            : "5 min read"}
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
                              {post.author.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-white">
                              {post.author.name}
                            </p>
                            <p className="text-xs text-gray-400">
                              {formatDate(post.publishDate)}
                            </p>
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
          )}
        </div>
      </section>

      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Blogs;
