import React from 'react'
import NavBar from '../components/NavBar'

const About = () => {
  return (
    <div className='min-h-screen'>
			<div className='h-screen flex flex-col'>
				<NavBar />
				<div className='m-10 flex flex-col h-full justify-center'>
					<h1 className='font-extrabold text-4xl text-shadow-xl'>ABOUT</h1>
					<br />
					<p>Ether Donate is an Ethereum donation website. You can use this website for anything, like <span className='gradient-text'>startups, fundraisers, donations.</span></p>
					<br />
					<p>This website is decentralized; the <span className='gradient-text'>Ethereum Blockchain</span> powers it. This website will store all of its data in <span className='gradient-text'>IPFS.</span></p>
					<br />
					<p>This website is open source too! Check it out on <a href="https://github.com/Zeno3463/ether-donate" className='gradient-text border-b-2 border-[#CD113B]'>Github</a> (plz star it ^_^)!</p>
					<br />
					<p>Author: Zeno</p>
					<p>Version: 0.1.0</p>
					<p>Date of creation: XXX</p>
				</div>
			</div>

		</div>
  )
}

export default About