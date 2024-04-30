import React, { useContext, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Button } from "flowbite-react";
import { ThemeContext } from "../context/ThemeProvider";
import { FaSun,FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Nav() {
  const {theme,toggleTheme} =  useContext(ThemeContext)
  console.log('in  aldfSD',theme)
  const [show, setShow] = useState(false);

  const handleTheme  = ()=>{
    const them  = theme === 'light'?"dark":'light' 
    setTheme('light')
    // console.log('llllllllll',them)

  }

  return (
    <div>
      <nav className="flex  items-center  py-7 px-4 justify-between max-w-[1200px] m-auto  h-[50px]">
        <div className="logo">
          <h1 className="text-[#0DB760] font-bold text-2xl">Amiir Dev</h1>
      
        </div>
        <ul
          className={`flex    bg-${theme === 'light' ? 'light bg-white' : 'dark dark:bg-[#0DB760] dark:text-white '} text-${theme === 'light' ? 'black' : 'white'} dark:text-white flex-col animate-fade-down  z-[100] w-full dark:md:bg-[#0F172A] ligth md:w-max absolute top-[100px]   gap-6 md:flex-row   md:static md:items-center  ${
            show
              ? " flex-row  md:static  "
              : " hidden md:flex  dark:md:bg-[#0F172A]  md:bg-white text-black"
          }`}
        >
          <button onClick={toggleTheme} className="hidden md:flex">
           {theme === "dark" ? <FaSun  size={20}/> : <FaMoon size={20} />}

          </button>
          <Link to="/">Home</Link>
          <Link to="/about-me">About us</Link>
          <Link to={'/projects'}>Projects</Link>
          <Link to="/contact-us">Contact Us</Link>
          <button className="bg-[#0DB760] px-4 py-2  text-white rounded-full">
            Download Cv
          </button>
        </ul>
       <div className="flex items-center gap-4 md:hidden ">
        <button onClick={toggleTheme}>
       {theme === "llight" ? <FaSun size={30} /> : <FaMoon size={30} />}

        </button>
        <IoMenu
          onClick={() => setShow(!show)}
          size={35}
          className="md:hidden"
        />

       </div>
    
      </nav>
    </div>
  );
}
