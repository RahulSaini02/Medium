import { GetStaticProps } from 'next'
import { sanityClient } from '../../sanity'
import { Post } from '../../typings'

import { NavSection } from '../../components/Blog Page/NavSection'
import { ThirdSection } from '../../components/Blog Page/ThirdSection'
import { BlogArticle } from '../../components/Blog Page/BlogArticle'

interface Props {
    post: Post
}

function Blog ( { post }: Props ) {
    return (
        <main className='relative h-full w-full flex flex-col lg:flex-row lg:h-screen'>
            {/* First Section */}
            <NavSection />
            <div className='flex flex-col flex-1 lg:grid lg:grid-cols-10'>
                {/* Blog Section */}
                <BlogArticle post={post} />
                {/* Third Section */}
                <ThirdSection post={post} />
            </div>
        </main >
    )
}

export default Blog;

export const getStaticPaths = async () => {
    const query = `*[_type == 'post'] {
        _id,
        slug {
            current
        }
    }`;

    const posts = await sanityClient.fetch( query )

    const paths = posts.map( ( post: Post ) => ( {
        params: {
            slug: post.slug.current
        }
    } ) )

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ( { params } ) => {
    const query = `*[_type == "post" && slug.current == $slug][0]{
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

    const post = await sanityClient.fetch( query, { slug: params?.slug } )

    if ( !post ) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            post
        },
        revalidate: 60 * 5,
    }
}