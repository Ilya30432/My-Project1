import React, { useState } from "react"
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

function Slider({ data, className }) {
    const [activSlide , activSlideId] = useState(1)
    const prev = () => {
        activSlideId(activSlide => {
            if(activSlide > 0){
                return activSlide -1
            } else {
                return activSlide
            }
        })
     
    }
    const next = () => {
        activSlideId(activSlide => {
            if(activSlide < data.length -1){
                return activSlide +1
            } else {
                return activSlide
            }
        })
     
    }


  return (
    <div className={className}>
          <GoArrowLeft className="arrow-left" onClick={prev}/>
          <GoArrowRight className="arrow-rigth" onClick={next}/>
      {data.map((slide,idx) => (
        <div key = {slide.id} className = {`card-container__item ${idx === activSlide ? "activ" : ""}`} >
            <img src={slide.img} alt="svg" className="card-container__img" />
              <h5 className="card-container__title">{slide.title}</h5>
              <p className="card-container__text">
                {slide.text}
              </p>
            </div>
      ))}
    </div>
  );
}

export default Slider;
