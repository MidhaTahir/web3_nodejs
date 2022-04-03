var Tx = require("ethereumjs-tx");
const Web3 = require("web3");
const web3 = new Web3(
  "https://ropsten.infura.io/v3/20303cf8115746a5ab04f1ea4fdf267c"
);

// console.log(web3.eth.accounts.create()); //to create new eth account

const account1 = "0x5128BcfAE45ecc90FCD5d2AFCe6B4f23cDf6Eb65";

const privateKey1 =
  "d00695baea3de6b6f1a69ea6eb8d715c7fb15027c6a334d4b44aa917f6e6b843";

const privateKey1Buffer = Buffer.from(privateKey1, "hex");

console.log("Buffer 1 = ", privateKey1Buffer);

web3.eth.getTransactionCount(account1, (err, txCount) => {
  //compile smart contract (compiled down bytecode convereted to hexadecimal values)
  const data =
    "0x608060405234801561001057600080fd5b50610150806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80632e64cec11461003b5780636057361d14610059575b600080fd5b610043610075565b60405161005091906100d9565b60405180910390f35b610073600480360381019061006e919061009d565b61007e565b005b60008054905090565b8060008190555050565b60008135905061009781610103565b92915050565b6000602082840312156100b3576100b26100fe565b5b60006100c184828501610088565b91505092915050565b6100d3816100f4565b82525050565b60006020820190506100ee60008301846100ca565b92915050565b6000819050919050565b600080fd5b61010c816100f4565b811461011757600080fd5b5056fea2646970667358221220404e37f487a89a932dca5e77faaf6ca2de3b991f93d230604b1b8daaef64766264736f6c63430008070033";

  const txObject = {
    nonce: web3.utils.toHex(txCount),
    gasLimit: web3.utils.toHex(1000000), // Raise the gas limit to a much higher amount  for deploying a contract
    gasPrice: web3.utils.toHex(web3.utils.toWei("10", "gwei")),
    data: data,
  };

  const tx = new Tx.Transaction(txObject, { chain: "ropsten" });
  tx.sign(privateKey1Buffer);

  const serializedTx = tx.serialize();
  const raw = "0x" + serializedTx.toString("hex");

  web3.eth.sendSignedTransaction(raw, (err, txHash) => {
    console.log("txHash:", txHash);
  });
});
