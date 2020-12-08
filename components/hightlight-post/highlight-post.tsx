import { Avatar, Date, CoverImage } from "../"
import Link from "next/link"
import styles from "./hightlight-post.module.scss"

export function HightLightPost({
	title,
	coverImage,
	date,
	excerpt,
	author,
	slug,
}) {
	return (
		<section className={styles.highlightpost}>
			<div>
				<CoverImage
					slug={slug}
					imageObject={coverImage}
					title={title}
					url={coverImage}
				/>
			</div>
			<div className={styles.details}>
				<h3>
					<Link as={`/posts/${slug}`} href='/posts/[slug]'>
						{title}
					</Link>
				</h3>
				<Date dateString={date} />
				<p>{excerpt}</p>
				<Avatar name={author?.name} picture={author?.picture} />
			</div>
		</section>
	)
}
