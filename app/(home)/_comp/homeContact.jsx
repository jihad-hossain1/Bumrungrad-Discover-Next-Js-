'use client'

import React, { useRef } from 'react'
// import emailjs from '@emailjs/browser'
import img from '@/public/assets/Bumrungrad hospital.svg'
import { TextField } from '@mui/material'
import HealingIcon from '@mui/icons-material/Healing'
import Image from 'next/image'

export default function HomeContact() {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    // emailjs
    //   .sendForm(
    //     'service_pm53vin',
    //     'template_z8tqovt',
    //     form.current,
    //     'ycRGcqWUeQ5dMytN2'
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text)
    //       window.alert('Message sent successfully')
    //       e.target.reset()
    //     },
    //     (error) => {
    //       console.log(error.text)
    //     }
    //   )
  }
  return (
    <section className='md:p-10 my-5 md:container md:mx-auto flex flex-col-reverse justify-center items-center lg:flex-row lg:justify-between lg:items-center gap-16'>
      <div className='lg:w-1/2'>
        <Image
          className='w-full'
          height={500}
          width={500}
          src={img}
          effect='blur'
          alt='Bumrungrad International Hospital'
        />
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className='w-full flex flex-col gap-4 shadow-xl p-10 rounded lg:w-1/2 duration-300 ease-linear'
      >
        <HealingIcon className='!text-5xl text-blue' />
        <h2 className='capitalize text-xl md:text-2xl lg:text-3xl font-bold text-blue'>
          Say hello!
        </h2>
        <TextField
          label='Enter Name'
          name='user_name'
          variant='outlined'
          fullWidth
          required
        />
        <TextField
          label='Enter Email'
          type='email'
          name='user_email'
          variant='outlined'
          fullWidth
          required
        />
        <TextField
          label='Enter Message'
          variant='outlined'
          fullWidth
          multiline
          required
          rows={5}
          name='message'
        />
        <button
          className='hover:bg-blue px-4 py-2 text-blue hover:text-white border border-blue font-semibold rounded duration-300 ease-linear'
          type='submit'
        >
          Send
        </button>
      </form>
    </section>
  )
}
