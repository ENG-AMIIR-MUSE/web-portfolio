import React from "react";
import empPhoto from "../assets/empM.png";
import noteTakenApp from "../assets/note.mp4";
import Quiz from "../assets/Quiz.mp4";
import Noty from "../assets/Noty.mp4";
import foodDelivery from "../assets/food.mp4";
import gameDelivery from "../assets/game.mp4";
import voting from "../assets/voting.mp4";

export default function Projects() {
  return (
    <div className="dark:text-gray-300  mb-32 container max-w-[1200px] mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {/* Project Cards */}
     
        <div className="card-content  rounded-lg flex flex-col justify-between"
        >
          <img
            src={empPhoto}
            
            className="w-full object-cover rounded-t-lg"
            alt="Employee Management System"
          />
          <div className="flex flex-col p-4">
            <h2 className="font-bold text-xl mb-2">Employee Management System</h2>
            <p className="text-slate-500">Mini CRUD app for managing employee information.</p>
          </div>
        </div>
      
      {/* Repeat the above structure for other project cards */}
     
        <div className="card-content  rounded-lg flex flex-col justify-between">
          <video
            controls
            className="w-full rounded-lg"
            style={{ height: "auto" }}
          >
            <source src={noteTakenApp} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="flex flex-col p-4">
            <h2 className="font-bold text-xl mb-2">Note Taken App</h2>
            <p className="text-slate-500">An app for taking notes built with React, Redux, and Node.js.</p>
          </div>
        </div>
      
     
        <div className="card-content  rounded-lg flex flex-col justify-between">
          <video
            controls
            className="w-full rounded-lg"
            style={{ height: "220px" }}
          >
            <source src={voting}  />
            Your browser does not support the video tag.
          </video>
          <div className="flex flex-col p-4">
            <h2 className="font-bold text-xl mb-2">Fullstack Voting Web</h2>
            <p className="text-slate-500">A quiz app built using React, Redux, and Node.js.</p>
          </div>
        </div>
      
        <div className="card-content  rounded-lg flex flex-col justify-between">
          <video
            controls
            className="w-full rounded-lg"
            style={{ height: "220px" }}
          >
            <source src={Quiz} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="flex flex-col p-4">
            <h2 className="font-bold text-xl mb-2">Quiz App</h2>
            <p className="text-slate-500">A quiz app built using React, Redux, and Node.js.</p>
          </div>
        </div>
      
      
        <div className="card-content  rounded-lg flex flex-col justify-between">
          <video
            controls
            className="w-full rounded-lg"
            style={{ height: "250px" }}

          >
            <source src={Noty} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="flex flex-col p-4">
            <h2 className="font-bold text-xl mb-2">Nooty App</h2>
            <p className="text-slate-500">An app for managing notes and todo lists.</p>
          </div>
        </div>
     
     
        <div className="card-content  rounded-lg flex flex-col justify-between">
          <video
            controls
            className="w-full rounded-lg"
            style={{ height: "250px" }}
          >
            <source src={foodDelivery} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="flex flex-col p-4">
            <h2 className="font-bold text-xl mb-2">Food Delivery Web</h2>
            <p className="text-slate-500">A website for food delivery built with React.</p>
          </div>
        </div>
    
      
        <div className="card-content  rounded-lg flex flex-col justify-between">
          <video
            controls
            className="w-full rounded-lg"
            style={{ height: "auto" }}
          >
            <source src={gameDelivery} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="flex flex-col p-4">
            <h2 className="font-bold text-xl mb-2">Game Delivery Web</h2>
            <p className="text-slate-500">A website for game delivery built with React.</p>
          </div>
        </div>
   
    </div>
  );
}
