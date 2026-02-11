import type { ContactsType } from '../types/resume';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

type Props = {
  data: ContactsType[];
}

const iconMap: any = {
  faEnvelope,
  faGithub,
  faLinkedin
};

function Contacts({data}: Props) {
  return (
    <div id="contacts" className="contacts-section">
      <h1 className="section-header">Contacts</h1>

      <div className="contacts-list">
        {data.map((contact) => (
          <div key={contact.username} className="contact-item">
            <a href={contact.url} title={contact.url} target="_blank">
              <FontAwesomeIcon icon={iconMap[contact.icon]} style={{width:50,height:50}}/>
            </a>
            {contact.username}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Contacts;
