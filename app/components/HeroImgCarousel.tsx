import React from "react";
import Carousel from "./Carousel";
import Image from "next/image";
import heroimg1 from "../../public/eshopping.jpg";
import heroimg2 from "../../public/heroimg2.jpg";
import heroimg3 from "../../public/heroimg3.jpg";
import heroimg4 from "../../public/heroimg4.jpg";

const HeroImgCarousel = () => {
  return (
    <div className="h-[105vh] overflow-x-hidden">
      <Carousel>
        <Image
          src={heroimg1}
          placeholder="blur"
          alt="hero-img1"
          className="h-screen w-full object-cover"
        />

        <Image
          src={heroimg2}
          placeholder="blur"
          alt="hero-img1"
          className="h-screen w-full object-cover"
        />

        <Image
          src={heroimg3}
          placeholder="blur"
          alt="hero-img1"
          className="h-screen w-full object-cover"
        />

        <Image
          src={heroimg4}
          placeholder="blur"
          alt="hero-img1"
          className="h-screen w-full object-cover"
        />
      </Carousel>
    </div>
  );
};

export default HeroImgCarousel;
