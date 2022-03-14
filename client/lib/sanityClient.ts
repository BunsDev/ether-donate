import sanityClient from '@sanity/client';

export const client = sanityClient({
	projectId: 'zw3hbu5b',
	dataset: 'production',
	apiVersion: 'v1',
	// SANITY_TOKEN
	token: "skfLliLL5bOfoNH5gZb3QsE78K8zDoxDY1qew8s9YeAhFCEeJ2kD8FcJiAMLzmaOudwmK5TcjQTzqUADHBARiWKRdxyL5pL65ssLPrCpKQzJfrIbDoqxyJ2TIPHxj6Djm1swAUY0X6Cto1O8kuI3xyNqSRSfon4pMw9dUatAmhUVQ1ue8OCS",
	useCdn: false
})