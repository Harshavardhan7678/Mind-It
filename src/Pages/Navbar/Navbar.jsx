import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav class="main-nav">
        <ul class="menu">
          <li class="menu__items to-left">
            <img
              className="logo-img"
              src="C:\Users\ASUS\OneDrive\Desktop\Mind-It-main\src\Components\Assets\Backkground.jpeg"
              alt="logo"
            />
          </li>
          <li class="menu__item">
            <a class="menu__link" href="#home">
              Home
            </a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href="#about">
              About
            </a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href="#login">
              Login
            </a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href="#register">
              Register
            </a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href="https://meet.google.com/">
              Talk
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
