import React from "react";
import "./ContentBlock.scss";
import MyButton from "../MyButton/MyButton";

interface ContentBlockProps {
  imageSrc: string;
  heading: string;
  description: string;
}

const ContentBlock: React.FC<ContentBlockProps> = ({
  imageSrc,
  heading,
  description,
}) => {
  return (
    <div className="contentBlockWrapper">
      <img src={imageSrc} alt="Work" className="contentBlockWrapper__img" />
      <div className="contentBlockWrapper__content">
        <h1 className="contentBlockWrapper__content__title">{heading}</h1>
        <p className="contentBlockWrapper__content__description">
          {description}
        </p>
        <MyButton
          targetId={"contact"}
          text={"Присоединяйтесь к нам"}
        ></MyButton>
      </div>
    </div>
  );
};

export default ContentBlock;
