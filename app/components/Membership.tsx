import React from "react";
import BtnGlass from "./BtnGlass";
import Image from "next/image";
import diamond from "../../public/diamond-removebg-preview.png";
import gold from "../../public/gold-coin-removebg-preview.png";
import silver from "../../public/silver-coin-removebg-preview.png";
import vapegp from "../../public/vape-gp-2-removebg-preview.png";
import vapebig from "../../public/vapebig-removebg-preview.png";
import pod1 from "../../public/pod1-removebg-preview.png";
import pod2 from "../../public/pod2-removebg-preview.png";
const Membership = () => {
  return (
    <section className="mx-auto mb-12 flex w-full max-w-[1080px] flex-col flex-wrap   justify-between  gap-1  overflow-hidden px-6 text-white lg:flex-row ">
      <div className="relative h-80 min-w-[220px] flex-grow rounded-lg bg-gray-800 p-2 ">
        <div className=" absolute left-5 top-5 flex">
          <Image src={diamond} alt="diamond-img" width={100} height={100} />
          <Image src={gold} alt="diamond-img" width={100} height={100} />
          <Image src={silver} alt="diamond-img" width={100} height={100} />
        </div>
        <div className="absolute bottom-5 left-5  z-10 max-w-[380px]">
          <div className="mb-1 text-4xl font-bold ">Membership Program</div>
          <div className=" w-[80%] text-base font-light">
            Be a Vape Pi member and get our special exclusive offers
          </div>
          <div className="my-2 w-20">
            <BtnGlass>View</BtnGlass>
          </div>
        </div>
        <div>
          <Image
            className="absolute right-0 top-20 translate-x-1/4"
            src={vapegp}
            width={300}
            height={300}
            alt="vape-gp"
          />
        </div>
      </div>
      <div className="flex  flex-col gap-1 xs:flex-row  ">
        <div className="relative h-40 min-w-[220px] flex-grow rounded-lg   bg-gray-800 xs:h-80 ">
          <Image
            className="absolute left-16 top-2 sm:top-10"
            src={vapebig}
            width={100}
            height={100}
            alt="vape-big"
          />
          <div className="bg-glass absolute bottom-2 w-full  px-2">
            <div className="flex justify-between text-lg font-semibold">
              <span>Devices</span>
              <span>&gt;</span>
            </div>
            <div className="max-w-[130px] text-sm font-light">
              Find the best for you here!
            </div>
          </div>
        </div>
        <div className="flex h-80 min-w-[220px] flex-grow flex-col gap-1">
          <div className="relative h-1/2 rounded-lg bg-gray-800">
            <Image
              className="absolute right-10 top-1"
              src={pod1}
              width={100}
              height={100}
              alt="vape-big"
            />
            <div className="bg-glass absolute bottom-2 w-full  px-2">
              <div className="flex justify-between text-lg font-semibold">
                <span>Devices</span>
                <span>&gt;</span>
              </div>
              <div className="max-w-[130px] text-sm font-light">
                Find the best for you here!
              </div>
            </div>
          </div>
          <div className="relative h-1/2 rounded-lg bg-gray-800">
            <Image
              className="absolute right-10 top-1"
              src={pod2}
              width={100}
              height={100}
              alt="vape-big"
            />
            <div className="bg-glass absolute bottom-2 w-full  px-2">
              <div className="flex justify-between text-lg font-semibold">
                <span>Devices</span>
                <span>&gt;</span>
              </div>
              <div className="max-w-[130px] text-sm font-light">
                Find the best for you here!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;
