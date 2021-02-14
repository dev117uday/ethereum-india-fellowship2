// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract DeadManSwitch {
    address payable owner;
    uint256 balance;
    address payable preSetAddress;
    uint256 blockCountSinceOwner;

    constructor(address payable _preSet) public {
        preSetAddress = _preSet;
        owner = msg.sender;
        balance = 1000000000000000;
        blockCountSinceOwner = 0;
    }

    /**
     * @dev Allows owner to inform he is alive
     */

    function still_alive() external {
        require(msg.sender == owner);
        blockCountSinceOwner = 0;
    }

    /**
     * @dev Destroys contract and send all the balance to preSetAddress
     */

    function destroyContract() internal {
        selfdestruct(preSetAddress);
    }

    function transferBalance() internal {
        preSetAddress.transfer(balance);
    }

    function doTransaction() public returns(bool) {
        blockCountSinceOwner = blockCountSinceOwner + 1;
        if (msg.sender != owner && blockCountSinceOwner > 10) {
            transferBalance();
            destroyContract();
            return false;
        } 
        return true;
    }
}
