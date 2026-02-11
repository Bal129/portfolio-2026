import type { AboutMeType, CertificationsType, ExperiencesType } from '../types/resume';

type Props = {
  aboutMeData: AboutMeType;
  certificationsData: CertificationsType[];
  experiencesData: ExperiencesType[];
}

function Profile({aboutMeData,certificationsData, experiencesData}: Props) {
  return (
    <div id="profile">
      <h1>About Me</h1>

      {aboutMeData.description} <br />

      <h1>Experiences</h1>

      {experiencesData.map((experience) => (
        <div key={experience.role}>
          <h3>{experience.role}</h3>
          {experience.type} <br />
          {experience.company} <br />
          {experience.date_start} - {experience.date_end} <br />
          {experience.description} <br />
        </div>
      ))}

      <h1>Certifications</h1>

      {certificationsData.map((certification) => (
        <div key={certification.name}>
          <a href={certification.credential_url}>
            <img 
              src={"/icons/"+certification.icon}
              title={certification.name}
              alt={certification.name}
              width="50" height="50"
            />
          </a>
          <h3>{certification.name}</h3>
          {certification.date} <br />
        </div>
      ))}
    </div>
  )
}

export default Profile;
