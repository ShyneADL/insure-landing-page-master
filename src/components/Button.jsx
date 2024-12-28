import React from "react";

const Button = ({ text }) => {
  return (
    <button className="relative z-10 border border-white px-6 py-2 uppercase bg-transparent font-bold text-white text-sm hover:bg-white hover:text-veryDarkViolet">
      {text}
    </button>
  );
};

export default Button;
