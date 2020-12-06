import { Container } from "../"
import { EXAMPLE_PATH } from "../../lib/constants"
import styles from "./footer.module.scss"

export function Footer() {
	return (
		<footer className={styles.footer}>
			<Container>
				<ul>
					<li>1</li>
					<li>2</li>
					<li>3</li>
				</ul>
			</Container>
		</footer>
	)
}
