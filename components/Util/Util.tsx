import React from 'react'

interface Props {
    text: string,
    textColor: string,
    bgColor: string,
    px: string,
    py: string,
    w: string
}

interface HoverProps {
    text: string
}

export const RoundedButton = ( { text, textColor, bgColor, px, py, w }: Props ) => {
    let bg = bgColor.concat( "/90" );
    return (
        <div className={`text-${ textColor } ${ bgColor } px-${ px } py-${ py } rounded-full ${ w } text-center cursor-pointer hover:${ bgColor }`}>{text}
        </div>
    )
}

export const HoverInfo = ( { text }: HoverProps ) => {
    return (
        <div className='absolute -top-12 left-[50%] -ml-10 opacity-0 group-hover:opacity-100 group-hover:transition-opacity group-hover:delay-300 ease-in-out'>
            <span className='absolute bg-stone-900 text-white text-center text-xs rounded-md px-4 py-2 before:content-[""] before:h-3 before:w-3 before:bg-stone-900 before:absolute before:-bottom-1 before:left-[40%] before:rotate-45'>{text}</span>
        </div>
    )
}