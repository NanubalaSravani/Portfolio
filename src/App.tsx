import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Achievements } from './components/Achievements';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { MobileNav } from './components/MobileNav';
import './App.css';

export default function App() {
  return (
    <>
      <Navbar />
      <main className="app-main">
        <Hero />
        <Achievements />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <MobileNav />
    </>
  );
}
