import React from "react";
import cloudPhoto from "../assets/empM.png";

export default function Projects() {
  return (
    <div className="max-w-[1200px]   m-auto p-5 grid grid-cols-1 md:grid-cols-2   lg:grid-cols-3 gap-7 ">
      <div className="  w-full rounded-lg min-h-[250px] md:min-h-[158px]">
        <img
          src={cloudPhoto}
          className="bg-green-900 w-full object-center object-cover "
        />
        <div className="flex flex-col  ">
          <span className="font-bold  text-2xl py-1">
            Employee management System
          </span>
          <span className="text-slate-500">
            Mini Application for Employee Mangement
          </span>
        </div>
      </div>
      <div className="  w-full rounded-lg min-h-[250px] md:min-h-[158px]">
        <img
          src={cloudPhoto}
          className="bg-green-900 w-full object-center object-cover "
        />
        <div className="flex flex-col  ">
          <span className="font-bold  text-2xl py-1">
            Employee management System
          </span>
          <span className="text-slate-500">
            Mini Application for Employee Mangement
          </span>
        </div>
      </div>
      <div className="  w-full rounded-lg min-h-[250px]md:min-h-[158px]">
        <img
          src={cloudPhoto}
          className="bg-green-900 w-full object-center object-cover "
        />
        <div className="flex flex-col  ">
          <span className="font-bold  text-2xl py-1">
            Employee management System
          </span>
          <span className="text-slate-500">
            Mini Application for Employee Mangement
          </span>
        </div>
      </div>
      <div className="  w-full rounded-lg min-h-[250px] md:min-h-[158px]">
        <img
          src={cloudPhoto}
          className="bg-green-900 w-full object-center object-cover "
        />
        <div className="flex flex-col  ">
          <span className="font-bold  text-2xl py-1">
            Employee management System
          </span>
          <span className="text-slate-500">
            Mini Application for Employee Mangement
          </span>
        </div>
      </div>
   

    </div>
  );
}
