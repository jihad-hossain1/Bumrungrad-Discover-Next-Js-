"use client";

import AuthRoute from "@/helpers/context/AuthRoute";
import useAuth from "@/helpers/hooks/useAuth";
import React, { useEffect, useState } from "react";

export default function User() {
  const { auth, access_token } = useAuth();
  const [loading, setLoading] = useState(true); // State to track loading
  const [error, setError] = useState(null);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {

        setLoading(true);
        const response = await fetch(
          `https://api.discoverinternationalmedicalservice.com/api/personal/appointment/${auth?.id}`,
          {
            method: "GET",
            headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
          }
        );
        setLoading(false);

        if (response.ok) {
          const data = await response.json();
          setAppointments(data?.data);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        setLoading(false);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (access_token && auth) fetchData();
  }, [access_token, auth?.id]); // The empty dependency array ensures this effect runs once

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  if (error) {
    // You can handle and render the error here
    return <div>Error: {error.message}</div>;
  }
  return (
    <AuthRoute>
      <section className="mx-5 md:container md:mx-auto py-10  md:flex md:gap-8 lg:gap-16">
        <div className="shadow p-5 rounded-lg shadow-blue relative md:w-1/2">
          <div className="h-16 w-16 bg-blue absolute bottom-5 right-5 rounded-full animate-bounce"></div>
          <h5 className="font-semibold text-lg text-blue">My Profile</h5>
          <hr className="my-2.5" />
          <p className="flex gap-2">
            {" "}
            <span className="font-semibold text-blue">Name:</span>
            <span className="capitalize">
              {auth?.firstName} {auth?.lastName}{" "}
            </span>
          </p>
          <p className="flex gap-2">
            {" "}
            <span className="font-semibold text-blue">Citizenship:</span>
            <span className="capitalize">{auth?.citizenship} </span>
          </p>
          <p className="flex gap-2">
            {" "}
            <span className="font-semibold text-blue">Country:</span>
            <span className="capitalize">{auth?.country} </span>
          </p>
          <p className="flex gap-2">
            {" "}
            <span className="font-semibold text-blue">DOB:</span>
            {auth?.dob}{" "}
          </p>
          <p className="flex gap-2">
            {" "}
            <span className="font-semibold text-blue">Email:</span>
            {auth?.email}{" "}
          </p>
          <p className="flex gap-2">
            {" "}
            <span className="font-semibold text-blue">Phone:</span>
            {auth?.phone}{" "}
          </p>
        </div>
        <div className="mt-5 md:w-1/2">
          <h5 className="font-semibold text-lg text-blue">
            Total appointment taken: {appointments?.length}
          </h5>
          <div>
            {appointments?.map((a, i) => (
              <div key={i}>
                <div className="shadow-lg hover:shadow duration-300 ease-linear rounded-xl p-5 mt-2">
                  <div className="md:flex justify-between">
                    <div>
                      {a?.doctor && (
                        <p className="font-semibold text-blue">{a?.doctor} </p>
                      )}
                      {a?.specialty && <p> {a?.specialty} </p>}
                    </div>
                    <div className="flex items-center gap-2.5">
                      {a?.status === "0" && (
                        <p className="mt-3 md:mt-0 w-fit px-2 py-1 bg-blue text-white rounded">
                          Pending
                        </p>
                      )}
                      {a?.status === "1" && (
                        <p className="mt-3 md:mt-0 w-fit px-2 py-1 border text-white rounded">
                          Processing
                        </p>
                      )}
                      {a?.status === "2" && (
                        <p className="mt-3 md:mt-0 w-fit px-2 py-1 bg-green text-white rounded">
                          Done
                        </p>
                      )}
                      <div className="h-4 w-4 bg-blue rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <hr className="my-2.5" />
                  <div className="grid md:grid-cols-2">
                    <div>
                      <p>{a?.selectedDate && a?.selectedDate}</p>
                      <p>{a?.shift && a?.shift}</p>
                      {a?.firstSiftTime && <p> {a?.firstSiftTime}</p>}
                    </div>
                    <div>
                      <p>{a?.selectedDate2 && a?.selectedDate2}</p>
                      <p>{a?.shift2 && a?.shift2}</p>
                      {a?.SecondSiftTime && <p> {a?.SecondSiftTime}</p>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AuthRoute>
  );
}
