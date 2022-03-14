import sanityClient from '@sanity/client';

export const client = sanityClient({
	projectId: 'zw3hbu5b',
	dataset: 'production',
	apiVersion: 'v1',
	// SANITY_TOKEN
	token: process.env.SANITY_TOKEN,
	useCdn: false
})