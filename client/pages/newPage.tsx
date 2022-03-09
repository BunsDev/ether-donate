import React, { useContext, useState } from 'react'
import NavBar from '../components/NavBar'
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), {ssr: false});
import 'react-quill/dist/quill.snow.css'
import * as IPFS from 'ipfs-core';
import { TransactionContext } from '../context/TransactionContext';

const NewPage = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState('');
	const transactionContext = useContext(TransactionContext);
	const [isLoading, setIsLoading] = useState(false);

	const launchPage = async () => {
		setIsLoading(true);

		// store the title and description in ipfs
		const ipfs = await IPFS.create();
		const currentAccount = transactionContext?.currentAccount;
		const { cid } = await ipfs.add(JSON.stringify({title, description, receiver: currentAccount}));
		const hash = Array.from(cid['_baseCache'].values())[0];
		
		// store the hash in the smart contract
		transactionContext?.createPage(title, hash).then(() => location.href = "/");
	}

	return (
		<>
			<NavBar />
			<div className='flex flex-col m-10'>
				<input type="Text" placeholder='title' className='shadow-2xl my-5 p-3 w-1/2 rounded-lg outline-none' value={title} onChange={e => setTitle(e.target.value)} />
				<div className='shadow-2xl my-5 p-3 rounded-lg outline-none'>
					<ReactQuill value={description} onChange={setDescription} />
				</div>
				<div>
					<button className='py-3 px-5 gradient-button my-5' onClick={() => isLoading ? null : launchPage() }>{isLoading ? "Loading..." : "Launch!"}</button>
				</div>
			</div>
		</>
	)
}

export default NewPage