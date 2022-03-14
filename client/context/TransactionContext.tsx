import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers';
import { transactionAbi, transactionAddress } from '../lib/constants';
import { client } from '../lib/sanityClient';

////// INTERFACES //////
interface TransactionContextInterface {
	currentAccount: any,
	connectWallet: any,
	makeTransaction: any,
	createPage: any
}

////// CONTEXTS //////
export const TransactionContext = React.createContext<TransactionContextInterface | null>(null);

declare const window: any;
let ethereum: any;
if (typeof window !== 'undefined') ethereum = window.ethereum;

////// PROVIDERS //////
const TransactionProvider = ({ children }: any) => {
	////// VARIABLES //////
	const [currentAccount, setCurrentAccount] = useState();
	
	////// FUNCTIONS //////

	// called when the user logins to the website
	const connectWallet = async () => {
		const accounts = await ethereum.request({method: 'eth_requestAccounts'});
		setCurrentAccount(accounts[0]); // set current account to the address of the wallet
	}

	// called when launching a new page
	const createPage = async (title: string, content: string) => {
		// emit an event from the smart contract
		const transactionContract = getTransactionContract();
		const transactionHash = await transactionContract.createPage(title, content);
		await transactionHash.wait();

		// adding the page to the database
		const pageDoc = {
			_type: "pages",
			_id: transactionHash.hash,
			title: title,
			content: content,
			author: currentAccount,
			donationsLength: 0,
			donations: []
		}
		await client.createIfNotExists(pageDoc);

		// redirect the user to the homepage after the launch is finished
		location.href = "/";
	}

	// called when the user made a donation
	const makeTransaction = async (receiver: string, amount: string, message: string, pageHash: string, donationsLength: number) => {
		// make the transaction
		await ethereum.request({
			method: 'eth_sendTransaction',
			params: [{
				from: currentAccount,
				to: receiver,
				gas: "0x5208",
				value: ethers.utils.parseEther(amount)._hex.toString()
			}]
		});

		// emit an event from the smart contract
		const transactionContract = getTransactionContract();
		const transactionHash = await transactionContract.sendTransaction(receiver, amount, message);
		await transactionHash.wait();

		// add the transaction to the database
		const transactionDoc = {
			_type: 'transactions',
			_id: transactionHash.hash,
			sender: currentAccount,
			receiver: receiver,
			amount: parseFloat(amount),
			message: message,
			timestamp: new Date(Date.now()).toISOString()
		}
		await client.createIfNotExists(transactionDoc);

		await client.patch(pageHash).set({ donationsLength: donationsLength + 1 }).commit();

		// redirect the user to the homepage when the transaction is finished
		location.href = "/";
	}
	
	////// PRIVATE FUNCTIONS //////

	// create a smart contract instance
	const getTransactionContract = () => {
		const provider = new ethers.providers.Web3Provider(ethereum);
		const signer = provider.getSigner();
		const contract = new ethers.Contract(transactionAddress!, transactionAbi, signer);
		return contract;
	}

	////// USE EFFECTS //////
	useEffect(() => {
		// authenticate the user
		;(async () => {
			const accounts = await ethereum.request({method: 'eth_accounts'});
			if (accounts.length) setCurrentAccount(accounts[0]);
		})()
	}, [])

	return (
		<TransactionContext.Provider value={{
			currentAccount,
			connectWallet,
			makeTransaction,
			createPage
		}}>
			{children}
		</TransactionContext.Provider>
	)
}

export default TransactionProvider