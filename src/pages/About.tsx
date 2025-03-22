import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Shield, Award } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Award className="w-12 h-12 text-orange-500" />,
      title: "Excellence",
      description: "Delivering high-quality, industry-leading solutions."
    },
    {
      icon: <Shield className="w-12 h-12 text-orange-500" />,
      title: "Integrity",
      description: "Acting ethically and transparently in all interactions."
    },
    {
      icon: <Target className="w-12 h-12 text-orange-500" />,
      title: "Reliability",
      description: "Ensuring consistently dependable services."
    },
    {
      icon: <Users className="w-12 h-12 text-orange-500" />,
      title: "Security",
      description: "Prioritizing the safety and privacy of our clients through robust systems."
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
        <h1 className="text-5xl font-bold text-black mb-8">About dbughouse</h1>
        <p className="text-xl text-gray-700 mb-8">
          dbughouse is a forward-thinking IT and Security company dedicated to addressing technology gaps across industries. By offering innovative, secure, and tailored solutions, we aim to exceed client expectations and transform how businesses and individuals interact with technology.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="bg-orange-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-black mb-4">Our Vision</h2>
            <p className="text-gray-700">
              To effectively mitigate technology risks for users, ensuring reliable, resilient, and efficient systems that empower modern businesses and homes.
            </p>
          </div>
          
          <div className="bg-orange-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-black mb-4">Our Mission</h2>
            <p className="text-gray-700">
              To reintroduce reliable, secure, and resource-efficient technology services, tailored to meet the evolving needs of businesses and individuals.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-black mb-8">Our Core Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-black mb-2">{value.title}</h3>
              <p className="text-gray-700">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white/80 backdrop-blur-md rounded-lg shadow-lg p-8"
      >
        <h2 className="text-3xl font-bold text-black mb-8">What Sets Us Apart</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-black mb-4">Custom Solutions</h3>
            <p className="text-gray-700 mb-6">
              We tailor every project to meet specific client needs, ensuring precision and relevance.
            </p>
            
            <h3 className="text-2xl font-bold text-black mb-4">Scalable and Future-Ready</h3>
            <p className="text-gray-700">
              Our solutions are designed to grow with our clients, adapting to technological advancements and business expansion.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-black mb-4">Compliance and Security</h3>
            <p className="text-gray-700 mb-6">
              We adhere strictly to industry standards, ensuring legal and data security compliance in every project.
            </p>
            
            <h3 className="text-2xl font-bold text-black mb-4">Proven Frameworks</h3>
            <p className="text-gray-700">
              Leveraging cutting-edge technologies and methodologies, we deliver projects on time and with measurable success.
            </p>
          </div>
        </div>
      </motion.section>
    </main>
  );
}