import React from 'react';
import { Code, Database, Globe, GitBranch, Brain, Dna } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6" />,
      skills: ['Python', 'JavaScript', 'HTML5', 'CSS3', 'SQL', 'PHP'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Backend Development',
      icon: <Database className="w-6 h-6" />,
      skills: ['Django', 'MySQL', 'SQLite', 'MongoDB'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Frontend Development',
      icon: <Globe className="w-6 h-6" />,
      skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Responsive Design'],
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Version Control & Tools',
      icon: <GitBranch className="w-6 h-6" />,
      skills: ['Git', 'GitHub', 'VS Code', 'Linux', 'Command Line'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Machine Learning & AI',
      icon: <Brain className="w-6 h-6" />,
      skills: ['Deep Learning', 'Artificial Intelligence', 'Data Analysis', 'Python Libraries'],
      color: 'from-pink-500 to-pink-600'
    },
    {
      title: 'Bioinformatics',
      icon: <Dna className="w-6 h-6" />,
      skills: ['BLAST', 'PyMOL', 'Swiss-Model', 'Maestro', 'Genomics', 'Proteomics', 'Molecular Docking'],
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              My Skills
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-105"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-gray-900/50 px-3 py-2 rounded-lg text-gray-300 text-sm border border-gray-700 hover:border-gray-600 transition-colors duration-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;