import { PostPreview } from "../"
import styles from "./more-stories.module.scss"

export function MoreStories({ posts }) {
	return (
		<section className={styles["more-stories"]}>
			<h2>More Stories</h2>
			<div className={styles.grid}>
				{posts.map(post => (
					<PostPreview
						key={post.slug}
						title={post.title}
						coverImage={post.coverImage}
						date={post.date}
						author={post.author}
						slug={post.slug}
						excerpt={post.excerpt}
					/>
				))}
			</div>
		</section>
	)
}
