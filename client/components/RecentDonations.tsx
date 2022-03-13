import React, { useEffect, useState } from 'react'
import { client } from '../lib/sanityClient'
import RecentDonationCard from './RecentDonationCard'

const RecentDonations = () => {
	////// VARIABLES //////
	const [donations, setDonations] = useState<any>();

	////// USE EFFECTS //////
	useEffect(() => {
		;(async () => {
			// fetch the first 10 transactions
			const clientRes = await client.fetch(`
				*[_type == "transactions"][0...10]
			`)

			setDonations(clientRes);
		})()
	})

	return (
		<>
			<h1 className='font-extrabold md:text-4xl text-shadow-xl m-10'>RECENT DONATIONS</h1>
			<div className='grid md:grid-cols-2'>
				{donations?.map((donation: any) => <RecentDonationCard data={donation} />)}
			</div>
		</>
	)
}

export default RecentDonations