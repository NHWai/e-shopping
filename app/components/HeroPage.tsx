import React from "react";
import HeroTextBox from "./HeroTextBox";
import HeroImgCarousel from "./HeroImgCarousel";

const LandingPage = () => {
  return (
    <div className="relative mb-8 h-auto w-full">
      <HeroImgCarousel />
      <HeroTextBox />
    </div>
  );
};

export default LandingPage;
