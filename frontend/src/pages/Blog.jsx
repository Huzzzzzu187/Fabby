import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const blogsData = [
  {
    id: 1,
    title: "How to Care for Bedridden Patients",
    category: "Care Tips",
    description: "A complete guide for caregivers to ensure comfort and hygiene.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
    date: "May 10, 2026"
  },
  {
    id: 2,
    title: "Choosing the Right Adult Diapers",
    category: "Product Guides",
    description: "Understand the different types and features to make the best choice for your loved ones.",
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2070&auto=format&fit=crop",
    date: "May 12, 2026"
  },
  {
    id: 3,
    title: "Maintaining Dignity in Elder Care",
    category: "Health Guides",
    description: "Essential practices for caregivers to maintain respect and dignity for the elderly.",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ce122?q=80&w=2070&auto=format&fit=crop",
    date: "May 15, 2026"
  },
  /*{
    id: 4,
    title: "Skin Integrity for Seniors",
    category: "Care Tips",
    description: "Preventing bedsores and maintaining healthy skin for individuals with limited mobility.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    date: "May 18, 2026"
  }*/
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Care Tips', 'Health Guides', 'Product Guides'];

  const filteredBlogs = blogsData.filter(blog => {
    const matchCategory = activeCategory === 'All' || blog.category === activeCategory;
    const matchSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || blog.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Fabby Care Blog</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Empowering caregivers with knowledge, dignity, and expert advice for healthcare and hygiene.</p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm ${activeCategory === cat ? 'bg-blue-600 text-white' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-96">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white shadow-sm transition-all"
            />
          </div>
        </div>

        {/* Blog Grid */}
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <div key={blog.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full group">
                <div className="relative h-56 overflow-hidden">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-blue-700 shadow-sm">
                    {blog.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-xs text-slate-400 mb-3">{blog.date}</p>
                  <h2 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">{blog.title}</h2>
                  <p className="text-slate-600 mb-6 line-clamp-3 text-sm flex-grow">{blog.description}</p>
                  <Link to={`/blog/${blog.id}`} className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors mt-auto">
                    Read More
                    <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <span className="material-symbols-outlined text-6xl text-slate-300 mb-4">article</span>
            <h3 className="text-xl font-medium text-slate-700 mb-2">No articles found</h3>
            <p className="text-slate-500">Try adjusting your search or category filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
