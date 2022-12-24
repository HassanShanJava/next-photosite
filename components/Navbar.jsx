import Link from "next/link";
import React from "react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="fixed left-0 top-0 w-full z-10 ease-in-out duration-300">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white ">
        <Link href="/">
          <h1>Captur</h1>
        </Link>

        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/portfolio">Work</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* add in reacct icons and mobile menu */}

        {/* Mobile Button */}
        <div>
          <AiOutlineMenu size={20} />
          {/* <AiOutlineClose size={20}/> */}
        </div>

        {/* Mobile Menu */}
        <div>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/portfolio">Work</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
