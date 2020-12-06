import Link from "next/link"
import { Logo } from "../icons/svgr"
import styles from "./header.module.scss"

export function Header() {
	return (
		<div className={styles.header}>
			<Logo size={35} />
			<h2>
				<Link href='/'>
					<a>Kevin's Blog</a>
				</Link>
				.
			</h2>
		</div>
	)
}
