import Link from "next/link"
import { Logo } from "../logo/logo"
import styles from "./header.module.scss"

export function Header() {
	return (
		<div className={styles.header}>
			<Logo size='small' />
			<h2>
				<Link href='/'>
					<a>Kevin's Blog</a>
				</Link>
				.
			</h2>
		</div>
	)
}
