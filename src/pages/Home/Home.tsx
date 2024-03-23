import React from "react";
import Header from "../../components/Header/Header";
import ContentBlock from "../../components/ContentBlock/ContentBlock";
import "./Home.scss";
import PossibilitiesBlock from "../../components/PossibilitiesBlock/PossibilitiesBlock";
import ReviewSlider from "../../components/ReviewSlider/ReviewSlider";
import Accordion from "../../components/Accordion/Accordion";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className={"home"}>
      <Header></Header>
      <ContentBlock
        imageSrc="./images/work.jpg"
        heading="D-Bridge"
        description="Построй своё будущее вместе с нами"
      ></ContentBlock>
      <PossibilitiesBlock></PossibilitiesBlock>
      <ReviewSlider></ReviewSlider>
      <Accordion />
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
