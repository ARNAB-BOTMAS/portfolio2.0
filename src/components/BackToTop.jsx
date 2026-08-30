import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [showFab, setShowFab] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFab(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a 
      href="#home" 
      className={`top-fab ${showFab ? 'show' : ''}`} 
      aria-label="Back to top"
    >
      ↑
    </a>
  );
}