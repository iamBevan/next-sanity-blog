import { Container } from "../"
import cn from "classnames"
import { EXAMPLE_PATH } from "../../lib/constants"

export function Alert({ preview }) {
	return (
		<div
			className={cn("border-b", {
				"bg-accent-7 border-accent-7 text-white": preview,
				"bg-accent-1 border-accent-2": !preview,
			})}
		>
			<Container>
				<div className='py-2 text-center text-sm'>
					{preview ? (
						<>
							This page is a preview.{" "}
							<a href='/api/exit-preview'>Click here</a> to exit
							preview mode.
						</>
					) : (
						<>
							The source code for this blog is{" "}
							<a
								href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
							>
								available on GitHub
							</a>
							.
						</>
					)}
				</div>
			</Container>
		</div>
	)
}
