require("@nomiclabs/hardhat-ethers")
require("solidity-coverage");
require("@nomiclabs/hardhat-web3");
require("dotenv").config()
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  solidity: "0.5.0",
  networks: {
    hardhat: {
    },
    rinkeby: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${process.env.ALCHEMY_KEY}`,
      accounts: [`${process.env.PRIVATE_KEY}`],
      gasLimit: 4000000,
      saveDeployments: true,
    }
  }
}

