const HDWalletProvider= require('truffle-hdwallet-provider');
const Web3= require('web3');
const {interface,bytecode}= require('./compile');

const provider= new HDWalletProvider(
    //account nemonic
    '',
    //api to connect provider to rinkbey network
    'https://rinkeby.infura.io/hwX8oHvmu8pJmm7MwAWT '
);

const web3= new Web3(provider);