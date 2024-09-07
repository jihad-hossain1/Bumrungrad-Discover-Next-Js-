'use client'

import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import Loader from "../../shared/Loader/Loader";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Image from "next/image";

const ChildPackageDetails = ({params}) => {
  const [loader, setLoader] = useState();
//   const { slug } = useParams();
  const [childDetailsPackage, setChildDetailsPackage] = useState({});
  // console.log(childDetailsPackage);

  const [packageName, setPackageName] = useState("");
  const [packagePrice, setPackagePrice] = useState("");
  const [patientName, setPatientName] = useState("");
  const [hnNumber, setHnNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setPhoneEmail] = useState("");
  ///modal function
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = (data) => {
    setOpen(true);
    setPackagePrice(data.price);
    setPackageName(data.title);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handalepackageSubmit = () => {
    setLoader(true);

    const getPackage = {
      packageName,
      packagePrice,
      patientName,
      hnNumber,
      phoneNumber,
      email,
    };
    const formData = new FormData();
    formData.append("packageName", packageName);
    formData.append("packagePrice", packagePrice);
    formData.append("patientName", patientName);
    formData.append("hnNumber", hnNumber);
    formData.append("phone", phoneNumber);
    formData.append("email", email);

    fetch("https://api.discoverinternationalmedicalservice.com/api/add/package/booking", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          console.log(data);
          setLoader(false);
          window.location.reload();
          alert(
            "Package booking placed! Our support team will contact you soon."
          );
        }
      })
      .catch((error) => console.error(error));
  };

  //get details data
  useEffect(() => {
    setLoader(true);
    fetch(`https://api.discoverinternationalmedicalservice.com/api/get/sub/package/${params.slug}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setChildDetailsPackage(data?.data);
          setLoader(false);
        }
        setLoader(false);
      });
  }, [params.slug]);
  return (
    <div>
      {" "}
      <section className="mx-5 md:container md:mx-auto py-10">
        {loader ? (
        //   <Loader></Loader>
          <p>Loading...</p>
        ) : (
          <div>
            <div className="flex flex-col gap-5 lg:flex-row">
              <div className="lg:w-1/2">
                <Image
                  height={400}
                  width={400}
                  src={childDetailsPackage?.cover_photo}
                  className="w-full max-h-[40vh] rounded"
                  alt="Bumrungrad International Hospital"
                />
                <button
                  onClick={() => handleClickOpen(childDetailsPackage)}
                  className="px-4 my-4 py-2 bg-blue w-fit text-white rounded font-semibold"
                >
                  Book Package
                </button>
              </div>
              <div className="lg:w-1/2">
                <h5 className="text-[24px] md:text-[28px] font-semibold text-blue">
                  {childDetailsPackage?.title}
                </h5>
                <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-1 gap-2.5">
                  <h5 className="text-[18px] md:text-[24px] font-semibold">
                    {" "}
                    <span className="text-blue">Price:</span>{" "}
                    {childDetailsPackage?.price} THB
                  </h5>
                  {childDetailsPackage?.shift1 && (
                    <ul className="text-[18px] md:text-[24px] list-disc">
                      <p className="text-blue font-semibold">Shift:</p>
                      <li className="ml-5">{childDetailsPackage?.shift1}</li>
                      <li className="ml-5">{childDetailsPackage?.shift1}</li>
                    </ul>
                  )}

                  <h5 className="text-[18px] md:text-[24px]">
                    <span className="text-blue font-semibold">
                      Location: <br />{" "}
                    </span>
                    {childDetailsPackage?.location}.
                  </h5>
                </div>
              </div>
            </div>
            <div className="mt-5">
              {/* <h5 className="text-blue font-semibold text-xl mb-2.5">
                Description: <br />{" "}
              </h5>{" "} */}
              {/* <p>{childDetailsPackage?.description}</p> */}
              <div
                id="blog_desc"
                dangerouslySetInnerHTML={{
                  __html: childDetailsPackage?.content,
                }}
              />
            </div>
            {/* {childDetailsPackage?.conditions?.length > 0 && (
              <div className="mt-5">
                <h5 className="font-semibold text-blue text-xl">
                  Terms & Condiotions:
                </h5>
                <ul className="list-decimal ml-5 mt-2.5">
                  {childDetailsPackage?.conditions?.map((c, i) => (
                    <li key={i} className="my-1">
                      {c?.information}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {childDetailsPackage?.inclusions?.length > 0 && (
              <div className="mt-5">
                <h5 className="font-semibold text-blue text-xl">
                  Package Inclusions:
                </h5>
                <ul className="list-disc ml-5 mt-2.5 grid gap-4 grid-cols-2 lg:grid-cols-3">
                  {childDetailsPackage?.inclusions?.map((c, i) => (
                    <li key={i} className="">
                      {c?.condition}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {childDetailsPackage?.exclusions?.length > 0 && (
              <div className="mt-5">
                <h5 className="font-semibold text-blue text-xl">
                  Package Exclusions:
                </h5>
                <ul className="list-disc ml-5 mt-2.5 grid gap-4 grid-cols-2 lg:grid-cols-3">
                  {childDetailsPackage?.exclusions?.map((c, i) => (
                    <li key={i} className="">
                      {c?.treatment}
                    </li>
                  ))}
                </ul>
              </div>
            )} */}
          </div>
        )}
      </section>
      <React.Fragment>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          fullWidth="true"
        >
          <DialogTitle id="alert-dialog-title">
            <div className="flex justify-between">
              {" "}
              <h1 className="font-semibold">Package Booking</h1>
              <button
                onClick={handleClose}
                className="px-4 py-1  bg-red rounded text-white"
              >
                Close
              </button>
            </div>
          </DialogTitle>
          <DialogContent>
            <div className="p-4">
              <div>
                {" "}
                <p className="mb-1.5 font-semibold text-blue">Package Name</p>
                <TextField
                  id="outlined-basic"
                  placeholder="Enter Package Name"
                  variant="outlined"
                  value={packageName}
                  fullWidth
                  disabled
                />
              </div>
              <div>
                {" "}
                <p className="mb-1.5 font-semibold text-blue">Package Price</p>
                <TextField
                  id="outlined-basic"
                  type="number"
                  placeholder="Enter Package Price"
                  variant="outlined"
                  value={packagePrice}
                  fullWidth
                  disabled
                />
              </div>
              <div>
                {" "}
                <p className="my-2.5 font-semibold text-blue">Patient Name</p>
                <TextField
                  id="outlined-basic"
                  placeholder=" Enter Patient Name"
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setPatientName(e.target.value)}
                />
              </div>
              <div>
                {" "}
                <p className="my-2.5 font-semibold text-blue">HN Number</p>
                <TextField
                  id="outlined-basic"
                  placeholder=" Enter HN Number"
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setHnNumber(e.target.value)}
                />
              </div>
              <div>
                {" "}
                <p className="my-2.5 font-semibold text-blue">
                  Whatsapp Number
                </p>
                <TextField
                  type="number"
                  id="outlined-basic"
                  placeholder="Enter Whatsapp Number"
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div>
                {" "}
                <p className="my-2.5 font-semibold text-blue">Email</p>
                <TextField
                  type="email"
                  id="outlined-basic"
                  placeholder="Enter Email"
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setPhoneEmail(e.target.value)}
                />
              </div>
              <button
                onClick={handalepackageSubmit}
                className="mt-4 px-4 py-2 rounded bg-blue text-white font-semibold"
              >
                {loader ? "Loading..." : "Submit"}
              </button>
            </div>
          </DialogContent>
          <DialogActions></DialogActions>
        </Dialog>
      </React.Fragment>
    </div>
  );
};

export default ChildPackageDetails;
