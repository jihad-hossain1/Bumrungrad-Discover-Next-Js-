'use client'

import * as React from 'react'

function Icon({ id, open }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={2}
      stroke='#ffffff'
      className={`${
        id === open ? 'rotate-180' : ''
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M19.5 8.25l-7.5 7.5-7.5-7.5'
      />
    </svg>
  )
}

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react'
import Image from 'next/image'
export const OneGoodVibes = (props) => {
  const { question, datas, i } = props.questionans

  const [open, setOpen] = React.useState(0)
  const handleOpen = (value) => setOpen(open === value ? 0 : value)
  return (
    <div className='mt-[1px]'>
      <>
        <Accordion open={open === i} icon={<Icon id={i} open={open} />}>
          <div>
            {' '}
            <AccordionHeader
              className='bg-blue p-3'
              onClick={() => handleOpen(i)}
            >
              <p className='text-white text-sm'>{question}</p>
            </AccordionHeader>
          </div>

          <AccordionBody>
            {datas?.map((data, i) => (
              <div key={i}>
                <div className='flex justify-evenly items-center h-[150px]'>
                  <div className=''>
                    <p className='text-blue font-semibold text-sm'>
                      {data?.ans}
                    </p>
                  </div>
                  <div className=''>
                    <Image
                      height={200}
                      width={200}
                      src={data?.img}
                      alt='Bumrungrad International Hospital'
                      className='h-[120px]'
                    />
                  </div>
                </div>

                <hr className='w-[1000px] mx-auto' />
              </div>
            ))}
          </AccordionBody>
        </Accordion>
      </>
    </div>
  )
}
