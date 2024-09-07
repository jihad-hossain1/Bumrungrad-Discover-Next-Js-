'use client'

import {
  Divider,
  FormControl,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import React, { useState } from 'react'
import { countries } from '@/public/data/country'
import { MuiTelInput } from 'mui-tel-input'
import Link from 'next/link'
import { AiFillEye } from 'react-icons/ai'
import { useRouter } from 'next/navigation'

export default function Register() {
  const router = useRouter()

  const [formData, setFormData] = useState({
    firstname: '',
    lastName: '',
    dob: '',
    pataientEmail: '',
    phone: '',
    gender: '',
    citizenship: '',
    country: '',
    password: '',
    confirmPassword: '',
  })

  const [yes, setYes] = useState(true)
  const [loader, setLoader] = useState(false)
  const [error, setError] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [isVisible1, setIsVisible1] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const toggleVisibility = () => setIsVisible(!isVisible)
  const toggleVisibility1 = () => setIsVisible1(!isVisible1)

  const handlePhone = (newPhone) => {
    setFormData((prev) => ({
      ...prev,
      phone: newPhone,
    }))
  }

  const validateForm = () => {
    const { password, confirmPassword } = formData
    if (password !== confirmPassword) {
      setError("Passwords don't match")
      return false
    }
    setError('')
    return true
  }

  const handleRegister = async () => {
    if (!validateForm()) return

    setLoader(true)
    const submitData = {
      ...formData,
      country: yes ? 'Thailand' : formData.country,
    }

    const formBody = new FormData()
    Object.keys(submitData).forEach((key) => {
      formBody.append(key, submitData[key])
    })

    try {
      const res = await fetch('https://api.discoverinternationalmedicalservice.com/api/register', {
        method: 'POST',
        body: formBody,
      })
      const data = await res.json()
      if (data.status === 200) {
        alert('Registration successful!')
        setLoader(false)
        router.push('/login')
      }
    } catch (error) {
      console.error(error)
      setLoader(false)
    }
  }

  return (
    <section className="md:p-10 my-5 md:my-10 md:container mx-5 md:mx-auto">
      <div className="p-5 md:p-10 shadow shadow-blue rounded-xl">
        <section>
          <h5 className="mb-4 text-xl md:text-3xl font-semibold text-blue">
            Register for premium health care services!
          </h5>
          <Divider />
          <div className="grid md:grid-cols-2 gap-4 mt-5 md:mt-10">
            <TextField
              name="firstname"
              label="First Name"
              fullWidth
              value={formData.firstname}
              onChange={handleChange}
              placeholder="Required"
            />
            <TextField
              name="lastName"
              label="Last Name"
              fullWidth
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Required"
            />
            <FormControl fullWidth>
              <Select
                name="citizenship"
                value={formData.citizenship}
                onChange={handleChange}
                displayEmpty
                label="Select Citizenship"
              >
                {countries.map((c, i) => (
                  <MenuItem key={i} value={c}>
                    {c}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <Select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                displayEmpty
                label="Select Gender"
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
            <TextField
              name="pataientEmail"
              type="email"
              label="Email"
              fullWidth
              value={formData.pataientEmail}
              onChange={handleChange}
              placeholder="Required"
            />
            <MuiTelInput
              defaultCountry="TH"
              value={formData.phone}
              onChange={handlePhone}
              fullWidth
            />
            <TextField
              name="dob"
              type="date"
              label="Date of Birth"
              fullWidth
              value={formData.dob}
              onChange={handleChange}
            />
          </div>
        </section>

        <section>
          <h5 className="mt-5">Are you in Thailand?</h5>
          <div className="flex gap-2 mt-2.5 mb-5">
            <button
              className={`px-5 py-2 rounded-xl ${yes && 'bg-blue text-white'}`}
              onClick={() => setYes(true)}
            >
              Yes
            </button>
            <button
              className={`px-5 py-2 rounded-xl ${!yes && 'bg-blue text-white'}`}
              onClick={() => setYes(false)}
            >
              No
            </button>
          </div>
          {!yes && (
            <FormControl fullWidth>
              <Select
                name="country"
                value={formData.country}
                onChange={handleChange}
                displayEmpty
                label="Select Country"
              >
                {countries.map((c, i) => (
                  <MenuItem key={i} value={c}>
                    {c}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        </section>

        <section className="md:grid md:grid-cols-2 gap-4">
          <div>
            <TextField
              name="password"
              type={isVisible ? 'text' : 'password'}
              label="Password"
              fullWidth
              onChange={handleChange}
            />
            <AiFillEye
              onClick={toggleVisibility}
              className="text-3xl text-blue absolute right-4 top-[13px] cursor-pointer"
            />
          </div>
          <div>
            <TextField
              name="confirmPassword"
              type={isVisible1 ? 'text' : 'password'}
              label="Confirm Password"
              fullWidth
              onChange={handleChange}
            />
            <AiFillEye
              onClick={toggleVisibility1}
              className="text-3xl text-blue absolute right-4 top-[13px] cursor-pointer"
            />
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </section>

        <div className="flex justify-center">
          <button
            className={`flex justify-center items-center gap-2 mt-5 px-4 py-2 rounded font-semibold bg-blue border ${
              Object.values(formData).some((field) => field === '') ? 'bg-white text-blue' : 'text-white'
            }`}
            disabled={Object.values(formData).some((field) => field === '')}
            onClick={handleRegister}
          >
            Register
            {loader && (
              <div className="flex gap-1">
                <div className="h-2 w-2 shadow bg-white rounded-full"></div>
                <div className="h-2 w-2 shadow bg-white rounded-full animate-bounce"></div>
              </div>
            )}
          </button>
        </div>
        <p className="mt-4 text-center">
          Already have an account?{' '}
          <Link href="/login" className="underline text-blue">
            Please Login
          </Link>
        </p>
      </div>
    </section>
  )
}



// 'use client'

// import {
//   Divider,
//   FormControl,
//   MenuItem,
//   Select,
//   TextField,
// } from '@mui/material'
// import React, { useState } from 'react'
// import { countries } from '@/public/data/country'
// import { MuiTelInput } from 'mui-tel-input'
// import Link from 'next/link'
// import { AiFillEye } from 'react-icons/ai'
// import { useRouter } from 'next/navigation'

// export default function Register() {
//   const navigate = useRouter()
//   //yes or no
//   const [yes, setYes] = useState(true)
//   const [loader, setLoader] = useState(false)
//   const [error, SetError] = useState('')

//   //user information
//   const [firstname, setfirstname] = React.useState('')
//   const [lastName, setLastName] = React.useState('')
//   const [dob, setDob] = React.useState('')
//   const [pataientEmail, setPataientEmail] = React.useState('')
//   const [phone, setPhone] = React.useState('')
//   const [gender, setGender] = React.useState('')
//   const [citizenship, setCitizenship] = React.useState('')
//   const [country, setCountry] = React.useState('')
//   const [password, setPassword] = React.useState('')
//   const [confirmPassword, setConfirmPassword] = React.useState('')
//   const [isVisible, setIsVisible] = useState(false)
//   const [isVisible1, setIsVisible1] = useState(false)

//   const toggleVisibility = () => {
//     setIsVisible(!isVisible)
//   }
//   const inputType = isVisible ? 'text' : 'password'

//   const toggleVisibility1 = () => {
//     setIsVisible1(!isVisible1)
//   }
//   const inputType1 = isVisible1 ? 'text' : 'password'

//   const handlePhone = (newPhone) => {
//     setPhone(newPhone)
//   }

//   const handaleRegister = () => {
//     setLoader(true)
//     if (password !== confirmPassword) {
//       SetError("Your Confirm Password Didn't Match")
//       setLoader(false)
//     } else {
//       const registerData = {
//         firstname,
//         lastName,
//         dob,
//         pataientEmail,
//         phone,
//         gender,
//         citizenship,
//         country,
//         password,
//         confirmPassword,
//       }
//       console.log(registerData)

//       const formData = new FormData()
//       formData.append('firstName', firstname)
//       formData.append('lastName', lastName)
//       formData.append('dob', dob)
//       formData.append('email', pataientEmail)
//       formData.append('phone', phone)
//       formData.append('gender', gender)
//       formData.append('citizenship', citizenship)
//       if (yes) {
//         formData.append('country', 'Thailand')
//       } else {
//         formData.append('country', country)
//       }
//       formData.append('password', password)
//       formData.append('confirmPassword', confirmPassword)

//       fetch('https://api.discoverinternationalmedicalservice.com/api/register', {
//         method: 'POST',
//         body: formData,
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           if (data.status === 200) {
//             console.log(data)
//             SetError('')
//             setLoader(false)
//             window.alert('Your Registration is Successfull')

//             navigate.push('/login')
//           }
//         })
//         .catch((error) => console.error(error))
//     }
//   }

//   return (
//     <section className='md:p-10 my-5 md:my-10 md:container mx-5 md:mx-auto'>
//       <div className='p-5 md:p-10 shadow shadow-blue rounded-xl'>
//         {/* first-card */}
//         <section className=''>
//           <h5 className='mb-4 text-xl md:text-3xl text-semibold font-semibold text-blue'>
//             Register for premium health care services!
//           </h5>
//           <Divider />
//           <div className='grid md:grid-cols-2 gap-4 mt-5 md:mt-10'>
//             <div>
//               <p className='mb-2.5'>Enter First Name</p>
//               <TextField
//                 onChange={(e) => setfirstname(e.target.value)}
//                 fullWidth
//                 placeholder='Required'
//               />
//             </div>
//             <div>
//               <div>
//                 <p className='mb-2.5'>Enter Last Name</p>
//                 <TextField
//                   onChange={(e) => setLastName(e.target.value)}
//                   fullWidth
//                   placeholder='Required'
//                 />
//               </div>
//             </div>

//             <FormControl fullWidth>
//               <p className='mb-2.5'>Select Citizenship(Required)</p>
//               <Select
//                 labelId='demo-simple-select-label'
//                 id='demo-simple-select'
//                 value={citizenship}
//                 onChange={(e) => setCitizenship(e.target.value)}
//               >
//                 {countries.map((c, i) => (
//                   <MenuItem key={i} value={c}>
//                     {c}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//             <FormControl fullWidth>
//               <p className='mb-2.5'>Select Gender(Required)</p>
//               <Select
//                 labelId='demo-simple-select-label'
//                 id='demo-simple-select'
//                 value={gender}
//                 onChange={(e) => setGender(e.target.value)}
//               >
//                 <MenuItem value='Male'>Male</MenuItem>
//                 <MenuItem value='Female'>Female</MenuItem>
//                 <MenuItem value='Other'>Other</MenuItem>
//               </Select>
//             </FormControl>
//             <div>
//               <p className='mb-2.5'>Enter Email(Required)</p>
//               <TextField
//                 fullWidth
//                 placeholder='Required'
//                 type='email'
//                 onChange={(e) => setPataientEmail(e.target.value)}
//               />
//             </div>
//             <div>
//               <p className='mb-2.5'>Enter Phone Number(Required)</p>
//               <MuiTelInput
//                 defaultCountry='TH'
//                 value={phone}
//                 onChange={handlePhone}
//                 fullWidth
//               />
//             </div>
//             <div>
//               <p className='mb-2.5'>Enter Date of Birth(Required)</p>
//               <TextField
//                 fullWidth
//                 type='date'
//                 onChange={(e) => setDob(e.target.value)}
//               />
//             </div>
//           </div>
//         </section>

//         {/* second card  */}
//         <section>
//           <h5 className='mt-5'>Are you in Thailand?</h5>
//           <div className='flex gap-2 mt-2.5 mb-5'>
//             <button
//               className={`px-5 py-2 rounded-xl ${
//                 yes === true && 'bg-blue text-white'
//               }`}
//               onClick={() => setYes(true)}
//             >
//               Yes
//             </button>
//             <button
//               className={`px-5 py-2 rounded-xl ${
//                 yes === false && 'bg-blue text-white'
//               }`}
//               onClick={() => {
//                 setYes(false)
//               }}
//             >
//               No
//             </button>
//           </div>
//           {yes === false && (
//             <FormControl fullWidth>
//               <p className='mb-2.5'>Select Country(Required)</p>
//               <Select
//                 labelId='demo-simple-select-label'
//                 id='demo-simple-select'
//                 value={country}
//                 className='mb-4'
//                 onChange={(e) => setCountry(e.target.value)}
//               >
//                 {countries.map((c, i) => (
//                   <MenuItem key={i} value={c}>
//                     {c}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//           )}
//         </section>

//         {/* password card  */}
//         <section className='md:grid md:grid-cols-2 gap-4'>
//           <div>
//             <p className='mb-2.5'>Enter Password</p>
//             <div className=' flex relative'>
//               <TextField
//                 type={inputType}
//                 fullWidth
//                 placeholder='Required'
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <button onClick={toggleVisibility}>
//                 <AiFillEye className='text-3xl text-blue !absolute right-4 top-[13px]' />
//               </button>
//             </div>
//           </div>
//           <div>
//             <p className='mt-3 md:mt-0 mb-2.5'>Confirm Password</p>
//             <div className='mt-3 md:mt-0  flex relative'>
//               <TextField
//                 type={inputType1}
//                 fullWidth
//                 placeholder='Required'
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//               />
//               <button onClick={toggleVisibility1}>
//                 <AiFillEye className='text-3xl text-blue !absolute right-4 top-[13px]' />
//               </button>
//             </div>
//           </div>

//           <div className='mt-2'>
//             <p className='text-red font-semibold'>{error}</p>
//           </div>
//         </section>
//         <div className='flex justify-center'>
//           <button
//             className={`flex justify-center items-center gap-2 mt-5 px-4 py-2 rounded font-semibold bg-blue border border-blue ${
//               firstname === '' ||
//               lastName === '' ||
//               citizenship === '' ||
//               gender === '' ||
//               pataientEmail === '' ||
//               phone === '' ||
//               dob === ''
//                 ? 'bg-white text-blue'
//                 : 'text-white'
//             }`}
//             disabled={
//               firstname === '' ||
//               lastName === '' ||
//               citizenship === '' ||
//               gender === '' ||
//               pataientEmail === '' ||
//               phone === '' ||
//               dob === ''
//             }
//             onClick={handaleRegister}
//           >
//             Register
//             {loader && (
//               <div className='flex gap-1'>
//                 <div className='h-2 w-2 shadow bg-white rounded-full'></div>
//                 <div className='h-2 w-2 shadow bg-white rounded-full animate-bounce'></div>
//               </div>
//             )}
//           </button>
//         </div>
//         <p className='mt-4 text-center'>
//           Already have an account?{' '}
//           <Link href={'/login'} className='underline text-blue'>
//             Please Login
//           </Link>{' '}
//         </p>
//       </div>
//     </section>
//   )
// }
