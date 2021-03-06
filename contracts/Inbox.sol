//SPDX-License-Identifier: MIT
pragma solidity ^0.4.24;

// linter warnings (red underline) about pragma version can igonored!

// contract code will go here
contract Inbox {
    string public message;

    constructor(string initialMessage) public {
        message = initialMessage;
    }

    function setMessage(string newMessage) public {
        message = newMessage;
    }
}
