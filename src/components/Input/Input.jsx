import React from 'react'

function Input({type, placeholder, textarea}) {
    if (textarea)
        return (
            <textarea className='border-secondary border rounded-lg py-2 px-4 my-3' placeholder={placeholder || ""} ></textarea>
        )

    return (
        <input type={type || "text"} placeholder={placeholder || ""} className='border-secondary border rounded-lg py-2 px-4 my-3'/>
    )
}

export default Input