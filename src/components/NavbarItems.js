const NavbarItems = ({ cls, _ref }) => {
  return (
    <ul ref={_ref} className={`navbar__nav ${cls ?? ""}`}>
      <li className="navbar__nav-item dropdown">
        <span>company</span>
        <ul className="dropdown__list">
          <li className="dropdown__list-item">
            <a href="#about-us" className="dropdown__link">
              about us
            </a>
          </li>
          <li className="dropdown__list-item">
            <a href="#our-team" className="dropdown__link">
              our team
            </a>
          </li>
          <li className="dropdown__list-item">
            <a href="#partner-us" className="dropdown__link">
              partner us
            </a>
          </li>
          <li className="dropdown__list-item">
            <a href="#join-us" className="dropdown__link">
              join us
            </a>
          </li>
          <li className="dropdown__list-item">
            <a href="#careers" className="dropdown__link">
              careers
            </a>
          </li>
          <li className="dropdown__list-item dropdown__active">
            <a href="#contact-us" className="dropdown__link">
              contact us
            </a>
          </li>
        </ul>
      </li>
      <li className="navbar__nav-item dropdown">
        <span>support studio</span>
        <ul className="dropdown__list">
          <li className="dropdown__list-item">
            <a href="#resume-service" className="dropdown__link">
              resume service
            </a>
          </li>
          <li className="dropdown__list-item">
            <a href="#venture-studio" className="dropdown__link">
              venture studio
            </a>
          </li>
        </ul>
      </li>
      <li className="navbar__nav-item navbar__nav-item--link">
        <a href="#events" className="navbar__link">
          events
        </a>
      </li>
      <li className="navbar__nav-item navbar__nav-item--link">
        <a href="#media" className="navbar__link">
          media
        </a>
      </li>
      <li className="navbar__nav-item navbar__nav-item--link">
        <a href="#readyforwork" className="navbar__link">
          readyforwork
        </a>
      </li>
    </ul>
  );
};

export default NavbarItems;
