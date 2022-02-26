const SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
const Verifier = artifacts.require('Verifier');

const Proof = require("./proof/proof.json");
const ProofFalse = require("./proof/proofFalse.json");

contract('SolnSquareVerifier', accounts => {

    describe('Test proof of ownership mint', function () {


        beforeEach(async function () {
            const verifier = await Verifier.new(); 
            this.contract = await SolnSquareVerifier.new(verifier.address, "CryptoEstateToken", "CET");
        })
        // Test if a new solution can be added for contract - SolnSquareVerifier
        it('should add a new solution', async function () {

            // Declare and Initialize a variable for event
            let eventEmitted = false
            
            // Watch the emitted event Sold()
            await this.contract.SolutionAdded((err, res) => {
                eventEmitted = true
            })
            const solHash =  await this.contract.getSolutionHash(ProofFalse.proof,ProofFalse.inputs);
            const result = await this.contract.addSolution(
                accounts[1],
                solHash
            );
            //assert.equal(result, true, "Verification not successfull");
            assert.equal(eventEmitted, true, 'Invalid event emitted')
        })
        // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
        it('should mint ERC721 token', async function () {
            // Declare and Initialize a variable for event
            let eventEmitted = false
            
            // Watch the emitted event Sold()
            await this.contract.Transfer((err, res) => {
                eventEmitted = true
            })

            const result = await this.contract.mintVerifiedNFT(accounts[1], 123, Proof.proof,Proof.inputs)

            assert.equal(eventEmitted, true, 'Invalid event emitted')
           
        })
              
    });

})
