interface IComment {
	name: string
	type: string
	title: string
	fields: { name: string; type: string; to?: [{ type: string }] }[]
	preview: {
		select: {
			name: string
			comment: string
			post: string
		}
		prepare({
			name,
			comment,
			post,
		}: {
			name: string
			comment: string
			post: string
		}): { title: string; subtitle: string }
	}
}

export const Comment: IComment = {
	name: "comment",
	type: "document",
	title: "Comment",
	fields: [
		{
			name: "name",
			type: "string",
		},
		{
			name: "email",
			type: "string",
		},
		{
			name: "comment",
			type: "text",
		},
		{
			name: "post",
			type: "reference",
			to: [{ type: "post" }],
		},
	],
	preview: {
		select: {
			name: "name",
			comment: "comment",
			post: "post.title",
		},
		prepare({ name, comment, post }) {
			return {
				title: `${name} on ${post}`,
				subtitle: comment,
			}
		},
	},
}
