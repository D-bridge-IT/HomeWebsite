import React from "react";
import "./ImgBlock.scss";
import { useTranslation } from "react-i18next";

const ImgBlock = () => {
  const { t } = useTranslation();
  return (
    <div className={"imgBlockWrapper"}>
      <img className={"imgBlockWrapper__img"} src={"./images/team.jpg"} />
      <div className={"imgBlockWrapper__content"}>
        <h2 className={"imgBlockWrapper__content__title"}>
          {t("imgBlock.title")}
        </h2>
        <p className={"imgBlockWrapper__content__description"}>
          {t("imgBlock.description")}
        </p>
        <p className={"imgBlockWrapper__content__mission"}>
          {t("imgBlock.mission")}
        </p>
        <ul className={"imgBlockWrapper__content__list"}>
          <li className={"imgBlockWrapper__content__list__item"}>
            {t("imgBlock.item1")}
          </li>
          <li className={"imgBlockWrapper__content__list__item"}>
            {t("imgBlock.item2")}
          </li>
          <li className={"imgBlockWrapper__content__list__item"}>
            {t("imgBlock.item3")}
          </li>
          <li className={"imgBlockWrapper__content__list__item"}>
            {t("imgBlock.item4")}
          </li>
          <li className={"imgBlockWrapper__content__list__item"}>
            {t("imgBlock.item5")}
          </li>
          <li className={"imgBlockWrapper__content__list__item"}>
            {t("imgBlock.item6")}
          </li>
          <li className={"imgBlockWrapper__content__list__item"}>
            {t("imgBlock.item7")}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ImgBlock;
