const Web3 = require('web3');
const { MerkleTree } = require('merkletreejs')
const SHA256 = require('crypto-js/sha256')

let web3 = new Web3("http://127.0.0.1:8545")

let blockArray = [];

async function getBlock() {
    for (let i = 0; i <= 1; i++) {
        await web3.eth.getBlock(i)
            .then(data => {
                blockArray.push(data['hash'])
            });
    }
    let tree = new MerkleTree(blockArray, SHA256)
    let root = tree.getRoot().toString('hex')
    console.log(root)
}

getBlock()

