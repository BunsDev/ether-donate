import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import NavBar from '../components/NavBar'
import RecentDonations from '../components/RecentDonations'

const Home: NextPage = () => {
  return (
    <div className='min-h-screen'>
      <div className='h-screen flex flex-col'>
        <NavBar />
        <div className='flex flex-col text-center h-full justify-center'>
          <h1 className='text-shadow-xl font-extrabold text-8xl m-3'>ETHER DONATE</h1>
          <p className='m-3'>A website for supporting others and letting others support you by using <span className='gradient-text'>ethereum.</span></p>
          <div className='m-3'>
            <Link href="/newPage">
              <span className='py-3 px-5 gradient-button hover:cursor-pointer'>Create My Page!</span>
            </Link>
          </div>
        </div>
      </div>
      <RecentDonations />
    </div>
  )
}

export default Home
