import React from "react";
import face from "../assets/me.png";

export default function Aboutme() {
  return (
    <div className="max-w-[1200px] mb-32 md:mb-0 p-5 h-screen mt-32 m-auto relative overflow-clip">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <img
          className="w-[500px] h-[300px] object-cover"
          src={face}
          alt="Amir Photo"
        />
        <div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl text-[#0DB760] font-bold py-2">
            About Me
          </h1>
          <p className="dark:text-gray-300 text-slate-600 p-2 text-left">
            A dynamic self-taught <strong>software developer</strong> with a
            passion for crafting elegant and functional{" "}
            <strong>web applications</strong>, proficient in utilizing the
            <strong> MERN technology stack</strong> - <strong>MongoDB</strong>{" "}
            for flexible and scalable database management,{" "}
            <strong>Express.js</strong> for creating robust web applications,
            <strong>React.js</strong> for building interactive user interfaces,
            and <strong>Node.js</strong> for running server-side JavaScript.
          </p>
          <p className="dark:text-gray-300 text-slate-600 p-2 text-left mt-4">
            In addition to these skills, expertise in{" "}
            <strong>state management solutions</strong> like{" "}
            <strong>Redux</strong> and <strong>Redux Toolkit</strong> enables{" "}
            <strong>efficient management of application state</strong>, ensuring
            smooth data flow and predictable behavior. Leveraging{" "}
            <strong>React Query</strong> further streamlines data fetching and
            caching, enhancing performance and user experience.
          </p>
          <p className="dark:text-gray-300 text-slate-600 p-2 text-left mt-4">
            While primarily focused on web development, also explores{" "}
            <strong>mobile app development</strong> using{" "}
            <strong>Flutter</strong>, with some experience. Though not yet an
            expert in mobile development, familiarity with{" "}
            <strong>Firebase</strong> facilitates seamless integration of{" "}
            <strong>authentication</strong>, real-time database, and{" "}
            <strong>cloud storage</strong> into mobile applications.
          </p>
          <p className="dark:text-gray-300 text-slate-600 p-2 text-left mt-4">
            During this learning phase, I have also acquired skills in{" "}
            <strong>Dart</strong>, <strong>Flutter</strong>, developing complex{" "}
            <strong>UI screens</strong>, <strong>animations</strong>, and{" "}
            <strong>full-stack mobile development</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
