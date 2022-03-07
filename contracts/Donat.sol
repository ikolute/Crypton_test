// SPDX-License-Identifier: MIT
import "hardhat/console.sol";
pragma solidity ^0.5.0;



contract Donat {
        /*Определяем адресс владельца */
    address payable public owner;
    mapping(address => uint) public balances;
    address[] public donators;
    event Sent(address to, uint amount);

    constructor() public {
        owner = msg.sender;
    }
    /* Перевод пожертвований*/
    function gatherDonation() public payable {
        if (balances[msg.sender] == 0) {
            donators.push(msg.sender);
        }
        balances[msg.sender] += msg.value;
    }   
    /* Выыод средств на счет */
    function transferToOwner(address payable _reciver, uint amount) public {
        require(msg.sender == owner);
        _reciver.transfer(amount);
    }
    function getDonators() public view returns(address[] memory){
        require(msg.sender == owner);
        return donators;
    }
    function TotaldonateByUser(address userADR) public view returns(uint){
        return balances[userADR];
    }
}
