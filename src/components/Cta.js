import React from 'react'
import MainBtn from './Buttons/MainBtn'
import bgShapes from '../assets/bg-shapes2.svg'

function Cta() {
    return (
        <section className="container m-auto my-14 relative">
            <div className="bg-gradient-to-br from-blue-dark to-blue-medium xl:py-28 xl:py-32 2xl:py-32 relative">
            <img src={bgShapes} className="object-cover absolute h-full w-full top-0 left-0 opacity-30 mix-blend-screen z-0 transform rotate-180" />
                <div className="max-w-4xl m-auto text-center relative z-10">
                    <h2 className="font-heading text-white my-8 text-4xl">Lorem Ipsum Dolor Set Amet</h2>
                    <p className="font-body text-white opacity-80 px-36 my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores non ut tempore fugiat alias magni? At, quam voluptatem officia temporibus odit nesciunt reiciendis quas corporis. Deleniti hic voluptates velit quidem.</p>
                    <div className="flex justify-center">
                        <MainBtn>Contact Us Now</MainBtn>
                    </div>
                </div>
            </div>
            <svg className="absolute right-0 bottom-0 w-60" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <polygon style={{fill: '#F5FAFF'}} className="fill-blue-light" points="100 100, 150 0, 0 100"/>
            </svg>
        </section>
    )
}

export default Cta
