import React from 'react'
import NavBar from '../components/NavBar'
import * as IPFS from 'ipfs-core';

const Page = () => {
	return (
		<>
			<NavBar />
			<div className='flex m-5'>
				<div className='shadow-2xl flex-[0.7] m-10 rounded-lg'>
					<h1 className='gradient-text text-7xl p-5'>TITLE</h1>
					<p className='p-5'>Lorem ipsum dolor sit Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi corporis adipisci ab dolore animi. Repudiandae quis quisquam quod delectus pariatur mollitia ipsa esse illo excepturi architecto tenetur ratione, asperiores in. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro repudiandae inventore iure vel? Quod cumque veritatis numquam obcaecati voluptas, facilis at commodi! Non enim deleniti minus ea, corporis fugit nulla! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, explicabo suscipit. Tenetur ipsam corrupti dolores magnam. Quam enim error assumenda soluta sint dolores. Delectus, velit obcaecati consequatur natus deserunt quaerat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dicta tempore. Iusto sequi dolorum deserunt, alias vero consectetur accusamus, exercitationem consequuntur, beatae dolor quam eius eaque fugit a distinctio quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ut quia eveniet fugit autem libero, nisi ducimus voluptates delectus expedita quod neque quidem ipsa inventore perspiciatis laborum ullam incidunt at? amet consectetur adipisicing elit. Officia quidem consequatur necessitatibus? Necessitatibus culpa fugit, cupiditate in sapiente quidem quae neque doloribus reprehenderit, mollitia vero magnam enim odio! Tempore, inventore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque exercitationem, provident natus laborum commodi a ut inventore vero voluptates nemo pariatur soluta perferendis quidem dolore mollitia. Eos nobis dicta doloribus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat totam, esse quidem veniam voluptatem temporibus repellat quibusdam obcaecati a corrupti excepturi pariatur non beatae animi mollitia maxime eos magnam amet!</p>
				</div>
				<div className='bg-[#0D0D0D] h-fit flex flex-col m-10 p-4 rounded-lg flex-[0.3]'>
					<div className="rounded-lg m-1 p-0.5 bg-gradient-to-r my-2 from-[#CD113B] to-[#52006A]">
						<input type="number" placeholder='Amount' min={0} className="flex w-full flex-col outline-none justify-between bg-[#0D0D0D] text-white rounded-lg p-2" />
					</div>
					<div className="rounded-lg m-1 p-0.5 bg-gradient-to-r my-2 from-[#CD113B] to-[#52006A]">
						<textarea placeholder='Message' className="flex w-full h-40 flex-col outline-none justify-between bg-[#0D0D0D] text-white rounded-lg p-2" />
					</div>
					<button className='py-2 gradient-button my-2'>Donate</button>
				</div>
			</div>
		</>
	)
}

export default Page