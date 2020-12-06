import styles from "./logo.module.scss"

type Size = "small" | "medium" | "large"

interface LogoProps {
	size: Size
}

const Logo = ({ size }: LogoProps) => {
	return (
		<div className={styles.logo}>
			<div className={styles.name}>K</div>
		</div>
	)
}

export { Logo }
