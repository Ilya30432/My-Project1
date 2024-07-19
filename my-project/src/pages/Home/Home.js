import Button from "../../componets/Button/Button";
import "./Home.css";
import logo from "./logo.svg";
import homeRoom from "./home-room.png";
import svgEre from "./ere.svg";
import svgSd from "./sd.svg";
import svgSr from "./sr.svg";
import React from "react";
import "../../fonts/Fonts.css";
import Slider from "../../componets/Slider/Slider";

function Home() {
  const sliderData = [
    {
      title: "Interior Design",
      text: "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmodtempor incididunt ut labore.",
      img: svgSr,
      id:0,
    },
    {
      title: "Architecture",
      text: "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmodtempor incididunt ut labore.",
      img: svgEre,
      id:1,
    },
    {
      title: "Planning",
      text: "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmodtempor incididunt ut labore.",
      img: svgSd,
      id:2,
    },
  ];

  return (
    <div className="wrapper">
      <header className="header container">
        <img src={logo} alt="logo" className="header-img" />
        <ul className="header-menu">
          <li className="header-menu-list">HOME</li>
          <li className="header-menu-list">PROJECT</li>
          <li className="header-menu-list">SERVICES</li>
          <li className="header-menu-list">ABOUT</li>
          <li className="header-menu-list">BLOG</li>
          <li className="header-menu-list">SHOP</li>
          <li className="header-menu-list">CONTACT</li>
          <Button className="header-btn" text="Sign Up" />
        </ul>
      </header>
      <main>
        <div className="main container">
          <div className="info">
            <p className="info-words">MODERN INTERIOR</p>
            <h2 className="info-title">Create Your Interior Design.</h2>
            <p className="info-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
            <Button className="info-btn" text="CONTACT" />
          </div>
          <div className="img-container">
            <img src={homeRoom} alt="img" />
          </div>
        </div>
        <div className="card container">
          <div className="card-service">
            <p className="card-service__text">WHAT WE DO</p>
            <h3 className="card-service__title">Our Service</h3>
          </div>
          <Slider className="card-container" data = {sliderData} />
        </div>
      </main>
    </div>
  );
}

export default Home;
