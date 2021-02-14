const Web3 = require('web3');

let web3 = new Web3("https://rpc.slock.it/goerli")
// let web3 = new Web3("http://127.0.0.1:8545")

let data = web3.eth.accounts.create("some-random-string")

console.log(`Address : + ${data.address}`)
console.log(`Private Key : ${data.privateKey}`)