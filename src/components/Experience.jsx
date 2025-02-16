import React from "react";

export default function Experience() {
  return (
    <div className="max-w-[1200px] w-full  mt-10 m-auto p-5 relative overflow-clip">
      <h1 className="text-2xl md:text-4xl lg:text-5xl text-[#0DB760] font-bold py-2">
        Work Experience
      </h1>
      <span>Here Is Quick Summery Of My Most Recent Experiences:</span>

      <h2 className="text-xl md:text-2xl lg:text-3xl text-[#0DB760] font-bold py-2 mt-10">
        Company Projects
      </h2>
      <p className="text-md md:text-lg lg:text-xl text-gray-400 mt-2">
        These projects were developed with a strong emphasis on privacy,
        security, and professionalism. Each project involved collaboration with
        various teams to ensure the highest standards of quality and
        confidentiality.
      </p>

      <div className="p-4 flex flex-col  md:flex-row items-center  gap-5">
        <div className="animate-fade-left">
          <div className="flex flex-col gap-2">
            <span className="font-bold text-2xl md:text-3xl">Thechain</span>
            <span>Mobile Developer</span>
            <span>Oct 2024</span>
          </div>
          <span className="font-bold text-[#0DB760] text-xl mt-5">
            Kweli Project
          </span>
          <ul className="list-disc pl-5 mt-2">
            <li>
              Developed features for adding funds, sending wallet, and
              withdrawing.
            </li>
            <li>
              Implemented full authentication system including OTP verification.
            </li>
            <li>
              Designed and developed various UI screens for a seamless user
              experience.
            </li>
          </ul>
          <span className="font-bold text-[#0DB760] text-xl mt-5">
            Keshflip Project
          </span>
          <ul className="list-disc pl-5 mt-2">
            <li>
              Enabled wallet-to-wallet transactions, deposits, and withdrawals.
            </li>
            <li>Created a comprehensive transactions listing feature.</li>
            <li>
              Integrated authentication and numerous other functionalities to
              enhance user security and experience.
            </li>
          </ul>
        </div>
      </div>

      <div className="p-4 flex flex-col  md:flex-row items-center  gap-5">
        <div className="animate-fade-right">
          <div className="flex flex-col gap-2">
            <span className="font-bold text-2xl md:text-3xl">
              Github Collaboration
            </span>
            <span>May 2023 - Present</span>
          </div>
          <span className="font-bold text-[#0DB760] text-xl mt-5">
            Somali Freelancing Website
          </span>
          <ul className="list-disc pl-5 mt-2">
            <li>
              Developed a platform for ordering freelance services within the
              Somali community.
            </li>
            <li>
              Implemented seamless payment processing and user profile
              customization.
            </li>
            <li>
              Added post-ordering functionalities to facilitate smooth
              transactions between freelancers and clients.
            </li>
          </ul>
        </div>
      </div>

      <div className="p-4 flex flex-col  md:flex-row items-center  gap-5">
        <div className="animate-fade-left">
          <div className="flex flex-col gap-2">
            <span className="font-bold text-2xl md:text-3xl">Gabi School</span>
            <span>Apr - Jul 2023</span>
          </div>
          <span className="font-bold text-[#0DB760] text-xl mt-5">
            Rent From Me Project
          </span>
          <ul className="list-disc pl-5 mt-2">
            <li>
              Developed a rental payment system for tenants and landlords.
            </li>
            <li>
              Outlined terms and conditions of rental agreements, including rent
              amount, payment due date, and lease duration.
            </li>
          </ul>
        </div>
      </div>

      <h2 className="text-xl md:text-2xl lg:text-3xl text-[#0DB760] font-bold py-2 mt-10">
        Personal Projects
      </h2>
      <p className="text-md md:text-lg lg:text-xl text-gray-400 mt-2">
        These are some of my older projects, but they still hold a special place
        for me as they showcase my early skills and growth in the field.
      </p>

      <div className="p-4 flex flex-col  md:flex-row items-center  gap-5">
        <div className="animate-fade-right">
          <div className="flex flex-col gap-2"></div>
          <ul className="list-disc pl-5 mt-2"></ul>
        </div>
      </div>

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
