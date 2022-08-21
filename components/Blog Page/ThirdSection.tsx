import { MailIcon, SearchIcon } from '@heroicons/react/outline'
import React from 'react'
import { RoundedButton } from '../Util/Util'
import PortableText from 'react-portable-text'
import { IconNavBar } from '../IconNavBar'
import { urlFor } from '../../sanity'
import { Post } from '../../typings'

interface Props {
    post: Post
}

export const ThirdSection = ( { post }: Props ) => {
    return (
        <div className='sticky bottom-0 lg:col-span-3'>
            <div className='bg-white shadow-inner h-14 py-3 sticky bottom-0 lg:hidden'>
                <IconNavBar />
            </div>

            <div className='hidden p-5 space-y-12 lg:px-5 lg:py-14  lg:flex lg:flex-col'>
                <div className='flex items-center space-x-4 justify-center'>
                    <RoundedButton text='Get Started' textColor='white' bgColor='bg-stone-800' px='4' py='2' w='flex-1' />
                    <p className='text-sky-600 text-lg cursor-pointer hover:text-stone-900'>Sign In</p>
                </div>
                <div className='flex flex-1 p-2 items-center border border-gray-300 space-x-1 rounded-full'>
                    <SearchIcon className='h-6 w-6 text-stone-600' />
                    <input className=' text-stone-500 text-md flex-1 outline-none border-none bg-transparent' placeholder='Search' />
                </div>
                <div className='space-y-4'>
                    <img src={urlFor( post.author.image ).url()!} alt="author" className='h-24 w-24 rounded-full' />
                    <div className='space-y-1'>
                        <h3 className='text-stone-800 text-xl'>{post.author.name}</h3>
                        <p className='text-lg text-slate-500'>169K Followers</p>
                    </div>
                    {
                        post.author.bio !== null ? (
                            <div className='text-slate-500'>
                                <PortableText
                                    dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                                    projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                                    content={post.author.bio}
                                    serializers={
                                        {
                                            h1: ( props: any ) => (
                                                <h1 className='text-lg md:text-2xl font-bold my-5 text-stone-800' {...props} />
                                            ),
                                            h2: ( props: any ) => (
                                                <h2 className='text-sm md:text-lg font-bold my-5 text-stone-800' {...props} />
                                            ),
                                            h3: ( props: any ) => (
                                                <h3 className='font-bold my-5 text-stone-800' {...props} />
                                            ),
                                            h4: ( props: any ) => (
                                                <h4 className='my-5 text-stone-800' {...props} />
                                            ),
                                            h5: ( props: any ) => (
                                                <h5 className='my-5 text-stone-800' {...props} />
                                            ),
                                            h6: ( props: any ) => (
                                                <h6 className='my-5 text-stone-800' {...props} />
                                            ),
                                            normal: ( props: any ) => (
                                                <p className='text-base md:text-lg my-5 text-stone-800' {...props} />
                                            ),
                                            li: ( { children }: any ) => (
                                                <li className='list-disc text-sm lg:text-lg ml-5 my-2 text-stone-800'>{children}</li>
                                            ),
                                            link: ( { href, children }: any ) => (
                                                <a href={href} className='text-sky-600 hover:underline'>{children}</a>
                                            ),
                                        }
                                    }
                                />
                            </div>
                        ) : ""
                    }
                    <div className='flex items-center space-x-2'>
                        <RoundedButton text='Follow' textColor='white' bgColor='bg-sky-600' px='2' py='2' w='w-28' />
                        <div className='rounded-full h-10 w-10 flex justify-center items-center bg-sky-600 cursor-pointer'>
                            <MailIcon className='h-6 w-6 text-white' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
