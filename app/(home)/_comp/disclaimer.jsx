'use client';

import React from 'react'
import Marquee from 'react-fast-marquee'
const Disclaimer = () => {
  return (
    <div className='mt-5'>
      <>
        <Marquee speed={100} className='font-semibold text-blue'>
          We are the Official Information & Representative Office for
          Bumrungrad, helping to coordinate all medical treatments and check-ups
          for FREE.
        </Marquee>
      </>
    </div>
  )
}

export default Disclaimer
