import sanityClient from '@sanity/client';

export const client = sanityClient({
	projectId: 'n5xwp5dk',
	dataset: 'production',
	apiVersion: 'v1',
	token: 'sk563dVGNwW69IuE7slDyikXnWWb7K1eqJFy6GRBhMlZXttC3DRDzBlsbmKtkP07InEpRIZyql4m1e1b0hTmni2sOynZFIQxFxGZZbabJ00QpjIR39PaViR1yN71OZ3IllZdgLOpW8T6qBm4nULgzXCti4YZdcjjmFqU6XT9DKGxaaPHQ9aZ',
	useCdn: false
})