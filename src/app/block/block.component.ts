import { Component, OnInit, ViewChild} from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {Http, Response, Headers, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map';
const Web3 = require('web3');
const contract = require('truffle-contract');
const IPFS = require('ipfs-mini');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
const Readable = require('readable-stream').Readable
var Buffer = require('buffer/').Buffer  
var createContract = require('create-contract');
const SimpleStorage = require('../../../build/contracts/SimpleStorage.json');

@Component({
   selector: 'app-block',
   templateUrl: './block.component.html',
   styleUrls: ['./block.component.css']
})

export class BlockComponent implements OnInit {
    
      formdata;
      cutomerdata;
      account: any;
      accounts: any;
      web3: any;

      balance: number;
      blockNum :number;
      tnumber :number;
      peerCount : number;
      maxBlocks = 50;
      blocks = [];
      networkName;
      bal: number;
      sendingAmount: number;
      recipientAddress: string;
      status: string;

  constructor(private http: Http) {
      this.checkAndInstantiateWeb3();
      this.onReady();
  } 
    

  checkAndInstantiateWeb3() {
      // Checking if Web3 has been injected by the browser (Mist/MetaMask)
      this.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
      if (typeof this.web3 !== 'undefined') {
        console.warn('Using web3 detected from external source. If you find that your accounts don\'t appear or you have ' +
          '0 MetaCoin, ensure you\'ve configured that source properly. If using MetaMask, see the following link. Feel ' +
          'free to delete this warning. :) http://truffleframework.com/tutorials/truffle-and-metamask');
        // Use Mist/MetaMask's provider
        this.web3 = new Web3(this.web3.currentProvider);
      } else {
        console.warn('No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when ' +
          'you deploy live, as it\'s inherently insecure. Consider switching to Metamask for development. More info ' +
          'here: http://truffleframework.com/tutorials/truffle-and-metamask');
        // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
        this.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
      }
      //console.log(this.web3.isConnected());
  }
  //the blocks you mined
    minedBlocks(lastn, addr) {
        var addrs = [];
        if (!addr) {
          addr = this.web3.eth.coinbase
        }
        var limit = this.web3.eth.blockNumber - lastn
        for (var i = this.web3.eth.blockNumber; i >= limit; i--) {
          if (this.web3.eth.getBlock(i).miner == addr ) {
            addrs.push(i)
          }
        }
        return addrs
    }
    //the transection blocks you mined
    minedTransectionBlocks(lastn, addr) {
      var addrs = [];
      if (!addr) {
        addr = this.web3.eth.coinbase
      }
      var limit = this.web3.eth.blockNumber - lastn
      for (var i = this.web3.eth.blockNumber; i >= limit; i--) {
        if (this.web3.eth.getBlock(i).miner == addr && this.web3.eth.getBlock(i).transactions!='') {
          addrs.push(i)
        }
      }
      return addrs
    }
    //the specific contract transection blocks you mined
    minedspecificcontractTransectionBlocks(lastn, addr) {
      var addrs = [];
      if (!addr) {
        addr = this.web3.eth.coinbase
      }
      var limit = this.web3.eth.blockNumber - lastn
      for (var i = this.web3.eth.blockNumber; i >= limit; i--) {
        if (this.web3.eth.getBlock(i).miner == addr && this.web3.eth.getBlock(i).transactions!='') {
          addrs.push(i)
        }
      } 
      return addrs
    }
    //truffle compiled contract uses
    contract_truffle(){
        const simpleStorage = contract(SimpleStorage);
        console.log(simpleStorage);
        // var MyContract = contract(myContractDef);
        //var bytecode = simpleStorage['contractName'].bytecode;
        var interfac = simpleStorage.abi;
        // give it web3 powers!
        console.log(interfac);
        var Contract = this.web3.eth.contract(interfac);
        var truffle = Contract.at('0x1D80Af230E8A42cfDF367Eba08Fc260F8789D745');
        console.log(truffle);
        
          //directly.....................................
        const pass = "Samsunnahar";
        try {
          this.web3.personal.unlockAccount(this.web3.eth.coinbase, pass);
        } catch(e) {
          console.log(e);
          return;
        }
        var code = "<..... Contract Byte Code from online contract editor ...>";
        var name= "amdad";
        truffle.set(name,{from:this.web3.eth.coinbase,"data" : code, "gas" : 4700000}, function(error, result){
            if(!error) {
              console.log("#hfgdsgdsg" + result + "#")
            } else {
                console.error(error);
            }
        })
        truffle.get({from:this.web3.eth.coinbase,},function(error, result){
          if(!error)
              {
                  //$("#instructor").html(result[0]+' ('+result[1]+' years old)');
                  console.log("#result=" +result[0]);
              }
          else
              console.error(error);
        });
      
    }
    khotian_contract(){
      var CoursetroContract = this.web3.eth.contract([ { "constant": false, "inputs": [ { "name": "y", "type": "uint256" } ], "name": "setkhatian", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getkhatian", "outputs": [ { "name": "", "type": "uint256", "value": "50" } ], "payable": false, "stateMutability": "view", "type": "function" } ]);
      var Coursetro = CoursetroContract.at('0xA03fb78a220F149fB1FFF221609b4e1239E39c0b');
      Coursetro.getkhatian(function(error, result){
        if(!error)
            {
                //$("#instructor").html(result[0]+' ('+result[1]+' years old)');
               console.log(result);
            }
        else
            console.error(error);
      });
    }
    ipfs(){
      ipfs.add('hello world!', (err, result) => {
        //console.log(err, result);
      });
      
      // result null 'QmTp2hEo8eXRp6wg7jXv1BLCMh5a4F3B7buAUZNZUu772j'
      
      ipfs.cat('QmTp2hEo8eXRp6wg7jXv1BLCMh5a4F3B7buAUZNZUu772j', (err, result) => {
        //console.log(err, result);
      });
      
      // result null 'hello world!'
      
      ipfs.addJSON({ somevalue: 2, name: 'Nick' }, (err, result) => {
       // console.log(err, result);
      });
      
      // result null 'QmTp2hEo8eXRp6wg7jXv1BLCMh5a4F3B7buAUZNZUu772j'
      
      ipfs.catJSON('QmTp2hEo8eXRp6wg7jXv1BLCMh5a4F3B7buAUZNZUu772j', (err, result) => {
       // console.log(err, result);
      });
      ipfs.stat('QmTp2hEo8eXRp6wg7jXv1BLCMh5a4F3B7buAUZNZUu772j', (err, result) => {
        //console.log(err, result);
      });

    }
    //get transections of a block number
    getTransactionInfos(blocknumber){
        var deferred 

        this.web3.eth.getTransaction(blocknumber,function(error, result) {
            if(!error){
                deferred.resolve(result);
            }
            else{
                deferred.reject(error);
            }
        });
        return deferred.promise;

    }
    //your submitted transections
    myTransections(event) {
      var block = [];
      this.blockNum = parseInt(this.web3.eth.blockNumber, 10);
        if (this.maxBlocks > this.blockNum) {
            this.maxBlocks = this.blockNum + 1;
        }

        // get latest 50 blocks
       
        for (var i = 0; i < this.maxBlocks; ++i) {
            block.push(this.web3.eth.getBlock(this.blockNum - i));
            //console.log(this.blocks)

        }
        this.blocks =block;
    }
    //the blocks you mined
    myminedblocks(event) {
      var block = [];
      var addrs = []; 
      addrs=this.minedBlocks(50, this.web3.eth.coinbase)
      //console.log(addrs);
      for (var i = 0; i < addrs.length; i++) {
        block.push(this.web3.eth.getBlock(addrs[i]));
        //console.log(this.blocks)

      }
      this.blocks =block;
    }
    //pending transections
    pending(event) {
      var block = [];
      var addrs = []; 
      addrs=this.minedTransectionBlocks(50, this.web3.eth.coinbase)
      //console.log(addrs);
      for (var i = 0; i < addrs.length; i++) {
        block.push(this.web3.eth.getBlock(addrs[i]));
        //console.log(this.blocks)

      }
      this.blocks =block;
    }
    //transections for khotians
    khotian_transectons(event) {
      var block = [];
      block.push();
      this.blocks =block;
    }
    onReady() {
      var addrs = []; 
      this.web3.eth.getAccounts((err, accs) => {
        if (err != null) {
          alert('There was an error fetching your accounts.');
         
          return;
        }

        if (accs.length === 0) {
          alert('Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.');
          return;
        }
        this.accounts = accs;
        this.account = this.accounts[0];
        this.bal =this.web3.eth.getBalance(this.account)/1000000000000000000;
        this.tnumber = this.web3.eth.getTransactionCount(this.web3.eth.coinbase);
        this.peerCount=this.web3.net.peerCount;
        this.blockNum = parseInt(this.web3.eth.blockNumber, 10);
        if (this.maxBlocks > this.blockNum) {
            this.maxBlocks = this.blockNum + 1;
        }

        // get latest 50 blocks
        var block = [];
        for (var i = 0; i < this.maxBlocks; ++i) {
            block.push(this.web3.eth.getBlock(this.blockNum - i));

        }
        this.blocks =block;
       // console.log(this.bal);
        //this.refreshBalance();
         // TODO: into setting file or user select
	     
       // console.log(this.blocks[0]);
      });
      
      this.web3.version.getNetwork((err, networkId) => {
        switch (networkId) {
          case "1":
            this.networkName = "Main";
            break;
          case "2":
            this.networkName = "Morden";
            break;
          case "3":
            this.networkName = "Ropsten";
            break;
          case "4":
            this.networkName = "Rinkeby";
            break;
          case "20":
            this.networkName = "mysoft";
            break;
          default:
            this.networkName = "Unknown";
        }  
      });

     

     

     /* var contractFileContent = "pragma solidity ^0.4.17; contract SimpleStorage { uint myVariable;function set(uint x) public { myVariable = x; } function get() constant public returns (uint) { return myVariable; } } "
      createContract.create(contractFileContent, 343).then(function(contract) {
       var result = contract.get.call()
        console.log('Result of function call:', result)
      })
      .catch(err => {
        console.log(err)
    })*/
      //truffle................................................................................................
      
   //............................................................................................
  
  // scans the last 1000 blocks and returns the blocknumbers of blocks mined by your coinbase 
  // (more precisely blocks the mining reward for which is sent to your coinbase).   
 
   //..............................................................................
     /* var receiverAddress = '0x4ec0aE4F96d12cF6B446fd503b180A5c30BC93B6';

    var setNumbers = [5,2,4,1];
   var setData = truffle.get.getData(setNumbers);

    console.log(setData);

    var gasEstimate = this.web3.eth.estimateGas({
        from: this.web3.eth.coinbase,
        to: receiverAddress,
        data: setData
    });

    var gasPrice = this.web3.eth.gasPrice;

    console.log('gas Price: ' + gasPrice);
    console.log('Estimated Transaction gas: ' + gasEstimate);


    console.log('unlocking Coinbase account');
    const password = "Samsunnahar";
    try {
      this.web3.personal.unlockAccount(this.web3.eth.coinbase, password);
    } catch(e) {
      console.log(e);
      return;
    }

    console.log ('sending Transaction to the contract');

    const transaction = {
      from: this.web3.eth.coinbase,
      to:receiverAddress,
      value: '0x00',
      gas: gasEstimate + 1,
      gasPrice: gasPrice + 1,
      data: setData
    }


    this.web3.eth.sendTransaction( transaction, function(err, txHash) {
      if (err != null) {
            console.error("Error while sending transaction: " + err);
          }
          else{
            console.log("Transaction Sent here's you  txHash: " + txHash);
          }
    });*/
    //console.log ('calling contract');
   // var getArray = truffle.get();
  
          //................................................................................................
         /* truffle.get(function(error, result){
            if(!error)
                {
                    //$("#instructor").html(result[0]+' ('+result[1]+' years old)');
                  // console.log(result);
                }
            else
                console.error(error);
          });

*/
 
          //abi array from mist...............................................................................
         
        }
    //..............................................................................................


   stateCtrl: FormControl;
    ngOnInit() {

    }
  
}