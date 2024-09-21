"use client";

import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import { TbLoaderQuarter } from "react-icons/tb";
import toast from "react-hot-toast";
import { sendEmails } from "@/helpers/mail/sendMail";
import { admin_mails } from "@/constant";
import { natioNalities } from "@/public/data/country";
import { mailBody, userMailBody } from "@/helpers/mail/mailbody";
import Loader from "@/components/ui/loader";

export default function Faq() {
    const [expanded, setExpanded] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [errors, setErrors] = React.useState(null);
// formdata
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        nationality: "",
        gender: "",
        date: "",
        message: "",
    });

    // filed validation
    const handleValidation = (fields) => {
        let isValid = true;
        Object.keys(fields).forEach((key) => {
            if (!fields[key]) {
                setErrors((prev) => ({
                    ...prev,
                    [key]: "This field is required",
                }));
                isValid = false;
            }
        });
        return isValid;
    };
// handle sumbit 
    const handleSubmit = async () => {
        try {
            if (!handleValidation(formData)) {
                return;
            }
            setLoading(true);
            setErrors(null);
            const response = await sendEmails(
              admin_mails,
                `Contact Us - ${formData.email}`,
                userMailBody(formData, "Contact Us"),
            )
            setLoading(false);
            if(response?.messageId){
                toast.success("Email sent successfully 🚑", {
                    position: "top-center",
                    style: {
                        padding: "16px",
                        border: "1px solid #ccc",
                        color: "green",
                    },
                    duration: 3000,
                    icon: "🚑",
                });
    
                setFormData({
                    name: "",
                    email: "",
                    message: "",
                    phone: "",
                    subject: "",
                    nationality: "",
                    gender: "",
                    date: "",
                });
            }else{
                toast.error("Something went wrong", {
                    position: "top-center",
                    style: {
                        padding: "16px",
                        border: "1px solid #ccc",
                        color: "red",
                    },
                    duration: 3000,
                    icon: "😱",
                });
            }
            


        } catch (error) {
            console.error(error?.message);
        }
    };
// accordion function 
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const faq = [
        {
            question: "What is Discover International Medical Service (DIMS)?",
            answer: "Discover International Medical Service (DIMS) is a medical assistance company and medical value travel facilitator. We specialize in connecting patients with Bumrungrad International Hospital, simplifying their healthcare journey through expert guidance, medical appointments, and ensuring high-quality care at the best value.",
        },
        {
            question:
                "How do I book an appointment with the Bumrungrad local office?",
            answer: "You can book an appointment with Bumrungrad Hospital Bangladesh office through DIMS. Contact us via phone, email, or our website, and provide your medical needs. We'll coordinate with the local office to set up your appointment and manage all necessary arrangements.",
        },
        {
            question:
                "What is the cost of my treatment at Bumrungrad International Hospital?",
            answer: "The cost of treatment at Bumrungrad International Hospital varies based on your medical needs and procedures. Contact DIMS for a detailed cost breakdown, as we collaborate with the hospital’s billing department to ensure transparency before your treatment.",
        },
        {
            question:
                "How do I pay for my treatment at Bumrungrad International Hospital if I do not have International Health insurance?",
            answer: "If you don’t have International Health insurance, DIMS will assist you with payment options such as credit/debit cards, bank transfers, or cash. We ensure that the financial processes are handled smoothly and according to your preferences.",
        },
        {
            question:
                "How do I get in contact with a Bumrungrad Support Specialist?",
            answer: "To reach a Bumrungrad Support Specialist, contact DIMS directly. We will connect you with the appropriate specialist at Bumrungrad International Hospital, whether through phone, email, or our online contact form.",
        },
    ];

    return (
        <div className='mx-5 my-16 md:my-32 md:container md:mx-auto flex flex-col md:flex-row gap-8 md:gap-16'>
            <form
                action=''
                className='md:w-1/2 flex flex-col gap-5 shadow p-8 max-sm:p-3 rounded'
            >
                <p className='text-xl md:text-2xl font-semibold text-blue'>
                    Get a second medical opinion at Bumrungrad International
                    Hospital
                </p>
                <div className='grid md:grid-cols-2 gap-5'>
                    <div className='flex flex-col gap-1'>
                        <TextField
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    name: e.target.value,
                                })
                            }
                            fullWidth
                            label='Enter Name(as on passport)'
                            required
                        />
                        {errors?.name && (
                            <p className='text-red text-sm'>{errors?.name}</p>
                        )}
                    </div>
                    <div>
                        <TextField
                            fullWidth
                            label='Enter Email'
                            required
                            type='email'
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    email: e.target.value,
                                })
                            }
                        />
                        {errors?.email && (
                            <p className='text-red text-sm'>{errors?.email}</p>
                        )}
                    </div>
                    <div>
                        <FormControl fullWidth>
                            <InputLabel id='demo-simple-select-label'>
                                Select Gender
                            </InputLabel>
                            <Select
                                labelId='demo-simple-select-label'
                                id='demo-simple-select'
                                label='Select Gender'
                                value={formData.gender}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        gender: e.target.value,
                                    })
                                }
                            >
                                <MenuItem value={'male'}>Male</MenuItem>
                                <MenuItem value={'female'}>Female</MenuItem>
                                <MenuItem value={'other'}>Other</MenuItem>
                            </Select>
                        </FormControl>
                        {errors?.gender && (
                            <p className='text-red text-sm'>{errors?.gender}</p>
                        )}
                    </div>
                    <div>
                        <FormControl fullWidth>
                            <InputLabel id='demo-simple-select-label'>
                                Select Nationality
                            </InputLabel>
                            <Select
                                value={formData.nationality}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        nationality: e.target.value,
                                    })
                                }
                                labelId='demo-simple-select-label'
                                id='demo-simple-select'

                                label='Select Nationality'
                            >
                              {
                                natioNalities.map((item, index) => (
                                    <MenuItem key={index} value={item}>{item}</MenuItem>
                                ))
                              }
                              
                            </Select>
                        </FormControl>
                        {errors?.nationality && (
                            <p className='text-red text-sm'>
                                {errors?.nationality}
                            </p>
                        )}
                    </div>
                    <div>
                        <TextField
                            fullWidth
                            label='Phone Number'
                            type='number'
                            value={formData.phone}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    phone: e.target.value,
                                })
                            }
                            required
                        />
                        {errors?.phone && (
                            <p className='text-red text-sm'>{errors?.phone}</p>
                        )}
                    </div>

                    <div>
                        <TextField
                            fullWidth
                            required
                            type='date'
                            value={formData.date}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    date: e.target.value,
                                })
                            }
                        />

                        {errors?.date && (
                            <p className='text-red text-sm'>{errors?.date}</p>
                        )}
                    </div>
                </div>
                <div>
                    <TextField
                        fullWidth
                        label='Enter Subject'
                        required
                        value={formData.subject}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                subject: e.target.value,
                            })
                        }
                    />
                    {errors?.subject && (
                        <p className='text-red text-sm'>{errors?.subject}</p>
                    )}
                </div>
                <div>
                    <TextField
                        multiline
                        rows={4}
                        fullWidth
                        label='Enter Message'
                        required
                        value={formData.message}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                message: e.target.value,
                            })
                        }
                    />
                    {errors?.message && (
                        <p className='text-red text-sm'>{errors?.message}</p>
                    )}
                </div>

                <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className='bg-blue flex items-center justify-center hover:bg-white px-4 py-2 hover:text-blue text-white border border-blue font-semibold rounded duration-300 ease-linear'
                    type='button'
                >
                    {loading ? <Loader fill='white' stroke='white' className='animate-spin' /> : "Submit"}
                </button>
            </form>
            <div className='md:w-1/2'>
                <p className='text-xl md:text-2xl font-semibold text-blue'>
                    Help & FAQs
                </p>
                <div className='mt-5'>
                    {faq.map((f, i) => (
                        <Accordion
                            key={i}
                            expanded={expanded === i}
                            onChange={handleChange(i)}
                        >
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>{f.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>{f.answer}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
            </div>
        </div>
    );
}



