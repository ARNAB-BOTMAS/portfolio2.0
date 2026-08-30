import { educationData } from '../data/education';

export default function Education() {
  return (
    <section className="block" id="education">
      <div className="wrap reveal">
        <div className="section-head">
          <span className="eyebrow">Education</span>
          <h2>Academic background</h2>
        </div>
        <div className="timeline">
          {educationData.map((edu, index) => (
            <div className={`tl-item ${edu.statusClass === 'progress' ? 'current' : ''}`} key={index}>
              <div className="tl-card" style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                
                {/* Render the school/university logo */}
                {edu.logoUrl && (
                  <img 
                    src={edu.logoUrl} 
                    alt={`${edu.inst} logo`} 
                    style={{ width: '48px', height: '48px', objectFit: 'contain', flex: '0 0 auto', borderRadius: '4px', backgroundColor: '#fff', padding: '2px' }} 
                  />
                )}
                
                <div style={{ flex: 1 }}>
                  <div className="tl-top">
                    <span className="tl-course">{edu.course}</span>
                    <span className="tl-year">{edu.year}</span>
                  </div>
                  <div className="tl-inst">{edu.inst}</div>
                  <span className={`tl-badge ${edu.statusClass}`}>{edu.status}</span>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}