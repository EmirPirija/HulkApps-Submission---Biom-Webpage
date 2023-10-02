import React from "react";
import { Link } from "react-scroll";


import classes from "./IntroSection.module.css";
import firstImage from "../assets/Kitchen_3.png";

import scrollTo from '../../components/shared/ProductInfoSection.module.css'


function IntroSection() {
  return (
    <div>
      <img className={classes.kitchenImage} src={firstImage} alt="" />
      <h1 className={classes.mainHeading}>So fresh. So green.</h1>
      <p className={classes.textKitchen}>
        We believe that a more eco-friendly everyday makes a happier you and me.
        We’re on a mission to put sustainability in reach with
        better-for-the-planet wipes that are easy, effective, and plastic-free.
      </p>
      <Link
        className={classes['intro-button']}
        activeClass="active"
        to={scrollTo['image-meet']}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Get started
      </Link>
      <div id="scroll-section"></div>
    </div>
  );
}

export default IntroSection;
