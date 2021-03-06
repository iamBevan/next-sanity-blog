import markdownStyles from "./markdown-styles.module.scss"
import BlockContent from "@sanity/block-content-to-react"

export function PostBody({ content }) {
	return (
		<>
			<BlockContent
				blocks={content}
				projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
				dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
				className={markdownStyles.markdown}
			/>
		</>
	)
}
