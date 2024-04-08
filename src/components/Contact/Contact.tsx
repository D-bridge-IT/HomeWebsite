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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1250.278656647958!2d6.442292539019733!3d51.190381673969895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8acbdf36d30d7%3A0xd069961a1b9d1516!2sOststra%C3%9Fe%2012%2C%2041065%20M%C3%B6nchengladbach!5e0!3m2!1sru!2sde!4v1710966151204!5m2!1sru!2sde"
                width="550"
                height="350"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="contactWrapper__content__rightSide__mapContainer__smallMap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1250.278656647958!2d6.442292539019733!3d51.190381673969895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8acbdf36d30d7%3A0xd069961a1b9d1516!2sOststra%C3%9Fe%2012%2C%2041065%20M%C3%B6nchengladbach!5e0!3m2!1sru!2sde!4v1710966151204!5m2!1sru!2sde"
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
