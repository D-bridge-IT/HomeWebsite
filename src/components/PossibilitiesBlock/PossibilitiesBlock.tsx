import React from "react";
import "././PossibilitiesBlock.scss";
import PosibilitiesItem from "../PossibilitiesItem/PosibilitiesItem";
import { useTranslation } from "react-i18next";

const PossibilitiesBlock = () => {
  const { t } = useTranslation();
  return (
    <div id={"about"} className={"possibilitiesBlockWrapper"}>
      <hr className={"possibilitiesBlockWrapper__divider"}></hr>
      <div className={"possibilitiesBlockWrapper__itemsSide"}>
        <PosibilitiesItem
          image={"./logo/earphone.svg"}
          title={t("possibilitiesItem.title1")}
          description={t("possibilitiesItem.description1")}
        />
        <PosibilitiesItem
          image={"./logo/gamepad.svg"}
          title={t("possibilitiesItem.title2")}
          description={t("possibilitiesItem.description2")}
        />
        <PosibilitiesItem
          image={"./logo/plan.svg"}
          title={t("possibilitiesItem.title3")}
          description={t("possibilitiesItem.description3")}
        />
        <PosibilitiesItem
          image={"./logo/wallet.svg"}
          title={t("possibilitiesItem.title4")}
          description={t("possibilitiesItem.description4")}
        />
      </div>
      <hr className={"possibilitiesBlockWrapper__bottomDivider"}></hr>
    </div>
  );
};

export default PossibilitiesBlock;
