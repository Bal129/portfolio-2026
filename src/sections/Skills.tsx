import type { SkillsType } from '../types/resume';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faToolbox } from '@fortawesome/free-solid-svg-icons';
import { faGears } from '@fortawesome/free-solid-svg-icons';

type Props = {
  data: SkillsType[];
}

const iconMap: any = {
  faLaptopCode,
  faToolbox,
  faGears
};

function Skills({data}: Props) {
  return (
    <div className="skills-section">
      <h1 className="section-header">Skills &amp; Expertise</h1>

      {data.map((skillCategory) => (
        <div key={skillCategory.type} className="skill-container">
          <h2 className="skill-header">
            <FontAwesomeIcon icon={iconMap[skillCategory.icon]} style={{marginRight: "10px"}} />
            {skillCategory.type}
          </h2>
          <div className="skill-list">
            {skillCategory.items.map((skill) => (
              <div key={skill.name} className="skill-item">
                <img 
                  src={"/icons/"+skill.icon}
                  title={skill.name}
                  alt={skill.name}
                  width="100" height="100"
                />
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Skills;
