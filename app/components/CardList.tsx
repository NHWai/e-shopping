import React from "react";
import Card from "./Card";

export interface CardData {
  id: number;
  title: string;
  url: string;
}

const CardList = async () => {
  let data: CardData[] = [];
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/photos/?_limit=15",
    );
    data = await res.json();
  } catch (err) {
    console.log(err);
  }
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4 border border-red-500 pt-10">
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
