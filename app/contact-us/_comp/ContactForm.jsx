'use client'

import React, { useRef } from 'react'
// import emailjs from '@emailjs/browser'
import contactAnim from '@/public/assets/anim/contact.json'
import Lottie from 'lottie-react'
import { TextField } from '@mui/material'


export default function ContactForm() {
  const style = {
    height: 400,
  }
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
    <div>
      
      <h1 className='capitalize text-xl md:text-2xl lg:text-3xl font-bold text-blue'>
        Contact Us
      </h1>
      <div className='my-10 md:flex gap-8 items-center'>
        <form
          ref={form}
          onSubmit={sendEmail}
          className='flex flex-col gap-4 md:w-1/2 shadow p-5 rounded'
        >
          <TextField
            label='Enter Name'
            variant='outlined'
            name='user_name'
            required
          />
          <TextField
            label='Enter Email'
            variant='outlined'
            name='user_email'
            required
          />
          <TextField
            label='Enter Message'
            variant='outlined'
            multiline
            required
            name='message'
            rows={5}
          />
          <button
            className='hover:bg-blue px-4 py-2 text-blue hover:text-white border border-blue font-semibold rounded duration-300 ease-linear'
            type='submit'
          >
            Send
          </button>
        </form>
        <div className=' md:w-1/2'>
          <Lottie animationData={contactAnim} loop={true} style={style} />
        </div>
      </div>
    </div>
  )
}
