import React from 'react';
import { Award, CheckCircle, ExternalLink, Calendar } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      id: '1',
      title: 'Introduction to Generative AI Studio',
      issuer: 'Google Cloud & Simplilearn SkillUp',
      date: 'July 2025',
      code: '8675032',
      description: 'Completed foundational training on Generative AI using Google Cloud\'s AI Studio',
      skills: 'Gained hands-on understanding of tools, capabilities, and responsible AI practices',
      certificateUrl: 'https://drive.google.com/file/d/1Xor_Lmmkv9mxMqzka_MI9kyXXyNqMlGa/view?usp=sharing'
    }
  ];

  const achievements = [
    'Completed 4+ DevOps mini-projects',
    'Automated deployments and cloud provisioning using Jenkins and Terraform',
    'Improved system uptime and delivery speed through pipeline optimizations'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50" id="certifications">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent animate-fade-in-up">
          Certifications & Achievements
        </h2>
        
        <div className="max-w-6xl mx-auto space-y-8 animate-scale-in">
          {/* Certifications */}
          <div className="grid md:grid-cols-1 gap-8 mb-12">
            {certifications.map((cert, index) => (
              <div
                key={cert.id}
                className="bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-lg p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-slide-in-up border-l-4 border-gradient-to-b from-blue-500 to-purple-500"
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  animation: 'slideInUp 0.8s ease-out forwards, float 3s ease-in-out infinite 2s'
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Award className="text-blue-600 mr-3 animate-spin-slow" size={32} />
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {cert.title}
                    </h3>
                  </div>
                  <div className="flex items-center text-sm bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent font-semibold">
                    <Calendar size={16} className="mr-1 text-orange-500" />
                    {cert.date}
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                    {cert.issuer}
                  </p>
                  <p className="text-sm text-gray-500 mb-3">Certificate Code: {cert.code}</p>
                </div>
                
                <div className="mb-6">
                  <p className="text-gray-600 mb-3">{cert.description}</p>
                  <p className="text-gray-600 italic">{cert.skills}</p>
                </div>
                
                <a
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:from-blue-600 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-110 w-fit shadow-lg hover:shadow-xl animate-pulse-glow"
                >
                  <ExternalLink size={18} className="animate-bounce-slow" />
                  View Certificate
                </a>
              </div>
            ))}
          </div>
          
          {/* Achievements */}
          <div className="bg-gradient-to-br from-white via-yellow-50 to-orange-50 rounded-lg p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:rotate-1 animate-glow border-l-4 border-gradient-to-b from-yellow-500 to-red-500">
            <div className="flex items-center mb-6">
              <Award className="text-yellow-600 mr-3 animate-wiggle" size={32} />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">Key Achievements</h3>
            </div>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="flex items-start transform hover:translate-x-2 transition-transform duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0 animate-ping-slow" size={20} />
                  <p className="text-gray-600 text-lg">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;