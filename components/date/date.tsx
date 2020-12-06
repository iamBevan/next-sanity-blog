import { isValid, parseISO, format } from "date-fns"

export function Date({ dateString }): JSX.Element {
	if (!isValid(parseISO(dateString))) {
		return <p>No date</p>
	}
	const date = parseISO(dateString)
	return <time dateTime={dateString}>{format(date, "LLLL	d, yyyy")}</time>
}
