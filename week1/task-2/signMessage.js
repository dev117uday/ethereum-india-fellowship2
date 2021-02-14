const Web3 = require('web3');
let web3 = new Web3("https://rpc.slock.it/goerli")

let addressTwo = process.env.addressTwo;
let privateKey = process.env.PRIVATE_KEY_ONE;

let data = web3.eth.accounts.sign('gEth is Money', privateKey);

console.log("Signed message : ")
console.log(`Data : ${data}`)

let recoverMsg = web3.eth.accounts.recover('gEth is Money', data.signature);

console.log("recover address  : " + recoverMsg)
console.log("original address : " + addressTwo)