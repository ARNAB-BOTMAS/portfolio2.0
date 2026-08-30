import React, { useState, useEffect } from 'react';
import { experienceData } from '../data/experience';

export default function Experience() {
  const [roleLabel, setRoleLabel] = useState('calculating tenure…');

  useEffect(() => {
    const monthsBetween = (start, end) => {
      let years = end.getFullYear() - start.getFullYear();
      let months = end.getMonth() - start.getMonth();
      if(end.getDate() < start.getDate()) months--;
      if(months < 0){ years--; months += 12; }
      return { years, months };
    };

    const now = new Date();
    const currentRoleStart = new Date('2026-06-01');
    const inRole = now >= currentRoleStart ? monthsBetween(currentRoleStart, now) : { years:0, months:0 };
    setRoleLabel(inRole.years > 0 ? `${inRole.years} yr ${inRole.months} mo in role` : `${inRole.months} mo in role`);
  }, []);

  return (
    <section className="block tinted" id="experience">
      <div className="wrap reveal">
        <div className="section-head">
          <span className="eyebrow">Experience</span>
          <h2>Where I've worked</h2>
        </div>
        
        <div className="exp-timeline">
          {experienceData.map((companyData, compIndex) => (
            <React.Fragment key={compIndex}>
              {companyData.roles.map((role, roleIndex) => (
                <div className={`exp-item ${role.isCurrent ? 'current' : ''}`} key={roleIndex}>
                  <div className="exp-card">
                    
                    {/* Render Image if URL exists, otherwise fallback to Text */}
                    {companyData.logoUrl ? (
                      <img 
                        src={companyData.logoUrl} 
                        alt={`${companyData.company} logo`} 
                        style={{ width: '52px', height: '52px', borderRadius: '10px', objectFit: 'contain', flex: '0 0 auto', backgroundColor: '#fff' }} 
                      />
                    ) : (
                      <div className="tcs-mark sm">{companyData.logoText}</div>
                    )}
                    
                    <div className="exp-body">
                      <h3>{role.title}</h3>
                      <div className="role">
                        {companyData.company} {role.location ? `· ${role.location}` : ''}
                      </div>
                      <div className="dates">{role.dates}</div>
                      <p>{role.desc}</p>
                      
                      {role.isCurrent ? (
                        <span className="exp-badge current">{roleLabel}</span>
                      ) : (
                        <span className="exp-badge past">{role.badgeText}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
}