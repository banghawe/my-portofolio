import { cvData } from '../data/cvData';

export function Experience() {
  return (
    <section id="experience" className="min-h-screen py-20 bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-pixel text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
          EXPERIENCE_LOG
        </h2>

        <div className="max-w-5xl mx-auto space-y-8">
          {cvData.experience.map((exp, index) => (
            <div key={index} className="retro-card border-purple-400 hover:border-cyan-400 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-pixel text-cyan-400 mb-2">
                    {exp.title}
                  </h3>
                  <p className="font-mono-pixel text-lg text-purple-300 mb-1">
                    {exp.company} {exp.type && `• ${exp.type}`}
                  </p>
                  <p className="font-mono-pixel text-sm text-gray-400">
                    {exp.location}
                  </p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="inline-block px-4 py-2 bg-purple-500/20 border-2 border-purple-400 font-mono-pixel text-purple-300 text-sm">
                    {exp.period}
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-pixel text-xs text-green-400 mb-3">KEY_RESPONSIBILITIES:</h4>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="font-mono-pixel text-gray-300 flex">
                      <span className="text-cyan-400 mr-2">▸</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-pixel text-xs text-pink-400 mb-3">TECH_STACK:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-pink-500/10 border border-pink-400 font-mono-pixel text-pink-300 text-sm hover:bg-pink-500/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
