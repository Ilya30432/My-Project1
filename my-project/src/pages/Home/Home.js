import Button from "../../componets/Button/Button";
import "./Home.css";
import logo from "./logo.svg";
import homeRoom from "./home-room.png"
import React from "react";
import "../../fonts/Fonts.css";

function Home() {
  return (
    <div className="wrapper">
      <header className="header">
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
        <div className="main">
          <div className="info">
            <p className="info-words">MODERN INTERIOR</p>
            <h2 className="info-title">Create Your Interior Design.</h2>
            <p className="info-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
            <Button className= "info-btn" text= "CONTACT"/>
          </div>
          <div className="img-container">
            <img src={homeRoom} alt="img" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
