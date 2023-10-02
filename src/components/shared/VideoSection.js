import React from "react";

import classes from "./VideoSection.module.css";

const VideoSection = () => {
  return (
    <div>
      <video loop autoPlay muted className={classes.ocean}>
        <source
          src="https://cdn.coverr.co/videos/coverr-surfing-through-the-ocean-waves-4214/1080p.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <h2 className={classes["text-c7-h2"]}>
        CLEANING OUR OCEANS WITH EVERY WIPE
      </h2>
      <h1 className={classes["text-s8-h1"]}>
        Wipes have plastic in them. We don’t.
      </h1>
      <p className={classes["text-c7-p"]}>
        We reinvented wipes to cut out all the bad stuff —like single-use
        plastic that hurts the environment, and toxic chemicals that don’t
        belong in our oceans (or in our homes).
      </p>
      <btn className={classes.button}>LEARN MORE</btn>
      {/* hastag section */}
      <div>
        <p className={classes.hastag}>#cleanwithbiom</p>
      </div>{" "}
    </div>
  );
};

export default VideoSection;
