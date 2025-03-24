import React from 'react';
import { motion } from 'framer-motion';

export default function Blog() {
  const blogPosts = [
    {
      title: "Quantum-Resistant Cryptography",
      excerpt: "Preparing for post-quantum security challenges in modern infrastructure",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
      author: "Alexandra Tech",
      date: "March 1, 2025",
      category: "Encryption"
    },
    {
      title: "Zero-Trust Network Architectures",
      excerpt: "Implementing never-trust, always-verify security models",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800",
      author: "CyberSec Team",
      date: "February 28, 2025",
      category: "Networking"
    },
    {
      title: "AI-Powered Threat Detection",
      excerpt: "Next-gen machine learning for real-time anomaly detection",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
      author: "ML Security",
      date: "February 27, 2025",
      category: "AI Security"
    },
    {
      title: "Cloud-Native Security Patterns",
      excerpt: "Securing distributed systems in multi-cloud environments",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
      author: "Cloud Team",
      date: "February 26, 2025",
      category: "Cloud Security"
    },
    {
      title: "Ethical Hacking Methodologies",
      excerpt: "Advanced penetration testing techniques for modern systems",
      image: "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=800",
      author: "White Hat",
      date: "February 25, 2025",
      category: "Hacking"
    },
    {
      title: "Secure Coding Practices",
      excerpt: "Building vulnerability-resistant applications from inception",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800",
      author: "DevSecOps",
      date: "February 24, 2025",
      category: "Development"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="container mx-auto px-4 py-24 relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-40 right-1/3 w-48 h-48 bg-indigo-500/20 rounded-full blur-2xl animate-pulse delay-300" />
        </div>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-8">
            Cyber Pulse
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-16">
            Cutting-edge security research and technological breakthroughs. 
            Stay ahead of emerging threats with our expert analysis.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="relative overflow-hidden rounded-t-xl">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <span className="text-sm font-semibold text-cyan-400">
                    {post.category}
                  </span>
                  <h2 className="text-2xl font-bold text-gray-100 mt-2 mb-3">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="text-cyan-300">{post.author}</span>
                    <span className="text-gray-400">{post.date}</span>
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
          className="mt-24 relative bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl border border-cyan-400/20 p-12 backdrop-blur-xl"
        >
          <div className="absolute inset-0 bg-grid-white/5" />
          <div className="relative">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-white mb-6">
              Threat Intelligence Updates
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Receive critical security advisories and vulnerability alerts 
              directly to your inbox.
            </p>
            <div className="max-w-xl mx-auto flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="secure@address.com"
                className="flex-grow px-6 py-4 rounded-xl bg-gray-900/50 border border-gray-700 text-gray-100 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-xl font-bold text-white hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20">
                Secure Subscribe
              </button>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}