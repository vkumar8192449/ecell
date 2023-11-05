import React, { useState } from "react";
import ecelllogo from "../images/logo.png";
import "../styles/MainHome.css";

export const MainHome = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.getElementById("mainHome").style.backgroundColor =
        "rgba(51, 51, 51, 0.5)";
      document.getElementById("menu").style.animationName = "navslide";
      document.getElementById("menu").style.left = "0%";
    } else {
      document.getElementById("mainHome").style.backgroundColor = "";
      document.getElementById("menu").style.left = "150%";
      document.getElementById("menu").style.animationName = "revnavslide";
    }
  };

  return (
    <>
      <div id="mainHome">
        <img src={ecelllogo} id="ecelllogo" alt="" />
        <div id="navright">
          <div id="menu">
            <a href="/">HOME</a>
            <a href="/">ABOUT US</a>
            <a href="/">DEPARTMENTS</a>
            <a href="/">TEAM</a>
            <a href="/">INNOVATION COUNCIL</a>
            <a href="/">WORKS</a>
            <a href="/">TESTIMONIAL</a>
            <a href="/">BLOG</a>
            <a href="/">CONTACT</a>
          </div>
          <div
            className={`hamburger ${menuOpen ? "cross" : ""}`}
            onClick={toggleMenu}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </div>
      <div id="mainhead">
        <div className="ecellhead">ENTREPRENEURSHIP CELL</div>
        <div className="nithead">NIT JAMSHEDPUR</div>
      </div>
      {/* <div class="carousel">
        <div class="carousel__item">
          <div class="carousel__item-head"></div>
          <div class="carousel__item-body">
            <p class="title">spouting whale</p>
          </div>
        </div>
        <div class="carousel__item">
          <div class="carousel__item-head"></div>
          <div class="carousel__item-body">
            <p class="title">whale</p>
          </div>
        </div>
        <div class="carousel__item">
          <div class="carousel__item-head"></div>
          <div class="carousel__item-body">
            <p class="title">dolphin</p>
          </div>
        </div>
        <div class="carousel__item">
          <div class="carousel__item-head"></div>
          <div class="carousel__item-body">
            <p class="title">fish</p>
          </div>
        </div>
      </div> */}
      <div class="carousel">
        <div class="carousel__item">
          <div class="carousel__item-head"></div>
          <div class="carousel__item-body">
            <p class="title">spouting whale</p>
            <p>Unicode: U+1F433</p>
          </div>
        </div>
        <div class="carousel__item">
          <div class="carousel__item-head"></div>
          <div class="carousel__item-body">
            <p class="title">whale</p>
            <p>Unicode: U+1F40B</p>
          </div>
        </div>
        <div class="carousel__item">
          <div class="carousel__item-head"></div>
          <div class="carousel__item-body">
            <p class="title">dolphin</p>
            <p>Unicode: U+1F42C</p>
          </div>
        </div>
        <div class="carousel__item">
          <div class="carousel__item-head"></div>
          <div class="carousel__item-body">
            <p class="title">fish</p>
            <p>Unicode: U+1F41F</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHome;
