import Link from 'next/link'
import React from 'react'
import { urlFor } from '../../sanity'
import { Post } from '../../typings'
import { dateFormater } from '../../utilities/helperFunctions'

interface Props {
    post: Post,
}

export const Card = ( { post }: Props ) => {
    return (
        <div className='flex space-x-4 font-sans'>
            <div className='text-4xl text-gray-300 font-bold'>{`0${ post.trendingNum }`}</div>
            <div className='space-y-2 p-2'>
                <div className='flex items-center space-x-2'>
                    <img className='h-6 w-6 rounded-full' src={urlFor( post.author.image ).url()!} alt="author" />
                    <h3 className='text-md text-black font-semibold'>{post.author.name}</h3>
                </div>
                <Link href={`/post/${ post.slug.current }`}>
                    <h2 className='text-xl font-bold max-w-sm cursor-pointer'>{post.title}</h2>
                </Link>
                <p className='text-gray-600 text-sm'>{dateFormater( post.publishedAt )} · 3 min read</p>
            </div>
        </div>
    )
}
