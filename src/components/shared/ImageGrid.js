import React from "react";

import pic1 from "../assets/AdobeStock_372350085_Preview.png";
import pic2 from "../assets/Biom_wipe_6.png";
import pic3 from "../assets/kitchen_counter_low res.png";
import pic4 from "../assets/Green-Gold-and-Navy-Living_Kitty-and-B-by-Kat-G.png";
import pic5 from "../assets/Biom fn .23_small.png";
import pic6 from "../assets/AdobeStock_334130078_Preview.png";
import icon_ig from "../assets/Icon awesome-instagram.svg";

import classes from "./ImageGrid.module.css";

const ImageGrid = () => {
  return (
    <div>
      <img src={pic1} className={classes["image-grid-pic1"]} alt="" />
      <img src={pic2} className={classes["image-grid-pic2"]} alt="" />
      <img src={pic3} className={classes["image-grid-pic3"]} alt="" />
      <img src={pic4} className={classes["image-grid-pic4"]} alt="" />
      <img src={pic5} className={classes["image-grid-pic5"]} alt="" />
      <img src={pic6} className={classes["image-grid-pic6"]} alt="" />

      <div className={classes.wrapper}>
        <button className={classes["ig-follow-button"]}>Follow us on Instagram</button>
        <img src={icon_ig} className={classes["icon-ig"]} alt="" />
      </div>

    </div>
  );
};

export default ImageGrid;
