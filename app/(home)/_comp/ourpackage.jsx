// "use client";

// import React, { useEffect, useState } from "react";
// import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
// // import Loader from '../../shared/Loader/Loader'
// import Link from 'next/link'
// import Image from 'next/image'
// import CardLoader from '@/components/ui/cardLoader'


// export default function HomePackages() {
//   const [loader, setLoader] = useState(false);
//   const [packages, setPackages] = useState([]);

//   useEffect(() => {
//     setLoader(true);
//     fetch("https://api.discoverinternationalmedicalservice.com/api/get/package")
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.status === 200) {
//           setPackages(data?.data);
//           setLoader(false);
//         } else {
//           console.log(data);
//           setLoader(false);
//         }
//       });
//   }, []);
//   return (
//     <section className="p-5 md:p-10 my-5 md:my-10 md:container md:mx-auto">
//       <div className="flex justify-between items-center">
//         <h2 className="capitalize text-xl md:text-2xl lg:text-3xl font-bold text-blue">
//           our packages
//         </h2>
//         <Link
//           href={"/packages"}
//           className="rounded px-2 md:px-4 py-1 md:py-2 border border-blue text-blue hover:bg-blue hover:text-white duration-300 ease-linear"
//         >
//           View All
//         </Link>
//       </div>
//       {loader ? (
//        <CardLoader cardLength={4} gridNumber={4} speed="fast"  />
//       ) : (
//         <div className="my-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
//           {packages.slice(0, 8).map((p, i) => (
//             <div
//               key={i}
//               className="flex flex-col justify-between gap-2 shadow hover:shadow-xl duration-300 ease-linear"
//             >
//               <Image
//                 height={300}
//                 width={500}
//                 src={p?.cover_photo}
//                 alt="Bumrungrad International Hospital"
//                 effect="blur"
//               />
//               <div className="p-2.5">
//                 <p className="font-semibold text-blue md:text-xl">{p?.title}</p>
//                 <p>{p?.description.slice(0, 160)}</p>
//               </div>
//               <Link
//                 href={`/package-details/${p?.slug}`}
//                 className="group bg-blue text-white p-2.5 w-full flex justify-center gap-2 rounded-bl rounded-br"
//                 target="_blank"
//               >
//                 <RemoveRedEyeIcon />
//                 <span className="capitalize">See Packages</span>
//               </Link>
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// }
