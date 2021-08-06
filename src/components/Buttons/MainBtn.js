import React from 'react'
import { HiChevronRight } from "react-icons/hi";
import { IconContext } from "react-icons";


function MainBtn(props) {
    return (
        <button className="px-6 py-4 uppercase rounded-lg bg-gradient-to-b from-yellow-medium to-yellow-dark text-blue-extradark my-12 shadow shadow-inner tracking-widest font-heading text-sm flex items-center justify-center gap-2 hover:opacity-90">
            {props.children} 
            <IconContext.Provider value={{ color: "text-blue-extradark", className: "w-5 h-5" }}>
                <HiChevronRight/>
            </IconContext.Provider>
        </button>
    )
}

export default MainBtn
