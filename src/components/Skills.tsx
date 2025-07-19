import React from 'react';
import { Skill } from '../types';

const Skills: React.FC = () => {
  const skills: Skill[] = [
    {
      category: 'Languages',
      skills: ['Python', 'DSA in Python', 'Shell']
    },
    {
      category: 'DevOps Tools',
      skills: ['Jenkins', 'Docker', 'SonarQube', 'Kubernetes', 'Terraform']
    },
    {
      category: 'Cloud Platforms',
      skills: ['AWS (EC2, IAM, S3, EKS, VPC)', 'GCP']
    },
    {
      category: 'Version Control',
      skills: ['Git', 'GitHub']
    },
    {
      category: 'Databases',
      skills: ['MySQL']
    },
    {
      category: 'Operating Systems',
      skills: ['Linux']
    },
    {
      category: 'Soft Skills',
      skills: ['Problem-Solving', 'Public Speaking', 'Team Collaboration']
    }
  ];

  const getSkillColor = (category: string) => {
    const colors = {
      'Languages': 'from-blue-500 via-cyan-500 to-teal-500',
      'DevOps Tools': 'from-purple-500 via-pink-500 to-red-500',
      'Cloud Platforms': 'from-indigo-500 via-blue-500 to-cyan-500',
      'Version Control': 'from-green-500 via-emerald-500 to-teal-500',
      'Databases': 'from-orange-500 via-red-500 to-pink-500',
      'Operating Systems': 'from-red-500 via-rose-500 to-pink-500',
      'Soft Skills': 'from-pink-500 via-purple-500 to-indigo-500'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50" id="skills">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in-up">
          Skills & Tech Stack
        </h2>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-scale-in">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-glow border-l-4 border-gradient-to-b"
              style={{
                borderImage: `linear-gradient(to bottom, ${getSkillColor(skillGroup.category).split(' ')[1]}, ${getSkillColor(skillGroup.category).split(' ')[3]}) 1`,
                animationDelay: `${index * 0.1}s`
              }}
            >
              <h3 className={`text-xl font-semibold mb-4 bg-gradient-to-r ${getSkillColor(skillGroup.category)} bg-clip-text text-transparent`}>
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1 bg-gradient-to-r ${getSkillColor(skillGroup.category)} text-white text-sm rounded-full font-medium hover:scale-110 transition-transform duration-200 shadow-md hover:shadow-lg animate-float`}
                    style={{ animationDelay: `${skillIndex * 0.1}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;