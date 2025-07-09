
import React, { useState } from 'react';
import { Users, Code, Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/pramod-lohra',
      color: 'hover:text-blue-500'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/pramodlohra',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/pramodlohra',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/pramodlohra',
      color: 'hover:text-pink-500'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com/@pramodlohra',
      color: 'hover:text-red-500'
    }
  ];

  return (
    <section className="py-20 px-4" id="contact">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300">
            Ready to bring your ideas to life? Let's discuss your next project.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Get In Touch</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm always interested in hearing about new opportunities and exciting projects. 
                Whether you're looking for a developer to join your team or need help with a specific project, 
                I'd love to hear from you.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm">
                <Users size={32} className="mx-auto mb-3 text-indigo-400" />
                <div className="text-white font-semibold">Available for</div>
                <div className="text-gray-400 text-sm">Full-time & Freelance</div>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm">
                <Code size={32} className="mx-auto mb-3 text-purple-400" />
                <div className="text-white font-semibold">Response Time</div>
                <div className="text-gray-400 text-sm">Within 24 hours</div>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 transition-colors duration-200"
                required
              />
            </div>
            
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 transition-colors duration-200"
                required
              />
            </div>
            
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 transition-colors duration-200 resize-none"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold hover:scale-105 transition-transform duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
        
        <div className="text-center mt-16 pt-8 border-t border-white/10">
          <div className="flex justify-center space-x-6 mb-6">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-white/5 rounded-full backdrop-blur-sm text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/10 animate-fade-in`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  aria-label={social.name}
                >
                  <IconComponent size={24} />
                </a>
              );
            })}
          </div>
          
          <p className="text-gray-400">
            © 2024 Pramod Lohra. Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
