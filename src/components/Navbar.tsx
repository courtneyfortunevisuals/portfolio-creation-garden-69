
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="font-display text-lg font-medium tracking-tight">
          alan.portfolio
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/projects" className="nav-link text-sm font-medium">Projects</Link>
          <Link to="/resume" className="nav-link text-sm font-medium">Resume</Link>
          <Link to="/contact" className="nav-link text-sm font-medium">Let's Chat</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background shadow-md animate-fade-in">
          <nav className="flex flex-col p-6 gap-6">
            <Link to="/projects" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link>
            <Link to="/resume" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Resume</Link>
            <Link to="/contact" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Let's Chat</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
