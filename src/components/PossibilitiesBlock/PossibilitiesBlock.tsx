import React from "react";
import "././PossibilitiesBlock.scss";
import PosibilitiesItem from "../PossibilitiesItem/PosibilitiesItem";

const PossibilitiesBlock = () => {
  return (
    <div id={"about"} className={"possibilitiesBlockWrapper"}>
      <div className={"possibilitiesBlockWrapper__textSide"}>
        <h2 className={"possibilitiesBlockWrapper__textSide__title"}>
          Чем мы поможем?
        </h2>
        <p className={"possibilitiesBlockWrapper__textSide__description"}>
          Наша организация D-Bridge e.V. ориентирована на всех, кто стремится к
          лучшему будущему, независимо от миграционного происхождения или
          гражданства. Мы поддерживаем не только тех, кто нуждается в помощи, но
          и предлагаем проекты и программы, которые могут быть интересны немцам.
          Мы также предоставляем целенаправленную поддержку бизнес-клубам и
          предпринимателям. Наша программа включает в себя специализированное и
          профессиональное консультирование для предпринимателей, нуждающихся в
          помощи в своем профессиональном развитии, включая разработку
          бизнес-планов, маркетинговых стратегий и финансового управления. Цель
          D-Bridge e.V. - создать интегративную платформу, объединяющую людей с
          разными культурными фонами для создания возможностей, раскрытия
          потенциала и поощрения взаимопонимания.
        </p>
      </div>
      <hr className={"possibilitiesBlockWrapper__divider"}></hr>
      <div className={"possibilitiesBlockWrapper__itemsSide"}>
        <PosibilitiesItem
          image={"/logo/earphone.svg"}
          title={"Консультации"}
          description={"Проконсультируем вас по любому вопросу."}
        />
        <PosibilitiesItem
          image={"/logo/gamepad.svg"}
          title={"Программы для детей"}
          description={
            "Поможем ребенку как в учебе, так и в творческом или спортивном развитии."
          }
        />
        <PosibilitiesItem
          image={"/logo/plan.svg"}
          title={"Интеграция"}
          description={"Поможем в интеграции в новое общество."}
        />
        <PosibilitiesItem
          image={"/logo/wallet.svg"}
          title={"Трудоустройство"}
          description={
            "Сделаем всё возможное для вашего скорейшего трудоустройства."
          }
        />
      </div>
    </div>
  );
};

export default PossibilitiesBlock;
