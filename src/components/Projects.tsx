import React from 'react';
import { Github, ExternalLink, Calendar, Award } from 'lucide-react';
import { Project } from '../types';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: '1',
      title: 'Ultimate CI/CD',
      period: 'Jun 2024 – Aug 2024',
      description: 'Built a comprehensive Jenkins CI/CD pipeline that significantly improved deployment efficiency and code quality.',
      achievements: [
        'Built a Jenkins CI/CD pipeline reducing deployment time by 50%',
        'Integrated SonarQube for static code quality checks',
        'Deployed 2 Python microservices with 100% uptime using Kubernetes'
      ],
      technologies: ['Jenkins', 'Docker', 'SonarQube', 'Kubernetes'],
      githubUrl: 'https://github.com/vinaykumar325-glitch/Jenkins-ultimate-Zero-To-Hero.git'
    },
    {
      id: '2',
      title: 'Terraform Automation',
      period: 'Oct 2024 – Dec 2024',
      description: 'Automated AWS infrastructure provisioning using reusable Terraform modules for improved consistency and efficiency.',
      achievements: [
        'Automated AWS infrastructure using reusable Terraform modules',
        'Reduced setup time by 70% and improved provisioning consistency by 90%'
      ],
      technologies: ['Terraform', 'AWS'],
      githubUrl: 'https://github.com/vinaykumar325-glitch/terraform-eks-project1.git'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50" id="projects">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent animate-fade-in-up">
          Projects
        </h2>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 animate-scale-in">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-gradient-to-br from-white via-purple-50 to-pink-50 rounded-lg p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105 animate-glow border-2 border-gradient-to-r from-purple-200 to-pink-200"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{project.title}</h3>
                <div className="flex items-center text-sm bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent font-semibold">
                  <Calendar size={16} className="mr-1 text-orange-500" />
                  {project.period}
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-3 flex items-center">
                  <Award size={18} className="mr-2 text-green-600 animate-float" />
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {project.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start">
                      <span className="text-green-500 mr-2 font-bold animate-pulse">✓</span>
                      <span className="text-gray-600">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-white text-sm rounded-full font-medium hover:scale-110 transition-transform duration-200 shadow-md animate-float"
                      style={{ animationDelay: `${techIndex * 0.1}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {project.githubUrl && (
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-gray-800 via-purple-800 to-pink-800 text-white px-6 py-2 rounded-full font-semibold flex items-center gap-2 hover:from-gray-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl animate-glow"
                  >
                    <Github size={18} className="animate-float" />
                    View Code
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;