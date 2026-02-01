import Image from 'next/image';
import { ArrowDown } from 'lucide-react';

/**
 * Hero component for the Orionyx portfolio.
 * Clones the hero section featuring a large gradient headline, descriptions,
 * a scroll indicator, and a monochromatic profile image in a glass frame.
 * Theme: Dark
 */
const Hero = () => {
  return (
        <section 
          id="home" 
          className="min-h-screen flex items-center justify-center px-6 pt-32 pb-12 relative z-10 overflow-hidden"
        >
      {/* Background Blobs for Atmosphere */}
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-purple-500/15 to-pink-500/15 blur-3xl pointer-events-none z-0 shadow-2xl shadow-purple-500/20" />
      <div className="absolute bottom-40 left-20 w-40 h-40 rounded-full bg-gradient-to-br from-blue-500/15 to-cyan-500/15 blur-3xl pointer-events-none z-0 shadow-2xl shadow-blue-500/20" />
      <div className="absolute top-1/3 left-1/4 w-48 h-48 rounded-full bg-gradient-to-br from-green-500/10 to-emerald-500/10 blur-3xl pointer-events-none z-0 shadow-2xl shadow-green-500/15" />
      
      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content Column */}
          <div className="flex flex-col">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              Hello!! <br />
              <span className="text-gradient">I'm Aryan</span>
            </h1>
            
              <p className="text-lg md:text-xl text-white/60 mb-4 leading-relaxed max-w-xl">
                I am passionate about Artificial Intelligence, Machine Learning, and Data Science, with a strong focus on learning, experimentation, and applying data-driven approaches to solve meaningful problems. I enjoy analyzing data, building machine learning models, and understanding how intelligent systems work.
              </p>
                <p className="text-base md:text-lg text-white/60 mb-8 leading-relaxed max-w-xl">
                  Currently, I am strengthening my foundations through hands-on projects, practical experimentation, and continuous learning.
                </p>
              
              {/* Scroll Indicator */}
              <div className="mt-12 flex items-center gap-4">
                <ArrowDown className="w-5 h-5 text-white/70 animate-bounce" />
                <span className="text-sm text-white/70 font-medium font-sans">Scroll to explore</span>
              </div>
          </div>

            {/* Right Image Column */}
            <div className="relative max-w-[420px] mx-auto lg:ml-auto">
              {/* Main Glass Frame */}
              <div className="relative glass-card p-1 overflow-hidden shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-square lg:aspect-[3/4]">
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/15baa00d-7dbd-4116-b205-975e3c3a40e8/Avtaar-2-1769327986862.png?width=8000&height=8000&resize=contain"
                      alt="Aryan profile"
                      width={600}
                      height={800}
                      className="w-full h-full object-cover"
                      priority
                    />
                </div>

              <div className="absolute bottom-8 left-8 glass-card py-2 px-6 backdrop-blur-md bg-white/5 border-white/25">
                <span className="text-white/80 text-sm font-medium tracking-wide">Developer</span>
              </div>
            </div>

            {/* Glowing Aura behind image */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-cyan-500/20 opacity-30 blur-3xl rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
