import { CMS_NAME, CMS_URL } from "../../lib/constants"
import { Theme, useTheme } from "../../stores/theme-context"
import { Code, Logo } from "../icons/svgr"
import styles from "./intro.module.scss"

export function Intro() {
	const { theme } = useTheme()
	return (
		<section className={styles.intro}>
			<div className={styles.title}>
				<h1>Blog.</h1>
			</div>
			<div className={styles.logo}>
				<Code
					size={400}
					color={theme === Theme.Light ? "#FF69B4" : "#00FF7F"}
				/>
			</div>
		</section>
	)
}
