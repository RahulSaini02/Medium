import { BookmarkIcon, LinkIcon } from '@heroicons/react/outline'
import { PlayIcon } from '@heroicons/react/solid'
import React from 'react'
import { urlFor } from '../../sanity'
import { Post } from '../../typings'
import { dateFormater } from '../../utilities/helperFunctions'
import { HoverInfo, RoundedButton } from '../Util/Util'

interface Props {
    post: Post
}

export const UserHeader = ( { post }: Props ) => {
    return (
        <div className='flex space-y-4 md:space-y-0 justify-between'>
            <div className='flex items-center space-x-4'>
                <img className='h-8 w-8 lg:h-14 lg:w-14 rounded-full' src={urlFor( post.author.image ).url()!} alt="author" />
                <div className='space-y-2'>
                    <div className='flex items-center space-x-4'>
                        <h3 className='text-md lg:text-lg text-slate-800'>{post.author.name}</h3>
                        <RoundedButton text='Follow' textColor='white text-xs md:text-base' bgColor='bg-sky-600' px='1' py='1' w='w-14 md:w-20' />
                    </div>
                    <div className='flex text-sm md:text-base items-center space-x-2 text-gray-500'>
                        <p>{dateFormater( post.publishedAt )}</p>
                        <span>·</span>
                        <p>3 min read</p>
                        <span>·</span>
                        <div className='flex items-center space-x-1 text-sky-600 cursor-pointer'>
                            <PlayIcon className='h-5 w-5 ' />
                            <p>Listen</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Socials */}
            <div className='flex space-x-4 items-center cursor-pointer'>
                <BookmarkIcon className='h-5 w-5 text-slate-700 hover:text-slate-900' />
                <div className='relative group flex items-center justify-center'>
                    <LinkIcon onClick={() => navigator.clipboard.writeText( window.location.href )} className='h-5 w-5 text-slate-700 cursor-pointer hover:text-slate-900' />
                    <HoverInfo text='Copy link' />
                </div>
            </div>
        </div>
    )
}
