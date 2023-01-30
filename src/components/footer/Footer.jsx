import React from "react";
import "./Footer.scss";
import { ImInstagram } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";
import { FaWhatsappSquare } from "react-icons/fa";
import { ImBehance2 } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className="Footer">
      <div className="contact">
        <p>info@lemonadler-9.com</p>
      </div>
      <div className="foorter-menu">
        <div className="logo">
          <img src="https://i.ibb.co/H7DtFmb/1.png" alt="LemonAdler-9 Logo" />
        </div>
        <div className="socialMedia">
          <a href="https://www.instagram.com/lemonadler9">
            <ImInstagram />
          </a>
          <a href="">
            <ImLinkedin />
          </a>
          <a href="">
            <FaWhatsappSquare />
          </a>
          <a href="">
            <ImBehance2 />
          </a>
          <a href="">
            <FaTwitterSquare />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
