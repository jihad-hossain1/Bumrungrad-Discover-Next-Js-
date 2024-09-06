'use client'

import { Divider, TextField } from '@mui/material'
import React, { useState } from 'react'
import Link from 'next/link'
import loginimg from '@/public/assets/login image.png'
import { AiFillEye } from 'react-icons/ai'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function Login() {
  const navigate = useRouter()
  const [loader, setLoader] = useState()
  //const [error, SetError] = useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }
  const inputType = isVisible ? 'text' : 'password'

  const handaleLogin = () => {
    setLoader(true)
    const formData = new FormData()
    formData.append('email', email)
    formData.append('password', password)

    fetch('https://api.discoverinternationalmedicalservice.com/api/login', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setLoader(false)
          console.log(data)
          localStorage.setItem('Access_Token', data?.msg?.token)
          localStorage.setItem(
            'User_Details',
            JSON.stringify(data?.msg?.user_details)
          )

          navigate.push('/')
        } else {
          console.log(data)
          alert("Credential didn't match with our record!")
          setLoader(false)
        }
      })
      .catch((error) => console.error(error))
  }

  return (
    <section className='mx-5 md:container md:mx-auto flex items-center'>
      <div className='hidden md:block md:w-1/2'>
        <Image height={300} width={1000} src={loginimg} alt='' />
      </div>
      <div className='p-5 md:p-10 md:w-1/2 my-5 md:my-10 mx-5 md:container md:mx-auto shadow shadow-blue rounded-xl relative'>
        <h5 className='text-xl md:text-3xl font-semibold text-blue mb-4'>
          Hello Dear!
        </h5>
        <Divider />
        <div className='mt-4'>
          <TextField
            fullWidth
            label='Enter Email'
            placeholder='Required'
            onChange={(e) => setEmail(e.target.value)}
            type='email'
          />
        </div>
        <div className='mt-5 flex relative'>
          <TextField
            fullWidth
            label='Enter Password'
            placeholder='Required'
            onChange={(e) => setPassword(e.target.value)}
            type={inputType}
          />
          <button onClick={toggleVisibility}>
            <AiFillEye className='text-3xl text-blue !absolute right-4 top-[13px]' />
          </button>
        </div>
        <div className='mt-5'>
          <button
            className={`flex justify-center items-center gap-2 w-full lg:w-[200px] mt-5 px-4 py-2 rounded font-semibold bg-blue border border-blue ${
              email === '' || password === ''
                ? 'bg-white text-blue'
                : 'text-white'
            }`}
            disabled={email === '' || password === ''}
            onClick={handaleLogin}
          >
            Login{' '}
            {loader && (
              <div className='flex gap-1'>
                <div className='h-3 w-3 shadow bg-white rounded-full'></div>
                <div className='h-3 w-3 shadow bg-white rounded-full animate-bounce'></div>
              </div>
            )}
          </button>
        </div>
        <p className='mt-5'>
          New here?{' '}
          <Link href={'/register'} className='underline text-blue'>
            Please create an account
          </Link>{' '}
        </p>
      </div>
    </section>
  )
}
