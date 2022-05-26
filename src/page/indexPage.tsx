import React from "react";

export const IndexPage: React.FC = () => {
  return (
    <div className="flex">
      <header className="text-white w-full flex bg-[#202020] items-center justify-evenly">
        <div className="font-semibold border-b border-b-red-600 w-full h-[50px] flex justify-center items-center">
          Scheduler
        </div>
        <div className="font-semibold w-full h-[50px] flex justify-center items-center">
          News
        </div>
      </header>
    </div>
  );
};
