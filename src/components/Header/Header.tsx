import React from "react";
import { useTranslation } from "react-i18next";
import "./Header.scss";

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <div className="header__img">
        <img className="header__img__logo" src={"./logo/logo.svg"} alt="logo" />
      </div>
      <nav className="header__nav">
        <ul className="header__nav__list">
          <li className="header__nav__list__item">
            <a
              className="header__nav__list__item__link"
              onClick={() => scrollToSection("about")}
            >
              {t("header.aboutUs")}
            </a>
          </li>
          <li className="header__nav__list__item">
            <a
              className="header__nav__list__item__link"
              onClick={() => scrollToSection("contact")}
            >
              {t("header.contact")}
            </a>
          </li>
          {/* Language selector */}
          <li className="box">
            <select
              value={i18n.language}
              onChange={(e) => changeLanguage(e.target.value)}
            >
              <option value="en">English</option>
              <option value="de">Deutsch</option>
              <option value="ru">Русский</option>
              <option value="uk">Українська</option>
            </select>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
