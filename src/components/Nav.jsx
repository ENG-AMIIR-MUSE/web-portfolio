import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";

export default function Nav() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <nav className="flex items-center px-3 justify-between max-w-[1200px] m-auto  h-[50px]">
        <div className="logo">
          <h1 className="text-[#0DB760] font-bold text-2xl">Amiir Dev</h1>
        </div>
        <ul
          className={`flex flex-col animate-fade-down  bg-white z-[100] w-full md:w-max absolute top-[100px]   gap-6 md:flex-row   md:static md:items-center  ${
            show
              ? " flex-row  md:static  "
              : " hidden md:flex "
          }`}
        >
          <a href="">Home</a>
          <a href="">About us</a>
          <a href="">Projects</a>
          <a href="">Contact Us</a>
          <button className="bg-[#0DB760] px-4 py-2  text-white rounded-full">
            Download Cv
          </button>
        </ul>
        <IoMenu
          onClick={() => setShow(!show)}
          size={35}
          className="md:hidden"
        />
      </nav>
    </div>
  );
}
