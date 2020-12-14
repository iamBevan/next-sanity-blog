import { Container, MoreStories, PostCard, Intro } from "../components"
import { getAllPostsForHome } from "../lib/api"
import Head from "next/head"
import { v4 as uuidv4 } from "uuid"
import { CMS_NAME } from "../lib/constants"
import styles from "./index.module.scss"

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
				<div className={styles.main}>
					<div>
						{allPosts.map(post => (
							<PostCard
								key={uuidv4()}
								title={post.title}
								coverImage={post.coverImage}
								date={post.date}
								author={post.author}
								slug={post.slug}
								excerpt={post.excerpt}
							/>
						))}
					</div>
					{morePosts.length > 0 && <MoreStories posts={morePosts} />}
				</div>
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
