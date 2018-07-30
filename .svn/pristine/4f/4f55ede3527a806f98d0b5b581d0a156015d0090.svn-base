'use strict';

var fs = require('fs');
var Web3 = require('web3');

var DEFAULT_PROVIDER = new Web3.providers.HttpProvider('http://localhost:8545');

var web3 = new Web3(DEFAULT_PROVIDER);

var DEFAULT_FROM_ACCOUNT = web3.eth.accounts[0];

var MAX_GAS = 3000000;

var DEFAULT_GAS_FUNCTION = function DEFAULT_GAS_FUNCTION(bytecode) {
  // web3.eth.estimateGas is lower than the actually gas required
  return Math.min(web3.eth.estimateGas({ data: bytecode }) * 2, MAX_GAS);
};

var contractConfig = {
  provider: DEFAULT_PROVIDER,
  fromAccount: DEFAULT_FROM_ACCOUNT,
  gasFunction: DEFAULT_GAS_FUNCTION,
  useMaxGas: false
};

var config = function config() {
  var configuration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (configuration.fromAccount && typeof configuration.fromAccount !== 'string') {
    throw 'configuration.fromAccount should be a string';
  }
  if (configuration.gas && (typeof configuration.fromAccount !== 'number' || configuration.gas < 0)) {
    throw 'configuration.fromAccount should be a non-negative number';
  }
  if (configuration.gasFunction && typeof configuration.gasFunction !== 'function') {
    throw 'configuration.gasFunction should be a function';
  }
  if (configuration.useMaxGas && typeof configuration.useMaxGas !== 'boolean') {
    throw 'configuration.useMaxGas should be true or false';
  }
  Object.assign(contractConfig, configuration);
};

// get configuration of createdContract
var getConfig = function getConfig() {
  return contractConfig;
};

// provide interface to reconfigure the web3 provider
var setProvider = function setProvider(provider) {
  contractConfig.provider = provider;
  web3.setProvider(contractConfig.provider);
};

// user may want to get current provider information
var getProvider = function getProvider() {
  return contractConfig.provider;
};

var setHttp = function setHttp(httpUrl) {
  if (!httpUrl.startsWith('http://')) {
    httpUrl = 'http://' + httpUrl;
  }
  setProvider(new Web3.providers.HttpProvider(httpUrl));
};

// gas
var getGas = function getGas() {
  var bytecode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  if (contractConfig.useMaxGas) return MAX_GAS;
  return contractConfig.gasFunction(bytecode);
};

var getFromAccount = function getFromAccount() {
  return contractConfig.fromAccount;
};

var create = function create(contractSource) {
  for (var _len = arguments.length, constructorArgs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    constructorArgs[_key - 1] = arguments[_key];
  }

  // contractSource could be file name or file content
  var source = contractSource;
  if (contractSource.slice(-4) === '.sol') {
    source = fs.readFileSync(contractSource, 'utf8');
  }
  // compile the solidity source code
  var compiled = web3.eth.compile.solidity(source);
  // code will be the machine/binary code of the compiled result
  var bytecode = compiled.code;
  // abi
  var abi = compiled.info.abiDefinition;
  // create a contract class based on abi
  var createdContract = web3.eth.contract(abi);

  var args = {
    from: getFromAccount(),
    data: bytecode,
    gas: getGas(bytecode)
  };

  return new Promise(function (resolve, reject) {
    createdContract.new.apply(createdContract, constructorArgs.concat([args, function (err, contract) {
      if (err) {
        reject(err);
      } else if (contract.address) {
        resolve(contract);
      }
    }]));
  });
};

module.exports = {
  config: config,
  getConfig: getConfig,
  getProvider: getProvider,
  getGas: getGas,
  getFromAccount: getFromAccount,

  create: create,
  setProvider: setProvider,
  setHttp: setHttp
};