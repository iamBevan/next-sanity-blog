import styles from "./logo.module.scss"

type Size = "small" | "medium" | "large"

interface LogoProps {
	size?: Size
}

const Logo = ({ size }: LogoProps) => {
	const wrapper = [styles["logo"]]
	if (size) wrapper.push(styles[size])

	return (
		<div className={wrapper.join(" ")}>
			<div className={styles.name}>K</div>
		</div>
	)
}

export { Logo }
