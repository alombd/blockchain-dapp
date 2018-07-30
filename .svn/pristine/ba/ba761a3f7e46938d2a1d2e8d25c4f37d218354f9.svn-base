#Why?

You want to write some code to learn/debug/test solidity contract. 
Unfortunately, you need to compile, create and deploy the contract. In addition, you need to deal with ABI, gas, eth acount, etc.
With create-contract, you can create a ready-to-use contract with two lines of code:

```javascript
var createContract = require('create-contract')
createContract.create('folder1/Contract1.sol').then(function(contract) {
  contract.method1.call()
})

// or
var createContract = require('create-contract')
var contractFileContent = "pragma solidity ^0.4.2; contract { ...} "
createContract.create(contractFileContent).then(function(contract) {
  contract.method1.call()
})
```

#Install
```
  $ npm install create-contract
```

#Usage

##1. Setup Ethereum node

install ethereum node
```
  $ npm install testrpc -g
```

run ethereum node
```
  $ testrpc -p 8545
```

##2. Your contract: Greeter.sol
```javascript
pragma solidity ^0.4.2;

contract Greeter {
  string name;
  uint age;

  function Greeter(string _name, uint _age) {
    name = _name;
    age = _age;
  }

  function greet() returns (string){
    return name;
  }
}
```

##3. Your greeterDebug.js:
```javascript
var createContract = require('create-contract')
var contractFileName = 'example/Greeter.sol'

// method 1: create contract using contract file name
createContract.create(contractFileName, 'Jack', 12)
.then(contract => {
  var result = contract.greet.call()
  console.log('Contract created and deployed:', contract)
  console.log('Result of function call:', result)
})

// method 2: create contract using contract file content
const fs = require('fs')
var contractFileContent = fs.readFileSync(contractFileName, 'utf8');
createContract.create(contractFileContent, 'Kate', 13)
.then( function(contract) {
  var result = contract.greet.call()
  console.log('Result of function call:', result)
})
.catch(err => {
  console.log(err)
})
```

##4. Use your own configuration
```javascript
// this is the default configuration of createContract, you can overwrite any of them
// const contractConfig = {
//   provider: new Web3.providers.HttpProvider('http://localhost:8545'),
//   fromAccount: web3.eth.accounts[0],
//   gasFunction: (bytecode) =>  Math.min(web3.eth.estimateGas({ data: bytecode }) * 2, 3000000),
//   useMaxGas: false  // if this is true, maximum gas will be used by default and gasFunction is ignored
// }

// reconfigure the provider, fromAccount, gas
// Note: you can only modify the configuratino partially
// => your new configuration will be MERGED to the old configuration
var Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
createContract.config({
  provider: new Web3.providers.HttpProvider('http://localhost:8545'),
  fromAccount: web3.eth.accounts[1],
  gasFunction: (bytecode) =>  Math.min(web3.eth.estimateGas({ data: bytecode }) * 2, 3000000),
  // if useMaxGas is true, maximum gas will be used and gasFunction will be ignored
  // if useMaxGas is false, gasFunction will be used to determine the gas when create the contract
  useMaxGas: true
})
// read the modified configuration
console.log('config:', createContract.getConfig())
console.log('provider:', createContract.getProvider())
console.log('fromAccount:', createContract.getFromAccount())
console.log('gas:', createContract.getGas())
```

#More Example
https://github.com/zhenchaochen/create-contract/tree/master/example
