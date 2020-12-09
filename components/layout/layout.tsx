import { Header, Footer, Meta } from "../"
import { Container } from "../container/container"
import styles from "./layout.module.scss"

const Layout = ({ preview, children }) => {
	return (
		<>
			<Container>
				<Header />
			</Container>
			<Meta />
			<div className={styles.layout}>
				<main>{children}</main>
			</div>
			<Footer />
		</>
	)
}

export { Layout }
