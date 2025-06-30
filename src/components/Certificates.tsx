import React, { useState } from 'react';
import { Download, Eye, Award, Code, Globe, FileText, Dna, Heart } from 'lucide-react';

const Certificates = () => {
  const [activeTab, setActiveTab] = useState('co-curricular');

  const coCurricularCertificates = [
    {
      title: 'Programming in Python',
      description: 'Comprehensive certification in Python programming covering fundamentals, object-oriented programming, data structures, and advanced concepts.',
      icon: <Code className="w-6 h-6" />,
      file: '/documents/python copy.pdf',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Front End Web Development',
      description: 'Complete certification in modern frontend development including HTML5, CSS3, JavaScript, responsive design, and modern frameworks.',
      icon: <Globe className="w-6 h-6" />,
      file: '/documents/web design copy.pdf',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Applied Deep Learning & AI in Bioinformatics',
      description: 'Specialized workshop certification from IIT Madras focusing on artificial intelligence applications in biological sciences and research.',
      icon: <Award className="w-6 h-6" />,
      file: '/documents/workshop iit.pdf',
      color: 'from-green-500 to-green-600'
    },
    {
      title: '3D Bioprinting',
      description: 'Advanced certification in 3D bioprinting techniques, covering tissue engineering, biomaterials, and applications in regenerative medicine.',
      icon: <Dna className="w-6 h-6" />,
      file: '/documents/3d bioprinting.pdf',
      color: 'from-teal-500 to-teal-600'
    }
  ];

  const extraCurricularCertificates = [
    {
      title: 'Professional Typewriting Certificate',
      description: 'Professional typewriting certification demonstrating proficiency in typing speed and accuracy with excellent keyboard skills.',
      icon: <FileText className="w-6 h-6" />,
      file: '/documents/typewriting.pdf',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      title: 'Yoga Certification',
      description: 'Certified yoga instructor qualification covering various yoga practices, meditation techniques, and wellness principles for holistic health.',
      icon: <Heart className="w-6 h-6" />,
      file: '/documents/yoga.pdf',
      color: 'from-emerald-500 to-emerald-600'
    }
  ];

  const handleViewDocument = (filename: string) => {
    if (filename !== '#') {
      // Open in new tab
      window.open(filename, '_blank');
    }
  };

  const handleDownloadDocument = (filename: string, title: string) => {
    if (filename !== '#') {
      const link = document.createElement('a');
      link.href = filename;
      link.download = filename.split('/').pop() || 'document.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section id="certificates" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              My Certificates
            </span>
          </h2>
          
          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-800/70 p-1 rounded-lg inline-flex">
              <button 
                onClick={() => setActiveTab('co-curricular')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === 'co-curricular' 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Co-curricular
              </button>
              <button 
                onClick={() => setActiveTab('extra-curricular')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === 'extra-curricular' 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Extra-curricular
              </button>
            </div>
          </div>
          
          {/* Co-curricular certificates */}
          {activeTab === 'co-curricular' && (
            <div className="grid md:grid-cols-2 gap-8">
              {coCurricularCertificates.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${cert.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {cert.icon}
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-white mb-3">{cert.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{cert.description}</p>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    {cert.file !== '#' && (
                      <>
                        <button
                          onClick={() => handleViewDocument(cert.file)}
                          className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                        >
                          <Eye size={16} />
                          View Document
                        </button>
                        <button
                          onClick={() => handleDownloadDocument(cert.file, cert.title)}
                          className="flex items-center justify-center gap-2 border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                        >
                          <Download size={16} />
                          Download
                        </button>
                      </>
                    )}
                    {cert.file === '#' && (
                      <div className="text-gray-500 text-sm italic">
                        Certificate available upon request
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Extra-curricular certificates */}
          {activeTab === 'extra-curricular' && (
            <div className="grid md:grid-cols-2 gap-8">
              {extraCurricularCertificates.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${cert.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {cert.icon}
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-white mb-3">{cert.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{cert.description}</p>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    {cert.file !== '#' && (
                      <>
                        <button
                          onClick={() => handleViewDocument(cert.file)}
                          className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                        >
                          <Eye size={16} />
                          View Document
                        </button>
                        <button
                          onClick={() => handleDownloadDocument(cert.file, cert.title)}
                          className="flex items-center justify-center gap-2 border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                        >
                          <Download size={16} />
                          Download
                        </button>
                      </>
                    )}
                    {cert.file === '#' && (
                      <div className="text-gray-500 text-sm italic">
                        Certificate available upon request
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">Looking for more details about my background and experience?</p>
            <button
              onClick={() => handleDownloadDocument('/Resume.pdf', 'Complete Resume')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto"
            >
              <Download size={20} />
              Download Complete Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;