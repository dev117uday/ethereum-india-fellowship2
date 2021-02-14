const Web3 = require('web3');
let web3 = new Web3("https://rpc.slock.it/goerli" || "http://127.0.0.1:8545" )
web3.eth.net.getNetworkType().then(console.log)