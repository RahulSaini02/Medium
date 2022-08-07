import { BookmarkIcon, LinkIcon } from '@heroicons/react/outline'
import { PlayIcon } from '@heroicons/react/solid'
import React from 'react'
import { urlFor } from '../../sanity'
import { Post } from '../../typings'
import { dateFormater } from '../../utilities/helperFunctions'
import { RoundedButton } from '../Util/Util'

interface Props {
    post: Post
}

export const UserHeader = ( { post }: Props
) => {
    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-4'>
                <img className='h-14 w-14 rounded-full' src={urlFor( post.author.image ).url()!} alt="author" />
                <div className='space-y-2'>
                    <div className='flex items-center space-x-4'>
                        <h3 className='text-lg text-slate-800'>{post.author.name}</h3>
                        <RoundedButton text='Follow' textColor='white' bgColor='bg-sky-600' px='1' py='0' w='w-20' />
                    </div>
                    <div className='flex items-center space-x-2 text-gray-500'>
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
            <div className='flex space-x-4 items-center'>
                <div className='px-4 py-2 rounded-full border border-gray-300 lg:border-none flex items-center space-x-2 cursor-pointer'>
                    <BookmarkIcon className='h-5 w-5 text-slate-800' />
                    <p className='text-lg text-slate-500 lg:hidden'>Save</p>
                </div>
                <LinkIcon className='h-5 w-5 text-slate-800 cursor-pointer' />
            </div>
        </div>
    )
}
