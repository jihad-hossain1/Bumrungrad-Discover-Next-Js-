"use client";

import airimg from "@/public/assets/service_logo/Bumrungrad  Hospital-air_ambulance.png";
import airpickup from "@/public/assets/service_logo/Bumrungrad  Hospital-air_pickup.png";
import airticket from "@/public/assets/service_logo/Bumrungrad  Hospital-air_ticket.png";
import appointment from "@/public/assets/service_logo/Bumrungrad  Hospital-appointment.png";
import hotelReservation from "@/public/assets/service_logo/Bumrungrad  Hospital_visa_processing.png";
import orderMedicine from "@/public/assets/service_logo/Bumrungrad  Hospital_order_medicine.png";
import teleMedicine from "@/public/assets/service_logo/Bumrungrad  Hospital_telemedicine.png";
import medicalRecords from "@/public/assets/service_logo/Bumrungrad  Hospital_medical_records.png";
import { Divider } from "@mui/material";
// import AirAmbulanceForm from "./modalFrom/AirAmbulanceForm";
// import AirtTcket from "./modalFrom/AirtTcket";
// import AirPickup from "./modalFrom/AirPickup";
import Image from "next/image";

const services = [
  {
    name: "Book Appointment",
    img: appointment,
    pageTo: "/appointment",
    alt: "Bumrungrad International Hospital",
    description:
      "Schedule an appointment with our specialists for your healthcare needs.",
  },
  {
    name: "Visa Processing",
    img: hotelReservation,
    pageTo: "/visaprocessing",
    alt: "Bumrungrad International Hospital",
    description:
      "Facilitating visa procedures for international patients seeking medical treatment.",
  },
  {
    id: 3,
    name: "Order Medicine",
    img: orderMedicine,
    pageTo: "/order-medicine",
    alt: "Bumrungrad International Hospital",
    description:
      "Order prescribed medicines online and have them delivered to your location.",
  },
  {
    name: "Medical Records",
    img: medicalRecords,
    pageTo: "/medical-record",
    alt: "Bumrungrad International Hospital",
    description:
      "Access and manage your medical records securely and conveniently.",
  },
  {
    name: "Tele Medicine",
    img: teleMedicine,
    pageTo: "/telemedicine",
    alt: "Bumrungrad International Hospital",
    description:
      "Consult with doctors remotely via video call from the comfort of your home.",
  },
  {
    id: 2,
    name: "Air Ambulance",
    img: airimg,
    alt: "Bumrungrad International Hospital",
    description:
      "Emergency air transport services for critical medical situations.",
  },
  {
    id: 7,
    name: "Air Ticket",
    img: airticket,
    alt: "Bumrungrad International Hospital",
    description:
      "Book air tickets for patients and their families traveling for treatment.",
  },
  {
    id: 8,
    name: "Airport Pickup",
    img: airpickup,
    alt: "Bumrungrad International Hospital",
    description:
      "Arrange airport pickup services to ensure smooth transfers to the hospital.",
  },
  {
    name: "Hospital Admission",
    img: appointment,
    alt: "Bumrungrad International Hospital",
    description:
      "Get assistance with hospital admission procedures for a seamless experience.",
  },
  {
    name: "Accommodation",
    img: appointment,
    alt: "Bumrungrad International Hospital",
    description:
      "Find comfortable accommodation options near the hospital during your stay.",
  },
  {
    name: "Language Interpreter",
    img: appointment,
    alt: "Bumrungrad International Hospital",
    description:
      "Professional interpreters to assist you during consultations and hospital visits.",
  },
  {
    name: "Money Transfer for Treatment",
    img: appointment,
    alt: "Bumrungrad International Hospital",
    description:
      "Facilitate secure money transfers for medical expenses and treatments.",
  },
];

export default function Services({ handaleOpen, getData }) {
  const handleClick = (s, i, id) => {
    handaleOpen(id);
    getData(s);
  };

  return (
    <div className="p-5 md:p-10 my-10 md:my-20 md:container md:mx-auto">
      <h2 className="capitalize text-xl md:text-2xl lg:text-3xl font-bold text-blue">
        Our Services
      </h2>
      <div className="my-5">
        <Divider />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
        {services.map((s, i, id) => (
          <button
            key={i}
            onClick={() => handleClick(s, i, id)}
            className="cursor-pointer flex flex-col gap-4 items-center md:hover:scale-105 shadow md:hover:shadow-lg md:hover:shadow-blue duration-300 ease-linear p-4 rounded-xl"
          >
            <Image height={100} width={100} src={s.img} alt={s.alt} />
            <h5 className="text-xl text-center font-semibold text-blue">{s.name}</h5>
            <p className="text-center">{s.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
