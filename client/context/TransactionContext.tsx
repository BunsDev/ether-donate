import React, { useEffect, useState } from 'react'

interface TransactionContextInterface {
	currentAccount: any,
	connectWallet: any
}

export const TransactionContext = React.createContext<TransactionContextInterface | null>(null);

let ethereum: any;
if (typeof window !== 'undefined') ethereum = window.ethereum;

const TransactionProvider = ({ children }: any) => {
	const [currentAccount, setCurrentAccount] = useState();

	const connectWallet = async () => {
		const accounts = await ethereum.request({method: 'eth_requestAccounts'});
		setCurrentAccount(accounts[0]);
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
			connectWallet
		}}>
			{children}
		</TransactionContext.Provider>
	)
}

export default TransactionProvider