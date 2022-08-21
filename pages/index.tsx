import Head from 'next/head'
import Link from 'next/link'
import { Header } from '../components/Header'
import { PostCard } from '../components/Home Post List/PostCard'
import { Trending } from '../components/Trending/Trending'
import { RoundedButton } from '../components/Util/Util'
import { sanityClient } from '../sanity'
import { Post } from '../typings';

interface Props {
  trendingPosts: [
    Post
  ],
  posts: [Post]
}

const Home = ( { trendingPosts, posts }: Props ) => {


  return (
    <div className="h-full w-[100%] p-0 m-0">
      <Head>
        <title>Medium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section className='h-2/3 md:h-[65vh] bg-[#FFC901] border-b border-black' id="hero">
        <div className='max-w-7xl mx-auto justify-between p-5 flex items-center h-full'>
          <div className='space-y-6'>
            <h1 className='text-7xl lg:text-[7.5rem] font-serif'>Stay curious.</h1>
            <h2 className='text-xl lg:max-w-lg text-gray-800'>Discover stories, thinking, and expertise from writers on any topic.</h2>
            <RoundedButton text='Start Reading' textColor='white' bgColor='bg-stone-800' px='4' py='3' w='w-48' />
          </div>

          <img className='hidden md:inline-flex h-32 lg:h-full' src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png" alt="medium-hero-page-logo" />
        </div>
      </section>

      <section>
        <Trending posts={trendingPosts} />
      </section>

      <div className='w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-x-28 px-5 py-5 lg:py-10'>
        <div className='w-full lg:w-2/3 scroll-m-16'>
          {posts.map( ( post ) => ( <PostCard key={post._id} post={post} /> ) )}
        </div>

        <div className='w-full lg:w-1/3 space-y-4 lg:sticky lg:top-24 lg:h-fit'>
          <h3 className='font-bold uppercase text-md'>Discover more of what matters to you</h3>
          <div className='flex flex-wrap items-center'>
            <Link href='/'>
              <p className='text-gray-600 hover:text-stone-800 mb-2 mr-2 cursor-pointer border border-gray-300 hover:border-stone-800 px-4 py-2 w-fit text-center rounded-sm text-sm'>Self</p>
            </Link>
            <Link href='/' >
              <p className='text-gray-600 hover:text-stone-800 mb-2 mr-2 cursor-pointer border border-gray-300 hover:border-stone-800 px-4 py-2 w-fit text-center rounded-sm text-sm'>Relationships</p>
            </Link>
            <Link href='/' >
              <p className='text-gray-600 hover:text-stone-800 mb-2 mr-2 cursor-pointer border border-gray-300 hover:border-stone-800 px-4 py-2 w-fit text-center rounded-sm text-sm'>Data Science</p>
            </Link>
            <Link href='/' >
              <p className='text-gray-600 hover:text-stone-800 mb-2 mr-2 cursor-pointer border border-gray-300 hover:border-stone-800 px-4 py-2 w-fit text-center rounded-sm text-sm'>Programming</p>
            </Link>
            <Link href='/' >
              <p className='text-gray-600 hover:text-stone-800 mb-2 mr-2 cursor-pointer border border-gray-300 hover:border-stone-800 px-4 py-2 w-fit text-center rounded-sm text-sm'>Productivity</p>
            </Link>
            <Link href='/' >
              <p className='text-gray-600 hover:text-stone-800 mb-2 mr-2 cursor-pointer border border-gray-300 hover:border-stone-800 px-4 py-2 w-fit text-center rounded-sm text-sm'>Java Script</p>
            </Link>
            <Link href='/' >
              <p className='text-gray-600 hover:text-stone-800 mb-2 mr-2 cursor-pointer border border-gray-300 hover:border-stone-800 px-4 py-2 w-fit text-center rounded-sm text-sm'>Machine Learning</p>
            </Link>
            <Link href='/' >
              <p className='text-gray-600 hover:text-stone-800 mb-2 mr-2 cursor-pointer border border-gray-300 hover:border-stone-800 px-4 py-2 w-fit text-center rounded-sm text-sm'>Politics</p>
            </Link>
            <Link href='/' >
              <p className='text-gray-600 hover:text-stone-800 mb-2 mr-2 cursor-pointer border border-gray-300 hover:border-stone-800 px-4 py-2 w-fit text-center rounded-sm text-sm'>Health</p>
            </Link>
          </div>
          <div className='flex flex-wrap items-center justify-center lg:justify-start mt-10 py-4 border-t border-gray-200'>
            <Link href='/' >
              <p className='text-gray-500 mb-3 mr-5 text-md cursor-pointer hover:text-stone-800'>Help</p>
            </Link>
            <Link href='/' >
              <p className='text-gray-500 mb-3 mr-5 text-md cursor-pointer hover:text-stone-800'>Status</p>
            </Link>
            <Link href='/' >
              <p className='text-gray-500 mb-3 mr-5 text-md cursor-pointer hover:text-stone-800'>Writers</p>
            </Link>
            <Link href='/' >
              <p className='text-gray-500  mb-3 mr-5 text-md cursor-pointer hover:text-stone-800'>Blog</p>
            </Link>
            <Link href='/' >
              <p className='text-gray-500  mb-3 mr-5 text-md cursor-pointer hover:text-stone-800'>Careers</p>
            </Link>
            <Link href='/' >
              <p className='text-gray-500 mb-3 mr-5 text-md cursor-pointer hover:text-stone-800'>Privacy</p>
            </Link>
            <Link href='/' >
              <p className='text-gray-500 mb-3 mr-5 text-md cursor-pointer hover:text-stone-800'>Terms</p>
            </Link>
            <Link href='/' >
              <p className='text-gray-500  mb-3 mr-5 text-md cursor-pointer hover:text-stone-800'>About</p>
            </Link>
            <Link href='/' >
              <p className='text-gray-500  mb-3 mr-5 text-md cursor-pointer hover:text-stone-800'>Knowable</p>
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const trendingPostsQuery = `*[_type == "post" && trending == true][0..5]{
    _id,
    publishedAt,
    trendingNum,
    title,
    author -> {
      name,
      image,
      bio
    },
    description,
    tags,
    mainImage,
    slug,
    body
  } | order(trendingNum asc)`;

  /*&& (trending != true || trending > 6)*/
  const postsQuery = `*[_type == "post" ]{
    _id,
    publishedAt,
    trendingNum,
    title,
    author -> {
      name,
      image,
      bio
    },
    description,
    tags,
    mainImage,
    slug,
    body
  }`;

  const trendingPosts = await sanityClient.fetch( trendingPostsQuery )
  const posts = await sanityClient.fetch( postsQuery )

  return {
    props: { trendingPosts, posts }
  }
}