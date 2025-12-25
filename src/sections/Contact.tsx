import { cvData } from '../data/cvData';

export function Contact() {
  return (
    <section id="contact" className="min-h-screen py-20 bg-gradient-to-b from-gray-900 via-green-900/20 to-gray-900 flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-pixel text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 break-words px-2">
          CONTACT_FORM
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-green-500"></div>
              <span className="font-mono-pixel text-green-400 text-sm">~/contact_info.sh</span>
            </div>

            <div className="font-mono-pixel text-green-300 space-y-4">
              <div className="flex items-start">
                <span className="text-green-500 mr-2">$</span>
                <div>
                  <span className="text-green-400">echo</span>
                  <span className="text-gray-400"> "Let's connect and build something amazing together!"</span>
                </div>
              </div>

              <div className="pl-4 space-y-3 mt-6">
                <div className="flex items-center gap-3">
                  <span className="text-cyan-400 w-24">EMAIL:</span>
                  <a
                    href={`mailto:${cvData.personal.email}`}
                    className="text-pink-400 hover:text-pink-300 underline decoration-dotted"
                  >
                    {cvData.personal.email}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-cyan-400 w-24">LOCATION:</span>
                  <span className="text-green-300">{cvData.personal.location}</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t-2 border-green-400/30">
                <div className="flex items-start">
                  <span className="text-green-500 mr-2">$</span>
                  <div>
                    <span className="text-green-400">status</span>
                    <span className="text-gray-400"> --availability</span>
                  </div>
                </div>
                <div className="pl-4 mt-2 flex items-center gap-2">
                  <span className="w-3 h-3 bg-green-400 animate-pulse"></span>
                  <span className="text-green-300">Available for new opportunities</span>
                </div>
              </div>

              <div className="mt-6 flex items-start">
                <span className="text-green-500 mr-2">$</span>
                <span className="text-gray-400 animate-pulse">_</span>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href={`mailto:${cvData.personal.email}`}
              className="pixel-btn bg-gradient-to-r from-green-500 to-cyan-500 text-white hover:from-green-600 hover:to-cyan-600"
            >
              Send Email
            </a>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="font-mono-pixel text-gray-400 text-sm">
            © 2025 {cvData.personal.name}. Built with React + TypeScript + Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
}
