import Link from "next/link"
import styles from "./header.module.scss"
import { ToggleButton } from "../toggle-button/toggle-button"
import { Theme, useTheme } from "../../stores/theme-context"

interface HeaderProps {
	theme: string
}

export function Header() {
	const { theme, setTheme } = useTheme()

	return (
		<header className={styles.header}>
			<div className={styles.wrapper}>
				<div className={styles.menu}>
					<h2>
						<Link href='/'>
							<a>Blog</a>
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
						checked={theme === Theme.Dark}
						onChange={() => {
							setTheme(
								window.__theme === Theme.Light
									? Theme.Dark
									: Theme.Light
							)
						}}
					/>
				</div>
			</div>
		</header>
	)
}
