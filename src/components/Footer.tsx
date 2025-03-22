import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold text-black">dbughouse</span>
            </Link>
            <p className="text-gray-600">
              Revolutionizing learning through innovative technology solutions.
            </p>
          </div>

          <div>
            <h3 className="text-black font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-orange-500">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-orange-500">About</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-orange-500">Services</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-orange-500">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-black font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-600 hover:text-orange-500">Software Development</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-orange-500">Cybersecurity</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-orange-500">Network Infrastructure</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-orange-500">Smart Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-black font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-orange-500">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} dbughouse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;