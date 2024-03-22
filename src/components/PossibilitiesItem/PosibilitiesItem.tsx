import React from "react";
import "./PossibilitiesItem.scss";

interface PossibilitiesItemProps {
  image: string;
  title: string;
  description: string;
}

const PosibilitiesItem: React.FC<PossibilitiesItemProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className={"possibilitiesWrapper"}>
      <h3 className={"possibilitiesWrapper__title"}>{title}</h3>
      <div className={"possibilitiesWrapper__imgContainer"}>
        <img
          className={"possibilitiesWrapper__imgContainer__img"}
          src={image}
        />
      </div>
      <p className={"possibilitiesWrapper__description"}>{description}</p>
    </div>
  );
};

export default PosibilitiesItem;
