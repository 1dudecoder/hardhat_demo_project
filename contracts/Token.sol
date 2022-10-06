//SPDX-License-Identifier: UNLICENSED
pragma solidity >= 0.7.0 <0.9.0;

import "hardhat/console.sol";

contract Token{ 

    string name = "Nitin_Token";
    string symbol = "NT";
    address owner;
    uint public total_supply = 10000;
    mapping(address => uint) amount;

    constructor(){
        owner = msg.sender;
        amount[owner] += total_supply;
    }   

    function transfer(address reciver, uint money) external {
        console.log("money",money);
        require(amount[msg.sender] > money,"You dont have  enough money");
        amount[msg.sender] -= money;
        amount[reciver] += money;
    }

    function balanceof(address person) external view returns (uint){
        return amount[person]; 
    }
    
}

 
