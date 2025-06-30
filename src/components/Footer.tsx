import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  Loga Sowndharya K
                </span>
              </h3>
              <p className="text-gray-400 mb-4">Python Full Stack Developer</p>
              <p className="text-gray-500 text-sm">
                Transforming ideas into robust digital experiences through innovative web development solutions.
              </p>
            </div>
            
            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['About', 'Skills', 'Projects', 'Certificates', 'Contact'].map((link) => (
                  <button
                    key={link}
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="block text-gray-400 hover:text-blue-400 transition-colors duration-200 mx-auto"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Social Links */}
            <div className="text-center md:text-right">
              <h4 className="text-white font-semibold mb-4">Connect With Me</h4>
              <div className="flex justify-center md:justify-end space-x-4 mb-4">
                <a
                  href="https://github.com/logasowndharya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
                >
                  <Github className="w-5 h-5 text-gray-400 hover:text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/loga-sowndharya-716618284/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin className="w-5 h-5 text-gray-400 hover:text-blue-400" />
                </a>
                <a
                  href="mailto:logasowndharya16@gmail.com"
                  className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
                >
                  <Mail className="w-5 h-5 text-gray-400 hover:text-green-400" />
                </a>
              </div>
              <p className="text-gray-500 text-sm">
                Available for freelance projects and full-time opportunities
              </p>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm mb-4 md:mb-0">
                © {currentYear} Loga Sowndharya K. All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500" fill="currentColor" />
                <span>using React & Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;