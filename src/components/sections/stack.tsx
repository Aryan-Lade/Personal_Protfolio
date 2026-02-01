import React from 'react';
import { 
  Code, 
  Globe, 
  Database, 
  Brain, 
  GitBranch, 
  BarChart3, 
  PenTool, 
  ArrowUpRight 
} from 'lucide-react';

interface StackItemProps {
  icon: React.ElementType;
  title: string;
  description: string;
  gradient: string;
}

const StackCard = ({ icon: Icon, title, description, gradient }: StackItemProps) => {
  return (
    <div className="glass-card p-6 group cursor-pointer relative overflow-hidden transition-all duration-300 hover:-translate-y-1">
      {/* Background Hover Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-xl bg-gradient-to-br ${gradient} bg-opacity-10 flex items-center justify-center`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <ArrowUpRight 
            className="w-5 h-5 text-white/40 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-y-1 group-hover:translate-x-1" 
          />
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{title}</h3>
        <p className="text-white/60 text-sm leading-relaxed font-sans">
          {description}
        </p>
      </div>
    </div>
  );
};

const StackSection = () => {
  const stackItems = [
    {
      icon: Code,
      title: "Programming Languages",
      description: "Strong foundation in Java, C++, and Python for problem-solving and application development",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Building responsive web interfaces using HTML, CSS, and JavaScript",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Database,
      title: "Databases",
      description: "Experience working with MongoDB and MySQL for structured and unstructured data",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Brain,
      title: "Machine Learning & AI",
      description: "Interest and hands-on exposure to data science and quantitative analysis",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: GitBranch,
      title: "Version Control",
      description: "Code management and collaboration using Git and GitHub",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: BarChart3,
      title: "Analytics & Visualization",
      description: "Data visualization and insights using Power BI",
      gradient: "from-yellow-500 to-amber-500"
    },
    {
      icon: PenTool,
      title: "Design & Presentation",
      description: "Creating visuals and presentations using Canva and Microsoft PowerPoint",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

    return (
        <section id="skills" className="py-24 px-6 relative z-10 w-full overflow-hidden">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="mb-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                Tech Stacks
              </h2>
              <p className="text-xl text-white/60 font-sans">
                Skills and technologies I use to bring ideas to life
              </p>
            </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stackItems.map((item, index) => (
            <StackCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              gradient={item.gradient}
            />
          ))}
        </div>
      </div>
      
      {/* Background Ambient Decoratives aligned with High Level Design */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />
    </section>
  );
};

export default StackSection;