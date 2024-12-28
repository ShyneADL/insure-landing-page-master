import React from "react";
import { navLinks } from "./Data";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-6 w-full relative section_padding">
      <img src="images/logo.svg" alt="logo" className="w-[100px]" />
      <div className="md:flex hidden items-center gap-[2px]">
        {navLinks.map((item) => (
          <a
            key={item.id}
            href="#"
            className={`text-darkGrayishViolet font-karla uppercase font-medium hover:text-darkViolet tracking-wider px-4 py-1 ${
              item.id === 3
                ? "border border-darkViolet text-veryDarkViolet hover:text-white hover:bg-veryDarkViolet"
                : ""
            } text-[0.75rem]`}
          >
            {item.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
