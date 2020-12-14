/// <reference types="next" />
/// <reference types="next/types/global" />

interface Window {
	__setPreferredTheme: (theme: Theme) => void
	__onThemeChange: (theme: Theme) => void
	__theme: Theme
}
