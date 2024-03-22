import React from "react";
import "./EmailForm.scss";

const EmailForm = ({}) => {
  return (
    <form className="emailForm">
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />
      <label htmlFor="message">Сообщение:</label>
      <textarea id="message" name="message" rows={4} cols={50} required />
      <button type="submit">Отправить</button>
    </form>
  );
};

export default EmailForm;
