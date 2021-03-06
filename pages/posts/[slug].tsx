import { useRouter } from "next/router"
import ErrorPage from "next/error"
import {
	Container,
	PostBody,
	MoreStories,
	PostHeader,
	Comments,
	PostTitle,
	Form,
	SectionSeparator,
} from "../../components/"
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api"
import Head from "next/head"
import { CMS_NAME } from "../../lib/constants"
import { Categories } from "../../components/categories/categories"

export default function Post({ post, morePosts, preview }) {
	const router = useRouter()
	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />
	}
	return (
		<>
			<Container>
				{router.isFallback ? (
					<PostTitle>Loading…</PostTitle>
				) : (
					<>
						<article>
							<Head>
								<title>
									{post.title} | Next.js Blog Example with{" "}
									{CMS_NAME}
								</title>
								{/* <meta property="og:image" content={post.ogImage.url} /> */}
							</Head>
							<PostHeader
								title={post.title}
								coverImage={post.coverImage}
								date={post.date}
								author={post.author}
							/>
							<PostBody content={post.body} />
						</article>
						<Categories categories={post.categories} />

						<Comments comments={post.comments} />
						<Form _id={post._id} />

						<SectionSeparator />
						{morePosts.length > 0 && (
							<MoreStories posts={morePosts} />
						)}
					</>
				)}
			</Container>
		</>
	)
}

export async function getStaticProps({ params, preview = false }) {
	const data = await getPostAndMorePosts(params.slug, preview)
	return {
		props: {
			preview,
			post: data?.post || null,
			morePosts: data?.morePosts || null,
		},
		revalidate: 1,
	}
}

export async function getStaticPaths() {
	const allPosts = await getAllPostsWithSlug()
	return {
		paths:
			allPosts?.map(post => ({
				params: {
					slug: post.slug,
				},
			})) || [],
		fallback: true,
	}
}
