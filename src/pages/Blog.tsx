import React from 'react';
import { motion } from 'framer-motion';

export default function Blog() {
  const blogPosts = [
    {
      title: "The Future of Cybersecurity in 2025",
      excerpt: "Exploring emerging threats and innovative solutions in the cybersecurity landscape.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
      author: "John Smith",
      date: "March 1, 2025",
      category: "Cybersecurity"
    },
    {
      title: "Smart Home Technology Trends",
      excerpt: "Latest innovations in home automation and IoT integration.",
      image: "https://images.unsplash.com/photo-1558002038-876f1d0aa8ba?w=800",
      author: "Sarah Johnson",
      date: "February 28, 2025",
      category: "Smart Homes"
    },
    {
      title: "AI in Software Development",
      excerpt: "How artificial intelligence is transforming the way we build software.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800",
      author: "Mike Wilson",
      date: "February 25, 2025",
      category: "Technology"
    },
    {
      title: "Cloud Computing Best Practices",
      excerpt: "Essential guidelines for successful cloud implementation.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
      author: "Emily Brown",
      date: "February 22, 2025",
      category: "Cloud"
    },
    {
      title: "Network Security Essentials",
      excerpt: "Fundamental principles for protecting your network infrastructure.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800",
      author: "David Lee",
      date: "February 20, 2025",
      category: "Security"
    },
    {
      title: "The Rise of Edge Computing",
      excerpt: "Understanding the impact of edge computing on modern applications.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
      author: "Lisa Chen",
      date: "February 18, 2025",
      category: "Technology"
    }
  ];

  return (
    <main className="flex-grow container mx-auto px-6 py-24">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/80 backdrop-blur-md rounded-lg shadow-lg p-8 mb-12"
      >
        <h1 className="text-5xl font-bold text-black mb-8">Blog</h1>
        <p className="text-xl text-gray-700 mb-12">
          Stay updated with the latest insights, trends, and innovations in technology.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-orange-500 font-semibold">
                  {post.category}
                </span>
                <h2 className="text-xl font-bold text-black mt-2 mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-orange-500 text-white rounded-lg shadow-lg p-12 text-center"
      >
        <h2 className="text-4xl font-bold mb-6">Never Miss an Update</h2>
        <p className="text-xl mb-8">Subscribe to our newsletter for the latest technology insights.</p>
        <div className="max-w-md mx-auto flex gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow px-4 py-3 rounded-lg text-black"
          />
          <button className="bg-white text-orange-500 px-8 py-3 rounded-lg font-bold hover:bg-orange-50 transition-colors">
            Subscribe
          </button>
        </div>
      </motion.section>
    </main>
  );
}