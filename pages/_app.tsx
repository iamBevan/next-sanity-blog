import { ThemeProvider, useTheme } from "next-themes"
import { useEffect, useState } from "react"
// import "normalize.css"
import "../styles/index.css"

function MyApp({ Component, pageProps }) {
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme()

	// When mounted on client, now we can show the UI
	useEffect(() => setMounted(true), [])

	if (!mounted) return null

	return (
		<ThemeProvider>
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default MyApp
