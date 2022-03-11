import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers';
import { transactionAbi, transactionAddress } from '../lib/constants';
import { client } from '../lib/sanityClient';

interface TransactionContextInterface {
	currentAccount: any,
	connectWallet: any,
	makeTransaction: any
}

export const TransactionContext = React.createContext<TransactionContextInterface | null>(null);

let ethereum: any;
if (typeof window !== 'undefined') ethereum = window.ethereum;

const getTransactionContract = () => {
	const provider = new ethers.providers.Web3Provider(ethereum);
	const signer = provider.getSigner();
	const contract = new ethers.Contract(transactionAddress, transactionAbi, signer);
	return contract;
}

const TransactionProvider = ({ children }: any) => {
	const [currentAccount, setCurrentAccount] = useState();

	const connectWallet = async () => {
		const accounts = await ethereum.request({method: 'eth_requestAccounts'});
		setCurrentAccount(accounts[0]);
	}

	const makeTransaction = async (receiver: string, amount: string, message: string, pageHash: string) => {
		await ethereum.request({
			method: 'eth_sendTransaction',
			params: [{
				from: currentAccount,
				to: receiver,
				gas: "0x5208",
				value: ethers.utils.parseEther(amount)._hex
			}]
		});

		const transactionContract = getTransactionContract();
		const transactionHash = await transactionContract.sendTransaction(receiver, amount, message, pageHash);
		await transactionHash.wait();

		// add the transaction to the database
		const transactionDoc = {
			_type: 'transactions',
			_id: transactionHash,
			sender: currentAccount,
			receiver: receiver,
			amount: parseFloat(amount),
			message: message,
			timestamp: new Date(Date.now()).toISOString(),
			transactionHash: transactionHash
		}

		await client.createIfNotExists(transactionDoc);
	}

	useEffect(() => {
		const checkAccount = async () => {
			const accounts = await ethereum.request({method: 'eth_accounts'});
			if (accounts.length) setCurrentAccount(accounts[0]);
		}
		checkAccount();
	}, [])

	return (
		<TransactionContext.Provider value={{
			currentAccount,
			connectWallet,
			makeTransaction
		}}>
			{children}
		</TransactionContext.Provider>
	)
}

export default TransactionProvider