import React from 'react';
import { motion } from 'framer-motion';
import { Code, Home, Shield, Network, Lock, Server } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Code className="w-16 h-16 text-orange-500" />,
      title: "Software Development Solutions",
      description: "Custom software tailored to improve business efficiency and customer experiences.",
      features: [
        "Custom Software Development",
        "Mobile and Web Applications",
        "Enterprise Solutions",
        "DevOps and Testing"
      ]
    },
    {
      icon: <Home className="w-16 h-16 text-orange-500" />,
      title: "Smart Homes and Access Control",
      description: "Comprehensive smart home systems combining convenience, security, and energy efficiency.",
      features: [
        "Automation Systems",
        "Energy Efficiency",
        "Safety and Security",
        "Device Integration"
      ]
    },
    {
      icon: <Shield className="w-16 h-16 text-orange-500" />,
      title: "Surveillance Systems",
      description: "Advanced surveillance solutions for residential and commercial spaces.",
      features: [
        "Advanced Cameras",
        "Storage Solutions",
        "Video Analytics",
        "Real-time Monitoring"
      ]
    },
    {
      icon: <Network className="w-16 h-16 text-orange-500" />,
      title: "Network Infrastructure",
      description: "Secure and scalable networks designed for businesses of all sizes.",
      features: [
        "Wired/Wireless Networks",
        "Data Center Solutions",
        "Network Security",
        "Cloud Integration"
      ]
    },
    {
      icon: <Lock className="w-16 h-16 text-orange-500" />,
      title: "Cybersecurity Solutions",
      description: "Comprehensive protection against evolving cyber threats.",
      features: [
        "Threat Detection",
        "Endpoint Security",
        "Access Management",
        "Data Protection"
      ]
    },
    {
      icon: <Server className="w-16 h-16 text-orange-500" />,
      title: "Cloud Services",
      description: "Scalable cloud solutions for modern business needs.",
      features: [
        "Cloud Migration",
        "Hybrid Cloud",
        "Cloud Security",
        "Performance Optimization"
      ]
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
        <h1 className="text-5xl font-bold text-black mb-8">Our Services</h1>
        <p className="text-xl text-gray-700 mb-12">
          We offer a comprehensive range of technology solutions designed to meet the evolving needs of modern businesses and individuals.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="mb-6">{service.icon}</div>
              <h2 className="text-2xl font-bold text-black mb-4">{service.title}</h2>
              <p className="text-gray-700 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-orange-500 text-white rounded-lg shadow-lg p-12 text-center"
      >
        <h2 className="text-4xl font-bold mb-6">Need a Custom Solution?</h2>
        <p className="text-xl mb-8">Let's discuss how we can help you achieve your technology goals.</p>
        <button className="bg-white text-orange-500 px-8 py-3 rounded-lg font-bold hover:bg-orange-50 transition-colors">
          Contact Us Today
        </button>
      </motion.section>
    </main>
  );
}