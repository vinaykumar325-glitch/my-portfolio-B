import React from 'react';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';
import { Experience } from '../types';

const ExperienceSection: React.FC = () => {
  const experiences: Experience[] = [
    {
      id: '1',
      title: 'DevOps Intern',
      company: 'DevOps Academy',
      location: 'Bangalore',
      period: '2024',
      responsibilities: [
        'Worked on CI/CD pipelines for demo apps',
        'Automated Docker-based deployments',
        'Monitored 3 cloud environments and reduced manual effort by 40%',
        'Contributed to containerization and reduced resource usage by 20%'
      ],
      certificateUrl: 'https://drive.google.com/file/d/1nDsUdj_N4oQQUCLQZ66l2v2UEs0d4siB/view?usp=drive_link'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50" id="experience">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent animate-fade-in-up">
          Experience & Internships
        </h2>
        
        <div className="max-w-4xl mx-auto animate-scale-in">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="bg-gradient-to-br from-white via-cyan-50 to-blue-50 rounded-lg p-8 shadow-xl hover:shadow-2xl transition-all duration-500 mb-8 transform hover:scale-105 hover:-translate-y-2 animate-glow border-l-4 border-gradient-to-b from-cyan-500 to-blue-500 animate-slide-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                    🚀 {exp.title}
                  </h3>
                  <div className="flex items-center text-lg bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold mb-2">
                    {exp.company}
                    <span className="mx-2">•</span>
                    <span className="flex items-center">
                      <MapPin size={16} className="mr-1 text-red-500 animate-ping-slow" />
                      {exp.location}
                    </span>
                  </div>
                </div>
                <div className="flex items-center text-sm bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent font-semibold">
                  <Calendar size={16} className="mr-1 text-orange-500" />
                  {exp.period}
                </div>
              </div>
              
              <ul className="space-y-3 mb-6">
                {exp.responsibilities.map((responsibility, respIndex) => (
                  <li 
                    key={respIndex} 
                    className="flex items-start transform hover:translate-x-2 transition-transform duration-300"
                    style={{ animationDelay: `${respIndex * 0.1}s` }}
                  >
                    <span className="text-purple-500 mr-3 font-bold animate-ping-slow">•</span>
                    <span className="text-gray-600">{responsibility}</span>
                  </li>
                ))}
              </ul>
              
              {exp.certificateUrl && (
                <a
                  href={exp.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-6 py-2 rounded-full font-semibold flex items-center gap-2 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 transition-all duration-300 transform hover:scale-110 w-fit shadow-lg hover:shadow-xl animate-pulse-glow"
                >
                  <ExternalLink size={18} className="animate-bounce-slow" />
                  View Certificate
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;