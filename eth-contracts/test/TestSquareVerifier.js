const Verifier = artifacts.require('Verifier');

const Proof = require("./proof/proof.json");
const ProofFalse = require("./proof/proofFalse.json");

contract('SquareVerifier', accounts => {

    describe('verify Zokrates zkSnarks contract', function () {


        beforeEach(async function () { 
            this.contract = await Verifier.new();
        })

        it('should verify with correct proof', async function () { 
            const result = await this.contract.verifyTx(
                Proof.proof,
                Proof.inputs
            );
            assert.equal(result, true, "Verification not successfull");
        })
        
        it('should not verify with incorrect proof', async function () {
            const result = await this.contract.verifyTx(
                Proof.proof,
                ProofFalse.inputs
            );
            assert.equal(result, false, "Falsely verified");
           
        })
        

        
    });

})
