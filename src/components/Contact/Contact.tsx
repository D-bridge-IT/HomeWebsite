import React from "react";
import EmailForm from "../EmailForm/EmailForm";
import "./Contact.scss";

const Contact = () => {
  return (
    <div id={"contact"} className={"contactWrapper"}>
      <h2 className={"contactWrapper__title"}>Как с нами связаться?</h2>
      <div className={"contactWrapper__content"}>
        <div className={"contactWrapper__content__email"}>
          <h3 className={"contactWrapper__content__email__subtitle"}>
            Напишите нам
          </h3>
          <EmailForm></EmailForm>
        </div>
        <div className={"contactWrapper__content__mapContainer"}>
          <h3 className={"contactWrapper__content__mapContainer__mapSubtitle"}>
            Наш адресс
          </h3>
          <div className="contactWrapper__content__mapContainer__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1250.278656647958!2d6.442292539019733!3d51.190381673969895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8acbdf36d30d7%3A0xd069961a1b9d1516!2sOststra%C3%9Fe%2012%2C%2041065%20M%C3%B6nchengladbach!5e0!3m2!1sru!2sde!4v1710966151204!5m2!1sru!2sde"
              width="850"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="contactWrapper__content__mapContainer__smallMap">
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
  );
};

export default Contact;
