const Web3 = require('web3');
const fs = require('fs')

let web3 = new Web3("http://127.0.0.1:8545")

async function getBlock() {

    for (let i = 0; i <= 128; i++) {
        await web3.eth.getBlock(i)
            .then(data => {
                let dataToAppend =  data['hash'] + "\n"
                fs.appendFile('128hash.txt',dataToAppend, (err) => {
                    if (err) throw err;
                })
            });
    }
}

getBlock()