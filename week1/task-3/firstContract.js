const Web3 = require('web3');
const { exit } = require('process');
let web3 = new Web3("http://127.0.0.1:8545")

async function getFirstContract() {
    for (let i = 0; i < 11644828; i++) {
        await web3.eth.getBlock(i)
            .then( async (data) => {
                if (data['transactions'].length > 0) {
                    for (let index = 0; index < data['transactions'].length; index++) {
                        let element = data['transactions'][index];
                        await web3.eth.getTransaction(element).then(block => {
                            if (block['to'] === "0" || block['to'] == null) {
                                console.log(block)
                                exit(0)
                            }
                        })
                    }
                }
            });
    }
}

getFirstContract()