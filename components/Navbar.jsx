import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");


  useEffect(()=>{
    const changeColor=()=>{
        if(window.scrollY>=90){
            setColor('#ffffff')
            setTextColor('#000000')
        }else{
            setColor('transparent')
            setTextColor('#ffffff')
        }        
    }

    window.addEventListener("scroll", changeColor)
  },[])

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in-out duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white ">
        <Link href="/">
          <h1 style={{ color: `${textColor}` }} className="font-bold text-4xl">
            Captur
          </h1>
        </Link>

        <ul className="hidden sm:flex ">
          <li className="p-4">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4">
            <Link href="/gallery">Gallery</Link>
          </li>
          <li className="p-4">
            <Link href="/portfolio">Work</Link>
          </li>
          <li className="p-4">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* add in reacct icons and mobile menu */}

        {/* Mobile Button */}
        <div onClick={handleClick} className="block sm:hidden z-10">
          {click ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
          {/* <AiOutlineClose size={20}/> */}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            click
              ? "absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full bg-black h-screen b-black text-center ease-in duration-300"
              : "absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full bg-black h-screen b-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li className="p-4 text-4xl hover:text-gray-500 ">
              <Link href="/">Home</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500 ">
              <Link href="/gallery">Gallery</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500 ">
              <Link href="/portfolio">Work</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500 ">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
