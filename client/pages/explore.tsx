import React, { useContext, useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import PageEmbedCard from '../components/PageEmbedCard'
import { TransactionContext } from '../context/TransactionContext'
import { client } from '../lib/sanityClient'

const Explore = () => {
	const transactionContext = useContext(TransactionContext);
	const [pages, setPages] = useState<any>();

	useEffect(() => {
		;(async () => {
			const query = `
				*[_type=="pages"] {
					_id, title, donationsLength
				}
			`
			
			const clientRes = await client.fetch(query);
			console.log(clientRes)
			setPages(clientRes)
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