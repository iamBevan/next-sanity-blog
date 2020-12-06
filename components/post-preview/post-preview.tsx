import { Avatar, Date, CoverImage } from "../"
import Link from "next/link"
import { imageBuilder } from "../../lib/sanity"
import styles from "./post-preview.module.scss"

export function PostPreview({
	title,
	coverImage,
	date,
	excerpt,
	author,
	slug,
}) {
	return (
		<div className={styles.postPreview}>
			<div>
				<CoverImage
					slug={slug}
					title={title}
					imageObject={coverImage}
					url={imageBuilder(coverImage).url()}
				/>
			</div>
			<div className={styles.info}>
				<h3>
					<Link as={`/posts/${slug}`} href='/posts/[slug]'>
						<a>{title}</a>
					</Link>
				</h3>
				<div className={styles.date}>
					<Date dateString={date} />
				</div>
				<p>{excerpt}</p>
				<Avatar name={author?.name} picture={author?.picture} />
			</div>
		</div>
	)
}
