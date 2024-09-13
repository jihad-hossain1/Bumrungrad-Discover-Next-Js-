'use client'

import React, { useEffect, useState } from "react";
import CardLoader from "@/components/ui/cardLoader";
import Image from "next/image";


const OneNewsPage = ({params}) => {
  const [loader, setLoader] = useState(true);
  const [oneNews, setNews] = useState({});
  useEffect(() => {
    fetch(`https://api.discoverinternationalmedicalservice.com/api/get/news/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setNews(data.data);
        setLoader(false);
      });
  }, [params.id]);
  return (
    <div className="p-5 my-5 md:container lg:w-[50%] md:mx-auto">
      {loader ? (
        <CardLoader cardLength={1} gridNumber={1} speed="slow" />
      ) : (
        <div className="flex flex-col gap-5">
          <Image
            height={300}
            width={300}
            src={oneNews?.newsImage}
            alt="Bumrungrad International Hospital"
            className="lg:h-[40vh] min-w-full w-full"
          />
          <div className="">
            <h5 className="font-semibold text-blue text-xl">
              {oneNews?.newsTitle}
            </h5>
            <p className="my-3">{oneNews?.newsDescription}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OneNewsPage;
