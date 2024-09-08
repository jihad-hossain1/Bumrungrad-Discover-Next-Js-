import React from "react";
import aetnaInsurance from "@/public/assets/partners/aetna-insurance.jpg";
import axaInsurance from "@/public/assets/partners/axa-insurance.png";
import allianzInsurance from "@/public/assets/partners/allianz-insurance.png";
import cignaInsurance from "@/public/assets/partners/cigna-insurance.png";
import hennerInsurance from "@/public/assets/partners/henner-insurance.jpg";
import cega from "@/public/assets/partners/cega.png";
import claria from "@/public/assets/partners/claria.png";
import daman from "@/public/assets/partners/daman.png";
import Image from "next/image";
import { CheckCircle } from "@mui/icons-material";

export default function InsurancePartners() {
  const partners = [
    {
      image: aetnaInsurance,
      name: "Aetna Insurance",
    },
    {
      image: cega,
      name: "Cega",
    },
    {
      image: axaInsurance,
      name: "AXA Insurance",
    },
    {
      image: allianzInsurance,
      name: "Allianz Insurance",
    },
    {
      image: cignaInsurance,
      name: "Cigna Insurance",
    },
    {
      image: hennerInsurance,
      name: "Henner Insurance",
    },
    {
      image: claria,
      name: "Claria",
    },
    {
      image: daman,
      name: "Daman",
    },
  ];

  const insurances = [
    "We accept a variety of international health insurance plans, including those from leading providers.",
    "Our insurance partners streamline the payment process, saving you time and hassle.",
    "If your insurance provider isn’t listed, don’t worry! Our team is here to help you find the right coverage. Simply make an inquiry today, and we’ll assist you in verifying your insurance options and ensuring you receive the care you need.",
  ];
  return (
    <div className="mx-5 my-16 md:my-32 md:container md:mx-auto">
      <h5 className="text-2xl md:text-4xl font-semibold text-blue">
        Insurance Partners
      </h5>

      <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16 mt-10 md:mt-20">
        <div className="md:w-1/2">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {partners.map((p, i) => (
              <div key={i} className="flex flex-col items-center gap-2.5">
                <Image height={80} width={200} src={p.image} />
                <p className="text-sm font-semibold">{p.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="md:w-1/2">
          <h2 className="text-xl md:text-2xl font-semibold text-blue">
            Discover your Insurance Options at Bumrungrad International Hospital
          </h2>
          <p className="mt-5">
            We’re proud to work with a diverse range of insurance providers to
            make accessing medical care straightforward for you. If you’re
            wondering whether your insurance is covered, simply use our search
            tool or contact our support team, and we’ll be glad to confirm your
            provider’s acceptance.
          </p>
          <h2 className="text-xl md:text2xl font-semibold text-blue mt-5">
            Why use our insurance partners for your medical treatment at
            Bumrungrad International Hospital
          </h2>
          <div className="flex flex-col gap-2.5 mt-5">
            {insurances.map((i, index) => (
              <p key={index}>
                <CheckCircle className="text-green mr-2.5" />
                <span>{i}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
