export const transactionSchema = {
	name: "transactions",
	title: "transactions",
	type: "document",
	fields: [
		{
			name: "sender",
			title: "sender",
			type: "string"
		},
		{
			name: "receiver",
			title: "receiver",
			type: "string"
		},
		{
			name: "amount",
			title: "amount",
			type: "number"
		},
		{
			name: "message",
			title: "message",
			type: "string"
		},
		{
			name: "timestamp",
			title: "timestamp",
			type: "datetime"
		},
	]
}