import React from "react";

interface ButtonProps {
  className?: string;
  children: string;
}

const Button = ({ className, ...props }: ButtonProps) => {
  return (
    <button
      className={`px-8 py-0.5 border-2 rounded-3xl border-white ${
        className ? className : ""
      }`}
    >
      {props.children}
    </button>
  );
};

export default Button;
