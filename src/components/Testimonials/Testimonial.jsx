import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";

import "./Testimonial.scss";
import intern from "../../img/intern.png";
import jsprof from "../../img/jsprof.png";
import phpprof from "../../img/phpprof.png";
import javaprof from "../../img/nodeprof.png";

const Testimonial = () => {
  const feedbacks = [
    {
      img: intern,
      content:
        "I can see your passion about programming and know that you will make it far. When you return to Vietnam, I hope you consider to work here.",
      name: "Hoang Linh Truong - CTO at ApecSoft Ltd., Hanoi, Vietnam",
    },
    {
      img: jsprof,
      content:
        "Amazing job! You have done huge steps on your path towards your career and I wish you nothing but the best for it.",
      name: "Marcelo Hespanhol - JS Professor at Fanshawe College",
    },
    {
      img: phpprof,
      content:
        "I'd like to congratulate you on your fabulous labs/projects and tests in this course. If you have any coops coming up - or need references for work; please reach out.",
        name: "Kjartan Hermansen - PHP Professor at Fanshawe College",
    },
    {
      img: javaprof,
      content:
        "Your project was impressive. You are ready for real work now. If you need any recommendations for IT companies here in Hanoi, feel free to ask me.",
      name: "Quang Dang Bui - Tutor at Stanford Ltd., Hanoi, Vietnam",
    },
  ];

  return (
    <div className="testimonial-wrapper" id="testimonial">
      <div className="testimonial-heading">
        <span>Feedback about </span>
        <span>My Skills </span>
        <span>from my professors/tutors...</span>
      </div>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {feedbacks.map((feedback, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={feedback.img} alt="" />
                <span>{feedback.content}</span>
                <span>-- {feedback.name} --</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
