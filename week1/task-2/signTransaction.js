const Web3 = require('web3');

let web3 = new Web3("https://rpc.slock.it/goerli")

let addressTo = process.env.addressTwo;
let privateKey = process.env.PRIVATE_KEY_TWO;

web3.eth.accounts.signTransaction({
    to: addressTo,
    value: '10000000000',
    gas: 2000000
}, privateKey)
    .then(data => {
        console.log(data);
        web3.eth.sendSignedTransaction(data['rawTransaction'])
            .on('receipt', console.log);
    });
