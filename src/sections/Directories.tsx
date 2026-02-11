import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

function Directories() {
  return (
    <div className="directories-tab">
      <a href="#header">Profile</a>
      <small><FontAwesomeIcon icon={faCircle} /></small>
      <a href="#contacts">Contacts</a>
      <small><FontAwesomeIcon icon={faCircle} /></small>
      <a href="#projects">Projects</a>
    </div>
  )
}

export default Directories;