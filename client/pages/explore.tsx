import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import PageEmbedCard from '../components/PageEmbedCard'
import { client } from '../lib/sanityClient'

const Explore = () => {
	////// VARIABLES //////
	const [pages, setPages] = useState<any>();

	////// USE EFFECTS //////
	useEffect(() => {
		// fetch all pages
		;(async () => {
			const clientRes = await client.fetch(`
				*[_type=="pages"] {
					_id, title, donationsLength
				}			
			`);
			setPages(clientRes);
		})()
	})

	return (
		<>
			<NavBar />
			<div className='m-10'>
				<h1 className='font-extrabold text-4xl text-shadow-xl mb-5'>Explore</h1>
				<div className='grid grid-cols-3'>
					{pages ? pages.map((page: any) => {
						return (<PageEmbedCard title={page.title} donators={page.donationsLength} id={page._id} />)
					}) : null}
				</div>
			</div>
		</>
	)
}

export default Explore