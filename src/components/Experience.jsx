import React from "react";

export default function Experience() {
  return (
    <div className="max-w-[1200px] mt-10 m-auto p-5 relative">
      <h1 className="text-2xl md:text-4xl lg:text-5xl text-[#0DB760] font-bold py-2">
        Work Experience
      </h1>
      <span>Here Is Quick Summery Of My Most Recent Experiences:</span>
      
      <div className="p-4 flex flex-col  md:flex-row items-center  gap-5">
        <div className="animate-fade-left" >
          <div className="flex flex-col gap-2">
          <span className="font-bold text-2xl md:text-3xl">Gabi Scool</span>
          <span>Nov 2021 - Oct 2021</span>

          </div>
          <span className="font-bold text-[#0DB760] text-xl ">Rent From Me Project</span>
          <ul className="list-disc pl-5 mt-10"> {/* Use list-disc to add bullet points */}
            <li>
              Rent refers to the payment made by a tenant to a landlord or
              property owner in exchange for the use or occupancy of a property,
              such as an apartment, house, or commercial space.
            </li>
            <li>
              It is typically paid on a regular basis, such as monthly, and is
              governed by a rental agreement or lease that outlines the terms
              and conditions of the rental arrangement, including the amount of
              rent, payment due date, duration of the lease, and any additional
              responsibilities or rights of both the tenant and the landlord.
            </li>
          </ul>
        </div>
        <div className="animate-fade-right">
          <div className="flex flex-col gap-2">
          <span className="font-bold text-2xl md:text-3xl">Github Collobration</span>
          <span>Nov 2021 - Oct 2021</span>

          </div>
          <span className="font-bold text-[#0DB760] text-xl ">Somali Freelancing  Webste</span>
          <ul className="list-disc pl-5 mt-10"> {/* Use list-disc to add bullet points */}
            <li>
              Rent refers to the payment made by a tenant to a landlord or
              property owner in exchange for the use or occupancy of a property,
              such as an apartment, house, or commercial space.
            </li>
            <li>
              It is typically paid on a regular basis, such as monthly, and is
              governed by a rental agreement or lease that outlines the terms
              and conditions of the rental arrangement, including the amount of
              rent, payment due date, duration of the lease, and any additional
              responsibilities or rights of both the tenant and the landlord.
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="absolute z-[-1] top-[-50px] right-0 w-[200px] h-[200px] bg-red-200 rounded-full mix-blend-multiply opacity-40"></div> */}
      {/* <div className="absolute z-[-1] bottom-[-50px] left-[-50px] w-[250px] h-[250px] bg-yellow-200 rounded-full mix-blend-multiply opacity-30"></div> */}
      {/* <div className="absolute z-[-1] top-[150px] left-[150px] w-[220px] h-[220px] bg-green-200 rounded-full mix-blend-multiply opacity-20"></div> */}
      {/* <div className="absolute z-[-1] bottom-[100px] right-[100px] w-[180px] h-[180px] bg-yellow-200 rounded-full mix-blend-multiply opacity-25"></div>  */}
      {/* <div className="absolute z-[-1] top-[250px] left-[250px] w-[190px] h-[190px] bg-purple-200 rounded-full mix-blend-multiply opacity-35"></div>  */}
      
       {/* <div className="absolute z-[-1] bottom-[200px] right-[50px] w-[160px] h-[160px] bg-pink-200 rounded-full mix-blend-multiply opacity-25"></div> */}
      {/* <div className="absolute z-[-1] top-[300px] left-[100px] w-[210px] h-[210px] bg-teal-200 rounded-full mix-blend-multiply opacity-35"></div> */}
      {/* <div className="absolute z-[-1] bottom-[300px] right-[200px] w-[180px] h-[180px] bg-orange-200 rounded-full mix-blend-multiply opacity-30"></div> */}
    </div>
  );
}
