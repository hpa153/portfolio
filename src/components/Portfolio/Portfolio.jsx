import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";

import "./Portfolio.scss";
import airbnb from "../../img/airbnb.png";
import java from "../../img/java.png";
import video from "../../img/video.png";
import wordle from "../../img/wordle.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={airbnb} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={java} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={wordle} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={video} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
