import { createContext, useContext } from "react"

export enum Theme {
	Dark = "dark",
	Light = "light",
}

export type ThemeContextType = {
	theme: Theme
	setTheme: (Theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextType>({
	theme: null,
	setTheme: () => console.warn("no theme provider"),
})
export const useTheme = () => useContext(ThemeContext)
