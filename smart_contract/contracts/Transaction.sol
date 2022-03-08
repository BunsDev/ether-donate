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

    string[] pages;
    mapping (address => TransactionStruct[]) transactionsByAddress;
    TransactionStruct[] transactions;
    TransactionStruct[] tenLatestTransactions;

    event TransactionEvent(address sender, address receiver, uint amount, uint256 timestamp, string message);

    function addPage(string memory title, string memory pageHash) public {
        pages.push(string(bytes.concat(bytes(title), " - ", bytes(pageHash))));
    }

    function getPageHash() public view returns(string[] memory) {
        return pages;
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
