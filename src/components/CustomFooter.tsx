import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

function CustomFooter() {
  return (
    <footer>
      <div className="footer-text">
        <p>
          Thank you for reaching the end of the portfolio.
          This is website that I created from scratch using React and Typescript.
        </p>
        <div className="footer-btn-to-top">
          <a href="#header">
            <FontAwesomeIcon icon={faAngleUp} style={{width:30,height:30}}/> <br />
            To Top
          </a>
        </div>
      </div>
    </footer>
  )
}

export default CustomFooter;