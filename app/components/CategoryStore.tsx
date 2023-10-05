import React from "react";
import Category from "./Category";
import vapebig from "../../public/vapebig-removebg-preview.png";
import pod2 from "../../public/pod2-removebg-preview.png";
import pod3 from "../../public/pod3-removebg-preview.png";

const CategoryStore = () => {
  return (
    <>
      <Category
        url={vapebig}
        label1="Devices"
        label2="Find the best for you here!"
      />
      <Category
        url={pod2}
        label1="Pods"
        label2="Varieties of choices available!"
      />
      <Category
        url={pod3}
        label1="Disposeable"
        label2="Easy Clean & Superb Flavor!"
      />
    </>
  );
};

export default CategoryStore;
