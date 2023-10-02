import React from "react";

import s9pic1 from "../assets/Biom_wipe_2.png";
import arrow from "../assets/Icon ionic-ios-arrow-round-forward.svg";

import classes from "./Subscription.module.css";

const Subscription = () => {
  return (
    <div>
      <h1 className={classes["text-subscription-h1"]}>
        Get the latest news delivered to your inbox.
      </h1>
      <p className={classes["text-subscription-p"]}>
        Get access to the exciting stuff — exclusive new deals, product launches
        and more. Plus, get a 10% discount on your next order.
      </p>
      <div>
        <input
          type="text"
          className={classes["text-subscription-input"]}
          placeholder="Enter your email address"
        />
      </div>

      <div className={classes["button-subscription"]}></div>
      <img src={arrow} className={classes.arrow} alt="" />

      <img src={s9pic1} className={classes["subscription-pic"]} alt="" />
      <div className={classes["subscription-rec"]}></div>
    </div>
  );
};

export default Subscription;
