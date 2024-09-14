'use client'

import React, { useState, useEffect } from 'react'
import { MuiTelInput } from 'mui-tel-input'
import { FormControl, MenuItem, Select, TextField } from '@mui/material'
import { natioNalities ,countries} from '@/public/data/country'
import { useRouter } from 'next/navigation'
// import { useNavigate } from 'react-router-dom'

const SendQuery = () => {
  const [loader, setLoader] = useState()
  const [inquery, setInquery] = useState('')
  const [doctorName, setDoctorName] = useState('')
  const [treatmentInterest, setTreatmentInterest] = useState('')
  const [question, setQuestion] = useState('')
  const [hospitalNumber, setHospitalNumber] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [birtDate, setDOB] = useState('')
  const [gender, setGender] = useState('')
  const [citizenship, setCitizenship] = useState('')
  const [country, setCountry] = useState('')

  //phoneNumberSelect
  const handleChange = (newValue) => {
    setPhoneNumber(newValue)
  }
  const navigate = useRouter()

  //  Query Submit
  const handaleQuerySubmit = (event) => {
    setLoader(true)
    event.preventDefault()
    const form = event.target
    const formData = new FormData()
    formData.append('inquery', inquery)
    formData.append('doctorName', doctorName)
    formData.append('treatmentInterest', treatmentInterest)
    // formData.append('bumRungradOffice', bumRungradOffice)
    formData.append('question', question)
    formData.append('hospitalNumber', hospitalNumber)
    formData.append('firstName', firstName)
    formData.append('lastName', lastName)
    formData.append('email', email)
    formData.append('phoneNumber', phoneNumber)
    formData.append('birtDate', birtDate)
    formData.append('gender', gender)
    formData.append('citizenship', citizenship)
    formData.append('country', country)

    fetch('https://api.discoverinternationalmedicalservice.com/api/add/question', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setLoader(false)
          navigate.push('/')
          alert(
            'Querey sent successfully. Our support team will contact you soon.'
          )
          form.reset()
        }
      })
      .catch((error) => console.error(error))
  }



  return (
    <section className='md:container md:mx-auto'>
      <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold text-blue my-5 text-center'>
        Left Us Your Query !
      </h1>
      <div className='md mb-14'>
        <div className='shadow-xl rounded-xl md:p-5'>
          <div className='p-4'>
            <form onSubmit={handaleQuerySubmit}>
              <div className='grid md:grid-cols-2 gap-2.5'>
                <div>
                  <p className='mb-2.5 font-semibold text-sm'>
                    Type of Inquiry*
                  </p>
                  <TextField
                    onChange={(e) => setInquery(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
                <div className=''>
                  <p className='mb-2.5 font-semibold text-sm'>
                    Enter The Doctor's Name or Surname*
                  </p>
                  <TextField
                    onChange={(e) => setDoctorName(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
                <div className=''>
                  <p className='mb-2.5 font-semibold text-sm'>
                    Condition or Treatment of Interest*
                  </p>
                  <TextField
                    onChange={(e) => setTreatmentInterest(e.target.value)}
                    fullWidth
                  />
                </div>
              </div>

              {/* <div className='mt-4'>
                <p className='mb-2.5 font-semibold text-sm'>
                  Country of Bumrungrad Office*
                </p>
                <TextField
                  onChange={(e) => setBumrungradOffice(e.target.value)}
                  fullWidth
                />
              </div> */}

              <div className='mt-4'>
                <p className='mb-2.5 font-semibold text-sm'>Your Question *</p>
                <TextField
                  onChange={(e) => setQuestion(e.target.value)}
                  fullWidth
                  multiline
                  rows={2}
                  required
                />
              </div>
              <div className='grid md:grid-cols-2 gap-2.5'>
                <div className='mt-4'>
                  <p className='mb-2.5 font-semibold text-sm'>
                    Hospital Number*
                  </p>
                  <TextField
                    onChange={(e) => setHospitalNumber(e.target.value)}
                    fullWidth
                    placeholder='Example : HN12345678'
                  />
                </div>
                <div className='mt-4'>
                  <p className='mb-2.5 font-semibold text-sm'>First Name*</p>
                  <TextField
                    onChange={(e) => setFirstName(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
                <div className='mt-4'>
                  <p className='mb-2.5 font-semibold text-sm'>Last Name*</p>
                  <TextField
                    onChange={(e) => setLastName(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
                <div className='mt-4'>
                  <p className='mb-2.5 font-semibold text-sm'>Email*</p>
                  <TextField
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    placeholder='Ex : example123@gmail.com'
                    required
                  />
                </div>
                <div className='mt-4'>
                  <p className='mb-2.5 font-semibold text-sm'>
                    Enter WhatsApp Number*
                  </p>
                  <MuiTelInput
                    value={phoneNumber}
                    onChange={handleChange}
                    defaultCountry='TH'
                    className='w-[100%]'
                  />
                </div>
              </div>
              <div className='mt-6 grid  md:grid-cols-2 gap-4'>
                <div>
                  <p className='mb-2.5 font-semibold text-sm'>Date of Birth*</p>
                  <TextField
                    onChange={(e) => setDOB(e.target.value)}
                    type='date'
                    fullWidth
                    placeholder='Please Enter the Date of Birth'
                  />
                </div>
                <div>
                  <FormControl fullWidth>
                    <p className='mb-2.5 font-semibold text-sm'>
                      Select Gender*
                    </p>
                    <Select
                      labelId='demo-simple-select-label'
                      id='demo-simple-select'
                      value={gender}
                      required
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <MenuItem value='Male'>Male</MenuItem>
                      <MenuItem value='Female'>Female</MenuItem>
                      <MenuItem value='Other'>Other</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div>
                  <FormControl fullWidth>
                    <p className='mb-2.5 font-semibold text-sm'>
                      Select Citizenship*
                    </p>
                    <Select
                      labelId='demo-simple-select-label'
                      id='demo-simple-select'
                      value={citizenship}
                      required
                      onChange={(e) => setCitizenship(e.target.value)}
                    >
                      {natioNalities.map((c, i) => (
                        <MenuItem key={i} value={c}>
                          {c}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <div>
                  <p className='mb-2.5 font-semibold text-sm'>
                    Country of Residence*
                  </p>
                  <TextField
                    id='filled-select-currency-native'
                    select
                    fullWidth
                    onChange={(e) => setCountry(e.target.value)}
                    required
                    SelectProps={{
                      native: true,
                    }}
                    helperText='Please select your country'
                  >
                    {countries.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </TextField>
                </div>
              </div>
              <div className='flex justify-center m-5'>
                <button
                  type='submit'
                  className='bg-blue text-white px-6 py-2 md:px-12 md:py-4 rounded flex items-center gap-1'
                  
                >
                  {' '}
                  Send Query
                  {loader && (
                    <div className='flex gap-0.5'>
                      <div className='h-2 w-2 rounded-full bg-white shadow'></div>
                      <div className='h-2 w-2 rounded-full bg-white shadow animate-bounce'></div>
                      <div className='h-2 w-2 rounded-full bg-white shadow'></div>
                    </div>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SendQuery
