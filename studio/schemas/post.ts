interface IPost {
	name: string
	title: string
	type: string
	fields: {
		name: string
		title: string
		type: string
		to?: { type: string }
		of?: { type: string; to: { type: string } }[]
		options?: {
			source?: string
			maxLength?: number
			hotspot?: boolean
		}
	}[]
	preview: {
		select: { title: string; author: string; media: string }
		prepare(selection: any): any
	}
}

export const Post: IPost = {
	name: "post",
	title: "Post",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
		},
		{
			name: "author",
			title: "Author",
			type: "reference",
			to: { type: "author" },
		},
		{
			name: "mainImage",
			title: "Main image",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			name: "categories",
			title: "Categories",
			type: "array",
			of: [{ type: "reference", to: { type: "category" } }],
		},
		{
			name: "publishedAt",
			title: "Published at",
			type: "datetime",
		},
		{
			name: "body",
			title: "Body",
			type: "blockContent",
		},
	],

	preview: {
		select: {
			title: "title",
			author: "author.name",
			media: "mainImage",
		},
		prepare(selection) {
			const { author } = selection
			return Object.assign({}, selection, {
				subtitle: author && `by ${author}`,
			})
		},
	},
}
