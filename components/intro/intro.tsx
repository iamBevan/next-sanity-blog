import { CMS_NAME, CMS_URL } from "../../lib/constants"
import { Logo } from "../icons/svgr"
import styles from "./intro.module.scss"

export function Intro() {
	return (
		<section className={styles.intro}>
			<h1>Blog.</h1>
			<h4>
				A statically generated blog example using{" "}
				<a href='https://nextjs.org/'>Next.js</a> and{" "}
				<a href={CMS_URL}>Sanity.io</a>.
			</h4>
		</section>
	)
}
