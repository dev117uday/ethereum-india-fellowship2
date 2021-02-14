// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract DeadManSwitch {
    address payable owner;
    uint256 balance;
    address payable preSetAddress;
    uint256 blockCountSinceOwner;

    constructor(address preSet) public {
        preSetAddress = preSet;
        owner = msg.sender;
        balance = 1000000000000000;
        blockCountSinceOwner = 0;
    }

    function still_alive() external {
        require(msg.sender == owner);
        blockCountSinceOwner = 0;
    }

    function destroyContract() internal {
        selfdestruct(preSetAddress);
    }

    function transferBalance() internal {
        preSetAddress.transfer(balance);
    }

    function doTransaction() public {
        blockCountSinceOwner = blockCountSinceOwner + 1;
        if (msg.sender != owner && blockCountSinceOwner > 10) {
            transferBalance();
            destroyContract();
        }
    }
}
