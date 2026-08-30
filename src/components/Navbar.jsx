import { useState, useEffect } from 'react';
import myLogo from '../assets/images/logo512.png';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('main section[id]');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#home" className="brand" onClick={closeMenu}>
          <img 
            src={myLogo} 
            alt="Arnab Mondal Logo" 
            style={{ width: '34px', height: '34px', borderRadius: '8px', objectFit: 'contain' }} 
          />
          Arnab Mondal
        </a>
        
        <nav className="nav-links">
          <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a>
          <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
          <a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>Experience</a>
          <a href="#education" className={activeSection === 'education' ? 'active' : ''}>Education</a>
          <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
          <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
        </nav>
        
        {/* Desktop Resume Download Link */}
        <a href="/arnab-mondal-resume.pdf" download="Arnab_Mondal_Resume.pdf" className="nav-cta">Resume</a>
        
        <button 
          className={`nav-toggle ${isMobileMenuOpen ? 'open' : ''}`} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          aria-label="Toggle menu"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
      
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#experience" onClick={closeMenu}>Experience</a>
        <a href="#education" onClick={closeMenu}>Education</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        
        {/* Mobile Menu Resume Download Link */}
        <a href="/arnab-mondal-resume.pdf" download="Arnab_Mondal_Resume.pdf" onClick={closeMenu}>Resume</a>
      </div>
    </header>
  );
}