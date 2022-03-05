//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Transaction {
    struct TransactionStruct {
        address sender;
        address receiver;
        uint amount;
        uint256 timestamp;
        string message;
    }

    mapping (string => string) pages;
    mapping (address => TransactionStruct[]) transactionsByAddress;
    TransactionStruct[] transactions;
    TransactionStruct[] tenLatestTransactions;

    event TransactionEvent(address sender, address receiver, uint amount, uint256 timestamp, string message);

    function addPage(string memory title, string memory pageHash) public {
        pages[title] = pageHash;
    }

    function getPageHash(string memory title) public view returns(string memory) {
        return pages[title];
    }

    function sendTransaction(address receiver, uint amount, string memory message) public {
        TransactionStruct memory newTransaction = TransactionStruct(msg.sender, receiver, amount, block.timestamp, message);
        transactions.push(newTransaction);
        transactionsByAddress[receiver].push(newTransaction);
        tenLatestTransactions.push(newTransaction);
        if (tenLatestTransactions.length > 10) delete tenLatestTransactions[0];
        emit TransactionEvent(msg.sender, receiver, amount, block.timestamp, message);
    }

    function getTransactionsByAddress(address receiver) public view returns(TransactionStruct[] memory) {
        return transactionsByAddress[receiver];
    }

    function getTenLatestTransactions() public view returns(TransactionStruct[] memory) {
        return tenLatestTransactions;
    }
}
