import React from 'react'
import MainBtn from './Buttons/MainBtn'
import bgShapes from '../assets/bg-shapes2.svg'
import cubesCut from '../assets/cubes-cut.svg'
import {
    Link
  } from "react-router-dom";

function AboutIntro() {
    return (
        <section className="container m-auto relative">
            <div className="flex items-center justify-center gap-20 flex-row-reverse">
                <div className="w-1/2 relative z-10">
                    <h2 className="text-4xl font-heading mb-8 text-blue-extradark capitalize leading-normal">Lorem ipsum adipisicing explicabo consectetu</h2>
                    <p className="opacity-80 my-4 font-body text-blue-extradark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus possimus deleniti ullam enim explicabo aut vero quia, perferendis minus adipisci facilis unde tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus possimus deleniti ullam enim explicabo aut vero quia, perferendis minus adipisci facilis unde tenetur</p>
                    <Link to="/about"><MainBtn>About Us</MainBtn></Link>
                </div>
                <div className="w-1/2 flex items-center justify-center p-14">
                    <div className="bg-gradient-to-br from-blue-dark to-blue-medium rounded-lg w-full h-80 relative">
                        <img src={cubesCut} className="absolute w-full -bottom-0 z-10 right-8" />
                        <img src={bgShapes} className="object-cover absolute left-0 opacity-60 mix-blend-screen z-0 transform" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutIntro
