import React from "react";
import { ProjectList } from "../Helpers/ProjectList";

export const Shop = () => {
  return (
    <div className=" h-full w-full text-fuchsia-950 bg-gradient-to-b from-white to-fuchsia-950 pt-10 ">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-14   text-black">
        {ProjectList.map(({ image, id, href, repo, name }) => {
          return (
            <div key={id} className="shadow-md shadow-gray-400 rounded-lg h-80 ">
              <h1 className="flex justify-center py-2">{name}</h1>
              <img
                src={image}
                alt="project-profile"
                className="rounded-md  h-[65%] w-full"
              />
              <div className="items-center justify-center flex">
                <button className=" border-2 p-2 px-4 m-4 duration-200 hover:scale-105">
                  ADD TO CART
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
