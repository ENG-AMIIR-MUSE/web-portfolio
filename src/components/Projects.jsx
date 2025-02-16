import React from "react";
import empPhoto from "../assets/empM.png";
import noteTakenApp from "../assets/note.mp4";
import Quiz from "../assets/Quiz.mp4";
import Noty from "../assets/Noty.mp4";
import foodDelivery from "../assets/food.mp4";
import gameDelivery from "../assets/game.mp4";
import voting from "../assets/voting.mp4";

export const vedios = [
  {
    v: voting,
    title: "JUTSA VOTING APP",
    des: "Website for Managing Jutsa Elections For Jamhuriya Univeristy",
  },
  {
    v: foodDelivery,
    title: "Food Delivery Website",
    des: "Website For Ordering Delivery Foods With in Your Home",
  },
  {
    v: Quiz,
    title: "Quiz App Builed in Java Programing",
    des: "Website For Ordering Delivery Foods With in Your Home",
  },
  {
    v: gameDelivery,
    title: "Gaming Website",
    des: "Website Displaying Gaming",
  },
  {
    v: Noty,
    title: "Note Taken App buil in React,Redux",
    des: "You can Add, Manage Notes",
  },
  {
    v: noteTakenApp,
    title: "Fullstack Note Taken With Auth and Authorization",
    des: "You Can Add,update and Manage Notes ",
  },
];

export default function Projects() {
  return (
    <div className="dark:text-gray-300  mb-32 container max-w-[1200px] mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {/* Project Cards */}

      {vedios.map((v) => {
        console.log(v.v);
        return (
          <div
            className="card-content rounded-lg flex flex-col justify-between"
            key={v.title}
          >
            <video
              autoPlay={false}
              controls
              className="w-full h-[250px] rounded-lg"
            >
              <source src={v.v} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="flex flex-col p-4">
              <h2 className="font-bold text-xl mb-2">{v.title}</h2>
              <p className="text-slate-500">{v.des}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
