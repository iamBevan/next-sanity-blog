import styles from "./categories.module.scss"

export function Categories({ categories = [] }) {
	return (
		<div className={styles.categories}>
			<h2>Categories:</h2>
			<ul>
				{categories?.map(({ _id, title, description }) => (
					<button key={_id} aria-label={description}>
						{title}
					</button>
				))}
			</ul>
		</div>
	)
}
