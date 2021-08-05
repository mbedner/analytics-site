import React from 'react'
import MainBtn from './Buttons/MainBtn'
import grain from '../assets/grain.jpeg'
import {
    Link
  } from "react-router-dom";

function Hero(props) {
    return (
        <section className="bg-gradient-to-br from-blue-dark to-blue-medium xl:py-28 2xl:py-60 relative overflow-hidden">
             <img src={grain} className="object-cover absolute h-full w-full top-0 left-0 opacity-30 mix-blend-screen z-0" />
             <div className="container flex items-center m-auto z-10 relative">
                <div className="w-2/5">
                    <h1 className="capitalize xl:text-5xl 2xl:text-6xl text-white font-heading my-8">Lorem ipsum dolor amet consectetur</h1>
                    <p className="text-white opacity-80 my-4 w-3/4 font-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus possimus ullam enim explicabo aut vero quia, perferendis minus adipisci facilis unde.</p>
                    <Link to="mailto:bednermb3420@gmail.com"><MainBtn>Contact Us</MainBtn></Link>
                </div>
                <div className="w-3/5"></div>
            </div>
           
            <svg className="absolute right-0 bottom-0 w-80" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <polygon style={{fill: '#F5FAFF'}} className="fill-blue-light" points="100 100, 150 0, 0 100"/>
            </svg>
        </section>
    )
}

export default Hero
