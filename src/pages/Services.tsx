import React from 'react';
import { 
  motion,
  useMotionValue,
  useTransform,
  useMotionTemplate 
} from 'framer-motion';
import { 
  BrainCircuit, 
  CircuitBoard, 
  ShieldHalf, 
  Cpu, 
  Network, 
  LockKeyhole, 
  Cloud, 
  Binary, 
  Radar, 
  Atom 
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Atom className="w-8 h-8" />,
      title: "Quantum-Safe Development",
      description: "Post-quantum cryptographic solutions for future-proof systems",
      gradient: "from-violet-600 to-fuchsia-500",
      features: ["Lattice-based Cryptography", "Quantum Key Distribution", "Zero-Trust Architectures", "Entanglement Protocols"]
    },
    {
      icon: <CircuitBoard className="w-8 h-8" />,
      title: "Neuro-Synaptic Security",
      description: "Biologically-inspired threat detection networks",
      gradient: "from-cyan-500 to-sky-600",
      features: ["Neural Firewalls", "Cognitive Behavior Analysis", "Predictive Threat Modeling", "Adaptive Immune Systems"]
    },
    {
      icon: <Binary className="w-8 h-8" />,
      title: "Decentralized Protection",
      description: "Blockchain-based distributed security meshes",
      gradient: "from-emerald-500 to-teal-600",
      features: ["Immutable Audit Trails", "Smart Contract Safeguards", "Tokenized Access", "Consensus Verification"]
    },
    {
      icon: <ShieldHalf className="w-8 h-8" />,
      title: "Holographic Firewalls",
      description: "3D spatial security matrices",
      gradient: "from-rose-500 to-pink-600",
      features: ["Multi-Dimensional Filtering", "Phase-Shifting Rules", "Hologram Integrity Checks", "Quantum Tunneling Prevention"]
    },
    {
      icon: <BrainCircuit className="w-8 h-8" />,
      title: "Ethical Counter-AI",
      description: "Defensive artificial intelligence systems",
      gradient: "from-amber-500 to-orange-600",
      features: ["Adversarial Training", "AI Behavior Analysis", "Deepfake Detection", "Neural Obfuscation"]
    },
    {
      icon: <Radar className="w-8 h-8" />,
      title: "Morphic Encryption",
      description: "Self-evolving cryptographic protocols",
      gradient: "from-indigo-500 to-blue-600",
      features: ["Shape-Shifting Ciphers", "DNA-based Keys", "Ambient Noise Encryption", "Temporal Algorithms"]
    }
  ];

  // Rest of the component remains the same as previous futuristic version
  // ...


  return (
    <main className="flex-grow">
      {/* Quantum Field Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden opacity-15">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent animate-pulse"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_2px),linear-gradient(to_bottom,#80808012_1px,transparent_2px)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#ffffff10_0%,#ffffff00_20%,#ffffff00_80%,#ffffff10_100%)] animate-spin-slow"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative overflow-visible"
        >
          <div className="quantum-tunnel-effect absolute -inset-8 bg-[linear-gradient(to_right,var(--tw-gradient-stops))] from-transparent via-purple-500/10 to-transparent blur-2xl"></div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-[linear-gradient(to_right,var(--tw-gradient-stops))] from-cyan-400 to-blue-500 mb-12 text-center">
            DbugHouse Services
          </h1>

          {/* Quantum Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 transform perspective-1000">
            {services.map((service, index) => {
              const mouseX = useMotionValue(0);
              const mouseY = useMotionValue(0);
              const rotateX = useTransform(mouseY, [0, 1], [5, -5]);
              const rotateY = useTransform(mouseX, [0, 1], [-5, 5]);
              const transform = useMotionTemplate`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

              return (
                <motion.div
                  key={index}
                  className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700 rounded-3xl p-8 shadow-2xl cursor-crosshair"
                  style={{ transform }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    mouseX.set((e.clientX - rect.left) / rect.width);
                    mouseY.set((e.clientY - rect.top) / rect.height);
                  }}
                  onMouseLeave={() => {
                    mouseX.set(0);
                    mouseY.set(0);
                  }}
                >
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-20 blur-xl animate-pulse`}></div>
                  <div className="relative z-10">
                    <div className={`mb-8 p-4 w-fit rounded-2xl bg-gradient-to-br ${service.gradient}`}>
                      {service.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">{service.title}</h2>
                    <p className="text-gray-400 mb-6 font-light">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center text-cyan-400 group">
                          <span className="w-3 h-3 bg-current rounded-full mr-3 shadow-glow-cyan"></span>
                          <span className="text-gray-300 group-hover:text-white transition-colors">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Hyperspace CTA */}
        <motion.section
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 50 }}
          className="mt-28 relative bg-gray-900 border border-cyan-400/30 rounded-[4rem] overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-purple-500/10 animate-pan"></div>
          
          <div className="relative px-12 py-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,var(--tw-gradient-stops))] from-cyan-400 to-blue-500">
                Initiate Cyber Protocol
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Engage our quantum-safe communication channel to begin your security metamorphosis
            </p>
            <button className="relative overflow-hidden px-16 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg transform transition-all hover:scale-105 hover:shadow-cyan-glow">
              <span className="relative z-10">Initialize Handshake</span>
              <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--tw-gradient-stops))] from-white/20 via-transparent to-white/20 animate-shine"></div>
            </button>
          </div>
        </motion.section>
      </div>
    </main>
  );
}