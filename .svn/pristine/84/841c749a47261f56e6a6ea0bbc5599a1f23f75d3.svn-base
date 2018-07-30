var createContract = require('../lib/index.js')
var contractFileName = 'example/Greeter.sol'

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

// method 1: create contract using contract file name
createContract.create(contractFileName, 'Jack', 12)
.then(contract => {
  var result = contract.greet.call()
  console.log('\nContract created and deployed:', contract)
  console.log('\nResult of function call:', result)
})
.catch(err => {
  console.log(err)
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
