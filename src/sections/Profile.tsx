import type {CertificationsType, ExperiencesType } from '../types/resume';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusinessTime } from '@fortawesome/free-solid-svg-icons';
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';

type Props = {
  certificationsData: CertificationsType[];
  experiencesData: ExperiencesType[];
}

function Profile({certificationsData, experiencesData}: Props) {
  return (
    <div id="profile" className="profile-details">
      <div className="experiences-section">
        <h1 className="section-header">Experiences</h1>
        {experiencesData.map((experience) => (
          <div key={experience.role} className="experiences-container">
            <div className="experiences-period">
              {experience.date_start} - {experience.date_end} <br />
            </div>
            <div className="experiences-details">
              <div className="experiences-role">
                <h3 className="experiences-name">{experience.role}</h3>
                <div>
                  <FontAwesomeIcon icon={faBusinessTime} />
                  <small style={{paddingLeft:"5px"}}>{experience.type}</small>
                </div>
              </div>
              <div className="experiences-company">
                <img 
                  src={"/icons/"+experience.icon}
                  title={experience.company}
                  alt={"Logo for"+experience.company}
                  width="35" height="35"
                />
                {experience.company}
              </div>
              {experience.description} <br />
            </div>
          </div>
        ))}
      </div>

      <div className="certifications-section">
        <h1 className="section-header">Certifications</h1>
        {certificationsData.map((certification) => (
          <div className="certifications-container" key={certification.name}>            
            <img 
              src={"/icons/"+certification.icon}
              title={certification.name}
              alt={certification.name}
              width="120" height="120"
            />
            <a href={certification.credential_url} title="Check Credential" target="_blank">
              <h3 className="certifications-name">
                {certification.name}
                <small style={{paddingLeft:"10px"}}><FontAwesomeIcon icon={faArrowTrendUp} /></small>
              </h3>
            </a>
            {certification.date} <br />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Profile;
