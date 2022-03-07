const { AlchemyWebSocketProvider } = require("@ethersproject/providers");
const { expect } = require("chai");
const { ethers } = require("hardhat");
const DonatArtifact = require('../artifacts/contracts/Donat.sol/Donat.json')
async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy)
  const Donat = await hre.ethers.getContractFactory("Donat")
  const donat = await Donat.deploy()
  await donat.deployed()
  return donat.address;
}
const contractADR = main()
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
describe("gather Money", function() {
  it('sholud return correct donat', async function () {

    const [acc1,acc2] = await ethers.getSigners()
    const Donatcontract = new ethers.Contract(
      contractADR,
      DonatArtifact.abi,
      acc1
    ) 
    async function currentBalance (address) {
      const rawBalance = await ethers.provider.getBalance(address)
      await console.log(ethers.utils.formatEther(rawBalance))
    
    }  
    const tx = {
      value: ethers.utils.parseEther('10')
    }
    const txSend = await Donatcontract.gatherDonation(tx)
    await txSend.wait
    const b1 = ethers.utils.formatEther(await acc1.getBalance())
    expect(await Math.round(b1)).to.equal(9990) 
    });
  it('sholud return correct withdraw', async function () {
    const [acc1,acc2] = await ethers.getSigners()
    const Donatcontract = new ethers.Contract(
      contractADR,
      DonatArtifact.abi,
      acc1
    ) 
    async function currentBalance (address) {
      const rawBalance = await ethers.provider.getBalance(address)
      await console.log(ethers.utils.formatEther(rawBalance))
    
    }  
    const tx = {
      value: ethers.utils.parseEther('10')
    }
    const txSend = await Donatcontract.gatherDonation(tx)
    await txSend.wait
    const b1 = ethers.utils.formatEther(await acc1.getBalance())
    const txSend2 = await Donatcontract.transferToOwner(acc2.address , ethers.utils.parseEther('5'))
    const b2 = ethers.utils.formatEther(await acc2.getBalance())
    expect(await b2).to.equal('10005.0') 
    });
    it('sholud return correct donators', async function () {
      const [acc1,acc2] = await ethers.getSigners()
      const Donatcontract = new ethers.Contract(
        contractADR,
        DonatArtifact.abi,
        acc1
      ) 
      const txSend = await Donatcontract.getDonators()
      await txSend.wait
      expect(await txSend[0]).to.equal('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266') 
      });
      it('sholud return correct total donat by user', async function () {
        const [acc1,acc2] = await ethers.getSigners()
        const Donatcontract = new ethers.Contract(
          contractADR,
          DonatArtifact.abi,
          acc1
        ) 
        const txSend = await Donatcontract.TotaldonateByUser(acc1.address)
        await txSend.wait
        expect(await ethers.utils.formatEther(txSend)).to.equal('20.0')
        }); 
});
