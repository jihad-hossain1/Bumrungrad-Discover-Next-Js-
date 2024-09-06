'use client';

import React from "react";
// import AppBar from "../AppBar/AppBar";
// import BottomBar from "../AppBar/BottomBar";-
import Link from "next/link";
import Image from "next/image";
import image from "@/public/assets/404.png";

export default function NotFound() {
  return (
    <>
      <div className="p-5 md:p-10 md:container md:mx-auto flex flex-col gap-10 items-center justify-center md:flex-row md:justify-between min-h-[60vh]">
        <div>
          <Image src={image} width={500} height={500} alt="404_Image" className="h-[150px] md:h-[350px]" />
        </div>
        <div className="flex flex-col gap-5 md:gap-10 items-center">
          <h5 className="text-5xl md:text-9xl font-extrabold text-blue">404</h5>
          <p className="text-center md:text-3xl">
            "You come the right place but this page not available now, back to
            home."
          </p>
          <Link
            className="px-4 py-2 bg-blue text-white rounded shadow"
            href={"/"}
          >
            Home
          </Link>
        </div>
      </div>
    </>
  );
}
