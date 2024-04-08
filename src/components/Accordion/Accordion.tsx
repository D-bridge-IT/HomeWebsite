import React, { useState } from "react";
import "./Accordion.scss";
import FaqBlock from "../FaqBlock/FaqBlock";
import { useTranslation } from "react-i18next";

const Accordion = () => {
  const [displaySide, setDisplaySide] = useState("left");
  const { t } = useTranslation();

  return (
    <div>
      <h2 className={"title"}>{t("accordion.title")}</h2>
      <div className={"radioContainer"}>
        <div className={"radioContainer__btn"}>
          <input
            type="radio"
            id="leftSide"
            name="side"
            value="left"
            checked={displaySide === "left"}
            onChange={() => setDisplaySide("left")}
          />
          <label htmlFor="leftSide" className={"radioContainer__btn__label"}>
            {t("accordion.label1")}
          </label>
        </div>
        <div className={"radioContainer__btn"}>
          <input
            type="radio"
            id="rightSide"
            name="side"
            value="right"
            checked={displaySide === "right"}
            onChange={() => setDisplaySide("right")}
          />
          <label htmlFor="rightSide" className={"radioContainer__btn__label"}>
            {t("accordion.label2")}
          </label>
        </div>
      </div>

      <div className={"accordionWrapper"}>
        {displaySide === "left" && (
          <div className={"accordionWrapper__leftSide"}>
            <p className={"accordionWrapper__leftSide__description"}>
              {t("accordion.description1")}
            </p>
            <FaqBlock
              title={t("accordion.items.subtitle1")}
              content={t("accordion.items.text1")}
            />
            <FaqBlock
              title={t("accordion.items.subtitle2")}
              content={t("accordion.items.text2")}
            />
            <FaqBlock
              title={t("accordion.items.subtitle3")}
              content={t("accordion.items.text3")}
            />
            <FaqBlock
              title={t("accordion.items.subtitle4")}
              content={t("accordion.items.text4")}
            />
            <FaqBlock
              title={t("accordion.items.subtitle5")}
              content={t("accordion.items.text5")}
            />
          </div>
        )}

        {displaySide === "right" && (
          <div className={"accordionWrapper__rightSide"}>
            <p className={"accordionWrapper__rightSide__description"}>
              {t("accordion.description2")}
            </p>
            <FaqBlock
              title={t("accordion.items.subtitle6")}
              content={t("accordion.items.text6")}
            />
            <FaqBlock
              title={t("accordion.items.subtitle7")}
              content={t("accordion.items.text7")}
            />
            <FaqBlock
              title={t("accordion.items.subtitle8")}
              content={t("accordion.items.text8")}
            />
            <FaqBlock
              title={t("accordion.items.subtitle9")}
              content={t("accordion.items.text9")}
            />
            <FaqBlock
              title={t("accordion.items.subtitle10")}
              content={t("accordion.items.text10")}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
