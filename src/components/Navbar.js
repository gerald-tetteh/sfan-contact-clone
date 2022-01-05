import { useRef } from "react";
import BrandImg from "../images/sfan.png";
import NavbarItems from "./NavbarItems";

const Navbar = () => {
  const navMobileRef = useRef();
  const handleShowMobileNav = () => {
    if (navMobileRef.current.classList.contains("navbar__nav__show")) {
      navMobileRef.current.classList.remove("navbar__nav__show");
    } else {
      navMobileRef.current.classList.add("navbar__nav__show");
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar__main">
        <a href="/" className="navbar__brand">
          <img src={BrandImg} alt="SFAN logo" className="navbar__brand__img" />
        </a>
        <NavbarItems />
        <span onClick={handleShowMobileNav} className="navbar__nav__button">
          &nbsp;
        </span>
      </div>
      <NavbarItems _ref={navMobileRef} cls="navbar__nav--mobile" />
    </nav>
  );
};

export default Navbar;
