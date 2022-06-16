const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'earn dynamic expand suspect inspire expose air live income amused grape snow',
    'https://rinkeby.infura.io/v3/5b698ea1d67f4d33afc321396e7df0c1'
);

const web3 = new Web3(provider);

//Note that the deployment code will be very similar to what we did in inbox.test.js
const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from the account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hi there!'] })
        .send({ gas: '1000000', from: accounts[0] });
    console.log('Contract deployed to', result.options.address);
    //This line intends to prevent a 'hanging deployment'
    provider.engine.stop();
};
deploy();