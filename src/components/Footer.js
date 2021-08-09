import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="bg-gradient-to-r from-blue-extradark via-blue-extradark to-blue-dark w-full p-8 m-auto">
            <ul className="flex text-white items-center justify-center m-auto">
                <Link to="/">
                    <li className="p-4 uppercase font-heading text-sm tracking-widest">Home</li>
                </Link>
                <Link to="/about">
                    <li className="p-4 uppercase font-heading text-sm tracking-widest">About</li>
                </Link>
                <li className="p-4 uppercase font-heading text-sm tracking-widest">Contact</li>
            </ul>
            <p className="text-center text-white font-body pt-4 border-t w-1/3 m-auto opacity-30 text-sm tracking-wide">Copyright Analytics Site 2021</p>
        </footer>
    )
}

export default Footer
