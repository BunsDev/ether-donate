import React, { useContext } from 'react'
import Image from 'next/image'
import Logo from '../public/Ether Donate Logo.svg';
import Link from 'next/link';
import { TransactionContext } from '../context/TransactionContext';

const NavBar = () => {
	const transactionContext = useContext(TransactionContext);

	return (
		<div className='flex justify-between shadow-2xl rounded-full mx-10 my-5'>
			<div className='flex p-3'>
				<Link href="/"><Image src={Logo} className='hover:cursor-pointer' width={60} height={60} /></Link>
				<Link href="/explore"><p className='m-auto px-3 font-bold hover:cursor-pointer hover:text-shadow-md transition-all'>Explore</p></Link>
				<Link href="/about"><p className='m-auto px-3 font-bold hover:cursor-pointer hover:text-shadow-md transition-all'>About</p></Link>
			</div>
			<div className='flex px-10 py-5'>
				<button className='px-5 gradient-button' onClick={transactionContext?.connectWallet}>{transactionContext?.currentAccount || 'Login'}</button>
			</div>
		</div>
	)
}

export default NavBar