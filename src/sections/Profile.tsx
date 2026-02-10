import type { EducationType, CertificationsType, ExperiencesType } from '../types/types';

type Props = {
  educationData: EducationType;
  certificationsData: CertificationsType[];
  experiencesData: ExperiencesType[];
}

function Profile({educationData, certificationsData, experiencesData}: Props) {
  return (
    <div>
      <h1>Educations</h1>

      {educationData.courses.map((course) => (
        <div key={course}>
        <h3>{course}</h3>
        </div>
      ))}
      {educationData.institution} <br />
      {educationData.date_start + " - " + educationData.date_end} <br />

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
    </div>
  )
}

export default Profile;
