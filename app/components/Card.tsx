import React from "react";
import Image from "next/image";
import { CardData } from "./CardList";
import Link from "next/link";
import Button from "./Button";

const Card = (props: CardData) => {
  return (
    <div className=" h-[320px] w-[220px] border border-sky-100">
      <Image
        src={`${props.url}`}
        width={220}
        height={186}
        alt={`img-${props.id}`}
      />
      <div className="flex h-[134px] justify-between p-2 text-center">
        {/* <div>{props.title.slice(0,10)}</div> */}
        <Button>Add</Button>
        <Link href={`/card/${props.id}`}>Details</Link>
      </div>
    </div>
  );
};

export default Card;
