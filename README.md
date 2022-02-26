# Udacity Blockchain Capstone - Real Estate Marketplace OpenSea

The capstone is build upon the knowledge gained in the course in order to build a decentralized housing product.<br>
The Project includes the creation of a ERC721 Token with an implementation of Zokrates zkSNARKS.<br>
Finally the Tokens should be listed and traded on the OpenSea testnet.<br>



# Installing the project

## Used Libraries

Ganache CLI v6.12.2 (ganache-core: 2.13.2) - Ethereum development tool used for running a local blockchain <br>
Truffle v5.4.24 (core: 5.4.24) - Smart Contracts developing, testing and deploying <br>
Solidity v0.5.16 (solc-js) - Implementing Smart Contractd <br>
Node v10.13.0 - Manage dependencies with npm. <br>
Web3.js v1.5.3 - Interaction with local or remote Ethereum nod using http, ipc or websocket. <br>
ZoKrates 0.7.11 - toolbox for zkSNARKs on Ethereum.<br>

## Instructions

Install Project dependencies with: <br>
`npm install`

for local tests, start in a second console <br>
`ganache-cli`

change directory into "/eth-contracts" and compile Contracts with: <br>
`truffle compile`



# Tests

When ganache-cli is started you can start the tests with inside the "/eth-contracts" folder: <br>
`truffle test`

When project is setup right the tests should give the following result: <br>
[TestLog](./eth-contracts/tests.log)<br>



# Migration Rinkeby

The Contract is deployed on the Rinkeby Network. <br>
[DeploymentLog](./eth-contracts/deploy.log)<br>

SolnSquareVerifier(ContractAddress):

[0x6d5e7bf8FE4D81372e3f790fF70adee8f1E762D4](https://rinkeby.etherscan.io/address/0x6d5e7bf8fe4d81372e3f790ff70adee8f1e762d4)<br>

Verifiier(ContractAddress):

[0xB0D3173DA26E4AE80632A2c0bE01Daeb5C7ca315](https://rinkeby.etherscan.io/address/0xB0D3173DA26E4AE80632A2c0bE01Daeb5C7ca315)<br>


Contract Abi's available in "./eth-contracts/build/contracts/" Folder.


# OpenSea 

[OpenSea Token Page](https://testnets.opensea.io/collection/cryptoestatetoken-1) <br>



# Token

[Token Tracker](https://rinkeby.etherscan.io/token/0x6d5e7bf8fe4d81372e3f790ff70adee8f1e762d4)<br>


## 5 Tokens listed and purchased ion Opensea

- [Token 1](https://testnets.opensea.io/assets/0x6d5e7bf8fe4d81372e3f790ff70adee8f1e762d4/2) <br>
- [Token 2](https://testnets.opensea.io/assets/0x6d5e7bf8fe4d81372e3f790ff70adee8f1e762d4/3) <br>
- [Token 3](https://testnets.opensea.io/assets/0x6d5e7bf8fe4d81372e3f790ff70adee8f1e762d4/4) <br>
- [Token 4](https://testnets.opensea.io/assets/0x6d5e7bf8fe4d81372e3f790ff70adee8f1e762d4/5) <br>
- [Token 5](https://testnets.opensea.io/assets/0x6d5e7bf8fe4d81372e3f790ff70adee8f1e762d4/6) <br>



# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
