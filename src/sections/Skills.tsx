import type { SkillsType } from '../types/types';

type Props = {
  data: SkillsType[];
}

function Skills({data}: Props) {
  return (
    <div>
      <h1>Skills &amp; Expertise</h1>

      {data.map((skillCategory) => (
        <div key={skillCategory.type}>
          <h3>{skillCategory.type}</h3>
          {skillCategory.items.map((skill) => (
            <div key={skill.name}>
              <img 
                src={"/icons/"+skill.icon}
                title={skill.name}
                alt={skill.name}
                width="50" height="50"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Skills;
