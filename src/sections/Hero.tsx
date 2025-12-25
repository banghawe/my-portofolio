import { cvData } from '../data/cvData';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center retro-screen overflow-hidden relative">
      <div className="scanline"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <div className="mb-8">
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-pixel text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-4 glitch"
              data-text={cvData.personal.name}
            >
              {cvData.personal.name}
            </h1>
            <div className="inline-block retro-card border-cyan-400 mt-6">
              <p className="text-lg md:text-xl font-mono-pixel text-green-400">
                {cvData.personal.title}
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mb-12">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="font-mono-pixel text-green-400 text-sm">~/profile.txt</span>
              </div>
              <p className="font-mono-pixel text-green-300 text-base md:text-lg leading-relaxed">
                <span className="text-green-500">{'> '}</span>{cvData.profile}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#portfolio"
              className="pixel-btn bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600"
            >
              View Portfolio
            </a>
            <a
              href="#experience"
              className="pixel-btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="pixel-btn bg-gradient-to-r from-green-500 to-teal-500 text-white hover:from-green-600 hover:to-teal-600"
            >
              Contact
            </a>
          </div>

          <div className="mt-12 flex justify-center gap-8 font-mono-pixel text-cyan-300">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-400 animate-pulse"></span>
              <span>{cvData.personal.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
