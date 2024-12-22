import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';

// Créez un fichier CSS séparé pour les animations
const style = document.createElement('style');
style.textContent = `
  .reveal {
    position: relative;
    opacity: 0;
    transition: 1s all ease;
  }

  .reveal.active {
    opacity: 1;
  }

  .active.fade-bottom {
    animation: fade-bottom 1s ease-in;
  }

  .active.fade-left {
    animation: fade-left 1s ease-in;
  }

  .active.fade-right {
    animation: fade-right 1s ease-in;
  }

  @keyframes fade-bottom {
    0% {
      transform: translateY(50px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes fade-left {
    0% {
      transform: translateX(-100px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes fade-right {
    0% {
      transform: translateX(100px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
document.head.appendChild(style);

const App = () => {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    reveals.forEach(element => observer.observe(element));

    return () => {
      reveals.forEach(element => observer.unobserve(element));
    };
  }, []);

  return (
    <div className="bg-zinc-900 relative">
      <div className="grid-pattern fixed inset-0 pointer-events-none"></div>
      <Navbar />
      
      <section id="home">
        <div className="reveal fade-bottom">
          <Hero />
        </div>
      </section>

      <section id="about">
        <div className="reveal fade-left">
          <About />
        </div>
      </section>

      <section id="skills">
        <div className="reveal fade-right">
          <Skills />
        </div>
      </section>

      <section id="projects">
        <div className="reveal fade-left">
          <Projects />
        </div>
      </section>

      <section id="contact">
        <div className="reveal fade-bottom">
          <Contact />
        </div>
      </section>

      <div className="reveal fade-bottom">
        <Footer />
      </div>
    </div>
  );
};

export default App;