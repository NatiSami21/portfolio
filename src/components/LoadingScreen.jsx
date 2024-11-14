// src/components/LoadingScreen.jsx
import React from "react";

const LoadingScreen = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-black text-white z-50">
    {/* Lottie player component */}
    <dotlottie-player
      src="https://lottie.host/d87d331a-7764-43a9-918b-57df7acdc0fc/bJIR4KfHRt.json"
      background="transparent"
      speed="1"
      style={{ width: "300px", height: "300px" }}
      loop
      autoplay
    ></dotlottie-player>
    <p className="mt-4">Loading...</p>
  </div>
);

export default LoadingScreen;
