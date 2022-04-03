const Web3 = require("web3");

const rpcURL = "HTTP://127.0.0.1:7545";

const web3 = new Web3(rpcURL);

let address = "0xde7cfbD6745A3c464Fc031aC0923949745788A3d";

web3.eth.getBalance(address, (err, wei) => {
    console.log(`Wei: ${wei}`)
    balance = web3.utils.fromWei(wei, 'ether')
    console.log(`Balance: ${balance}`)
})

console.log(web3);

