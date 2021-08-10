import React from 'react'
import MainBtn from './Buttons/MainBtn'
import icon from '../assets/icon-graph.svg'
import { Link } from 'react-router-dom'

function Features() {
    return (
        <section className="container m-auto py-8 lg:py-28 relative">
            <div className="flex flex-col lg:flex-row m-4 lg:m-0">
                <div className="w-full lg:w-1/3 pr-16">
                    <h2 className="text-2xl lg:text-4xl font-heading mb-8 text-blue-extradark capitalize leading-normal">Ipsum Dolor Sit Amet consectetur</h2>
                    <p className="opacity-80 my-4 font-body text-blue-extradark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus possimus deleniti ullam enim explicabo aut vero quia, perferendis minus adipisci facilis unde tenetur.</p>
                    <Link to="/contact-us">
                        <MainBtn>Contact Us</MainBtn>
                    </Link>
                </div>
                <div className="w-full lg:w-2/3">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-4">
                        <div className="bg-white rounded-md p-4 lg:p-8 shadow-long border-b-4 border-blue-medium transform transition hover:-translate-y-2">
                            <img src={icon} alt="" className="w-16"/>
                            <h3 className="leading-tight font-heading text-blue-extradark my-4 text-2xl">Lorem Ipsum Dolor</h3>
                            <div className="w-12 h-1 bg-gradient-to-r from-yellow-dark to-yellow-medium my-2"></div>
                            <p className="opacity-80 my-4 text-sm font-body text-blue-extradark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus possimus deleniti ullam.</p>
                        </div>
                        <div className="bg-white rounded-md p-4 lg:p-8 shadow-long border-b-4 border-blue-medium transform transition hover:-translate-y-2">
                            <img src={icon} alt="" className="w-16"/>
                            <h3 className="leading-tight font-heading text-blue-extradark my-4 text-2xl">Lorem Ipsum Dolor</h3>
                            <div className="w-12 h-1 bg-gradient-to-r from-yellow-dark to-yellow-medium my-2"></div>
                            <p className="opacity-80 my-4 text-sm font-body text-blue-extradark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus possimus deleniti ullam.</p>
                        </div>
                        <div className="bg-white rounded-md p-4 lg:p-8 shadow-long border-b-4 border-blue-medium transform transition hover:-translate-y-2">
                            <img src={icon} alt="" className="w-16"/>
                            <h3 className="leading-tight font-heading text-blue-extradark my-4 text-2xl">Lorem Ipsum Dolor</h3>
                            <div className="w-12 h-1 bg-gradient-to-r from-yellow-dark to-yellow-medium my-2"></div>
                            <p className="opacity-80 my-4 text-sm font-body text-blue-extradark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus possimus deleniti ullam.</p>
                        </div>
                        <div className="bg-white rounded-md p-4 lg:p-8 shadow-long border-b-4 border-blue-medium transform transition hover:-translate-y-2">
                            <img src={icon} alt="" className="w-16"/>
                            <h3 className="leading-tight font-heading text-blue-extradark my-4 text-2xl">Lorem Ipsum Dolor</h3>
                            <div className="w-12 h-1 bg-gradient-to-r from-yellow-dark to-yellow-medium my-2"></div>
                            <p className="opacity-80 my-4 text-sm font-body text-blue-extradark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus possimus deleniti ullam.</p>
                        </div>
                        <div className="bg-white rounded-md p-4 lg:p-8 shadow-long border-b-4 border-blue-medium transform transition hover:-translate-y-2">
                            <img src={icon} alt="" className="w-16"/>
                            <h3 className="leading-tight font-heading text-blue-extradark my-4 text-2xl">Lorem Ipsum Dolor</h3>
                            <div className="w-12 h-1 bg-gradient-to-r from-yellow-dark to-yellow-medium my-2"></div>
                            <p className="opacity-80 my-4 text-sm font-body text-blue-extradark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus possimus deleniti ullam.</p>
                        </div>
                        <div className="bg-white rounded-md p-4 lg:p-8 shadow-long border-b-4 border-blue-medium transform transition hover:-translate-y-2">
                            <img src={icon} alt="" className="w-16"/>
                            <h3 className="leading-tight font-heading text-blue-extradark my-4 text-2xl">Lorem Ipsum Dolor</h3>
                            <div className="w-12 h-1 bg-gradient-to-r from-yellow-dark to-yellow-medium my-2"></div>
                            <p className="opacity-80 my-4 text-sm font-body text-blue-extradark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus possimus deleniti ullam.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features
