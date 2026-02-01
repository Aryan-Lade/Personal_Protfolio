import React from 'react';
import { Mail, ArrowRight, Download, Linkedin, Github } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section id="contact" className="py-24 px-6 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Large Glass-morphic CTA Card */}
        <div className="relative group">
          {/* Subtle background glow behind the card */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
          
          <div className="relative glass-card bg-gradient-to-br from-white/[0.03] to-white/[0.01] border-white/10 rounded-[2rem] p-8 md:p-20 text-center flex flex-col items-center">
            
            {/* Centered Mail Icon */}
            <div className="mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 blur-xl opacity-40 rounded-2xl animate-pulse"></div>
              <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
                <Mail className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight max-w-3xl">
              Let&apos;s Create Something <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h2>

            {/* Subtext */}
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
              Have a project in mind? I&apos;d love to hear about it. Let&apos;s discuss how we can work together to bring your vision to life.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=prasidheem@gmail.com"
                className="btn-gradient px-8 py-4 rounded-full flex items-center gap-2 font-semibold text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all active:scale-95"
              >
                Say Hello <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all flex items-center gap-2 hover:border-white/20 active:scale-95"
              >
                Download Resume <Download className="w-4 h-4" />
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/aryan-lade"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all group/icon"
              >
                <Linkedin className="w-5 h-5 group-hover/icon:scale-110 transition-transform" />
              </a>
              <a
                href="https://github.com/Aryan-Lade"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all group/icon"
              >
                <Github className="w-5 h-5 group-hover/icon:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      </div>
    </section>
  );
};

export default ContactCTA;