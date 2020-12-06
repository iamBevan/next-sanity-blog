import { Date } from "../"
import styles from "./comments.module.scss"

export function Comments({ comments = [] }) {
	return (
		<div className={styles.comments}>
			<h2>Comments:</h2>
			<ul>
				{comments?.map(({ _id, _createdAt, name, email, comment }) => (
					<li key={_id}>
						<hr />
						<h4>
							<a href={`mailto:${email}`}>{name}</a> (
							<Date dateString={_createdAt} />)
						</h4>
						<p>{comment}</p>
						<hr />
					</li>
				))}
			</ul>
		</div>
	)
}
