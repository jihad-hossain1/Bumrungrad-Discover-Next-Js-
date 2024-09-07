"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";

const Landing = () => {
  return (
    <section className="bg-cream relative">
      <div className="flex flex-col lg:flex-row py-20 px-5 justify-center items-center md:container md:mx-auto relative">
        <div className="lg:w-1/2 flex flex-col gap-5 md:gap-10">
          {/* <h1 className="text-4xl text-center md:text-left md:text-6xl lg:text-8xl font-extrabold text-blue">
            Asia&apos;s Favourite Medical <br />
            <span>
              <Typewriter
                words={["Destination", "Hub", "Hotspot", "Retreat"]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={2000}
              />
            </span>
          </h1> */}
          <h1 className="text-2xl md:text-4xl lg:text-6xl text-blue font-extrabold">
            Bumrungrad International Hospital in Bangkok, Thailand
          </h1>
          <p className="">
            Asia’s Leading Multi-Specialty Facility - Providing top-notch
            specialised care to more than 1.1 million patients annually.
          </p>
          <p className="">
            A Hub of Medical Excellence - 1,300+ doctors with worldwide
            certification in more than 39 different specialities.
          </p>

          <div className="flex gap-4 mt-5">
            <button className="w-full md:w-fit px-4 py-2 bg-blue text-white border border-blue hover:bg-cream hover:text-blue md:hover:scale-105 ease-linear duration-300 shadow rounded">
              Doctor Appoinment
            </button>
            <button className="w-full md:w-fit px-4 py-2 bg-blue text-white border border-blue hover:bg-cream hover:text-blue md:hover:scale-105 ease-linear duration-300 shadow rounded">
              Health Screening
            </button>
          </div>
        </div>
        <div className="lg:w-1/2">
          <Image
            height={600}
            width={600}
            src="https://i.ibb.co/v1jKX0V/Bumrungrad-hospital-Hero.png"
            effect="blur"
            alt="Bumrungrad International Hospital"
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;
