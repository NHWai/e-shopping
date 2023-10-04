import React from "react";

interface Props {
  children: React.ReactNode;
}

const BtnGlass = ({ children }: Props) => {
  return (
    <div className="mx-auto flex h-full w-fit min-w-[80px] cursor-pointer items-center justify-center rounded-full border border-gray-100 bg-gray-700 bg-opacity-50 bg-clip-padding px-3 py-2 backdrop-blur-md backdrop-filter">
      {children}
    </div>
  );
};
export default BtnGlass;
