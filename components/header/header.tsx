import Link from "next/link"
import styles from "./header.module.scss"
import { ToggleButton } from "../toggle-button/toggle-button"

interface HeaderProps {
	theme: string
}

export function Header({ theme }: HeaderProps) {
	return (
		<header className={styles.header}>
			<div className={styles.wrapper}>
				<div className={styles.menu}>
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
					<ToggleButton
						checked={theme === "dark"}
						onChange={e =>
							window.__setPreferredTheme(
								e.target.checked ? "dark" : "light"
							)
						}
					/>
				</div>
			</div>
		</header>
	)
}
