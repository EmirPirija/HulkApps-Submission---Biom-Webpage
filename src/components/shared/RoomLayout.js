import React from "react";

import classes from "./RoomLayout.module.css";

import kitchenshot from "../assets/Kitchen Shot_3.png";
import officeshot from "../assets/office.png";
import livingshot from "../assets/Living Room_1.png";

function RoomLayout() {
  return (
    <div>
      <div className={classes.parentliving}>
        <div className={classes.imageContainer}>
          <img src={livingshot} className={classes.livingroom} alt="" />
          <div className={classes.textOverlayLiving}>livingroom</div>
        </div>
      </div>

      <div className={classes.parentoffice}>
        <div className={classes.imageContainer}>
          <img src={officeshot} className={classes.officeroom} alt="" />
          <div className={classes.textOverlayOffice}>office</div>
        </div>
      </div>

      <div className={classes.parentkitchen}>
        <div className={classes.imageContainer}>
          <img src={kitchenshot} className={classes.kitchenroom} alt="" />
          <h1 className={classes.textOverlayKitchen}>kitchen</h1>
        </div>
      </div>

      <div className={classes.title}>
        <h2 className={classes.officeh2}>Where you need it,</h2>
        <h1 className={classes.officeh1}>when you need it.</h1>
      </div>
    </div>
  );
}

export default RoomLayout;
