"use client";

import React from "react";
import logo from "@/public/assets/Bumrungrad  Hospital_nav_logo.png";
import Image from "next/image";

export default function JourneyBetter() {
  return (
    <div className="p-4 md:p-8 mx-5 md:container md:mx-auto flex flex-col gap-5 md:gap-10 items-center bg-cream rounded-xl shadow mt-5">
      <Image
        height={150}
        width={350}
        src={logo}
        effect="blur"
        alt="Bumrungrad International Hospital"
      />
      <p className="text-xl md:text-2xl text-center font-semibold text-blue">
        Your journey to better health at Bumrungrad International Hospital
        starts here
      </p>
      <div className="flex flex-wrap gap-4 mt-5 justify-center">
        <button className="px-4 py-2 bg-blue text-white border border-blue hover:bg-cream hover:text-blue md:hover:scale-105 ease-linear duration-300 shadow rounded">
          Doctor Appoinment
        </button>
        <button className="px-4 py-2 bg-blue text-white border border-blue hover:bg-cream hover:text-blue md:hover:scale-105 ease-linear duration-300 shadow rounded">
          Health Screening
        </button>
        <button className="px-4 py-2 bg-blue text-white border border-blue hover:bg-cream hover:text-blue md:hover:scale-105 ease-linear duration-300 shadow rounded">
          Find Doctor
        </button>
        <button className="px-4 py-2 bg-blue text-white border border-blue hover:bg-cream hover:text-blue md:hover:scale-105 ease-linear duration-300 shadow rounded">
          Send Querey
        </button>
      </div>
    </div>
  );
}
