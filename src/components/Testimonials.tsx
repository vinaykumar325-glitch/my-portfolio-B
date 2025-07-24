import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: '1',
      quote: 'Vinay shows great understanding of DevOps concepts and delivers real results.',
      author: 'DevOps Academy Mentor'
    },
    {
      id: '2',
      quote: 'A reliable and detail-oriented team member with strong problem-solving skills.',
      author: 'Project Collaborator'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50" id="testimonials">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent animate-fade-in-up">
          Testimonials
        </h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 animate-scale-in">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-gradient-to-br from-rose-100 via-pink-100 to-purple-100 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:rotate-1 animate-glow border-l-4 border-gradient-to-b from-rose-500 to-purple-500 animate-flip-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Quote className="text-rose-600 mb-4 animate-wiggle" size={32} />
              <p className="text-gray-600 text-lg mb-4 italic">
                "{testimonial.quote}"
              </p>
              <p className="bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent font-bold">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;