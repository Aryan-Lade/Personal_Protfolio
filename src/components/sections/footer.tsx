import React from 'react';

const Footer = () => {
  return (
    <footer 
      className="py-12 border-t border-white/5 relative z-10"
      style={{
        backgroundColor: 'transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center justify-center">
          <p 
            className="text-white/40 text-sm md:text-base font-medium tracking-tight text-center"
            style={{
              fontFamily: 'var(--font-sans)',
              lineHeight: '1.6',
            }}
          >
            © 2026 Aryan Lade. Build with performance in mind.
          </p>
      </div>
    </footer>
  );
};

export default Footer;