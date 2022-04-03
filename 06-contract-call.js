var Tx = require("ethereumjs-tx");
const Web3 = require("web3");
const web3 = new Web3(
  "https://ropsten.infura.io/v3/20303cf8115746a5ab04f1ea4fdf267c"
);

const account1 = "0x5128BcfAE45ecc90FCD5d2AFCe6B4f23cDf6Eb65";

const privateKey1 =
  "d00695baea3de6b6f1a69ea6eb8d715c7fb15027c6a334d4b44aa917f6e6b843";

const contractABI = [
  {
    inputs: [],
    name: "retrieve",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "num", type: "uint256" }],
    name: "store",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const contractAddress = "0x39e9A728BBAeAc485A46420c201aE24322EedAD2";

let dapptokenContract = new web3.eth.Contract(contractABI, contractAddress);

dapptokenContract.methods.retrieve().call((err, result) => {
  console.log(result);
});

console.log(dapptokenContract);
