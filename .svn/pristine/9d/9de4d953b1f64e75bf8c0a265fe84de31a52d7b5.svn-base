pragma solidity ^0.4.11;
interface Regulator{
    function checkvalue(uint amount) returns(bool);
    function loan() returns(bool);
}
contract Bank is Regulator {
    uint private value;
    address private owner;
    
    modifier ownerFunc {
        require(owner==msg.sender);
        _;
         
    }
   
    function Bank(uint amount) {
        value = amount;
        owner = msg.sender;
    }
    function deposit(uint amount) ownerFunc {
        value += amount;
    }
    function withdrow(uint amount) ownerFunc {
        if(checkvalue(amount)) {
             value -= amount;
        }
       
    }
    function balance() returns(uint) {
        return value;
    }
   function checkvalue(uint amount) returns(bool) {
       return amount>=value;
    }
    function loan() returns(bool) {
       return value>0;
    }
}
contract Mysoft is Bank(10) {
    string private name;
    uint private age;
    function setname(string newname) {
        name = newname;
        
        
    }
    function getname() returns(string) {
        return name;
    }
    function setage(uint newage) {
        age = newage;
        
    } 
    function getage() returns(uint) {
        return age;
    }
    
}