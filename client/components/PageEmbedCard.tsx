import React from 'react'
import Image from 'next/image'
import Logo from '../public/Ether Donate Logo.svg'

const PageEmbedCard = () => {
  return (
		<div className='shadow-2xl flex flex-col w-fit text-center p-5 rounded-lg'>
				<div className='gradient-img-frame m-auto'>
					<Image src={Logo} />	
				</div>
				<h1 className='gradient-text text-4xl'>Hello World</h1>
				<p>10 Donators</p>
		</div>
  )
}

export default PageEmbedCard