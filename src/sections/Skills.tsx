import { cvData } from '../data/cvData';

export function Skills() {
  const skillCategories = [
    { title: 'FRONTEND', items: cvData.skills.frontend, color: 'purple' },
    { title: 'BACKEND', items: cvData.skills.backend, color: 'pink' },
    { title: 'DATABASE', items: cvData.skills.database, color: 'green' },
    { title: 'CLOUD_&_DEVOPS', items: cvData.skills.cloud, color: 'yellow' },
    { title: 'INTEGRATIONS', items: cvData.skills.integrations, color: 'blue' },
  ];

  const colorClasses: Record<string, { border: string; text: string; bg: string }> = {
    cyan: { border: 'border-cyan-400', text: 'text-cyan-300', bg: 'bg-cyan-500/10' },
    purple: { border: 'border-purple-400', text: 'text-purple-300', bg: 'bg-purple-500/10' },
    pink: { border: 'border-pink-400', text: 'text-pink-300', bg: 'bg-pink-500/10' },
    green: { border: 'border-green-400', text: 'text-green-300', bg: 'bg-green-500/10' },
    yellow: { border: 'border-yellow-400', text: 'text-yellow-300', bg: 'bg-yellow-500/10' },
    blue: { border: 'border-blue-400', text: 'text-blue-300', bg: 'bg-blue-500/10' },
  };

  return (
    <section id="skills" className="min-h-screen py-20 bg-gradient-to-b from-gray-900 via-cyan-900/20 to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-pixel text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 break-words px-2">
          SKILL_TREE
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const colors = colorClasses[category.color];
            return (
              <div key={index} className={`retro-card ${colors.border}`}>
                <h3 className={`font-pixel text-sm mb-4 ${colors.text}`}>
                  [{category.title}]
                </h3>
                <ul className="space-y-2">
                  {category.items.map((skill, i) => (
                    <li key={i} className="flex items-center">
                      <span className={`w-2 h-2 ${colors.bg} ${colors.border} border mr-2`}></span>
                      <span className={`font-mono-pixel text-sm ${colors.text}`}>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="retro-card border-yellow-400">
            <h3 className="font-pixel text-lg text-yellow-400 mb-4">EDUCATION_DATA</h3>
            <div className="font-mono-pixel text-gray-300 space-y-2">
              <p className="text-xl text-cyan-400">{cvData.education.degree}</p>
              <p className="text-lg text-purple-300">{cvData.education.school}</p>
              <p className="text-sm text-gray-400">{cvData.education.period}</p>
              <p className="text-sm text-green-400 mt-3">🏆 {cvData.education.achievement}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
