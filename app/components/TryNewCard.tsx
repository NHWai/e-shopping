import React from "react";
import pod1 from "../../public/pod1-removebg-preview.png";
import orangeice from "../../public/orangeice-removebg-preview.png";
import Image from "next/image";
import BtnGlass from "./BtnGlass";

interface Props {
  bgColor: string;
}
const TryNewCard = (props: Props) => {
  return (
    <div
      className={`mr-1 flex min-h-[200px]  flex-col-reverse justify-between rounded-lg ${props.bgColor}  text-white sm:flex-row`}
    >
      <div className="relative flex flex-1 justify-center p-3">
        <Image
          className="absolute bottom-0 left-1/2 h-[50px] w-[100px] md:h-[75px] md:w-[150px]"
          src={orangeice}
          alt="orangeice-img"
        />
        <Image
          className=" z-10"
          src={pod1}
          alt="pod1-img"
          width={100}
          height={100}
        />
      </div>

      <div className=" flex flex-1  flex-col  items-center justify-center p-3 text-center">
        <div className="mb-1 text-4xl font-semibold ">Try New Flavours</div>
        <div className=" text-base font-light">Citrius Monster</div>
        <div className="mx-auto my-2 w-[80px] ">
          <BtnGlass>View</BtnGlass>
        </div>
      </div>
    </div>
  );
};

export default TryNewCard;
