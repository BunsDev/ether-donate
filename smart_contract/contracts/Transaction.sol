//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Transaction {
    ////// EVENTS //////
    event TransactionEvent(address sender, address receiver, uint amount, uint256 timestamp, string message);
    event CreatePageEvent(address creatorAddress, uint256 timestamp, string title, string content);

    ////// FUNCTIONS //////
    function sendTransaction(address receiver, uint amount, string memory message) public {
        emit TransactionEvent(msg.sender, receiver, amount, block.timestamp, message);
    }

    function createPage(string memory title, string memory content) public {
        emit CreatePageEvent(msg.sender, block.timestamp, title, content);
    }
}
