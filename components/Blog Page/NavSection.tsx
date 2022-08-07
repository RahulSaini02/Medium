import Link from 'next/link'
import React from 'react'
import { IconNavBar } from '../IconNavBar'
import { RoundedButton } from '../Util/Util'

export const NavSection = () => {
    return (
        <div className='w-full lg:w-24 sticky top-0'>
            <div className='sticky top-0  flex items-center justify-between px-7 py-3 bg-white shadow-sm  lg:hidden'>
                <Link href='/'>
                    <svg viewBox="0 0 1043.63 592.71" className="h-12 w-14 cursor-pointer"><g data-name="Layer 2"><g data-name="Layer 1"><path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"></path></g></g></svg>
                </Link>
                <div className='flex items-center space-x-4'>
                    <p className='text-md text-sky-600 cursor-pointer'>Open in  app</p>
                    <RoundedButton text='Get Started' textColor='white' bgColor='bg-stone-800' px='4' py='2' w='28' />
                </div>
            </div>
            <div className='hidden lg:flex lg:flex-col lg:items-center lg:justify-between lg:h-full px-4 py-10 border-r border-gray-300'>
                <Link href='/'>
                    <svg viewBox="0 0 1043.63 592.71" className="h-12 w-14 cursor-pointer"><g data-name="Layer 2"><g data-name="Layer 1"><path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"></path></g></g></svg>
                </Link>
                <IconNavBar />
            </div>
        </div>
    )
}
