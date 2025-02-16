import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, ComputersCanvas } from "./components";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Handle all media assets loaded
    const handleAllAssetsLoaded = () => setIsLoading(false);

    // Select all media elements (images, videos) and check if they are loaded
    const mediaElements = document.querySelectorAll("img, video");
    let loadedMediaCount = 0;

    mediaElements.forEach((element) => {
      if (element.complete) {
        loadedMediaCount++;
      } else {
        element.addEventListener("load", () => {
          loadedMediaCount++;
          if (loadedMediaCount === mediaElements.length) {
            handleAllAssetsLoaded();
          }
        });
        element.addEventListener("error", () => {
          loadedMediaCount++;
          if (loadedMediaCount === mediaElements.length) {
            handleAllAssetsLoaded();
          }
        });
      }
    });

    // Fallback: in case there are no media elements, stop loading after a delay
    if (mediaElements.length === 0) {
      const timer = setTimeout(() => setIsLoading(false), 8000);
      return () => clearTimeout(timer);
    }
  }, []);

  return isLoading ? (
    <LoadingScreen />
  ) : (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Feedbacks />
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
