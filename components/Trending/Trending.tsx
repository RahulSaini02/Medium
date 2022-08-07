import React from 'react'
import { TrendingUpIcon } from '@heroicons/react/outline'
import { Card } from './Card'
import { Post } from '../../typings'

interface Props {
    posts: [Post]
}

export const Trending = ( { posts }: Props ) => {
    return (
        <div className='border-b border-gray-200'>
            <div className='max-w-7xl mx-auto p-5 py-10'>
                <div className='flex space-x-2 items-center uppercase font-bold text-black tracking-wide'>
                    <div className='border border-gray-700 rounded-full p-0.5'>
                        <TrendingUpIcon className='h-5 w-5 text-gray-700' />
                    </div>
                    <h3>Trending on Medium</h3>
                </div>
                <div className='py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                    {
                        posts.map( post => ( <Card key={post._id} post={post} /> ) )
                    }
                </div>
            </div>
        </div>
    )
}
