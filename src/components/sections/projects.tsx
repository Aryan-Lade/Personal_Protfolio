import React from 'react';

const projects = [
    {
      id: "01 / 02",
      title: "Movie Ticket Booking",
      category: "Web App",
      description: "A responsive Movie Ticket Booking System built using HTML, CSS, and JavaScript, allowing users to browse movies, select seats, and book tickets through an intuitive interface.",
      tags: ["HTML", "CSS", "Javascript"],
      gradient: "from-blue-600/30 to-cyan-600/30"
    },
  {
    id: "02 / 02",
    title: "Calculator",
    category: "Web App",
    description: "A functional Calculator built using HTML, CSS, and JavaScript, designed with a user-friendly layout and efficient calculation logic.",
    tags: ["HTML", "CSS", "Javascript"],
    gradient: "from-purple-600/30 to-pink-600/30"
  }
];

  const ProjectsSection = () => {
    return (
      <section id="projects" className="py-20 px-8 relative z-10 overflow-hidden">
        <div className="max-w-6xl w-full mx-auto relative">
        {/* Section Header */}
          <div className="mb-24 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              My Projects
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto font-sans leading-relaxed">
              Some of the projects I've worked on, showcasing my skills in web development and design.
            </p>
        </div>

        {/* Projects List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {projects.map((project, index) => (
            <div key={index} className="group h-full">
              <div className="glass-card relative overflow-hidden transition-all duration-500 hover:border-white/20 h-full flex flex-col">
                {/* Noise Filter Overlay */}
                <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay">
                  <svg className="w-full h-full">
                    <filter id={`noise-${index}`}>
                      <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                      <feColorMatrix type="saturate" values="0" />
                    </filter>
                    <rect width="100%" height="100%" filter={`url(#noise-${index})`} fill="white" />
                  </svg>
                </div>

                {/* Ambient Color Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 transition-opacity duration-500 group-hover:opacity-40`} />

                  <div className="relative p-8 md:p-10 z-10 flex flex-col h-full">
                    {/* Top Meta */}
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-white/30 font-mono text-sm tracking-widest uppercase">
                        {project.id}
                      </span>
                      <span className="px-5 py-2 rounded-full bg-white/5 border border-white/25 text-white/70 text-xs font-medium backdrop-blur-md tracking-wide">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-6 leading-tight tracking-tight">
                      {project.title}
                    </h3>

                    <div className="flex flex-col flex-1">
                      {/* Content */}
                      <div className="flex-1 w-full">
                        <p className="text-base text-white/60 leading-relaxed mb-8 font-sans">
                          {project.description}
                        </p>
                      </div>

                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.map((tag, tagIndex) => (
                          <div 
                            key={tagIndex} 
                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/25 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                          >
                            <span className="text-xs font-medium text-white/70">
                              {tag}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                {/* Hover Glow Effect */}
                <div className="absolute -inset-2 bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-cyan-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/10 group-hover:to-cyan-500/10 -z-10 blur-3xl transition-all duration-700 opacity-0 group-hover:opacity-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative Blur Blobs */}
      <div className="ambient-blob w-[500px] h-[500px] top-1/4 -right-1/4 bg-purple-500/20" />
      <div className="ambient-blob w-[500px] h-[500px] bottom-1/4 -left-1/4 bg-cyan-500/20" />
    </section>
    );
  };

export default ProjectsSection;