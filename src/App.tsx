import { Navigation } from './components/Navigation';
import { Hero } from './sections/Hero';
import { Experience } from './sections/Experience';
import { Skills } from './sections/Skills';
import { Portfolio } from './sections/Portfolio';
import { Contact } from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}

export default App;
