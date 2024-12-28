import React, { useState, useEffect } from "react";
import { navLinks } from "./Data";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <div className="flex items-center justify-between ~py-4/6 w-full relative section_padding">
      <img src="images/logo.svg" alt="logo" className="w-[100px]" />
      {/* Desktop Nav */}
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

      <div className="p-2 md:hidden flex" onClick={() => setOpen(!open)}>
        <img
          src={!open ? "images/icon-hamburger.svg" : "images/icon-close.svg"}
          alt="hamburger"
        />
      </div>
      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden flex bg-veryDarkViolet fixed top-20 left-0 h-screen w-full z-[10000]">
          <div className="relative flex flex-col items-center gap-4 w-full h-full px-[20px] py-6">
            <img
              src="images/bg-pattern-mobile-nav.svg"
              className="absolute bottom-[72px] left-0"
            />
            {navLinks.map((item) => (
              <a
                key={item.id}
                href="#"
                className={`text-white font-karla uppercase font-medium hover:text-darkViolet tracking-wider px-4 py-3 ${
                  item.id === 3
                    ? "border border-white text-veryDarkViolet hover:text-white hover:bg-veryDarkViolet"
                    : ""
                } text-[1.25rem] text-center w-full`}
              >
                {item.text}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
