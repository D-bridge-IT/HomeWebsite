import React from "react";
import Header from "../../components/Header/Header";
import ContentBlock from "../../components/ContentBlock/ContentBlock";
import "./Home.scss";
import PossibilitiesBlock from "../../components/PossibilitiesBlock/PossibilitiesBlock";
import Accordion from "../../components/Accordion/Accordion";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import ImgBlock from "../../components/ImgBlock/ImgBlock";
import UpButton from "../../components/UpButton/UpButton";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className={"home"}>
      <div className={"headerBackground"}>
        <Header></Header>
        <ContentBlock
          imageSrc="./images/work.jpg"
          heading="D-Bridge"
          description={t("banner.description")}
        ></ContentBlock>
      </div>
      <ImgBlock></ImgBlock>
      <PossibilitiesBlock></PossibilitiesBlock>
      <Accordion />
      <Contact></Contact>
      <UpButton></UpButton>
      <Footer></Footer>
    </div>
  );
};

export default Home;
