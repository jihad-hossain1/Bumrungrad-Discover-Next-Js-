'use client'

import React, { useEffect, useState } from 'react'
import { TextField, FormControl, MenuItem, Select } from '@mui/material'
import { useRouter } from 'next/navigation'
import useAuth from '@/helpers/hooks/useAuth'
import AuthRoute from '@/helpers/context/AuthRoute'
import { mailBody, sendEmails } from '@/helpers/mail/sendMail'
import { admin_mails } from '@/constant'
import toast from 'react-hot-toast'


export default function CheckUp() {
  // const auth = JSON.parse(localStorage.getItem('User_Details'))
  const {auth} = useAuth();
  const navigate = useRouter()
  const [loader, setLoader] = useState(false)

  const [stepper1, setStepper1] = useState(true)
  const [stepper2, setStepper2] = useState(false)

  //data of Field...
  const [packages, setPackages] = useState([])
  const [selectDepartment, setSelectDepartment] = useState([])
  const [doctors, setDoctors] = useState([])
  const [healtePackage, SetHealtePackage] = useState('')
  const [prefferdDoctor, SetprefferdDoctor] = useState('')
  const [specialty, setspeacility] = useState('')
  const [appoinMentDate, SetAppoinMentDate] = useState('')
  const [appoinMentTime, SetAppoinMentTime] = useState('')
  const [medicalConcern, SetMedicalConcern] = useState('')
  const [HnNumber, SetHnNumber] = useState('')
  const [patientName, SetPatientName] = useState(
    auth?.firstName
      ? `${auth?.firstName} ${auth?.lastName}`
      : ''
  )
  const [gender, setGender] = useState(
    auth?.gender ? auth?.gender : ''
  )
  const [dob, setDOB] = useState(auth?.dob ? auth?.dob : '')
  const [email, setEmail] = useState(
    auth?.email ? auth?.email : ''
  )
  const [phone, setPhone] = useState(
    auth?.phone ? auth?.phone : ''
  )
  const [nationality, setNationality] = useState(
    auth?.citizenship ? auth?.citizenship : ''
  )
  const [formDatas,setFormDatas] = useState(null)

  //get packages
  useEffect(() => {
    fetch('https://api.discoverinternationalmedicalservice.com/api/get/sub/package')
      .then((res) => res.json())
      .then((data) => setPackages(data?.data))
  }, [])

  //get speacilities
  useEffect(() => {
    fetch('https://api.discoverinternationalmedicalservice.com/api/get/specialty')
      .then((res) => res.json())
      .then((data) => setSelectDepartment(data?.response?.data))
  }, [])
  const handleChange = (event) => {
    setspeacility(event.target.value)
  }
  const handleChangeDoctor = (event) => {
    SetprefferdDoctor(event.target.value)
  }
  const handleChangePackage = (event) => {
    SetHealtePackage(event.target.value)
  }

  // get doctors name
  useEffect(() => {
    // setLoader(true);
    // Create a function to fetch data based on the URL
    const fetchData = () => {
      // Create a query string based on your query states
      const queryParams = `specialty=${specialty}`
      // Create the base URL
      const baseUrl = 'https://api.discoverinternationalmedicalservice.com/api/search/doctor'
      // Create the final URL by appending the query string if it's not empty
      const finalUrl = queryParams ? `${baseUrl}?${queryParams}` : baseUrl
      // Fetch data from the API
      fetch(finalUrl)
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 200) {
            setDoctors(data.data)
          } else {
            setDoctors([])
          }
        })
        .catch((error) => console.error(error))
    }
    // Call the fetchData function whenever any state changes
    fetchData()
  }, [specialty])

  const handleClick = () => {
    setStepper1(false)
    setStepper2(true)
  }
  const handleClickprevious = () => {
    setStepper1(true)
    setStepper2(false)
  }
const handaleDataSubmit = async () => {
  try {
    setLoader(true);

    const formData = new FormData();

    // Define form fields in an object
    const fields = {
      healtePackage,
      specialty,
      prefferdDoctor,
      appoinMentDate,
      appoinMentTime,
      medicalConcern,
      HnNumber,
      patientName,
      gender,
      email,
      phone,
      nationality
    };

    // Append all fields to FormData
    Object.entries(fields).forEach(([key, value]) => {
      formData.append(key, value)
      setFormDatas((prev) => ({ ...prev, [key]: value }));
    });

    // Send POST request
    const response = await fetch('https://api.discoverinternationalmedicalservice.com/api/add/health/check_up', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.status === 200) {
      window.alert('Check Up Request Placed');
      const mailResponse = await sendEmails(admin_mails, 'Check Up Request Placed', mailBody(formDatas));
      console.log("🚀 ~ handaleDataSubmit ~ mailResponse:", mailResponse)
      toast.success("Check Up Request Placed", {
        duration: 4000,
        style: {
          padding: '20px',
          color: 'green',
        }
      });
      // navigate('/');
    } else {
      throw new Error('Failed to submit data');
    }
  } catch (error) {
    console.error("Error submitting check up request:", error);
  } finally {
    setLoader(false);
  }
};

  return (
   <AuthRoute>
     <div className='px-5 py-3  md:container md:mx-auto'>
      <h1 className='text-center capitalize text-xl md:text-2xl lg:text-3xl font-bold text-blue mt-8'>
        Health Screening Appointment
      </h1>
      <div className='mx-auto my-10  lg:w-1/2'>
        <div className='flex justify-center mx-10 items-center'>
          <button
            className={`px-4 py-2 shadow rounded-full border border-blue font-semibold text-xl ${
              stepper1 ? 'bg-blue text-white' : 'bg-cream'
            }`}
          >
            1
          </button>
          <div
            className={`h-1 rounded mx-5 w-full ${
              stepper2 ? 'bg-blue' : 'bg-cream'
            }`}
          ></div>
          <button
            className={`px-4 py-2 shadow rounded-full border border-blue font-semibold text-xl ${
              stepper2 ? 'bg-blue text-white' : 'bg-cream'
            }`}
          >
            2
          </button>
        </div>
        {stepper1 && (
          <div className='mt-10'>
            <div>
              <p className='mb-2.5 font-semibold'>Preferred Health Packages*</p>
              <FormControl fullWidth>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={healtePackage}
                  onChange={handleChangePackage}
                >
                  {packages?.map((s, i) => (
                    <MenuItem key={i} value={s?.title}>
                      {s?.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className='mt-2.5 font-semibold'>
              <p className='mb-2.5 font-semibold'> Select Speciality</p>
              <FormControl fullWidth>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={specialty}
                  onChange={handleChange}
                >
                  {selectDepartment?.map((s, i) => (
                    <MenuItem key={i} value={s?.name}>
                      {s?.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            <div className='mt-2.5 font-semibold'>
              <p className='mb-2.5'>Preferred Doctor</p>
              <FormControl fullWidth>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={prefferdDoctor}
                  onChange={handleChangeDoctor}
                >
                  {doctors?.map((s, i) => (
                    <MenuItem key={i} value={s?.name}>
                      {s?.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className='mt-2.5 font-semibold'>
              <p className='mb-2.5'>Preferred Appointment Date*</p>
              <TextField
                type='date'
                defaultValue={appoinMentDate}
                required
                fullWidth
                onChange={(e) => SetAppoinMentDate(e.target.value)}
              />
            </div>
            <div className='mt-2.5 font-semibold'>
              <p className='mb-2.5'>Preferred Appointment Time*</p>
              <TextField
                type='time'
                defaultValue={appoinMentTime}
                required
                fullWidth
                onChange={(e) => SetAppoinMentTime(e.target.value)}
              />
            </div>
            <div className='mt-2.5 font-semibold'>
              <p className='mb-2.5'>State Your Medical Concern or Request</p>
              <TextField
                type='text'
                placeholder='Enter Request'
                fullWidth
                defaultValue={medicalConcern}
                onChange={(e) => SetMedicalConcern(e.target.value)}
              />
            </div>
            <div className='mt-2.5 font-semibold'>
              <p className='mb-2.5'>Hospital Number (if available)</p>
              <TextField
                type='text'
                placeholder='Enter HN Number'
                fullWidth
                defaultValue={HnNumber}
                onChange={(e) => SetHnNumber(e.target.value)}
              />
            </div>
            <div>
              <div className='flex justify-center'>
                <button
                  className={`mt-5 px-4 py-2 rounded font-semibold bg-transparent border border-blue ${
                    appoinMentDate === '' || appoinMentTime === '' || healtePackage === ''
                      ? 'bg-cream text-blue'
                      : 'bg-blue text-white '
                  }`}
                  disabled={appoinMentDate === '' || appoinMentTime === '' || healtePackage === ''}
                  onClick={handleClick}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
        {stepper2 && (
          <div className='mt-10'>
            <div>
              <p className='mb-2.5 font-semibold'>Patient Name*</p>
              <TextField
                type='text'
                placeholder='Enter Name'
                required
                fullWidth
                defaultValue={patientName}
                onChange={(e) => SetPatientName(e.target.value)}
              />
            </div>
            <div className='mt-2.5 font-semibold'>
              <FormControl fullWidth>
                <p className='mb-2.5'>Gender*</p>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={gender}
                  required
                  defaultValue={gender}
                  placeholder='Select Gender'
                  onChange={(e) => setGender(e.target.value)}
                >
                  <MenuItem value='Male'>Male</MenuItem>
                  <MenuItem value='Female'>Female</MenuItem>
                  <MenuItem value='Other'>Other</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className='mt-2.5 font-semibold'>
              <p className='mb-2.5'>Date Of Birth*</p>
              <TextField
                type='date'
                required
                fullWidth
                defaultValue={dob}
                onChange={(e) => setDOB(e.target.value)}
              />
            </div>
            <div className='mt-2.5 font-semibold'>
              <p className='mb-2.5'>Email*</p>
              <TextField
                type='email'
                placeholder='Enter Email'
                required
                fullWidth
                defaultValue={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='mt-2.5 font-semibold'>
              <p className='mb-2.5'>Phone*</p>
              <TextField
                type='text'
                placeholder='Enter Phone Number'
                required
                fullWidth
                defaultValue={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className='mt-2.5 font-semibold'>
              <p className='mb-2.5'>National Origin*</p>
              <TextField
                type='text'
                placeholder='Enter Nationality'
                required
                fullWidth
                defaultValue={nationality}
                onChange={(e) => setNationality(e.target.value)}
              />
            </div>
            <div>
              <div className='flex justify-center'>
                <button
                  className={`mt-5 px-4 py-2 rounded font-semibold bg-blue border border-blue ${
                    stepper2 ? 'bg-blue text-white ' : 'bg-cream text-blue'
                  } `}
                  onClick={handleClickprevious}
                >
                  Previous
                </button>

                <button
                  onClick={handaleDataSubmit}
                  className={`mt-5 px-4 py-2 ml-10 bg-transparent border border-blue text-white rounded  hover:bg-white hover:text-blue font-semibold duration-300 ease-linear ${
                    patientName === '' ||
                    gender === '' ||
                    email === '' ||
                    phone === '' ||
                    nationality === ''
                      ? 'bg-cream text-blue'
                      : 'bg-blue text-white '
                  }`}
                  disabled={
                    patientName === '' ||
                    gender === '' ||
                    email === '' ||
                    phone === '' ||
                    nationality === ''
                  }
                >
                  {loader ? 'Loading...' : 'Submit'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
   </AuthRoute>
  )
}
