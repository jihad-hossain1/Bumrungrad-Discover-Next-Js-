import React from "react";

export default function Testimonial() {
  return (
    <div className="mx-5 my-10 md:my-20 md:container md:mx-auto flex flex-col gap-5 md:gap-10">
      <h5 className="text-center text-2xl md:text-4xl font-semibold text-blue capitalize">
        What our patients say
      </h5>
      <script
        src="https://static.elfsight.com/platform/platform.js"
        data-use-service-core
        defer
      ></script>
      <div
        className="elfsight-app-698b4e80-48fe-4ab0-8b75-acb082f7b303"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
}
