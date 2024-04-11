import React from "react";
import EmailForm from "../EmailForm/EmailForm";
import "./Contact.scss";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div id={"contact"} className={"contactWrapper"}>
      <h2 className={"contactWrapper__title"}>{t("contactBlock.title")}</h2>
      <div className={"contactWrapper__content"}>
        <div className={"contactWrapper__content__email"}>
          <h3 className={"contactWrapper__content__email__subtitle"}>
            {t("contactBlock.emailForm.title")}
          </h3>
          <EmailForm></EmailForm>
        </div>
        <div className={"contactWrapper__content__rightSide"}>
          <div className={"contactWrapper__content__rightSide__contacts"}>
            <h3
              className={
                "contactWrapper__content__rightSide__contacts__mainTitle"
              }
            >
              {t("contactBlock.contacts.title")}
            </h3>
            <div
              className={
                "contactWrapper__content__rightSide__contacts__wrapper"
              }
            >
              <h4
                className={
                  "contactWrapper__content__rightSide__contacts__wrapper__title"
                }
              >
                {t("contactBlock.contacts.office")}
              </h4>
              <p
                className={
                  "contactWrapper__content__rightSide__contacts__wrapper__text"
                }
              >
                D-Bridge e.V Wulfshofstraße 1,
              </p>
              <p
                className={
                  "contactWrapper__content__rightSide__contacts__wrapper__text"
                }
              >
                44149 Dortmund
              </p>
            </div>
          </div>
          <div className={"contactWrapper__content__rightSide__mapContainer"}>
            <h3
              className={
                "contactWrapper__content__rightSide__mapContainer__mapSubtitle"
              }
            >
              {t("contactBlock.map")}
            </h3>
            <div className="contactWrapper__content__rightSide__mapContainer__map">
              <iframe
                src="https://maps.google.com/maps?width=550&amp;height=200&amp;hl=en&amp;q=Wulfshofstra%C3%9Fe%201,%20%2044149%20Dortmund+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="550"
                height="350"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="contactWrapper__content__rightSide__mapContainer__smallMap">
              <iframe
                src="https://maps.google.com/maps?width=350&amp;height=200&amp;hl=en&amp;q=Wulfshofstra%C3%9Fe%201,%20%2044149%20Dortmund+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="350"
                height="200"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
