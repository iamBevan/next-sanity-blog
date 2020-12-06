import styles from "./avatar.module.scss"

export function Avatar({ name, picture }) {
	return (
		<div className={styles.avatar}>
			<img src={picture} alt={name} />
			<div className={styles.name}>{name}</div>
		</div>
	)
}
