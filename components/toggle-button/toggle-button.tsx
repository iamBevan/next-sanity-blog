import Toggle from "react-toggle"
import "react-toggle/style.css"

interface ToggleButtonProps {
	checked: boolean
	onChange: () => void
}

export function ToggleButton({ checked, onChange }: ToggleButtonProps) {
	return (
		<Toggle
			// defaultChecked={checked}
			aria-label='Toggle theme'
			className='custom-classname'
			icons={{
				checked: (
					<div
						style={{
							fontSize: "0.9em",
							position: "absolute",
							top: "0.36em",
							left: "-0.35em",
						}}
					>
						🌙
					</div>
				),
				unchecked: (
					<div
						style={{
							fontSize: "0.9em",
							position: "absolute",
							top: "0.36em",
							left: "-0.2em",
						}}
					>
						🌞
					</div>
				),
			}}
			onChange={onChange}
		/>
	)
}
