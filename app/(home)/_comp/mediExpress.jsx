"use client";

import Image from "next/image";
import React from "react";
import img from "@/public/assets/medixpress.jpeg";

export default function MediExpress() {
  return (
    <div className="p-5 md:p-10 my-10 md:my-20 md:container md:mx-auto flex flex-col lg:flex-row lg:items-center gap-16">
      <div className="flex flex-col gap-2.5 md:gap-5 lg:w-1/2">
        <h5 className="text-xl md:text-2xl font-semibold text-blue">Who We Are - Thai Medi Xpress</h5>
        <p className="text-justify">
          Thai Medi Xpress is your one and only partner for truly seamless
          healthcare at Bumrungrad International Hospital, the number one
          medical institute in Thailand. We have been the Bumrungrad Bangladesh
          representative and referral office in Dhaka, Bangladesh, since 2018.
          We are here to bridge the gap between you and first-class medical
          care. We are also the sister concern of Surecell Medical BD Ltd.
        </p>
        <p className="text-justify">
          We work tirelessly to ensure a completely stress-free and efficient
          healthcare experience. We help patients from Bangladesh who are
          looking for treatment at Bumrungrad. Come to us and let us guide you
          through your medical journey with our expertise.
        </p>
      </div>
      <div className="lg:w-1/2 flex justify-center">
        <Image
          height={400}
          width={600}
          src={img}
          effect="blur"
          alt="Bumrungrad International Hospital"
        />
      </div>
    </div>
  );
}
