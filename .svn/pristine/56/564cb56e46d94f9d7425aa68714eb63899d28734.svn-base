const fs = require('fs')
const Web3 = require('web3')

const DEFAULT_PROVIDER = new Web3.providers.HttpProvider('http://localhost:8545')

const web3 = new Web3(DEFAULT_PROVIDER);

const DEFAULT_FROM_ACCOUNT = web3.eth.accounts[0]

const MAX_GAS = 3000000 

const DEFAULT_GAS_FUNCTION = (bytecode) => {
  // web3.eth.estimateGas is lower than the actually gas required
  return Math.min(web3.eth.estimateGas({ data: bytecode }) * 2, MAX_GAS)
}

const contractConfig = {
  provider: DEFAULT_PROVIDER,
  fromAccount: DEFAULT_FROM_ACCOUNT,
  gasFunction: DEFAULT_GAS_FUNCTION,
  useMaxGas: false
}

const config = (configuration={}) => {
  if (configuration.fromAccount && typeof configuration.fromAccount !== 'string') {
    throw 'configuration.fromAccount should be a string'
  }
  if (configuration.gas && 
      (typeof configuration.fromAccount !== 'number' || configuration.gas < 0)) {
    throw 'configuration.fromAccount should be a non-negative number'
  }
  if (configuration.gasFunction && typeof configuration.gasFunction !== 'function') {
    throw 'configuration.gasFunction should be a function'
  }
  if (configuration.useMaxGas && typeof configuration.useMaxGas !== 'boolean') {
    throw 'configuration.useMaxGas should be true or false'
  }
  Object.assign(contractConfig, configuration)
}

// get configuration of createdContract
const getConfig = () => contractConfig

// provide interface to reconfigure the web3 provider
const setProvider = (provider) => {
  contractConfig.provider = provider
  web3.setProvider(contractConfig.provider)
}

// user may want to get current provider information
const getProvider = () => contractConfig.provider

const setHttp = (httpUrl) => {
  if (!httpUrl.startsWith('http://')) {
    httpUrl = 'http://' + httpUrl
  }
  setProvider(new Web3.providers.HttpProvider(httpUrl))
}

// gas
const getGas = (bytecode='') => {
  if (contractConfig.useMaxGas) return MAX_GAS
  return contractConfig.gasFunction(bytecode)
}

const getFromAccount = () => contractConfig.fromAccount 

const create = (contractSource, ...constructorArgs) => {
  // contractSource could be file name or file content
  let source = contractSource
  if (contractSource.slice(-4) === '.sol') {
    source = fs.readFileSync(contractSource, 'utf8');
  }
  // compile the solidity source code
  const compiled = web3.eth.compile.solidity(source);
  // code will be the machine/binary code of the compiled result
  const bytecode = compiled.code;
  // abi
  const abi = compiled.info.abiDefinition;
  // create a contract class based on abi
  const createdContract = web3.eth.contract(abi)

  const args = {
    from: getFromAccount(),
    data: bytecode,
    gas: getGas(bytecode)
  }

  return new Promise(function (resolve, reject) {
    createdContract.new(
      ...constructorArgs,
      args,
      function (err, contract) {
        if (err) {
          reject(err);
        } else if (contract.address) {
          resolve(contract)
        }
      }
    )
  })
}

module.exports = {
  config,
  getConfig,
  getProvider,
  getGas,
  getFromAccount,

  create,
  setProvider,
  setHttp
}
