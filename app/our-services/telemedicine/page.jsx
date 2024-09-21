'use client'

import React, { useState } from 'react'
import { Divider, TextField } from '@mui/material'
import useAuth from '@/helpers/hooks/useAuth'
import { useRouter } from 'next/navigation'
import AuthRoute from '@/helpers/context/AuthRoute'
import toast from 'react-hot-toast'
import { sendEmails } from '@/helpers/mail/sendMail'
import { admin_mails } from '@/constant'
import { mailBody } from '@/helpers/mail/mailbody'
import Loader from '@/components/ui/loader'



const TeleMedicine = () => {
  const {auth} = useAuth()
  const userDetails = auth;

  //loader
  const [loader, setLoader] = useState()
  const navigate = useRouter()

  const [fullName, setFullName] = useState(
    userDetails?.firstName
      ? `${userDetails?.firstName} ${userDetails?.lastName}`
      : ''
  )
  const [hnNum, setHnNum] = useState('')
  const [birthDate, setBirthDate] = useState(
    userDetails?.dob ? userDetails?.dob : ''
  )
  const [passportId, setPassportId] = useState('')
  const [nationality, setNationality] = useState('')
  const [residence, setResidence] = useState(
    userDetails?.citizenship ? userDetails?.citizenship : ''
  )
  const [preferredDate, setPreferredDate] = useState('')
  const [preferredDoctor, setPreferredDoctor] = useState('')
  const [purposeAppoinment, setPurposeAppoinment] = useState('')
  const [investigationDocument, setInvestigationDocument] = useState('')
  const [contactDetails, setContactDetails] = useState(
    userDetails?.phone ? userDetails?.phone : ''
  )
  const [paymentType, setPaymentType] = useState('')
  const [epaymentlink, setEpaymentlink] = useState('')
  const [interpreter, setInterpreter] = useState('')
  const [specificConcern, setSpecificConcern] = useState('')
  const [formDatas, setFormDatas]  = useState(null);


  const handaleAddteleMedicine = async (event) => {
    event.preventDefault()
    const form = event.target
    const formData = new FormData()
    const fields = {
      fullName,
      hnNum,
      birthDate,
      passportId,
      nationality,
      residence,
      preferredDate,
      preferredDoctor,
      purposeAppoinment,
      investigationDocument,
      contactDetails,
      paymentType,
      epaymentlink,
      interpreter,
      specificConcern
    }

    Object.entries(fields).forEach(([key, value]) => {
      formData.append(key, value)
      setFormDatas((prev) => ({ ...prev, [key]: value }));
    })

        setLoader(true)
  const response = await  fetch('https://api.discoverinternationalmedicalservice.com/api/add/tele/medicine', {
      method: 'POST',
      body: formData,
    })
    setLoader(false)


    const jsonresponse = await response.json()


    if (jsonresponse.status === 200) {
      setLoader(false)
      toast.success(
        'Tele Medicine request sent! Our support team will contact you soon.'
      )
      
      setLoader(true);
      const send_mail_on_admin = await sendEmails(admin_mails,`Tele Medicine`, mailBody({...formDatas,investigationDocument: "Image link are not found"}))
      setLoader(false)

      if(send_mail_on_admin.messageId){
        toast.success("Email sent successfully")
      }else{
        toast.error("Something went wrong, mail not send")
      }

      form.reset()
      navigate.push('/')
    }else{
      toast.error("Something went wrong")
      setLoader(false)
    }
  }

  return (
    <>
      <section className='md:container lg:w-1/2 md:mx-auto md:my-20 shadow-xl rounded-xl'>
      
      <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold text-blue my-5 text-center'>
        Tele Medicine
      </h1>
      <form
        onSubmit={handaleAddteleMedicine}
        className='px-5 md:px-10 lg:px-16 pb-24'
      >
        <h2 className='font-semibold mb-2.5 text-blue'>*Patient Details</h2>
        <Divider />
        <div className='mt-2.5'>
          <p className='mb-2 font-semibold text-sm'>Enter Full Name</p>
          <TextField
            type='text'
            value={fullName}
            placeholder='Same As In Passport'
            onChange={(e) => setFullName(e.target.value)}
            fullWidth
            required
          />
        </div>
        <div className='mt-3'>
          <p className='mb-2 font-semibold text-sm'>Hospital No.(HN)</p>
          <TextField
            placeholder='Old Patient'
            onChange={(e) => setHnNum(e.target.value)}
            fullWidth
          />
        </div>
        <div className='mt-3'>
          <p className='mb-2 font-semibold text-sm'>Date of Birth</p>
          <TextField
            type='date'
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            fullWidth
            required
          />
        </div>
        <div className='mt-3'>
          <p className='mb-2 font-semibold text-sm'>Passport / Id No</p>
          <TextField
            type=''
            placeholder='Enter Passport Number'
            onChange={(e) => setPassportId(e.target.value)}
            fullWidth
            required
          />
        </div>
        <div className='mt-3'>
          <p className='mb-2 font-semibold text-sm'>Nationality</p>
          <TextField
            placeholder='Enter Your Nationality'
            onChange={(e) => setNationality(e.target.value)}
            fullWidth
            required
          />
        </div>
        <div className='mt-3'>
          <p className='mb-2 font-semibold text-sm'>Country of Residence</p>
          <TextField
            placeholder='Enter Your Residence'
            onChange={(e) => setResidence(e.target.value)}
            fullWidth
            required
            value={residence}
          />
        </div>
        <div className='mt-3'>
          <p className='mb-2 font-semibold text-sm'>
            Contact Details of Patient
          </p>
          <TextField
            placeholder='Mobile Number / Email Address'
            onChange={(e) => setContactDetails(e.target.value)}
            fullWidth
            required
            value={contactDetails}
          />
        </div>
        <h1 className='uppercase font-semibold text-blue mt-5 mb-2.5 md:mt-10'>
          *appointment details
        </h1>
        <Divider />
        <div className='mt-3'>
          <p className='mb-2 font-semibold text-sm'>
            Preferred Appoinment Date
          </p>
          <TextField
            type='date'
            onChange={(e) => setPreferredDate(e.target.value)}
            fullWidth
            required
          />
        </div>
        <div className='mt-3'>
          <p className='mb-2 font-semibold text-sm mt-3'>Preferred Doctor</p>
          <TextField
            placeholder='Doctor Name'
            onChange={(e) => setPreferredDoctor(e.target.value)}
            fullWidth
          />
        </div>
        <div className='mt-3'>
          <p className='mb-2 font-semibold text-sm mt-3'>
            Purpose of Appoinment
          </p>
          <TextField
            placeholder='Chief Complaint'
            onChange={(e) => setPurposeAppoinment(e.target.value)}
            fullWidth
            required
          />
        </div>
        <div className='mt-3'>
          <p className='mb-2 font-semibold text-sm mt-3'>
            {' '}
            Availlable Investigation Document
          </p>
          <TextField
            type='file'
            onChange={(e) => setInvestigationDocument(e.target.files[0])}
            fullWidth
          />
        </div>
        <div className='mt-3'>
          <p className='mb-2 font-semibold text-sm mt-3'>
            Request for Interpreter
          </p>
          <TextField
            placeholder='Specify The Language'
            onChange={(e) => setInterpreter(e.target.value)}
            fullWidth
          />
        </div>
        <div className='mt-3'>
          <p className='mb-2 font-semibold text-sm mt-3'>Payment Type</p>
          <TextField
            placeholder='E-Payment / Credit card / Bank transfer'
            onChange={(e) => setPaymentType(e.target.value)}
            fullWidth
            required
          />
        </div>
        <div className='mt-3'>
          <p className='mb-2 font-semibold text-sm mt-3'>
            Email for E-payment Link
          </p>
          <TextField
            type='email'
            placeholder='Enter Email'
            onChange={(e) => setEpaymentlink(e.target.value)}
            fullWidth
          />
        </div>
        <div className='mt-3'>
          <p className='mb-2 font-semibold text-sm mt-3'>Specific Concern</p>
          <TextField
            placeholder='Interest'
            onChange={(e) => setSpecificConcern(e.target.value)}
            fullWidth
          />
        </div>
        <button
          type='submit'
          className='bg-blue mt-6 text-white px-6 py-2 md:px-12 md:py-4 rounded flex items-center gap-1'
        >
         {
           loader ? <Loader className="animate-spin" stroke="white" fill="white" />  : "Submit"
         }
        </button>
      </form>
    </section>
    </>
  )
}

export default TeleMedicine
