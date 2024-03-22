import React from "react";
import "./Header.scss";

const Header: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <div className="header__img">
        <img className="header__img__logo" src={"/logo/logo.svg"} alt="logo" />
      </div>
      <nav className="header__nav">
        <ul className="header__nav__list">
          <li className="header__nav__list__item">
            <a
              className="header__nav__list__item__link"
              onClick={() => scrollToSection("about")}
            >
              About&nbsp;us
            </a>
          </li>
          <li className="header__nav__list__item">
            <a
              className="header__nav__list__item__link"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
