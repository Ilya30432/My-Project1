import React from "react";
import Button from "../../../../componets/Button/Button";


function Card({data}){
    return(
        <div className="blog-container">
        {data.map((data) => (
            <div key={data.id} className="blog-box">
                <div className="blog-box__img">
                <img src={data.img} alt="img" />
                </div>
                <h3 className="blog-box__title">{data.title}</h3>
                <p className="blog-box__text">{data.text}</p>
                <Button text="CONTINUE READING...." className= "blog-btn" />
            </div>
        ))}
        </div>
    )
}

export default Card;