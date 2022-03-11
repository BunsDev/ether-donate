import React from 'react'
import RecentDonationCard from './RecentDonationCard'

const RecentDonations = () => {
	return (
		<>
			<h1 className='font-extrabold md:text-4xl text-shadow-xl m-10'>RECENT DONATIONS</h1>
			<div className='grid md:grid-cols-2'>
				<RecentDonationCard />
				<RecentDonationCard />
				<RecentDonationCard />
				<RecentDonationCard />
				<RecentDonationCard />
			</div>
		</>
	)
}

export default RecentDonations