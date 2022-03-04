import React from 'react'
import Image from 'next/image'
import Logo from '../public/Ether Donate Logo.svg';
import Link from 'next/link';

const NavBar = () => {
  return (
		<div className='flex justify-between shadow-2xl rounded-full mx-10 my-5'>
			<div className='flex p-3'>
				<Link href="/"><Image src={Logo} width={60} height={60} /></Link>
				<Link href="/explore"><p className='m-auto px-3 font-bold'>Explore</p></Link>
				<Link href="/about"><p className='m-auto px-3 font-bold'>About</p></Link>
			</div>
			<div className='flex px-10 py-5'>
				<button className='px-5 gradient-button'>Login</button>
			</div>
		</div>
  )
}

export default NavBar