//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Transaction {
    ////// STRUCTS //////
    struct TransactionStruct {
        address sender;
        address receiver;
        uint amount;
        uint256 timestamp;
        string message;
    }
    struct PageStruct {
        string title;
        string pageHash;
        uint numOfDonations;
    }

    ////// VARIABLES //////
    PageStruct[] pages;
    TransactionStruct[] transactions;
    TransactionStruct[] tenLatestTransactions;

    ////// EVENTS //////
    event TransactionEvent(address sender, address receiver, uint amount, uint256 timestamp, string message);

    ////// FUNCTIONS //////
    function addPage(string memory title, string memory pageHash) public {
        pages.push(PageStruct({
            title: title,
            pageHash: pageHash,
            numOfDonations: 0
        }));
    }

    function getPages() public view returns(PageStruct[] memory) {
        return pages;
    }

    function sendTransaction(address receiver, uint amount, string memory message, string memory pageHash) public {
        TransactionStruct memory newTransaction = TransactionStruct(msg.sender, receiver, amount, block.timestamp, message);
        transactions.push(newTransaction);
        tenLatestTransactions.push(newTransaction);
        for (uint i = 0; i < pages.length; i++) {
            if (keccak256(abi.encodePacked(pages[i].pageHash)) == keccak256(abi.encodePacked(pageHash))) {
                pages[i].numOfDonations++;
                break;
            }
        }
        if (tenLatestTransactions.length > 10) delete tenLatestTransactions[0];
        emit TransactionEvent(msg.sender, receiver, amount, block.timestamp, message);
    }

    function getTenLatestTransactions() public view returns(TransactionStruct[] memory) {
        return tenLatestTransactions;
    }
}
