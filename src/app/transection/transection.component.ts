import { Component, OnInit, ViewChild} from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

//import {canBeNumber} from '../util/validation';
import {Http, Response, Headers, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map';
const Web3 = require('web3');
const contract = require('truffle-contract');
const IPFS = require('ipfs-mini');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
const Readable = require('readable-stream').Readable
var Buffer = require('buffer/').Buffer  
var createContract = require('create-contract');
import { Router, Resolve, RouterStateSnapshot,
  ActivatedRouteSnapshot } from '@angular/router';
  //import {RouteParams} from '@angular/router';
//var solc = require('solc');
//var solc = require('solc');
//const fs = require('fs');

//var contractFileName = '../../contracts/Store.sol';
//console.log(contractFileName);
//const contract = require('truffle-contract');
const SimpleStorage = require('../../../build/contracts/SimpleStorage.json');

//import getWeb3 from './utils/getWeb3'

//const contractFileName  = require('../../../contracts/Store.sol');
@Component({
   selector: 'app-transection',
   templateUrl: './transection.component.html',
   styleUrls: ['./transection.component.css']
})

export class transectionComponent implements OnInit {
    
    //MetaCoin = contract(metaincoinArtifacts);
    formdata;
    cutomerdata;
    //MetaCoin = contract(metaincoinArtifacts);

    account: any;
    accounts: any;
    web3: any;
    miner:any;
    balance: number;
    blockNum :number;
    tnumber :number;
    peerCount : number;
    maxBlocks = 50;
    blocks = [];
    txBlock = 0;
    trans = [];
    networkName;
    coinbase: any;
    bal: number;
    sendingAmount: number;
    recipientAddress: string;
    status: string;
    //canBeNumber = canBeNumber;
 // const ipfs = new IPFS({host: 'ipfs.infura.io', port: 5001, protocol: 'https'});
   constructor(private http: Http,private router: Router) {
      this.checkAndInstantiateWeb3();
      this.onReady();
      //getParam(param: string) : string
      //let id = route.paramMap.get('id');
      //var queryParam = this._routeParams.get('q');
    } 
    
   /* contract("HelloEthSalon:getMessage", function (accounts) {
      it("should return a correct string", async function () {
        const contract = await HelloEthSalon.deployed();
        const result = await contract.GetMessage.call();
        assert.isTrue(result === "I know smart contract testing!!");
      });
    });
*/








//const Web3 = require('web3');
   //web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:4200"));

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


  
   
    
   
    myTransections(event) {
      //console.log(event)
      this.miner=0;
      var block=[];
     var myblock=this.minedspecificcontractTransectionBlocks(10,this.web3.eth.coinbase);
    // console.log(myblock);
    for(var i=0;i<myblock.length;i++){

    
      if(this.web3.eth.getBlock(myblock[i]).transactions!='')
      {
        var hash=this.web3.eth.getBlock(myblock[i]).transactions ;
        // console.log(hash)
          this.web3.eth.getTransaction(hash[0],function(error, result) {
            if(!error){
              block.push(result);
            //console.log(block)
            }
            else{
              console.log(error);
            }
        });
      }
        
       
    }
    this.trans =block;
    //console.log(this.trans);
    }
    pending(event){
      this.miner=1;
     // console.log(event)
      var block=[];
      //var txhash = '0x1d80af230e8a42cfdf367eba08fc260f8789d745'
      if (this.web3.eth.getBlock("pending").transactions.length > 0) {
        this.txBlock = this.web3.eth.getBlock("pending").number
        

       // if (this.web3.eth.mining) return;

     // console.log(this.web3.eth.pendingTransactions);

         //this.web3.miner.start(1); 
       
         var hash=this.web3.eth.getBlock("pending").transactions
          this.web3.eth.getTransaction(hash[0],function(error, result) {
              if(!error){
                block.push(result);
              //console.log(result)
              }
              else{
                console.log(error);
              }
          });      
         }
       //console.log("  12 confirmations achieved; mining stopped.");
      //  this.web3.miner.stop()
      
      
        
      this.trans =block;
     
    }
    mine(event){
      
      if (this.web3.eth.getBlock("pending").transactions.length > 0) {
        this.txBlock = this.web3.eth.getBlock("pending").number
        if (this.web3.eth.mining) return;
        alert("Transactions pending. Mining...");
        this.web3.miner.start(1); 
        while (this.web3.eth.getBlock("latest").number < this.txBlock + 12) {
          if (this.web3.eth.getBlock("pending").transactions.length > 0) this.txBlock = this.web3.eth.getBlock("pending").number;
            }
            console.log("  12 confirmations achieved; mining stopped.");
            this.web3.miner.stop()
      }
      else {
          this.web3.miner.stop()
      }
    }
   
    
    
    onReady() {
      this.coinbase=this.web3.eth.coinbase;
   // console.log(this.web3.eth.coinbase);
  
     var addrs = []; 
    //console.log(this.minedTransectionBlocks(50, this.web3.eth.coinbase));
     /*for(var i=0;i<addrs.length;i++){

     }*/

     // this.contract_truffle();
      //this.khotian_contract();
     // this.ipfs();
      // Bootstrap the MetaCoin abstraction for Use.
      //this.MetaCoin.setProvider(this.web3.currentProvider);

      // Get the initial account balance so it can be displayed.
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
      this.router.params
          .switchMap((params: Params) => this.block.getById(params['number']))
          .subscribe((transection :transection) => this.transection = ransection);
    }
  
}