var Tx = require("ethereumjs-tx");
const Web3 = require("web3");
const web3 = new Web3(
  "https://ropsten.infura.io/v3/20303cf8115746a5ab04f1ea4fdf267c"
);

// console.log(web3.eth.accounts.create()); //to create new eth account

// const account1 = "0x8D23D7Ada0DBba611D3B1F1c836aC2fDed80f76F";
const account1 = "0x5128BcfAE45ecc90FCD5d2AFCe6B4f23cDf6Eb65";
// const account2 = "0xEc6d238C4d7848b6dF5df21964864B4A1eA9737e";
const account2 = "0xD06e778e28d5443307B0B3E33f172D05D2aC0D7C";

// const privateKey1 =
//   "b045b84728848a3e90bf087779d0936dfeca1dc49d9236b9924fe687f354135b";
const privateKey1 =
  "d00695baea3de6b6f1a69ea6eb8d715c7fb15027c6a334d4b44aa917f6e6b843";
// const privateKey2 =
//   "f1eaf90230cdc233fd3bb6632b0b30bdc8aab5ed2945ed45deec1b5e7cd0cec1";
const privateKey2 =
  "91fc7eebbd3c8e1b78ca464be425dc197243ac5d68f9e324717e539259eba124";

const privateKey1Buffer = Buffer.from(privateKey1, "hex");
const privateKey2Buffer = Buffer.from(privateKey2, "hex");

console.log("Buffer 1 = ", privateKey1Buffer);
console.log("Buffer 2 = ", privateKey2Buffer);

web3.eth.getTransactionCount(account1, (err, txCount) => {
  // Build the transaction
  const txObject = {
    nonce: web3.utils.toHex(txCount),
    to: account2,
    value: web3.utils.toHex(web3.utils.toWei("0.1", "ether")),
    gasLimit: web3.utils.toHex(21000),
    gasPrice: web3.utils.toHex(web3.utils.toWei("10", "gwei")),
  };

  // Sign the transaction
  const tx = new Tx.Transaction(txObject, { chain: "ropsten" });
  tx.sign(privateKey1Buffer);

  //serialize --> hard drive main content transfer ya network pr kch krne k lye serialize krty hain
  const serializedTx = tx.serialize();
  const raw = "0x" + serializedTx.toString("hex");

  // console.log("tx = ",tx);
  // console.log("serializedTx = ",serializedTx);
  // console.log("raw = ",raw);

  // Broadcast the transaction
  web3.eth.sendSignedTransaction(raw, (err, txHash) => {
    console.log("txHash:", txHash);
  });
});
