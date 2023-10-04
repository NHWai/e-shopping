"use client";
import React, { useRef } from "react";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import BtnGlass from "./BtnGlass";
interface Props {
  children: React.ReactNode;
}

const Carousel = ({ children }: Props) => {
  const sliderRef = useRef<Slider | null>(null);
  const renderArrows = () => {
    return (
      <div className="text-white">
        <div className="absolute bottom-1/2 left-3 z-40">
          <BtnGlass>
            <svg
              onClick={() => sliderRef.current?.slickPrev()}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </BtnGlass>
        </div>
        <div className="absolute bottom-1/2 right-3 z-40">
          <BtnGlass>
            <svg
              onClick={() => sliderRef.current?.slickNext()}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </BtnGlass>
        </div>
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      {renderArrows()}
      <Slider ref={sliderRef} {...settings}>
        {children}
      </Slider>
    </>
  );
};

export default Carousel;
