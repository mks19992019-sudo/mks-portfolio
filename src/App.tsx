import { Navbar } from './components/Navigation';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { Work } from './sections/Work';
import { About } from './sections/About';
import './App.css';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Work />
        <About />
      </main>
      <Footer />
    </div>
  );
}
