import React from "react";
import "./MyButton.scss";

interface ButtonProps {
  targetId: string;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ targetId, text }) => {
  const scrollToTarget = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <button className="custom-button" onClick={scrollToTarget}>
      {text}
    </button>
  );
};

export default Button;
