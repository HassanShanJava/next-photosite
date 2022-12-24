import Image from "next/image";
import React from "react";
import { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Slider = ({ sliderData }) => {
  const [current, setCurrent] = useState(0);
  const length = sliderData.length;

  const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prev = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(sliderData) || sliderData.length <= 0) {
    return null;
  }

  return (
    <div id="gallery" className="max-w-[1240px] mx-auto ">
      <h1 className="text-2xl text-center p-4 font-bold">Gallery</h1>
     
      <div className="relative flex justify-between p-4">
        {SliderData.map((slide, key) => {
          return (
            // this is hiddin tthe other  images
            <div
              key={key}
              className={
                key === current
                  ? "opacity-[1] ease-in duration-1000"
                  : "opacity-0"
              }
            >
              {/* u need to difine the  width and heiht if the imae  is not in the porject repo */}
              <FaArrowCircleLeft
                onClick={prev}
                size={50}
                className="absolute top-[50%] left-[30px] text-white/70 hover:text-white/90 cursor-pointer select-none z-[2] "
              />
              {/* if fur not on current slide, hide all other */}
              {key === current && (
                <Image
                  src={slide.image}
                  alt="/"
                  width="1440"
                  height="600"
                  style={{ objectFit: "cover" }}
                />
              )}
              <FaArrowCircleRight
                onClick={next}
                size={50}
                className="absolute top-[50%] right-[30px] text-white/70 hover:text-white/90 cursor-pointer select-none z-[2] "
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
