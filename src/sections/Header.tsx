import type { AboutMeType } from '../types/resume';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

type Props = {
  aboutMeData: AboutMeType;
}

function Header({aboutMeData}: Props) {
  return (
    <div id="header" className="header-section">
      <img 
        src="/header/my-pic.jpg"
        alt="My Picture"
        className="header-picture"
      />
      <div>
        <span className="header-title">{aboutMeData.name}</span>
        <br />
        <small><FontAwesomeIcon icon={faEllipsis} /></small>
        <h3 style={{padding:10}}>{aboutMeData.description}</h3>
      </div>
    </div>
  )
}

export default Header;
