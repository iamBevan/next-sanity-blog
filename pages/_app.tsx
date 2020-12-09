import { ThemeProvider } from "next-themes"
import "normalize.css"
import "../styles/index.css"

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider>
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default MyApp
