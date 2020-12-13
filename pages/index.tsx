import {
	Container,
	MoreStories,
	HightLightPost,
	Intro,
	Layout,
	Header,
} from "../components"
import { getAllPostsForHome } from "../lib/api"
import Head from "next/head"
import { CMS_NAME } from "../lib/constants"
import { useEffect, useState } from "react"

export default function Index({ allPosts, preview }) {
	const highlightPost = allPosts[0]
	const morePosts = allPosts.slice(1)
	const [theme, setTheme] = useState(null)

	useEffect(() => {
		setTheme(window.__theme)

		window.__onThemeChange = () => {
			setTheme(window)
		}
	}, [theme])

	return (
		<>
			<Header theme={theme} />
			<Layout preview={preview}>
				<Head>
					<title>Next.js Blog Example with {CMS_NAME}</title>
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
			</Layout>
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
