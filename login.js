import { ethers, getDefaultProvider } from "./libs/ethers-5.6.2.esm.min.js";

window.provider = window.passport.connectEvm();

const connectPassport = async function(){
    window.accounts = await window.provider.request({ method: "eth_requestAccounts" });
    console.log(window.accounts)
    if (window.accounts){
        getUserInfo();
    }
}

const config = {
    baseConfig: new window.immutable.config.ImmutableConfiguration({
      environment: window.immutable.config.Environment.SANDBOX,
    }),
  };
  
  const client = new window.immutable.blockchainData.BlockchainData(config);
  
  const getUserInfo = async function(){
      window.userProfile = await window.passport.getUserInfo();
  }
  
  const passportLogout = async function(){
    let logout = await window.passport.logout();
    console.log(logout, "logout");
    window.userProfile = {};
}

// Insert Contract Address
const CONTRACT_ADDRESS = 'YOUR_CONTRACT_ADDRESS';
const PRIVATE_KEY = 'YOUR_PRIVATE_KEY';

const CONTRACT_ABI = [
  'function grantRole(bytes32 role, address account)',
  'function MINTER_ROLE() view returns (bytes32)',
  'function mint(address to, uint256 tokenId)',
  'function ownerOf(uint256 tokenId) view returns (address)',
  'function hasRole(bytes32 role, address account) view returns (bool)',
  'function totalSupply() view returns (uint256)'
];

