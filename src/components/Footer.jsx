import myLogo from '../assets/images/logo512.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="wrap footer-inner">
        <span className="fbrand" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img 
            src={myLogo} 
            alt="Arnab Mondal Logo" 
            style={{ width: '24px', height: '24px', borderRadius: '4px' }} 
          />
          Arnab Mondal
        </span>
        <span className="fmuted">© {currentYear} · Built with care</span>
      </div>
    </footer>
  );
}