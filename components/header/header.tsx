import Link from "next/link"
// import { Logo } from "../icons/svgr"
import { useTheme } from "next-themes"
import styles from "./header.module.scss"
import Toggle from "react-toggle"
import { useState } from "react"
import { Moon } from "../icons/svgr"
import { ToggleButton } from "../toggle-button/toggle-button"

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
				<ToggleButton
					checked={theme === "light" ? false : true}
					onChange={() =>
						setTheme(theme === "light" ? "dark" : "light")
					}
				/>
			</div>
		</header>
	)
}
