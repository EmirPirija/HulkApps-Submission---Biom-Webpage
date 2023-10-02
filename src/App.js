import React, { useState, useEffect } from "react";
import Header from "./components/shared/Header";
import IntroSection from "./components/shared/IntroSection";
import ProductInfoSection from "./components/shared/ProductInfoSection";
import RoomLayout from "./components/shared/RoomLayout";
import ProductList from "./components/shared/ProductList";
import Testimonials from "./components/shared/Testimonials";
import ProductDescription from "./components/shared/ProductDescription";
import VideoSection from "./components/shared/VideoSection";
import ImageGrid from "./components/shared/ImageGrid";
import Subscription from "./components/shared/Subscription";
import Footer from "./components/shared/Footer";
import classes from "../../biom-homepage/src/components/shared/Container.module.css";

import loading from "../../biom-homepage/src/components/shared/UserLoading.module.css";

function App() {
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const checkNetworkSpeed = async () => {
      try {
        // Simulate a network request to check speed (you can replace this with your actual speed checking logic)
        await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulated 3-second delay
        setLoading(false); // Set loading to false when the speed check is complete
      } catch (error) {
        console.error("Error checking network speed:", error);
        setError(true); // Set isError to true when there's an error
        setErrorMessage("There was an error. Please check your Wi-Fi connection and try again.");
      }
    };

    checkNetworkSpeed();
  }, []);

  if (isError) {
    // Display the custom error message
    return (
      <div>
        <p>{errorMessage}</p>
      </div>
    );
  }

  if (isLoading) {
    // Render a loading indicator while loading
    return (
      <div className={loading["loading-container"]}>
        <div className={loading["lds-ellipsis"]}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.gridContainer}>
        <IntroSection />
        <ProductInfoSection />
        <RoomLayout />
        <ProductList />
        <Testimonials />
        <ProductDescription />
        <VideoSection />
        <ImageGrid />
        <Subscription />
        <Footer />
      </div>
    </div>
  );
}

export default App;
