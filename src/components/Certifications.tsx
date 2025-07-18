import React from 'react';
import { Award, CheckCircle } from 'lucide-react';

const Certifications: React.FC = () => {
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
        
        <div className="max-w-4xl mx-auto animate-scale-in">
          <div className="bg-gradient-to-br from-white via-yellow-50 to-orange-50 rounded-lg p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-glow border-l-4 border-gradient-to-b from-yellow-500 to-red-500">
            <div className="flex items-center mb-6">
              <Award className="text-yellow-600 mr-3 animate-float" size={32} />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">Key Achievements</h3>
            </div>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0 animate-pulse" size={20} />
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