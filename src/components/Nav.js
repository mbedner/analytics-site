import React, { useState } from 'react'
import { HiOutlineMenuAlt3 } from "react-icons/hi";

import {
    Link
  } from "react-router-dom";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [navbar, setNavbar] = useState(false);

   const changeBackground = () => {
       if(window.scrollY >= 80){
           setNavbar(true)
       } else {
           setNavbar(false)
       }
   }

   window.addEventListener('scroll', changeBackground)

  return (
    <>
      <nav className={navbar ? "px-4 lg:px-0 fixed m-auto w-full flex flex-wrap items-center justify-between py-3 z-50 top-auto font-heading bg-gradient-to-r from-blue-dark to-blue-medium transition-all" : "px-4 lg:px-0 fixed m-auto w-full flex flex-wrap items-center justify-between py-3 z-50 top-auto font-heading transition-all bg-transparent"} >
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link to="/">
                <div
                className="font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                >
                Analytics Site
                </div>
            </Link>
            <button
              className="text-white w-30 h-auto cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              < HiOutlineMenuAlt3 />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <Link to="/">
                    <li className="px-3 py-2 tracking-widest flex items-center text-sm uppercase leading-snug text-white hover:opacity-75 rounded hover:bg-blue-dark">
                        <span>Home</span>
                    </li>
                </Link>
                <Link to="/about">
                    <li className="px-3 py-2 tracking-widest flex items-center text-sm uppercase leading-snug text-white hover:opacity-75 rounded hover:bg-blue-dark">
                        <span>About</span>
                    </li>
                </Link>
                <Link to="/contact-us">
                    <li className="border border-white px-3 py-2 ml-2 tracking-widest flex items-center text-sm uppercase leading-snug text-white hover:text-blue-dark rounded hover:bg-white">
                        <span>Contact</span>
                    </li>
                </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}