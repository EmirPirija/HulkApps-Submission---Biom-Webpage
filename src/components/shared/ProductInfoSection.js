import React from "react";
import { Link } from "react-scroll";

import classes from "./ProductInfoSection.module.css";
import secondImage from "../assets/Mask_group_12.jpg";
import bottleicon from "../assets/beautiful design icon.png";
import checkicon from "../assets/durable stainless icon.png";
import bpaicon from "../assets/non_toxic_icon.png";

import scrollTo from '../../components/shared/ProductList.module.css'

function ProductInfoSection() {
  return (
    <div>
      <img className={classes['image-meet']} src={secondImage} alt="" />
      <h1 className={classes.vertical}>meet biom</h1>
      <h1 className={classes['info-text-h1']}>THE BIOM DISPENSER</h1>
      <h2 className={classes['info-text-h2']}>Redefine your experience of clean.</h2>
      <p className={classes['info-text-p']}>
        A quality engineered wipes dispenser that looks beautiful in your home,
        making better habits for your home and planet always within reach.
      </p>
      <img className={classes.iconbottle} src={bottleicon} alt="" />
      <p className={classes.bottletext}>Beautiful design, fit for your home</p>
      <img className={classes.iconcheck} src={checkicon} alt="" />
      <p className={classes.verifytext}>Durable stainless steel exterior</p>
      <img className={classes.iconbpa} src={bpaicon} alt="" />
      <p className={classes.bpatext}>Non-toxic, BPA free</p>
      <Link
        className={classes['button-info']}
        activeClass="active"
        to={scrollTo.green01}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Shop now
      </Link>
    </div>
  );
}

export default ProductInfoSection;
