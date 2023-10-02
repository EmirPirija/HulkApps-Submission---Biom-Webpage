import React from "react";
import { Link } from "react-scroll";

import adobestock from "../assets/AdobeStock_377418446_Preview.png";
import refill from "../assets/Refill Packaging_Mockup_2.png";
import env from "../assets/biodegradable icon.png";
import plasticon from "../assets/plastic free icon.png";
import iconplant from "../assets/plant based icon.png";

import classes from "./ProductDescription.module.css";
import scrollTo from "../../components/shared/Subscription.module.css";

const ProductDescription = () => {
  return (
    <div>
      <img src={adobestock} className={classes.adobestockimg} alt="" />
      <img src={refill} className={classes.refill} alt="" />
      <h2 className={classes.wipesbiom}>biom wipes</h2>
      <h1 className={classes["heading-description"]}>
        Better for you, and the planet.
      </h1>
      <p className={classes["text-description"]}>
        The experience of clean should feel amazing. In a time when we’re
        constantly sanitizing, it can be damaging to our hands and skins. We
        decided to load our wipes with Aloe to take care of you, while you take
        care of your home.
      </p>
      <div>
        <img src={env} className={classes.envicon} alt="" />
        <p className={classes.envtext}>100% biodegradable</p>
        <img src={plasticon} className={classes.plastfreeicon} alt="" />
        <p className={classes.textplast}>Plastic-free</p>
        <img src={iconplant} className={classes.planticon} alt="" />
        <p className={classes.textplant}>100% plant-based</p>
        <Link
          className={classes['button-description']}
          activeClass="active"
          to={scrollTo["button-subscription"]}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Subscribe now
        </Link>
        <div className={classes.container}></div>
      </div>
    </div>
  );
};

export default ProductDescription;
