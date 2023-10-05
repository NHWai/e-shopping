import React from "react";

interface Props {
  children: React.ReactNode;
}

const BtnGlass = ({ children }: Props) => {
  return (
    <div className="mx-auto flex h-full min-w-[40px]  cursor-pointer items-center justify-center rounded-full  bg-gray-300 bg-opacity-50 bg-clip-padding px-3 py-[6px]  backdrop-blur-md backdrop-filter">
      {children}
    </div>
  );
};
export default BtnGlass;
