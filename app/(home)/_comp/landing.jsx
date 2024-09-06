"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";

const Landing = () => {
    return (
        <section className='bg-cream relative'>
            <div className='flex flex-col-reverse md:flex-row py-20 px-5 justify-center items-center md:container md:mx-auto relative'>
                <div className='md:w-1/2'>
                    <h1 className='text-4xl text-center md:text-left md:text-6xl lg:text-8xl font-extrabold text-blue'>
                        Asia&apos;s Favourite Medical <br />
                        <span>
                            <Typewriter
                                words={[
                                    "Destination",
                                    "Hub",
                                    "Hotspot",
                                    "Retreat",
                                ]}
                                loop={0}
                                cursor
                                cursorStyle='_'
                                typeSpeed={100}
                                deleteSpeed={100}
                                delaySpeed={2000}
                            />
                        </span>
                    </h1>
                </div>
                <div className='md:w-1/2'>
                    <Image
                        height={300}
                        width={1000}
                        src='https://i.ibb.co/v1jKX0V/Bumrungrad-hospital-Hero.png'
                        effect='blur'
                        alt='Bumrungrad International Hospital'
                    />
                </div>
            </div>
        </section>
    );
};

export default Landing;
