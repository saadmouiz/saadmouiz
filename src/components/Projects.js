import React from 'react';
import img1 from '../images/image3.png';
import img2 from '../images/image2.png';
import img3 from '../images/image1.png';

const ProjectCard = ({ project }) => {
  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-lime-500 to-green-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
      
      <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 p-12">
          {/* Left Column - Description */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-lime-400/10 border border-lime-400/20 text-lime-400 text-sm">
              {project.type}
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-400">
                  {project.title}
                </span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <div key={index} className="group/item">
                  <span className="relative px-4 py-2 bg-zinc-800 rounded-lg text-zinc-400 hover:text-lime-400 transition-colors">
                    <span className="relative z-10">{tech}</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-lime-400/10 to-green-400/10 rounded-lg opacity-0 group-hover/item:opacity-100 transition-opacity"></span>
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6">
              <a 
                href={project.demoLink} 
                className="flex items-center gap-2 text-zinc-400 hover:text-lime-400 transition-colors group/link"
              >
                <span>View Project</span>
                <svg 
                  className="w-5 h-5 transform group-hover/link:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
              </a>
              <a 
                href={project.codeLink} 
                className="flex items-center gap-2 text-zinc-400 hover:text-lime-400 transition-colors group/link"
              >
                <span>Source Code</span>
                <svg 
                  className="w-5 h-5 transform group-hover/link:rotate-45 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column - Project Image */}
          <div className="relative group/image">
            <div className="relative rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-lime-400/20 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500"></div>
              
              <img 
                src={project.image}
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover/image:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-500">
                <div className="px-6 py-3 bg-black/80 backdrop-blur-sm rounded-full text-white font-medium">
                  View Full Preview
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 left-4 right-4 bg-zinc-800/90 backdrop-blur-sm rounded-lg p-4 opacity-0 transform translate-y-2 group-hover/image:opacity-100 group-hover/image:translate-y-0 transition-all duration-500">
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">{project.title}</span>
                <span className="text-lime-400">Live Preview</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsShowcase = () => {
  const projects = [
    {
      type: "Featured Project",
      title: "E-commerce (Mizo Shop)",
      description: "A comprehensive e-commerce platform built with React, featuring a modern and intuitive interface. The platform includes advanced product filtering, shopping cart functionality, wishlist management, and a seamless checkout process. Built with responsive design principles to ensure a perfect shopping experience across all devices.",
      technologies: ["React Js", "CSS"],
      image: img1,
      demoLink: "#",
      codeLink: "#"
    },
    {
      type: "Web Application",
      title: "Restaurant Menu",
      description: "An interactive restaurant menu application designed to enhance dining experience. Features include dynamic menu updates, dietary filtering, and real-time ordering system.",
      technologies: ["React Js", "CSS"],
      image: img2,
      demoLink: "#",
      codeLink: "#"
    },
    {
      type: "E-Commerce",
      title: "E-commerce Site",
      description: "A modern e-commerce platform with seamless shopping experience. Includes product catalog, cart management, secure checkout, and order tracking features.",
      technologies: ["React", "CSS"],
      image: img3,
      demoLink: "#",
      codeLink: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 py-20 px-8">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-lime-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-blob"></div>
        <div className="absolute -bottom-8 right-0 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-400">
              Featured Projects
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-lime-400 to-green-400 mx-auto mb-4"></div>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Explore a collection of my recent projects showcasing modern web development and creative design solutions
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsShowcase;

// Add this to your global CSS file
const style = document.createElement('style');
style.textContent = `
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
`;
document.head.appendChild(style);