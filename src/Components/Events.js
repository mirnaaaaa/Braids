import React from "react";
import birthday from "../img/B.jpg";
import birthday1 from "../img/bi.png";
import birthday2 from "../img/bir.jpg";


export default function Events (){
  return (
    <div className=" h-full w-full text-fuchsia-950 bg-gradient-to-b from-white to-fuchsia-950 pt-10 ">
      <div className="h-full max-w-[52rem] p-4 mx-auto justify-center flex flex-col  bg-white ">
        <h1>PARTY & EVENTS</h1>
        <h1 className="font-bold py-2">to make an Appointment:</h1>
        <h1 className="font-bold pb-2">
          Please email braids_by_marmora@gmail.com with the following:{" "}
        </h1>
        <h1 className="py-2">-The date and time of your event.</h1>
        <h1>-Tell me the location of where the event will be taking place.</h1>
        <h1 className="py-2">
          -Specify how many people will be getting their hair done.
        </h1>
        <h1>-Specify the hair styles you want. </h1>
        <h1 className="py-2">
          -Lastly, I do require a non refundable deposit of 30% that will go
          towards the final cost.
        </h1>
        <div className="w-full h-full grid   sm:grid-cols-3  gap-3 text-center py-6  ">
          <img src={birthday} alt="birthday" />
          <img className="h-full" src={birthday1} alt="birthday" />
          <img src={birthday2} alt="birthday" />
        </div>
      </div>
    </div>
  );
};
