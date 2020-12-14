import { Container, MoreStories, HightLightPost, Intro } from "../components"
import { getAllPostsForHome } from "../lib/api"
import Head from "next/head"
import { CMS_NAME } from "../lib/constants"

export default function Index({ allPosts, preview }) {
	const highlightPost = allPosts[0]
	const morePosts = allPosts.slice(1)

	return (
		<>
			<Head>
				<title>Next.js Blog Example with {CMS_NAME}</title>
				<link rel='shortcut icon' href='/static/favicon.ico' />
			</Head>
			<Container>
				<Intro />
				{highlightPost && (
					<HightLightPost
						title={highlightPost.title}
						coverImage={highlightPost.coverImage}
						date={highlightPost.date}
						author={highlightPost.author}
						slug={highlightPost.slug}
						excerpt={highlightPost.excerpt}
					/>
				)}
				{morePosts.length > 0 && <MoreStories posts={morePosts} />}
			</Container>
		</>
	)
}

export async function getStaticProps({ preview = false }) {
	const allPosts = await getAllPostsForHome(preview)
	return {
		props: { allPosts, preview },
		revalidate: 1,
	}
}
