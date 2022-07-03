pragma solidity ^0.8.15;

    contract firstprogram {
    uint public count = 0;
    address public _owner;
    string _msg ="ASD";

    function setMsg (string memory MSG, uint a)public {
        _msg = MSG;
    }
    function getMsg() public view returns(string memory){
        return _msg;
    }

    function getInt() public pure returns(string memory) {
        return "ALI";
    }S

pragma solidity ^0.8.15;
contract calculator{
    uint d;
    function add(uint a, uint b)public{
        d =a+b;
    }
       function sub(uint a, uint b)public{
        d =a-b; 
        } 

         function mul(uint a, uint b)public{
        d =a*b;
        } 
        
          function div(uint a, uint b)public{
        d =a/b;
    }
    function getValue ()public view returns (uint x){return d;
    }
}