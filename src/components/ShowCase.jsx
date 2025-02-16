import React from "react";
import face from "../assets/face3.jpg";
import { FaFilePdf, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import pdf from "../assets/pdf.png";

export default function ShowCase() {
  return (
    <div className="max-w-[1200px] m-auto p-3 flex flex-col md:flex-row md:items-center md:justify-between min-h-[95vh] relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute z-[-1] top-[10%] left-[10%] w-[150px] h-[150px] bg-blue-300 rounded-full mix-blend-multiply opacity-20"></div>
      <div className="absolute z-[-1] bottom-[10%] right-[10%] w-[200px] h-[200px] bg-green-300 rounded-full mix-blend-multiply opacity-20"></div>

      <div className="mt-[50px] animate-fade-left md:mt-0 w-full md:w-1/2 flex flex-col items-center md:items-start gap-6">
        <div className="flex flex-col md:bg-transparent font-bold text-2xl md:text-4xl lg:text-5xl gap-5 capitalize md:items-start w-full mb-3">
          <span className="text-gray-700">Hello</span>
          <span>
            My Name Is <span className="font-bold text-[#0DB760]">Amir</span>
          </span>
          <span>
            I'm a{" "}
            <span className="font-bold text-[#0DB760]">
              Fullstack Web Developer
            </span>{" "}
            and{" "}
            <span className="font-bold text-[#0DB760]">Flutter Developer</span>
          </span>
          <div className="mb-3 flex flex-col gap-5">
            <Link
              className="flex items-center gap-3 bg-[#0DB760] text-white px-4 py-2 rounded-lg shadow-lg hover:bg-[#0bbf50] transition duration-300"
              to={"https://github.com/ENG-AMIIR-MUSE"}
            >
              <FaGithub size={30} />
              <span className="font-bold">View My Github</span>
            </Link>
            <Link
              className="flex items-center gap-3 bg-[#0DB760] text-white px-4 py-2 rounded-lg shadow-lg hover:bg-[#0bbf50] transition duration-300"
              to={
                "https://res.cloudinary.com/dyhmbyp4o/image/upload/v1714423262/kgujc006vazfpxbjfp8x.pdf"
              }
            >
              <FaFilePdf size={30} />
              <span className="font-bold">Download My CV</span>
            </Link>
          </div>
        </div>
      </div>

      <img
        className="animate-fade-right w-full h-[290px] md:rounded-full md:w-[370px] overflow-hidden md:h-[350px] object-center object-cover shadow-lg"
        src={face}
        alt="Amir Photo"
      />
    </div>
  );
}
