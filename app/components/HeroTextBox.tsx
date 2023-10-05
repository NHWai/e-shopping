import Link from "next/link";
import React from "react";
import BtnGlass from "./BtnGlass";

const HeroTextBox = () => {
  return (
    <div className="absolute bottom-20 left-2/4 flex w-11/12  -translate-x-2/4 flex-col gap-2 text-center text-white ">
      <div className="text-lg font-light">The Best Look</div>
      <div className="mb-2 text-4xl font-bold md:text-6xl">
        Anytime Anywhere
      </div>
      <div className="text-lg font-light">Starts from 10,000 MMK</div>
      <Link href="/card" className="mx-auto w-[120px]">
        <BtnGlass>View</BtnGlass>
      </Link>
    </div>
  );
};

export default HeroTextBox;
