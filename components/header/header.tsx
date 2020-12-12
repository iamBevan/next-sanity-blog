import Link from "next/link"
import { useTheme } from "next-themes"
import styles from "./header.module.scss"
import { ToggleButton } from "../toggle-button/toggle-button"
import Toggle from "react-toggle"
import { useEffect } from "react"
import "react-toggle/style.css"

export function Header() {
	const { theme, setTheme } = useTheme()

	useEffect(() => {
		setTheme("light")
	}, [])

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
				{/* <ToggleButton
					checked={theme === "light" ? false : true}
					onChange={() =>
						// setTheme(theme === "light" ? "dark" : "light")
						console.log("dog")
					}
					key={1}
				/> */}
				<Toggle
					// defaultChecked={theme === "light" ? false : true}
					aria-label='Toggle theme'
					// className='custom-classname'
					icons={{
						checked: null,
						unchecked: null,
					}}
					onChange={() =>
						setTheme(theme === "light" ? "dark" : "light")
					}
				/>
			</div>
		</header>
	)
}
