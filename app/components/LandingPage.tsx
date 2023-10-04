import Image from "next/image";
import React from "react";
import heroimg from "../../public/hero.jpg";
import HeroTextBox from "./HeroTextBox";
import Carousel from "./Carousel";

const LandingPage = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Carousel>
        <div>
          <img src="https://images.unsplash.com/photo-1674568295016-7bead30f9056?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDkxfFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1695931845087-c8803d4e1c07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1695753723777-505c5408b6b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1694631031738-0e857f3e872a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY1fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60" />
        </div>
      </Carousel>
      <HeroTextBox />
    </div>
  );
};

export default LandingPage;
