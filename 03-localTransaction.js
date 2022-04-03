// all these are unlocked in ganache
// we don't need to sign them before transaction for ganache transactions

const Web3 = require("web3");
const web3 = new Web3("HTTP://127.0.0.1:7545");

const account1 = "0xde7cfbD6745A3c464Fc031aC0923949745788A3d";
const account2 = "0x5d0C6b7B82a610004D50f1C41c7a86cCB6D5171B";

web3.eth.getBalance(account1, (err, result) => {
  console.log(`Account1 Balance: ${result}`);
});

web3.eth.sendTransaction({
  from: account1,
  to: account2,
  value: web3.utils.toWei("5", "ether"),
});

web3.eth.getBalance(account2, (err, result) => {
  console.log(`Account2 Balance: ${result}`);
});
