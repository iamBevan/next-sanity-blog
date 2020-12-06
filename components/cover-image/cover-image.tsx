import Link from "next/link"
import { imageBuilder } from "../../lib/sanity"
import styles from "./cover-image.module.scss"

interface CoverImageProps {
	title: string
	url: string
	imageObject: string
	slug?: string
}

const CoverImage = ({
	title,
	imageObject,
	slug,
}: CoverImageProps): JSX.Element => {
	const image = (
		<>
			<img
				// width={1240}
				// height={540}
				alt={`Cover Image for ${title}`}
				src={imageBuilder(imageObject).width(1280).height(540).url()}
			/>
			<div className={styles.overlay}></div>
		</>
	)

	return (
		<div className={styles.coverImg}>
			{slug ? (
				<Link as={`/posts/${slug}`} href='/posts/[slug]'>
					<a aria-label={title}>{image}</a>
				</Link>
			) : (
				image
			)}
		</div>
	)
}

export { CoverImage }
