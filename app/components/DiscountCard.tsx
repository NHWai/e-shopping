import React from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
interface Props {
  url: StaticImageData;
}

const DiscountCard = ({ url }: Props) => {
  return (
    <div className=" ml-1 h-[320px]  ">
      <div className="relative h-4/6 w-full overflow-hidden rounded-lg bg-neutral-300">
        <div className="mx-auto w-1/2 bg-red-500  py-1  text-center text-sm text-white">
          25%Off
        </div>
        <Image
          src={url}
          alt="pod1"
          className="absolute xs:-bottom-10 sm:-bottom-10"
        />
      </div>
      <div className="h-2/6 text-center">
        <div className="text-neutral-600">Refreshing Mint</div>
        <div className="font-semibold">28000 MMK</div>
        <div className="text-xs line-through">30000 MMK</div>
        <div className="font-semibold text-yellow-500">&#9733; 600 points</div>
      </div>
    </div>
  );
};

export default DiscountCard;
