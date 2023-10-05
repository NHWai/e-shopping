"use client";
import React from "react";
import DiscountCard from "./DiscountCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import pod1 from "../../public/pod1-removebg-preview.png";
import pod2 from "../../public/pod2-removebg-preview.png";
import pod3 from "../../public/pod3-removebg-preview.png";
import pod4 from "../../public/pod4-removebg-preview.png";
import pod5 from "../../public/pod5-removebg-preview.png";
import pod6 from "../../public/pod6-removebg-preview.png";
import BtnGlass from "./BtnGlass";

const Discount = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
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
        <div className="mb-1 text-4xl font-bold md:text-6xl">Best Deals</div>
        <div className="text-lg font-light">Just For You</div>
      </div>
      <Slider {...settings}>
        <DiscountCard url={pod1} />
        <DiscountCard url={pod2} />
        <DiscountCard url={pod3} />
        <DiscountCard url={pod4} />
        <DiscountCard url={pod5} />
        <DiscountCard url={pod6} />
      </Slider>
      <div className="mx-auto mt-6 w-[200px] lg:mt-3">
        <BtnGlass>View More &gt;</BtnGlass>
      </div>
    </section>
  );
};

export default Discount;
