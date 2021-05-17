require("@nomiclabs/hardhat-waffle");
require("hardhat-deploy");
require("hardhat-deploy-ethers");
require("@nomiclabs/hardhat-etherscan");

const { mnemonic, projectId, etherscanKey } = require("./secret.json");

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.7.3",
  etherscan: {
    apiKey: etherscanKey
  },
  networks: {
    hardhat: {},
    kovan: {
      url: `https://kovan.infura.io/v3/${projectId}`,
      accounts: {
        mnemonic: mnemonic
      }
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
    }
  }
};

