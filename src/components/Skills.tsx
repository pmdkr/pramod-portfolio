
import React from 'react';
import { Code, Layout, FileText } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Layout,
      skills: ["React.js", "Vue.js", "JavaScript/TypeScript", "HTML5/CSS3", "Tailwind CSS", "Responsive Design"]
    },
    {
      title: "Backend Development", 
      icon: Code,
      skills: ["Node.js", "Python", "RESTful APIs", "Database Design", "MongoDB", "PostgreSQL"]
    },
    {
      title: "Tools & Technologies",
      icon: FileText,
      skills: ["Git/GitHub", "Docker", "AWS", "CI/CD", "Agile/Scrum", "Testing Frameworks"]
    }
  ];

  return (
    <section className="py-20 px-4" id="skills">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 hover:scale-105 transition-transform duration-300">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto animate-pulse"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:rotate-1 group animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                  <category.icon size={24} className="text-white group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-indigo-300 transition-colors duration-300">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill}
                    className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 hover:scale-105 transition-all duration-300 group/skill animate-fade-in"
                    style={{ animationDelay: `${(index * 200) + (skillIndex * 100)}ms` }}
                  >
                    <span className="text-gray-300 group-hover/skill:text-white transition-colors duration-300">{skill}</span>
                    <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full group-hover/skill:animate-ping"></div>
                  </div>
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
