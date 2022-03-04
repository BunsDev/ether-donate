import React from 'react'
import NavBar from '../components/NavBar'
import PageEmbedCard from '../components/PageEmbedCard'

const Explore = () => {
  return (
		<>
			<NavBar />
			<div className='m-10'>
				<h1 className='font-extrabold text-4xl text-shadow-xl mb-5'>Explore</h1>
				<div className='grid grid-cols-3'>
					<PageEmbedCard />
					<PageEmbedCard />
					<PageEmbedCard />
					<PageEmbedCard />
					<PageEmbedCard />
					<PageEmbedCard />
					<PageEmbedCard />
					<PageEmbedCard />
				</div>
			</div>
		</>
  )
}

export default Explore