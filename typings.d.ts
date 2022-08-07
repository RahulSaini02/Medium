export interface Post {
    _id: string,
    publishedAt: string,
    trendingNum: number,
    title: string,
    author: {
        name: string,
        image: string,
        bio: [object]
    }
    description: string,
    tags: [string],
    mainImage: {
        asset: {
            url: string
        }
    },
    slug: {
        current: string
    },
    body: [object]
}