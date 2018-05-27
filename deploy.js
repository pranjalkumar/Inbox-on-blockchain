const HDWalletProvider= require('truffle-hdwallet-provider');
const Web3= require('web3');
const {interface,bytecode}= require('./compile');

const provider= new HDWalletProvider(
    //account nemonic
    'bachelor focus air saddle metal uniform duck hybrid label base forget flame',
    //api to connect provider to rinkbey network
    'https://rinkeby.infura.io/hwX8oHvmu8pJmm7MwAWT '
);

const web3= new Web3(provider);

//contract deployment
const deploy= async() =>{

    const accounts=await web3.eth.getAccounts();
    console.log('deploying contract from account',accounts[0]);

    const result= await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode, arguments: ['Hi there!']})
        .send({ from: accounts[0], gas: '1000000'});

    result.setProvider(provider);

    console.log('contract deployed at', result.options.address);

};
deploy();