import { Footer, Meta } from "../"
import styles from "./layout.module.scss"

const Layout = ({ preview, children }) => {
	return (
		<>
			<Meta />
			<div className={styles.layout}>
				<main>{children}</main>
			</div>
			<Footer />
		</>
	)
}

export { Layout }
