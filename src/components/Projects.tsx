import React from 'react';
import { ExternalLink, Github, Code, Palette, MessageSquare, Shield, Utensils } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Django CRUD Application',
      description: 'A comprehensive full-stack web application built with Django featuring complete CRUD operations, user authentication, responsive design, and PostgreSQL database integration.',
      technologies: ['Python', 'Django', 'PostgreSQL', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      icon: <Code className="w-6 h-6" />,
      github: 'https://github.com/logasowndharya/django-crud',
      demo: '#',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Meal Planner Application',
      description: 'A comprehensive meal planning web application that helps users organize their weekly meals, manage recipes, create shopping lists, and track nutritional information with an intuitive interface.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage', 'Responsive Design', 'JSON'],
      icon: <Utensils className="w-6 h-6" />,
      github: 'https://github.com/LogaSowndharya/meal-planner',
      demo: 'https://logasowndharya.github.io/meal-planner/',
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Color Flip Game',
      description: 'An interactive color-guessing game with dynamic backgrounds, scoring system, responsive design, and engaging user experience. Features smooth animations and modern UI.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'DOM Manipulation', 'Responsive Design'],
      icon: <Palette className="w-6 h-6" />,
      github: 'https://github.com/logasowndharya/colorflip',
      demo: 'https://logasowndharya.github.io/colorflip/',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Quote Generator',
      description: 'A dynamic web application that fetches inspirational quotes from external APIs with smooth animations, social sharing features, and modern responsive design.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'API Integration', 'JSON', 'Fetch API'],
      icon: <MessageSquare className="w-6 h-6" />,
      github: 'https://github.com/LogaSowndharya/quotegenerate',
      demo: 'https://logasowndharya.github.io/quotegenerate/',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Vaccine Design for Omicron Variant',
      description: 'Bioinformatics research project focusing on computational vaccine design using molecular docking techniques, protein modeling, and advanced bioinformatics tools.',
      technologies: ['Bioinformatics', 'PyMOL', 'Swiss-Model', 'Molecular Docking', 'Python', 'Maestro'],
      icon: <Shield className="w-6 h-6" />,
      github: '#',
      demo: '#',
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${project.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {project.icon}
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-800/50 px-3 py-1 rounded-full text-xs text-gray-300 border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  {project.github !== '#' && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;