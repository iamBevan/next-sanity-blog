import Link from "next/link"
import useDarkMode from "use-dark-mode"
// import { Logo } from "../icons/svgr"
import styles from "./header.module.scss"

export function Header() {
	const darkMode = useDarkMode(false)

	return (
		<header className={styles.header}>
			<div className={styles.menu}>
				{/* <Logo size={35} /> */}
				<h2>
					<Link href='/'>
						<a>Kevin's Blog</a>
					</Link>
					.
				</h2>
				<ul>
					<li>Latest</li>
					<li>Collection</li>
					<li>Categories</li>
				</ul>
			</div>
			<div className={styles.buttons}>
				<button onClick={darkMode.disable}>Light Mode</button>
				<button onClick={darkMode.enable}>Dark Mode</button>
			</div>
		</header>
	)
}
