import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <div className="w-64 h-64 mx-auto md:mx-0 mb-8 relative">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                  <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                    <img 
                      src="/profile.jpg" 
                      alt="Loga Sowndharya K" 
                      className="w-56 h-56 rounded-full object-cover"
                      onError={(e) => {
                        // Fallback to initials if image fails to load
                        const target = e.currentTarget as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <div className="w-56 h-56 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-6xl font-bold text-white" style={{display: 'none'}}>
                      LS
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Final-year <span className="text-blue-400 font-semibold">Bioinformatics</span> student with a growing passion for 
                <span className="text-purple-400 font-semibold"> Full Stack Web Development</span>. While my academic background has equipped me with analytical and problem-solving skills, my interest in technology has led me to pursue hands-on experience in web development.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                I am passionate about creating innovative solutions that bridge the gap between 
                <span className="text-blue-400 font-semibold"> biological sciences</span> and 
                <span className="text-purple-400 font-semibold"> modern technology</span>. My journey combines rigorous scientific training with cutting-edge web development skills.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Currently focusing on <span className="text-blue-400 font-semibold">Python</span>, 
                <span className="text-purple-400 font-semibold"> Django</span>, and modern web technologies to build robust, scalable applications that make a real-world impact.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                  <h4 className="text-blue-400 font-semibold mb-2">Education</h4>
                  <p className="text-gray-300 text-sm">Final Year Bioinformatics</p>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                  <h4 className="text-purple-400 font-semibold mb-2">Focus</h4>
                  <p className="text-gray-300 text-sm">Full Stack Development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;