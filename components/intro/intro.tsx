import { CMS_NAME, CMS_URL } from "../../lib/constants"
import { Logo } from "../icons/svgr"
import styles from "./intro.module.scss"

export function Intro() {
	return (
		<section className={styles.intro}>
			<Logo size={70} />
			<h1>Blog.</h1>
			<h4>
				A statically generated blog example using{" "}
				<a
					href='https://nextjs.org/'
					className='underline hover:text-success duration-200 transition-colors'
				>
					Next.js
				</a>{" "}
				and{" "}
				<a
					href={CMS_URL}
					className='underline hover:text-success duration-200 transition-colors'
				>
					Sanity.io
				</a>
				.
			</h4>
		</section>
	)
}
