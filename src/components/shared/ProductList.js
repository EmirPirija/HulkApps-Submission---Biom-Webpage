import React from "react";

import classes from "./ProductList.module.css";

import green_1 from "../assets/Green_1.png";
import white_1 from "../assets/Biom fn .20.png";
import black_1 from "../assets/Black_2.png";

function ProductList() {
  return (
    <div>
      <h1 className={classes.heading}>Ready to start wiping out waste?</h1>
      <div>
        <div className={classes.gap}></div>
      </div>
      <btn className={classes.button}>Choose your vessel color</btn>

      <div className={classes.container}>
        <div className={classes.imgcontainer}>
          <img src={green_1} className={classes.green01} alt="" />
          <h1 className={classes.h1green}>Biom Dispenser</h1>
          <p className={classes.pgreen}>OCEAN TEAL</p>
        </div>

        <div className={classes.imgcontainer}>
          <img src={white_1} className={classes.white01} alt="" />
          <h2 className={classes.h2white}>Biom Dispenser</h2>
          <p className={classes.pwhite}>WHITE</p>
        </div>

        <div className={classes.imgcontainer}>
          <img src={black_1} className={classes.black01} alt="" />
          <h3 className={classes.h3black}>Biom Dispenser</h3>
          <p className={classes.pblack}>INK BLACK</p>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
