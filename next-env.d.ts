/// <reference types="next" />
/// <reference types="next/types/global" />

interface Window {
	__setPreferredTheme: (theme: string) => void
	__onThemeChange: (theme: string) => void
	__theme: string
}
