import { Component, OnInit } from '@angular/core';
//const Web3 = require('web3');
const Web3 = require('web3');
@Component({
  selector: 'app-web3',
  templateUrl: './web3.component.html',
  styleUrls: ['./web3.component.css']
})
export class Web3Component implements OnInit {
  web3: any;
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
  ngOnInit() {

    this.khotian_contract_data_save();
     this.khotian_contract_data_view();
  }
  khotian_contract_data_save(){
    const pass = "Samsunnahar";
    try {
      this.web3.personal.unlockAccount(this.web3.eth.coinbase, pass);
    } catch(e) {
      console.log(e);
      return;
    }
    var CoursetroContract = this.web3.eth.contract([ { "constant": true, "inputs": [], "name": "khotian_type", "outputs": [ { "name": "", "type": "string", "value": "RS" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "name", "type": "string" }, { "name": "adrs", "type": "string" }, { "name": "F_name", "type": "string" }, { "name": "phn", "type": "uint256" } ], "name": "owner_add", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "d_type", "type": "string" }, { "name": "amount", "type": "uint256" } ], "name": "dag_add", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "k_type", "type": "string" }, { "name": "k_no", "type": "string" }, { "name": "d_no", "type": "uint256" } ], "name": "setvalues", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "dag_no", "outputs": [ { "name": "", "type": "uint256", "value": "9" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "dags", "outputs": [ { "name": "d_type", "type": "string", "value": "" }, { "name": "amount", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "owner", "outputs": [ { "name": "Name", "type": "string", "value": "" }, { "name": "adrs", "type": "string", "value": "" }, { "name": "F_name", "type": "string", "value": "" }, { "name": "mobile_no", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "khotian_no", "outputs": [ { "name": "", "type": "string", "value": "1234" } ], "payable": false, "stateMutability": "view", "type": "function" } ]);
    var Coursetro = CoursetroContract.at('0x58c77b9A51092365DE47Ae69ADD615B856feE2BC');
    //call to setvalue function
    Coursetro.setvalues.sendTransaction("RS","12213",12312,{
        from:this.web3.eth.coinbase,
        gas:4000000},function (error, result){ //get callback from function which is your transaction key
            if(!error){
                console.log(result);
            } else{
                console.log(error);
            }
    });
    //call to owner add function
    Coursetro.owner_add.sendTransaction("liton","B Baria","x",17660099331,{
      from:this.web3.eth.coinbase,
      gas:4000000},function (error, result){ //get callback from function which is your transaction key
          if(!error){
              console.log(result);
          } else{
              console.log(error);
          }
    });
    //call to daq_add function
    Coursetro.dag_add.sendTransaction("krisi",17,{
      from:this.web3.eth.coinbase,
      gas:4000000},function (error, result){ //get callback from function which is your transaction key
          if(!error){
              console.log(result);
          } else{
              console.log(error);
          }
    });
  
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

}
