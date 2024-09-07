"use client";

import React from "react";
import Image from "next/image";
import patient from "@/public/assets/patient.png"; 
import airplane from "@/public/assets/airplane.png"; 
import world from "@/public/assets/worldwide.png"; 
import doctor from "@/public/assets/doctor.png"; 

export default function RightHealthcare() {
  const cares = [
    {
      image: patient,
      number: "1.1 M",
      desc: "Patients treated each year at Bumrungrad International Hospital.",
    },
    {
      image: airplane,
      number: "520,000",
      desc: "Overseas patients travel yearly to receive treatment at Bumrungrad International Hospital.",
    },
    {
      image: world,
      number: "190",
      desc: "Countries around the world that Bumrungrad International Hospital receives patients from every year.",
    },
    {
      image: doctor,
      number: "40",
      desc: "Specialty centres that provide comprehensive diagnosis and treatment of complex conditions.",
    },
  ];
  return (
    <div className="p-5 md:p-10 my-10 md:my-20 md:container md:mx-auto flex flex-col lg:flex-row lg:items-center gap-16">
      <div className="flex flex-col gap-2.5 md:gap-5 lg:w-1/2">
        <h5 className="text-xl md:text-2xl font-semibold text-blue">
          The Right Healthcare for You at Bumrungrad International Hospital
        </h5>
        <p className="text-justify">
          Bumrungrad International Hospital, established in 1980, provides
          exceptional medical services to over 1.1 million patients worldwide
          every year.
        </p>
        <p className="text-justify">
          Specializing in liver and bone marrow transplants, cardiology, and
          spine procedures, our 1,300+ internationally certified doctors ensure
          world-class healthcare.
        </p>
        <p className="text-justify">
          Our state-of-the-art facilities in Bangkok, Thailand, cater to a wide
          range of medical specialities and services, including oncology,
          neurology, orthopaedic, breast, and heart care, as well as plastic
          surgery and nephrology.
        </p>
      </div>
      <div className="lg:w-1/2 grid gap-4 grid-cols-2">
        {cares.map((c, i) => (
          <div key={i} className="flex  flex-col items-center gap-2.5 md:gap-5 shadow p-4 rounded">
            <Image
            height={50}
            width={50}
            src={c.image}
            alt="Bumrungrad Discover"
            />
            <p className="text-center text-2xl md:text-4xl font-semibold text-blue">
              {c.number}
            </p>
            <p className="text-center">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
