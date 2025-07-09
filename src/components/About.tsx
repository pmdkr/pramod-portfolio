
import React from 'react';
import { User, Briefcase, Calendar } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: "2024 - Present",
      title: "Senior Software Developer",
      company: "Tech Solutions Inc.",
      description: "Leading development teams and architecting scalable solutions for enterprise clients."
    },
    {
      year: "2022 - 2024",
      title: "Full Stack Developer",
      company: "Innovation Labs",
      description: "Developed end-to-end web applications using modern technologies and frameworks."
    },
    {
      year: "2021 - 2022",
      title: "Junior Software Developer",
      company: "StartUp Hub",
      description: "Started my journey in software development, focusing on frontend technologies and user experience."
    }
  ];

  return (
    <section className="py-20 px-4" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="w-64 h-64 mx-auto bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <User size={96} className="text-indigo-400" />
            </div>
            
            <div className="space-y-6 text-gray-300">
              <h3 className="text-2xl font-semibold text-white">
                Passionate Software Developer
              </h3>
              <p className="text-lg leading-relaxed">
                With 3 years of hands-on experience in software development, I specialize in creating 
                robust, scalable applications that solve real-world problems. My journey has been 
                focused on delivering high-quality code and exceptional user experiences.
              </p>
              <p className="text-lg leading-relaxed">
                I thrive in collaborative environments and am always eager to learn new technologies 
                and tackle challenging projects. My experience spans across various domains, from 
                web development to system architecture.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl font-bold text-indigo-400">3+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl font-bold text-purple-400">50+</div>
                  <div className="text-sm text-gray-400">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-indigo-400" size={28} />
              <h3 className="text-2xl font-semibold text-white">Career Timeline</h3>
            </div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-500"></div>
              
              {timeline.map((item, index) => (
                <div 
                  key={index} 
                  className="relative flex items-start gap-6 pb-8 animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <Calendar size={20} className="text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm font-medium text-indigo-400 bg-indigo-400/20 px-3 py-1 rounded-full">
                        {item.year}
                      </span>
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-purple-400 font-medium mb-3">{item.company}</p>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
