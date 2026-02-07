
'use client';

import { Mail, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';

/**
 * ContactFooter component - Refined two-column design matching the reference image.
 * Features a "Start a conversation" section with a contact form and a minimal footer.
 */
export default function ContactFooter() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.open(`mailto:aryanlade55@gmail.com?subject=${subject}&body=${body}`, '_blank');
  };
  return (
    <footer id="contact" className="relative pt-32 pb-16 px-6 z-10">
      <div className="max-w-7xl mx-auto">
          {/* Contact Section - Two Column Layout */}
            <div className="bg-[#0a0a0b] border border-white/[0.05] rounded-none p-8 md:py-20 md:px-16 mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column: Info */}
              <div className="space-y-12">
                <div>
                  <span className="text-white/40 text-[10px] font-bold tracking-[0.3em] uppercase block mb-4">
                    Contact
                  </span>
                  <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                    Start a conversation
                  </h2>
                  <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-sm">
                    I help teams and founders ship fast, reliable web products. Clear scope. Clean code. No surprises.
                  </p>
                </div>

                {/* Connecting Icons */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-none border border-white/20 flex items-center justify-center text-white/60">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="w-12 border-t border-dashed border-white/20" />
                  <div className="w-12 h-12 rounded-none border border-white/20 flex items-center justify-center text-white/60">
                    <Send className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Right Column: Form */}
                <div className="bg-black/40 border border-white/[0.03] rounded-none p-8">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full bg-[#111112] border border-white/5 rounded-none px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-white/20 transition-all text-base"
                    />
                    <input 
                      type="email" 
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full bg-[#111112] border border-white/5 rounded-none px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-white/20 transition-all text-base"
                    />
                      <textarea 
                        placeholder="Tell me about your project" 
                        rows={6}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="w-full bg-[#111112] border border-white/5 rounded-none px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-white/20 transition-all resize-none text-base"
                      ></textarea>
                    <button 
                      type="submit"
                      className="w-full bg-white text-black font-semibold py-4 rounded-none hover:bg-white/90 transition-all active:scale-[0.98] mt-4 text-base"
                    >
                      Send message
                    </button>
                  </form>
                </div>
            </div>
          </div>

        {/* Bottom Footer */}
        <div className="pt-12 border-t border-white/[0.05] flex flex-col items-center gap-6">
            {/* Footer Socials */}
            <div className="flex items-center gap-3">
<a href="https://github.com/Aryan-Lade" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-none border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/20 transition-all">
                  <Github className="w-4 h-4" />
                </a>
              <div className="w-6 border-t border-dashed border-white/20" />
<a href="https://www.linkedin.com/in/aryan-lade" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-none border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/20 transition-all">
                  <Linkedin className="w-4 h-4" />
              </a>
            </div>
            
            <p className="text-white/40 text-[10px] font-bold tracking-[0.2em] uppercase text-center">
              © 2026 Aryan Lade. Build with performance in mind.
            </p>
        </div>
      </div>
    </footer>
  );
}
