import { React, useContext } from "react";
import { Link } from "react-router-dom";
import { Show } from "../Context/Show";
import { Selected } from "../Context/Selected";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import {loadStripe} from '@stripe/stripe-js';


export default function Info() {
  const { choose } = useContext(Show);
  const { date } = useContext(Selected);

  const makePayment = async() => {
    const stripe = await loadStripe('pk_test_51OiySTECBKruDsQ5P81ak9x0Rarm3BwRVUNlxOIb2etkNGJUnj5ZaeOUMsaI46aACmyniYfrHezfroo6gELB8SjY00pAN182uw');
    

  }

  return (
    <div className=" h-screen w-full text-fuchsia-950 bg-gradient-to-b from-white to-fuchsia-950 pt-10 ">
      <div className=" h-full max-w-[52rem] p-4 mx-auto  flex flex-col  bg-white ">
        <div className="rounded-r-lg bg-fuchsia-300 p-4 w-40 flex justify-center">
          <h1>Your Info</h1>
        </div>
        <Link to="/Appointments">
          <div className="flex my-6">
            <MdOutlineKeyboardArrowLeft size={17} />
            <h1 className="text-xs font-bold">EDIT APPOINTMENT INFORMATION</h1>
          </div>
        </Link>
        {choose.map((x) => {
          return (
            <div className=" p-2  ">
              <div className=" border-2  p-2 flex sm:flex  ">
                <div className="flex flex-col my-3  ml-5 ">
                  <h1 className="font-bold">{x.map((a) => a.name)}</h1>
                  <p className="text-sm">{x.map((a) => a.time)}</p>
                  <h1 className="text-sm ">
                    {date.theTime.toLocaleString()}
                  </h1>
                </div>
              </div>
            </div>
          );
        })}
        <form className="flex flex-col w-full py-10 px-2 text-sm ">
          <span className="pb-1">Name</span>
          <div className="flex gap-1 ">
            <input
              placeholder="First Name"
              type="text"
              className=" w-1/2 text-black"
            />
            <input
              placeholder="last Name"
              type="text"
              className="w-full text-black"
            />
          </div>
          <span className="pt-4">Phone</span>
          <span className="py-1">
            Add your phone number to receive an appointment reminder via text
            message.
          </span>
          <input className="text-black" type="number" />
        </form>
        <button
        onClick={() => makePayment()}
        >Pay Now</button>

      </div>
    </div>
  );
}
