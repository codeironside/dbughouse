import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Code2, LockKeyhole, Network, Binary, TerminalSquare, Fingerprint } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "Excellence",
      description: "Cutting-edge solutions that redefine industry standards",
      bg: "bg-gradient-to-br from-cyan-500 to-blue-600"
    },
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      title: "Integrity",
      description: "Ethical operations with complete transparency",
      bg: "bg-gradient-to-br from-purple-500 to-indigo-600"
    },
    {
      icon: <Network className="w-10 h-10" />,
      title: "Reliability",
      description: "99.99% uptime with failproof architectures",
      bg: "bg-gradient-to-br from-emerald-500 to-teal-600"
    },
    {
      icon: <LockKeyhole className="w-10 h-10" />,
      title: "Security",
      description: "Military-grade protection for your digital assets",
      bg: "bg-gradient-to-br from-rose-500 to-pink-600"
    }
  ];

  const features = [
    {
      icon: <Binary className="w-8 h-8" />,
      title: "Custom Solutions",
      description: "Bespoke systems engineered for your exact threat profile"
    },
    {
      icon: <TerminalSquare className="w-8 h-8" />,
      title: "Scalable Architecture",
      description: "Modular designs that grow with your security needs"
    },
    {
      icon: <Fingerprint className="w-8 h-8" />,
      title: "Zero-Trust Compliance",
      description: "End-to-end verification at every access point"
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Proven Frameworks",
      description: "Battle-tested security patterns and protocols"
    }
  ];

  return (
    <main className="flex-grow">
      {/* Cyber Grid Background - Maintained as requested */}
      <div className="fixed inset-0 -z-10 overflow-hidden opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-transparent via-transparent to-gray-900"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        {/* Hero Section with Enhanced Cyber Elements */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-2xl bg-gray-900/90 border border-gray-700 backdrop-blur-sm mb-16 shadow-2xl"
        >
          {/* Animated connection nodes */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div 
                key={i}
                className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  boxShadow: '0 0 10px 2px rgba(34, 211, 238, 0.7)'
                }}
              />
            ))}
          </div>

          <div className="relative px-8 py-12 sm:p-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">dbughouse</span> Cyber Systems
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mb-10">
              We architect the digital immune systems for tomorrow's enterprises. Our quantum-resistant frameworks and adaptive security matrices redefine cyber resilience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-500/40 transition-all duration-300">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-cyan-400">01</span> Our Vision
                </h2>
                <p className="text-gray-300">
                  To create self-healing digital ecosystems where security evolves faster than threats through continuous adversarial learning.
                </p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 hover:border-purple-500/40 transition-all duration-300">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-purple-400">02</span> Our Mission
                </h2>
                <p className="text-gray-300">
                  To deploy autonomous defense grids that predict, prevent, and neutralize cyber threats before they manifest.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Core Values - Holographic Cards */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Principles</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${value.bg} rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl hover:shadow-[0_0_30px_-5px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-2`}
              >
                <div className="p-8">
                  <div className="mb-6 text-white">{value.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-200">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Differentiators - Cyber Terminal UI */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900/70 border border-gray-700 rounded-2xl overflow-hidden shadow-xl"
        >
          <div className="px-6 py-4 border-b border-gray-700 flex gap-2 bg-gradient-to-r from-gray-800 to-gray-900">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="ml-auto text-sm text-gray-400 font-mono">differential_analysis.exe</div>
          </div>
          <div className="p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">[root@dbughouse]</span> # differentials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex-shrink-0 mt-1 text-emerald-400 group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      <span className="text-emerald-400">$</span> {feature.title}
                    </h3>
                    <p className="text-gray-400 font-mono group-hover:text-gray-300 transition-colors duration-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 pt-8 border-t border-gray-700">
              <p className="text-gray-400 font-mono">
                <span className="text-emerald-400">[✓]</span> All systems operational. Security posture: <span className="text-green-400 font-bold">OPTIMAL</span> | <span className="text-cyan-400">Last scan: {new Date().toLocaleString()}</span>
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}