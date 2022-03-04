import React from 'react'
import NavBar from '../components/NavBar'

const NewPage = () => {
  return (
		<>
			<NavBar />
			<div className='flex flex-col m-10'>
				<input type="Text" placeholder='title' className='shadow-2xl my-5 p-3 w-1/2 rounded-lg outline-none' />
				<textarea placeholder='Description' className='shadow-2xl my-5 p-3 rounded-lg outline-none'></textarea>
				<div>
					<button className='py-3 px-5 gradient-button my-5'>Launch!</button>
				</div>
			</div>
		</>
  )
}

export default NewPage