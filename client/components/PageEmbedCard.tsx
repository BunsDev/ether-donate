import React from 'react'
import Image from 'next/image'
import Logo from '../public/Ether Donate Logo.svg'
import Link from 'next/link'

const PageEmbedCard = ({title, donators, id}: {title: string, donators: number, id: string}) => {
	return (
		<Link href={id}>
			<div className='shadow-2xl flex flex-col w-fit text-center p-5 rounded-lg transition-all hover:scale-110 hover:cursor-pointer'>
				<div className='gradient-img-frame m-auto'>
					<Image src={Logo} />
				</div>
				<h1 className='gradient-text text-4xl'>{title}</h1>
				<p>{donators} Donators</p>
			</div>
		</Link>
	)
}

export default PageEmbedCard