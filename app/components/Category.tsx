"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import pod1 from "../../public/pod1-removebg-preview.png";
import pod2 from "../../public/pod2-removebg-preview.png";
import pod3 from "../../public/pod3-removebg-preview.png";
import pod4 from "../../public/pod4-removebg-preview.png";
import pod5 from "../../public/pod5-removebg-preview.png";
import pod6 from "../../public/pod6-removebg-preview.png";

import CategoryCard from "./CategoryCard";
import orangeice from "../../public/orangeice-removebg-preview.png";
import Image from "next/image";
import type { StaticImageData } from "next/image";

interface Props {
  url: StaticImageData;
  label1: string;
  label2: string;
}

const Category = (props: Props) => {
  const sliderRef = useRef<Slider | null>(null);
  const renderArrows = () => {
    return (
      <div className=" text-white">
        <div className="absolute bottom-1/2 right-3 z-40">
          <div className="bg-glass flex h-[100px] cursor-pointer items-center bg-black px-2">
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
          </div>
        </div>
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4.05,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.05,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.05,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <section className="mx-auto mb-12 w-full max-w-[1080px] overflow-hidden px-6  text-white">
      <div className="flex min-h-[280px] w-full flex-col rounded-lg  bg-gray-800  xs:flex-row ">
        <div className="relative min-h-[200px] w-full items-end  xs:w-1/3 ">
          <Image
            className=" absolute bottom-[10%] left-0 h-[50px] w-[100px] "
            src={orangeice}
            alt="orangeice-img"
          />
          <Image
            className="absolute bottom-1/2 left-0 z-10 translate-y-1/2"
            src={props.url}
            alt="vapebig-img"
            width={100}
            height={100}
          />
          <div className="bg-glass absolute bottom-1/3 left-1/2 z-20 ml-auto w-fit -translate-x-1/2  ">
            <div className="flex justify-between text-lg font-semibold">
              <span>{props.label1}</span>
            </div>
            <div className="max-w-[130px] text-sm font-light">
              {props.label2}
            </div>
          </div>
        </div>
        <div className=" relative w-full overflow-hidden xs:flex xs:w-2/3 xs:flex-col  xs:justify-center ">
          {renderArrows()}
          <Slider {...settings} ref={sliderRef} className=" pt-2">
            <CategoryCard url={pod1} />
            <CategoryCard url={pod2} />
            <CategoryCard url={pod3} />
            <CategoryCard url={pod4} />
            <CategoryCard url={pod5} />
            <CategoryCard url={pod6} />
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Category;
