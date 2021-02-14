# Understanding a smart contract

- First line specifies the license : in this case GPL-3.0
- `pragma` is used to convey some message to compiler, like `once` in C++ to tell it to include this file onces. In this case, it is used to specify the range of versions of solidity compiler on which our code will work
- name of the contract : `Owner`

- contract variables

  - name : `owner`
  - type : `address`
  - visibility : `private`

- `event`

  - name of event : `OwnerSet`
  - event for EVM logging

- `modifier` :

  - name : `isOwner`
  - attached to : `changeOwner` function
  - will allow the `changeOwner` function to execute only when `msg.sender == owner`
  - else will print `Caller is not owner`
  - The function body is inserted where the special symbol "_;" appears in the definition of a modifier. So if condition of modifier is satisfied while calling this function, the function is executed and otherwise, an exception is thrown.

- `constructor()` :

  - `msg.sender` is sender of current call, contract deployer for a constructor    
  - `emit OwnerSet(address(0), owner);` : emit the even `OwnerSet();`

- functions :

  - `changeOwner` : 

    - arguments : `address newOwner`
    - visibility : `public`
    - modifier attached : `isOwner`
    - this event `OwnerSet` will trigger only after the modifier `isOwner` condition is satisfied

  - `getOwner`:

    - function is `external`, means anyone from outside the contract can call it
    - `view` is specified to tell the compiler that it will not modify any data
    - it `returns(address)`

        