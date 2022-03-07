const { AlchemyWebSocketProvider } = require("@ethersproject/providers");
const { expect } = require("chai");
const { ethers } = require("hardhat");
const DonatArtifact = require('../artifacts/contracts/Donat.sol/Donat.json')

//0x5FbDB2315678afecb367f032d93F642f64180aa3
async function currentBalance (address) {
  const rawBalance = await ethers.provider.getBalance(address)
  await console.log(ethers.utils.formatEther(rawBalance))

}  
async function main() {
    const [account] = await ethers.Wallet('${process.env.PRIVATE_KEY}')
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
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });