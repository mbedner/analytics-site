import React, { useState } from 'react'
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
      <nav className={navbar ? "fixed m-auto w-full flex flex-wrap items-center justify-between py-3 z-50 top-auto font-heading  bg-gradient-to-r from-blue-dark to-blue-medium transition-all" : "fixed m-auto w-full flex flex-wrap items-center justify-between py-3 z-50 top-auto font-heading transition-all bg-transparent"} >
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link to="/">
                <div
                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                >
                Analytics Site
                </div>
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
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
                    <li className="nav-item px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 rounded hover:bg-blue-dark">
                        <span>Home</span>
                    </li>
                </Link>
                <Link to="/about">
                    <li className="nav-item px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 rounded hover:bg-blue-dark">
                        <span>About</span>
                    </li>
                </Link>
                <Link exact to="mailto:bednermb3420@gmail.com">
                    <li className="nav-item px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 rounded hover:bg-blue-dark">
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