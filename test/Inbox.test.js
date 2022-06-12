// contract test code will go here
const assert = require('assert');
const ganache = require('ganache-cli');
// Capital casing of W refers to constructor
const Web3 = require('web3');
//Lower casing of w refers to instace
const web3 = new Web3(ganache.provider());