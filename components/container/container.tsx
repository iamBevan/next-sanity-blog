import styles from "./container.module.scss"

export function Container({ children }) {
	return <div className='container mx-auto px-5'>{children}</div>
}
