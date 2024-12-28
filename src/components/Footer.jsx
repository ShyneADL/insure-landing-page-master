import React from "react";
import { footerLinks, SMIcons } from "./Data";

const Footer = () => {
  return (
    <footer className="overflow-hidden bg-white relative flex flex-col gap-8 section_padding py-16 my-16 w-full">
      <img
        src="images/bg-pattern-footer-desktop.svg"
        className="absolute top-0 left-0 z-[1]"
      />
      <div className="flex items-center justify-between w-full z-10">
        <img src="images/logo.svg" alt="logo" className="w-[100px]" />
        <div className="flex items-center gap-4 ">
          {SMIcons.map((item) => (
            <img
              key={item.id}
              src={item.icon}
              alt={item.alt}
              className="cursor-pointer hover:brightness-50"
            />
          ))}
        </div>
      </div>
      <div className="bg-grayishBlue w-full h-[1px] z-10" />
      <div className="flex items-start gap-[176px] z-10">
        {footerLinks.map((item) => (
          <div className="flex flex-col gap-8">
            <h5 className="text-grayishBlue uppercase text-[16px] font-bold">
              {item.title}
            </h5>
            <div className="flex flex-col gap-4">
              {item.subItems.map((option) => (
                <p className="uppercase text-black text-[16px] hover:underline font-bold cursor-pointer">
                  {option.text}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
