// migrating the appropriate contracts
var ERC721MintableComplete = artifacts.require("./ERC721MintableComplete.sol")
// var SquareVerifier = artifacts.require("./SquareVerifier.sol");
// var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");

module.exports = function(deployer) {
  // deployer.deploy(SquareVerifier);
  // deployer.deploy(SolnSquareVerifier);
  deployer.deploy(ERC721MintableComplete, "CryptoEstateToken", "CET");
};
