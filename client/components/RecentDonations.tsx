import React from 'react'
import RecentDonationCard from './RecentDonationCard'

const RecentDonations = () => {
  return (
		<>
			<h1 className='font-extrabold text-4xl text-shadow-xl m-10'>RECENT DONATIONS</h1>
			<div className='grid grid-cols-2'>
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