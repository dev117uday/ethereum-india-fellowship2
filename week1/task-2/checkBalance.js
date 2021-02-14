const Web3 = require('web3');
require('dotenv').config();
let web3 = new Web3("https://rpc.slock.it/goerli")

// let web3 = new Web3("http://127.0.0.1:8545")

let addressOne = process.env.addressOne;
let addressTwo = process.env.addressTwo;

web3.eth.getBalance(addressOne).then(data => {
    console.log(data)
})

web3.eth.getBalance(addressTwo).then(data => {
    console.log(data)
})