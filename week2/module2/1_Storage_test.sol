// SPDX-License-Identifier: GPL-3.0
    
pragma solidity >=0.4.22 <0.8.0;
import "remix_tests.sol"; 
// this import is automatically injected by Remix.
import "remix_accounts.sol";
import "../contracts/1_Storage.sol";

// File name has to end with '_test.sol'
// this file can contain more than one testSuite contracts
contract testSuite {

    Storage storage;
    
    function beforeEach() public {
        // Here should instantiate tested contract
        storage = new Storage();
    }

    function checkSuccess() public {
        uint z = storage.retrieve();
        Assert.equal(uint(z),uint(0),"not equal");
    }

    function checkSuccess2() public returns (bool) {
        storage.store(uint(10));
        uint z = storage.retrieve();
        Assert.equal(uint(z),uint(10),"not equal");
    }
    
    function checkSuccess3() public returns(bool) {
        storage.store(uint(20));
        uint z = storage.retrieve();
        Assert.equal(uint(z),uint(20),"not equal");
    }
    
}
