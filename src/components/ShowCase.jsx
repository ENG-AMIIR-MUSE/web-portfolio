import React from "react";
import face from "../assets/face3.jpg";
import { FaGithub } from "react-icons/fa";

export default function ShowCase() {
  return (
    // shawocase
    <div className="max-w-[1200px] m-auto p-3 flex flex-col md:flex-row md:items-center md:justify-between min-h-[95vh] relative overflow-hidden">
      {/* Circle near the logo */}
      <div className="absolute z-[-1] top-[10%] left-[10%] w-[100px] h-[100px] bg-blue-300 rounded-full mix-blend-multiply opacity-20"></div>
      
      <div className="mt-[50px] animate-fade-left md:mt-0 w-full md:w-1/2 flex flex-col items-center md:items-start gap-6">
        <div className="flex flex-col md:bg-transparent font-bold text-2xl md:text-4xl lg:text-5xl gap-5 capitalize md:items-start w-full mb-3">
          <span>Hello</span>
          <span>
            My Name Is <span className="font-bold text-[#0DB760]">Amir</span>
          </span>
          <span>
            I'm{" "}
            <span className="font-bold text-[#0DB760]">Fullstack Developer</span>
          </span>
          <div className="mb-3 flex items-center gap-5">
            <FaGithub size={50} />
            <span className="bg-[#0DB760] font-bold text-white px-3 py-2 rounded-lg">Hire Me</span>
          </div>
        </div>
      </div>
     
      <img
        className="animate-fade-right w-full h-[290px] md:rounded-full md:w-[370px] overflow-hidden md:h-[350px] object-center object-cover"
        src={face}
        alt="Amir Photo"
      />
      {/* Existing circles */}
       
      {/* <div className="absolute z-[-1] top-[10%] left-[10%] w-[100px] h-[100px] dark:bg-blue-600 rounded-full"></div> */}



    </div>
  );
}
