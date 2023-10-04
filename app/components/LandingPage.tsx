import Image from "next/image";
import React from "react";
import heroimg from "../../public/hero.jpg";
import Link from "next/link";
import leftarrow from "../../public/leftarrow.svg";

const LandingPage = () => {
  return (
    <div className="relative h-[88vh] w-full overflow-hidden">
      <Image
        src={heroimg}
        // width: "auto"' or 'height: "auto"'
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        placeholder="blur"
        alt="hero-img"
      />
      <div className="absolute left-2/4 top-2/4 w-11/12 -translate-x-2/4 -translate-y-2/4 text-center ">
        <h1 className="text-lightone mb-2 text-3xl font-bold">
          Welcome to Our Online Store us
        </h1>
        <Link
          href="/card"
          className="text-lighttwo border-lighttwo mx-auto flex w-fit justify-center border p-2"
        >
          Shop Now{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
