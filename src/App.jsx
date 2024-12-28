import React from "react";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import { different } from "./components/Data";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="w-full relative">
        <div className="flex lg:flex-row flex-col-reverse relative justify-center ~lg:py-12/20 lg:section_padding w-full lg:overflow-hidden">
          <div className="bg-veryDarkViolet absolute top-0 left-0 h-[550px] w-full z-[1]" />
          <div className="relative flex flex-col lg:bg-inherit bg-veryDarkViolet lg:items-start items-center gap-6 z-10 lg:px-0 px-[1.85rem] lg:py-0 py-20 w-full">
            <div className="bg-white w-[120px] h-[1px] lg:block hidden" />
            <img
              src="images/bg-pattern-intro-left-mobile.svg"
              className="absolute top-0 left-0 z-[1] lg:hidden block"
            />
            <img
              src="images/bg-pattern-intro-right-mobile.svg"
              className="absolute -bottom-44 right-0 z-[1] lg:hidden block"
            />

            <h1 className="text-white lg:text-left z-10 text-center font-DM ~text-[2.8rem]/[4.25rem] leading-[64px] lg:mt-12 mt-0 ~w-[19.625rem]/[30.625rem]">
              Humanizing your insurance.
            </h1>
            <p className="text-veryLightGray text-[16px] z-10 lg:w-[530px] lg:text-left text-center w-full font-light">
              Get your life insurance coverage easier and faster. We blend our
              expertise and technology to help you find the plan that's right
              for you. Ensure you and your loved ones are protected.
            </p>
            <Button text="View plans" />
          </div>
          <img
            src="/images/image-intro-mobile.jpg"
            alt="intro"
            className="z-10 w-full"
          />

          <img
            src="/images/bg-pattern-intro-right-desktop.svg"
            alt="bg"
            className=" w-[400px] absolute -top-[70px] right-0 z-[12] lg:block hidden"
          />
        </div>
        <img
          src="/images/bg-pattern-intro-left-desktop.svg"
          alt="bg"
          className="absolute -bottom-[120px] left-0 z-[2] lg:block hidden"
        />
      </section>
      {/* Info Section */}
      <section className="flex flex-col lg:items-start items-center w-full ~gap-8/12 py-24 lg:mt-0 mt-10 section_padding">
        <div className="bg-grayishBlue w-[120px] h-[1px]" />
        <h2 className="font-DM ~text-[2.8rem]/[4.25rem] font-normal text-veryDarkViolet">
          We're different
        </h2>
        <div className="flex flex-wrap justify-between gap-y-8 lg:mt-0 mt-12 w-full">
          {different.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:items-start items-center gap-5"
            >
              <img src={item.image} alt={item.title} />
              <h3 className="text-veryDarkViolet font-DM font-bold text-[28px] mt-1">
                {item.title}
              </h3>
              <p className="md:text-left text-center text-darkGrayishViolet lg:w-[348px] w-full">
                {item.text}
              </p>
            </div>
          ))}
        </div>
        {/* How we work */}
        <div className="relative z-10 overflow-hidden bg-veryDarkViolet ~px-10/20 ~py-12/16 flex lg:flex-row flex-col lg:gap-0 gap-8 items-center justify-between mt-20 w-full">
          <h3 className="text-white font-DM ~text-[2.5rem]/[3.375rem] lg:text-left text-center leading-[58px] lg:w-[480px] w-full">
            Find out more about how we work
          </h3>
          <Button text="How we work" />
          <img
            src="/images/bg-pattern-how-we-work-mobile.svg"
            alt="bg"
            className="absolute top-0 right-0 z-[1]"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;
