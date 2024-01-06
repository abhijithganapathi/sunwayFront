import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/sunway_logo_white.png";

// A custom footer component using react bootstrap classNamees
function Footer() {
  return (
    <div className="bg-dark p-5">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-white">© Sunway Solar Systems 2024</p>

        <a
          href="/"
          className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <a href="/" className="logo">
            <img
              style={{height: "50px" }}
              src={logo}
              alt="logo"
            />
          </a>
        </a>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="iconcolor" href="www.facebook.com">
              <FontAwesomeIcon
                icon={faFacebook}
                size="2x"
                color="#3b5998"
              />
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="www.facebook.com">
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                color="#3b5998"
              />
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="www.facebook.com">
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                color="#3b5998"
              />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
