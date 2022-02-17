import React from "react";

interface SlickProps {
  label?: string;
  className?: string;
}
const Slick = ({ label, className }: SlickProps) => {
  return (
    <div className={`flex ${className}`}>
      <span className="flex flex-col items-center mt-2">
        <span className="bg-white w-2 h-2 rounded-full"></span>
        <span
          className="h-full w-[2px] bg-gradient-to-b 
      from-white to-white-400"
        ></span>
      </span>
      <span className="ml-2 text-white">{label}</span>
    </div>
  );
};

export default Slick;
