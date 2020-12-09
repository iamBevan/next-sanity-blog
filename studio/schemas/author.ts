interface IAuthor {
	name: string
	title: string
	type: string
	fields: {
		name: string
		title: string
		type: string
		of?: {
			title: string
			type: string
			styles: { title: string; value: string }[]
			lists: any[]
		}[]
		options?: {
			source?: string
			maxLength?: number
			hotspot?: boolean
		}
	}[]
	preview: { select: { title: string; media: string } }
}

export const Author: IAuthor = {
	name: "author",
	title: "Author",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Name",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "name",
				maxLength: 96,
			},
		},
		{
			name: "image",
			title: "Image",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			name: "bio",
			title: "Bio",
			type: "array",
			of: [
				{
					title: "Block",
					type: "block",
					styles: [{ title: "Normal", value: "normal" }],
					lists: [],
				},
			],
		},
	],
	preview: {
		select: {
			title: "name",
			media: "image",
		},
	},
}
