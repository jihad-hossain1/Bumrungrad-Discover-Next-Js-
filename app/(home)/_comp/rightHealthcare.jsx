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
    <div className="mx-5 my-10 md:my-20 md:container md:mx-auto flex flex-col lg:flex-row lg:items-center gap-16">
      <div className="flex flex-col gap-2.5 md:gap-5 lg:w-1/2">
        <h2 className="text-xl md:text-2xl font-semibold text-blue">
          Bumrungrad International Hospital: A World Leader in Comprehensive
          Medical Services
        </h2>
        <p className="text-justify">
          Bumrungrad International Hospital is a renowned medical facility in
          Bangkok, Thailand, offering world-class healthcare services to
          patients from around the globe. With a focus on advanced medical
          technology and a team of highly skilled healthcare professionals,
          Bumrungrad provides comprehensive care in various specialties,
          including cardiology, oncology, orthopedics, neurosurgery, pediatrics,
          women's health, and cosmetic surgery. The hospital is committed to
          providing the highest quality care, using state-of-the-art technology
          and following international standards.
        </p>
        <p className="text-justify">
          One of the key factors contributing to Bumrungrad's success is its
          commitment to international accreditation. The hospital is certified
          by the Joint Commission International (JCI), a globally recognized
          healthcare accreditation body. JCI accreditation signifies that
          Bumrungrad meets the highest standards of quality, safety, and patient
          care. This certification provides patients with confidence in the
          quality of care they will receive.
        </p>
        <p className="text-justify">
          Bumrungrad offers a variety of ancillary services to enhance the
          patient experience. These services include accommodation,
          transportation, and translation services. The hospital's international
          patient services team is dedicated to assisting patients from all over
          the world, ensuring a seamless and stress-free experience.
        </p>
      </div>
      <div className="lg:w-1/2 grid gap-4 md:grid-cols-2 bg-cream rounded p-8">
        {cares.map((c, i) => (
          <div
            key={i}
            className="flex  flex-col items-center gap-2.5 md:gap-5 shadow p-8 rounded bg-white group"
          >
            <Image
              height={60}
              width={60}
              src={c.image}
              alt="Bumrungrad International Hospital"
              className="shadow p-2.5 shadow-blue rounded md:group-hover:scale-110 duration-300 ease-linear"
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
