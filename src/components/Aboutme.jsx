import React from "react";
import face from "../assets/me.png";
export default function Aboutme() {
  return (
    <div className="max-w-[1200px] p-5 m-auto relative">
      <div className="flex flex-col md:flex-row items-center">
        <img
          className="w-[500px] h-[300px] object-cover"
          src={face}
          alt="Amir Photo"
        />
        <div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl text-[#0DB760] font-bold py-2">
            About Me
          </h1>
          <p className="text-slate-600 p-2 text-left">
            A dynamic self-taught <strong>software developer</strong> with a
            passion for crafting elegant and functional{" "}
            <strong>web applications </strong> , proficient in utilizing the
            <strong> MERN technology stack</strong> - <strong>MongoDB</strong>{" "}
            for flexible and scalable database management,{" "}
            <strong>Express.js</strong> for creating robust web applications,
            <strong>React.js</strong> for building interactive user interfaces,
            and <strong>Node.js</strong> for running server-side JavaScript. In
            addition to these skills, expertise in{" "}
            <strong>state management solutions</strong> like{" "}
            <strong>Redux</strong> and <strong>Redux Toolkit </strong>
            enables <strong>efficient management of application state</strong> ,
            ensuring smooth data flow and predictable behavior. Leveraging{" "}
            <strong>React Query</strong> further streamlines data fetching and
            caching, enhancing performance and user experience. While primarily
            focused on web development, also explores{" "}
            <strong> mobile app development </strong>
            using <strong>Flutter</strong>, with some experience. Though not yet
            an expert in mobile development, familiarity with{" "}
            <strong> Firebase </strong>
            facilitates seamless integration of <strong>
              authentication{" "}
            </strong>{" "}
            , real-time database, and <strong>cloud storage </strong>into mobile
            applications.
          </p>
        </div>
      </div>
      <div className="absolute z-[-1] top-[-50px] right-[50px] w-[200px] h-[200px] bg-red-200 rounded-full mix-blend-multiply opacity-40"></div>

      <div className="absolute z-[-1] bottom-[100px] right-[00px] w-[180px] h-[180px] bg-yellow-200 rounded-full mix-blend-multiply opacity-25"></div>
      <div className="absolute z-[-1] top-[250px] left-[250px] w-[190px] h-[190px] bg-purple-200 rounded-full mix-blend-multiply opacity-35"></div>

      <div className="absolute z-[-1] bottom-[200px] right-[50px] w-[160px] h-[160px] bg-pink-200 rounded-full mix-blend-multiply opacity-25"></div>
    </div>
  );
}
