import React from 'react';
import { MapPin, Award, Users, TrendingUp } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 relative z-10 transition-all duration-300 overflow-hidden">
      <div className="max-w-6xl w-full mx-auto">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            About Me
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Experience Card */}
          <div className="glass-card p-6 border border-white/25 bg-white/[0.03] backdrop-blur-[12px] rounded-[1.5rem] transition-all duration-300 hover:border-purple-500/40 hover:-translate-y-1">
            <Award className="w-8 h-8 text-purple-400 mb-4" />
            <div className="text-3xl font-bold text-white mb-2">2+</div>
            <div className="text-white/60 text-sm md:text-base">Years Experience</div>
          </div>

          {/* Projects Card */}
          <div className="glass-card p-6 border border-white/25 bg-white/[0.03] backdrop-blur-[12px] rounded-[1.5rem] transition-all duration-300 hover:border-purple-500/40 hover:-translate-y-1">
            <Users className="w-8 h-8 text-purple-400 mb-4" />
            <div className="text-3xl font-bold text-white mb-2">4</div>
            <div className="text-white/60 text-sm md:text-base">Projects Completed</div>
          </div>

          {/* Hackathons Card */}
          <div className="glass-card p-6 border border-white/25 bg-white/[0.03] backdrop-blur-[12px] rounded-[1.5rem] transition-all duration-300 hover:border-purple-500/40 hover:-translate-y-1">
            <TrendingUp className="w-8 h-8 text-purple-400 mb-4" />
              <div className="text-3xl font-bold text-white mb-2">10+</div>
              <div className="text-white/60 text-sm md:text-base">Hackathons Participated</div>
          </div>
        </div>

        {/* Descriptive Text Block */}
        <div className="glass-card p-8 md:p-12 border border-white/25 bg-white/[0.03] backdrop-blur-[12px] rounded-[1.5rem]">
          <div className="space-y-6 text-lg text-white/70 leading-relaxed max-w-none">
            <p>
              Welcome to my portfolio! I’m <span className="text-white font-medium">Aryan Lade</span>, a second-year Computer Science student with a strong interest in Artificial Intelligence, Machine Learning, and Data Science. I enjoy working with data and building intelligent solutions that address real-world problems.
            </p>
            <p>
              My work focuses on data analysis, machine learning models, and problem-solving using data-driven approaches. Through hands-on projects and continuous learning, I am strengthening my foundations in AI and ML while exploring how intelligent systems function in practical scenarios.
            </p>
            <div className="pt-4 text-purple-400 text-2xl">✦</div>
            <p>
              I am committed to continuous growth, investing time and effort into learning, experimentation, and building impactful, real-world solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;