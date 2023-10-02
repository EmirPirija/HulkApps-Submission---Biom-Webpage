import React, { useState, useEffect } from "react";

import classes from "./Header.module.css";
import biomImage from "../assets/logo.png";
import logocart from "../assets/cart.svg";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Add an event listener to detect scrolling
    const handleScroll = () => {
      if (window.scrollY > 0) {
        console.log("User scrolled."); //Just to check if it works
        setIsScrolled(true);
      } else {
        console.log("User scrolled back to the top."); //Same applies
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className={classes.header}>
        <p className={classes.shop}>Shop</p>
        <p className={classes.wbiom}>Why Biom</p>
        <p className={classes.scents}>Scents</p>
        <img className={classes.biomlogo} src={biomImage} alt="biomImage" />
        <p className={classes.login}>Sign In</p>
        <p className={classes.cart}>Cart</p>
        <img className={classes.cartlogo} src={logocart} alt="cartlogo" />
        <div>
          <p className={classes.cartntf}></p>
        </div>
      </div>
    </header>
  );
}

export default Header;
