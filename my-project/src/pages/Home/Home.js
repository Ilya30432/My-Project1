import Button from "../../componets/Button/Button";
import "./Home.css";
import logo from "./img/logo.svg";
import homeRoom from "./img/home-room.png";
import sofa from "./img/sofa.png";
import lisa from "./img/lisa.png";
import svgEre from "./img/ere.svg";
import svgSd from "./img/sd.svg";
import svgSr from "./img/sr.svg";
import vectorOne from "./img/vector1.svg";
import vectorTwo from "./img/vector2.svg";
import peopleMen from "./img/people-men.png";
import peopleWomen from "./img/people-women.png";
import cardImgOne from "./img/card-img1.png";
import cardImgTwo from "./img/card-img2.png";
import facebook from "./img/facebook.svg";
import instagram from "./img/instagram.svg";
import twitter from "./img/twitter.svg";
import linkedin from "./img/linkedin.svg";
import React from "react";
import "../../fonts/Fonts.css";
import Slider from "../../componets/Slider/Slider";
import Swiper from "../../componets/Swiper/Swiper";
import Card from "./componets/Card/Card";

function Home() {
  const sliderData = [
    // Можно заменить на api запросы
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

  const swiperData = [
    // Можно заменить на api запросы
    {
      name: "Louis Saville /CEO at Google inc",
      text: "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmodtempor incididunt ut labore.",
      id: 0,
      img: peopleMen,
    },
    {
      name: "Rekha Varadwaz /Manager at Nike inc",
      text: "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmodtempor incididunt ut labore.",
      id: 1,
      img: peopleWomen,
    },
    {
      name: "Rekha Saville /CEO at Puma inc",
      text: "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmodtempor incididunt ut labore.",
      id: 2,
      img: peopleMen,
    },
    {
      name: "Vadim Varadwaz /CEO at Adidas inc",
      text: "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmodtempor incididunt ut labore.",
      id: 3,
      img: peopleWomen,
    },
  ];

  const cardData = [
    {
      img: cardImgOne,
      title: "2020 Interior Design Trends",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua.",
      id: 0,
    },
    {
      img: cardImgTwo,
      title: "28 Notable Product at ARC Interior Design",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua.",
      id: 1,
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
              <img className="client-svg__one" src={vectorOne} alt="svg" />
            </div>
            <div className="client-box">
              <p className="client-number">520</p>
              <p className="client-text">Happy Client</p>
              <img className="client-svg__two" src={vectorTwo} alt="svg" />
            </div>
            <div className="client-box">
              <p className="client-number">330</p>
              <p className="client-text">Winners</p>
              <img className="client-svg__three" src={vectorOne} alt="svg" />
            </div>
            <div className="client-box">
              <p className="client-number">120</p>
              <p className="client-text">Recoment</p>
            </div>
          </div>
        </div>
        <div className="main-testimonials container">
          <p className="testimonials-text">TESTIMONIALS</p>
          <h2 className="testimonials-title">Client says about us</h2>
          <Swiper data={swiperData} className="testimonials-box" />
        </div>
        <div className="main-blog container">
          <p className="blog-text">LETEST NEWS</p>
          <h2 className="blog-title">From Our Blog</h2>
          <Card data={cardData} />
        </div>
        <div className="main-footer container">
          <h2 className="main-footer__title">DON’T FORGET TO SIGN UP</h2>
          <span className="main-footer__span"></span>
          <p className="main-footer__text">
            Find out early about all upcoming promotions and new product
            releases with our newsletter.
          </p>
          <div className="main-footer__box">
            <input
              className="main-footer__input"
              type="email"
              placeholder="Enter your email address....."
            />
            <button className="main-footer__btn">SUBSCRIBE</button>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="footer-container container">
          <div className="footer-box">
            <div className="footer-info">
              <img src={logo} alt="logo" className="footer-info__img" />
              <p className="footer-info__title">
                But i must explain to you all this mistaken idea of dencouncing
                pleasure.
              </p>
            </div>
            <div className="footer-nav">
              <h4 className="footer-nav__title">Quick Links</h4>
              <ul className="footer-nav__list">
                <li>About Our Company</li>
                <li>Services WE provide</li>
                <li>Career & Opportunity</li>
                <li>Privacy & policy</li>
                <li>Contact US</li>
              </ul>
            </div>
            <div className="footer-company">
              <h4 className="footer-company__title">Company</h4>
              <ul className="footer-company__list">
                <li>About Company</li>
                <li>Our Testimonials</li>
                <li>Latest News</li>
                <li>Our misson</li>
                <li>Get a free Quot</li>
              </ul>
            </div>
            <div className="footer-contact">
              <h4 className="footer-contact__title">Contact us</h4>
              <ul className="footer-contact__list">
                <li>Sagrada Familia,Herba</li>
                <li>Street Front USA</li>
                <li>brandoxide@gmail.com</li>
                <li>002-568423591</li>
              </ul>
            </div>
            <div className="footer-social">
              <h4 className="footer-social__title">Follow Us</h4>
              <ul className="footer-social__list">
                <li>
                  <img src={facebook} alt="facebook" />
                </li>
                <li>
                  <img src={twitter} alt="twitter" />
                </li>
                <li>
                  <img src={instagram} alt="instagram" />
                </li>
                <li>
                  <img src={linkedin} alt="linkedin" />
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-end">
            <span className="footer-end__line"></span>
            <p className="footer-end__text">
              Copyright @ 2020 <span>Brandoxide</span>.all right reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
