const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Transaction", function () {
  let Transaction;
  let transaction;
  let addr;
  let receiver;

  beforeEach(async function () {
    // deploy the contract and get the test addresses
    Transaction = await ethers.getContractFactory("Transaction");
    [addr, receiver] = await ethers.getSigners();
    transaction = await Transaction.deploy();
  })

  describe("Deployment", function () {
    it("Should have an empty array of pages", async function () {
      expect(await transaction.getPageHash()).to.eql([]);
    })

    it ("Should have an empty array of transactions", async function () {
      expect(await transaction.getTenLatestTransactions()).to.eql([]);
    })
  })

  describe("Transactions", function () {
    it("Should add a new page", async function () {
      const addPageTx = await transaction.addPage("hello", addr.address);
      await addPageTx.wait();
  
      expect(await transaction.getPageHash()).to.eql([`hello - ${addr.address}`]);
    });
  
    it("Should send a transaction", async function () {
      const sendTransactionTx = await transaction.sendTransaction(receiver.address, 1, "hello world");
      await sendTransactionTx.wait();
      
      let transactions = await transaction.getTenLatestTransactions()
      
      expect(transactions.length).to.equal(1);
      expect(transactions[0][0]).to.equal(addr.address);
      expect(transactions[0][1]).to.equal(receiver.address);
      expect(transactions[0][4]).to.equal("hello world");
    })
  })
});
