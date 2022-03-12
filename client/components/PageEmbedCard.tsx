import React from 'react'
import Link from 'next/link'

const PageEmbedCard = ({title, donators, id}: {title: string, donators: number, id: string}) => {
	return (
		<Link href={id}>
			<div className='shadow-2xl flex flex-col lg:w-3/4 my-3 text-center p-5 rounded-lg transition-all hover:scale-110 hover:cursor-pointer'>
				<h1 className='gradient-text lg:text-4xl text-xl'>{title}</h1>
				<p>{donators} Donators</p>
			</div>
		</Link>
	)
}

export default PageEmbedCard