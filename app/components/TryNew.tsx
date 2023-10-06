"use client";
import React, { useRef } from "react";
import TryNewCard from "./TryNewCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BtnGlass from "./BtnGlass";

const TryNew = () => {
  const sliderRef = useRef<Slider | null>(null);
  const renderArrows = () => {
    return (
      <div className=" text-white">
        <div
          onClick={() => sliderRef.current?.slickNext()}
          className="absolute bottom-1/2 right-3 z-40 translate-y-1/2 "
        >
          <div className=" flex h-[100px] cursor-pointer items-center rounded-full bg-gray-700 px-2">
            <svg
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
          </div>
        </div>
      </div>
    );
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true, // Enable center mode
    centerPadding: "20px", // Padding for center mode
  };
  return (
    /*{<section className=" mb-12  min-h-[200px] w-full pl-6">
      <div className="relative h-full w-full overflow-hidden border border-red-500 ">
        <Slider ref={sliderRef} {...settings}>
          <TryNewCard bgColor="bg-gray-800" />
          <TryNewCard bgColor="bg-red-800" />
          <TryNewCard bgColor="bg-sky-500" />
          <TryNewCard bgColor="bg-green-500" />
        </Slider>
      </div>
    </section>}*/
    <section className="  mb-12  min-h-[200px]  w-full  pl-6 lg:ml-auto lg:max-w-[1175px]">
      <div className="relative  h-full w-full overflow-hidden">
        {renderArrows()}
        <Slider ref={sliderRef} {...settings}>
          <TryNewCard bgColor="bg-gray-800" />
          <TryNewCard bgColor="bg-red-800" />
          <TryNewCard bgColor="bg-sky-500" />
          <TryNewCard bgColor="bg-green-500" />
        </Slider>
      </div>
    </section>
  );
};

export default TryNew;
