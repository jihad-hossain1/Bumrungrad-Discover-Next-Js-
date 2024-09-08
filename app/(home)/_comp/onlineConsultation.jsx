import React from "react";
import image from "@/public/assets/video-consultation.png";
import Image from "next/image";
import { CheckCircle } from "@mui/icons-material";

export default function OnlineConsultation() {
  const data = [
    {
      title: "Cost-Effective",
      desc: "Get top-notch medical care without breaking the bank—no need for expensive trips abroad when you can receive quality treatment right here at home.",
    },
    {
      title: "Convenience",
      desc: " Skip the hassle of traveling and waiting around. You can access expert healthcare quickly and easily, all from the comfort of your own country.",
    },
    {
      title: "Immediate Connection",
      desc: "Say goodbye to long wait times! Connect with specialized doctors right away, so you can get the care you need without delay.",
    },
    {
      title: "Continuity of Care",
      desc: "Stay in touch with your doctor throughout your entire healthcare journey, ensuring you’re well taken care of, even after treatment.",
    },
  ];

  return (
    <div className="mx-5 my-10 md:my-20 md:container md:mx-auto flex flex-col-reverse lg:flex-row lg:items-center gap-16">
      <div className="lg:w-1/3">
        <Image
          height={600}
          width={400}
          src={image}
          alt="Bumrungrad International Hospital"
        />
      </div>
      <div className="flex flex-col gap-5 md:gap-10 lg:w-2/3 bg-cream p-8 rounded">
        <h5 className="text-xl md:text-2xl font-semibold text-blue">
          Schedule an online video consultation at Bumrungrad International
          Hospital
        </h5>
        <p>
          Connect with world-class medical expertise from the comfort of your
          home. Our telemedicine services bridge the gap, offering you top-tier
          care and expert consultations without the need to travel.
        </p>
        <div className="grid gap-2.5 md:gap-5 md:grid-cols-2">
          {data.map((d, i) => (
            <div key={i}>
              <p className="flex items-center gap-2">
                <CheckCircle className="text-green" />
                <span className="font-semibold text-blue">{d.title}:</span>{" "}
              </p>
              <p className="mt-2.5 ml-8">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
