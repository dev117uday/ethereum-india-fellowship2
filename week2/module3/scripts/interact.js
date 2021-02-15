const hardhat = require("hardhat");

async function getAddress() {
    let contract = await hardhat.ethers.getContractFactory("Owner");
    let ownerContract = await contract.deploy();
    let address = await ownerContract.getOwner();
    console.log(`Current Owner Address: ${address}`);
    let addressBytes = ethers.utils.formatBytes32String("Address")
    console.log(`Address in string after conversion ${addressBytes}`);
};

getAddress()


  