import React from 'react'

const RecentDonationCard = () => {
	return (
		<div className='md:p-5 mx-10 my-5 shadow-2xl rounded-lg'>
			<div className='flex justify-center my-5'>
				<h1 className='gradient-text my-5 overflow-hidden text-2xl'>
					0x2546BcD3c84621e976D8185a91A922aE77ECEc30
				</h1>
				<h1 className='my-6 w-full text-center'>Has Donated To</h1>
				<h1 className='gradient-text my-5 overflow-hidden text-2xl'>
					0x2546BcD3c84621e976D8185a91A922aE77ECEc30
				</h1>
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