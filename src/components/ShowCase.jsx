import React from "react";
import face from "../assets/face3.jpg";
import { FaGithub } from "react-icons/fa";

export default function ShowCase() {
  return (
    // shawocase
    <div className="max-w-[1200px] m-auto p-3 flex flex-col md:flex-row md:items-center md:justify-between min-h-[90vh] relative">
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
        className="animate-fade-right w-full h-[290px] md:rounded-full md:w-[370px] md:h-[350px] object-center object-cover"
        src={face}
        alt="Amir Photo"
      />
      {/* Existing circles */}
      <div className="absolute z-[-1] top-[-50px] right-0 w-[200px] h-[200px] bg-red-200 rounded-full mix-blend-multiply opacity-40"></div>
      <div className="absolute z-[-1] bottom-[-50px] left-[-50px] w-[250px] h-[250px] bg-yellow-200 rounded-full mix-blend-multiply opacity-30"></div>
      <div className="absolute z-[-1] top-[150px] left-[150px] w-[220px] h-[220px] bg-green-200 rounded-full mix-blend-multiply opacity-20"></div>
      <div className="absolute z-[-1] bottom-[100px] right-[100px] w-[180px] h-[180px] bg-yellow-200 rounded-full mix-blend-multiply opacity-25"></div> 
      <div className="absolute z-[-1] top-[250px] left-[250px] w-[190px] h-[190px] bg-purple-200 rounded-full mix-blend-multiply opacity-35"></div> 
      
       <div className="absolute z-[-1] bottom-[200px] right-[50px] w-[160px] h-[160px] bg-pink-200 rounded-full mix-blend-multiply opacity-25"></div>
      <div className="absolute z-[-1] top-[300px] left-[100px] w-[210px] h-[210px] bg-teal-200 rounded-full mix-blend-multiply opacity-35"></div>
      <div className="absolute z-[-1] bottom-[300px] right-[200px] w-[180px] h-[180px] bg-orange-200 rounded-full mix-blend-multiply opacity-30"></div>
    </div>
  );
}
