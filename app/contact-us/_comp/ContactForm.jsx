"use client";

import React, { useRef, useState } from "react";
// import emailjs from '@emailjs/browser'
import contactAnim from "@/public/assets/anim/contact.json";
import Lottie from "lottie-react";
import { TextField } from "@mui/material";
import { sendEmails } from "@/helpers/mail/sendMail";
import toast from "react-hot-toast";

// const to = process.env.PUBLIC_ADMIN_EMAIL;
// console.log("🚀 ~ to:", to)

export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    // multiple recipients
    const recipients = ['demo3@gmail.com', 'demo1@gmail.com', 'demo2@gmail.com'];

    const sendEmail = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await sendEmails(
              recipients,
                `Contact Us - ${formData.email}`,
                formData.message,
            );

            setLoading(false);
            if (response.success == true) {
                toast.success("Email sent successfully", {
                    position: "top-center",
                    style: { padding: "16px", border: "1px solid #ccc" },
                    duration: 3000,
                    icon: "👌👌",
                });
                setFormData({
                    name: "",
                    email: "",
                    message: "",
                });
            }
            if (response.success == false) {
                toast.error("Something went wrong", {
                    position: "top-center",
                    style: { color: "red", padding: "16px" },
                    duration: 3000,
                    icon: "😱😱",
                });
            }
        } catch (error) {
            console.error(error);
        }
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
    };
    return (
        <div>
            <h1 className='capitalize text-xl md:text-2xl lg:text-3xl font-bold text-blue'>
                Contact Us
            </h1>
            <div className='my-10 md:flex gap-8 items-center'>
               
                <form
                    onSubmit={sendEmail}
                    className='flex flex-col gap-4 md:w-1/2 shadow p-5 rounded'
                >
                    <TextField
                        label='Enter Name'
                        variant='outlined'
                        name='user_name'
                        required
                        value={formData.name}
                        onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                        }
                    />
                    <TextField
                        type='email'
                        value={formData.email}
                        onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                        }
                        label='Enter Email'
                        variant='outlined'
                        name='user_email'
                        required
                    />
                    <TextField
                        value={formData.message}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                message: e.target.value,
                            })
                        }
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
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
                <div className=' md:w-1/2'>
                    <Lottie
                        animationData={contactAnim}
                        loop={true}
                        style={{ height: 400 }}
                    />
                </div>
            </div>
        </div>
    );
}
