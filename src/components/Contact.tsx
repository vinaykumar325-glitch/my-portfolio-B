import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import { ContactForm } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact: Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:chilamalavinaykumar@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message! Your email client will open to send the message.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50" id="contact">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in-up">
          Get In Touch
        </h2>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 animate-scale-in">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-white via-indigo-50 to-purple-50 rounded-lg p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-glow border-l-4 border-gradient-to-b from-indigo-500 to-purple-500">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-indigo-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 bg-gradient-to-r from-white to-indigo-50"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-indigo-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 bg-gradient-to-r from-white to-indigo-50"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full px-4 py-2 border-2 border-indigo-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 bg-gradient-to-r from-white to-indigo-50"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-glow"
              >
                <Send size={20} className="animate-float" />
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">Contact Information</h3>
              <div className="space-y-4">
                <a
                  href="mailto:chilamalavinaykumar@gmail.com"
                  className="flex items-center p-4 bg-gradient-to-r from-white to-blue-50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-glow border-l-4 border-blue-500"
                >
                  <Mail className="text-blue-600 mr-4 animate-float" size={24} />
                  <div>
                    <p className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Email</p>
                    <p className="text-gray-600">chilamalavinaykumar@gmail.com</p>
                  </div>
                </a>
                
                <a
                  href="tel:+917702184795"
                  className="flex items-center p-4 bg-gradient-to-r from-white to-green-50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-glow border-l-4 border-green-500"
                >
                  <Phone className="text-green-600 mr-4 animate-float" size={24} />
                  <div>
                    <p className="font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Phone</p>
                    <p className="text-gray-600">+91-7702184795</p>
                  </div>
                </a>
                
                <a
                  href="https://linkedin.com/in/chilamala-vinay-kumar-616a99280"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gradient-to-r from-white to-blue-50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-glow border-l-4 border-blue-600"
                >
                  <Linkedin className="text-blue-600 mr-4 animate-float" size={24} />
                  <div>
                    <p className="font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">LinkedIn</p>
                    <p className="text-gray-600">chilamala-vinay-kumar</p>
                  </div>
                </a>
                
                <a
                  href="https://github.com/vinaykumar325-glitch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gradient-to-r from-white to-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-glow border-l-4 border-gray-800"
                >
                  <Github className="text-gray-800 mr-4 animate-float" size={24} />
                  <div>
                    <p className="font-semibold bg-gradient-to-r from-gray-800 to-purple-600 bg-clip-text text-transparent">GitHub</p>
                    <p className="text-gray-600">vinaykumar325-glitch</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;