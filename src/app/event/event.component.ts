
import { Component,EventEmitter,Input, OnInit, Output,NgModule} from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router} from '@angular/router';
import {Http, Response, Headers, RequestOptions } from "@angular/http";
const IPFSUploader=require('ipfs-image-web-upload');
const Web3 = require('web3');
const contract = require('truffle-contract');
const IPFS = require('ipfs-mini');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
const Readable = require('readable-stream').Readable
var Buffer = require('buffer/').Buffer  
var createContract = require('create-contract');
var Tx = require('ethereumjs-tx');
//var solc = require('solc');
//const fs = require('fs');

//var contractFileName = '../../contracts/Store.sol';
//console.log(contractFileName);
//const contract = require('truffle-contract');
const SimpleStorage = require('../../../build/contracts/Coursetro.json');
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  web3: any;
  formdata;
  constructor() { 
    this.checkAndInstantiateWeb3();
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
  formsubmit(data){
    var abi = SimpleStorage.abi;
      var ClientReceipt = this.web3.eth.contract(abi);
      //console.log(ClientReceipt);
      var Coursetro = ClientReceipt.at("0xBb7f70D1a1CAf08a3777E03F139B6b86De0a1A5A");

     // var event = clientReceipt.Deposit();
      //console.log(event);
      // watch for changes
      const pass = "Samsunnahar";
      try {
        this.web3.personal.unlockAccount(this.web3.eth.coinbase, pass);
      } catch(e) {
        console.log(e);
        return;
      }
     
       //var name= "amdad";
      //var clientReceipt = ClientReceipt.at("0xA872A834B567f410CDfce95813514235F975Ba91");

     
        console.log(Coursetro);

      var code = "0x6060604052341561000f57600080fd5b6103058061001e6000396000f30060606040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806322faf03a146100515780633c1b81a5146100b7575b600080fd5b341561005c57600080fd5b6100b5600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001909190505061014c565b005b34156100c257600080fd5b6100ca61016e565b6040518080602001838152602001828103825284818151815260200191508051906020019080838360005b838110156101105780820151818401526020810190506100f5565b50505050905090810190601f16801561013d5780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b8160009080519060200190610162929190610220565b50806001819055505050565b6101766102a0565b600080600154818054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156102115780601f106101e657610100808354040283529160200191610211565b820191906000526020600020905b8154815290600101906020018083116101f457829003601f168201915b50505050509150915091509091565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061026157805160ff191683800117855561028f565b8280016001018555821561028f579182015b8281111561028e578251825591602001919060010190610273565b5b50905061029c91906102b4565b5090565b602060405190810160405280600081525090565b6102d691905b808211156102d25760008160009055506001016102ba565b5090565b905600a165627a7a723058200faba8da1e50f099d751abccc7f4d1e1625aa0f8af7c756f6dd31611ad374d3e0029";
      Coursetro.setInstructor(this.web3.eth.coinbase,12,{from:this.web3.eth.coinbase,"data" : code, "gas" : 4700000}, function(error, result){
        if(!error) {
           //console.log("#hfgdsgdsg" + result + "#")
        } else {
            console.error(error);
        }
    })
    Coursetro.getInstructor({from:this.web3.eth.coinbase},function(error, result) {
        if (!error) {
            //console.log('name is '+result[0]+' ('+result[1]+' years old)');
        } else
             console.log(error);
    });
  }

  ngOnInit() {
      
    this.formdata = new FormGroup({
     
      
   });
  }

}
