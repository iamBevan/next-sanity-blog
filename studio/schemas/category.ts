interface ICategory {
	name: string
	title: string
	type: string
	fields: {
		name: string
		title?: string
		type: string
		to?: { type: string }[]
	}[]
}

export const Category: ICategory = {
	name: "category",
	title: "Category",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "description",
			title: "Description",
			type: "text",
		},
		{
			name: "post",
			type: "reference",
			to: [{ type: "post" }],
		},
	],
}
