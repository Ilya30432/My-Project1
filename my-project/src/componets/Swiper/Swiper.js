import React, { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { RiDoubleQuotesR } from "react-icons/ri";

function Swiper({ data , className}) {
  const [activSlide, activSlideId] = useState(0);
  const prev = () => {
    activSlideId((activSlide) => {
      if (activSlide === 0) {
        return data.length -1;
      } else {
        return activSlide -1 ;
      }
    });
  };
  const next = () => {
    activSlideId((activSlide) => {
      if (activSlide === data.length -1) {
        return 0;
      } else {
        return activSlide +1 ;
      }
    });
  };
  return (
    <>
      <GoArrowLeft className="arrow-left arrow" onClick={next} />
      <GoArrowRight className="arrow-rigth arrow" onClick={prev} />
      {data.map((data,idx) => {
         const words = data.name.split(' '); // Разделение текста на массив слов
         const firstTwoWords = words.slice(0, 2).join(' '); // Первые два слова
         const restText = words.slice(2).join(' '); // Остальной текст
        return(
        <div className = {`${className} ${idx === activSlide ? "activ-slider" : "hidden"}`} key={data.id}>
          <p className="testimonials-box__title">
          <span className="testimonials-box__first-words">{firstTwoWords}</span>
          <span className="testimonials-box__rest">{restText}</span>
          </p>
          <p className="testimonials-box__text">{data.text}</p>
          <img className= "testimonials-box__img"src={data.img} />
          <RiDoubleQuotesR  className="testimonials-box__quotes"/>
        </div>
        );
      })}
    </>
  );
}

export default Swiper;
