//import something
import { Component,EventEmitter,Input, OnInit, Output,NgModule} from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router} from '@angular/router';
import {Http, Response, Headers, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map';
import { BlockComponent } from './../block/block.component';
//require something
const IPFSUploader=require('ipfs-image-web-upload');
const Web3 = require('web3');
const contract = require('truffle-contract');
const IPFS = require('ipfs-mini');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
const Readable = require('readable-stream').Readable
var Buffer = require('buffer/').Buffer  
var createContract = require('create-contract');
var Tx = require('ethereumjs-tx');
const SimpleStorage = require('../../../build/contracts/SimpleStorage.json');

@Component({
   selector: 'app-mainpage',
   templateUrl: './mainpage.component.html',
   styleUrls: ['./mainpage.component.css']
})

export class MainpageComponent implements OnInit {
  //global veriables ...............................
            formdata;
            web3: any;
            account: any;
            accounts: any;


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
            cutomerdata;
            userId: number = 0;
            mining_threads = 1;
            txBlock = 0;
            stateCtrl: FormControl;
  //constructor define for route and http
  constructor(private router: Router, private http: Http) {
    this.checkAndInstantiateWeb3();
 
    
  }
 
  //this is default function accessed when the project run
  ngOnInit() {
    //get yor walet account informations
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
     
    });
    //get your network
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
    //input form validation.............................
    this.formdata = new FormGroup({
         k_type: new FormControl("", Validators.compose([
            Validators.required,
            Validators.minLength(3)
         ])),
         k_no: new FormControl("", Validators.compose([
            Validators.required,
            Validators.minLength(3)
         ])),
         d_no:new FormControl(""),
         o_name:new FormControl(""),
         o_adrs:new FormControl(""),
         o_f_name:new FormControl(""),
         o_phn:new FormControl(""),
         o_dag_type:new FormControl(""),
         o_land_amount:new FormControl(""),
    });
     
    ipfs.add('file_input', (err, result) => {
       // console.log(err, result);

    });
      
  }
  //check if web3 is synchronized 
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
  //khotian data store in the chain
  registration(data) { 
       console.log(data.o_adrs);
       var customer = []; 
       var jsonhash
       const pass = "Samsunnahar";
       try {
         this.web3.personal.unlockAccount(this.web3.eth.coinbase, pass);
       } catch(e) {
         console.log(e);
         return;
       }
       //use abi from after compile with mist 
       var CoursetroContract = this.web3.eth.contract([ { "constant": true, "inputs": [], "name": "khotian_type", "outputs": [ { "name": "", "type": "string", "value": "RS" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "name", "type": "string" }, { "name": "adrs", "type": "string" }, { "name": "F_name", "type": "string" }, { "name": "phn", "type": "uint256" } ], "name": "owner_add", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "d_type", "type": "string" }, { "name": "amount", "type": "uint256" } ], "name": "dag_add", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "k_type", "type": "string" }, { "name": "k_no", "type": "string" }, { "name": "d_no", "type": "uint256" } ], "name": "setvalues", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "dag_no", "outputs": [ { "name": "", "type": "uint256", "value": "9" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "dags", "outputs": [ { "name": "d_type", "type": "string", "value": "" }, { "name": "amount", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "owner", "outputs": [ { "name": "Name", "type": "string", "value": "" }, { "name": "adrs", "type": "string", "value": "" }, { "name": "F_name", "type": "string", "value": "" }, { "name": "mobile_no", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "khotian_no", "outputs": [ { "name": "", "type": "string", "value": "1234" } ], "payable": false, "stateMutability": "view", "type": "function" } ]);
       var Coursetro = CoursetroContract.at('0x58c77b9A51092365DE47Ae69ADD615B856feE2BC');
       //call to setvalue function
       Coursetro.setvalues.sendTransaction(data.k_type,data.k_no,data.d_no,{
           from:this.web3.eth.coinbase,
           gas:4000000},function (error, result){ //get callback from function which is your transaction key
               if(!error){
                   console.log(result);
               } else{
                   console.log(error);
               }
       });
       //call to owner add function
       Coursetro.owner_add.sendTransaction(data.o_name,data.o_name,"x",data.o_phn,{
         from:this.web3.eth.coinbase,
         gas:4000000},function (error, result){ //get callback from function which is your transaction key
             if(!error){
                 console.log(result);
             } else{
                 console.log(error);
             }
       });
       //call to daq_add function
       Coursetro.dag_add.sendTransaction(data.o_dag_type,17,{
         from:this.web3.eth.coinbase,
         gas:4000000},function (error, result){ //get callback from function which is your transaction key
             if(!error){
                 console.log(result);
             } else{
                 console.log(error);
             }
       });
       this.khotian_contract_data_view();

  }
  khotian_contract_data_view(){
    var CoursetroContract = this.web3.eth.contract([ { "constant": true, "inputs": [], "name": "khotian_type", "outputs": [ { "name": "", "type": "string", "value": "RS" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "name", "type": "string" }, { "name": "adrs", "type": "string" }, { "name": "F_name", "type": "string" }, { "name": "phn", "type": "uint256" } ], "name": "owner_add", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "d_type", "type": "string" }, { "name": "amount", "type": "uint256" } ], "name": "dag_add", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "k_type", "type": "string" }, { "name": "k_no", "type": "string" }, { "name": "d_no", "type": "uint256" } ], "name": "setvalues", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "dag_no", "outputs": [ { "name": "", "type": "uint256", "value": "9" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "dags", "outputs": [ { "name": "d_type", "type": "string", "value": "" }, { "name": "amount", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "owner", "outputs": [ { "name": "Name", "type": "string", "value": "" }, { "name": "adrs", "type": "string", "value": "" }, { "name": "F_name", "type": "string", "value": "" }, { "name": "mobile_no", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "khotian_no", "outputs": [ { "name": "", "type": "string", "value": "1234" } ], "payable": false, "stateMutability": "view", "type": "function" } ]);
    var Coursetro = CoursetroContract.at('0x58c77b9A51092365DE47Ae69ADD615B856feE2BC');
    console.log(Coursetro);
    console.log(Coursetro.dag_no());
    console.log(Coursetro.khotian_type());
    console.log(Coursetro.owner(this.web3.eth.coinbase));
    console.log(Coursetro.dags(this.web3.eth.coinbase));
  
  }
  //mining  check proof of work................................................................................
  checkWork() {
      if (this.web3.eth.getBlock("pending").transactions.length > 0) {
          this.txBlock = this.web3.eth.getBlock("pending").number
          if (this.web3.eth.mining) return;
          console.log("  Transactions pending. Mining...");
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
     
  Component1Variable:string="Component1VariableSent";
  @Output()
   SendValue=new EventEmitter<string>(); 
  onClickSubmit(data) {
      //console.log(data.img);
    
       //document.getElementById("custtable").style.display="";
      this.cutomerdata = [];
      for (var prop in data) {
         this.cutomerdata.push(data[prop]);
      }
      console.log(this.cutomerdata);
      this.registration(this.cutomerdata);
        //var uploader = new IPFSUploader(new IPFS());
      
      //this.router.navigate(['app-block'])
      this.SendValue.emit(this.Component1Variable);
      //this.router.navigate(['app-block']) 
  }  
}