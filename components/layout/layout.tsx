import { Alert, Footer, Meta } from "../"

export function Layout({ preview, children }) {
	return (
		<>
			<Meta />
			<div className='min-h-screen'>
				<main>{children}</main>
			</div>
			<Footer />
		</>
	)
}
