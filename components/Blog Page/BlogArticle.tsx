import React from 'react'
import { urlFor } from '../../sanity'
import { Post } from '../../typings'
import { UserHeader } from './UserHeader'
import PortableText from 'react-portable-text'
import { BookmarkIcon, ChatIcon, MailIcon, ShareIcon, SparklesIcon } from '@heroicons/react/outline'
import { HoverInfo, RoundedButton } from '../Util/Util'
interface Props {
    post: Post
}
export const BlogArticle = ( { post }: Props ) => {
    return (
        <article className='flex-1  space-y-8 overflow-y-scroll scrollbar-hide lg:col-span-7 lg:border-r lg:border-gray-300 '>
            <div className='p-5 lg:px-16 lg:py-14 lg:pb-5'>
                <UserHeader post={post} />
                {/* Title | Descritpion */}
                <div className='space-y-2'>
                    <h2 className='text-stone-700 text-4xl font-semibold'>{post.title}</h2>
                    <h3 className='text-xl text-slate-500'>{post.description}</h3>
                </div>
                {/* Main Image */}
                <div>
                    <img className='w-full object-cover ' src={urlFor( post.mainImage ).url()!} alt="main blog image" />
                </div>
                {/* Article */}
                <div>
                    <PortableText
                        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                        content={post.body}
                        serializers={
                            {
                                h1: ( props: any ) => (
                                    <h1 className='text-2xl font-bold my-5 text-stone-800' {...props} />
                                ),
                                h2: ( props: any ) => (
                                    <h2 className='text-xl font-bold my-5 text-stone-800' {...props} />
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
                                    <p className='text-lg my-5 text-stone-800' {...props} />
                                ),
                                li: ( { children }: any ) => (
                                    <li className='list-disc text-lg ml-5 my-2 text-stone-800'>{children}</li>
                                ),
                                link: ( { href, children }: any ) => (
                                    <a href={href} className='text-sky-600 hover:underline'>{children}</a>
                                ),
                            }
                        }
                    />
                </div>
                {/* Likes | Comments | Share | Bookmark */}
                <div className='pt-10 flex items-center justify-between text-stone-400'>
                    <div className='flex items-center space-x-4'>
                        <div className='relative group w-20 flex items-center justify-center space-x-2 cursor-pointer hover:text-stone-700'>
                            <HoverInfo text='Likes' />
                            <SparklesIcon className='h-7 w-7' />
                            <p>7.5K</p>
                        </div>
                        <div className='relative group w-20  flex items-center justify-center  space-x-2 cursor-pointer hover:text-stone-700'>
                            <HoverInfo text='Respond' />
                            <ChatIcon className='h-7 w-7' />
                            <p>130</p>
                        </div>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <div className='relative group w-20 flex items-center justify-center '>
                            <ShareIcon className='h-7 w-7 cursor-pointer hover:text-stone-700' />
                            <HoverInfo text='Share' />
                        </div>
                        <div className='relative group w-20 flex items-center justify-center '>
                            <BookmarkIcon className='h-7 w-7 cursor-pointer hover:text-stone-700' />
                            <HoverInfo text='Bookmark' />
                        </div>
                    </div>
                </div>
            </div>

            <section className='p-5 lg:px-16 lg:py-14 bg-blue-100 space-y-4'>
                <div className='flex justify-between items-center'>
                    <h3 className='text-xl lg:text-3xl font-semibold text-slate-700'>More from {post.author.name}</h3>
                    <div>

                        <div className='flex items-center space-x-2'>
                            <RoundedButton text='Follow' textColor='white' bgColor='bg-sky-600' px='2' py='2' w='w-28' />
                            <div className='rounded-full h-10 w-10 flex justify-center items-center bg-sky-600 cursor-pointer'>
                                <MailIcon className='h-6 w-6 text-white' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:max-w-xl'>
                    <PortableText
                        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                        content={post.author.bio}
                        serializers={
                            {
                                h1: ( props: any ) => (
                                    <h1 className='text-2xl font-bold my-5 text-stone-800' {...props} />
                                ),
                                h2: ( props: any ) => (
                                    <h2 className='text-xl font-bold my-5 text-stone-800' {...props} />
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
                                    <p className='text-lg my-5 text-slate-500' {...props} />
                                ),
                                li: ( { children }: any ) => (
                                    <li className='list-disc text-lg ml-5 my-2 text-stone-800'>{children}</li>
                                ),
                                link: ( { href, children }: any ) => (
                                    <a href={href} className='text-sky-600 hover:underline'>{children}</a>
                                ),
                            }
                        }
                    />
                </div>

                <div className='mt-5 py-6  flex justify-center border-t-2 border-b-2 border-slate-300'>
                    <div className='flex items-center space-x-2'>
                        <h3>Share your ideas with millions or readers.</h3>
                        <RoundedButton text='Write on Medium' textColor='white' bgColor='bg-stone-800' px='2' py='2' w='w-44' />
                    </div>
                </div>
            </section>


        </article>
    )
}
