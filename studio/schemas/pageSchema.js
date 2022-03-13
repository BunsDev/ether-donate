export const pageSchema = {
	name: "pages",
	title: "pages",
	type: "document",
	fields: [
		{
			name: "title",
			title: "title",
			type: "string"
		},
		{
			name: "content",
			title: "content",
			type: "string"
		},
		{
			name: "author",
			title: "author",
			type: "string"
		},
		{
			name: 'donationsLength',
			title: 'donationsLength',
			type: 'number'
		}
	]
}