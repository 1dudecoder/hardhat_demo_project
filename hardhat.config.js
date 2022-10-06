
require("@nomicfoundation/hardhat-toolbox");
const ALCHEMY_API_KEY = "7X8Z1d03GM7fanoxpo5YwczMxKOMLQJ3";
const GOERLI_PRIVATE_KEY = "54d76f43daeff37e0d9599d429e25fb0d799760ce69d97d6a9b36418f9f150bc";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY]
    }
  }
};