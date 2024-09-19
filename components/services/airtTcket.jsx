"use client";

import React, { useState } from "react";
import { MenuItem, Select, TextField } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { countries } from "@/public/data/country";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { sendEmails } from "@/helpers/mail/sendMail";
import { mailBody } from "@/helpers/mail/mailbody";
import { admin_mails } from "@/constant";
import useAuth from "@/helpers/hooks/useAuth";
import { uploadToImgbb } from "@/helpers/fileUpload";

const AirtTcket = () => {
    const {auth} = useAuth()
    // console.log("🚀 ~ AirtTcket ~ auth:", auth)
    const [loader, setLoader] = useState();
    //Input field states
    const [flydate, setFlydate] = useState("");
    const [returndate, setReturndate] = useState("");
    const [passport, setPassport] = useState("");
    const [country, setCountry] = useState("");
    const [destination, setDestination] = useState("");
    const router = useRouter();
    const [formDatas, setFormDatas] = useState(null);

    const handleAirTicket = async (event) => {
        event.preventDefault();

        const formData = new FormData();

        const fields = {
            booking_date: flydate,
            return_date: returndate,
            doc: passport,
            country: country,
            destination: destination,
        };
        console.log("🚀 ~ handleAirTicket ~ fields.doc:", fields.doc)

        // Optional: Log formData for debugging purposes
        Object.entries(fields).forEach(([key, value]) => {
            formData.append(key, value);
            setFormDatas((prev) => ({ ...prev, [key]: value }));
        });

        try {
          setLoader(true);
            const response = await fetch(
                "https://api.discoverinternationalmedicalservice.com/api/add/air/ticket",
                {
                    method: "POST",
                    body: formData,
                },
            );
            setLoader(false);

            const data = await response.json();
            setLoader(false);

            if (response.ok && data.status === 200) {
                toast.success(
                    "Air Ticket request sent! Our support team will contact you soon.",
                    {
                        duration: 4000,
                        style: {
                            padding: "20px",
                            color: "green",
                        },
                    },
                );
                setLoader(true);
                // const docImage = await uploadToImgbb(formDatas.doc);
                
                const sendMail = await sendEmails(
                    admin_mails,
                   `Air Ticket - ${formDatas.email}`,
                    mailBody({...formDatas}),
                );
                const sendMail2 = await sendEmails(
                  auth?.email,
                  `Air Ticket`,
                  mailBody({...formDatas}),
                )

                setLoader(false);
                if (sendMail?.messageId && sendMail2?.messageId) {
                    toast.success("Mail has been sent", {
                        position: "top-center",
                        style: {
                            padding: "20px",
                            border: "1px solid #ccc",
                            color: "green",
                        },
                        duration: 3000,
                        icon: "👌👌",
                    });
                    setTimeout(() => {
                        router.refresh(); // Optional: refresh to ensure the latest state
                        window.location.reload(); // Reload page after successful submission
                    }, 1500);
                }
            } else {
               toast.error("Submission failed");
            }
        } catch (error) {
            setLoader(false);
            console.error("Error submitting air ticket:", error);
            toast.error(
                error.message || "An error occurred. Please try again.",
            );
        }

        // Reset the form after submission
        event.target.reset();
    };

    return (
        <div className='w-full overflow-auto'>
            <form
                onSubmit={handleAirTicket}
                className='mb-2 md:w-full max-w-screen-lg sm:w-96'
            >
                <div className='mb-2 flex flex-col gap-3'>
                    <div>
                        <label htmlFor=''>
                            <p className='mb-1.5 font-semibold text-sm'>
                                Enter Your Fly Date
                            </p>
                        </label>
                        <TextField
                            type='date'
                            onChange={(e) => setFlydate(e.target.value)}
                            fullWidth
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor=''>
                            <p className='mb-1.5 font-semibold text-sm'>
                                Enter Your Return Date
                            </p>
                        </label>
                        <TextField
                            type='date'
                            onChange={(e) => setReturndate(e.target.value)}
                            fullWidth
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor=''>
                            <p className='mb-1.5 font-semibold text-sm'>
                                Passport Copy
                            </p>
                        </label>
                        <TextField
                            type='file'
                            onChange={(e) => setPassport(e.target.files[0])}
                            fullWidth
                            required
                        />
                    </div>
                    <div>
                        <p className='mb-1.5 font-semibold text-sm'>
                            From Country
                        </p>
                        <Select
                            id='filled-select-currency-native 2'
                            select
                            fullWidth
                            onChange={(e) => setCountry(e.target.value)}
                            required
                        >
                            {countries.map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </Select>
                    </div>

                    <div>
                        <p className='mb-1.5 font-semibold text-sm'>
                            To Country
                        </p>
                        <Select
                            id='filled-select-currency-native'
                            select
                            fullWidth
                            onChange={(e) => setDestination(e.target.value)}
                        >
                            {countries.map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </Select>
                    </div>

                    <div>
                        <button
                            type='submit'
                            className='bg-blue text-white px-3 py-1 rounded float-left mt-3'
                        >
                            {loader ? "Loading..." : "Submit"}
                        </button>
                    </div>
                </div>

                <div className='mt-5 flex flex-col items-center max-sm:text-[12px] '>
                    <p className='font-semibold text-blue text-center'>
                        If you need Hotel Accomodation please contact us via
                        WhatsApp
                    </p>
                    <a
                        href='http://wa.me/+8801847284867'
                        target='_blank'
                        rel='noopener noreferrer'
                        alt='whatsApp'
                    >
                        <div className='flex items-center p-2.5 shadow w-fit justify-center gap-2 mt-2'>
                            <WhatsAppIcon className='text-green' />
                            <p className='font-semibold'>Click Here</p>
                        </div>
                    </a>
                </div>
            </form>
        </div>
    );
};

export default AirtTcket;
