import { BookmarkIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import React from 'react'
import { urlFor } from '../../sanity'
import { Post } from '../../typings'
import { dateFormater } from '../../utilities/helperFunctions'

interface Props {
    post: Post
}

export const PostCard = ( { post }: Props ) => {
    return (
        <Link href={`/post/${ post.slug.current }`}>
            <div className='flex  items-center w-full bg-white mb-10'>
                <div className='space-y-2 flex-1'>
                    <div className='flex items-center space-x-2'>
                        <img className='h-6 w-6 rounded-full' src={urlFor( post.author.image ).url()!} alt="author" />
                        <h3 className='text-md text-black font-semibold'>{post.author.name}</h3>
                    </div>
                    <h2 className='text-2xl font-bold cursor-pointer'>{post.title}</h2>
                    <h3 className='text-gray-600 text-lg'>{post.description}</h3>
                    <div className='text-gray-600 text-sm flex justify-between items-center'>
                        <div className='flex space-x-2 items-center'>
                            <p>{dateFormater( post.publishedAt )}</p>
                            <span>·</span>
                            <p>3 min read</p>
                            {
                                post.tags?.length > 0 ? (
                                    <>
                                        <span>·</span><p className='bg-gray-200 text-gray-700 px-2 py-1 rounded-full cursor-pointer'>{post.tags[0]}</p>
                                    </>
                                ) : ""
                            }
                        </div>
                        <BookmarkIcon className='text-black h-6 w-6 cursor-pointer' />
                    </div>
                </div>
                <img className='h-44 w-44 object-cover ml-5' src={urlFor( post.mainImage ).url()!} alt="Blog Image" />
            </div>
        </Link>
    )
}
