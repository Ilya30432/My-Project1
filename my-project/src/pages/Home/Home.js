import Button from "../../componets/Button/Button";
import "./Home.css";
import logo from "./logo.svg";
import homeRoom from "./home-room.png";
import sofa from "./sofa.png";
import lisa from "./lisa.png";
import svgEre from "./ere.svg";
import svgSd from "./sd.svg";
import svgSr from "./sr.svg";
import vectorOne from "./vector1.svg";
import vectorTwo from "./vector2.svg";
import React from "react";
import "../../fonts/Fonts.css";
import Slider from "../../componets/Slider/Slider";

function Home() {
  const sliderData = [
    {
      title: "Interior Design",
      text: "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmodtempor incididunt ut labore.",
      img: svgSr,
      id: 0,
    },
    {
      title: "Architecture",
      text: "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmodtempor incididunt ut labore.",
      img: svgEre,
      id: 1,
    },
    {
      title: "Planning",
      text: "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmodtempor incididunt ut labore.",
      img: svgSd,
      id: 2,
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
      <main className="main">
        <div className="main-contact container">
          <div className="contact">
            <p className="contact-words">MODERN INTERIOR</p>
            <h2 className="contact-title">Create Your Interior Design.</h2>
            <p className="contact-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
            <Button className="contact-btn" text="CONTACT" />
          </div>
          <div className="contact-img">
            <img src={homeRoom} alt="img" />
          </div>
        </div>
        <div className="card container">
          <div className="card-service">
            <p className="card-service__text">WHAT WE DO</p>
            <h3 className="card-service__title">Our Service</h3>
          </div>
          <Slider className="card-container" data={sliderData} />
        </div>
        <div className="main-about container">
          <div className="about-img">
            <img src={sofa} alt="img" />
          </div>
          <div className="about">
            <p className="about-words">ABOUT US</p>
            <h2 className="about-title">
              Interioris The Will of An Epoch Mextreo
            </h2>
            <p className="about-text">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form injected
              humour, or randomised words which don't look even slightly
              believable.If you are going to use a passage of Lorem Ipsum, sure
              there isn't anything embarrassing hidden the middleof text. All
              the Lorem Ipsum generators on the Internettend to repeat
              predefined chunks as necessary,making this the first true
              generator on the Internet.
            </p>
            <Button className="about-btn" text="LEARN MORE" />
          </div>
        </div>
        <div className="main-info container">
          <div className="info">
            <h2 className="info-number">20</h2>
            <p className="info-text">
              Years Of Successful Working
              <br /> The Market
            </p>
            <Button className="about-btn" text="LEARN MORE" />
          </div>
          <div className="info-img">
            <img src={lisa} alt="img" />
          </div>
        </div>
        <div className="main-client container">
          <div className="client-title">
            <p>3000+ Completed Work</p> 
            <p>Which WE have Successfully Done</p>
          </div>
          <div className="client-info">
            <div className="client-box">
              <p className="client-number">980</p>
              <p className="client-text">Project</p>
              <img className="client-svg__one" src={vectorOne} alt="svg"/>
            </div>
            <div className="client-box">
            <p className="client-number">520</p>
            <p className="client-text">Happy Client</p>
            <img className="client-svg__two" src={vectorTwo} alt="svg"/>
            </div>
            <div className="client-box">
            <p className="client-number">330</p>
            <p className="client-text">Winners</p>
            <img className="client-svg__three" src={vectorOne} alt="svg"/>
            </div>
            <div className="client-box">
            <p className="client-number">120</p>
            <p className="client-text">Recoment</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
