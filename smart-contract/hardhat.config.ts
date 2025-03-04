import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_URL, // "https://eth-sepolia.g.alchemy.com/v2/DXb3hlNT6JhlgGVxwd9WTn-LFkxVV3wp",
      accounts: [process.env.ACCOUNT_PRIVATE_KEY!],
      // accounts: [
      //   "52992f913a4652ebad54b405ca19421ff5907b96846034328d4e082ebca46241",
      // ],
    },
  },
};

export default config;
