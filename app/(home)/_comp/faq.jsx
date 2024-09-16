"use client";

import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

export default function Faq() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faq = [
    {
      question: "What is Discover International Medical Service (DIMS)?",
      answer:
        "Discover International Medical Service (DIMS) is a medical assistance company and medical value travel facilitator. We specialize in connecting patients with Bumrungrad International Hospital, simplifying their healthcare journey through expert guidance, medical appointments, and ensuring high-quality care at the best value.",
    },
    {
      question:
        "How do I book an appointment with the Bumrungrad local office?",
      answer:
        "You can book an appointment with Bumrungrad Hospital Bangladesh office through DIMS. Contact us via phone, email, or our website, and provide your medical needs. We'll coordinate with the local office to set up your appointment and manage all necessary arrangements.",
    },
    {
      question:
        "What is the cost of my treatment at Bumrungrad International Hospital?",
      answer:
        "The cost of treatment at Bumrungrad International Hospital varies based on your medical needs and procedures. Contact DIMS for a detailed cost breakdown, as we collaborate with the hospital’s billing department to ensure transparency before your treatment.",
    },
    {
      question:
        "How do I pay for my treatment at Bumrungrad International Hospital if I do not have International Health insurance?",
      answer:
        "If you don’t have International Health insurance, DIMS will assist you with payment options such as credit/debit cards, bank transfers, or cash. We ensure that the financial processes are handled smoothly and according to your preferences.",
    },
    {
      question: "How do I get in contact with a Bumrungrad Support Specialist?",
      answer:
        "To reach a Bumrungrad Support Specialist, contact DIMS directly. We will connect you with the appropriate specialist at Bumrungrad International Hospital, whether through phone, email, or our online contact form.",
    },
  ];

  return (
    <div className="mx-5 my-16 md:my-32 md:container md:mx-auto flex flex-col md:flex-row gap-8 md:gap-16">
      <form
        action=""
        className="md:w-1/2 flex flex-col gap-5 shadow p-8 max-sm:p-3 rounded"
      >
        <p className="text-xl md:text-2xl font-semibold text-blue">
          Get a second medical opinion at Bumrungrad International Hospital
        </p>
        <div className="grid md:grid-cols-2 gap-5">
          <TextField fullWidth label="Enter Name(as on passport)" required />
          <TextField fullWidth label="Enter Email" required />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              //   value={age}
              label="Select Gender"
              //   onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Select Nationality
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              //   value={age}
              label="Select Nationality"
              //   onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <TextField fullWidth label="Phone Number" required />
          <TextField fullWidth required type="date" />
        </div>
        <TextField fullWidth label="Enter Subject" required />
        <TextField fullWidth label="Enter Message" required />
        <button
          className="bg-blue hover:bg-white px-4 py-2 hover:text-blue text-white border border-blue font-semibold rounded duration-300 ease-linear"
          type="submit"
        >
          Send
        </button>
      </form>
      <div className="md:w-1/2">
        <p className="text-xl md:text-2xl font-semibold text-blue">
          Help & FAQs
        </p>
        <div className="mt-5">
          {faq.map((f, i) => (
            <Accordion key={i} expanded={expanded === i} onChange={handleChange(i)}>
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
