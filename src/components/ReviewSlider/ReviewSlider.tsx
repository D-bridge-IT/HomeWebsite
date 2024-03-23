import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ReviewSlider.scss";

class ReviewSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
    };

    return (
      <div className="slider-container">
        <h1 className={"slider-container__title"}>Что о нас говорят люди:</h1>
        <Slider {...settings}>
          <div>
            <div className={"slider-container__reviewContainer"}>
              <img
                className={"slider-container__reviewContainer__img"}
                src={"./images/review1.png"}
              />
              <p className={"slider-container__reviewContainer__name"}>
                Aleksandr
              </p>
              <p className={"slider-container__reviewContainer__description"}>
                It-specialist
              </p>
              <h3 className={"slider-container__reviewContainer__reviewText"}>
                Присоединившись к этой волонтерской организации, я нашел не
                только возможность помочь другим, но и настоящее сообщество
                единомышленников. Здесь каждый член команды ценится и
                поддерживается, и вместе мы делаем значимые изменения в нашем
                обществе.
              </h3>
            </div>
          </div>
          <div>
            <div className={"slider-container__reviewContainer"}>
              <img
                className={"slider-container__reviewContainer__img"}
                src={"./images/review5.png"}
              />
              <p className={"slider-container__reviewContainer__name"}>
                Gabriel
              </p>
              <p className={"slider-container__reviewContainer__description"}>
                Doctor
              </p>
              <h3 className={"slider-container__reviewContainer__reviewText"}>
                Я впервые принял участие в деятельности волонтерской
                организации, и могу сказать, что это было потрясающее и
                вдохновляющее испытание. Волонтеры здесь - настоящие герои, их
                энтузиазм и преданность приводят к реальным изменениям, оказывая
                помощь нуждающимся и привлекая внимание к социальным проблемам.
              </h3>
            </div>
          </div>
          <div>
            <div className={"slider-container__reviewContainer"}>
              <img
                className={"slider-container__reviewContainer__img"}
                src={"./images/review3.png"}
              />
              <p className={"slider-container__reviewContainer__name"}>
                Martin
              </p>
              <p className={"slider-container__reviewContainer__description"}>
                Businessman
              </p>
              <h3 className={"slider-container__reviewContainer__reviewText"}>
                Я был поражен профессионализмом и сердечным отношением
                сотрудников и волонтеров этой организации. Мы работали вместе
                над различными проектами, направленными на поддержку детей в
                трудных жизненных ситуациях, и каждый раз я видел, как наша
                работа действительно вносит положительное изменение в их жизни.
              </h3>
            </div>
          </div>
          <div>
            <div className={"slider-container__reviewContainer"}>
              <img
                className={"slider-container__reviewContainer__img"}
                src={"./images/review2.png"}
              />
              <p className={"slider-container__reviewContainer__name"}>Maria</p>
              <p className={"slider-container__reviewContainer__description"}>
                Dentist
              </p>
              <h3 className={"slider-container__reviewContainer__reviewText"}>
                Благодаря этой волонтерской организации, я стал частью движения,
                направленного на защиту окружающей среды. Наша команда проводит
                мероприятия по очистке прибрежных зон и заботится о сохранении
                экосистемы. Я горжусь тем, что могу быть частью этой важной
                работы."
              </h3>
            </div>
          </div>
          <div>
            <div className={"slider-container__reviewContainer"}>
              <img
                className={"slider-container__reviewContainer__img"}
                src={"./images/review4.png"}
              />
              <p className={"slider-container__reviewContainer__name"}>
                Sebastian
              </p>
              <p className={"slider-container__reviewContainer__description"}>
                Engineer
              </p>
              <h3 className={"slider-container__reviewContainer__reviewText"}>
                Участвуя в мероприятиях этой волонтерской организации, я получил
                не только ценный опыт и навыки, но и невероятное удовольствие от
                общения с замечательными людьми. Это место, где каждый может
                найти свое призвание и внести свой вклад в создание лучшего
                мира.
              </h3>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default ReviewSlider;
