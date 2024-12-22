import { Link } from 'react-scroll';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = ['HOME', 'ABOUT', 'PROJECTS', 'CONTACT'];

  return (
    <nav className="fixed w-full top-0 z-50 bg-zinc-900/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link 
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="text-2xl font-bold text-lime-400 glow cursor-pointer"
          >
            &lt;SAAD/&gt;
          </Link>
          
          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item}
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="text-zinc-400 hover:text-lime-400 transition-all duration-300 cursor-pointer"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Bouton Menu Mobile */}
          <button 
            className="md:hidden text-lime-400 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {!isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>

        {/* Menu Mobile */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col items-center gap-4 mt-4 border-t border-zinc-800 pt-4">
            {navItems.map((item) => (
              <Link 
                key={item}
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => setIsMenuOpen(false)}
                className="text-zinc-400 hover:text-lime-400 transition-all duration-300 cursor-pointer py-2 w-full text-center"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay pour le menu mobile */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setIsMenuOpen(false)}
          style={{ zIndex: -1 }}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;