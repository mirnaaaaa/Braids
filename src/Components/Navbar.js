import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../img/bbm.jpg";
import { Link, NavLink } from "react-router-dom";
import { BsCartCheck } from "react-icons/bs";

export default function Navbar() {
  const [menu, setMenu] = useState(true);

  const activeLink = 'underline  '
  const normalLink = ''

  return (
    <div className="w-full h-20   flex items-center px-4  text-white  ">
      <div className="flex items-center  justify-between w-full">
        <div>
          <ul className="hidden sm:flex  text-gray-500 ">
            <div className="px-20 ">
              <img className=" w-20 px-1" src={logo} alt="My Profile" />
            </div>
            <NavLink to='/' className={({isActive }) =>  isActive ? activeLink : normalLink}>
            <li>Home</li>

            </NavLink>
          
          
            <Link to="/Shop">
              <li>Shop</li>
            </Link>
            <Link to="/Appointments">
              <li>Appointments</li>
            </Link>
            <Link to="/Events">
              <li>Party & Events</li>
            </Link>
            <Link to="/Contact">
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
        <div className="text-gray-500 mb-5 ">
          <BsCartCheck className="w-20 h-6 cursor-pointer hover:text-fuchsia-700" />
        </div>
      </div>

      <div className="text-gray-500 sm:hidden">
        {!menu ? (
          <FaTimes size={30} />
        ) : (
          <FaBars onClick={() => setMenu(!menu)} size={30} />
        )}
      </div>
      {!menu && (
        <ul className=" text-gray-500 flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-500">
          <h1 className="text-4xl md:flex font-bold font-myFont px-20 pb-6 items-center">
           Braids_By_Marmora
          </h1>

          <Link onClick={() => setMenu(true)} to="home" duration={500}>
            <li >Home</li>
          </Link>
          <Link onClick={() => setMenu(true)} to="about" duration={500}>
            <li>About</li>
          </Link>
          <Link onClick={() => setMenu(true)} to="skills" duration={500}>
            <li>Skills</li>
          </Link>
          <Link onClick={() => setMenu(true)} to="/party" duration={500}>
            <li>Projects</li>
          </Link>
          <Link onClick={() => setMenu(true)} to="contact" duration={500}>
            <li>Contact</li>
          </Link>
        </ul>
      )}
    </div>
  );
}
