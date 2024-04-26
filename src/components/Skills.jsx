import React from "react";
import { FaCss3, FaHtml5 } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { DiDart } from "react-icons/di";
import { SiFlutter } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsFill } from "react-icons/ri";
import { SiCloudinary } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { TbBrandSocketIo } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

export default function Skills() {
  return (
    <div className="max-w-[1200px] m-auto p-5">
      <div className="flex justify-center items-center flex-col gap-3">
        <h1 className="text-[#0DB760] font-bold text-2xl md:text-3xl lg:text-5xl">
          Skills
        </h1>
        <span>The Skills, tools, and technologies That I'm Good At:</span>
      </div>
      <div className="flex mt-10 flex-wrap  justify-center items-center gap-5">
        <FaHtml5 className="text-red-500" size={55} />
        <FaCss3 className="text-blue-500" size={55} />
        <SiTailwindcss className="text-blue-400" size={55} />
        <IoLogoJavascript className="text-yellow-500" size={55} />
        <RiReactjsFill className="text-blue-400" size={55} />
        <SiReactquery className="text-blue-600" size={55} />
        <SiRedux className="text-purple-500" size={55} />
        <DiNodejs className=" rounded-lg p-1 bg-green-400 text-white" size={55} />
        <SiExpress className="text-gray-600" size={55} />
        <TbBrandSocketIo className="text-yellow-400" size={55} />
        <SiMongodb className="text-green-500" size={55} />
        <SiTypescript className="text-blue-400" size={55} />
        <SiNextdotjs className="text-black" size={55} />
      </div>
    </div>
  );
}
