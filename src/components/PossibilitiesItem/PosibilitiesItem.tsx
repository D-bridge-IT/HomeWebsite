import React from "react";
import "./PossibilitiesItem.scss";

interface PossibilitiesItemProps {
  image: string;
  title: string;
  description: string;
}

const PossibilitiesItem: React.FC<PossibilitiesItemProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className={"possibilitiesWrapper"}>
      <div className={"possibilitiesWrapper__imgContainer"}>
        <img
          className={"possibilitiesWrapper__imgContainer__img"}
          src={image}
          alt={title}
        />
        <p className={"possibilitiesWrapper__description"}>{description}</p>
        <h3 className={"possibilitiesWrapper__title"}>{title}</h3>
      </div>
    </div>
  );
};

export default PossibilitiesItem;
