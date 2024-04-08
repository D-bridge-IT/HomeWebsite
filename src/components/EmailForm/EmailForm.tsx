import React from "react";
import "./EmailForm.scss";
import { useTranslation } from "react-i18next";

const EmailForm = ({}) => {
  const { t } = useTranslation();
  return (
    <form className="emailForm">
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />
      <label htmlFor="email">{t("contactBlock.emailForm.name")}</label>
      <input type="email" id="email" name="email" required />
      <label htmlFor="email">{t("contactBlock.emailForm.lastName")}</label>
      <input type="email" id="email" name="email" required />
      <label htmlFor="email">{t("contactBlock.contacts.number")}</label>
      <input type="email" id="email" name="email" required />
      <label htmlFor="message">{t("contactBlock.emailForm.message")}</label>
      <textarea id="message" name="message" rows={4} cols={50} required />
      <button type="submit">{t("contactBlock.emailForm.send")}</button>
    </form>
  );
};

export default EmailForm;
