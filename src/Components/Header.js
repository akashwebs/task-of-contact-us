import React from "react";
import banner from "../Assetes/image/banner.png";

const Header = () => {
  return (
    <header className="bg-black">
      <div className="h-[70px] w-full bg-white"></div>
      {/* ---------------banner----------------- */}
      <div className="h-[506px] " style={{ background: `url(${banner})` }}>
        <div className="bg-[rgba(0,0,0,.5)] w-full h-full">
          <div className="mid-container">
            <div className="w-full md:w-1/2 h-[300px] flex flex-col justify-center text-white ">
              <h3 className="text-[70px] font-bold">Contact Us​</h3>
              <p className="text-[20px] font-bold leading-[27.24px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
