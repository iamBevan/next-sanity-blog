import "normalize.css"
import "../styles/theme.css"
import "../styles/global.scss"
import "../styles/toggle-button.css"
import { ThemeContext } from "../stores/theme-context"
import { useEffect, useState } from "react"
import { Layout } from "../components"

function MyApp({ Component, pageProps }) {
	const [theme, setTheme] = useState(null)

	useEffect(() => {
		setTheme(window.__theme)
	}, [])

	useEffect(() => {
		window.__setPreferredTheme(theme)
	}, [theme])

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeContext.Provider>
	)
}

export default MyApp
