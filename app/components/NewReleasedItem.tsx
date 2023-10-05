import React from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
interface Props {
  url: StaticImageData;
  bgColor: string;
}

const NewReleasedItem = ({ url, bgColor }: Props) => {
  return (
    <div className=" ml-1 h-[200px] ">
      <div
        className={`relative h-full w-full overflow-hidden rounded-lg pl-2 ${bgColor}`}
      >
        <div className="absolute bottom-9 w-1/2  text-base text-white">
          <div>Citrus Mon 20,000 Pul Disposeable 3 percent</div>
          <div>30,000 MMK</div>
        </div>
        <Image
          src={url}
          alt="pod1"
          className="absolute -bottom-20 -right-20 "
        />
      </div>
    </div>
  );
};

export default NewReleasedItem;
