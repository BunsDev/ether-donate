import React, { useContext, useState } from 'react'
import NavBar from '../components/NavBar'
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), {ssr: false});
import 'react-quill/dist/quill.snow.css'
import { TransactionContext } from '../context/TransactionContext';

const NewPage = () => {
	////// VARIABLES //////
	const [title, setTitle] = useState("");
	const [content, setContent] = useState('');
	const transactionContext = useContext(TransactionContext);
	const [isLoading, setIsLoading] = useState(false);

	////// FUNCTIONS //////
	const launchPage = async () => {
		setIsLoading(true);
		await transactionContext?.createPage(title, content);
	}

	return (
		<>
			<NavBar />
			<div className='flex flex-col m-10'>
				<input type="Text" placeholder='title' className='shadow-2xl my-5 p-3 w-1/2 rounded-lg outline-none' value={title} onChange={e => setTitle(e.target.value)} />
				<div className='shadow-2xl my-5 p-3 rounded-lg outline-none'>
					<ReactQuill value={content} onChange={setContent} />
				</div>
				<div>
					<button className='py-3 px-5 gradient-button my-5' onClick={() => isLoading ? null : launchPage() }>{isLoading ? "Loading..." : "Launch!"}</button>
				</div>
			</div>
		</>
	)
}

export default NewPage