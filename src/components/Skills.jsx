import { skillsData } from '../data/skills';

export default function Skills() {
  return (
    <section className="block" id="skills">
      <div className="wrap reveal">
        <div className="section-head">
          <span className="eyebrow">Skills</span>
          <h2>Technologies I work with</h2>
        </div>
        <div className="skills-groups">
          {skillsData.map((group, index) => (
            <div key={index}>
              <div className="skill-group-label">{group.category}</div>
              <div className="pill-row">
                {group.items.map((skill, i) => (
                  <span className="pill" key={i}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}