import React from "react";
import Me from "../img/bb.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {  Link } from "react-router-dom";

export default function Main() {
  return (
    <div
      className="h-screen w-full text-white bg-gradient-to-b from-white to-fuchsia-950"
      name="home"
    >
      <div className="max-w-screen-lg  mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="mr-10 w-80">
          <img
            className="mx-auto rounded-lg object-cover h-full"
            src={Me}
            alt="My Profile"
          />
        </div>
        <div className="w-80 ">
        <div className="flex flex-col h-full justify-center ml-3  ">
          <h1 className="text-2xl sm:text-4xl font-bold pb-4">
            About Us
          </h1>
          <h1 className="text-black sm:text-3xl pl-1 pb-8">BRING A PICTURE OF ANY BRAIDING STYLES AND WE WILL BRAID IT.</h1>
          <Link
            to="/Appointments"
            //spy={true}
            //smooth={true}
           // offset={-70}
          //  duration={500}
          >
            <div>
              <button className="group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-white to-fuchsia-950 cursor-pointer">
              Appointments
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </button>
            </div>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
