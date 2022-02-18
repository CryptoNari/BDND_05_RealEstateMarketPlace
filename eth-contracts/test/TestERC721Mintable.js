var ERC721MintableComplete = artifacts.require('ERC721MintableComplete');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    const name = "CryptoEstateToken";
    const symbol = "CET";
    const baseTokenURI = "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/";

    describe('match erc721 spec', function () {

        const tokenIds = [0, 1, 2];

        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new(name, symbol, {from: account_one});

            // TODO: mint multiple tokens
            await this.contract.mint(account_one, tokenIds[0], {from: account_one});
            await this.contract.mint(account_two, tokenIds[1], {from: account_one});
            await this.contract.mint(account_two, tokenIds[2], {from: account_one});
        })

        it('should return total supply', async function () { 
            const result = await this.contract.totalSupply();

            assert.equal(result, tokenIds.length, "Token supply incorrect");
        })

        it('should get token balance', async function () { 
            const result1 = await this.contract.balanceOf(account_one);
            const result2 = await this.contract.balanceOf(account_two);

            assert.equal(result1, 1, "Token balance Account1 incorrect");
            assert.equal(result2, 2, "Token balance Account2 incorrect");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () {
            const baseURI = await this.contract.getBaseTokenURI();

            const result1 = await this.contract.tokenURI(tokenIds[0]);
            const result2 = await this.contract.tokenURI(tokenIds[1]);
            const result3 = await this.contract.tokenURI(tokenIds[2]);

            assert.equal(result1, baseURI + tokenIds[0], "Token uri Token1 incorrect");
            assert.equal(result2, baseURI + tokenIds[1], "Token uri Token2 incorrect");
            assert.equal(result3, baseURI + tokenIds[2], "Token uri Token3 incorrect"); 
        })

        it('should transfer token from one owner to another', async function () { 
            await this.contract.transferFrom(account_one, account_two, tokenIds[0], {from: account_one});

            const result1 = await this.contract.ownerOf(tokenIds[0]);

            assert.equal(result1, account_two, "Token owner incorrect");
            
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new(name, symbol, {from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            let failedTest = false;

            try {
                await this.contract.mint(account_one, tokenIds[0], {from: account_two});
            } catch (error) {
                failedTest = true;
            }

            assert.equal(failedTest, true, "Illegal minting possible");
        })

        it('should return contract owner', async function () { 
            const result1 = await this.contract.getOwner();
            
            assert.equal(result1, account_one, "Contract owner incorrect");
        })

    });
})