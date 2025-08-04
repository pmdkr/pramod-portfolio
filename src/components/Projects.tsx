
import React from 'react';
import { Link2, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "DevTinder – Developer Matchmaking App",
      description: "A MERN stack Tinder clone for developers with features like friend requests, real-time chat, notifications, and payment integration.",
      tech: ["React", "Node.js", "MongoDB", "Stripe API"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "Netflix-GPT",
      description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["Vue.js", "Express.js", "Socket.io", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "VideoHUB – Video Upload & Streaming App",
      description: "A MERN stack application to upload and stream videos directly from AWS S3, mimicking a modern video platform with secure storage and smooth playback.",
      tech: ["React", "D3.js", "Python", "FastAPI"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication, transaction history, and real-time notifications.",
      tech: ["React Native", "Node.js", "JWT", "MongoDB"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
      github: "#",
      live: "#"
    }
  ];

  return (
    <section className="py-20 px-4" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 border border-indigo-400 text-indigo-400 rounded-lg hover:bg-indigo-400 hover:text-white transition-colors duration-200"
                  >
                    <Code size={16} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:scale-105 transition-transform duration-200"
                  >
                    <Link2 size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
