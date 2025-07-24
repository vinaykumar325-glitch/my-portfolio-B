import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { Education } from '../types';

const EducationSection: React.FC = () => {
  const education: Education[] = [
    {
      id: '1',
      degree: 'B.Tech in Computer Science',
      institution: 'Gates Institute of Technology',
      period: '2021–2024',
      cgpa: '7.6'
    },
    {
      id: '2',
      degree: 'Diploma',
      institution: 'PVKK Institute of Technology, Anantapur',
      period: '2018–2021',
      cgpa: '8.3'
    },
    {
      id: '3',
      degree: 'SSC',
      institution: 'ZPHS Fort School, Gooty',
      period: '2017–2018',
      cgpa: '8.5'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50" id="education">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent animate-fade-in-up">
          Education
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-6 animate-scale-in">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className="bg-gradient-to-r from-emerald-100 via-teal-100 to-cyan-100 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 animate-glow border-l-4 border-gradient-to-b from-emerald-500 to-cyan-500 animate-slide-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <GraduationCap className="text-emerald-600 mr-3 animate-wiggle" size={24} />
                  <h3 className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">{edu.degree}</h3>
                </div>
                <div className="flex items-center text-sm bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent font-semibold">
                  <Calendar size={16} className="mr-1 text-orange-500" />
                  {edu.period}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <p className="text-gray-600 font-medium">{edu.institution}</p>
                <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-shadow duration-200 animate-pulse-glow">
                  CGPA: {edu.cgpa}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;