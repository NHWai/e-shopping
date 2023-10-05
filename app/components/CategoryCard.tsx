import React from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
interface Props {
  url: StaticImageData;
}

const CategoryCard = ({ url }: Props) => {
  return (
    <div className="  ml-1 h-[240px]  text-white">
      <div className="relative h-3/6 w-full overflow-hidden rounded-lg bg-neutral-300">
        <Image
          src={url}
          alt="pod1"
          className="absolute -bottom-10 left-1/2 h-[100px] w-[auto] -translate-x-1/2 "
        />
      </div>
      <div className="h-3/6 text-center">
        <div className="text-neutral-300">Refreshing Mint</div>
        <div className="font-semibold">28000 MMK</div>
        <div className="text-xs line-through">30000 MMK</div>
        <div className="font-semibold text-yellow-500">&#9733; 600 points</div>
      </div>
    </div>
  );
};

export default CategoryCard;
