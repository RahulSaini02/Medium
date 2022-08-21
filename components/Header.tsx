import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { RoundedButton } from './Util/Util'

interface Props {
    bg: string
}

export const Header = () => {
    const [active, setActive] = useState( false )

    useEffect( () => {
        window.addEventListener( 'scroll', () => {
            const heroSection = document.querySelector( '#hero' );
            const navSection = document.querySelector( '#nav' );

            let heroPosition = heroSection?.getBoundingClientRect()!
            let navPosition = navSection?.getBoundingClientRect()!

            if ( navPosition?.bottom >= heroPosition?.bottom ) {
                setActive( true )
            } else if ( navPosition?.bottom <= heroPosition?.bottom ) {
                setActive( false )
            }
        } )
    }, [] )

    return (
        <header className={`border-b border-black ${ active ? 'bg-white' : 'bg-[#FFC901]' } sticky top-0 z-10 transition-colors duration-700 ease-in-out`} id='nav'>
            <div className='flex justify-between items-center p-4 max-w-7xl mx-auto'>
                <div className='flex space-x-5 items-center' >
                    <Link href="/">
                        <img className='w-32 lg:w-44 cursor-pointer object-contain' src="https://links.papareact.com/yvf" alt="medium" />
                    </Link>
                </div>
                <div className='flex space-x-6 items-center text-stone-700 cursor-pointer'>
                    <div className='hidden md:inline-flex space-x-6'>
                        <h3 className='hover:text-stone-800'>Our Story</h3>
                        <h3 className='hover:text-stone-800'>Membership</h3>
                        <h3 className='hover:text-stone-800'>Write</h3>
                    </div>
                    <h3 className='hover:text-stone-800'>Sign In</h3>
                    <RoundedButton text='Get Started' textColor='white' bgColor={`${ active ? 'bg-lime-700' : 'bg-stone-800' }`} px='4' py='2' w='w-26' />
                </div>
            </div>
        </header >
    )
}
