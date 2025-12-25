// src/Navbar.jsx
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import pogo from "../photo/asia_logo2.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="z-50 fixed top-0 left-0 w-full bg-black  shadow-md px-6 flex justify-between items-center p-2 text-white">
      <div className="font-serif md:pl-5 mt-2 mb-2">
        <Link to="/"><img src={pogo} alt="" className="w-35 h-18 md:h-24 md:w-46" /></Link>
        {/* <Link to="/">
          <div className="flex">
            <div>
              <img src={pogo} alt="" className="w-14 h-14" />
            </div>
            <div className="pl-3">
              <h1>
                <strong className="text-2xl">A</strong>SIA
              </h1>
              <h1>
                <strong className="text-2xl">E</strong>NGINEERS
              </h1>
            </div>
          </div>
          <p className="font-style: italic text-sm">
            House of Perfect Consultant
          </p>
        </Link> */}
      </div>
      <ul className="list-reset lg:flex justify-end flex-1 items-center font-semibold hidden md:flex gap-6">
        <li className="mr-0">
          <Link
            to="/about"
            className="inline-block no-underline hover:text-gray-300 hover:text-underline py-2 px-4"
          >
            {" "}
            About Us
          </Link>
        </li>
        <li className="mr-0">
          <Link
            to="/products"
            className="inline-block no-underline hover:text-gray-300 hover:text-underline py-2 px-4"
          >
            {" "}
            Our Projects
          </Link>
        </li>
        <li className="mr-0">
          <Link
            to="/services"
            className="inline-block no-underline hover:text-gray-300 hover:text-underline py-2 px-4"
          >
            {" "}
            Our Services
          </Link>
        </li>
        <li className="mr-0">
          <Link
            to="/partners"
            className="inline-block no-underline hover:text-gray-300 hover:text-underline py-2 px-4"
          >
            {" "}
            Our Business Partners
          </Link>
        </li>
        <li className="mr-5">
          <Link
            to="/contacts"
            className="inline-block no-underline hover:text-gray-300 hover:text-underline py-2 px-4"
          >
            {" "}
            Contacts
          </Link>
        </li>
      </ul>

      <button
        className="md:hidden text-3xl text-white hover:text-gray-300 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      <ul
        className={`
          ${open ? "block" : "hidden"}
          md:hidden 
          absolute top-22 left-0 w-full 
          bg-black text-white text-center
          flex flex-col gap-4 p-4 z-50 
        `}
      >
        <li className="mr-3">
          <Link
            to="/about"
            className="inline-block no-underline hover:text-gray-300 hover:text-underline py-2 px-4"
            onClick={() => setOpen(false)}
          >
            {" "}
            About Us
          </Link>
        </li>
        <li className="mr-3">
          <Link
            to="/products"
            className="inline-block no-underline hover:text-gray-300 hover:text-underline py-2 px-4"
            onClick={() => setOpen(false)}
          >
            {" "}
            Our Projects
          </Link>
        </li>
        <li className="mr-3">
          <Link
            to="/services"
            className="inline-block no-underline hover:text-gray-300 hover:text-underline py-2 px-4"
            onClick={() => setOpen(false)}
          >
            {" "}
            Our Services
          </Link>
        </li>
        <li className="mr-3">
          <Link
            to="/partners"
            className="inline-block no-underline hover:text-gray-300 hover:text-underline py-2 px-4"
            onClick={() => setOpen(false)}
          >
            {" "}
            Our Business Partners
          </Link>
        </li>
        <li className="mr-3">
          <Link
            to="/contacts"
            className="inline-block no-underline hover:text-gray-300 hover:text-underline py-2 px-4"
            onClick={() => setOpen(false)}
          >
            {" "}
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
