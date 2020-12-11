import Link from "next/link"
import { useTheme } from "next-themes"
import styles from "./header.module.scss"
import Toggle from "react-toggle"
import "react-toggle/style.css"

export function Header() {
	const { theme, setTheme } = useTheme()

	return (
		<header className={styles.header}>
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
				<Toggle
					defaultChecked={theme === "light" ? false : true}
					aria-label='Toggle theme'
					className='custom-classname'
					icons={{
						checked: (
							<div
								style={{
									fontSize: "0.9em",
									position: "absolute",
									top: "0.36em",
									left: "-0.35em",
								}}
							>
								🌙
							</div>
						),
						unchecked: (
							<div
								style={{
									fontSize: "0.9em",
									position: "absolute",
									top: "0.36em",
									left: "-0.3em",
								}}
							>
								🌞
							</div>
						),
					}}
					onChange={() =>
						setTheme(theme === "light" ? "dark" : "light")
					}
				/>
			</div>
		</header>
	)
}
