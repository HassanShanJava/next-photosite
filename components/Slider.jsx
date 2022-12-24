import Image from "next/image";
import React from "react";
import { useState } from "react";
import { SliderData } from "./SliderData";

const Slider = ({ sliderData }) => {

    const [current, setCurrent]=useState(0);
    const length=sliderData.length;

    const next=()=>{
        setCurrent(current===length-1?0:current+1)
    }
    const prev=()=>{
        setCurrent(current===0?length-1 :current-1)
    }

    if(!Array.isArray(sliderData)||sliderData.length<=0){
        return null
    }

  return (
    <div id="gallery">
      <h1>Gallery</h1>
      <div>
        {SliderData.map((slide, key) => {
          return (
            // this is hiddin tthe other  images
            <div key={key} className={key===current? "opacity-[1] ease-in duration-1000":"opacity-0"}>
              {/* u need to difine the  width and heiht if the imae  is not in the porject repo */}
              <Image src={slide.image} alt="/" width="1440" height="600" style={{objectFit:"cover"}} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
