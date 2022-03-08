import React, { useContext, useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import PageEmbedCard from '../components/PageEmbedCard'
import { TransactionContext } from '../context/TransactionContext'

const Explore = () => {
	const transactionContext = useContext(TransactionContext);
	const [pages, setPages] = useState<Array<string> | undefined>();

	useEffect(() => setPages(transactionContext?.pages))

	return (
		<>
			<NavBar />
			<div className='m-10'>
				<h1 className='font-extrabold text-4xl text-shadow-xl mb-5'>Explore</h1>
				<div className='grid grid-cols-3'>
					{pages ? pages.map(page => {
						const [title, id] = page.split(" - ");
						return (<PageEmbedCard title={title} donators={0} id={id} />)
					}) : null}
				</div>
			</div>
		</>
	)
}

export default Explore