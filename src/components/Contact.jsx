import { useRef, useState, useEffect } from 'react';
import { sendContactEmail } from '../utils/emailService';
import { socialData } from '../data/socials';
import { contactData } from '../data/contact';

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check the screen width when the component loads and when the window resizes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 860);
    };
    
    // Run the check immediately
    handleResize();
    
    // Listen for browser window resizes
    window.addEventListener('resize', handleResize);
    
    // Cleanup the listener when leaving the page
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSubmit = (e) => {
    sendContactEmail(e, form, setLoading);
  };

  return (
    <section className="block" id="contact">
      <div className="wrap reveal">
        <div className="section-head">
          <span className="eyebrow">Contact</span>
          <h2>Let's work together</h2>
        </div>
        <div className="contact-grid">
          <div>
            <p style={{ color: 'var(--muted)', fontSize: '15px', maxWidth: '420px' }}>
              Have a role, project, or just want to say hi? I'm currently open to new opportunities and always happy to connect.
            </p>
            <div className="contact-info-list">
              <div className="contact-info-item"><div className="ic">@</div><div><div className="t1">Email</div><div className="t2">{contactData.email}</div></div></div>
              <div className="contact-info-item"><div className="ic">#</div><div><div className="t1">Phone</div><div className="t2">{contactData.phone}</div></div></div>
              <div className="contact-info-item"><div className="ic">•</div><div><div className="t1">Location</div><div className="t2">{contactData.location}</div></div></div>
            </div>
            
            <div className="social-row">
              {socialData.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={social.name} 
                  title={social.name}
                >
                  <svg width="15" height="15" viewBox={social.viewBox} fill="currentColor">
                    <path d={social.path}></path>
                  </svg>
                </a>
              ))}
            </div>

            {/* The map will only render if isMobile is false */}
            {!isMobile && (
              <div style={{ marginTop: '24px', borderRadius: '12px', overflow: 'hidden', height: '160px', width: '100%', border: '1px solid var(--border)' }}>
                <iframe 
                  title="Location Map"
                  src="https://maps.google.com/maps?q=Champahati,%20West%20Bengal&t=&z=12&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            )}
            
          </div>
          <div className="contact-form">
            <form ref={form} onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name">Full name</label>
                <input type="text" placeholder="Name" name="user_name" id="name" className="name" />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone</label>
                <input type="tel" placeholder="Phone" name="user_phone" id="phone" className="userPhone" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Email" name="user_email" id="email" className="email" />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea placeholder="Message" name="message" id="message" className="msg" rows="4"></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={loading}>
                {loading ? 'Sending...' : 'Send message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}