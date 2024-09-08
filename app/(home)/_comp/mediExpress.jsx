"use client";

import Image from "next/image";
import React from "react";
import img from "@/public/assets/medixpress.jpeg";

export default function MediExpress() {
  return (
    <div className="p-5 md:p-10 my-10 md:my-20 md:container md:mx-auto flex flex-col lg:flex-row lg:items-center gap-16">
      <div className="flex flex-col gap-2.5 md:gap-5 lg:w-1/2">
        <h2 className="text-xl md:text-2xl font-semibold text-blue">
          {" "}
          Know More About Us - DIMS
        </h2>

        <p className="font-semibold">Who We Are?</p>
        <p className="text-justify">
          DIMS is your trusted partner for truly seamless healthcare at
          Bumrungrad International Hospital. As the official representative and
          international referral office in Dhaka, Bangladesh, we have proudly
          facilitated access to world-class medical care for patients from
          Bangladesh for years. Our dedicated team ensures that your healthcare
          journey is effortless, from initial consultations to specialized
          treatments and post-care follow-up. With a deep understanding of both
          local needs and international healthcare standards, DIMS bridges the
          gap between patients in Bangladesh and the renowned expertise of
          Bumrungrad International Hospital.
        </p>
        <p className="font-semibold">How do we work?</p>
        <p className="text-justify">
          At DIMS, we simplify your healthcare journey, ensuring it is smooth
          and stress-free. Our process begins with a personalized
          consultation—whether by phone, email, or in-person at our Bumrungrad
          hospital Dhaka office—to understand your specific needs. From there,
          we manage all aspects of your medical trip, including appointment
          scheduling at Bumrungrad International Hospital, as well as
          coordinating flights, accommodation, and transportation. Once in
          Thailand, we provide full support throughout the hospital process and
          assist with follow-up care. With DIMS, you can focus on your health
          while we handle every detail with precision and care.
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
