import { Avatar, Date, CoverImage } from ".."
import Link from "next/link"
import styles from "./post-card.module.scss"

export function PostCard({ title, coverImage, date, excerpt, author, slug }) {
	return (
		<section className={styles.highlightpost}>
			{/* <div>
				<CoverImage
					slug={slug}
					imageObject={coverImage}
					title={title}
					url={coverImage}
				/>
			</div> */}
			<div className={styles.details}>
				<h3>
					<Link as={`/posts/${slug}`} href='/posts/[slug]'>
						{title}
					</Link>
				</h3>
				<Date dateString={date} />
				<p>
					{excerpt}Lorem ipsum dolor sit amet, consectetur adipiscing
					elit, sed do eiusmod tempor incididunt ut labore et dolore
					magna aliqua. Ut enim ad minim veniam, quis nostrud
					exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat.{" "}
				</p>
				{/* <Avatar name={author?.name} picture={author?.picture} /> */}
			</div>
		</section>
	)
}
