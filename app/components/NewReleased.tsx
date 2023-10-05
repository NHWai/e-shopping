"use client";
import React from "react";
import NewReleasedItem from "./NewReleasedItem";
import pod1 from "../../public/pod1-removebg-preview.png";
import pod2 from "../../public/pod2-removebg-preview.png";
import pod3 from "../../public/pod3-removebg-preview.png";
import pod4 from "../../public/pod4-removebg-preview.png";
import Slider from "react-slick";
import BtnGlass from "./BtnGlass";
const NewReleased = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="mx-auto mb-12 w-full max-w-[1080px] overflow-hidden px-6">
      <div className="mb-6 text-center">
        <div className="mb-1 text-4xl font-bold md:text-6xl">
          <span className="text-red-500">New</span> Released
        </div>
        <div className="text-lg font-light">Try Our Last Flavours Here</div>
      </div>
      <Slider {...settings}>
        <NewReleasedItem url={pod1} bgColor="bg-yellow-400" />
        <NewReleasedItem url={pod2} bgColor="bg-red-400" />
        <NewReleasedItem url={pod3} bgColor="bg-sky-400" />
        <NewReleasedItem url={pod4} bgColor="bg-green-400" />
      </Slider>
      <div className="mx-auto mt-6 w-[200px] lg:mt-3">
        <BtnGlass>View More &gt;</BtnGlass>
      </div>
    </section>
  );
};

export default NewReleased;
