import { useState, useEffect } from 'react';
import { experienceData } from '../data/experience';

export default function Hero() {
  const [yearsExp, setYearsExp] = useState('2+');

  // Grab the company and most recent role from your data
  const currentCompany = experienceData[0].company;
  const companyShortName = experienceData[0].shortName;
  const currentRole = experienceData[0].roles[0].title;
  const companyLogo = experienceData[0].logoUrl;
  
  // Automatically determine 'a' or 'an'
  const article = /^[aeiou]/i.test(currentRole) ? 'an' : 'a';

  useEffect(() => {
    const joined = new Date('2024-06-13');
    const now = new Date();
    let years = now.getFullYear() - joined.getFullYear();
    let months = now.getMonth() - joined.getMonth();
    if (now.getDate() < joined.getDate()) months--;
    if (months < 0) { years--; months += 12; }
    
    setYearsExp(years > 0 ? `${years}+` : "<1");
  }, []);

  return (
    <section className="hero" id="home">
      <div className="wrap hero-inner">
        <div>
          <div className="hero-kicker"><span className="status-dot"></span><span className="txt">Open to new opportunities</span></div>
          <h1>Full-Stack Developer building <span className="accent-text">reliable software</span> end to end.</h1>
          
          {/* Dynamic paragraph text */}
          <p className="lead">I'm Arnab Mondal, {article} {currentRole} at {currentCompany} with a background across web, Android and backend development — Java, Python, React and Node.js.</p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View my work</a>
            <a href="#contact" className="btn btn-outline">Get in touch</a>
          </div>
          <div className="hero-stats">
            <div className="stat"><b>{yearsExp}</b><span>Years professional experience</span></div>
            <div className="stat"><b>9</b><span>Projects shipped</span></div>
            <div className="stat"><b>13+</b><span>Technologies</span></div>
          </div>
        </div>
        <div className="hero-photo-wrap">
          <div className="hero-photo">
            <img 
              src="https://raw.githubusercontent.com/ARNAB-BOTMAS/portfolio/main/src/Image/profile1.jpg" 
              alt="Portrait of Arnab Mondal" 
            />
          </div>
          <div className="float-card">
            
            {/* Dynamic logo rendering */}
            {companyLogo ? (
              <img 
                src={companyLogo} 
                alt={`${companyShortName} Logo`}
                style={{ width: '34px', height: '34px', borderRadius: '8px', objectFit: 'contain', backgroundColor: '#fff', padding: '2px' }} 
              />
            ) : (
              <div className="tcs-mark md">{companyShortName}</div>
            )}
            
            <div>
              <div className="t1">Currently at</div>
              {/* Dynamic company text */}
              <div className="t2">{currentCompany}</div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}