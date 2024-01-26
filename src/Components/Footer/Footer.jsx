import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/sunway_logo_white.png";
import "./Footer.css";

// A custom footer component using react bootstrap classNamees
function Footer() {
  return (
    <>
      <div className="footer-basic bg-dark">
        <footer>
          <div className="social">
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#">
            <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#">
            <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="#">Home</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Services</a>
            </li>
            <li className="list-inline-item">
              <a href="#">About</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Terms</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
          <p className="copyright">Sunway Solar Systems © 2024</p>
        </footer>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
    </>
  );
}

export default Footer;
