/* eslint-disable no-undef */
import React, { useContext } from "react";
import CategorY from "./Category";
import Schedule from "./Schedule";
import { Show } from "../Context/Show";

export const Appointments = () => {
  const { select } = useContext(Show);

  return (
    <div className=" h-full w-full text-fuchsia-950 bg-gradient-to-b from-white to-fuchsia-950 pt-10 ">
      <div className=" max-w-[52rem] p-4 mx-auto justify-center flex flex-col  bg-white ">
        <div className="justify-center flex flex-col items-center pb-5">
          <h1 className=" text-4xl  font-bold ">thankyou for choosing </h1>
          <h2 className=" text-4xl  font-bold"> braids_by_marmora </h2>
        </div>
        <div className="w-full grid   gap-3 text-center  ">
          <div className="border-4 border-fuchsia-200 border-x-fuchsia-500 rounded-lg p-4 pl-10">
            <h1 className="text-4xl">FAQ'S</h1>
            <ul className="list-disc ">
              <li>we're located at Gesr el suez.</li>
              <li>
                AFTER BOOKING YOU WILL RECEIVE A CONFIRMATION MASSAGE WITH THE
                LOCATION + HOW TO PROPERLY PREP YOUR HAIR PRIOR TO YOUR
                APPOINTMENT.
              </li>
              <li>HAIR IS INCLUDED FOR ALL STYLES.</li>
              <li>
                PLEASE CONTACT +201555842544 IF YOU HAVE ANY ADDITIONAL QUESTIONS.
              </li>
            </ul>
          </div>
        </div>
        <div className="py-4">
          {select ? (
            <div>
              <Schedule />
            </div>
          ) : (
            <div>
              <CategorY />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
