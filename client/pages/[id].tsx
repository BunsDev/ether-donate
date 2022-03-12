import React, { useContext, useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { useRouter } from 'next/router';
import { TransactionContext } from '../context/TransactionContext';
import { client } from '../lib/sanityClient';

const Page = () => {
	const router = useRouter();
	const [title, setTitle] = useState<string>();
	const [content, setContent] = useState<string>("");
	const [receiver, setReceiver] = useState("");
	const [amount, setAmount] = useState("");
	const [message, setMessage] = useState("");

	const transactionContext = useContext(TransactionContext);

	useEffect(() => {
		;(async () => {
			const { id } = router.query;
			const query = `			
				*[_type == "pages" && _id == "${id}"] {
					title, content, author, donations
				}
			`
			const clientRes = await client.fetch(query);
			setTitle(clientRes[0]?.title);
			setContent(clientRes[0]?.content);
			setReceiver(clientRes[0]?.author);
		})()
	})

	const sendTransaction = () => {
		const { id } = router.query;
		transactionContext?.makeTransaction(receiver, amount, message, id);
	}

	return (
		<>
			<NavBar />
			<div className='flex m-5 lg:flex-row flex-col'>
				<div className='shadow-2xl flex-[0.7] m-10 rounded-lg'>
					<h1 className='gradient-text text-7xl p-5'>{title?.toUpperCase()}</h1>
					<p className='p-5 content' dangerouslySetInnerHTML={{__html: content}}></p>
				</div>
				<div className='bg-[#0D0D0D] h-fit flex flex-col m-10 p-4 rounded-lg flex-[0.3]'>
					<div className="rounded-lg m-1 p-0.5 bg-gradient-to-r my-2 from-[#CD113B] to-[#52006A]">
						<input type="number" onChange={e => setAmount(e.target.value)} placeholder='Amount' min={0} className="flex w-full flex-col outline-none justify-between bg-[#0D0D0D] text-white rounded-lg p-2" />
					</div>
					<div className="rounded-lg m-1 p-0.5 bg-gradient-to-r my-2 from-[#CD113B] to-[#52006A]">
						<textarea placeholder='Message' onChange={e => setMessage(e.target.value)} className="flex w-full h-40 flex-col outline-none justify-between bg-[#0D0D0D] text-white rounded-lg p-2" />
					</div>
					<button className='py-2 gradient-button my-2' onClick={sendTransaction}>Donate</button>
				</div>
			</div>
		</>
	)
}

export default Page