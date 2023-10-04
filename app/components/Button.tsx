"use client";

import React, { useContext } from "react";
import AppContext from "../context";

interface Props {
  children: React.ReactNode;
}

const Button = (props: Props) => {
  const { addItem } = useContext(AppContext);
  return (
    <button
      onClick={addItem}
      className="h-fit rounded border border-emerald-300 px-4 py-1"
    >
      {props.children}
    </button>
  );
};

export default Button;
