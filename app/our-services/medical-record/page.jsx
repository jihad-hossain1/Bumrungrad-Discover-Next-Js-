"use client";

import React, { useState } from "react";
import { TextField } from "@mui/material";
import useAuth from "@/helpers/hooks/useAuth";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { sendEmails } from "@/helpers/mail/sendMail";
import { admin_mails } from "@/constant";
import { mailBody } from "@/helpers/mail/mailbody";
import { uploadToImgbb } from "@/helpers/fileUpload";

const MedicalRecords = () => {
  const { auth } = useAuth();
  const userDetails = auth;
  //loader
  const [loader, setLoader] = useState();

  const [passport, setPassport] = useState("");
  const [name, setName] = useState(
    userDetails?.firstName
      ? `${userDetails?.firstName} ${userDetails?.lastName}`
      : ""
  );
  const [hnNum, setHnNum] = useState("");
  const [caseSummary, setCaseSummary] = useState("");
  const navigate = useRouter();
  const [formDatas, setFormDatas] = useState(null);

  const addPatient = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData();

    const fields = {
      passport,
      name,
      hnNum,
      caseSummary,
    };

    Object.entries(fields).forEach(([key, value]) => {
      formData.append(key, value);
      setFormDatas((prev) => ({ ...prev, [key]: value }));
    });

    try {
      setLoader(true);
      const response = await fetch(
        "https://api.discoverinternationalmedicalservice.com/api/add/medical/report",
        {
          method: "POST",
          body: formData,
        }
      );
      setLoader(false);

      const data = await response.json();

      if (data.status == 200) {
        toast.success("Medical record request sent!", {
          position: "top-center",
          duration: 4000,
          style: {
            color: "green",
          },
        });
        
        setLoader(true);
        const send_admin_mails = await sendEmails(admin_mails,`Medical Records - ${auth?.email}`, mailBody({name: auth?.firstName, email: auth?.email, hn: hnNum, case_summary: caseSummary, passport: "Image Link"}));
        setLoader(false);

        if (send_admin_mails.messageId) {
          toast.success(
          "Mail sent Ok.",{
            position: "top-center",
            duration: 4000,
            style: {
              color: "green",
            },
          }
        );
        form.reset();
         navigate.push("/");
        setLoader(false);
        }else{
          toast.error("Something went wrong - Mail not sent", {
            position: "top-center",
            duration: 4000,
            style: {
              color: "red",
            },
          })
        }
      } else {
        setLoader(false);
        toast.error("Something went wrong", {
          position: "top-center",
          duration: 4000,
          style: {
            color: "red",
          },
        });
      }
    } catch (error) {
      setLoader(false);
      console.error(error?.message);
    }
  };
  return (
    <>
      <div className="md:my-10 md:container md:mx-auto lg:w-1/2 shadow-xl rounded-xl py-10 md:py-12 md:px-10 lg:px-16">
        <h1 className="text-center capitalize text-xl md:text-2xl lg:text-3xl font-bold text-blue">
          Medical Records
        </h1>
        <form
          onSubmit={addPatient}
          className="mt-3 mb-2 md:w-full max-w-screen-lg pb-8 px-5"
        >
          <div className="mb-2 flex flex-col">
            <div>
              <p className="mb-2 font-semibold text-sm">
                {" "}
                <span className="text-red text-lg">*</span>Enter Your Name
              </p>
              <TextField
                onChange={(e) => setName(e.target.value)}
                fullWidth
                value={name}
              />
            </div>
            <div className="mt-2">
              <p className="mt-2 font-semibold text-sm">
                <span className="text-red text-lg">*</span> Attach Your Passport
                Copy
              </p>
              <TextField
                type="file"
                onChange={(e) => setPassport(e.target.files[0])}
                fullWidth
                required
              />
            </div>
            <div>
              <p className="mt-2 font-semibold text-sm">
                {" "}
                <span className="text-red text-lg">*</span> HN Number
              </p>
              <TextField onChange={(e) => setHnNum(e.target.value)} fullWidth />
            </div>
            <div>
              <p className="mt-2 font-semibold text-sm">
                {" "}
                <span className="text-red text-lg">*</span> Report Details
              </p>
              <TextField
                multiline
                onChange={(e) => setCaseSummary(e.target.value)}
                rows={4}
                fullWidth
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue mt-6 text-white px-6 py-2 md:px-12 md:py-4 rounded flex items-center gap-1"
          >
            Submit
            {loader && (
              <div className="flex gap-0.5">
                <div className="h-2 w-2 rounded-full bg-white shadow"></div>
                <div className="h-2 w-2 rounded-full bg-white shadow animate-bounce"></div>
                <div className="h-2 w-2 rounded-full bg-white shadow"></div>
              </div>
            )}
          </button>
        </form>
      </div>
    </>
  );
};

export default MedicalRecords;
