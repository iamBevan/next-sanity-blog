import Link from "next/link"
// import { Logo } from "../icons/svgr"
import { useTheme } from "next-themes"
import styles from "./header.module.scss"

export function Header() {
	const { theme, setTheme } = useTheme()

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
				<button onClick={() => setTheme("light")}>Light Mode</button>
				<button onClick={() => setTheme("dark")}>Dark Mode</button>
			</div>
		</header>
	)
}
