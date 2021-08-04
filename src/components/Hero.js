import React from 'react'

function Hero(props) {
    return (
        <section className="bg-gradient-to-br from-blue-dark to-blue-medium py-60 relative">
            <div className="container flex items-center m-auto">
                <div className="w-2/5">
                    <h1 className="text-6xl text-white font-serif my-6">Lorem ipsum dolor amet consectetur</h1>
                    <p className="text-white opacity-80 my-2 w-3/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus possimus deleniti ullam enim explicabo aut vero quia, perferendis minus adipisci facilis unde tenetur eius soluta mollitia, molestiae temporibus nostrum alias.</p>
                    <button className="px-8 py-3 uppercase rounded-lg bg-gradient-to-b from-yellow-medium to-yellow-dark text-blue-dark my-8 shadow shadow-inner tracking-widest font-bold text-sm">Button</button>
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
