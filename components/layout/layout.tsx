import { Header, Footer, Meta } from "../"

interface LayoutProps {
	children: React.ReactNode
	preview: boolean
}

const Layout = ({ preview, children }: LayoutProps) => {
	return (
		<>
			<Meta />
			<main>{children}</main>
			<Footer />
		</>
	)
}

export { Layout }
