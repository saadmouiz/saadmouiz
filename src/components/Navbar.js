import { Link } from 'react-scroll';
import { useState } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');

  const navLinks = [
    { to: "home", label: "HOME" },
    { to: "about", label: "ABOUT" },
    { to: "projects", label: "PROJECTS" },
    { to: "contact", label: "CONTACT" }
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-zinc-900/80 backdrop-blur-lg">
      {/* Bordure animée */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-lime-500/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo avec effet hover */}
          <div className="relative group">
            <a href="#" className="text-2xl font-bold text-lime-400 transition-all duration-300 group-hover:text-white">
              &lt;SAAD/&gt;
            </a>
            {/* Effet de glow au hover */}
            <div className="absolute inset-0 bg-lime-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          </div>
          
          {/* Navigation Links avec effets améliorés */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ to, label }) => (
              <Link 
                key={to}
                to={to}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onSetActive={() => setActiveLink(to)}
                className="relative group"
              >
                {/* Texte du lien */}
                <span className={`text-sm tracking-wider font-medium ${
                  activeLink === to 
                    ? 'text-lime-400' 
                    : 'text-zinc-400'
                } group-hover:text-lime-400 transition-all duration-300`}>
                  {label}
                </span>

                {/* Ligne d'animation au hover */}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-lime-400/50 to-lime-400 group-hover:w-full transition-all duration-300"></span>
                
                {/* Point indicateur du lien actif */}
                {activeLink === to && (
                  <span className="absolute -left-3 top-1/2 w-1.5 h-1.5 bg-lime-400 rounded-full transform -translate-y-1/2"></span>
                )}

                {/* Effet de glow au hover */}
                <span className="absolute inset-0 bg-lime-400/0 group-hover:bg-lime-400/5 rounded-lg transition-all duration-300 blur-xl"></span>
              </Link>
            ))}

            {/* Bouton Call-to-Action */}
            <Link 
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="relative group"
            >
              <span className="relative z-10 px-6 py-2 bg-lime-400/10 border border-lime-400/20 rounded-full text-lime-400 text-sm font-medium hover:bg-lime-400/20 transition-all duration-300">
                Let's Connect
              </span>
              {/* Effet de glow au hover */}
              <div className="absolute inset-0 bg-lime-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </Link>
          </div>
        </div>
      </div>

      {/* Bordure animée du bas */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-lime-500/10 to-transparent"></div>
    </nav>
  );
};

export default Navbar;

// Ajoutez ces keyframes dans votre fichier CSS global
const style = document.createElement('style');
style.textContent = `
  .glow {
    text-shadow: 0 0 10px rgba(134, 239, 172, 0.5);
  }
`;
document.head.appendChild(style);