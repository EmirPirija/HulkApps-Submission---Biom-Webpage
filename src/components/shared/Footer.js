import React from "react";

import s10logo from "../assets/biom logo footer.png";
import logo_fb from "../assets/Icon awesome-facebook-f.svg";
import logo_ig from "../assets/Icon awesome-instagram.svg";

import classes from "./Footer.module.css";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

const Footer = () => {
  return (
    <div>
      <div className={classes.footer}>
        <p className={classes["footer-shop"]}>Shop</p>
        <p className={classes["footer-why-biom"]}>Why Biom</p>
        <p className={classes["footer-scents"]}>scents</p>
        <img src={s10logo} className={classes["footer-logo-biom"]} alt="" />

        <div className={classes.column}>
          <p className={classes["footer-faqs"]}>faqs</p>
          <p className={classes["footer-account"]}>account</p>
          <p className={classes["footer-help"]}>help</p>

          <p className={classes["footer-rights"]}>
            © 2021 biom. All rights reserved • Privacy Policy • Terms of Service
          </p>
        </div>

        <div className={classes.footerline}></div>

        <div className={classes.socialIcons}>
          <div className={classes["wrapper-ig"]}></div>
          <img
            className={`${classes["icon-ig"]} animated-icon`}
            src={logo_ig}
            alt=""
          />

          <div className={classes["wrapper-fb"]}></div>
          <img
            className={`${classes["icon-fb"]} animated-icon`}
            src={logo_fb}
            alt=""
          />
        </div>

        <div className={classes.bottom}></div>
      </div>
    </div>
  );
};

export default Footer;
