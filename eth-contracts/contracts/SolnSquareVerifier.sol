pragma solidity >=0.4.21 <0.6.0;
pragma experimental ABIEncoderV2;

import './SquareVerifier.sol';
import './ERC721Mintable.sol';

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is ERC721MintableComplete, Verifier {
    


    // TODO define a solutions struct that can hold an index & an address
    struct Solution {
        uint256 index;
        address solAddress;
        bool minted;
    }

    // TODO define an array of the above struct
    Solution[] solutions;

    // TODO define a mapping to store unique solutions submitted
    mapping(bytes32=>Solution) uniqueSolutions;

    // TODO Create an event to emit when a solution is added
    event SolutionAdded(address solutionAddress, uint256 solutionIndex);

    Verifier private zkContract;
    
    constructor(address contractAddress, string memory name, string memory symbol)
        ERC721MintableComplete(name, symbol)
        public
    {
        zkContract  = Verifier(contractAddress);
    }  


    // TODO Create a function to add the solutions to the array and emit the event
    function addSolution(address owner, bytes32 solHash) public {
        uint256 newIndex = solutions.length;

        Solution memory newSol = Solution(newIndex, owner, false);
        solutions.push(newSol);
        uniqueSolutions[solHash] = newSol;
        
        emit SolutionAdded(owner, newIndex);
    }



    // TODO Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSuplly
    function mintVerifiedNFT(address tokenOwner, uint tokenId, Proof memory proof, uint[2] memory input) public {
        require(zkContract.verifyTx(proof, input), "Proof of ownership is not valid");
        
        bytes32 solHash = getSolutionHash(proof, input);
        require(uniqueSolutions[solHash].solAddress == address(0), "Solution is not unique");
        
        addSolution(tokenOwner, solHash);
        mint(tokenOwner, tokenId);
        uniqueSolutions[solHash].minted = true;
    }

    function getSolutionHash(Proof memory proof, uint[2] memory input) pure public returns (bytes32 solHash) {
        solHash = keccak256(abi.encodePacked(
            proof.a.X,
            proof.a.Y, 
            proof.b.X, 
            proof.b.Y, 
            proof.c.X,
            proof.c.Y,
            input
        ));
    }
  
}

























