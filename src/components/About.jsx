import { experienceData } from '../data/experience';
import { contactData } from '../data/contact';

export default function About() {
  const currentCompany = experienceData[0].company;
  const companyShortName = experienceData[0].shortName;
  const currentRole = experienceData[0].roles[0].title;
  
  const article = /^[aeiou]/i.test(currentRole) ? 'an' : 'a';

  return (
    <section className="block tinted" id="about">
      <div className="wrap reveal">
        <div className="section-head">
          <span className="eyebrow">About</span>
          <h2>A little about my background</h2>
        </div>
        <div className="about-grid">
          <div>
            <p><strong>Hi, I'm Arnab</strong> — a full-stack developer currently working as {article} <strong>{currentRole}</strong> at <strong>{currentCompany}</strong>. I like turning ambiguous problems into working software, whether that's a web app, an Android client, or a backend API.</p>
            <p>My background spans <strong>Java, C, C++ and Python</strong>, and day-to-day I build with <strong>React, Node.js and SQL/Firebase</strong> on the web side, alongside native <strong>Android</strong> development. I care about clear communication as much as clean code — most of what I ship is built alongside a team, not alone.</p>
          </div>
          <div className="info-cards">
            <div className="info-card"><div className="lbl">Email</div><div className="val">{contactData.email}</div></div>
            <div className="info-card"><div className="lbl">Phone</div><div className="val">{contactData.phone}</div></div>
            <div className="info-card"><div className="lbl">Location</div><div className="val">{contactData.shortLocation}</div></div>
            <div className="info-card"><div className="lbl">Role</div><div className="val">{currentRole}, {companyShortName}</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}