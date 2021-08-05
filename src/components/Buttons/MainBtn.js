import React from 'react'

function MainBtn(props) {
    return (
        <button className="px-8 py-3 uppercase rounded-lg bg-gradient-to-b from-yellow-medium to-yellow-dark text-blue-extradark my-8 shadow shadow-inner tracking-widest font-heading text-sm">{props.children}</button>
    )
}

export default MainBtn
