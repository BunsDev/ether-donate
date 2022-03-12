import React, { useContext, useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { useRouter } from 'next/router';
import { TransactionContext } from '../context/TransactionContext';

const Page = () => {
	const router = useRouter();
	const [title, setTitle] = useState<string>();
	const [description, setDescription] = useState<string>("");
	const [receiver, setReceiver] = useState("");
	const [amount, setAmount] = useState("");
	const [message, setMessage] = useState("");

	const transactionContext = useContext(TransactionContext);

	useEffect(() => {
		const { id } = router.query;
		fetch(`https://ipfs.io/ipfs/${id}`).then(res => res.json().then(data => {
			setTitle(data.title);
			setDescription(data.description.replace("<p>", "<pre>"));
			setReceiver(data.receiver);
		}))
	}, [])

	const sendTransaction = () => {
		const { id } = router.query;
		transactionContext?.makeTransaction(receiver, amount, message, id);
	}

	return (
		<>
			<NavBar />
			<div className='flex m-5 lg:flex-row flex-col-reverse'>
				<div className='shadow-2xl flex-[0.7] m-10 rounded-lg'>
					<h1 className='gradient-text text-7xl p-5'>{title?.toUpperCase()}</h1>
					<p className='p-5 description' dangerouslySetInnerHTML={{__html: description}}></p>
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