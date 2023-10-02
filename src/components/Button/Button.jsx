import React from 'react'

function Button({children, rounded, secondary}) {
    let additionalClass = ''

    if(rounded)
        additionalClass += ' rounded-full'

    if(secondary)
        additionalClass += ' bg-secondary'

    return (
        <button className={'px-4 py-3 bg-primary text-white md:w-max' + additionalClass}>
            {children}
        </button>
    )
}

export default Button