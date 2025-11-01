/**
 * Sitemap Generator Script
 * 
 * This script generates a sitemap.xml file by:
 * 1. Including all static routes
 * 2. Fetching all blog posts from the API
 * 3. Adding individual blog post URLs
 * 
 * Usage: npm run generate-sitemap
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const API_BASE_URL = 'https://blogplatform-backend-cloudinary-weld.vercel.app';
const BASE_URL = 'https://specslo.com'; // Update this with your actual domain
const OUTPUT_PATH = path.join(__dirname, '..', 'public', 'sitemap.xml');

// Static routes with their priorities and change frequencies
const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/services', priority: '0.9', changefreq: 'monthly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
  { path: '/web-development', priority: '0.9', changefreq: 'monthly' },
  { path: '/app-development', priority: '0.9', changefreq: 'monthly' },
  { path: '/software-development', priority: '0.9', changefreq: 'monthly' },
  { path: '/ai-solutions', priority: '0.9', changefreq: 'monthly' },
  { path: '/game-development', priority: '0.9', changefreq: 'monthly' },
  { path: '/uiux-design', priority: '0.9', changefreq: 'monthly' },
  { path: '/data-science-solutions', priority: '0.9', changefreq: 'monthly' },
  { path: '/healthcare-solutions', priority: '0.9', changefreq: 'monthly' },
  { path: '/blogs', priority: '0.8', changefreq: 'weekly' },
  { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
  { path: '/terms-of-service', priority: '0.3', changefreq: 'yearly' },
  { path: '/disclaimer', priority: '0.3', changefreq: 'yearly' },
  { path: '/thank-you', priority: '0.2', changefreq: 'monthly' },
];

// Format date as YYYY-MM-DD
function formatDate(date) {
  return new Date(date).toISOString().split('T')[0];
}

// Fetch all blog posts from the API
async function fetchBlogPosts() {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/blogs/published`);
    return response.data.blogs || [];
  } catch (error) {
    console.error('Error fetching blog posts:', error.message);
    return [];
  }
}

// Generate XML sitemap
function generateSitemap(blogPosts = []) {
  const today = formatDate(new Date());
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
`;

  // Add static routes
  staticRoutes.forEach(route => {
    xml += `  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>
`;
  });

  // Add blog post URLs
  blogPosts.forEach(blog => {
    const lastmod = blog.updatedAt ? formatDate(new Date(blog.updatedAt)) : today;
    xml += `  <url>
    <loc>${BASE_URL}/blog/${blog.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
  });

  xml += `</urlset>`;
  return xml;
}

// Main function
async function main() {
  console.log('Generating sitemap...');
  console.log('Fetching blog posts...');
  
  const blogPosts = await fetchBlogPosts();
  console.log(`Found ${blogPosts.length} blog posts`);
  
  const sitemap = generateSitemap(blogPosts);
  
  // Write to file
  fs.writeFileSync(OUTPUT_PATH, sitemap, 'utf8');
  console.log(`Sitemap generated successfully at: ${OUTPUT_PATH}`);
  console.log(`Total URLs: ${staticRoutes.length + blogPosts.length}`);
}

// Run the script
main().catch(error => {
  console.error('Error generating sitemap:', error);
  process.exit(1);
});

