import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(portfolioData[0]);
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <section id="portfolio" className="min-h-screen py-20 bg-gradient-to-b from-gray-900 via-pink-900/20 to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-pixel text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
          PROJECT_FILES
        </h2>

        <div className="max-w-7xl mx-auto">
          {/* Project Selector */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {portfolioData.map((project) => (
              <button
                key={project.id}
                onClick={() => {
                  setSelectedProject(project);
                  setSelectedImage(0);
                }}
                className={`pixel-btn ${
                  selectedProject.id === project.id
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                    : 'bg-gray-800 text-gray-400 hover:text-white border-2 border-gray-600'
                }`}
              >
                {project.title}
              </button>
            ))}
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Screenshot Gallery or Code Indicator */}
            <div className="space-y-4">
              {selectedProject.screenshots.length > 0 ? (
                <>
                  <div className="retro-card border-pink-400 overflow-hidden">
                    <div className="terminal-header">
                      <div className="terminal-dot bg-red-500"></div>
                      <div className="terminal-dot bg-yellow-500"></div>
                      <div className="terminal-dot bg-green-500"></div>
                      <span className="font-mono-pixel text-pink-400 text-sm">
                        {selectedProject.screenshots[selectedImage].caption}
                      </span>
                    </div>
                    <div className="bg-gray-950 p-2">
                      <img
                        src={selectedProject.screenshots[selectedImage].src}
                        alt={selectedProject.screenshots[selectedImage].alt}
                        className="w-full h-auto border-4 border-pink-400/30"
                      />
                    </div>
                  </div>

                  {/* Thumbnail Navigation */}
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                    {selectedProject.screenshots.map((screenshot, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`border-4 overflow-hidden transition-all ${
                          selectedImage === index
                            ? 'border-pink-400 scale-105'
                            : 'border-gray-600 hover:border-purple-400 opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={screenshot.src}
                          alt={screenshot.alt}
                          className="w-full h-auto"
                        />
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <div className="terminal-window h-full flex items-center justify-center min-h-[400px]">
                  <div className="text-center space-y-4 p-8">
                    <div className="font-pixel text-4xl text-green-400 mb-4">
                      {'</>'}
                    </div>
                    <div className="font-mono-pixel text-green-300 space-y-2">
                      <p className="text-xl">&gt; CODE-BASED PROJECT</p>
                      <p className="text-sm text-green-400/70">
                        This is a library/SDK project
                      </p>
                      <p className="text-sm text-green-400/70">
                        No UI screenshots available
                      </p>
                      <div className="mt-6 flex items-center justify-center gap-2">
                        <span className="w-2 h-2 bg-green-400 animate-pulse"></span>
                        <span className="text-xs">Check highlights for details</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right: Project Info */}
            <div className="space-y-6">
              <div className="retro-card border-purple-400">
                <h3 className="text-2xl md:text-3xl font-pixel text-purple-400 mb-2">
                  {selectedProject.title}
                </h3>
                <p className="font-mono-pixel text-lg text-pink-300 mb-4">
                  {selectedProject.subtitle}
                </p>
                <div className="inline-block px-3 py-1 bg-cyan-500/20 border border-cyan-400 font-mono-pixel text-cyan-300 text-sm mb-4">
                  {selectedProject.role} • {selectedProject.period}
                </div>
                <p className="font-mono-pixel text-gray-300 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div className="retro-card border-cyan-400">
                <h4 className="font-pixel text-sm text-cyan-400 mb-4">KEY_HIGHLIGHTS:</h4>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((highlight, index) => (
                    <li key={index} className="font-mono-pixel text-gray-300 flex">
                      <span className="text-pink-400 mr-2">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="retro-card border-green-400">
                <h4 className="font-pixel text-sm text-green-400 mb-4">TECHNOLOGIES:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-green-500/10 border border-green-400 font-mono-pixel text-green-300 text-sm hover:bg-green-500/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
