import Image from 'next/image'
import React from 'react'
import Logo from '../public/Ether Donate Logo.svg';

const RecentDonationCard = () => {
  return (
		<div className='p-5 mx-10 my-5 shadow-2xl rounded-lg'>
			<div className='flex justify-center my-5'>
				<div className='gradient-img-frame'>
					<Image src={Logo} />	
				</div>
				<h1 className='flex flex-col justify-center m-5'>Has Donated To</h1>
				<div className='gradient-img-frame'>
					<Image src={Logo} />	
				</div>
			</div>
			<div>
				<h1>Amount: 1 ETH</h1>
				<h1>Date/Time: March 3 2022 10.20 P.M.</h1>
				<h1>Message: Hello World!</h1>
			</div>
		</div>
  )
}

export default RecentDonationCard